/**
56. Merge Intervals
Solved
Medium
Topics
Companies
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104

Accepted
171 / 171 testcases passed
Pesven
submitted at Mar 30, 2025 10:43
 */
function merge(inIntervals: [number, number][]): [number, number][] {
  let intervals = inIntervals.sort((a, b) => a[0] - b[0]);

  if (!intervals[0]) {
    return [];
  }

  return intervals.reduce<[number, number][]>((acc, node, i) => {
    const previousNode = acc[acc.length - 1];
    if (!previousNode) {
      acc.push(node);
      return acc;
    }

    const [curA, curB] = node;
    const [prevA, prevB] = previousNode;

    if (curA <= prevB) {
      if (curB > prevB) {
        previousNode[1] = Math.max(curB, prevB);
        return acc;
      }
    } else {
      acc.push(node);
    }

    return acc;
  }, []);
}
