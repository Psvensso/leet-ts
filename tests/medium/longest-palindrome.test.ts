/**
 * Problem: Longest Palindromic Substring
 * 
 * Given a string s, return the longest palindromic substring in s.
 * 
 * A palindrome is a string that reads the same backward as forward.
 * 
 * Example 1:
 * Input: s = "babad"
 * Output: "bab" or "aba" (both are valid answers)
 * 
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 * 
 * Example 3:
 * Input: s = "a"
 * Output: "a"
 */

// TODO: Implement this function
export function longestPalindrome(s: string): string {
  // Your implementation here
  return "";
}

// Bun test
import { expect, test, describe } from "bun:test";

describe("Longest Palindromic Substring", () => {
  test("Example cases", () => {
    const result1 = longestPalindrome("babad");
    expect(result1 === "bab" || result1 === "aba").toBe(true);
    
    expect(longestPalindrome("cbbd")).toBe("bb");
  });

  test("Single character", () => {
    expect(longestPalindrome("a")).toBe("a");
  });

  test("All same characters", () => {
    expect(longestPalindrome("aaaaa")).toBe("aaaaa");
  });

  test("No palindrome longer than 1", () => {
    expect(longestPalindrome("abcd")).toBe("a"); // 'a', 'b', 'c', or 'd' are all valid
  });

  test("Longer palindrome", () => {
    expect(longestPalindrome("racecar")).toBe("racecar");
  });

  test("Palindrome at the end", () => {
    expect(longestPalindrome("abcddcba")).toBe("abcddcba");
  });

  test("Multiple palindromes", () => {
    const result = longestPalindrome("aacabdkacaa");
    expect(result === "aca" || result === "acaa").toBe(true);
  });
});
