# Array

JavaScript 的 **`Array`** 对象是用于构造数组的全局对象，**数组是类似于列表的高阶对象**。

## 描述

数组是一种类列表对象，它的原型中提供了遍历和修改元素的相关操作。JavaScript 数组的长度和元素类型都是非固定的。因为数组的长度可随时改变，并且其数据在内存中也可以不连续，所以 JavaScript 数组不一定是密集型的，这取决于它的使用方式。一般来说，数组的这些特性会给使用带来方便，但如果这些特性不适用于你的特定使用场景的话，可以考虑使用**类型数组** TypedArray。

只能用整数作为数组元素的索引，而不能用字符串。后者称为 **关联数组**。使用非整数并通过 方括号 或 点号 来访问或设置数组元素时，所操作的并不是数组列表中的元素，而是数组对象的 属性集合 上的变量。**数组对象的属性和数组元素列表是分开存储的**，并且数组的遍历和修改操作也不能作用于这些命名属性。

----

## 常见操作

### 创建数组

```js
let fruits = ['Apple', 'Banana']
console.log(fruits.length)
// 2
```

### 通过索引访问数组元素

```js
let first = fruits[0]
// Apple

let last = fruits[fruits.length - 1]
// Banana
```

### 遍历数组

```js
fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
// Apple 0
// Banana 1
```

### 添加元素到数组的末尾

```js
let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]
```

### 删除数组末尾的元素

```js
let last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]
```

### 删除数组头部元素

```js
let first = fruits.shift() // remove Apple from the front
// ["Banana"]
```

### 添加元素到数组的头部

```js
let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]
```

找出某个元素在数组中的索引

```js
fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana')
// 1
```

### 通过索引删除某个元素

```js
let removedItem = fruits.splice(pos, 1) // this is how to remove an item

// ["Strawberry", "Mango"]
```

### 从一个索引位置删除多个元素

```js
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1
let n = 2

let removedItems = vegetables.splice(pos, n)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.

console.log(vegetables)
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems)
// ["Turnip", "Radish"]
```

### 复制一个数组

```js
let shallowCopy = fruits.slice() // this is how to make a copy
// ["Strawberry", "Mango"]
```

----

## 访问数组元素

JavaScript 数组的索引是从 0 开始的，第一个元素的索引为 0，最后一个元素的索引等于该数组的 长度 减 1。

**如果指定的索引是一个无效值**，JavaScript 数组并不会报错，**而是会返回 undefined**。

```js
let arr = ['this is the first element', 'this is the second element', 'this is the last element']
console.log(arr[0])              // logs 'this is the first element'
console.log(arr[1])              // logs 'this is the second element'
console.log(arr[arr.length - 1]) // logs 'this is the last element'
```

虽然数组元素可以看做是数组对象的属性，就像 `toString` 一样，**但是下面的写法是错误的，运行时会抛出 `SyntaxError` 异常**，而原因则是使用了非法的属性名：

```js
console.log(arr.0) // a syntax error
```

并不是 JavaScript 数组有什么特殊之处，而是因为在 JavaScript 中，以**数字开头的属性**不能用点号引用，**必须用方括号**。

比如，如果一个对象有一个名为 `3d` 的属性，那么只能用方括号来引用它。下面是具体的例子：

```js
let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
console.log(years.0)   // a syntax error
console.log(years[0])  // works properly
```

```js
renderer.3d.setTexture(model, 'character.png')     // a syntax error
renderer['3d'].setTexture(model, 'character.png')  // works properly
```

注意在 `3d` 那个例子中，引号是必须的。你也可以将数组的索引用引号引起来，比如 `years[2]` 可以写成 `years['2']`。

`years[2]` 中的 2 会被 JavaScript 解释器通过调用 `toString` 隐式转换成字符串。正因为这样，**`'2'` 和 `'02'` 在 `years` 中所引用的可能是不同位置上的元素。**而下面这个例子也可能会打印 `true`：

```js
let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
console.log(years[2])   // 1970
console.log(years['2'])  // 1970

console.log(years[' 2'])  // undefined
console.log(years['02'])  // undefined

console.log(years['2'] != years['02'])  // true
```

---

## 数组长度与数字下标之间的关系

JavaScript 数组的 length 属性和其数字下标之间有着紧密的联系。

数组内置的几个方法（例如 join、slice、indexOf 等）都会考虑 length 的值。

另外还有一些方法（例如 push、splice 等）还会改变 length 的值。

```js
const fruits = []
fruits.push('banana', 'apple', 'peach')

console.log(fruits.length) // 3
```

使用一个合法的下标为数组元素赋值，**并且该下标超出了当前数组的大小的时候，解释器会同时修改 length 的值**：

```js
fruits[5] = 'mango'
console.log(fruits[5])            // 'mango'
console.log(Object.keys(fruits))  // ['0', '1', '2', '5']
console.log(fruits.length)        // 6
```

也可以显式地给 length 赋一个更大的值：

```js
fruits.length = 10
console.log(fruits)              // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]

console.log(Object.keys(fruits)) // ['0', '1', '2', '5']

console.log(fruits.length)       // 10
console.log(fruits[8])           // undefined
```

而为 length 赋一个更小的值则会删掉一部分元素：

```js
fruits.length = 2
console.log(Object.keys(fruits)) // ['0', '1']
console.log(fruits.length)       // 2
```

这一节的内容在 Array.length 中有更详细的介绍。

----

## 正则匹配结果所返回的数组

使用正则表达式匹配字符串可以得到一个数组。这个数组中包含本次匹配的相关信息和匹配结果。RegExp.exec、String.match、String.replace 都会返回这样的数组。

看下面的例子和例子下面的表格：

```js
// Match one d followed by one or more b's followed by one d
// Remember matched b's and the following d
// Ignore case

const myRe = /d(b+)(d)/i
const myArray = myRe.exec('cdbBdbsbz')
// [ 'dbBd', 'bB', 'd', index: 1, input: 'cdbBdbsbz', groups: undefined ]
```

该正则匹配返回的数组包含以下属性和元素：

