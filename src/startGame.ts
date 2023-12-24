import { calculateGridSize } from "./calculateGridSize";
import generateGrid from "./generateGrid";

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

      generateGrid();

      game.insertAdjacentHTML("beforeend", "<p>Score:</p>");
      window.addEventListener("resize", calculateGridSize);
    }, 100);
  });
}
