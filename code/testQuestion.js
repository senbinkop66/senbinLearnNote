const arr = [1, , 3, , , 2];

console.log(arr)  // [ <3 empty items> ]
console.log(arr[1])  // undefined
arr.length = 0;

console.log(arr[0])  // undefined