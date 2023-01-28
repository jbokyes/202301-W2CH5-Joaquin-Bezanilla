export const checkForNeighbors = (arr, x, y) => {
  let currentCell = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      currentCell += arr[y + i][x + j];
    }
  }

  return currentCell - arr[x][y];
};
