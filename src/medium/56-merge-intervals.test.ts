function merge(intervals: [number, number][]): [number, number][] {
  const r: [number, number][] = [];
  let skip = false;
  for (let i = 0; i < intervals.length; i++) {
    if (skip) {
      skip = false;
      continue;
    }
    const [currentA, currentB] = intervals[i]!;

    if (!intervals[i + 1]) {
      r.push([currentA, currentB]);
      break;
    }

    const [nextA, nextB] = intervals[i + 1]!;

    //if overlap
    if (nextA <= currentB) {
      r.push([currentA, nextB]);
      skip = true; //skip the next iteration since we merged it with this
    } else {
      r.push([currentA, currentB]);
    }
  }

  return [...r];
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
