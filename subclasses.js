// Functional sub-classing instantiation pattern

function Phone (number) {
  var result = {};
  result.number = number;
  Object.assign(result, phoneMethods);
  return result;
};

var phoneMethods = {};
phoneMethods.call = function(number){
  console.log('Calling', number);
};

var motorola = Phone(695323871);

function SmartPhone (number, email) {
  var result = Phne(number);
  result.email = email;
  Object.assign(result, smartPhoneMethods);
  return result;
}

var smartPhoneMethods = {};
smartPhoneMethods.email = function (email) {
  console.log('Emailing', email);
};

var iPhone = SmartPhone(642503917, 'jack@apple.com');

// Pseudoclassical sub-classing instantiation pattern

function Phone (number) {
  // var this = Object.create(Phone.prototype);
  this.number = number;
  // return this;
};

Phone.prototype.dial = function (number) {
  console.log('Dialing', number);
};

var motorola = new Phone(695323871);

function SmartPhone (number, email) {
  // var this = Object.create(SmartPhone.prototype);
  Phone.call(this, number);
  this.email = email;
  // return this;
}

SmartPhone.prototype = Object.create(Phone.prototype);
SmartPhone.prototype.constructor = SmartPhone;
SmartPhone.prototype.browse = function(url) {
  console.log('surfing on', url);
};

var iPhone = new SmartPhone(642503917, 'jack@apple.com');
