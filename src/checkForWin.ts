export const checkForWin = () => {
  const matchedCards = document.querySelectorAll(".matched");
  if (matchedCards.length === 16) {
    console.log("You Win!");
    return true;
  }
};
