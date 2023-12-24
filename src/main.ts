import "./style.css";
import startGame from "./startGame";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="game">
    <div id="intro">
      <h1>Memory Game</h1>
      
      <button id="btn-start">
        Start Game
      </button>
    </div>
    <div id="grid"></div>
  </div>
`;

startGame();
