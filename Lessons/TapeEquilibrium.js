// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let sum1 = 0;
  let sum2 = A.reduce((acc, cur) => {
    return acc + cur;
  });

  let minDiff = Number.POSITIVE_INFINITY;
  for (var p = 0; p < A.length - 1; p++) {
    sum1 += A[p];
    sum2 -= A[p];
    var diff = sum2 - sum1;
    minDiff = Math.min(minDiff, Math.abs(diff));
  }

  return minDiff;
}
