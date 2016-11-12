// Functional instantiation pattern

function Person (age) {
  var res = {};
  res.age = age;
  Object.assign(res, personMethods);
  return res;
}

var personMethods = {};
personMethods.howOld = function () {
  console.log('Hi, I am ' + this.age);
};

var sarah = Person(28);
var mark = Person(35);

// Prototypal instantiation pattern

function Person (age) {
  var res = Object.create(Person.prototype);
  res.age = age;
  return res;
}

Person.prototype.howOld = function () {
  console.log('Hi, I am ' + this.age);
};

var sarah = Person(28);
var mark = Person(35);

// Pseudoclassical instantiation pattern

function Person (age) {
  // var this = Object.create(Person.prototype);
  this.age = age;
  // return this;
}

Person.prototype.howOld = function () {
  console.log('Hi, I am ' + this.age);
};

var sarah = new Person(28);
var mark = new Person(35);
