/**
 Q. 배열의 원소를 왼쪽에서부터 차례로 트리에 삽입함으로써 이진 탐색 트리를 생성할 수 있다. 
 이진 탐색 트리 안에서 원소가 중복되지 않는다고할 때, 해당 트리를 만들어 낼 수 있는 가능한 배열을 모두 출력 하라.
 */

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// 이 함수는 가능한 모든 BST(Binary Search Tree) 배열 순서를 찾아 출력합니다.
// `root`: 현재 노드, `possibleInput`: 가능한 입력 값의 큐, `nextNode`: 다음에 방문할 노드의 큐
function BSTSequence(root, possibleInput = [], nextNodes = []) {
  if (root !== null) {
    possibleInput.push(root.data); // 현재 노드의 값을 가능한 입력 배열에 추가

    // 현재 노드의 자식들을 다음 노드 배열에 추가
    if (root.left !== null) nextNodes.push(root.left);
    if (root.right !== null) nextNodes.push(root.right);
  }

  if (nextNodes.length === 0) {
    console.log(`[${possibleInput.join(", ")}]`); // 가능한 모든 입력 배열 출력
    return;
  }

  for (let i = 0; i < nextNodes.length; i++) {
    let next = nextNodes[i]; // 다음에 방문할 노드 선택
    let newNextNodes = nextNodes.filter((_, index) => index !== i); // 선택된 노드를 제외한 나머지 노드들
    let newPossibleInput = [...possibleInput]; // 가능한 입력 배열 복사

    BSTSequence(
      next,
      newPossibleInput,
      newNextNodes.concat(next.left, next.right).filter((n) => n)
    ); // 재귀 호출
  }
}

// 사용 예시
let root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

BSTSequence(root); // 루트 노드부터 시작
