import { generateArray } from "./generateArray.js";
import { newCell } from "./checkForNeighbors.js";
import { arrayRandomizer } from "./arrayRandomizer.js";
const sizeInput = 10;
let array1 = generateArray(sizeInput);
arrayRandomizer(array1);
console.table(array1);
setInterval(() => {
  const newCell1 = newCell(array1);
  console.table(newCell1);
  array1 = newCell1;
}, 1500);

/* For (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array1[i].length; j++) {
    if (neighborChecker === 2 || neighborChecker === 3) {
      array1[i][j] = 1;
    } else {
      array1[i][j] = 0;
    }
  }
} */
