/* Write a function that takes an array of numbers and returns the second largest number.
 */

array = [
  5, -12, 34, -7, 21, -45, 10, -3, 15, -8, 27, -14, 6, -18, 42, -9, 33, -20, 8,
  -25, 17, -36, 28, -13, 40, -22, 11, -31, 19, -24, 38, -16, 7, -29, 23, -41,
  12, -35, 26, -4, 32, -50, 30, -5, 14, -27, 49, -2, 37, -19, 44, -11, 9, -47,
  3, -39, 16, -30, 46, -1, 18, -42, 22, -37, 2, -43, 25, -6, 48, -15, 29, -38,
  1, -32, 4, -28, 50, -23, 31, -44, 13, -21, 45, -10, 35, -26, 48, -17, 36, -40,
  7, -49, 20, -34, 41, -8, 14, -47, 9, -25,
];
let largest = -Infinity;
let secondLargest = -Infinity;

for (i in array) {
  if (array[i] > largest) {
    secondLargest = largest;
    largest = array[i];
  }
}

console.log(secondLargest);
