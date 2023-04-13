const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
    // remove line with error and write your code here
  }

  pop() {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items.pop();
    // remove line with error and write your code here
  }

  peek() {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items[this.items.length - 1];
    // remove line with error and write your code here
  }
}

module.exports = {
  Stack
};
