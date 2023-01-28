export const arrayRandomizer = (arr) => {
  for (let i = 0; arr.length; i++) {
    for (let j = 0; arr[i].length; j++) {
      arr[i][j] = Math.floor(Math.random(2));
    }
  }
};

console.log(
  arrayRandomizer([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
);
