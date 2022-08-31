function solution(A) {
  // write your code in JavaScript (Node.js 6.4.0)
  const length = A.length;

  var result = A.reduce((result, value) => {
    result[value] = true;
    return result;
  }, {});

  for (var i = 1; i <= length; i++) {
    if (!result[i]) {
      return 0;
    }
  }

  return 1;
}
