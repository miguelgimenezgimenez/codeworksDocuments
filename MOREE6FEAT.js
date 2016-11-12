/ Constants
// const name = 'llorenc';
// name = 2;
// Block scoped variables
// var
// let, const
function setVars() {
  let test, i;
  console.log(test);
  for (i = 0; i< 10; i++) {
    test = 'hello';
  }
  console.log(i);
}
// setVars();
// Arrow functions
function saySomethig() {
  console.log('something');
}
const sayHello = function() {
  console.log('hello');
}
const between = num => {
  return num > 2 && num < 10
};
const el = between(4);
// console.log(el);
const myDog = (name) => ({ name: name, type: 'dobbie' });
// console.log(myDog('buk'));
const nums = [1,2,3]
    .map(num => 2 * num)
.filter(num => num > 2);
const oldNums = [1,2,3]
  .map(function(num){
    return 2 * num;
  })
  .filter(function(num) {
    return num > 2;
  });
// console.log(nums);
// console.log(oldNums);
// console.log(el);
const cat = {
    name: 'Markov',
    sayHello: function () {
      console.log(this.name, 'says hello');
    },
    saySomething: () => {
    console.log(this.name, 'says something');
}
}
// console.log('This is the cat!!');
// cat.sayHello();
// cat.saySomething();
// console.log('---------------');
function Dog(name) {
  this.name = name;
  this.saySomething = function () {
    console.log(this.name, 'says something');
  }
  // `this` keyword in arrow functions is set at definition time
  // not at call time, like `function` functions
  this.sayHello = () => {
    console.log(this.name, 'say hello');
  }
}
// console.log('Dog pseudo classical!!');
// const dog = new Dog('Fante');
// dog.saySomething();
// dog.sayHello();
// console.log('------------');
// console.log('timeouts with');
// setTimeout(dog.saySomething, 1000);
// // `this` keyword is still bind to the dog, because we used arrow function
// setTimeout(dog.sayHello, 2000);
// console.log('--------------');
function Bird(name) {
  const bird = {};
  bird.name = name;
  bird.saySomething = function () {
    console.log(this.name, 'says something');
  }
  // arrow function binds `this` keyword to the scope at definition time
  bird.sayHello = () => {
    console.log(this.name, 'say hello');
  }
  return bird;
}
// console.log('Bird psuedo functional approach');
// const bird = Bird('Kerouac');
// bird.saySomething();
// bird.sayHello();
// console.log('--------------');
// Default params
function multiply(num1, num2 = 2) {
  return num1 * num2;
}
const result = multiply(3, 3);
// console.log(result);
// Trailing function params
function sumAll(num1, ...a) {
  // const a = Array.prototype.slice.call(arguments);
  console.log(a);
  console.log(num1);
  return a.reduce((acc, num) => acc + num);
}
// console.log(sumAll(10))
// Spread operator
const nums2 = [1,2,3];
const moreNums = [3,4,5].concat(nums2);
// console.log(moreNums);
const moreNums2 = [3,4,5, ...nums2];
// console.log(moreNums2);
// Template Literals
const name = 'Arol';
// console.log(`my teacher!: ${name}`);
// console.log(`
//   Hello!!
//           from another line!
//       "${name === 'alex' ? 'hi' : 'bye'}"
// `);
// Object properties shorthand
const age = 101;
const car = 'golf car';
const person = { name: 'grandpa', age, car };
// console.log(person);
// Object computed Property Names
const key = 'agen';
const child = { name: 'Joana', [key]: 10 };
// child[key] = 10;
// console.log(child);
// Object method properties
const plane = {
  takeOff() {
    console.log('taking off');
  }
}
// plane.takeOff();
// Modules (import / export)
// import * as utils from './people.js';
// console.log(utils);
// Class definitions
// const Shape = function(height, width) {
//   this.width = width;
//   this.height = height;
// }
//
// Shape.prototype.area = function() {
//   console.log(this.width, 'giving area');
// }
class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    console.log(this.width, 'giving area');
  }
}
const shape = new Shape(100, 100);
// shape.area = function() {
//   console.log('I override you!');
// }
// shape.area();
// Symbols
const mySym = Symbol('name');
const myOtherSym = Symbol('surname')
// const fullName = mySym + myOtherSym;
// console.log(fullName);
// Deconstruction
const griffin = { nickname: 'Griffo', sound: 'grreweadsffdsa' };
// const sound = griffin.sound;
// const nickname = griffin.nickname;
const { sound, nickname } = griffin;
console.log(nickname);
console.log(sound);
function deconstruct({ nickname, age }) {
  console.log(`Griffin name: ${nickname}`);
  console.log(age);
}
deconstruct(griffin);