// Ex.1
function x() {
  var a = 14; // let and const will give the same output.
  function y() {
    console.log(a);
  }
  return y();
}
var z = x();
// z; //<--- Fucntion Call

/**
 * Explaination :
 * Baasicall the function y() is returned with it's lexical scope.
 * It remebers the a [REFERECE to its memory location]
 * Hence we are able to access 'a' inside fucntion y() even exection of x is DONE.
 */

// Ex.2
function x() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
// x(); //Output 6 every time.
/**
 * To Resolve this we can use 'let' instead of 'var'.
 */

function x() {
  for (var i = 1; i <= 5; i++) {
    function closure(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    closure(i);
  }
}
x();
