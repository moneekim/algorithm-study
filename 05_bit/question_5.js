/**
 Q. 다음 코드가 하는 일을 설명하라. 
    (( n & (n-l)) == 0 )
 */

function isZeroOrPowerOfTwo(n) {
  return (n & (n - 1)) == 0;
}

/**
i) n이 0일 경우: n & (n - 1)은 0 & -1이 되며, 결과는 0입니다. 이는 주어진 조건과 일치합니다.
ii) n이 2의 거듭제곱일 경우: 2의 거듭제곱인 수의 이진 표현은 1 뒤에 0만 오는 형태입니다(예: 2(10) = 10(2), 4(10) = 100(2), 8(10) = 1000(2)). 
이 경우 n - 1을 하면 1이었던 위치가 0이 되고, 그 뒤의 모든 0이 1로 바뀝니다. 
n과 n - 1을 AND 연산하면, 서로 다른 비트 때문에 결과는 0이 됩니다.
iii) n이 0도 아니고 2의 거듭제곱도 아닐 경우: n의 이진 표현에서 적어도 하나의 1이 더 있으며, 
이는 n - 1을 만들 때 그 1의 위치가 바뀌지 않는다는 것을 의미합니다. 
따라서, n & (n - 1)의 결과는 0이 아니게 됩니다.
 */

console.log(isZeroOrPowerOfTwo(0)); // true
console.log(isZeroOrPowerOfTwo(1)); // true (2^0)
console.log(isZeroOrPowerOfTwo(2)); // true (2^1)
console.log(isZeroOrPowerOfTwo(3)); // false
console.log(isZeroOrPowerOfTwo(4)); // true (2^2)
console.log(isZeroOrPowerOfTwo(5)); // false
