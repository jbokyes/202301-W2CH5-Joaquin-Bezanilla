export const checkForNeighbors = (arr, x, y) => {
  let currentCell = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      currentCell += arr[y + i][x + j];
    }
  }

  return currentCell - arr[x][y];
};

export const newCell = (arr) => {
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr[i].length - 1; j++) {
      let cell = arr[i][j];
      const neighbors = checkForNeighbors(arr, i, j);
      if (neighbors === 2 || neighbors === 3) {
        arr[i][j] = 1;
      }

      if (neighbors < 2 || neighbors > 3) {
        arr[i][j] = 0;
      }
    }
  }

  return arr;
};
