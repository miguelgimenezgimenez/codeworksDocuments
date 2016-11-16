/**
 * Created by miguelgimenez on 16/11/16.
 */
'use strict';


const helpers = require('./hash-table-helpers');

// These are your helpers, they're used to generate
// the storage and get the hash respectively. For more
// information check the "hash-table-helpers.js" file.
const Storage = helpers.Storage;
const hash = helpers.hash;

function HashTable () {
  this.size = 20;
  this.storage = new Storage(20);

}

HashTable.prototype.insert = function (key, value) {
  let myKey = hash(key, this.size);
  let storedValue = this.storage.get(myKey);
  if (storedValue) storedValue.push([key, value]);
  else this.storage.set(myKey,[key, value] );

};

HashTable.prototype.retrieve = function (key) {
  let myKey = hash(key, this.size);
  if(this.storage.get(myKey) === undefined) return undefined;
  let arrPos = this.storage.get(myKey);
  for (let i = 0; i < arrPos.length; i++) {
    if (arrPos[i][0] ===key) return arrPos[i][1];
  }
};
HashTable.prototype.remove = function (key) {
  let myKey = hash(key, this.size);
  if(this.storage.get(myKey) === undefined) return false;
  let arrPos = this.storage.get(myKey);
  for (let i = 0; i < arrPos.length; i++) {
    if (arrPos[i][0] ===key) {
      arrPos.splice(i, 1);
      // this.storage.set(myKey,arrPos );
      return true;
    }
  }
  return false;

};


// console.log(hash('ab',5));
// console.log(hash('ac',5));
console.log(hash('ad',5));
console.log(hash('an',5));
let hashTable = new HashTable();
hashTable.insert('hello', 'world');
// hashTable.insert('hello', 'frac');
// hashTable.insert('world', 'hello');
// hashTable.retrieve('hello');
// console.log(hashTable.retrieve('hello'));
hashTable.remove('hello');
// console.log(hashTable.retrieve('hello'));
// console.log(hashTable.retrieve('hello'));


module.exports = HashTable;
