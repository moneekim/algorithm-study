/**
Q. 0.72와 같이 0과 1 사이의 실수가 double 타입으로 주어졌을 때,
그 값을 2진수 형태로 출력하는 코드를 작성하라. 
길이가 32 이하인 문자열로 2진수로 정확하게 표현할 수 없다면 ERROR를 출력하라. 
*/

/**
원리: 실수 부분을 2로 곱해가며 각 단계에서의 정수 부분(0 또는 1)을 결과에 추가
이 과정은 1에 도달하거나 무한 반복되기 전까지 계속됨
실수 부분이 정확히 0이 되면 변환이 완료되며, 그렇지 않으면 무한히 계속될 수 있음
*/

function printBinary(num) {
  if (num >= 1 || num <= 0) {
    return "ERROR";
  }
  let binary = "."; // 변환된 2진수를 저장할 문자열을 초기화. 소수점을 나타내기 위해 점(.)으로 시작

  while (num > 0) { // 실수 부분이 0이 될 때까지 반복
    if (binary.length >= 32) {
      return "ERROR";
    }
    let r = num * 2;
    if (r >= 1) {
      binary += "1";
      num = r - 1; // 이미 처리(binary에 1이 더해짐)된 '1'에 해당하는 부분을 제거
    } else {
      binary += "0";
      num = r;
    }
  }
  return binary;
}
