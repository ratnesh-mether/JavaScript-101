console.warn("Ways to Create Objects");

// 1. Object Literal.

const object = {
  name: "Omkar Zatu Bhosale",
  city: "BMT",
};

console.log(object);

// 2. Constructor Function.

function Object(name, city) {
  this.name = name;
  this.city = city;
}

const person = new Object("Omkar", "BMT");

console.log(person);

// 3. Class (ES6);

class Person {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }
}

const person1 = new Person("Omkarrrrr", "BMT");

console.log(person1);

// 4. Factory Function -- Returns Object from Function

function createPerson(name, city) {
  return {
    name,
    city,
  };
}

const person3 = createPerson("cool", "NY");

console.log(person3);
