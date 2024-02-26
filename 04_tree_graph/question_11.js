/**
Q. 이진 트리 클래스를 바닥부터 구현하려고 한다. 
노드의 삽입, 검색, 삭제뿐만 아니라 임의의 노드를 반환하는 getRandomNode() 메서드도 구현한다. 
모든 노드를 같은 확률로 선택해주는 getRandomNode 메서드를 설계하고 구현하라. 
또한 나머지 메서드는 어떻게 구현할지 설명하라.
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.size = 1; // 이 노드를 루트로 하는 서브트리의 크기
  }

  insertInOrder(value) {
    if (value <= this.value) {
      if (this.left === null) {
        this.left = new TreeNode(value);
      } else {
        this.left.insertInOrder(value);
      }
    } else {
      if (this.right === null) {
        this.right = new TreeNode(value);
      } else {
        this.right.insertInOrder(value);
      }
    }
    this.size++;
  }

  getIthNode(i) {
    const leftSize = this.left === null ? 0 : this.left.size;
    if (i < leftSize) {
      return this.left.getIthNode(i);
    } else if (i === leftSize) {
      return this;
    } else {
      // i가 왼쪽 서브트리 크기보다 클 경우, 오른쪽 서브트리에서 (i - (leftSize + 1))번째 노드를 찾는다.
      return this.right.getIthNode(i - (leftSize + 1));
    }
  }

  find(value) {
    if (value === this.value) {
      return this;
    } else if (value < this.value && this.left !== null) {
      return this.left.find(value);
    } else if (value > this.value && this.right !== null) {
      return this.right.find(value);
    }
    return null; // 찾지 못한 경우
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  size() {
    return this.root === null ? 0 : this.root.size;
  }

  getRandomNode() {
    if (this.root === null) return null;
    const i = Math.floor(Math.random() * this.size());
    return this.root.getIthNode(i);
  }

  insertInOrder(value) {
    if (this.root === null) {
      this.root = new TreeNode(value);
    } else {
      this.root.insertInOrder(value);
    }
  }
}
