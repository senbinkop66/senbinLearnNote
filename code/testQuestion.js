let a={
    [Symbol("a")]:1
};
let b=[];
let c="";

console.log(Object.getOwnPropertyNames(a).length===0);  // true
console.log(Object.getOwnPropertyNames(b));  // 
console.log(Object.getOwnPropertyNames(b).length===0);  // false
console.log(Object.getOwnPropertyNames(c));  // 
console.log(Object.getOwnPropertyNames(c).length===0);  // false