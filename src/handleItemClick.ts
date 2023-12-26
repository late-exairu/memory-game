import restartGame from "./restartGame";
import { itemValues, gridItemNumbers } from "./itemValues";
import { resetCards } from "./resetCards";
import { resetValues } from "./resetValues";
import { checkForMatch } from "./checkForMatch";
import { checkForWin } from "./checkForWin";

export default function handleItemClick(e: Event) {
  const game = document.querySelector("#game") as HTMLElement;
  const target = e.currentTarget as HTMLElement;
  const itemIndex = target.dataset.index;

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
