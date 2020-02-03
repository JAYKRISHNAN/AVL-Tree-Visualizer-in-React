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
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null){
        node.left = newNode;
      }
      else {
        this.insertNode(node.left, newNode);
      }
    }
    else if (newNode.value > node.value) {
      if (node.right === null){
        node.right = newNode;
      }
      else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    if (node === null){
      return null;
    }
    else if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
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

          node.right = this.deleteNode(node.right, temp.value);
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

  traverseInorder(node, fn) {
    if (node !== null) {
      this.traverseInorder(node.left, fn);
      fn(node);
      this.traverseInorder(node.right, fn);
    }
  }

  traversePreorder(node, fn) {
    if (node !== null) {
      fn(node);
      this.traversePreorder(node.left, fn);
      this.traversePreorder(node.right, fn);
    }
  }

  traversePostorder(node, fn) {
    if (node !== null) {
      this.traversePostorder(node.left, fn);
      this.traversePostorder(node.right, fn);
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
}

export default BinarySearchTree;