| 属性/元素          | 说明                                                         | 示例                |
| :----------------- | :----------------------------------------------------------- | :------------------ |
| `input` 只读       | 正则表达式所匹配的原始字符串                                 | `"cdbBdbsbz"`       |
| `index` 只读       | 匹配到的子串在原始字符串中的索引                             | `1`                 |
| `[0]` 只读         | 最后匹配到的子串                                             | `"dbBd"`            |
| `[1], ...[n]` 只读 | 正则表达式中所指定的**分组所匹配到的子串**，其数量由正则中的分组数量决定，无最大上限 | `[1]: "bB"[2]: "d"` |

----

## 构造器

### Array()

Array() 构造器用于创建 Array 对象。

#### 语法

```js
// literal constructor 数组字面量
[element0, element1, ..., elementN]

// construct from elements  多个参数的 Array 构造器
new Array(element0, element1, ..., elementN)

// construct from array length  单个参数的 Array 构造器
new Array(arrayLength)
```

#### 参数

**elementN**

Array 构造器会根据给定的元素创建一个 JavaScript 数组，但是当仅有一个参数且为数字时除外（详见下面的 arrayLength 参数）。注意，**后者仅适用于用 Array 构造器创建数组**，而不适用于用方括号创建的数组字面量。

**arrayLength**

一个范围在 0 到 2^32 - 1 之间的整数，此时将返回一个 length 的值等于 arrayLength 的数组对象

（言外之意就是该数组此时**并没有包含任何实际的元素**，**不能理所当然地认为**它包含 arrayLength 个值为 undefined 的元素）。

如果传入的参数不是有效值，则会抛出 RangeError 异常

### 数组字面量

可以通过使用 数组字面量 创建数组

```js
let fruits = ['Apple', 'Banana'];

console.log(fruits.length); // 2
console.log(fruits[0]);     // "Apple"
```

### 单个参数的 Array 构造器

可以通过单个数字参数的构造器创建数组，数组的长度为传入的参数，该数组不包含任何实际的元素

```js
let fruits = new Array(2);

console.log(fruits.length); // 2
console.log(fruits[0]);     // undefined
```

### 多个参数的 Array 构造器

如果向构造器传入多个参数，则会创建一个包含所有传入参数的新数组

```js
let fruits = new Array('Apple', 'Banana');

console.log(fruits.length); // 2
console.log(fruits[0]);     // "Apple"
```

---

## 静态属性

### get Array[@@species]

`Array[@@species]` 访问器属性返回 `Array` 的构造函数。

#### 语法

```
Array[Symbol.species]
```

#### 返回值

Array 的构造函数。

#### 描述

species 访问器属性返回 Array 对象的默认构造函数。**子类的构造函数可能会覆盖并改变构造函数的赋值**。

#### 示例

`species` 属性返回默认构造函数，它用于 `Array` 对象的构造函数 `Array`:

```js
Array[Symbol.species]; // function Array()
```

在继承类的对象中（例如你自定义的数组 `MyArray`），`MyArray` 的 `species` 属性返回的是 `MyArray` 这个构造函数。然而你可能想要覆盖它，以便在你继承的对象 `MyArray` 中返回父类的构造函数 `Array` :

```js
class MyArray extends Array {
  // 重写 MyArray 的 species 属性到父类 Array 的构造函数
  static get [Symbol.species]() { return Array; }
}
```

----

## 静态方法

----

### Array.from()

`Array.from()` 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

#### 参数

- `arrayLike`

  想要转换成数组的伪数组对象或可迭代对象。

- `mapFn` 可选

  如果指定了该参数，**新数组中的每个元素会执行该回调函数**。

- `thisArg` 可选

  可选参数，执行回调函数 `mapFn` 时 `this` 对象。

#### 返回值

一个新的数组实例。

#### 描述

`Array.from()` 可以通过以下方式来创建数组对象：

- 伪数组对象（拥有一个 `length` 属性和若干索引属性的任意对象）
- [可迭代对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)（可以获取对象中的元素，如 Map 和 Set 等）

`Array.from()` 方法有一个可选参数 `mapFn`，让你可以在最后生成的数组上再执行一次 [`map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 方法后再返回。**也就是说` Array.from(obj, mapFn, thisArg) `就相当于` Array.from(obj).map(mapFn, thisArg),` 除非创建的不是可用的中间数组**。 这对一些数组的子类`,`如 [typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) 来说很重要，因为中间数组的值在调用 map() 时需要是适当的类型。

`from()` 的 `length` 属性为 1 ，即 `Array.from.length === 1`。

在 ES2015 中， `Class` 语法允许我们为内置类型（比如 `Array`）和自定义类新建子类（比如叫 `SubArray`）。这些子类也会继承父类的静态方法，比如 `SubArray.from()`，调用该方法后会返回子类 `SubArray` 的一个实例，而不是 `Array` 的实例。

#### 示例

##### 从 `String` 生成数组

```js
Array.from('foo');
// [ "f", "o", "o" ]
```

##### 从 Set 生成数组

```
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
// [ "foo", "bar", "baz" ]
```

##### 从 Map 生成数组

```js
const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
```

##### 从类数组对象（arguments）生成数组

```js
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [ 1, 2, 3 ]
```

##### 在 Array.from 中使用箭头函数

```js
// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]


// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]
```

##### 序列生成器 (指定范围)

```js
// Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

// Generate numbers range 0..4
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// Generate numbers range 1..10 with step of 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Generate the alphabet using Array.from making use of it being ordered as a sequence
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

range("a".charCodeAt(0), "z".charCodeAt(0), 1).map(x => String.fromCharCode(x))
/*
[
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
]
*/
```

##### 数组去重合并

```js
function combine() {
  let arr = [].concat.apply([], arguments);  //没有去重复的新数组
  return Array.from(new Set(arr));
}

let m = [1, 2, 2, 3], n = [2, 3, 4, 3], l = [3, 4, 5 ,6];
console.log(combine(m, n, l));  // [ 1, 2, 3, 4, 5, 6 ]
```

#### Polyfill

ECMA-262 第六版标准中添加了 Array.from 。有些实现中可能尚未包括在其中。你可以通过在脚本前添加如下内容作为替代方法，以使用未原生支持的 Array.from 方法。该算法按照 ECMA-262 第六版中的规范实现，并假定 Object 和 TypeError 有其本身的值， callback.call 对应 Function.prototype.call 。此外，鉴于无法使用 Polyfill 实现真正的的迭代器，该实现不支持规范中定义的泛型可迭代元素。

```js
// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}

```



----

### Array.isArray()

用来判断某个变量是否是一个数组对象,  Array.isArray() 用于确定传递的值是否是一个 Array。

#### 语法

```
Array.isArray(obj)
```

#### 参数

**obj**

​    需要检测的值。

#### 返回值

如果值是 Array，则为 true；否则为 false。

#### 示例

```js
// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'))

// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype);

// 下面的函数调用都返回 false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32))
Array.isArray({ __proto__: Array.prototype });

```

#### instanceof VS isArray

当检测 Array 实例时，Array.isArray 优于 instanceof，**因为 Array.isArray 能检测 iframes。**

```js
const iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length-1].Array;
const arr = new xArray(1,2,3); // [1,2,3]

