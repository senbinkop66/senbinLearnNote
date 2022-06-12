# Symbol

**symbol** 是一种基本数据类型（[primitive data type](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive)）。`Symbol()` 函数会返回 **symbol** 类型的值，该类型具有静态属性和静态方法。它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局的 symbol 注册，且类似于内建对象类，**但作为构造函数来说它并不完整，因为它不支持语法："`new Symbol()`"。**

## 特点

- 数据类型“**symbol**”是一种基本数据类型，该类型的性质在于这个类型的值**可以用来创建匿名的对象属性**。

- 该数据类型通常被用作一个对象属性的键值——当你想让它是私有的时候。例如，**symbol** 类型的键存在于各种内置的 JavaScript 对象中。

- 同样，自定义类也可以这样创建私有成员。

- **symbol** 数据类型具有非常明确的目的，并且因为其功能性单一的优点而突出；
- 一个 **symbol** 实例可以被赋值到一个左值变量，还可以通过标识符检查类型，这就是它的全部特性。
- **不能对该类型实例使用其他操作符**（将“**Symbol**”类型的实例与“**Number**”类型的实例对比，例如整数 42，该实例就具有将值与其他类型的值进行比较或组合的运算符）。

一个具有数据类型“**symbol**”的值可以被称为“符号类型值”。在 JavaScript 运行时环境中，一个符号类型值可以通过调用函数 `Symbol()` 创建，这个函数动态地生成了一个匿名，唯一的值。**Symbol 类型唯一合理的用法是用变量存储 symbol 的值，然后使用存储的值创建对象属性。**以下示例使用"`var`"创建一个变量来保存 symbol。

```js
var  myPrivateMethod  = Symbol();
this[myPrivateMethod] = function() {...};
```

当一个 symbol 类型的值在属性赋值语句中被用作标识符，该属性（像这个 symbol 一样）是**匿名的**；**并且是不可枚举的**。因为这个属性是不可枚举的，它不会在循环结构 “`for( ... in ...)`”中作为成员出现，也因为这个属性是匿名的，它同样不会出现在“`Object.getOwnPropertyNames()`”的返回数组里。**这个属性可以通过创建时的原始 symbol 值访问到，或者通过遍历“`Object.getOwnPropertySymbols()`”返回的数组。**在之前的代码示例中，通过保存在变量 `myPrivateMethod`的值可以访问到对象属性。

