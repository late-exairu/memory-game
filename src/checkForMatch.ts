import { itemValues } from "./itemValues";

export const checkForMatch = () => {
  const flippedCards = document.querySelectorAll(".flipped");
  if (itemValues.firstItemValue === itemValues.secondItemValue) {
    console.log("Match!");
    flippedCards.forEach((card) => {
      card.classList.add("matched");
    });
  } else {
    console.log("No Match!");
  }
};