// Correctly checking for Array
Array.isArray(arr);  // true

// Considered harmful, because doesn't work through iframes
arr instanceof Array; // false

```

#### Polyfill

```js
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
```



-----

### Array.of()

根据一组参数来创建新的数组实例，支持任意的参数数量和类型

`Array.of()` 方法创建一个**具有可变数量参数**的新数组实例，而不考虑参数的数量或类型。

 `Array.of()` 和 `Array 构造函数`之间的**区别在于处理整数参数**：

- `Array.of(7)` 创建一个具有单个元素 7 的数组，而 `Array(7)` 创建一个长度为 7 的空数组（注意：**这是指一个有 7 个空位 (empty) 的数组**，而不是由 7 个undefined组成的数组）。

```js
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]
```

#### 语法

```js
Array.of(element0[, element1[, ...[, elementN]]])
```

#### 参数

- element*N*

  任意个参数，将按顺序成为返回数组中的元素。

#### 返回值

新的 Array 实例。

#### 描述

此函数是 ECMAScript 2015 标准的一部分。详见 Array.of 和 Array.from proposal 和 Array.of polyfill。

#### 示例

```js
Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
```

#### 兼容旧环境

如果原生不支持的话，在其他代码之前执行以下代码会创建 Array.of() 。

```js
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}
```

#### Polyfill

```js
(function( global ) {
  "use strict";

  function isConstructor( C ) {
    try {
      new C();
      return true;
    } catch ( e ) {
      return false;
    }
  }


  Array.from = function( arrayLike ) {
    var items, len, C, A, k, Pk, kPresent, kValue;

    // 1.  Let items be ToObject(arrayLike).
    items = Object(arrayLike);

    // 3. Let lenValue be the result of calling the [[Get]]
    // internal method of items with the argument "length".
    // 4. Let len be ToInteger(lenValue).
    len = +items.length;

    // 6.  Let C be the |this| value.
    C = this;

    // 7.  If isConstructor(C) is true, then
    if ( isConstructor(C) ) {
      // a.  Let newObj be the result of calling the
      //     [[Construct]] internal method of C with an argument
      //     list containing the single item len.
      // b.  Let A be ToObject(newObj).
      A = Object(new C(len));
    } else {
      A = new Array(len);
    }

    // 10. Let k be 0.
    k = 0;

    // 11. Repeat, while k < len
    while ( k < len ) {
      // a. Let Pk be ToString(k).
      Pk = String(k);
      // b. Let kPresent be the result of calling the [[HasProperty]]
      //      internal method of items with argument Pk.
      kPresent = items.hasOwnProperty(Pk);
      // c. If kPresent is true, then...
      if ( kPresent ) {
        // i.  Let kValue be the result of calling the [[Get]]
        //      internal method of items with argument Pk.
        kValue = items[ Pk ];
        // ii.  ReturnIfAbrupt(kValue).
        // iii.  Let defineStatus be the result of calling the
        //      [[DefineOwnProperty]] internal method of A with
        //      arguments Pk, Property Descriptor
        //      {[[Value]]: kValue.[[value]],
        //      [[Writable]]: true,
        //      [[Enumerable]]: true,
        //      [[Configurable]]: true}, and true.
        A[ k ] = kValue;
      }

      // d. Increase k by 1.
      k++;
    }

    // 14. Return A.
    return A;
  };


  Array.of = function() {
    var items, len, C, A, k, Pk, kPresent, kValue;

    // X.  Let items be ToObject(arrayLike).
    items = Object(arguments);

    // 1. Let lenValue be the result of calling the [[Get]]
    // internal method of items with the argument "length".
    // 2. Let len be ToInteger(lenValue).
    len = +items.length;

    // 3.  Let C be the |this| value.
    C = this;

    // 4. If isConstructor(C) is true, then
    if ( isConstructor(C) ) {
      // a, b.
      A = Object(new C(len));
    } else {
    // 5. Else, a.
      A = new Array(len);
    }

    // 6. omitted
    // 7. Let k be 0.
    k = 0;

    // 8. Repeat, while k < len
    while ( k < len ) {
      // a. Let Pk be ToString(k).
      Pk = String(k);
      // b. Let kValue be the result of calling the [[Get]]
      //    internal method of items with argument Pk.
      kValue = items[ Pk ];
      // c. Let defineStatus be the result of calling the
      //    [[DefineOwnProperty]] internal method of A with
      //    arguments Pk, Property Descriptor
      //    {[[Value]]: kValue.[[value]],
      //    [[Writable]]: true,
      //    [[Enumerable]]: true,
      //    [[Configurable]]: true}, and true.
      A[ k ] = kValue;

      // d. omitted
      // e. Increase k by 1.
      k++;
    }

    // 9, 10. omitted
    // 11. Return A.
    return A;
  };

  global.Array.from = Array.from;
  global.Array.of = Array.of;

})( global );


{
  // tests
  var arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };

  console.log( Array.from(arrayLike) );

  console.log( Array.of(0) );
  console.log( Array.of(1, null, undefined, false, 2) );
  console.log( Array.of() );


  var other = {
    from: Array.from,
    of: Array.of
  };

  console.log( other.from(arrayLike) );
  console.log( other.of(1, null, undefined, false, 2) );
}
```



----

## 实例属性

### Array.prototype.length

数组中的元素个数

`length` 是`Array`的实例属性。返回或设置一个数组中的元素个数。**该值是一个无符号 32-bit 整数**，并且总是大于数组最高项的下标。

#### 描述

length 属性的值是一个 0 到 2^32 - 1 的整数。

```js
var namelistA = new Array(4294967296); // 2 的 32 次方 = 4294967296
var namelistC = new Array(-100) // 负号

