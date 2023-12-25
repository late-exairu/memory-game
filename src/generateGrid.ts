import { range, shuffle } from "lodash-es";
import handleItemClick from "./handleItemClick";

export default function generateGrid() {
  const grid = document.querySelector("#grid") as HTMLElement;
  const gridItemNumbers = shuffle([...range(8), ...range(8)]);

  grid.innerHTML = "";

  gridItemNumbers.forEach((item) => {
    grid.insertAdjacentHTML(
      "beforeend",
      `<div class="grid-item hidden">
        <div class="front-face"></div>
        <div class="back-face">${item}</div>
      </div>
    `
    );
  });

  const gridItems = document.querySelectorAll("#grid .grid-item");
  gridItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.remove("hidden");
      item.addEventListener("click", handleItemClick);
    }, index * 50);
  });
}
