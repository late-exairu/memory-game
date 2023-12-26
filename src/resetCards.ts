export const resetCards = () => {
  const gridItems = document.querySelectorAll("#grid > div");
  gridItems.forEach((item) => {
    item.classList.remove("flipped");
  });
};
