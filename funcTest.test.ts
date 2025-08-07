import { sum, multy, sub } from "./functionTest";

describe("sum function", () => {
  test("adds two positive numbers correctly", () => {
    expect(sum(3, 5)).toBe(8);
  });

  test("adds a positive and a negative number correctly", () => {
    expect(sum(10, -2)).toBe(8);
  });

  test("adds two negative numbers correctly", () => {
    expect(sum(-3, -5)).toBe(-8);
  });

  test("adds zero to a number correctly", () => {
    expect(sum(5, 0)).toBe(5);
  });
});
describe("multy function", () => {
  test("multy two postive numbers correctly ", () => {
    expect(multy(3, 5)).toBe(15);
  });

  test("multy positive and a negative number correctly", () => {
    expect(multy(10, -2)).toBe(-20);
  });

  test("multy two negative number curectly", () => {
    expect(multy(-2, -10)).toBe(20);
  });

  test("multy zero a number corectly", () => {
    expect(multy(3, 0)).toBe(0);
  });
});
describe("sub function", () => {
  test("sub two postive number Correctly", () => {
    expect(sub(3, 1)).toBe(2);
  });

  test("sub a positive and a negative number correctly", () => {
    expect(sub(3, -1)).toBe(4);
  });

  test("sub two negative number curectly", () => {
    expect(sub(-1, -3)).toBe(2);
  });

   test("sub zero a number corectly", () => {
    expect(sub(3, 0)).toBe(3);
  });
});
