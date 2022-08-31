function solution(A, K) {
  const moduleK = K % A.length; // 회전이 한바퀴를돌면 다시 원점이 됨

  return [
    ...A.slice(A.length - moduleK, A.length),
    ...A.slice(0, A.length - moduleK),
  ];
}
