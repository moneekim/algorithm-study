/* 
Q.  양의 정수가 하나 주어졌다. 
이 숫자를 2진수로 표기했을 때 1 bit의 개수가 같은 숫자 중에서 가장 작은 수와 가장 큰 수를 구하라.

--> '가장 작은 수' = 해당 숫자보다 그 다음으로 큰 숫자 (해당 숫자보다 그 다음으로 큰데 가장 작은 수)
    '가장 큰 수' = 해당 숫자보다 그 다음으로 작은 숫자 (해당 숫자보다 작은데 그 다음으로 작은 숫자)

    1. 가장 작은 수 구하기(getNext 함수)
    초기값: 2진수 11011001111100  (1 bit 개수 = 9) 
    -> 1단계. 11011011111100 (p위치에서 0 -> 1)
    -> 2단계. 11011010000000 (p위치 오른쪽 모두 0으로)
    -> 3단계. 11011010001111 (c1 - 1 개만큼 1을 맨 오른쪽 삽입) => 1 bit 개수 = 9

    2. 가장 큰 수 구하기(getPrev 함수)
    초기값: 2진수 10011110000011 (1 bit 개수 = 7)
    -> 1단계. 10011100000000 (오른쪽부터 p위치까지 모두 0으로) 1->0
    -> 2단계. 10011101110000 (c1 + 1 개만큼 1을 p위치 오른쪽 삽입) => 1 bit 개수 = 7
*/

// getNext: n보다 그 다음으로 큰 숫자를 구하는 함수
function getNext(n) {
  let c = n;
  let c0 = 0; // n의 가장 오른쪽부터 시작하여 처음으로 1이 나오기 전까지의 0의 개수
  let c1 = 0; // 그 다음 연속된 1의 개수
  // ex. 10진수 138 = 2진수 11011001111100 => c0 = 2, c1 = 5

  while ((c & 1) === 0 && c !== 0) {
    // 오른쪽 끝부터 시작하여 처음으로 1이 나오기 전까지의 연속된 0의 개수 세기
    c0++;
    c >>= 1;
  }
  while ((c & 1) === 1) {
    // 첫 번째 1 비트가 나타난 후 연속된 1의 개수 세기
    c1++;
    c >>= 1;
  }

  if (c0 + c1 === 31 || c0 + c1 === 0) {
    return -1;
  }
  let p = c0 + c1;
  n |= 1 << p; // 1단계. 11011011111100 (p위치에서 0 -> 1)
  n &= ~((1 << p) - 1); // 2단계. 11011010000000 (p위치 오른쪽 모두 0으로)
  n |= (1 << (c1 - 1)) - 1; // 3단계. 11011010001111 (c1 - 1 개만큼 1을 맨 오른쪽 삽입) => 1 bit 개수 = 9
  return n;
}

// getPrev: n보다 그 다음으로 작은 숫자를 구하는 함수
function getPrev(n) {
  let temp = n;
  let c0 = 0;
  let c1 = 0;

  while ((temp & 1) === 1) {
    c1++;
    temp >>= 1;
  }

  if (temp === 0) return -1;

  while ((temp & 1) === 0 && temp !== 0) {
    c0++;
    temp >>= 1;
  }
  let p = c0 + c1;
  n &= ~0 << (p + 1); // n의 p+1번째 비트부터 가장 낮은 비트까지를 0으로 설정하고, 나머지는 그대로 유지
  let mask = (1 << (c1 + 1)) - 1; // 오른쪽에서부터 c1 + 1개의 비트가 모두 1
  n |= mask << (c0 - 1);

  /**
    -> 1단계. 10011100000000 (오른쪽부터 p위치까지 모두 0으로) 1->0
    -> 2단계. 10011101110000 (c1 + 1 개만큼 1을 p위치 오른쪽 삽입) => 1 bit 개수 = 7
   */

  return n;
}
