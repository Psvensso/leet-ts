/* 
function merge__fail_1(intervals: [number, number][]): [number, number][] {
  function tail(
    ints: [number, number][],
    result: [number, number][] = []
  ): [number, number][] {
    const current = ints[0]!;
    const currentHead = current[0];
    const currentTail = current[1];

    let next = ints[1];

    if (!next) {
      return result;
    }

    let i = 1;
    let nextHead = next[0];
    let nextTail = next[1];
    while (currentTail >= nextHead) {
      i++;
      if (!ints[i]) {
        result.push([currentHead, nextTail]);
        return result;
      }
      nextHead = ints[i]![0];
      nextTail = ints[i]![1];
    }
    result.push([currentHead, nextTail]);
    return tail(ints.slice(i), result);
  }

  return tail(intervals);
}
*/
function merge_fail2(inIntervals: [number, number][]): [number, number][] {
  const result: [number, number][] = [];
  let currentIndex = 0;
  const intervals = inIntervals.sort((a, b) => a[0] - b[0]);

  while (currentIndex <= intervals.length - 1) {
    let targetIndex = 0;
    while (
      intervals[currentIndex] &&
      intervals[targetIndex] &&
      intervals[currentIndex]![1] >= intervals[targetIndex]![0]
    ) {
      targetIndex++;
    }

    if (intervals![currentIndex]![1] > intervals![targetIndex - 1]![1]) {
      result.push([intervals![currentIndex]![0], intervals![currentIndex]![1]]);
    } else {
      result.push([
        intervals![currentIndex]![0],
        intervals![targetIndex - 1]![1],
      ]);
    }

    if (targetIndex < intervals.length) {
      currentIndex = targetIndex;
      targetIndex = targetIndex;
    } else {
      break;
    }
  }

  return result;
}

function merge(inIntervals: [number, number][]): [number, number][] {
  const result: [number, number][] = [];
  
  let intervals = inIntervals.sort((a, b) => a[0] - b[0]);

  if (!intervals[0]) {
    return [];
  }
  
  let currentIndex = 0;
  let cA = intervals[0][0];
  let cB = intervals[0][1];

  return result;
}

const r = merge([
  [1, 4],
  [0, 2],
  [3, 5],
]);

console.log(r);
