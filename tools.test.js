const { generateArray } = require("./tools");

describe("Given generateArray function", () => {
  describe("When We have a squared array of arrays of width/height of 10", () => {
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
