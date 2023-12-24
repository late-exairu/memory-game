export const calculateGridSize = () => {
  const grid = document.querySelector("#grid") as HTMLCanvasElement;
  const gridWidth = grid.clientWidth;
  const gridHeight =
    gridWidth - parseInt(window.getComputedStyle(grid).paddingTop, 10) * 2;
  grid.style.height = gridHeight + "px";

  return { gridWidth, gridHeight };
};
