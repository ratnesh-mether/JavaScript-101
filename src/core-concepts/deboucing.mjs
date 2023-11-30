{
  /* <script>
  <h1>Hello</h1>
</script>; */
}
console.warn("Debounce is running...");
let count = 0;

function fetchData() {
  console.log("Fetching Data...", count++);
}

function debounce(mainFunction, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      mainFunction();
    }, delay);
  };
}

const callDebounce = debounce(fetchData, 300);
