/**
 Q. 어떤 정수가 주어졌을 때 여러분은 이 정수의 비트 하나를 0에서 1로 바꿀 수 있다. 
 이때 1이 연속으로 나올 수 있는 가장 긴 길이를 구하는 코드를 작성하라.
 */

function flipBit(a) {
  // 전부 1이면 그 자체가 가장 긴 수열이다.
  if (~a === 0) return 32; // JavaScript에서 정수는 기본적으로 32비트.

  let currentLength = 0;
  let previousLength = 0;
  let maxLength = 1; // 적어도 1의 수열이 하나는 존재한다.

  while (a !== 0) {
    if ((a & 1) === 1) {
      // 현재 비트가 1인 경우
      currentLength++;
    } else if ((a & 1) === 0) {
      // 현재 비트가 0인 경우
      // 0으로 갱신(다음 비트가 0일 때) 혹은 currentLength로 갱신(다음 비트가 1일 때)
      previousLength = (a & 2) === 0 ? 0 : currentLength;
      currentLength = 0;
    }
    maxLength = Math.max(previousLength + currentLength + 1, maxLength);
    a >>>= 1; // 오른쪽으로 비트 시프트
  }

  return maxLength;
}

console.log(flipBit(1775)); // 8
