console.warn("Iterating Through Nested Array and Simplifying It.");
const array = [15, 24, [29, 85, 56, [36, 14, 6, 98, 34, 52], 22], 87, 60];

// Using Flat(Infinity);

const flatArray = array.flat(Infinity);

// flatArray.forEach((item) => {
//   console.log(item);
// });

// Using Recursion;
function nestedArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      nestedArray(array[i]);
    } else {
      console.log(array[i]);
    }
  }
}

// nestedArray(array);
let max = -Infinity;
function findNestedMax(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      findNestedMax(array[i]);
    } else {
      if (array[i] > max) {
        max = array[i];
      }
    }
  }
  return max;
}

const ans = findNestedMax(array);

console.log(ans);
