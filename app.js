import { generateArray } from "./generateArray.js";
import { checkForNeighbors } from "./checkForNeighbors.js";
import { checkForWalls } from "./checkForWalls.js";
import { arrayRandomizer } from "./arrayRandomizer.js";
const sizeInput = 10;
let array1 = generateArray(sizeInput);
arrayRandomizer(array1);
for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array1[i].length; j++) {
    const wallCheck = checkForWalls(array1);
    if (wallCheck === 0) {
      const neighborCheck = checkForNeighbors(
        array1,
        array1.length - 1,
        array1[i].length - 1
      );
      if (neighborCheck === 2 || neighborCheck === 3) {
        array1[i][j] = 1;
      }

      if (neighborCheck < 2 || neighborCheck > 3) {
        array1[i][j] = 0;
      }
    }
  }
}

console.table(array1);
