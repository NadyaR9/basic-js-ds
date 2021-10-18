const {
  Node
} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor() {
    this.roots = null;
  }
  root() {
    return this.roots;
  }

  add(data) {
    this.roots = addData(this.roots, data)

    function addData(node, data) {
      if (node === null) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data > node.data) {
        node.right = addData(node.right, data);
      } else {
        node.left = addData(node.left, data);
      }
      return node;
    }
  }

  has(data) {
    return hasData(this.roots, data)

    function hasData(node, data) {
      if (node === null) {
        return false;
      }
      if (node.data === data) {
        return true
      }
      return (data > node.data) ? hasData(node.right, data) : hasData(node.left, data);
    }
  }

  find(data) {
    return findData(this.roots, data)

    function findData(node, data) {
      if (node === null) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      return (data > node.data) ? findData(node.right, data) : findData(node.left, data);
    }
  }

  remove(data) {
    this.roots = removeNode(this.roots, data);

    function removeNode(node, data) {
      if (node === null) {
        return null;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        if (node.left === null) {
          node = node.right;
          return node;
        }
        if (node.right === null) {
          node = node.left;
          return node;
        }
        let rMin = node.right;
        while (rMin.left) {
          rMin = rMin.left;
        }
        node.data = rMin.data;
        node.right = removeNode(node.right, rMin.data);
        return node;
      }
    }
  }

  min() {
    if (this.roots === null) {
      return this;
    }
    let node = this.roots;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (this.roots === null) {
      return this;
    }
    let node = this.roots;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }

}