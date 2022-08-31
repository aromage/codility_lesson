function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A.sort((a, b) => a - b);
  return A.find((a, index) => a !== index + 1) - 1;
}
