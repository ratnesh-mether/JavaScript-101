/**
 * ------------Higher Order Functions-------------------
 * Functions which take another function as input and
 * return a new fucntion.
 */

function HOC(a) {
  return function inner(b) {
    return a + b;
  };
}
// HOC(1);
const result = HOC(1)(2);

// console.log("Hello : ", result(2));
