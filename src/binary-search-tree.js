const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    if(this.rootNode === undefined) return null
    return this.rootNode;
    // remove line with error and write your code here
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }
    let currentNode = this.rootNode;
    while (currentNode) {
      if (data === currentNode.data) return;
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
    // remove line with error and write your code here
  }

  has(data) {
    let current = this.rootNode;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
    // remove line with error and write your code here
  }  

  find(data) {
    let current = this.rootNode;
    while (current) {
      if (data === current.data) {
        return current;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
    // remove line with error and write your code here
  }

  remove(data) {
    let current = this.rootNode;
    let parent = null;
    let direction = '';
    while (current) {
      if (data === current.data) {
        break;
      }
      if (data < current.data) {
        parent = current;
        current = current.left;
        direction = 'left';
      } else {
        parent = current;
        current = current.right;
        direction = 'right';
      }
    }
    if (!current) {
      return;
    }
    if (!current.left && !current.right) {
      if (!parent) {
        this.rootNode = null;
      } else {
        parent[direction] = null;
      }
    }
    else if (!current.left || !current.right) {
      const child = current.left || current.right;
      if (!parent) {
        this.rootNode = child;
      } else {
        parent[direction] = child;
      }
    }
    else {
      let successorParent = current;
      let successor = current.right;
      while (successor.left) {
        successorParent = successor;
        successor = successor.left;
      }
      if (successorParent !== current) {
        successorParent.left = successor.right;
        successor.right = current.right;
      }
      successor.left = current.left;
      if (!parent) {
        this.rootNode = successor;
      } else {
        parent[direction] = successor;
      }
    }
    // remove line with error and write your code here
  }  

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};