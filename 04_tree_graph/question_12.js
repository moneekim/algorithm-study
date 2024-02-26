/**
Q. 각 노드의 값이 정수(음수 및 양수)인 이진트리가 있다.
이때 정수의 합이 특정 값이 되도록 하는 경로의 개수를 세려고 한다. 
경로가 꼭 루트에서 시작해서 말단 노드에서 끝날 필요는 없지만 반드시 아래로 내려가야 한다.
즉, 부모 노드에서 자식 노드로만 움직일 수 있다. 
알고리즘을 어떻게 설계할 것 인가?
 */

function pathSum(root, sum) {
  if (root === null) return 0;

  // _pathSum 함수: 현재 노드에서 시작하는 모든 경로를 탐색하며, 주어진 합을 만족하는 경로의 수를 반환합니다.
  function _pathSum(node, currentSum) {
    if (node === null) return 0;

    currentSum += node.val;
    let pathCount = currentSum === sum ? 1 : 0;

    // 왼쪽 및 오른쪽 자식 노드로 재귀 호출을 하여 경로의 합을 계속 계산합니다.
    pathCount += _pathSum(node.left, currentSum);
    pathCount += _pathSum(node.right, currentSum);

    return pathCount;
  }

  // 현재 노드에서 시작하는 모든 경로 탐색 + 현재 노드의 왼쪽 및 오른쪽 서브트리에 대해 같은 작업을 재귀적으로 반복
  return _pathSum(root, 0) + pathSum(root.left, sum) + pathSum(root.right, sum);
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
