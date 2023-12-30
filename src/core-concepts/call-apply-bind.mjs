// test
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
