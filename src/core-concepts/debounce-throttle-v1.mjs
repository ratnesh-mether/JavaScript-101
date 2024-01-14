let counter = 0;
let debouncedCounter = 0;
const button = document.getElementById("button");
const headingOne = document.getElementById("heading-one");

button.addEventListener("click", incrementCount);
headingOne.innerHTML = `COUNTER : ${counter}`;
const incrementCount = () => {
  counter++;
};
console.log(button);