console.log(namelistA.length); // RangeError: 无效数组长度
console.log(namelistC.length); // RangeError: 无效数组长度


var namelistB = [];
namelistB.length = Math.pow(2,32)-1; //set array length less than 2 to the 32nd power
console.log(namelistB.length);   // 4294967295
```

你可以设置 `length` 属性的值来截断任何数组。当通过改变`length`属性值来扩展数组时，实际元素的数目将会增加。例如：将一个拥有 2 个元素的数组的 `length` 属性值设为 3 时，那么这个数组将会包含 3 个元素，并且，第三个元素的值将会是 `undefined` 。

```js
function printEntries(arr) {
  var goNext = true;
  var entries = arr.entries();
  while (goNext) {
    var result = entries.next();
    if (result.done !== true) {
      console.log(result.value[1]);
      goNext = true;
    } else
      goNext = false;
  }
  console.log('=== printed ===');
}

var arr = [1, 2, 3];
printEntries(arr);

arr.length = 5; // set array length to 5 while currently 3.
printEntries(arr);

// 1
// 2
// 3
// === printed ===

// 1
// 2
// 3
// undefined
// undefined
// === printed ===
```



但是， `length` 属性不一定表示数组中定义值的个数。了解更多：[长度与数值下标属性之间的关系](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#relationship_between_length_and_numerical_properties)。

| `Array.length` 属性的属性特性： |       |
| :------------------------------ | ----- |
| writable                        | true  |
| enumerable                      | false |
| configurable                    | false |

- Writable ：如果设置为false，该属性值将不能被修改。
- Configurable ：如果设置为false，删除或更改任何属性都将会失败。
- Enumerable ：如果设置为 true ，属性可以通过迭代器for或for...in进行迭代。

#### 示例

##### 遍历数组

下面的例子中，通过数组下标遍历数组元素，并把每个元素的值修改为原值的 2 倍。

```js
var numbers = [1, 2, 3, 4, 5];
var length = numbers.length;
for (var i = 0; i < length; i++) {
  numbers[i] *= 2;
}
// 遍历后的结果 [2, 4, 6, 8, 10]
```

##### 截断数组

下面的例子中，如果数组长度大于 3，则把该数组的长度截断为 3 。

```js
var numbers = [1, 2, 3, 4, 5];

if (numbers.length > 3) {
  numbers.length = 3;
}

console.log(numbers); // [1, 2, 3]
console.log(numbers.length); // 3
```

----

### Array.prototype[@@unscopables]

Symbol 属性 @@unscopable 包含了所有 ES2015 (ES6) 中新定义的、且并未被更早的 ECMAScript 标准收纳的属性名。这些属性被排除在由 with 语句绑定的环境中。

#### 语法

```
arr[Symbol.unscopables]
```

#### 描述

with 绑定中未包含的数组默认属性有：

```
copyWithin()
entries()
fill()
find()
findIndex()
includes()
keys()
values()
```

#### 示例

以下的代码在 ES5 或更早的版本中能正常工作。然而 ECMAScript 2015 (ES6) 或之后的版本中新添加了 Array.prototype.keys() 这个方法。这意味着在 with 语句的作用域中，"keys"只能作为方法，而不能作为某个变量。这正是内置的 @@unscopables 即 Array.prototype[@@unscopables] symbol 属性所要解决的问题：**防止某些数组方法被添加到 with 语句的作用域内。**

```js
var keys = [];

with(Array.prototype) {
  keys.push("something");
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
```



----

## 实例方法

### Array.prototype.concat()

用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组

#### 语法

```
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
```

#### 参数

valueN 可选

数组或值，将被合并到一个新的数组中。如果省略了所有 `valueN` 参数，则 `concat` 会返回调用此方法的现存数组的一个浅拷贝。详情请参阅下文描述。

#### 返回值

新的 Array 实例。

#### 描述

`concat`方法创建一个新的数组，它由被调用的对象中的元素组成，每个参数的顺序依次是该参数的元素（如果参数是数组）或参数本身（如果参数不是数组）。它不会递归到嵌套数组参数中。

`concat`方法不会改变`this`或任何作为参数提供的数组，**而是返回一个浅拷贝**，它包含与原始数组相结合的相同元素的副本。 原始数组的元素将复制到新数组中，如下所示：

- 对象引用（而不是实际对象）：`concat`**将对象引用复制到新数组中**。 原始数组和新数组都引用相同的对象。 也就是说，如果引用的对象被修改，则更改对于新数组和原始数组都是可见的。 **这包括也是数组的数组参数的元素。**

- 数据类型如字符串，数字和布尔（不是String，Number 和 Boolean 对象）：concat将字符串和数字的**值**复制到新数组中。

> **备注：**数组/值在连接时保持不变。此外，对于新数组的任何操作（仅当元素不是对象引用时）都不会对原始数组产生影响，反之亦然。

#### 示例

##### 连接两个数组

以下代码将两个数组合并为一个新数组：

```js
let alpha = ['a', 'b', 'c'];
let numeric = [1, 2, 3];

let newArr = alpha.concat(numeric);
console.log(newArr);  // [ 'a', 'b', 'c', 1, 2, 3 ]

numeric[0] = 100;
console.log(newArr);  // [ 'a', 'b', 'c', 1, 2, 3 ]
```

##### 连接三个数组

以下代码将三个数组合并为一个新数组：

```js
var num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];

var nums = num1.concat(num2, num3);

console.log(nums);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

##### 将值连接到数组

以下代码将三个值连接到数组：

```js
var alpha = ['a', 'b', 'c'];

var alphaNumeric = alpha.concat(1, [2, 3]);

console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

##### 合并嵌套数组

以下代码合并数组并保留引用：

```js
let alpha = [['a'], 'b', 'c'];
let numeric = [1, [2], 3];

//对于数组内的值是引用对象执行浅拷贝
let newArr = alpha.concat(numeric);
console.log(newArr);  // [ [ 'a' ], 'b', 'c', 1, [ 2 ], 3 ]

