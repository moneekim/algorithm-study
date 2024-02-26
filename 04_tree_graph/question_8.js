/**
Q. 이진 트리에서 노드 두 개가 주어졌을 때, 이 두 노드의 첫 번째 공통 조상을 찾는 알고리즘을 설계하고 그 코드를 작성하라. 
자료구조 내에 추가로 노드를 저장해 두면 안 된다. 
반드시 이진 탐색 트리일 필요는 없다.
 */

function findCommonAncestor(root, p, q) {
    if (root === null || root === p || root === q) {
        return root;
    }

    let left = findCommonAncestor(root.left, p, q);
    let right = findCommonAncestor(root.right, p, q);

    // 만약 왼쪽과 오른쪽 서브트리 모두에서 노드가 발견되면, 현재 노드는 공통 조상이다,
    if (left !== null && right !== null) {
        return root;
    }

    // 왼쪽 또는 오른쪽 서브트리 중 하나에서만 노드가 발견되면, 해당 노드를 반환합니다.
    return left !== null ? left : right;
}

// 이진 트리 노드 정의
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// 사용 예시
let root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

let p = root.left; // 노드 5
let q = root.left.right.right; // 노드 4

let ancestor = findCommonAncestor(root, p, q);
console.log(ancestor ? ancestor.val : null); // 출력: 5
