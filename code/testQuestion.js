let reg1=/\d/g;

let str1="1a2b3c";

console.log(reg1.exec(str1));  //[ '1', index: 0, input: '1a2b3c', groups: undefined ]
console.log(reg1.test(str1));  //true

console.log(str1.match(reg1));  //[ '1', '2', '3' ]
console.log(str1.matchAll(reg1));  //Object [RegExp String Iterator] {}

console.log(str1.search(reg1));  //0
console.log(str1.split(reg1));  //[ '', 'a', 'b', 'c' ]
console.log(str1.replace(reg1,"X"));  //XaXbXc

console.log(reg1.lastIndex);
