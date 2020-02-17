import BinarySearchTree from '../../classes/BinarySearchTree.js';

it('initializes a BST node correctly', () => {
  let tree = new BinarySearchTree(2);
  
  expect(tree.root).toEqual(null);
});