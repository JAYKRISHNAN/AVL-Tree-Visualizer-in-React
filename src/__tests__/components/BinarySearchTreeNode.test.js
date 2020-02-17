import React from 'react';
import ReactDOM from 'react-dom';
import BinarySearchTreeNode from '../../components/BinarySearchTreeNode.js';
import BinarySearchTree from "../../classes/BinarySearchTree.js";

it('renders without crashing', () => {
  const tree = new BinarySearchTree();
  tree.insert(2);
  const div = document.createElement('div');

  ReactDOM.render(<BinarySearchTreeNode node={tree.root}/>, div);
});