numeric[1].push(100);
alpha[0].push('z');
console.log(newArr);  // [ [ 'a', 'z' ], 'b', 'c', 1, [ 2, 100 ], 3 ]
```



----

### Array.prototype.copyWithin()

**浅复制**数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度

#### 语法

```
arr.copyWithin(target[, start[, end]])
```

#### 参数

**target**

0 为基底的索引，**复制序列到该位置**。如果是负数，`target` 将从末尾开始计算。如果 `target` 大于等于 `arr.length`，将不会发生拷贝。如果 `target` 在 `start` 之后，复制的序列将被修改以符合 `arr.length`。

**start**

0 为基底的索引，开始复制元素的起始位置。如果是负数，`start` 将从末尾开始计算。**如果 `start` 被忽略，`copyWithin` 将会从 0 开始复制。**

**end**

0 为基底的索引，开始复制元素的结束位置。`copyWithin` 将会拷贝到该位置，**但不包括 `end` 这个位置的元素**。如果是负数， `end` 将从末尾开始计算。**如果 `end` 被忽略，`copyWithin` 方法将会一直复制至数组结尾**（默认为 `arr.length`）。

#### 返回值

改变后的数组。

#### 描述

参数 target、start 和 end 必须为整数。

如果 start 为负，则其指定的索引位置等同于 length+start，length 为数组的长度。end 也是如此。

copyWithin 方法**不要求其 this 值必须是一个数组对象**；除此之外，copyWithin 是一个可变方法，**它可以改变 this 对象本身**，并且返回它，而不仅仅是它的拷贝。

copyWithin 就像 C 和 C++ 的 memcpy 函数一样，**且它是用来移动 Array 或者 TypedArray 数据的一个高性能的方法**。复制以及粘贴序列这两者是为一体的操作; **即使复制和粘贴区域重叠，粘贴的序列也会有拷贝来的值。**

copyWithin 函数被设计为通用式的，其不要求其 this 值必须是一个数组对象。

`copyWithin` 是一个可变方法，**它不会改变 this 的长度 length**，但是**会改变 this 本身的内容**，且需要时会创建新的属性。

#### 示例

```js
let a = [1, 2, 3, 4, 5];

let b = a.copyWithin(-2);

console.log(a);  // [ 1, 2, 3, 1, 2 ]
console.log(b);  // [ 1, 2, 3, 1, 2 ]

a = [1, 2, 3, 4, 5];
a.copyWithin(0, 3);
console.log(a);  // [ 4, 5, 3, 4, 5 ]

a = [1, 2, 3, 4, 5];
a.copyWithin(0, 3, 4);
console.log(a);  // [ 4, 2, 3, 4, 5 ]

a = [1, 2, 3, 4, 5];
a.copyWithin(-2, -3, -1);
console.log(a);  // [ 1, 2, 3, 3, 4 ]

console.log([].copyWithin.call({length: 5, 3: 1}, 0, 3));  // { '0': 1, '3': 1, length: 5 }

// ES2015 Typed Arrays are subclasses of Array
let i32a = new Int32Array([1, 2, 3, 4, 5]);
i32a.copyWithin(0, 2);
console.log(i32a);  // Int32Array(5) [ 3, 4, 5, 4, 5 ]

console.log([].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4));  // Int32Array(5) [ 4, 2, 3, 4, 5 ]
```

#### polyfill

```js
if (!Array.prototype.copyWithin) {
  Array.prototype.copyWithin = function(target, start/*, end*/) {
    // Steps 1-2.
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    var O = Object(this);

    // Steps 3-5.
    var len = O.length >>> 0;

    // Steps 6-8.
    var relativeTarget = target >> 0;

    var to = relativeTarget < 0 ?
      Math.max(len + relativeTarget, 0) :
      Math.min(relativeTarget, len);

    // Steps 9-11.
    var relativeStart = start >> 0;

    var from = relativeStart < 0 ?
      Math.max(len + relativeStart, 0) :
      Math.min(relativeStart, len);

    // Steps 12-14.
    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0;

    var final = relativeEnd < 0 ?
      Math.max(len + relativeEnd, 0) :
      Math.min(relativeEnd, len);

    // Step 15.
    var count = Math.min(final - from, len - to);

    // Steps 16-17.
    var direction = 1;

    if (from < to && to < (from + count)) {
      direction = -1;
      from += count - 1;
      to += count - 1;
    }

    // Step 18.
    while (count > 0) {
      if (from in O) {
        O[to] = O[from];
      } else {
        delete O[to];
      }

      from += direction;
      to += direction;
      count--;
    }

    // Step 19.
    return O;
  };
}

```



----

### Array.prototype.entries()

返回一个新的 Array Iterator 对象，该对象包含数组中每个索引的键/值对

#### 语法

```
arr.entries()
```

#### 返回值

一个新的 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 迭代器对象。[Array Iterator](https://www.ecma-international.org/ecma-262/6.0/#sec-createarrayiterator)是对象，它的原型（`__proto__`:Array Iterator）上有一个[next](https://www.ecma-international.org/ecma-262/6.0/#sec-%arrayiteratorprototype%.next)方法，可用用于遍历迭代器取得原数组的 [key,value]。

#### 示例

##### Array Iterator

```js
let arr = ["a", "b", "c"];
let iterator = arr.entries();

console.log(iterator);  // Object [Array Iterator] {}
/*Array Iterator {}
         __proto__:Array Iterator
         next:ƒ next()
         Symbol(Symbol.toStringTag):"Array Iterator"
         __proto__:Object
*/
```

##### iterator.next()

```js
let arr = ["a", "b", "c"];
let iterator = arr.entries();

console.log(iterator.next());

/*
	{value: Array(2), done: false}
          done:false
          value:(2) [0, "a"]
           __proto__: Object
*/
// iterator.next() 返回一个对象，对于有元素的数组，
// 是 next{ value: Array(2), done: false }；
// next.done 用于指示迭代器是否完成：在每次迭代时进行更新而且都是 false，
// 直到迭代器结束 done 才是 true。
// next.value 是一个 ["key","value"] 的数组，是返回的迭代器中的元素值。
```

##### iterator.next 方法运行

```jsx
let arr = ["a", "b", "c"];
let iterator = arr.entries();

let a = [];

