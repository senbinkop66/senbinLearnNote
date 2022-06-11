console.log(Symbol("desc").toString());  // Symbol(desc)

console.log(Symbol("desc").description);  // "desc"
console.log(Symbol("").description);  // ""
console.log(Symbol(1).description);  // 1
console.log(Symbol().description);  // undefined

// well-known symbols

console.log(Symbol.iterator.toString());  // Symbol(Symbol.iterator)
console.log(Symbol.iterator.description);  // Symbol.iterator


// global symbols
console.log(Symbol.for("foo").toString());  // Symbol(foo)
console.log(Symbol.for("bar").description);  // bar

class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}

let arr = [1, 2, 3];
let arr2 = new MyArray();

console.log(arr instanceof MyArray);  // true
console.log(arr2 instanceof MyArray);  // false

let alpha = ["a", "b", "c"];
let numeric = [1, 2, 3];

numeric[Symbol.isConcatSpreadable] = false;

let alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric);  //  [ 'a', 'b', 'c', 1, 2, 3 ]
let myIterable = {};

myIterable[Symbol.iterator] = function*() {
  yield 1;
  yield 2;
  yield 3;
}

console.log([...myIterable]);  // [ 1, 2, 3 ]

for (let x of myIterable) {
  console.log(x);  // 1 2 3
}

let reg = /foo/;
reg[Symbol.match] = false;

console.log("/bar/foo/".startsWith(reg));  // false
console.log("/foo/bar/".startsWith(reg));  // true

console.log("/bar/foo/".endsWith(reg));  // true
console.log("/foo/bar/".endsWith(reg));  // false

let reg = /[0-9]+/g;

let str = "2016-01-02|2019-03-07";

let result = reg[Symbol.matchAll](str);

console.log(Array.from(result, x => x[0]));
// [ '2016', '01', '02', '2019', '03', '07' ]

class MyReplace {
  constructor(value) {
    this.value = value;
  }
  [Symbol.replace](string) {
    return `s/${string}/${this.value}/g`
  }
}

let mr = new MyReplace("bar");

console.log("foo".replace(mr));  //  s/foo/bar/g

class MySearch {
  constructor(value) {
    this.value = value.toLowerCase();
  }
  [Symbol.search](string) {
    return string.toLowerCase().indexOf(this.value);
  }
}

let ms = new MySearch("BaR");

console.log("foobAR".search(ms));  //  3

class MyArray extends Array {
  // 覆盖 species 到父级的 Array 构造函数上
  static get [Symbol.species](){
    return Array;
  }
}

let arr = new MyArray(1, 2, 3);

let mapped = arr.map(x => x * x);

console.log(mapped);  // [ 1, 4, 9 ]
console.log(mapped instanceof MyArray);  //  false
console.log(mapped instanceof Array);  //  true

class MySplit {
  constructor(value) {
    this.value = value;
  }
  [Symbol.split](string) {
    const index = string.indexOf(this.value);
    return `${this.value}${string.substr(0, index)}/${string.substr(index + this.value.length)}`;
  }
}

let ms = new MySplit("foo");

console.log("foobar".split(ms));  //  foo/bar


let exp = {
  pattern: "in",
  [Symbol.split](string) {
    return string.split(this.pattern);
  }
}

console.log("goodinjob".split(exp));  // [ 'good', 'job' ]

// 一个没有提供 Symbol.toPrimitive 属性的对象，参与运算时的输出结果
let obj1 = {};

console.log(+obj1);  // NaN
console.log(`${obj1}`);  // [object Object]
console.log(obj1 + "");  // [object Object]

// 接下面声明一个对象，手动赋予了 Symbol.toPrimitive 属性，再来查看输出结果
let obj2 = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return 10;
    }
    if (hint === "string") {
      return "hello";
    }
    return true;
  }
};

console.log(+obj2);  // 10   -- hint 参数值是 "number"
console.log(`${obj2}`);  // hello   -- hint 参数值是 "string"
console.log(obj2 + "");  // true   -- hint 参数值是 "default"