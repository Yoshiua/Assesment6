const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test("return an array", () => {
    expect(Array.isArray(shuffle([]))).toBe(true);
  });
  test("return an array of the same length", () => {
    expect(shuffle([]).length).toEqual(shuffle([]).length);
  });
test("return and array that contains all the items", () => {
  
})
});
