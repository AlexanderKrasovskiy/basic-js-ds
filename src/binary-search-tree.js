const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.treeRoot = null
  }

  root() {
    return this.treeRoot
  }

  add( data ) {
    this.treeRoot = addWithin(this.treeRoot, data);

    function addWithin(node, value) {
      if (!node) return new Node(value);

      if (node.data === value) return node;

      if (value < node.data) {
        node.left = addWithin(node.left, value)
      } else {
        node.right = addWithin(node.right, value)
      };

      return node
    }
  }

  has( data ) {
    return checkWithin(this.treeRoot, data);

    function checkWithin(node, value) {
      if (!node) return false;

      if (node.data === value) return true;

      if (value < node.data) {
        return checkWithin(node.left, value)
      } else {
        return checkWithin(node.right, value)
      }
    }
  }

  find( data ) {
    return findWithin(this.treeRoot, data);

    function findWithin(node, value) {
      if (!node) return null;

      if (node.data === value) return node;

      if (value < node.data) {
        return findWithin(node.left, value)
      } else {
        return findWithin(node.right, value)
      }
    }
  }

  remove( data ) {
    this.treeRoot = removeWithin(this.treeRoot, data);

    function removeWithin(node, value) {
      if (!node) return null;

      if (node.data > value) {
        node.left = removeWithin(node.left, value);
        return node
      } else if (node.data < value) {
        node.right = removeWithin(node.right, value);
        return node
      } else {
        // no leaves
        if (!node.left && !node.right) return null;
        // one right leaf
        if (!node.left) {
          return node.right
          // node = node.right;
          // return node
        };
        // one left leaf
        if (!node.right) {
          return node.left
          // node = node.left;
          // return node
        };

        // both children are present
        // find min in right tree (or max in left tree) and ressign to node.data
        let minInRight = node.right;
        while (minInRight.left) {
          minInRight = minInRight.left
        };
        // reassign minInRight to node.data
        node.data = minInRight.data;
        // remove minInRight
        node.right = removeWithin(node.right, minInRight.data);

        return node
      };

    }
  }

  min() {
    return findMin(this.treeRoot);

    function findMin(node) {
      if (!node) return null;
      if (!node.left) return node.data;
      return findMin(node.left)
    }
  }

  max() {
    return findMax(this.treeRoot);

    function findMax(node) {
      if (!node) return null;
      if (!node.right) return node.data;
      return findMax(node.right)
    }
  }
}

module.exports = {
  BinarySearchTree
};