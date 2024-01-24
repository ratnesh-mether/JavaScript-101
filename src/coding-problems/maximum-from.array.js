const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = array.reduce(
  (acc, curr) => {
    if (curr > acc.max) {
      acc.max = curr;
    }
    return acc;
  },
  {
    max: -Infinity,
    min: 0,
  },
).max;

console.log(result);
