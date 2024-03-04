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
  }

  // 모든 노드를 배열에 추가하는 함수
  _toArray(nodes = []) {
    nodes.push(this);
    if (this.left !== null) {
      this.left._toArray(nodes);
    }
    if (this.right !== null) {
      this.right._toArray(nodes);
    }
    return nodes;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insertInOrder(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      this._insertInOrder(this.root, value);
    }
  }

  _insertInOrder(node, value) {
    if (value <= node.value) {
      if (!node.left) {
        node.left = new TreeNode(value);
      } else {
        this._insertInOrder(node.left, value);
      }
    } else {
      if (!node.right) {
        node.right = new TreeNode(value);
      } else {
        this._insertInOrder(node.right, value);
      }
    }
  }

  find(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return current;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null; // 값이 트리에 없는 경우
  }

  delete(value) {
    this.root = this._deleteNode(this.root, value);
  }

  _deleteNode(node, value) {
    if (node === null) {
      return null;
    }
    if (value < node.value) {
      node.left = this._deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this._deleteNode(node.right, value);
    } else {
      // 노드를 삭제해야 하는 경우
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }

      // 두 자식이 모두 있는 경우
      node.value = this._findMinValue(node.right);
      node.right = this._deleteNode(node.right, node.value);
    }
    return node;
  }

  _findMinValue(node) {
    let minv = node.value;
    while (node.left) {
      minv = node.left.value;
      node = node.left;
    }
    return minv;
  }

  getRandomNode() {
    if (!this.root) return null;
    const allNodes = this.root._toArray();
    const i = Math.floor(Math.random() * allNodes.length);
    return allNodes[i];
  }
}


// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//     this.size = 1;
//   }

//   insertInOrder(value) {
//     if (value <= this.value) {
//       if (this.left === null) {
//         this.left = new TreeNode(value);
//       } else {
//         this.left.insertInOrder(value);
//       }
//     } else {
//       if (this.right === null) {
//         this.right = new TreeNode(value);
//       } else {
//         this.right.insertInOrder(value);
//       }
//     }
//     this.size++;
//   }

//   getIthNode(i) {
//     const leftSize = this.left === null ? 0 : this.left.size;
//     if (i < leftSize) {
//       return this.left.getIthNode(i);
//     } else if (i === leftSize) {
//       return this;
//     } else {
//       // i가 왼쪽 서브트리 크기보다 클 경우, 오른쪽 서브트리에서 (i - (leftSize + 1))번째 노드를 찾는다.
//       return this.right.getIthNode(i - (leftSize + 1));
//     }
//   }

//   find(value) {
//     if (value === this.value) {
//       return this;
//     } else if (value < this.value && this.left !== null) {
//       return this.left.find(value);
//     } else if (value > this.value && this.right !== null) {
//       return this.right.find(value);
//     }
//     return null; // 찾지 못한 경우
//   }
// }

// class Tree {
//   constructor() {
//     this.root = null;
//   }

//   size() {
//     return this.root === null ? 0 : this.root.size;
//   }

//   getRandomNode() {
//     if (this.root === null) return null;
//     const i = Math.floor(Math.random() * this.size());
//     return this.root.getIthNode(i);
//   }

//   insertInOrder(value) {
//     if (this.root === null) {
//       this.root = new TreeNode(value);
//     } else {
//       this.root.insertInOrder(value);
//     }
//   }
// }