内置函数“[`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)`()`”**是一个不完整的类**，当作为函数调用时会返回一个 symbol 值，试图通过语法“`new Symbol()`”作为构造函数调用时会抛出一个错误。**它有一些静态方法来访问 JavaScript 全局 symbol 表，还有一些静态属性用来保存已存在通用对象里的特定 symbol 地址。**通过 `Symbol()` 函数创建 symbol 值已在上面解释过。

理解试图将 `Symbol()`作为构造函数使用会抛出错误**可以提前预防意外（当作构造函数使用）创建对象导致的混乱**。

访问全局 symbol 注册表的方法是 `Symbol.for()`和 `Symbol.keyFor()`；**它们斡旋在全局 symbol 表（或注册表）与运行时环境之间**。symbol 注册表通常构建在 JavaScript 编译器基础设施，**所以 symbol 注册表的内容不会出现 JavaScript 运行时环境**，除了通过它们的反射方法。

*`Symbol.for("tokenString")`* 方法从注册表返回一个 symbol 值，*`Symbol.keyFor(symbolValue)`* 方法从注册表返回 token 字符串；正好相反，所以下面为 true：

```js
Symbol.keyFor(Symbol.for("tokenString"))=="tokenString";  // true
```

**Symbol** 类具有一些静态属性，对于匿名命名来说，这带有一点讽刺意味。这类属性只有几个; 它们是所谓的“众所周知”的 symbol。它们是在某些内置对象中找到的某些特定方法属性的 symbol。暴露出这些 symbol 使得可以直接访问这些行为；这样的访问可能是有用的，例如在定义自定义类的时候。普遍的 symbol 的例子有：“`Symbol.iterator`”用于类似数组的对象，“`Symbol.search`”用于字符串对象。

`Symbol()`函数及其创建的 symbol 值可能对设计自定义类的编程人员有用。**symbol 值提供了一种自定义类可以创建私有成员的方式，并维护一个仅适用于该类的 symbol 注册表。**自定义类可以使用 symbol 值来创建“自有”属性，这些属性避免了不必要的被偶然发现带来的影响。在类定义中，动态创建的 symbol 值将保存到作用域变量中，该变量只能在类定义中私有地使用。没有 token 字符串; 作用域变量起到 token 的等同作用。



Symbol 是 [JavaScript](https://developer.mozilla.org/zh-CN/docs/Glossary/JavaScript) 的 [原始数据类型](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive) ，Symbol 实例是唯一且不可改变的。 

在一些编程语言中 symbol 也被称为原子 (atoms).

在[JavaScript](https://developer.mozilla.org/zh-CN/docs/Glossary/JavaScript)中，Symbol 是 [基本数据类型](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive) 的一种，[`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 对象是 Symbol 原始值的[封装 (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/Wrapper) 。

Symbol 的描述是可选的，但仅用于调试目的。

Symbol 类型是 ECMAScript 2015 中新添加的特性，在 ECMAScript 5 中没有对应的类型。

```js
Symbol("foo") !== Symbol("foo")

const foo = Symbol()
const bar = Symbol()
typeof foo === "symbol"
typeof bar === "symbol"

let obj = {}
obj[foo] = "foo"
obj[bar] = "bar"

JSON.stringify(obj) // {}
Object.keys(obj) // []

Object.getOwnPropertyNames(obj) // []

Object.getOwnPropertySymbols(obj) // [ foo, bar ]
```



每个从 `Symbol()` 返回的 symbol 值都是唯一的。一个 symbol 值能作为对象属性的标识符；这是该数据类型仅有的目的。

```js
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1);  // symbol

console.log(symbol2 === 42);  // false

console.log(symbol3.toString());  // Symbol(foo)

console.log(Symbol('foo') === Symbol('foo'));  // false

```

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#syntax)

```js
Symbol([description])
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#parameters)

- `description` 可选

  可选的，字符串类型。对 symbol 的描述，**可用于调试但不是访问 symbol 本身。**

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#description)

直接使用`Symbol()`创建新的 symbol 类型，并用一个可选的字符串作为其描述。

```js
var sym1 = Symbol();
var sym2 = Symbol('foo');
var sym3 = Symbol('foo');
```

上面的代码创建了三个新的 symbol 类型。 注意，`Symbol("foo")` 不会强制将字符串 “foo” 转换成 symbol 类型。它每次都会创建一个新的 symbol 类型：

```js
Symbol("foo") === Symbol("foo"); // false
```

下面带有 [`new`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 运算符的语法将抛出 [`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError) 错误：

```js
var sym = new Symbol(); // TypeError
```

这会阻止创建一个显式的 Symbol 包装器对象而不是一个 Symbol 值。**围绕原始数据类型创建一个显式包装器对象从 ECMAScript 6 开始不再被支持。** 然而，现有的原始包装器对象，如 `new Boolean`、`new String`以及`new Number`，因为遗留原因仍可被创建。

如果你真的想创建一个 Symbol 包装器对象 (`Symbol wrapper object`)，你可以使用 `Object()` 函数：

```js
var sym = Symbol("foo");
console.log(typeof sym)     // "symbol"

var symObj = Object(sym);
console.log(typeof symObj);  // "object"
```

### [全局共享的 Symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#全局共享的_symbol)

上面使用 `Symbol()` 函数的语法，不会在你的整个代码库中创建一个可用的全局的 symbol 类型。要创建跨文件可用的 symbol，甚至跨域（每个都有它自己的全局作用域），使用 [`Symbol.for()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for) 方法和 [`Symbol.keyFor()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor) 方法从全局的 symbol 注册表设置和取得 symbol。

### [在对象中查找 Symbol 属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#在对象中查找_symbol_属性)

[`Object.getOwnPropertySymbols()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols) 方法让你在查找一个给定对象的符号属性时返回一个 symbol 类型的数组。注意，每个初始化的对象都是没有自己的 symbol 属性的，因此这个数组可能为空，除非你已经在对象上设置了 symbol 属性。



## [属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#properties)

- `Symbol.length`

  **长度属性，值为 0。**

- [`Symbol.prototype` (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

  `symbol` 构造函数的原型。

### [众所周知的 symbols](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#众所周知的_symbols)

除了自己创建的 symbol，JavaScript 还内建了一些在 ECMAScript 5 之前没有暴露给开发者的 symbol，它们代表了内部语言行为。它们可以使用以下属性访问：

- 迭代 symbols [`Symbol.iterator`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)

  一个返回一个对象默认迭代器的方法。被 `for...of` 使用。

- [`Symbol.asyncIterator`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) 

  一个返回对象默认的**异步迭代器**的方法。被 `for await of` 使用。

- 正则表达式 symbols [`Symbol.match`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match)

  一个用于对字符串进行匹配的方法，也用于确定一个对象是否可以作为正则表达式使用。被 [`String.prototype.match()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match) 使用。

- [`Symbol.replace`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)

  一个替换匹配字符串的子串的方法。被 [`String.prototype.replace()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 使用。

- [`Symbol.search`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search)

  一个返回一个字符串中与正则表达式相匹配的索引的方法。被 [`String.prototype.search()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search) 使用。

- [`Symbol.split`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split)

  一个在匹配正则表达式的索引处拆分一个字符串的方法.。被 [`String.prototype.split()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split) 使用。

- 其他 symbols [`Symbol.hasInstance`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance)

  一个确定一个构造器对象识别的对象是否为它的实例的方法。被 [`instanceof`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) 使用。

- [`Symbol.isConcatSpreadable`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable)

  一个布尔值，表明一个对象是否应该 flattened 为它的数组元素。被 [`Array.prototype.concat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) 使用。

- [`Symbol.unscopables`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables)

  拥有和继承属性名的一个对象的值被排除在与环境绑定的相关对象外。

- [`Symbol.species`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species)

  **一个用于创建派生对象的构造器函数。**

- [`Symbol.toPrimitive`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)

  一个将对象转化为基本数据类型的方法。

- [`Symbol.toStringTag`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)

  用于对象的默认描述的字符串值。被 [`Object.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) 使用。

## [方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#methods)

- [`Symbol.for(key)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for)

  使用给定的 key 搜索现有的 symbol，如果找到则返回该 symbol。**否则将使用给定的 key 在全局 symbol 注册表中创建一个新的 symbol。**

- [`Symbol.keyFor(sym)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor)

  从全局 symbol 注册表中，为给定的 symbol 检索一个共享的？symbol key。

## [Symbol 原型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#boolean_instances)

所有 Symbols 继承自 [`Symbol.prototype` (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol).

### [实例属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#属性)

- [`Symbol.prototype.description`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description)

  一个只读的字符串，意为对该 Symbol 对象的描述

### [实例方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#方法)

- [`Symbol.prototype.toSource`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toSource)

  返回该 Symbol 对象的源代码。该方法重写了 [`Object.prototype.toSource`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource) 方法

- [`Symbol.prototype.toString`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString)

  返回一个包含着该 Symbol 对象描述的字符串。该方法重写了 [`Object.prototype.toString`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) 方法

- [`Symbol.prototype.valueOf`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/valueOf)

  返回该 Symbol 对象。该方法重写了 [`Symbol.prototype.valueOf`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/valueOf) 方法

- [`Symbol.prototype[@@toPrimitive\]`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive)

  返回该 Symbol 对象。



## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#examples)

### [对 symbol 使用 typeof 运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#creating_boolean_objects_with_an_initial_value_of_false)

 [`typeof`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)运算符能帮助你识别 symbol 类型

```js
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'

typeof Symbol.iterator === 'symbol'
```

### [Symbol 类型转换](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#symbol_类型转换)

当使用 symbol 值进行类型转换时需要注意一些事情：

- **尝试将一个 symbol 值转换为一个 number 值时**，会抛出一个 [`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError) 错误 (e.g. `+sym` or `sym | 0`).
- 使用**宽松相等**时，`Object(sym) == sym`  returns `true.`
- 这会阻止你从一个 symbol 值隐式地创建一个新的 string 类型的属性名。例如，`Symbol("foo") + "bar"` 将抛出一个 [`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError) (can't convert symbol to string).
- ["safer" `String(sym)` conversion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#String_conversion) 的作用会像 symbol 类型调用 [`Symbol.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString) 一样，但是注意 `new String(sym)` 将抛出异常。

### [Symbols 与 `for...in` 迭代](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#symbols_与_for...in_迭代)

Symbols 在 [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) 迭代中不可枚举。另外，[`Object.getOwnPropertyNames()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) 不会返回 symbol 对象的属性，但是你能使用 [`Object.getOwnPropertySymbols()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols) 得到它们。

```js
var obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

for (var i in obj) {
   console.log(i); // logs "c" and "d"
}
```

### [Symbols 与 `JSON.stringify()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#symbols_与_json.stringify)

当使用 JSON.stringify() 时，**以 symbol 值作为键的属性会被完全忽略**：

```js
JSON.stringify({[Symbol("foo")]: "foo"});
// '{}'
```

更多细节，请看 [`JSON.stringify()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)。

### [Symbol 包装器对象作为属性的键](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#symbol_包装器对象作为属性的键)

**当一个 Symbol 包装器对象作为一个属性的键**时**，这个对象将被强制转换为它包装过的 symbol 值**：

```js
var sym = Symbol("foo");
var obj = {[sym]: 1};

console.log(obj[sym]);            // 1
console.log(obj[Object(sym)]);    //  1
```



----

# Symbol.asyncIterator

`Symbol.asyncIterator` 符号**指定了一个对象的默认异步迭代器**。如果一个对象设置了这个属性，它就是异步可迭代对象，可用于`for await...of`循环。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator#描述)

`Symbol.asyncIterator` 是一个用于访问对象的`@@asyncIterator`方法的内建符号。**一个异步可迭代对象必须要有`Symbol.asyncIterator`属性。**

| `Symbol.asyncIterator` 属性的属性特性： |       |
| :-------------------------------------- | ----- |
| writable                                | false |
| enumerable                              | false |
| configurable                            | false |

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator#示例)

### [自定义异步可迭代对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator#自定义异步可迭代对象)

你可以通过设置`[Symbol.asyncIterator]`属性来自定义异步可迭代对象。

```js
const myAsyncIterable = new Object();

myAsyncIterable[Symbol.asyncIterator] = async function*() {
  yield "Hello";
  yield "async";
  yield "iteration!";
};

(async () => {
  for await (const x of myAsyncIterable) {
    console.log(x);
  }
})();

/*
Hello
async
iteration!
*/
```

### [内建异步可迭代对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator#内建异步可迭代对象)

目前没有默认设定了`[Symbol.asyncIterator]`属性的 JavaScript 内建的对象。不过，WHATWG（网页超文本应用技术工作小组）Streams 会被设定为第一批异步可迭代对象，`[Symbol.asyncIterator]` 最近已在设计规范中落地。

----

# Symbol.prototype.description

`description` 是一个**只读属性**，它会返回 [`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 对象的可选描述的字符串。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description#语法)

```js
Symbol('myDescription').description;
Symbol.iterator.description;
Symbol.for('foo').description;
```

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description#描述)

[`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 对象可以通过一个可选的描述创建，可用于调试，但不能用于访问 symbol 本身。`Symbol.prototype.description` 属性可以用于读取该描述。与 `Symbol.prototype.toString()` 不同的是它不会包含 "`Symbol()`" 的字符串。具体请看实例。

## [实例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description#实例)

```js
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

```

----

# Symbol.hasInstance

**`Symbol.hasInstance`****用于判断某对象是否为某构造器的实例**。因此你可以用它自定义 [`instanceof`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) 操作符在某个类上的行为。

| `Symbol.hasInstance` 属性的属性特性： |       |
| :------------------------------------ | ----- |
| writable                              | false |
| enumerable                            | false |
| configurable                          | false |

你可实现一个自定义的`instanceof` 行为，例如：

```js
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}

let arr = [1, 2, 3];
let arr2 = new MyArray();

console.log(arr instanceof MyArray);  // true
console.log(arr2 instanceof MyArray);  // false
```

----

# Symbol.isConcatSpreadable

内置的`Symbol.isConcatSpreadable`符号用于配置某**对象**作为[`Array.prototype.concat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)方法的参数时**是否展开其数组元素**。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable#描述)

`@@isConcatSpreadable` 符号 (`Symbol.isConcatSpreadable`) 可以直接定义为对象属性或继承而来，它是布尔类型。它可以控制数组或类似数组（array-like）的对象的行为：

- 对于数组对象，默认情况下，用于 concat 时，会按数组元素展开然后进行连接（数组元素作为新数组的元素）。重置`Symbol.isConcatSpreadable`可以改变默认行为。
- 对于类似数组的对象，用于 concat 时，**该对象整体作为新数组的元素**，重置`Symbol.isConcatSpreadable`可改变默认行为。



| `Symbol.isConcatSpreadable` 属性的属性特性： |       |
| :------------------------------------------- | ----- |
| writable                                     | false |
| enumerable                                   | false |
| configurable                                 | false |

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable#示例)

### [数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable#数组)

默认情况下，[`Array.prototype.concat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) 展开其元素连接到结果中：

```js
let alpha = ["a", "b", "c"];
let numeric = [1, 2, 3];

let alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric);  //  [ 'a', 'b', 'c', 1, 2, 3 ]
```

设置`Symbol.isConcatSpreadable`为`false`：

```js
let alpha = ["a", "b", "c"];
let numeric = [1, 2, 3];

numeric[Symbol.isConcatSpreadable] = false;

let alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric);  //  

