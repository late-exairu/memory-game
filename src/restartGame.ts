import startGame from "./startGame";
import IconSet from "./iconSet";

export default function restartGame() {
  resetHtml();
  startGame();

  const images = IconSet.getInstance();
  const selectDifficulty = document.querySelector(
    "#select-difficulty"
  ) as HTMLElement;
  selectDifficulty.addEventListener("change", images.setImages);
}

export const resetHtml = () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="game">
    <div id="intro">
      <h1>Memory Game</h1>

      <div class="description">
        <p>
          This is a memory game. The goal is to find all the matching pairs of 
          <select id="select-difficulty">
            <option value="numbers">numbers</option>
            <option value="colors">colors</option>
            <option value="socials">social icons</option>
          </select>.
        </p>
      </div>
      
      <button id="btn-start">
        Start Game
      </button>
    </div>
    <div id="grid"></div>
  </div>
`;
};
