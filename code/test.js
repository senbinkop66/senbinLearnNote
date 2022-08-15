var a = 'window';
var obj1 = {
    a: 1,
    fn1: function () {
        var _this = this;
        return function () { return console.log(_this.a); };
    }
};
var obj2 = {
    a: 2
};

obj1.fn1()(); // 1

obj1.fn1().call(obj2); // 1 

obj1.fn1.call(obj2)(); // 2
