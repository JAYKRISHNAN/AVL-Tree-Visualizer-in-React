## About

This is a visualisation tool for AVL tree in React.js with insert/delete and search operations

You can see try the live demo here - https://JAYKRISHNAN.github.io/AVL-Tree-Visualizer-in-React

AVL tree is a height balanced binary search tree that always ensure O(log(n)) time complexity for insert/delete/search operations

Height balancing is done by 4 types of AVL rotations depending on the type of height imbalance after a normal BST insertion/deletion

- Right Right Rotation
- Left Left Rotation
- Right Left Rotation
- Left Right Rotation

The tool also supports 3 types of DFS traversal

- In Order Traversal
- Pre Order Traversal
- Post Order Traversal

The tool also supports BFS traversal of the tree

## Space and Time Complexities

- Time complexity is O(log(n)) for all operations even in the worst case.

- For a normal BST, the worst case Time complexity is O(n)

- Space complexity is O(n log(n))

## Running tests

- run `npm run test` to run the test suite

## Deployment

- run `npm run build` to deploy the latest version to githib pages of the repository

## To Do

- Add animation visualisations for showing the traversals, insertion, deletion and rotations

### References

- https://en.wikipedia.org/wiki/Binary_search_tree
- https://en.wikipedia.org/wiki/AVL_tree
- https://www.cise.ufl.edu/~nemo/cop3530/AVL-Tree-Rotations.pdf
- https://github.com/boxgames1/binary-trees-app/tree/master/src
- https://codepen.io/anggaand123/pen/wexprZ

