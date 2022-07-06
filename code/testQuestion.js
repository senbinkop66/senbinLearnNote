function myClass() {}

myClass.prototype.x = 1;

Object.defineProperty(myClass.prototype, 'y', {
    value: 1,
    writable: false
});

let a = new myClass();
a.x = 2;
console.log(a.x);  // 2
console.log(myClass.prototype.x);  // 1

a.y = 10;  // Ignored, throws in strict mode
console.log(a.y);  // 1
console.log(myClass.prototype.y);  // 1
