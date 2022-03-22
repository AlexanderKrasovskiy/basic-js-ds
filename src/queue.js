const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getUnderlyingList() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.head
  }

  enqueue( value ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.length === 0) {
      this.head = new ListNode(value);
      this.tail = this.head.next;
    } else if (this.length === 1) {
      this.head.next = new ListNode(value);
      this.tail = this.head.next;
    } else {
      this.tail.next = new ListNode(value);
      this.tail = this.tail.next;
    }

    this.length++
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let first = this.head.value;
    this.head = this.head.next;
    this.length--;
    return first
  }
}

module.exports = {
  Queue
};
