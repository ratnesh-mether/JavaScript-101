let counter = 0;
let debouncedCounter = 0;
let throttledCounter = 0;
let flag = true;
const button = document.getElementById("button");
const headingOne = document.getElementById("heading-one");
const headingTwo = document.getElementById("heading-two");
const headingThree = document.getElementById("heading-three");

const myDebounce = (callback, delay) => {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      callback();
    }, delay);
  };
};

const myThrottle = (callback, delay) => {
  return function () {
    if (flag) {
      flag = false;
      setTimeout(() => {
        callback();
      }, delay);
    }
  };
};
const debounce = myDebounce(() => {
  debouncedCounter += 1;
  headingTwo.innerHTML = `DEBOUNCE-COUNTER : ${debouncedCounter}`;
}, 1000);
const throttle = myThrottle(() => {
  throttledCounter++;
  flag = true;
  headingThree.innerHTML = `THROTTLE ${throttledCounter}`;
}, 1000);
const incrementCount = () => {
  counter += 1;
  headingOne.innerHTML = `COUNTER : ${counter}`;
  // debounce();
  throttle();
};
console.log("hello");
button.addEventListener("click", incrementCount);
