"use strict";

class Queue {
  constructor() {
    this._head = 0;
    this._tail = 0;
  }
  get size() {
    return this._tail - this._head;
  }
  enqueue(item) {
    this[`_${this._tail}`] = item;
    this._tail++;
    return this.size;
  }
  dequeue() {
    if (this.size) {
      const deltItem = [`_${this._head}`];
      delete this[`_${this._head}`];
      this._head++;
      return deltItem;
    }
  }
}

const queue1 = new Queue();
console.log(queue1.enqueue(45));
console.log(queue1.enqueue(46));
console.log(queue1.enqueue(47));
console.log(queue1.enqueue(48));
console.log(queue1);
console.log(queue1.dequeue());
console.log(queue1);
console.log(queue1.enqueue(49));