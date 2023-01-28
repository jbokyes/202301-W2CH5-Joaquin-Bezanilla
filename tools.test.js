import { generateArray } from "./generateArray.js";
import { checkForNeighbors } from "./checkForNeighbors.js";
import { checkForWalls } from "./checkForWalls.js";
describe("Given generateArray function", () => {
  describe("When We have a squared array of arrays", () => {
    test("Then the length of [0,1,2] should be 3", () => {
      const r = generateArray(3);
      expect(r).toEqual([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);
    });
  });
});

describe("Given checkForNeighbors function", () => {
  describe("When we have cells checking for neighbors", () => {
    test("Then the neighbors of [[0,0,0],[0,1,0],[0,1,0]] should be 0", () => {
      const r = checkForNeighbors(
        [
          [0, 0, 0],
          [0, 1, 0],
          [0, 0, 0],
        ],
        1,
        1
      );
      expect(r).toEqual(0);
    });
  });
});

describe("Given checkForWalls function", () => {
  describe("When we have cells at any wall or edge", () => {
    test("We shouldn't check if they have neighbors", () => {
      const r = checkForWalls([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ]);
      expect(r).toEqual(0);
    });
  });
});