/*
(4) ['a', 'b', 'c', Array(3)]
0: "a"
1: "b"
2: "c"
3: Array(3)
0: 1
1: 2
2: 3
Symbol(Symbol.isConcatSpreadable): false
length: 3
[[Prototype]]: Array(0)
length: 4
[[Prototype]]: Array(0)
*/
```

### [Array-like 对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable#array-like_对象)

对于类数组 (array-like) 对象，默认不展开。

```js
let numeric = [1, 2, 3];

let fakeArray = {
  length: 3,
  0: "a",
  1: "b",
  2: "c"
}

let fakeArrayNumeric = numeric.concat(fakeArray);

console.log(fakeArrayNumeric);  //  [ 1, 2, 3, { '0': 'a', '1': 'b', '2': 'c', length: 3 } ]

```

期望展开其元素用于连接，需要设置 `Symbol.isConcatSpreadable` 为 true：

```js
let numeric = [1, 2, 3];

let fakeArray = {
  [Symbol.isConcatSpreadable]: true,
  length: 3,
  0: "a",
  1: "b",
  2: "c"
}

let fakeArrayNumeric = numeric.concat(fakeArray);

console.log(fakeArrayNumeric);  //  [ 1, 2, 3, 'a', 'b', 'c' ]
```

----

# Symbol.iterator

**Symbol.iterator** 为每一个对象定义了默认的迭代器。该迭代器可以被 `for...of` 循环使用。

| `Symbol.iterator` 属性的属性特性： |       |
| :--------------------------------- | ----- |
| writable                           | false |
| enumerable                         | false |
| configurable                       | false |

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator#描述)

当需要对一个对象进行迭代时（比如开始用于一个`for..of`循环中），它的`@@iterator`方法都会在不传参情况下被调用，返回的**迭代器**用于获取要迭代的值。

一些内置类型拥有默认的迭代器行为，其他类型（如 [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)）则没有。下表中的内置类型拥有默认的`@@iterator`方法：

- [`Array.prototype[@@iterator]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)
- [`TypedArray.prototype[@@iterator]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator)
- [`String.prototype[@@iterator]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)
- [`Map.prototype[@@iterator]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator)
- [`Set.prototype[@@iterator]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator)

