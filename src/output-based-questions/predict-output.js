var obj = {
  name: "vivek",
  getName: function () {
    console.log(this);
    console.log(this.name);
  },
};

obj.getName();

function func1() {
  setTimeout(() => {
    console.log(x);
    console.log(y);
  }, 3000);

  var x = 2;
  let y = 12;
}
func1();
