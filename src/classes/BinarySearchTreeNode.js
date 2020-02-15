class BinarySearchTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null;
      this.active = false;
    }

    leftHeight() {
      if (!this.left) {
        return 0;
      }
      return this.left.height() + 1;
    }

    rightHeight() {
      if (!this.right) {
        return 0;
      }
      return this.right.height() + 1;
    }

    height() {
      return Math.max(this.leftHeight(), this.rightHeight());
    }

    balanceFactor() {
      return (this.leftHeight() - this.rightHeight());
    }

    setLeft(node) {
      if (this.left) {
        this.left.parent = null;
      }
      this.left = node;
      if (this.left) {
        this.left.parent = this;
      }
      return this;
    }

    setRight(node) {
      if (this.right) {
        this.right.parent = null;
      }
      this.right = node;
      if (node) {
        this.right.parent = this;
      }
      return this;
    }
}

export default BinarySearchTreeNode;
