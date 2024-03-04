/**
 Q. 정수 A와 B를 2진수로 표현했을 때， A를 B로 바꾸기 위해 뒤집어야 하는 비트의 개수를 구히는 함수를 작성하라.
 */

function bitSwapRequired(a, b) {
  let count = 0;
  for (let c = a ^ b; c !== 0; c = c & (c - 1)) {
    count++;
  }
  return count;
}
