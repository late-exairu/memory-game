import { range, shuffle } from "lodash-es";
import handleItemClick from "./handleItemClick";

export default function generateGrid() {
  const grid = document.querySelector("#grid") as HTMLElement;
  const gridItemNumbers = shuffle([...range(8), ...range(8)]);

  gridItemNumbers.forEach((item) => {
    grid.insertAdjacentHTML("beforeend", `<div>Grid! ${item}</div>`);
  });

  const gridItems = document.querySelectorAll("#grid > div");
  gridItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("grid-item");
      item.addEventListener("click", handleItemClick);
    }, index * 50);
  });
}
