import handleItemClick from "./handleItemClick";
import { gridItemNumbers } from "./itemValues";
import IconSet from "./iconSet";

export default function generateGrid() {
  const grid = document.querySelector("#grid") as HTMLElement;
  grid.innerHTML = "";

  const iconInstance = IconSet.getInstance();
  const icons = iconInstance.getImages();
  console.log(icons);

  gridItemNumbers.forEach((item, index) => {
    grid.insertAdjacentHTML(
      "beforeend",
      `<div data-index=${index} class="grid-item hidden">
        <div class="front-face"></div>
        <div class="back-face">${icons[item]}</div>
      </div>`
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
