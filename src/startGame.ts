import { calculateGridSize } from "./calculateGridSize";
import generateGrid from "./generateGrid";

export default function startGame() {
  const startBtn = document.querySelector("#btn-start") as HTMLElement;
  const intro = document.querySelector("#intro") as HTMLElement;
  const game = document.querySelector("#game") as HTMLElement;
  const grid = document.querySelector("#grid") as HTMLElement;

  startBtn.addEventListener("click", () => {
    console.log("Game Started!");
    intro.classList.add("hidden");

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
  });
}