// for(let i=0; i< arr.length; i++){        // 实际使用的是这个
for (let i = 0; i < arr.length + 1; i++) {  // 注意，是 length+1，比数组的长度大
  let temp = iterator.next();               // 每次迭代时更新 next
  console.log(temp.done);                   // 这里可以看到更新后的 done 都是 false
  if (temp.done !== true) {                 // 遍历迭代器结束 done 才是 true
    console.log(temp.value);
    a[i] = temp.value;
  }
}

console.log(a);  // 遍历完毕，输出 next.value 的数组

/*
false
[ 0, 'a' ]
false
[ 1, 'b' ]
false
[ 2, 'c' ]
true
[ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
*/
```

##### 二维数组按行排序

```js
function sortArr(arr) {
  let goNext = true;
  let entries = arr.entries();
  while(goNext) {
    let result = entries.next();
    if (result.done !== true) {
      result.value[1].sort((a, b) => a - b);
      goNext = true;
    } else {
      goNext = false;
    }
  }
  return arr;
}

let arr = [[1,34],[456,2,3,44,234],[4567,1,4,5,6],[34,78,23,1]];
let newArr = sortArr(arr);
console.log(newArr);
/*
[
  [ 1, 34 ],
  [ 2, 3, 44, 234, 456 ],
  [ 1, 4, 5, 6, 4567 ],
  [ 1, 23, 34, 78 ]
]
*/
```

##### 使用for…of 循环

```js
let arr = ["a", "b", "c"];
let iterator = arr.entries();

for (let a of iterator) {
  console.log(a);
}
/*
[ 0, 'a' ]
[ 1, 'b' ]
[ 2, 'c' ]
*/
```



----

### Array.prototype.every()

测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值

> **备注：**若收到一个空数组，此方法在任何情况下都会返回 `true`。

#### 语法

```
arr.every(callback(element[, index[, array]])[, thisArg])
```

#### 参数

callback

​	用来测试每个元素的函数，它可以接收三个参数：

- `element`

  用于测试的当前值。

- `index`可选

  用于测试的当前值的索引。

- `array`可选

  调用 `every` 的当前数组。

thisArg

执行 `callback` 时使用的 `this` 值。

#### 返回值

如果回调函数的每一次返回都为 **truthy** 值，返回 true，否则返回 false。

#### 描述

`every` 方法为数组中的每个元素执行一次 `callback` 函数，直到它找到一个会使 `callback` 返回 [falsy](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy) 的元素。如果发现了一个这样的元素，`every` 方法将会立即返回 `false`。否则，`callback` 为每一个元素返回 `true`，`every` 就会返回 `true`。**`callback` 只会为那些已经被赋值的索引调用。不会为那些被删除或从未被赋值的索引调用。**

`callback` 在被调用时可传入三个参数：元素值，元素的索引，原数组。

如果为 `every` 提供一个 `thisArg` 参数，则该参数为调用 `callback` 时的 `this` 值**。如果省略该参数，则 `callback` 被调用时的 `this` 值，在非严格模式下为全局对象，在严格模式下传入 `undefined`。**详见 `this` 条目。

`every` 不会改变原数组。

`every` 遍历的元素范围在第一次调用 `callback` 之前就已确定了。**在调用 `every` 之后添加到数组中的元素不会被 `callback` 访问到**。如果数组中存在的元素被更改，**则他们传入 `callback` 的值是 `every` 访问到他们那一刻的值**。那些被删除的元素或从来未被赋值的元素将不会被访问到。

`every` 和数学中的"所有"类似，当所有的元素都符合条件才会返回 `true`。正因如此，**若传入一个空数组，无论如何都会返回 `true`。**（这种情况属于[无条件正确](http://en.wikipedia.org/wiki/Vacuous_truth)：正因为一个[空集合](https://en.wikipedia.org/wiki/Empty_set#Properties)没有元素，**所以它其中的所有元素都符合给定的条件。**)

#### 示例

##### 检测所有数组元素的大小

下例检测数组中的所有元素是否都大于 10。

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
console.log([12, 5, 8, 130, 44].every(isBigEnough));   // false
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true
```

##### 使用箭头函数

箭头函数为上面的检测过程提供了更简短的语法。

```js
console.log([12, 5, 8, 130, 44].every((element, index, array) => element > 10));   // false
console.log([12, 54, 18, 130, 44].every((element, index, array) => element > 10)); // true
```

```js
const isBiggerThantarget = (element) => element > 10;

console.log([12, 5, 8, 130, 44].every(isBiggerThantarget));   // false
console.log([12, 54, 18, 130, 44].every(isBiggerThantarget)); // true
```

```js
const factoryFn = (target) => {
  return (element) => {
    return element > target;
  }
}

console.log([12, 5, 8, 130, 44].every(factoryFn(10)));   // false
console.log([12, 54, 18, 130, 44].every(factoryFn(10))); // true
```

#### 兼容旧环境（Polyfill）

在 ECMA-262 第 5 版时，`every` 被添加进 ECMA-262 标准；因此，在某些实现环境中，它尚未被支持。你可以把下面的代码放到脚本的开头来解决此问题，该代码允许在那些没有原生支持 `every` 的实现环境中使用它。该算法是 ECMA-262 第 5 版中指定的算法，它假定 `Object` 和 `TypeError` 拥有它们的初始值，且 `fun.call` 等价于 [`Function.prototype.call`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)。

```js
if (!Array.prototype.every) {
  Array.prototype.every = function(callbackfn, thisArg) {
    'use strict';
    var T, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the this
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal method
    //    of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
    if (typeof callbackfn !== 'function') {
      throw new TypeError();
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat, while k < len
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal method
        //    of O with argument Pk.
        kValue = O[k];

        // ii. Let testResult be the result of calling the Call internal method
        //     of callbackfn with T as the this value and argument list
        //     containing kValue, k, and O.
        var testResult = callbackfn.call(T, kValue, k, O);

        // iii. If ToBoolean(testResult) is false, return false.
        if (!testResult) {
          return false;
        }
      }
      k++;
    }
    return true;
  };
}

```





----

### Array.prototype.fill()

用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

#### 语法

```
arr.fill(value[, start[, end]])
```

#### 参数

value

用来填充数组元素的值。

`start` 可选

起始索引，默认值为 0。

`end` 可选

终止索引，默认值为 `this.length`。

