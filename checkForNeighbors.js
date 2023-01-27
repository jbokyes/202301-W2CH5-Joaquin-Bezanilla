export const checkForNeighbors = (arr, x, y) => {
  let currentCell = 0;
  for (let k = -1; k <= 1; k++) {
    for (let o = -1; o <= 1; o++) {
      currentCell += arr[y + k][x + o];
    }
  }

  return currentCell - arr[x][y];
};

const arr1 = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
console.log(checkForNeighbors(arr1, 1, 1));
