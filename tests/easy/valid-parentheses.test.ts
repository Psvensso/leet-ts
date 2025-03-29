/**
 * Problem: Valid Parentheses
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * 
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 * 
 * Example 1:
 * Input: s = "()"
 * Output: true
 * 
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 * 
 * Example 3:
 * Input: s = "(]"
 * Output: false
 */

// TODO: Implement this function
export function isValid(s: string): boolean {
  // Your implementation here
  return false;
}

// Bun test
import { expect, test, describe } from "bun:test";

describe("Valid Parentheses", () => {
  test("Simple valid cases", () => {
    expect(isValid("()")).toBe(true);
    expect(isValid("[]")).toBe(true);
    expect(isValid("{}")).toBe(true);
  });

  test("Mixed valid cases", () => {
    expect(isValid("()[]{}")).toBe(true);
    expect(isValid("{[]}")).toBe(true);
    expect(isValid("([{}])")).toBe(true);
  });

  test("Invalid cases", () => {
    expect(isValid("(]")).toBe(false);
    expect(isValid("([)]")).toBe(false);
    expect(isValid("]")).toBe(false);
  });

  test("Empty string", () => {
    expect(isValid("")).toBe(true);
  });

  test("Complex nested case", () => {
    expect(isValid("{[()]}")).toBe(true);
  });

  test("Unbalanced case", () => {
    expect(isValid("((")).toBe(false);
  });
});
