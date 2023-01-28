import { checkForNeighbors } from "./checkForNeighbors.js";

export const checkForWalls = (arr) => {
  const rows = arr.length;
  let cellsStuckAtWall = 0;
  for (let i = 0; i < rows; i++) {
    const cols = arr[i].length;
    for (let j = 0; j < cols; j++) {
      if (
        arr[i][j] === 1 &&
        (i === 0 || i === cols - 1 || j === 0 || j === rows - 1)
      ) {
        cellsStuckAtWall++;
      }
    }
  }

  return cellsStuckAtWall;
};
