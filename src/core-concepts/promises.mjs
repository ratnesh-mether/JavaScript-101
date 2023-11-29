console.warn("Promises");

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success.");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P2 Success.");
    reject("P2 Failed.");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 Success");
  }, 2000);
});
/**
 * ----------Promise.all([p1,p2,p3])------------
 *  It waits for all the promises to get complete.
 *  It resolves when every promise is fullfilled.
 *  And returns value when the last promise gets fullfilled.(The one which take the most time)
 *  If any of promises fail, it immidiately aborts all the promises and returns the error.
 */
// console.warn("Promise.all()");
// Promise.all([p1, p2, p3])
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.error(message);
//   });

/**
 * ----------Promise.allSettled([p1,p2,p3])------------
 *  It will wait for all the promises to get complete
 *  Wether it is Success or Fails.
 *  It returns an array that can contains both the values
 *  Either Fullfilled or Rejected Promises.
 */
console.warn("Promise.allSettled()");
Promise.allSettled([p1, p2, p3])
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.error(message);
  });