更多信息请参见[迭代协议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)。

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator#示例)

### [自定义迭代器](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator#自定义迭代器)

我们可以像下面这样创建自定义的迭代器：

```js
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

```

### [不符合标准的迭代器](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator#不符合标准的迭代器)

如果一个迭代器 `@@iterator` 没有返回一个迭代器对象，那么它就是一个不符合标准的迭代器，这样的迭代器将会在运行期抛出异常，甚至非常诡异的 Bug。

```js
var nonWellFormedIterable = {}

nonWellFormedIterable[Symbol.iterator] = () => 1

[...nonWellFormedIterable] // TypeError: [] is not a function
```

----

# Symbol.match

`Symbol.match `**指定了匹配的是正则表达式而不是字符串**。[`String.prototype.match()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match) 方法会调用此函数。

## 描述

此函数**还用于标识对象是否具有正则表达式的行为**。比如， String.prototype.startsWith()，String.prototype.endsWith() 和 String.prototype.includes() 这些方法会检查其第一个参数是否是正则表达式，是正则表达式就抛出一个TypeError。**现在，如果 match symbol 设置为 false（或者一个 假值），就表示该对象不打算用作正则表达式对象。**

| `Symbol.match` 属性的属性特性： |       |
| :------------------------------ | ----- |
| writable                        | false |
| enumerable                      | false |
| configurable                    | false |

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match#示例)

### [禁止表达式检查](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match#禁止表达式检查)

下面代码会抛出一个 [`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError)：

