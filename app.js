import { generateArray } from "./generateArray.js";
import { checkForNeighbors } from "./checkForNeighbors.js";
import { checkForWalls } from "./checkForWalls.js";

let array1 = generateArray(10);
for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array1[i].length; j++) {
    let wallCheck = checkForWalls(array1);
    array1[i][j] = floor(Math.random(2));
    if (wallCheck === 0) {
      neighborCheck = checkForNeighbors(
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
