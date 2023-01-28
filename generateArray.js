export const generateArray = (w) => {
  const arr = new Array(w);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(w);
  }

  for (let k = 0; k < arr.length; k++) {
    for (let o = 0; o < arr[k].length; o++) {
      arr[k][o] = 0;
    }
  }

  return arr;
};

console.log(generateArray(3));
