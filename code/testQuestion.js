let animal = {
  eat: function() { // 这里是故意这样写的，而不是 eat() {...
    // ...
  }
};

let rabbit = {
  __proto__: animal,
  eat: function() {
    super.eat();
  }
};


rabbit.eat();  // 错误调用 super（因为这里没有 [[HomeObject]]）