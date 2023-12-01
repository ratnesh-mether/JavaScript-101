console.warn("Finding Second Largest Number ffrom Array");

const array = [10, 5, 20, 8, 25, 15];
let largest = array[0];
let second_largest = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
  if (array[i] < largest && array[i] > second_largest)
    second_largest = array[i];
}

console.log("Largest : ", largest);
console.log("Second Largest : ", second_largest);

const second = array.reduce((acc, curr) => {});
