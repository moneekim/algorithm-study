/**
Q. 두 개의 커다란 이진 트리 T1과 T2가 있다고 하자.
T1이 T2 보다 훨씬 크다고 했을 때, T2가 T1의 하위 트리(subtree)인지 판별하는 알고리즘을 만들어라.
T1 안에 있는 노드 n의 하위 트리가 T2와 동일하면, T2는 T1의 하위 트리다. 
다시 말해 , T1에서 노트 n의 아래쪽을 끊어 냈을 때 그 결과가 T2와 동일해야 한다.
 */

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function containsTree(t1, t2) {
  let string1 = getOrderString(t1, "");
  let string2 = getOrderString(t2, "");
  return string1.indexOf(string2) !== -1;
}

function getOrderString(node, sb) {
  if (node == null) {
    sb += "X "; // 널 (null) 표현 문자 추가
    return sb;
  }
  sb += node.data + " "; // 루트 추가
  sb = getOrderString(node.left, sb); // 왼쪽 추가
  sb = getOrderString(node.right, sb); // 오른쪽 추가
  return sb;
}

/*
// 재귀적 방식
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isSubtree(T1, T2) {
  // T2가 비어있으면 T1의 하위 트리로 간주
  if (T2 == null) return true;
  // T1이 비어있으면 T2를 T1의 하위 트리로 간주할 수 없음
  if (T1 == null) return false;
  // 루트 노드가 같은 경우, 하위 구조도 동일한지 확인
  if (isSameTree(T1, T2)) return true;
  // 현재 노드에서 찾을 수 없다면 왼쪽, 오른쪽 하위 트리에서 찾기
  return isSubtree(T1.left, T2) || isSubtree(T1.right, T2);
}

function isSameTree(node1, node2) {
  // 두 노드 모두 비어있으면 true
  if (node1 == null && node2 == null) return true;
  // 한쪽 노드만 비어있으면 false
  if (node1 == null || node2 == null) return false;
  // 노드의 값이 다르면 false
  if (node1.value !== node2.value) return false;
  // 현재 노드가 같다면 자식 노드들도 같은지 재귀적으로 확인
  return (
    isSameTree(node1.left, node2.left) && isSameTree(node1.right, node2.right)
  );
}
*/
