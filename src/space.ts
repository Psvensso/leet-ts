function minOperations(grid: number[][], x: number): number {
  if (grid.length === 1) {
    return 0;
  }

  let result = 0;
  const cells = grid.flat();

  //Try to find the target (or uni-value) that all cells should be
  const total = cells.reduce((acc, x) => acc + x, 0); //sum all cells
  const avg = total / cells.length; //find the average

  //If the average is not divisible by x,
  //then it is impossible to make all cells the same
  const target = avg - (avg % x);

  //Since we now know the target value we just iterate over all cells
  //and calculate the number of operations needed to make all cells the same
  for (const cell of cells) {
    //Final check, if the cell is not divisible by x, then it is impossible
    //to make all cells the same
    if (cell % x != 0) {
      result = -1;
      break;
    }

    //Calculate the number of operations needed to make the
    // cell the same as the target
    if (cell < target) {
      result += (target - cell) / x;
    } else {
      result += (cell - target) / x;
    }
  }

  return result;
}

const r = minOperations(
  [
    [931, 128],
    [639, 712],
  ],
  73
);
//12
console.log(r);
