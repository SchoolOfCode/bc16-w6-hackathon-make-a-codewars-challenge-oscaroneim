import portableMathDevice from "./main";
import { test, expect } from "vitest";

//A test to confirm its running
test("Tests have been activated", () => {
  console.log("Testing in progress..");
  expect().toEqual();
});
//Checks for invalid operators
test("handles invalid operator", () => {
  expect(portableMathDevice("invalid", 5, 3)).toBe("Invalid operator");
});
//Test to check that values can add together
test("adds values together", () => {
  expect(portableMathDevice("+", 5, 3)).toBe(8);
});
//Tests subtraction from value
test("subtracts a value from another value", () => {
  expect(portableMathDevice("-", 10, 4)).toBe(6);
});
//Tests for subtracting a larger number from a smaller number
test("subtracts a larger number from a smaller number", () => {
  expect(portableMathDevice("-", 3, 5)).toBe(-2);
});
//Tests that numbers can be multiplied
test("multiplies values together", () => {
  expect(portableMathDevice("*", 6, 7)).toBe(42);
});
//Tests the multiplication of negative numbers
test("multiplies two negative numbers", () => {
  expect(portableMathDevice("*", -4, -2)).toBe(8);
});
//Tests for division
test("divides value by a value", () => {
  expect(portableMathDevice("/", 15, 5)).toBe(3);
});
//Checks for division by zero
test("divides by zero", () => {
  expect(portableMathDevice("/", 10, 0)).toBe("Division by zero error");
});
//Tests the square root
test("calculates the square root", () => {
  expect(portableMathDevice("sqrt", 16)).toStrictEqual(4);
});
//Checks the even return
test("calculates if the value is even", () => {
  expect(portableMathDevice("%", 2)).toBe("Even");
});
//Checks the odd return
test("calculates if the value is odd", () => {
  expect(portableMathDevice("%", 3)).toBe("Odd");
});
