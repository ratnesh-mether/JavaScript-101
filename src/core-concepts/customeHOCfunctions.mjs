array = [1, 2, 3, 4, 5, 6];

const result = array.map((item) => item * 2);

/* console.log(result)
 */
/* Custom Map function */

Array.prototype.myMap = function (callBack) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(callBack(this[i], i));
  }
  return temp;
};

// const result1 = array.myMap((item, index) => {
//   return item * 3 * index;
// });

console.log(result1);

const result1 = array.filter((item) => {
  if (!item % 2) {
    return item;
  }
});

console.log(result1);

Array.prototype.myFilter = function (callBack) {
  const temp = [];
  for (let i = 0; i < this.length; i++) {
    if (Boolean(callBack(this[i]))) temp.push(this[i]);
  }
  return temp;
};

const result3 = array.myFilter((item) => {
  if (!item % 2) {
    return item;
  }
});
console.log(result3);
