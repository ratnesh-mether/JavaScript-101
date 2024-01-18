/* Implement a function that checks if a string is a palindrome (reads the same backward as forward). */

const string = "AmanaplanacanalPanama";

let p1 = 0;
let p2 = string.length - 1;
let flag = true;

while (p1 <= p2) {
  if (string[p1].toLowerCase() === string[p2].toLowerCase()) {
    p1++;
    p2--;
  } else {
    flag = false;
    break;
  }
}

console.log(flag);

function truncateSpaces(inputString) {
  return inputString.replace(/\s+/g, ""); // This regex removes all white spaces globally
}

// Example usage:
let stringWithSpaces = "   Hello    World   ";
let result = truncateSpaces(stringWithSpaces);
console.log(result); // Output: 'HelloWorld'
