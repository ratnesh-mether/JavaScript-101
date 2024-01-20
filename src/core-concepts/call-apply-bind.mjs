// Call Apply and Bind.
let printData = function (place, city, state) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " " +
      place +
      " " +
      city +
      " " +
      state,
  );
};

let data = {
  firstName: "Ratnesh",
  lastName: "Mether",
};

let data2 = {
  firstName: "Shraddha",
  lastName: "Takale",
};

/* printData.call(data, "Baramati", "Pune"); */
/* printData.call(data2, "Hadapsar", "Pune"); */

/* printData.apply(data, ["Baratamati", "Pune"]); */

/* let result = printData.bind(data); */

/* result('Baramati', 'Pune'); */

// Polyfill for bind

Function.prototype.mybind = function proto(...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...param2) {
    obj.apply(args[0], [...params, ...param2]);
  };
};

let result = printData.mybind(data, "BMT", "PN");
/* result("MH"); */

function basic() {
  console.log("Hello World!");
}

let obj = {};

let r = basic.bind(basic);

/* r(); */

Function.prototype.newBind = function (...args) {
  let obj = this;
  return function () {
    obj.call(args[0]);
  };
};

let rr = basic.newBind(obj);
/* rr(); */

/// Function Currying

let a = function (name, surname) {
  console.log("Hello" + " " + name + " " + surname);
};

let objName = {
  name: "Ratnesh",
};

let rrr = a.bind(objName, "Baban");

rrr("Ratnesh");

function hello(greet) {
  return function (name) {
    console.log(greet + " " + name);
  };
}

let wish = hello("Hello");
wish("Ratnesh");

//  Mock

var obj = {
  name: "vivek",
  surname: "Gholve",
};

function getNameCall(hometown, state) {
  console.log(this.name + " " + this.surname);
  console.log(hometown + " " + state);
}

getNameCall.call(obj, "BMT", "MH");

function getNameApply(...args) {
  console.log(this.name + " " + this.surname);
  console.log(args[0] + " " + args[1]);
}

getNameApply.apply(obj, ["BMT", "MH"]);

function getNameBind(hometown, state) {
  console.log(this.name + " " + this.surname);
  console.log(hometown + " " + state);
}

const getDetails = getNameBind.bind(obj, "BMT", "MH");

getDetails();

// ------------------

let printData = function (message1, message2, message3, message4) {
  console.log(message1, " " + message2 + " " + this.name + " " + this.lastname);
  console.log(message3);
  // console.log(message4)
};
const person = {
  name: "John",
  lastname: "Deer",
};

// printData.call(person, "Hello", "baban", "sham");

// printData.apply(person, ["hello", "world", "ram", "hanuman"]);

// const bindFunction = printData.bind(person, ["hello", "world", "ram"]);

// bindFunction("cool", "fool");

function xyz(welcome, goa) {
  console.log(welcome, this.name + " " + this.lastname, goa);
}

Function.prototype.myBind = function (...args) {
  let point = this;
  let params = args.slice(1);
  return (...args2) => {
    point.apply(args[0], [...params, ...args2]);
  };
};

// const a = xyz.myBind(person, "welcome");
// a("goa")

Function.prototype.myCall = function (...args) {
  obj = args[0];
  params = args.slice(1);
  obj.fn = this;
  console.log(params);
  obj.fn(...params);
};

xyz.myCall(person, "Hello", "world");
// xyz.call(person, "Hello", "world")

Function.prototype.myApply = function (...args) {
  obj = args[0];
  params = args.slice(1);
  obj.fn = this;
  console.log(params);
  obj.fn(...params[0]);
};

xyz.myApply(person, ["welcome", "goa"]);
// xyz.apply(person, ["welcome", "goa"]);