```js
console.log("/bar/".startsWith(/bar/));
// ypeError: First argument to String.prototype.startsWith must not be a regular expression
// Throws TypeError，因为 /bar/ 是一个正则表达式
// 且 Symbol.match 没有修改。
```

但是，**如果你将 `Symbol.match` 置为 `false`，使用 `match` 属性的表达式检查会认为该象不是正则表达式对象**。`startsWith` 和 `endsWith` 方法将不会抛出 `TypeError`。

```js
let reg = /foo/;
reg[Symbol.match] = false;

console.log("/bar/foo/".startsWith(reg));  // false
console.log("/foo/bar/".startsWith(reg));  // true

console.log("/bar/foo/".endsWith(reg));  // true
console.log("/foo/bar/".endsWith(reg));  // false

```

---

# Symbol.matchAll

`Symbol.matchAll` 返回一个迭代器，**该迭代器根据字符串生成正则表达式的匹配项**。此函数可以被 [`String.prototype.matchAll()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) 方法调用。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll#描述)

此 Symbol 用于 [`String.prototype.matchAll()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) 特别是 [`RegExp.prototype[@@matchAll]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll)。下面两个例子返回相同的结果：

```js
'abc'.matchAll(/a/);

/a/[Symbol.matchAll]('abc');
```

Copy to Clipboard

此方法用于自定义 [`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 子类中的匹配行为。

| `Symbol.matchAll` 属性的属性特性： |       |
| :--------------------------------- | ----- |
| writable                           | false |
| enumerable                         | false |
| configurable                       | false |

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll#示例)

更多示例请查阅 [`String.prototype.matchAll()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) 和 [`RegExp.prototype[@@matchAll]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll)。

```js
let reg = /[0-9]+/g;

let str = "2016-01-02|2019-03-07";

let result = reg[Symbol.matchAll](str);

console.log(Array.from(result, x => x[0]));
// [ '2016', '01', '02', '2019', '03', '07' ]
```

----

# Symbol.replace

`Symbol.replace` 这个属性**指定了当一个字符串替换所匹配字符串时所调用的方法**。[`String.prototype.replace()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 方法会调用此方法。

更多信息， 详见 [`RegExp.prototype[@@replace]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace) 和 [`String.prototype.replace()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)。

```js
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
```

----

# Symbol.search

`Symbol.search` **指定了一个搜索方法，这个方法接受用户输入的正则表达式，返回该正则表达式在字符串中匹配到的下标**，这个方法由以下的方法来调用 [String.prototype.search()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search)。

更多信息请参见 [`RegExp.prototype[@@search]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search) 和[`String.prototype.search()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search).

## [案例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search#案例)

### [自定义字符串搜索](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search#自定义字符串搜索)

```js
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
```

----

# Symbol.species

知名的 `Symbol.species` 是个函数值属性，其被构造函数用以创建派生对象。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species#描述)

species 访问器属性**允许子类覆盖对象的默认构造函数**。

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species#示例)

你可能想在扩展数组类 `MyArray `上返回 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 对象。 例如，当使用例如 [`map()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 这样的方法返回默认的构造函数时，你希望这些方法能够返回父级的 Array 对象，以取代 `MyArray` 对象。`Symbol.species` 允许你这么做：

```js
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
```

----

# Symbol.split

`**Symbol.split**` 指向 一个正则表达式的索引处分割字符串的方法。 这个方法通过 [`String.prototype.split()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split) 调用。

详情请参阅[`RegExp.prototype[@@split]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@split) 和[`String.prototype.split()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split).

```js
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
```

```js
let exp = {
  pattern: "in",
  [Symbol.split](string) {
    return string.split(this.pattern);
  }
}

console.log("goodinjob".split(exp));  // [ 'good', 'job' ]
```

----

# Symbol.toPrimitive

`Symbol.toPrimitive` 是一个内置的 Symbol 值，**它是作为对象的函数值属性存在的**，**当一个对象转换为对应的原始值时，会调用此函数。**

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive#描述)

在 `Symbol.toPrimitive` 属性 (用作函数值) 的帮助下，一个对象可被转换为原始值。**该函数被调用时，会被传递一个字符串参数 `hint` ，表示要转换到的原始值的预期类型。** `hint` 参数的取值是 `"number"`、`"string"` 和 `"default"` 中的任意一个。

| `Symbol.toPrimitive` 属性的属性特性： |       |
| :------------------------------------ | ----- |
| writable                              | false |
| enumerable                            | false |
| configurable                          | false |



## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive#示例)

下面的例子展示了， `Symbol.toPrimitive` 属性是如何干扰一个对象转换为原始值时输出的结果的。

```js
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
```

----

# Symbol.toStringTag

**`Symbol.toStringTag`** 是一个内置 symbol，它通常作为对象的属性键使用，对应的属性值应该为字符串类型，**这个字符串用来表示该对象的自定义类型标签**，通常只有内置的 [`Object.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) 方法会去读取这个标签并把它包含在自己的返回值里。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag#描述)

许多内置的 JavaScript 对象类型即便没有 `toStringTag` 属性，也能被 `toString()` 方法识别并返回特定的类型标签，比如：

```js
Object.prototype.toString.call('foo');     // "[object String]"
Object.prototype.toString.call([1, 2]);    // "[object Array]"
Object.prototype.toString.call(3);         // "[object Number]"
Object.prototype.toString.call(true);      // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null);      // "[object Null]"
// ... and more
```

另外一些对象类型则不然，`toString()` 方法能识别它们**是因为引擎为它们设置好了 `toStringTag` 标签**：

```js
Object.prototype.toString.call(new Map());       // "[object Map]"
Object.prototype.toString.call(function* () {}); // "[object GeneratorFunction]"
Object.prototype.toString.call(Promise.resolve()); // "[object Promise]"
// ... and more
```

但你自己创建的类不会有这份特殊待遇，**`toString() `找不到 `toStringTag` 属性时只好返回默认的 `Object` 标签**：

```js
class ValidatorClass {}

Object.prototype.toString.call(new ValidatorClass()); // "[object Object]"
```

加上 `toStringTag` 属性，你的类也会有自定义的类型标签了：

```js
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return "Validator";
  }
}

Object.prototype.toString.call(new ValidatorClass()); // "[object Validator]"
```

----

# Symbol.unscopables

**`Symbol.unscopables `**指用于指定对象值，其对象自身和继承的从关联对象的 with 环境绑定中**排除**的属性名称。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables#描述)

可以在任何对象上定义 `@@unscopables` symbol (`Symbol.unscopables`)，**用于排除属性名称并与 `with` 环境绑定在一起作为词法变量公开。** 请注意，如果使用 [Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)，语句将不可用，并且可能也不需要 symbol。

在 `unscopables` 对象上设置属性为 true，将使其 *unscopable* 并且因此该属性也将不会在词法环境变量中出现。 如果设置属性为 `false` ，则将使其可 `scopable` 并且该属性会出现在词法环境变量中。

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables#示例)

下列的代码可兼容 ES5 及以下版本。然而，在 ECMAScript 2015 (ES6) 或其后续版本中，[`Array.prototype.keys()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys) 方法才会出现。意味着内部 `with` 环境“关键字” 存在该方法，但变量中不会存在。 也就是说，当 `unscopables` symbol 被展示时，内置的`unscopables `设置是由 [`Array.prototype[@@unscopables\]`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/@@unscopables) 展示并实现的， 一些 Array 的方法 将作为 scoped 放入 `with` 语句中。

```js
let keys = [];

with (Array.prototype) {
  keys.push("something");
}

console.log(Object.keys(Array.prototype[Symbol.unscopables]));

/*
[
  'copyWithin', 'entries',
  'fill',       'find',
  'findIndex',  'flat',
  'flatMap',    'includes',
  'keys',       'values',
  'at'
]
*/
```

你也可以为你自己的对象设置 `unscopables` 。

```js
var obj = {
  foo: 1,
  bar: 2
};

obj[Symbol.unscopables] = {
  foo: false,
  bar: true
};

with(obj) {
  console.log(foo); // 1
  console.log(bar); // ReferenceError: bar is not defined
}
```

---

# Symbol.prototype[@@toPrimitive]

`**[@@toPrimitive]()**` 方法可将 Symbol 对象转换为原始值。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive#语法)

```
Symbol()[Symbol.toPrimitive](hint);
```

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive#返回值)

该原始值为指定的 [`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 对象

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive#描述)

 [`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 的 `[@@toPrimitive]()` 方法返回该 Symbol 对象原始值作为 Symbol 数据形式。 `hint` 参数未被使用。

JavaScript 调用 `[@@toPrimitive]() `方法将一个对象转换为原始值表示。你不需要自己调用 `[@@toPrimitive]()` 方法；**当对象需要被转换为原始值时，JavaScript 会自动地调用该方法。**

----

# Symbol.for()

 

`Symbol.for(key)` 方法会根据给定的键 `key`，来从运行时的 symbol 注册表中找到对应的 symbol，如果找到了，则返回它，否则，新建一个与该键关联的 symbol，并放入全局 symbol 注册表中。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for#syntax)

```
Symbol.for(key);
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for#参数)

- key

  一个字符串，作为 symbol 注册表中与某 symbol 关联的键（同时也会作为该 symbol 的描述）。

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for#返回值)

返回由给定的 key 找到的 symbol，**否则就是返回新创建的 symbol。**

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for#description)

和 `Symbol()` 不同的是，用 `Symbol.for()` 方法创建的的 symbol 会被放入一个全局 symbol 注册表中。`Symbol.for() 并不是每次都会创建一个新的 symbol`，它会首先检查给定的 key 是否已经在注册表中了。假如是，则会直接返回上次存储的那个。否则，它会再新建一个。

### [全局 symbol 注册表](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for#全局_symbol_注册表)

symbol 注册表中的记录结构：

| 字段名     | 字段值                          |
| :--------- | :------------------------------ |
| [[key]]    | 一个字符串，用来标识每个 symbol |
| [[symbol]] | 存储的 symbol 值                |

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for#示例)

```js
Symbol.for("foo"); // 创建一个 symbol 并放入 symbol 注册表中，键为 "foo"
Symbol.for("foo"); // 从 symbol 注册表中读取键为"foo"的 symbol


Symbol.for("bar") === Symbol.for("bar"); // true，证明了上面说的
Symbol("bar") === Symbol("bar"); // false，Symbol() 函数每次都会返回新的一个 symbol


var sym = Symbol.for("mario");
sym.toString();
// "Symbol(mario)"，mario 既是该 symbol 在 symbol 注册表中的键名，又是该 symbol 自身的描述字符串
```

为了防止冲突，最好给你要放入 symbol 注册表中的 symbol 带上键前缀。

```js
Symbol.for("mdn.foo");
Symbol.for("mdn.bar");
```

----

# Symbol.keyFor()

## [概述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor#summary)

`Symbol.keyFor(sym)` 方法用来获取全局 symbol 注册表中与某个 symbol 关联的键。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor#syntax)

```
Symbol.keyFor(sym);
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor#参数)

- sym

  必选参数，需要查找键值的某个 Symbol 。

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor#返回值)

如果全局注册表中查找到该 symbol，则返回该 symbol 的 key 值，返回值为字符串类型。**否则返回 undefined**

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor#示例)

```js
// 创建一个全局 Symbol
let globalSym = Symbol.for("foo");
console.log(Symbol.keyFor(globalSym));  // foo

let localSym = Symbol("foo");
console.log(Symbol.keyFor(localSym));  // undefined

// 以下 Symbol 不是保存在全局 Symbol 注册表中
console.log(Symbol.keyFor(Symbol.iterator));  // undefined
```

----

# Symbol.prototype.toSource()

> **非标准:** 该特性是非标准的，请尽量不要在生产环境中使用它！

`**toSource()**` 方法返回代表该对象源码的字符串。

该方法通常由 JavaScript 内部调用。

## [Syntax](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toSource#syntax)

```
Symbol.toSource()

var sym = Symbol()
sym.toSource()
```

## [Description](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toSource#description)

`toSource` 方法返回以下值：

对于内建`Symbol` 对象, `toSource` 返回以下字符串，表明源代码不可见：

```
"function Symbol() {
   [native code]
}"
```



对于`Symbol` 实例, `toSource` 返回代表源码的字符串。

```
"Symbol()"
```

---

# Symbol.prototype.toString()

## [概述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString#summary)

`toString()` 方法返回当前 symbol 对象的字符串表示。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString#syntax)

```
symbol.toString();
```

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString#description)

[`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 对象拥有自己的 `toString` 方法，因而遮蔽了原型链上的 [`Object.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)。

### [symbol 原始值不能转换为字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString#symbol_原始值不能转换为字符串)

symbol 原始值不能转换为字符串，所以只能先转换成它的包装对象，再调用 `toString()` 方法：

```js
Symbol("foo") + "bar";
// TypeError: Can't convert symbol to string

Symbol("foo").toString() + "bar"
// "Symbol(foo)bar"，就相当于下面的：

Object(Symbol("foo")).toString() + "bar"
// "Symbol(foo)bar"
```

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString#示例)

```js
console.log(Symbol("foo").toString());  //  Symbol(foo)

// well-known symbols
console.log(Symbol.iterator.toString());  //  Symbol(Symbol.iterator)

// global symbols
console.log(Symbol.for("foo").toString());   // Symbol(foo)
```

----

# Symbol.prototype.valueOf()

## [概述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/valueOf#summary)

`valueOf()` 方法返回当前 symbol 对象所包含的 symbol 原始值。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/valueOf#syntax)

```
symbol.valueOf();
```

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/valueOf#description)

在 JavaScript 中，虽然大多数类型的对象在某些操作下都会自动的隐式调用自身的 `valueOf()` 方法或者 `toString()` 方法来将自己转换成一个原始值，但 symbol 对象不会这么干，**symbol 对象无法隐式转换成对应的原始值**：

```js
Object(Symbol("foo")) + "bar";
// TypeError: can't convert symbol object to primitive
// 无法隐式的调用 valueOf() 方法

Object(Symbol("foo")).valueOf() + "bar";
// TypeError:  can't convert symbol to string
// 手动调用 valueOf() 方法，虽然转换成了原始值，但 symbol 原始值不能转换为字符串

Object(Symbol("foo")).toString() + "bar";
// "Symbol(foo)bar"，需要手动调用 toString() 方法才行


let s = Symbol("foo");

console.log(s.valueOf());  //  Symbol(foo)
console.log(s.valueOf() + "bar");  //  TypeError: Cannot convert a Symbol value to a string
```

