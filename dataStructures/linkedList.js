// 'use strict';
//
// // Stack
//
// function Stack () {
//   this.storage = {};
//   this.length = 0;
// }
//
//
// Stack.prototype.push = function (value) {
//   this.storage[this.length] = value;
//   this.length++;
// };
//
// Stack.prototype.pop = function () {
//   const item = this.storage[this.length-1];
//   delete this.storage[this.length-1];
//   this.length--;
//   return item;
// };
//
// Stack.prototype.size = function () {
//   return this.length;
// };
//
//
// // Queue
//
// function Queue () {
//   this.storage = {};
//   this.length = 0;
// }
//
//
// Queue.prototype.enqueue = function (value) {
//   this.storage[this.length] = value;
//   this.length++;
// };
//
// Queue.prototype.dequeue = function () {
//   const item = this.storage[0];
//   const newStorage = {};
//   delete this.storage[0];
//   const keys = Object.keys(this.storage);
//   for (let i = 0; i < keys.length; i++) {
//     newStorage[i] = this.storage[keys[i]];
//   }
//   this.storage = newStorage;
//   this.length--;
//   return item;
// };
//
// Queue.prototype.size = function () {
//   return this.length;
// };
//
// // Linked list
//
// function LinkedList () {
//   this.storage = {};
//   this.head = null;
//   this.tail = null;
//   this.length = 0;
// }
//
// function LinkedListNode (value) {
//   this.value = value;
//   this.next = null;
// }
//
// LinkedList.prototype.addToTail = function (value) {
//   const newNode = new LinkedListNode(value);
//   newNode.next = null;
//   this.tail = newNode;
//   this.storage[this.length] = newNode;
//   if (this.head === null) this.head = newNode;
//   else {
//     this.storage[this.length-1].next = newNode;
//   }
//   this.length++;
// };
//
// LinkedList.prototype.removeHead = function (value) {
//   const removeNode = this.head;
//   const newStorage = {};
//   delete this.storage[0];
//
//   if (this.length >= 1) {
//     const keys = Object.keys(this.storage);
//     for (let i = 0; i < keys.length; i++) {
//       newStorage[i] = this.storage[keys[i]];
//     }
//     this.storage = newStorage;
//     this.head = this.storage[0];
//     this.length--;
//   }
//   if (this.length === 0) {
//     this.head = null;
//     this.tail = null;
//   }
//   return removeNode;
//
// };
//
// LinkedList.prototype.removeHead = function (value) {
//   const removeNode = this.head;
//   const newStorage = {};
//   delete this.storage[0];
//
//   if (this.length >= 1) {
//     const keys = Object.keys(this.storage);
//     for (let i = 0; i < keys.length; i++) {
//       newStorage[i] = this.storage[keys[i]];
//     }
//     this.storage = newStorage;
//     this.head = this.storage[0];
//     this.length--;
//   }
//   if (this.length === 0) {
//     this.head = null;
//     this.tail = null;
//   }
//   return removeNode;
// };
//
// LinkedList.prototype.contains = function (value) {
//   if (this.length >= 1) {
//     const keys = Object.keys(this.storage);
//     for (let i = 0; i < keys.length; i++) {
//       if (this.storage[i].value === value) return true;
//     }
//   }
//   return false;
// };
//
//
// let linked = new LinkedList();
// linked.addToTail(5);
// linked.addToTail(4);
// linked.addToTail(3);
// linked.addHead(2);
//
//
//
this.head = this;
function add (value) {
  if (this.tail === undefined) {
    // this.head = this;
    this.tail = new  LinkedList(value);
  } else {
    add.call(this.tail, value);
  }
}
add.call(this,value);

Array.prototype.yarra = function ()	{
  var i = 0;
  while (i < this.length -1) {
    this.splice(i, 0, this.pop());
    i++
  }
  return this;
};
[1, 2,3, 4].yarra();