#### 返回值

修改后的数组。

#### 描述

**`fill`** 方法接受三个参数 `value`, `start` 以及 `end`. `start` 和 `end` 参数是可选的，其默认值分别为 `0` 和 `this` 对象的 `length `属性值。

如果 `start` 是个负数，则开始索引会被自动计算成为 `length+start`, 其中 `length` 是 `this` 对象的 `length `属性值。如果 `end` 是个负数，则结束索引会被自动计算成为 `length+end`。

`fill` 方法故意被设计成通用方法，**该方法不要求 `this` 是数组对象**。

`fill` 方法是个可变方法，**它会改变调用它的 `this` 对象本身，然后返回它**，而并不是返回一个副本。

**当一个对象被传递给 `fill`方法的时候，填充数组的是这个对象的引用。**

#### 示例

```js
[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3);         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]
Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.
var arr = Array(3).fill({}) // [{}, {}, {}];
// 需要注意如果 fill 的参数为引用类型，会导致都执行同一个引用类型
// 如 arr[0] === arr[1] 为 true
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]


let arr = new Array(5).fill({a: 1, b: 2});
console.log(arr[0]);  // { a: 1, b: 2 }

arr[1]['c'] = "c";

console.log(arr[0]);  // { a: 1, b: 2, c: 'c' }
```

#### polyfill

```jsx
if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, 'fill', {
    value: function(value) {

      // Steps 1-2.
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      var O = Object(this);

      // Steps 3-5.
      var len = O.length >>> 0;

      // Steps 6-7.
      var start = arguments[1];
      var relativeStart = start >> 0;

      // Step 8.
      var k = relativeStart < 0 ?
        Math.max(len + relativeStart, 0) :
        Math.min(relativeStart, len);

      // Steps 9-10.
      var end = arguments[2];
      var relativeEnd = end === undefined ?
        len : end >> 0;

      // Step 11.
      var final = relativeEnd < 0 ?
        Math.max(len + relativeEnd, 0) :
        Math.min(relativeEnd, len);

      // Step 12.
      while (k < final) {
        O[k] = value;
        k++;
      }

      // Step 13.
      return O;
    }
  });
}

```



----

### Array.prototype.filter()

创建一个新数组，其包含通过所提供函数实现的测试的所有元素

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

#### 语法

```js
var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
```

#### 参数

callback

用来测试数组的每个元素的函数。返回 `true` 表示该元素通过测试，保留该元素，`false` 则不保留。它接受以下三个参数：

- `element`

  数组中当前正在处理的元素。

- `index`可选

  正在处理的元素在数组中的索引。

- `array`可选

  调用了 `filter` 的数组本身。

`thisArg`可选

执行 `callback` 时，用于 `this` 的值。

#### 返回值

一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。

#### 描述

`filter` 为数组中的每个元素调用一次 `callback` 函数，并利用所有使得 `callback` 返回 true 或[等价于 true 的值](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy)的元素创建一个新数组。**`callback` 只会在已经赋值的索引上被调用**，对于那些已经被删除或者从未被赋值的索引不会被调用。那些没有通过 `callback` 测试的元素会被跳过，不会被包含在新数组中。

`callback` 被调用时传入三个参数：

1. 元素的值
2. 元素的索引
3. 被遍历的数组本身

如果为 `filter` 提供一个 `thisArg` 参数，则它会被作为 `callback` 被调用时的 `this` 值。否则，`callback` 的 `this` 值在非严格模式下将是全局对象，严格模式下为 `undefined`。`callback` 函数最终观察到的 `this` 值是根据[通常函数所看到的 "this"的规则](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)确定的。

`filter` 不会改变原数组，它返回过滤后的新数组。

`filter` 遍历的元素范围在第一次调用 `callback` 之前就已经确定了。**在调用 `filter` 之后被添加到数组中的元素不会被 `filter` 遍历到。**如果已经存在的元素被改变了，则他们传入 `callback` 的值是 `filter` 遍历到它们那一刻的值。被删除或从来未被赋值的元素不会被遍历到。

#### 示例

##### 筛选排除所有较小的值

下例使用 filter 创建了一个新数组，该数组的元素由原数组中值大于 10 的元素组成。

```js
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

```

##### 过滤 JSON 中的无效条目

以下示例使用 filter() 创建具有非零 id 的元素的 json。

```js
let arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

let invalidEntries = 0;

function isNumber(obj) {
  return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterByID(item) {
  if (isNumber(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

let arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries);
// Number of Invalid Entries = 5
```

##### 在数组中搜索

下例使用 filter() 根据搜索条件来过滤数组内容。

```js
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
function filterItems(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
```

##### ES2015 实现

```js
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
const filterItems = (query) => {
  return fruits.filter((el) =>
    el.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
```



#### polyfill

```js
if (!Array.prototype.filter){
  Array.prototype.filter = function(func, thisArg) {
    'use strict';
    if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) )
        throw new TypeError();

    var len = this.length >>> 0,
        res = new Array(len), // preallocate array
        t = this, c = 0, i = -1;
    if (thisArg === undefined){
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func(t[i], i, t)){
            res[c++] = t[i];
          }
        }
      }
    }
    else{
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func.call(thisArg, t[i], i, t)){
            res[c++] = t[i];
          }
        }
      }
    }

    res.length = c; // shrink down array to proper size
    return res;
  };
}
```



----

### Array.prototype.find()

返回数组中满足提供的测试函数的第一个元素的值。**否则返回 undefined**

```js
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

```



#### 语法

```js
arr.find(callback[, thisArg])
```

#### 参数

callback

在数组每一项上执行的函数，接收 3 个参数：

- `element`

  当前遍历到的元素。

- `index`可选

  当前遍历到的索引。

- `array`可选

  数组本身。

`thisArg`可选

执行回调时用作 `this` 的对象。

#### 返回值

数组中第一个满足所提供测试函数的元素的值，否则返回 undefined。

#### 描述

`find` 方法对数组中的每一项元素执行一次 `callback` 函数，直至有一个 callback 返回 `true`。当找到了这样一个元素后，该方法会立即返回这个元素的值，否则返回 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。**注意 `callback` 函数会为数组中的每个索引调用即从 `0` 到 `length - 1`，而不仅仅是那些被赋值的索引**，这**意味着对于稀疏数组来说，该方法的效率**要**低于**那些**只遍历有值的索引的方法**。

