const x = {};
x[Symbol.replace] = (...s) => console.log(s);

console.log('Hello'.replace(x, 'World')) // ["Hello", "World"]