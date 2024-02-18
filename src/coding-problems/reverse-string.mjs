let str = "abcd";

console.log(str.substr(1));

/* const cleanedStr = str.replace(/[^\w]/g, '');
console.log(cleanedStr.length) */

function reversString(str) {
  return str === "" ? "" : reversString(str.substr(1)) + str.charAt(0);
}

console.log(reversString(str));
