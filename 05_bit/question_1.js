/**
Q. 두 개의 32비트 수 N과 M이 주어지고， 비트 위치 i와 j가 주어졌을 때， M을 N에 삽입하는 메서드를 구현하라.
M은 N의 j번째 비트에서 시작하여 i 번째 비트에서 끝난다.
j번째 비트에서 i번째 비트까지에는 M을 담기 충분 한공간이 있다고 가정한다. 
다시 말해， M= 10011라면， j와 i 사이에 적어도 다섯 비트가 있다고 가정해도 된다는 것이다. 
j=3이고 i=2인 경우처럼 M을 삽입할 수 없는 상황은 생기지 않는다고 봐도 된다.
 */

function updateBits(n, m, i, j) {
  // n에서 i부터 j 비트까지를 0으로 만들기 위한 마스크 생성
  // 예: i = 2, j = 4. 결과는 11100011.
  // 여기서는 8비트 마스크를 만드는 것으로 가정

  let allOnes = ~0; // 모든 비트가 1이 된다.

  // j 앞에는 1을 두고 나머지는 0으로 설정. left = 11100000
  let left = allOnes << (j + 1);

  // i 뒤에는 1을 두고 나머지는 0으로 설정. right = 00000011
  let right = (1 << i) - 1;

  // i와 j 사이의 비트들을 제외한 나머지는 1. mask = 11100011
  let mask = left | right;

  // j부터 i까지를 0으로 설정하고 m을 그 자리에 삽입
  let n_cleared = n & mask; // j부터 i까지 0으로 만든다.
  let m_shifted = m << i; // m을 올바른 위치로 옮긴다.

  return n_cleared | m_shifted; // OR 연산으로 합친다.
}
