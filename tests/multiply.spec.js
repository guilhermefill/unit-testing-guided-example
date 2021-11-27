const { multiply } = require('./../calculator.js');
describe('Multiply', () => {
    // Our tests will be added here.
    test("should be the result of the multiplication of both values", () => {
        const result = multiply(2, 2);
        expect(result).toBe(4);
  });
    test("called with a negative and a positive integer. The value returned should be a negative number", () => {
        const result = multiply(2,-2)
        expect(result).toBe(-4)
    })
    test("unction is called with any number and a number 0. The value returned should be 0", () => {
        const result = multiply(2,0)
        expect(result).toBe(0)
    })
});