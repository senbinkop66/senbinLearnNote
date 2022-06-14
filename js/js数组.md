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

### Array.prototype[@@unscopables]

包含了所有 ES2015 (ES6) 中新定义的、且并未被更早的 ECMAScript 标准收纳的属性名。这些属性被排除在由 with 语句绑定的环境中

----

## 实例方法

### Array.prototype.concat()

用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组

### Array.prototype.copyWithin()

浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度

### Array.prototype.entries()

返回一个新的 Array Iterator 对象，该对象包含数组中每个索引的键/值对

### Array.prototype.every()

测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值

### Array.prototype.fill()

用一个固定值填充一个数组中从起始索引到终止索引内的全部元素

### Array.prototype.filter()

创建一个新数组，其包含通过所提供函数实现的测试的所有元素

### Array.prototype.find()

返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined

### Array.prototype.findIndex()

返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1

### Array.prototype.flat()

按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回

### Array.prototype.flatMap()

使用映射函数映射每个元素，然后将结果压缩成一个新数组

### Array.prototype.forEach()

对数组的每个元素执行一次给定的函数

### Array.prototype.includes()

判断一个数组是否包含一个指定的值，如果包含则返回 true，否则返回 false

### Array.prototype.indexOf()

返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回 -1

### Array.prototype.join()

将一个数组的所有元素连接成一个字符串并返回这个字符串

### Array.prototype.keys()

返回一个包含数组中每个索引键的 Array Iterator 对象

### Array.prototype.lastIndexOf()

返回指定元素在数组中的最后一个的索引，如果不存在则返回 -1

### Array.prototype.map()

返回一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值

### Array.prototype.pop()

从数组中删除最后一个元素，并返回该元素的值

### Array.prototype.push()

将一个或多个元素添加到数组的末尾，并返回该数组的新长度

### Array.prototype.reduce()

对数组中的每个元素执行一个由您提供的 reducer 函数（升序执行），将其结果汇总为单个返回值

### Array.prototype.reduceRight()

接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值

### Array.prototype.reverse()

将数组中元素的位置颠倒，并返回该数组。该方法会改变原数组

### Array.prototype.shift()

从数组中删除第一个元素，并返回该元素的值

### Array.prototype.slice()

提取源数组的一部分并返回一个新数组

### Array.prototype.some()

测试数组中是不是至少有一个元素通过了被提供的函数测试

### Array.prototype.sort()

对数组元素进行原地排序并返回此数组

### Array.prototype.splice()

通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容

### Array.prototype.toLocaleString()

返回一个字符串表示数组中的元素。数组中的元素将使用各自的 Object.prototype.toLocaleString() 方法转成字符串

### Array.prototype.toString()

返回一个字符串表示指定的数组及其元素。数组中的元素将使用各自的 Object.prototype.toString() 方法转成字符串

### Array.prototype.unshift()

将一个或多个元素添加到数组的头部，并返回该数组的新长度

### Array.prototype.values()

返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值

### Array.prototype[@@iterator]()

返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值

-----



### Array.prototype.at()

返回给定索引处的数组项。接受负整数，从最后一项开始倒数。

### Array.prototype.groupBy()



### Array.prototype.groupByToMap()



### Array.prototype.toSource()





```

```

