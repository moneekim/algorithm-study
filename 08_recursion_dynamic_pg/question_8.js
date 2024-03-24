/**
 * Q. 문자열이 주어졌을 때 모든 경우의 순열을 계산하는 메서드를 작성하라.
 * 문자는 중복되어 나타날 수 있지만， 나열된 순열은 서로 중복되면 안된다.
 */

function printPerms(s) {
  let result = [];
  let map = buildFreqTable(s);
  generatePerms(map, "", s.length, result);
  return result;
}

// 문자열 내 각 문자의 빈도수를 계산하여 Map 객체로 반환
// s: aabc
function buildFreqTable(s) {
  let map = new Map();
  for (let c of s) {
    if (!map.has(c)) {
      map.set(c, 0);
    }
    map.set(c, map.get(c) + 1);
  }
  console.log(s, map);
  return map; // s가 aab map = Map(2) { 'a' => 2, 'b' => 1 }
}

// 재귀적으로 순열을 생성하며, 각 문자의 사용 횟수를 추 적하여 중복 생성을 방지
function generatePerms(map, prefix, remaining, result) {
  // 순열이 완성되었을 경우
  if (remaining === 0) {
    result.push(prefix);
    return;
  }
  // 남은 문자들을 이용해서 나머지 순열을 생성
  // ex. { 'a' => 2, 'b' => 1, ‘c’ => 1 }
  for (let [c, count] of map.entries()) {
    if (count > 0) {
      map.set(c, count - 1); // 빈도 업데이트 // { 'a' => 1, 'b' => 1, ‘c’ => 1 }
      generatePerms(map, prefix + c, remaining - 1, result); // prefix: a, remaining: 3
      // 재귀 호출 후에는 원래 문자의 카운트를 복원
      map.set(c, count);
    }
  }
}

console.log(printPerms("abc"));
console.log(printPerms("aab"));
console.log(printPerms("aabc"));
