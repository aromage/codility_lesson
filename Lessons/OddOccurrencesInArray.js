function solution(A) {
  // write your code in JavaScript (Node.js 6.4.0)
  return A.slice(1).reduce(function (odd, current) {
    return odd ^ current;
  }, A[0]);
}
