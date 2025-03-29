import { describe, expect, it } from "bun:test";

/**
 * Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward.
 *
 * Example 1:
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 *
 * Example 2:
 * Input: "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 *
 * Constraints:
 * - s consists only of printable ASCII characters.
 *
 * @param s The string to check
 * @returns true if the string is a palindrome, false otherwise
 */
export function isPalindrome(s: string): boolean {
  // TODO: Implement this function
  return false;
}

describe("Valid Palindrome", () => {
  it("should return true for empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("should return true for single character", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  it("should handle alphanumeric characters only", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  it("should ignore case", () => {
    expect(isPalindrome("rAceCar")).toBe(true);
  });

  it("should return false for non-palindromes", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  it("should handle strings with spaces correctly", () => {
    expect(isPalindrome("race a car")).toBe(false);
  });

  it("should handle strings with numbers", () => {
    expect(isPalindrome("12321")).toBe(true);
    expect(isPalindrome("123")).toBe(false);
  });

  it("should handle strings with mixed alphanumeric characters", () => {
    expect(isPalindrome("A1b2C3c2b1a")).toBe(true);
  });
});
