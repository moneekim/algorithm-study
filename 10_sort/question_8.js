/**
 * Q. 1부터 N(<= 32,000)까지의 숫자로 이루어진 배열이 있다.
 * 배열엔 중복된 숫자가 나타날 수 있고， N이 무엇인지는 알 수 없다.
 * 사용 가능한 메모리가 4KB일 때, 중복된 원소를 모두 출력하려면 어떻게 할 수 있을까?
 */

function printDuplicates(arr) {
  // 32,000비트를 표현하기 위해 Int32Array 사용, 32,000 / 32 = 1000
  const bitArray = new Int32Array(1000).fill(0);

  arr.forEach((num) => {
    // num에 해당하는 비트의 위치를 찾기
    const bitArrayIndex = Math.floor(num / 32);
    const bitPosition = num % 32;

    // 해당 비트가 설정되어 있는지 확인
    if ((bitArray[bitArrayIndex] & (1 << bitPosition)) !== 0) {
      // 중복된 숫자 출력
      console.log(num);
    } else {
      // 비트 설정
      bitArray[bitArrayIndex] |= 1 << bitPosition;
    }
  });
}
