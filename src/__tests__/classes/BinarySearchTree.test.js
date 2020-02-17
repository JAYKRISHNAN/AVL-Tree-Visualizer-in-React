import BinarySearchTree from '../../classes/BinarySearchTree.js';

it('initializes a BST correctly', () => {
  const tree = new BinarySearchTree();

  expect(tree.root).toEqual(null);
});

it('inserts nodes in a BST manner', () => {
  const tree = new BinarySearchTree();
  tree.insert(5);
  tree.insert(6);
  tree.insert(4);

  expect(tree.root.value).toEqual(5);
  expect(tree.root.left.value).toEqual(4);
  expect(tree.root.right.value).toEqual(6);
});

it('height balances tree correctly in case of an imbalance after insertion', () => {
  const tree = new BinarySearchTree();
  tree.insert(5);
  tree.insert(6);
  tree.insert(7);

  expect(tree.root.value).toEqual(6);
  expect(tree.root.left.value).toEqual(5);
  expect(tree.root.right.value).toEqual(7);
});

it('height balances tree correctly in case of an imbalance after deletion', () => {
    const tree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(6);
    tree.insert(4);
    tree.insert(3);
    tree.delete(6);

    expect(tree.root.value).toEqual(4);
    expect(tree.root.left.value).toEqual(3);
    expect(tree.root.right.value).toEqual(5);
  });

  it('does In Orer traversal correctly', () => {
    const tree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(6);
    tree.insert(4);
    let values = [];
    tree.traverseInOrder(tree.root, function(node) {
      values.push(node.value);
    });

    expect(values).toEqual([4,5,6]);
  });

  it('does Pre Orer traversal correctly', () => {
    const tree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(6);
    tree.insert(4);
    let values = [];
    tree.traversePreOrder(tree.root, function(node) {
      values.push(node.value);
    });
    
    expect(values).toEqual([5,4,6]);
  });

  it('does Post Orer traversal correctly', () => {
    const tree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(6);
    tree.insert(4);
    let values = [];
    tree.traversePostOrder(tree.root, function(node) {
      values.push(node.value);
    });
    
    expect(values).toEqual([4,6,5]);
  });

  it('does DFS traversal correctly', () => {
    const tree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(6);
    tree.insert(4);
    tree.insert(12);
    tree.insert(2);
    tree.insert(1);
    tree.insert(54);
    tree.insert(64);

    let values = [];
    tree.breadthFirstSearch(tree.root, function(node) {
      values.push(node.value);
    });
    
    expect(values).toEqual([5,2,12,1,4,6,54,64]);
  });