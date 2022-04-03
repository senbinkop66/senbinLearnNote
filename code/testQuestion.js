let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

let arr=[].slice.call(arrayLike);

console.log(arr);

let arr2=Array.from(arrayLike);

console.log(arr2)