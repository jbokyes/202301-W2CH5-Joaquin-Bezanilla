import { generateArray } from "./generateArray.js";
import { checkForNeighbors } from "./checkForNeighbors.js";

describe("Given generateArray function", () => {
  describe("When We have a squared array of arrays", () => {
    test("Then the length of [0,1,2] should be 3", () => {
      const r = generateArray(3);
      expect(r).toEqual(3);
    });
    test("Then length of [0,1,2,3] should be 4", () => {
      const r = generateArray(4);
      expect(r).toEqual(4);
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
