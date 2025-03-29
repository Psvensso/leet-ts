/**
 * Problem: Merge Intervals
 * 
 * Given an array of intervals where intervals[i] = [starti, endi], 
 * merge all overlapping intervals, and return an array of the non-overlapping
 * intervals that cover all the intervals in the input.
 * 
 * Example 1:
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
 * 
 * Example 2:
 * Input: intervals = [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 */

// TODO: Implement this function
export function merge(intervals: number[][]): number[][] {
  // Your implementation here
  return [];
}

// Bun test
import { expect, test, describe } from "bun:test";

describe("Merge Intervals", () => {
  test("Example case 1", () => {
    expect(merge([[1,3],[2,6],[8,10],[15,18]])).toEqual([[1,6],[8,10],[15,18]]);
  });

  test("Example case 2", () => {
    expect(merge([[1,4],[4,5]])).toEqual([[1,5]]);
  });

  test("No overlap", () => {
    expect(merge([[1,2],[3,4],[5,6]])).toEqual([[1,2],[3,4],[5,6]]);
  });

  test("Complete overlap", () => {
    expect(merge([[1,4],[2,3]])).toEqual([[1,4]]);
  });

  test("Multiple merges required", () => {
    expect(merge([[1,4],[2,6],[5,10],[9,12]])).toEqual([[1,12]]);
  });

  test("Single interval", () => {
    expect(merge([[1,5]])).toEqual([[1,5]]);
  });

  test("Unsorted intervals", () => {
    expect(merge([[15,18],[1,3],[8,10],[2,6]])).toEqual([[1,6],[8,10],[15,18]]);
  });
});