`callback` 函数带有 3 个参数：当前元素的值、当前元素的索引，以及数组本身。

如果提供了 `thisArg` 参数，那么它将作为每次 `callback` 函数执行时的 `this`，如果未提供，则使用 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。

`find` 方法不会改变数组。

**在第一次调用 `callback` 函数时会确定元素的索引范围**，因此在 `find` 方法开始执行之后添加到数组的新元素将不会被 `callback` 函数访问到。如果数组中一个尚未被 `callback` 函数访问到的元素的值被 `callback` 函数所改变，那么当 `callback` 函数访问到它时，**它的值是将是根据它在数组中的索引所访问到的当前值**。被删除的元素**仍旧会被访问到，但是其值已经是 undefined 了**。

#### 示例

##### 用对象的属性查找数组里的对象

```js
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
  return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }
```

##### 寻找数组中的质数

下面的例子展示了如何从一个数组中寻找质数（如果找不到质数则返回 undefined）

```js
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

当在回调中删除数组中的一个值时，当访问到这个位置时，其传入的值是 undefined：

```js
// Declare array with no elements at indexes 2, 3, and 4
const array = [0,1,,,,5,6];

// Shows all indexes, not just those with assigned values
array.find(function(value, index) {
  console.log('Visited index ', index, ' with value ', value);
});
/*
Visited index  0  with value  0
Visited index  1  with value  1
Visited index  2  with value  undefined
Visited index  3  with value  undefined
Visited index  4  with value  undefined
Visited index  5  with value  5
Visited index  6  with value  6
*/


// Shows all indexes, including deleted
array.find(function(value, index) {
  // Delete element 5 on first iteration
  if (index === 0) {
    console.log('Deleting array[5] with value ', array[5]);
    delete array[5];
  }
  // Element 5 is still visited even though deleted
  console.log('Visited index ', index, ' with value ', value);
});
/*
Deleting array[5] with value  5
Visited index  0  with value  0
Visited index  1  with value  1
Visited index  2  with value  undefined
Visited index  3  with value  undefined
Visited index  4  with value  undefined
Visited index  5  with value  undefined
Visited index  6  with value  6
*/
```

#### polyfill

```js
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    }
  });
}
```



----

### Array.prototype.findIndex()

findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。

#### 语法

```
arr.findIndex(callback[, thisArg])
```



#### 参数

callback

针对数组中的每个元素，都会执行该回调函数，执行时会自动传入下面三个参数：

- `element`

  当前元素。

- `index`

  当前元素的索引。

- `array`

  调用`findIndex`的数组。

thisArg

可选。执行`callback`时作为`this`对象的值。

#### 返回值

 数组中通过提供测试函数的第一个元素的**索引**。否则，返回-1

#### 描述

`findIndex`方法对数组中的每个数组索引`0..length-1`（包括）执行一次`callback`函数，直到找到一个`callback`函数返回真实值（强制为`true`）的值。如果找到这样的元素，`findIndex`会立即返回该元素的索引。如果回调从不返回真值，或者数组的`length`为 0，则`findIndex`返回-1。 与某些其他数组方法（如 Array#some）不同，在稀疏数组中，即使对于数组中不存在的条目的索引也会调用回调函数。

回调函数调用时有三个参数：元素的值，元素的索引，以及被遍历的数组。

如果一个 `thisArg` 参数被提供给 `findIndex`, 它将会被当作`this`使用在每次回调函数被调用的时候。如果没有被提供，将会使用[`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。

`findIndex`不会修改所调用的数组。

在第一次调用`callback`函数时会确定元素的索引范围，因此在`findIndex`方法开始执行之后添加到数组的新元素将不会被`callback`函数访问到。如果数组中一个尚未被`callback`函数访问到的元素的值被`callback`函数所改变，那么当`callback`函数访问到它时，它的值是将是根据它在数组中的索引所访问到的当前值。**被删除的元素仍然会被访问到。**

#### 示例

##### 查找数组中首个质数元素的索引

以下示例查找数组中素数的元素的索引（如果不存在素数，则返回-1）。

```js
const isPrime = (element) => {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
```

#### polyfill

```js
// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    }
  });
}

```

-----

### Array.prototype.flat()

flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```



### Array.prototype.flatMap()

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.forEach()

对数组的每个元素执行一次给定的函数

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.includes()

判断一个数组是否包含一个指定的值，如果包含则返回 true，否则返回 false

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.indexOf()

返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回 -1

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.join()

将一个数组的所有元素连接成一个字符串并返回这个字符串

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.keys()

返回一个包含数组中每个索引键的 Array Iterator 对象

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.lastIndexOf()

返回指定元素在数组中的最后一个的索引，如果不存在则返回 -1

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.map()

返回一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.pop()

从数组中删除最后一个元素，并返回该元素的值

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.push()

将一个或多个元素添加到数组的末尾，并返回该数组的新长度

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.reduce()

对数组中的每个元素执行一个由您提供的 reducer 函数（升序执行），将其结果汇总为单个返回值

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.reduceRight()

接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.reverse()

将数组中元素的位置颠倒，并返回该数组。该方法会改变原数组

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.shift()

从数组中删除第一个元素，并返回该元素的值

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.slice()

提取源数组的一部分并返回一个新数组

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.some()

测试数组中是不是至少有一个元素通过了被提供的函数测试

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.sort()

对数组元素进行原地排序并返回此数组

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.splice()

通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.toLocaleString()

返回一个字符串表示数组中的元素。数组中的元素将使用各自的 Object.prototype.toLocaleString() 方法转成字符串

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.toString()

返回一个字符串表示指定的数组及其元素。数组中的元素将使用各自的 Object.prototype.toString() 方法转成字符串

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.unshift()

将一个或多个元素添加到数组的头部，并返回该数组的新长度

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.values()

返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype[@@iterator]()

返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



-----



### Array.prototype.at()

返回给定索引处的数组项。接受负整数，从最后一项开始倒数。

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.groupBy()

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.groupByToMap()

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```



### Array.prototype.toSource()

#### 语法



#### 参数



#### 返回值



#### 描述



#### 示例

```

```

#### polyfill

```
1
```





```

```

