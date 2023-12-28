import restartGame from "./restartGame";
import { itemValues, gridItemNumbers } from "./itemValues";
import { checkForMatch } from "./checkForMatch";
import { checkForWin } from "./checkForWin";

export const resetValues = () => {
  itemValues.firstItemValue = null;
  itemValues.secondItemValue = null;
};

export const resetCards = () => {
  const gridItems = document.querySelectorAll("#grid > div");
  gridItems.forEach((item) => {
    item.classList.remove("flipped");
  });
};

export default function handleItemClick(e: Event) {
  const game = document.querySelector("#game") as HTMLElement;
  const target = e.currentTarget as HTMLElement;
  const itemIndex = target.dataset.index
    ? Number.parseInt(target.dataset.index)
    : 0;

  if (target.classList.contains("flipped")) {
    console.log("Already flipped!");
    return;
  }

  const clickItem = () => {
    if (itemValues.firstItemValue === null) {
      itemValues.firstItemValue = gridItemNumbers[itemIndex];
      target.classList.add("flipped");
      console.log("firstItemValue = " + itemValues.firstItemValue);
    } else if (itemValues.secondItemValue === null) {
      itemValues.secondItemValue = gridItemNumbers[itemIndex];
      target.classList.add("flipped");
      console.log("secondItemValue = " + itemValues.secondItemValue);
      checkForMatch();
    } else if (
      itemValues.firstItemValue !== null &&
      itemValues.secondItemValue !== null
    ) {
      console.log("resetting cards");
      resetCards();
      resetValues();
      clickItem();
    }
  };

  clickItem();

  if (checkForWin()) {
    game.insertAdjacentHTML(
      "beforeend",
      `<div>
         <p>You Win!</p>
         <button id="btn-restart">Restart Game</button>
       </div>`
    );

    document
      .querySelector("#btn-restart")!
      .addEventListener("click", restartGame);
  }
}
