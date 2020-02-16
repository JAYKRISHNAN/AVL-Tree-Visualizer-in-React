import BinarySearchTreeNode from "./BinarySearchTreeNode";
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new BinarySearchTreeNode(value);
    if (this.root === null){
      this.root = newNode;
    }
    else {
      this.insertNode(this.root, newNode);
    }

    // Move up to the root and check balance factors along the way.
    let currentNode = this.find(this.root, value);
    while (currentNode) {
      this.balance(currentNode);
      currentNode = currentNode.parent;
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null){
        node.setLeft(newNode);
      }
      else {
        this.insertNode(node.left, newNode);
      }
    }
    else if (newNode.value > node.value) {
      if (node.right === null){
        node.setRight(newNode);
      }
      else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);

    if(this.root){
      this.balance(this.root);
    }
  }

  deleteNode(node, value) {
    if (node === null){
      return null;
    }
    else if (value < node.value) {
      node.setLeft(this.deleteNode(node.left, value));
      return node;
    } else if (value > node.value) {
      node.setRight(this.deleteNode(node.right, value));
      return node;
    } else {
        if (node.left === null && node.right === null) { //node to be deleted is the leaf node
            node = null;
            return node;
        }
        else if ((node.left === null) || (node.right === null)){ // only one child for the node to be deleted
          if (node.left === null) {
            node = node.right;
            return node;
          } else {
            node = node.left;
            return node;
          }
        }

        else { // two children for the node to be deleted
          let temp = this.findSmallestNode(node.right);
          node.value = temp.value;

          node.setRight(this.deleteNode(node.right, temp.value));
          return node;
        }
    }
  }

  findSmallestNode(node) {
    if (node.left === null){
      return node;
    }
    else {
      return this.findSmallestNode(node.left);
    }
  }

  balance(node) {
    if (node.balanceFactor() > 1) {
      if (node.left.balanceFactor() > 0) {
        this.rotateLeftLeft(node);
      } else if (node.left.balanceFactor < 0) {
        this.rotateLeftRight(node);
      }
    } else if (node.balanceFactor() < -1) {
      if (node.right.balanceFactor() < 0) {
        this.rotateRightRight(node);
      } else if (node.right.balanceFactor() > 0) {
        this.rotateRightLeft(node);
      }
    }
  }

  rotateLeftLeft(rootNode) {
    const leftNode = rootNode.left;
    rootNode.setLeft(null);
    if (rootNode.parent) {
      rootNode.parent.setLeft(leftNode);
    } else if (rootNode === this.root) {
      this.root = leftNode;
    }
    if (leftNode.right) {
      rootNode.setLeft(leftNode.right);
    }
    leftNode.setRight(rootNode);
  }

  rotateLeftRight(rootNode) {
    const leftNode = rootNode.left;
    rootNode.setLeft(null);

    const leftRightNode = leftNode.right;
    leftNode.setRight(null);

    if (leftRightNode.left) {
      leftNode.setRight(leftRightNode.left);
      leftRightNode.setLeft(null);
    }

    rootNode.setLeft(leftRightNode);
    leftRightNode.setLeft(leftNode);

    this.rotateLeftLeft(rootNode);
  }

  rotateRightLeft(rootNode) {
    const rightNode = rootNode.right;
    rootNode.setRight(null);

    const rightLeftNode = rightNode.left;
    rightNode.setLeft(null);

    if (rightLeftNode.right) {
      rightNode.setLeft(rightLeftNode.right);
      rightLeftNode.setRight(null);
    }

    rootNode.setRight(rightLeftNode);
    rightLeftNode.setRight(rightNode);
    this.rotateRightRight(rootNode);
  }

  rotateRightRight(rootNode) {
    const rightNode = rootNode.right;
    rootNode.setRight(null);

    if (rootNode.parent) {
      rootNode.parent.setRight(rightNode);
    } else if (rootNode === this.root) {
      this.root = rightNode;
    }

    if (rightNode.left) {
      rootNode.setRight(rightNode.left);
    }

    rightNode.setLeft(rootNode);
  }

  traverseInOrder(node, fn) {
    if (node !== null) {
      this.traverseInOrder(node.left, fn);
      fn(node);
      this.traverseInOrder(node.right, fn);
    }
  }

  traversePreOrder(node, fn) {
    if (node !== null) {
      fn(node);
      this.traversePreOrder(node.left, fn);
      this.traversePreOrder(node.right, fn);
    }
  }

  traversePostOrder(node, fn) {
    if (node !== null) {
      this.traversePostOrder(node.left, fn);
      this.traversePostOrder(node.right, fn);
      fn(node);
    }
  }

  find(node, value) {
    if (node === null){
      return null;
    }
    else if (value < node.value) {
      return this.find(node.left, value);
    }
    else if (value > node.value){
      return this.find(node.right, value);
    }
    else {
      return node;
    }
  }

  breadthFirstSearch(node, fn) {
    const queue = [node];
    while(queue.length > 0){
      const currentNode = queue.shift();
      fn(currentNode);
      if (currentNode.left){
        queue.push(currentNode.left);
      }
      if(currentNode.right){
        queue.push(currentNode.right);
      }
    }
  }

  levelOrder() {
    if (!this.root) return [];
    let array = [];
    search(this.root, 1, 1);

    function search(node, level, index) {
      if (node) {
        const count = Math.pow(2, level - 1);
        if (array.length < level) {
          array.push(Array(count).fill(""));
        }
        var arr = array[level - 1];
        arr[index - 1] = node;
        const leftIndex = 2 * index - 1;
        const rightIndex = 2 * index;
        search(node.left, level + 1, leftIndex);
        search(node.right, level + 1, rightIndex);
      } else {
        return;
      }
    }

    return array;
  }

  pause(milliseconds) {
    var date = new Date();
    while ((new Date()) - date <= milliseconds) { /* Do nothing */ }
  }
}

export default BinarySearchTree;
