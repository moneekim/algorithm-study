/**
 * Q. 어떤 아이가 n개의 계단을 오른다.
 * 한 번에 1계단 오르기도 하고， 2계단이나 3계단을 오르기도 한다.
 * 계단을 오르는 방법이 몇 가지가 있는지 계산하는 메서드를 구현하라.
 */

// i. brute-force 방법
/**
n번째 계단을 오르는 경우는 다음 중 하나가 된다.
- (n-1)번째 계단에서 한 계단 올라가기
- (n-2)번째 계단에서 두 계단 올라가기
- (n-3)번째 계단에서 세 계단 올라가기
 */
function countWays(n) {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else {
    return countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
  }
}

// ii. 메모이제이션 방법
function countWays_memoization(n) {
  const memo = new Array(n + 1).fill(-1);
  return countWaysHelper(n, memo);
}

function countWaysHelper(n, memo) {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else if (memo[n] > -1) {
    return memo[n];
  } else {
    memo[n] =
      countWaysHelper(n - 1, memo) +
      countWaysHelper(n - 2, memo) +
      countWaysHelper(n - 3, memo);
    return memo[n];
  }
}

console.log(countWays_memoization(10));