import { describe, it, expect } from "vitest";
import sumPlus10, { factorial, fizzBuzz, max } from "./basic";

describe("sumPlus10", () => {
  it("should return the sum of a + b + 10 when a, b is integer", () => {
    // AAA Pattern
    // Arrange - set up the test
    const a = 5;
    const b = 10;

    // Act - execute the test
    const result = sumPlus10(a, b);

    // Assert - check the result
    expect(result).toBe(25);
  });

  it("should return Nan when any of the parameter is not provided", () => {
    expect(sumPlus10(1)).toBeNaN;
  });
});

describe("max", () => {
  it("should return the first argument if it is greater than the second", () => {
    expect(max(10, 4)).toBe(10);
  });

  it("should return the second argument if it is greater than the first", () => {
    expect(max(4, 10)).toBe(10);
  });

  it("should return undefined if both arguments are equal", () => {
    expect(max(10, 10)).toBe(10);
  });
});

describe("fizzBuzz", () => {
  it("should return fizzbuzz if the number is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
  });

  it("should return fizz if the number is divisible by 3", () => {
    expect(fizzBuzz(3)).toBe("fizz");
  });

  it("should return buzz if the number is divisible by 5", () => {
    expect(fizzBuzz(5)).toBe("buzz");
  });

  it("should return the number if it is not divisible by 3 and 5", () => {
    expect(fizzBuzz(7)).toBe(7);
  });
});

describe("factorial", () => {
  it("should return 1 if the number is 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return the factorial of the number", () => {
    expect(factorial(4)).toBe(24);
  });

  it("should return undefined if the number is negative", () => {
    expect(factorial(-5)).toBeNaN;
  });

  it("should return undefined if the number is not provided", () => {
    expect(factorial()).toBeUndefined;
  });
});
