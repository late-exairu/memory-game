import restartGame from "./restartGame";
import itemValues from "./itemValues";

export default function handleItemClick(e: Event) {
  const game = document.querySelector("#game") as HTMLElement;
  const target = e.currentTarget as HTMLElement;
  // console.log("Item Clicked!");

  if (target.classList.contains("flipped")) {
    // console.log("Already flipped!");
    return;
  }

  if (itemValues.firstItemValue === null) {
    itemValues.firstItemValue = target.textContent;
    target.classList.add("flipped");
    // console.log("firstItemValue = " + itemValues.firstItemValue);
    // console.log("target.textContent = " + target.textContent);
  } else if (itemValues.secondItemValue === null) {
    itemValues.secondItemValue = target.textContent;
    target.classList.add("flipped");
    // console.log("secondItemValue = " + itemValues.secondItemValue);
    // console.log("second target.textContent = " + target.textContent);

    checkForMatch();
  }

  // console.log(itemValues);

  if (
    itemValues.firstItemValue === null &&
    itemValues.secondItemValue === null
  ) {
    // console.log("resetting cards");
    setTimeout(() => {
      resetCards();
      resetValues();
    }, 1000);
  }

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

  // console.log("firstItemValue = " + firstItemValue);
}

const resetCards = () => {
  const gridItems = document.querySelectorAll("#grid > div");
  gridItems.forEach((item) => {
    item.classList.remove("flipped");
  });
};

const resetValues = () => {
  itemValues.firstItemValue = null;
  itemValues.secondItemValue = null;
};

const checkForMatch = () => {
  const flippedCards = document.querySelectorAll(".flipped");
  if (itemValues.firstItemValue === itemValues.secondItemValue) {
    console.log("Match!");
    flippedCards.forEach((card) => {
      card.classList.add("matched");
    });
    resetValues();
  } else {
    console.log("No Match!");
    resetValues();
  }
};

const checkForWin = () => {
  const matchedCards = document.querySelectorAll(".matched");
  if (matchedCards.length === 16) {
    console.log("You Win!");
    return true;
  }
};
