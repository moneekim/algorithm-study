/**
 * Q. 철자 순서만 바꾼 문자열(anagram)이 서로 인접하도록 문자열 배열을 정렬하는 메서드를 작성하라.
 */

function sortAnagrams(arr) {
  const map = {}; // 결과 반환을 위한 배열

  arr.forEach((str) => {
    const sorted = str.split("").sort().join("");
    if (!map[sorted]) {
      map[sorted] = [str];
    } else {
      map[sorted].push(str);
    }
  });

  return Object.values(map).flat();
}

const apple = "apple";
console.log('apple split', apple.split(""));
console.log('apple sort', apple.split("").sort());

sortAnagrams(["apple", "elppa", "elapp", "abc", "bca", "cab"]);
