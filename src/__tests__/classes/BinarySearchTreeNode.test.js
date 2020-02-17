import BinarySearchTreeNode from '../../classes/BinarySearchTreeNode.js';

it('initializes a BST correctly', () => {
  let node = new BinarySearchTreeNode(2);

  expect((node.value)).toEqual(2);
  expect((node.left)).toEqual(null);
  expect((node.right)).toEqual(null);
  expect((node.active)).toEqual(false);
});