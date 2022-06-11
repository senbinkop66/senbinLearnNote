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



