var a = 'window'
var obj1 = {
    a: 1,
    fn1: function () {
            return () => console.log(this.a)
    }
}
var obj2 = {
    a: 2
};

obj1.fn1()(); // 1
obj1.fn1().call(obj2); // 1 

obj1.fn1.call(obj2)(); // 2