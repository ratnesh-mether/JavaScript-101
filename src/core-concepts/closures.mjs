// Ex.1
// function x() {
//   var a = 14; // let and const will give the same output.
//   function y() {
//     console.log(a);
//   }
//   return y();
// }
// var z = x();
// z; //<--- Fucntion Call

/**
 * Explaination :
 * Baasically the function y() is returned with it's lexical scope.
 * It remebers the a [REFERECE to its memory location]
 * Hence we are able to access 'a' inside fucntion y() even exection of x is DONE.
 */

// Ex.2
// function x() {
//   for (var i = 0; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// x(); //Output 6 every time.
/**
 * To Resolve this we can use 'let' instead of 'var'.
 */

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function closure(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000);
//     }
//     closure(i);
//   }
// }
// x(); // 1,2,3,4,5

/**
 * When we are passing i value inside a function as a parameter
 * It will be a new fresh value for each fucntion call.
 * Hence counter will increment properly.
 */

// Ex.3

function a(a) {
  // let a = 10;
  function b(b) {
    // Forms closure with a's lexical environment
    // let b = 20;
    function c(c) {
      // Forms closure with b's lexical environment
      // let c = 30;
      console.log(a, b, c);
    }
    return c;
  }
  return b;
}

a(10)(20)(30); // Call
