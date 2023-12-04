var obj = {
  name: "vivek",
  getName: function () {
    console.log(this);
    console.log(this.name);
  },
};

obj.getName();
