import { calculateGridSize } from "./calculateGridSize";

export default function startGame() {
  const startBtn = document.querySelector("#btn-start") as HTMLCanvasElement;
  const intro = document.querySelector("#intro") as HTMLCanvasElement;
  const game = document.querySelector("#game") as HTMLCanvasElement;
  const grid = document.querySelector("#grid") as HTMLCanvasElement;

  startBtn.addEventListener("click", () => {
    console.log("Start Game!");
    intro.classList.add("hidden");

    setTimeout(() => {
      grid.animate(
        [
          { height: "0", opacity: "0" },
          { height: `${calculateGridSize().gridHeight} px`, opacity: "1" },
        ],
        {
          duration: 300,
        }
      );

      calculateGridSize();

      grid.insertAdjacentHTML(
        "beforeend",
        `<div>Grid!</div><div>Grid!</div><div>Grid!</div><div>Grid!</div>
      <div>Grid!</div><div>Grid!</div><div>Grid!</div><div>Grid!</div>
      <div>Grid!</div><div>Grid!</div><div>Grid!</div><div>Grid!</div>
      <div>Grid!</div><div>Grid!</div><div>Grid!</div><div>Grid!</div>`
      );

      const gridItems = document.querySelectorAll("#grid > div");

      // add class to each grid item with a delay
      gridItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("grid-item");
        }, index * 100);
      });

      game.insertAdjacentHTML("beforeend", "<p>Score:</p>");
      window.addEventListener("resize", calculateGridSize);
    }, 100);
  });
}
