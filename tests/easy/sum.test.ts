/**
 * Problem: Two Sum
 *
 * Given an array of integers nums and an integer target, return indices of the two numbers
 * such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the
 * same element twice.
 *
 * You can return the answer in any order.
 *
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1] (Because nums[0] + nums[1] == 9)
 */

// TODO: Implement this function
export function twoSum(nums: number[], target: number): number[] {
  // Your implementation here
  return [];
}

// Bun test
import { describe, expect, test } from "bun:test";

describe("Two Sum", () => {
  test("Example case", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual(expect.arrayContaining([0, 1]));
  });

  test("Negative numbers", () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual(
      expect.arrayContaining([2, 4])
    );
  });

  test("Duplicate numbers", () => {
    expect(twoSum([3, 3], 6)).toEqual(expect.arrayContaining([0, 1]));
  });

  test("Larger array", () => {
    expect(twoSum([2, 5, 8, 11, 15, 7], 9)).toEqual(
      expect.arrayContaining([0, 5])
    );
  });
});
