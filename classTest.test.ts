import { Calculator } from "./classTest";

describe("Calculator class", () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("add method", () => {
    test("should add two positive numbers correctly", () => {
      expect(calculator.add(3, 5)).toBe(8);
    });

    test("should add a positive and a negative number correctly", () => {
      expect(calculator.add(10, -2)).toBe(8);
    });

    test("should add two negative numbers correctly", () => {
      expect(calculator.add(-3, -5)).toBe(-8);
    });
  });

  describe("sub method", () => {
    test("should sub two positive numbers correctly", () => {
      expect(calculator.sub(5, 3)).toBe(2);
    });

    test("should sub a positive and a negative number correctly", () => {
      expect(calculator.sub(10, -2)).toBe(12);
    });

    test("should sub two negative numbers correctly", () => {
      expect(calculator.sub(-3, -5)).toBe(2);
    });
  });

  describe("multy method", () => {
    test("should multy two positive numbers correctly", () => {
      expect(calculator.multy(4, 3)).toBe(12);
    });

    test("should multy a positive and a negative number correctly", () => {
      expect(calculator.multy(5, -2)).toBe(-10);
    });

    test("should multy by zero correctly", () => {
      expect(calculator.multy(5, 0)).toBe(0);
    });
  });
});
