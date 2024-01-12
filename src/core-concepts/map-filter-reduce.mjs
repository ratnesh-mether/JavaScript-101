array = [2, 4, 7, 5, 1, 2, 5, 8, 6, 4, 9];
//Double values of array
function double(value) {
  return value * 2;
}
const doubleArray = array.map(double);
/* console.log("Doubled Array : ", doubleArray); */

// Find numbers divisible by 2

function moduloTwo(value) {
  if (value % 2 === 0) {
    return value;
  }
}

const moduloArray = array.filter(moduloTwo);

/* console.log(moduloArray); */

// Find the Freuency of each number

const frequency = array.reduce(function (acc, curr) {
  if (acc[curr]) {
    acc[curr] = acc[curr] + 1;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

/* console.log(frequency); */

const data = [
  { firstTime: "A", lastName: "Z", age: 24 },
  { firstTime: "B", lastName: "Y", age: 22 },
  { firstTime: "C", lastName: "X", age: 24 },
  { firstTime: "D", lastName: "W", age: 23 },
  { firstTime: "E", lastName: "V", age: 26 },
];

/* console.log(data); */

const firstName = data
  .filter((item) => item.age >= 24)
  .map((item) => item.firstTime);

console.log(firstName);

const demo = data.reduce(function (acc, curr) {
  if (curr.age >= 24) {
    acc.push = curr.firstTime;
  }
  return acc;
}, []);
