# Truthy

在 [JavaScript](https://developer.mozilla.org/zh-CN/docs/Glossary/JavaScript) 中，**truthy**（真值）指的是在[布尔值](https://developer.mozilla.org/zh-CN/docs/Glossary/Boolean)上下文中，转换后的值为真的值。所有值都是真值，除非它们被定义为 [假值](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy)（即除 `false`、`0`、`-0`、`0n`、`""`、`null`、`undefined` 和 `NaN` 以外皆为真值）。

[JavaScript](https://developer.mozilla.org/zh-CN/docs/Glossary/JavaScript) 在布尔值上下文中使用强制类型转换（[coercion](https://developer.mozilla.org/zh-CN/docs/Glossary/Type_Conversion)）。

# Falsy

**falsy** 值 (虚值) 是在 [Boolean](https://developer.mozilla.org/zh-CN/docs/Glossary/Boolean) 上下文中认定为 false 的值。

[JavaScript](https://developer.mozilla.org/zh-CN/docs/Glossary/JavaScript) 在需要用到布尔类型值的上下文中使用强制类型转换([Type Conversion](https://developer.mozilla.org/zh-CN/docs/Glossary/Type_Conversion) )将值转换为布尔值，例如[条件语句](https://developer.mozilla.org/zh-CN/docs/learn/JavaScript/Building_blocks/conditionals)和循环语句。

在 JavaScript 中只有 8 **个** **falsy** 值。

这意味着当 JavaScript 期望一个布尔值，并被给与下面值中的一个时，它总是会被当做 false。

| `false`                                                      | [false](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Future_reserved_keywords_in_older_standards) 关键字 |      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---- |
| 0                                                            | 数值 [zero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) |      |
| -0                                                           | 数值 负 [zero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) |      |
| 0n                                                           | 当 [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 作为布尔值使用时, 遵从其作为数值的规则. `0n` 是 *falsy* 值. |      |
| "", '', ``                                                   | 这是一个空字符串 (字符串的长度为零). JavaScript 中的字符串可用双引号 `**""**`, 单引号 `''`, 或 [模板字面量](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) **````** 定义。 |      |
| [null](https://developer.mozilla.org/zh-CN/docs/Glossary/Null) | [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) - 缺少值 |      |
| [undefined](https://developer.mozilla.org/zh-CN/docs/Glossary/undefined) | [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) - 原始值 |      |
| [NaN](https://developer.mozilla.org/zh-CN/docs/Glossary/NaN) | [NaN ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)- 非数值 |      |

# Vendor Prefix

Vendor Prefix 浏览器引擎前缀

浏览器厂商们有时会给实验性的或者非标准的 CSS 属性和 JavaScript API 添加前缀，这样开发者就可以用这些新的特性进行试验，同时（理论上）防止他们的试验代码被依赖，从而在标准化过程中破坏 web 开发者的代码。开发者应该等到浏览器行为标准化之后再使用未加前缀的属性。

## [CSS 前缀](https://developer.mozilla.org/zh-CN/docs/Glossary/Vendor_Prefix#css_前缀)

主流浏览器引擎前缀:

- `-webkit-` （谷歌，Safari，新版Opera浏览器，以及几乎所有iOS系统中的浏览器（包括 iOS 系统中的火狐浏览器）；基本上所有基于WebKit 内核的浏览器）
- `-moz-` （火狐浏览器）
- `-o-` （旧版Opera浏览器）
- `-ms-` （IE浏览器 和 Edge浏览器）

示例:

```css
-webkit-transition: all 4s ease;
-moz-transition: all 4s ease;
-ms-transition: all 4s ease;
-o-transition: all 4s ease;
transition: all 4s ease; 
```

## [API 前缀](https://developer.mozilla.org/zh-CN/docs/Glossary/Vendor_Prefix#api_前缀)

过去，浏览器引擎也使用前缀修饰实验性质的API。如果整个接口都是实验性的，前缀修饰的就是接口名（但不包括其中的属性或者方法）。如果将一个实验性的接口或者方法添加到一个标准化的接口中，这个新增的接口或者方法被前缀修饰。 

### [接口前缀](https://developer.mozilla.org/zh-CN/docs/Glossary/Vendor_Prefix#接口前缀)

需要使用**大写**的前缀修饰接口名：

- `WebKit` (谷歌, Safari, 新版Opera浏览器, 以及几乎所有iOS系统中的浏览器(包括iOS 系统中的火狐浏览器); 简单的说，所有基于WebKit 内核的浏览器)
- `Moz` (火狐浏览器)
- `O` (旧版Opera浏览器)
- `MS` (IE浏览器 和 Edge浏览器)

### [属性和方法前缀](https://developer.mozilla.org/zh-CN/docs/Glossary/Vendor_Prefix#属性和方法前缀)

需要使用**小写**的前缀修饰属性或者方法

- `webkit` (谷歌, Safari, 新版Opera浏览器, 以及几乎所有iOS系统中的浏览器(包括iOS 系统中的火狐浏览器); 简单的说，所有基于WebKit 内核的浏览器)
- `moz` (火狐浏览器)
- `o` (旧版Opera浏览器等
- `ms` (IE浏览器 和 Edge浏览器)

示例:

```js
var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.oRequestAnimationFrame ||
                            window.msRequestAnimationFrame;
```



# delete 操作符

 **`delete` 操作符**用于删除对象的某个属性；如果没有指向这个属性的引用，那它最终会被释放。

```js
const Employee = {
  firstname: 'John',
  lastname: 'Doe'
};

console.log(Employee.firstname);
//"John"

delete Employee.firstname;

console.log(Employee.firstname);
// undefined

```

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete#syntax)

```js
delete expression
```

 *expression* 的计算结果应该是某个属性的引用，例如：

```js
delete object.property
delete object['property']
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete#parameters)

- `object`

  对象的名称，或计算结果为对象的表达式。

- `property`

  要删除的属性。

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete#返回值)

对于所有情况都是`true`，除非属性是一个[`自身的`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) [`不可配置`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Cant_delete)的属性，在这种情况下，非严格模式返回 `false`。

### [异常](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete#异常)

在[严格模式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode)下，如果是属性是一个自己不可配置的属性，会抛出[`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError)。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete#description)

与通常的看法不同，`delete`操作符与直接释放内存**无关**。内存管理 通过断开引用来间接完成的，查看[内存管理](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management)页可了解详情。

**`delete `**操作符会从某个对象上移除指定属性。成功删除的时候会返回 `true`，否则返回 `false`。

但是，以下情况需要重点考虑：

- 如果你试图删除的属性不存在，那么delete将不会起任何作用，但仍会返回true

- 如果对象的原型链上有一个与待删除属性同名的属性，那么删除属性之后，对象会使用原型链上的那个属性（也就是说，delete操作只会在自身的属性上起作用）

- 任何使用 

  `var`

   声明的属性不能从全局作用域或函数的作用域中删除。

  - 这样的话，delete操作不能删除任何在全局作用域中的函数（无论这个函数是来自于函数声明或函数表达式）
  - 除了在全局作用域中的函数不能被删除，在对象(object)中的函数是能够用delete操作删除的。

- 任何用[`let`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let)或[`const`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const)声明的属性不能够从它被声明的作用域中删除。

- 不可设置的(Non-configurable)属性不能被移除。这意味着像[`Math`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math), [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)内置对象的属性以及使用[`Object.defineProperty()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)方法设置为不可设置的属性不能被删除。

下面的代码块给出了一个简单的例子：

```js
var Employee = {
  age: 28,
  name: 'abc',
  designation: 'developer'
}

console.log(delete Employee.name);   // returns true
console.log(delete Employee.age);    // returns true

// 当试着删除一个不存在的属性时
// 同样会返回true
console.log(delete Employee.salary); // returns true
```

### [不可配置属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete#不可配置属性)

当一个属性被设置为不可设置，delete操作将不会有任何效果，并且会返回false。在严格模式下会抛出语法错误（[`SyntaxError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)）。

```js
var Employee = {};
Object.defineProperty(Employee, 'name', {configurable: false});

console.log(delete Employee.name);  // returns false
```

[`var`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var), [`let`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let)以及[`const`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const)创建的不可设置的属性不能被delete操作删除。

```js
var nameOther = 'XYZ';

// 通过以下方法获取全局属性:
Object.getOwnPropertyDescriptor(window, 'nameOther');

// 输出: Object {value: "XYZ",
//                  writable: true,
//                  enumerable: true,
//                  configurable: false}

// 因为“nameOther”使用var关键词添加，
// 它被设置为不可设置（non-configurable）
delete nameOther;   // return false
```

在严格模式下，这样的操作会抛出异常。

### [**严格模式与非严格模式的对比**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete#严格模式与非严格模式的对比)

**在严格模式下，如果对一个变量的直接引用、函数的参数或者函数名使用delete操作，将会抛出语法错误**（[`SyntaxError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)）。因此，为避免严格模式下的语法错误，必须以`delete object.property`或`delete object['property']`的形式使用delete运算符。

```js
Object.defineProperty(globalThis, 'variable1', { value: 10, configurable: true, });
Object.defineProperty(globalThis, 'variable2', { value: 10, configurable: false, });

console.log(delete variable1); // true

// SyntaxError in strict mode.
console.log(delete variable2); // false
```

```js
function func(param) {
  // SyntaxError in strict mode.
  console.log(delete param); // false
}

// SyntaxError in strict mode.
console.log(delete func); // false
```

**备注：**下文在英文原版中已删除

任何使用var声明的变量都会被标记为不可设置的。在下面的例子中，salary是不可设置的以及不能被删除的。在非严格模式下，下面的delete操作将会返回false。

```js
function Employee() {
  delete salary;
  var salary;
}

Employee();
```

让我们来看看相同的代码在严格模式下会有怎样的表现。会抛出一个语法错误（ `SyntaxError）而不是返回false。`

```js
"use strict";

function Employee() {
  delete salary;  // SyntaxError
  var salary;
}

// 相似的，任何对任何函数
// 直接使用delete操作将会抛出语法错误。

function DemoFunction() {
  //some code
}

delete DemoFunction; // SyntaxError
```

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete#示例)

```js
// 在全局作用域创建 adminName 属性
adminName = 'xyz';

// 在全局作用域创建 empCount 属性
// 因为我们使用了 var，它会标记为不可配置。同样 let 或 const 也是不可配置的。
var empCount = 43;

EmployeeDetails = {
  name: 'xyz',
  age: 5,
  designation: 'Developer'
};

// adminName 是全局作用域的一个属性。
// 因为它不是用 var 创建的，所在可以删除。
// 因此，它是可配置的。
delete adminName;       // 返回 true

// 相反，empCount 是不可配置的，
// 因为创建它时使用了 var。
delete empCount;       // 返回 false

// delete 可用于删除对象的属性
delete EmployeeDetails.name; // 返回 true

// 甚至属性不存在，它也会返回 "true"
delete EmployeeDetails.salary; // 返回 true

// delete 对内建静态属性不起作用
delete Math.PI; // 返回 false

// EmployeeDetails 是全局作用域的一个属性。
// 因为定义它的时候没有使用 "var"，它被标记为可配置。
delete EmployeeDetails;   // 返回 true

function f() {
  var z = 44;

  // delete 对局部变量名不起作用
  delete z;     // 返回 false
}
```

### [`delete` 和原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete#delete_和原型链)

在下面的示例中，我们删除一个对象的自己的属性，而原型链上具有相同名称的属性可用：

```js
function Foo() {
  this.bar = 10;
}

Foo.prototype.bar = 42;

var foo = new Foo();

// 返回 true，因为删除的是 foo 对象的自身属性
delete foo.bar;

// foo.bar 仍然可用，因为它在原型链上可用。
console.log(foo.bar);   //42

// 从原型上删除属性
delete Foo.prototype.bar; //true

// 由于已删除“ bar”属性，因此不能再从Foo继承它。
console.log(foo.bar);    //undefined
```

### [删除数组元素](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete#deleting_array_elements)

当你删除一个数组元素时，数组的长度不受影响。即便你删除了数组的最后一个元素也是如此。

当用 `delete` 操作符删除一个数组元素时，被删除的元素已经不再属于该数组。下面的例子中用 `delete `删除了` trees[3]`。

```js
var trees = ["redwood","bay","cedar","oak","maple"];
delete trees[3];
if (3 in trees) {
   // 这里不会执行
}
```

如果你想让一个数组元素继续存在但是其值是 `undefined`，那么可以使用将 `undefined` 赋值给这个元素而不是使用 `delete`。下面的例子中，trees[3] 被赋值为 `undefined`，但该元素仍然存在。

```js
var trees = ["redwood","bay","cedar","oak","maple"];
trees[3] = undefined;
if (3 in trees) {
   // 这里会被执行
}
```

如果你想通过改变数组的内容来移除一个数组元素，请使用[`splice()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 方法。在下面的例子中，通过使用[`splice()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)，将trees[3]从数组中移除。

```js
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
trees.splice(3,1);
console.log(trees); // ["redwood", "bay", "cedar", "maple"]
```



# 内存管理

## [简介](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management#简介)

像C语言这样的底层语言一般都有底层的内存管理接口，比如 `malloc()`和`free()`。相反，JavaScript是在创建变量（对象，字符串等）时自动进行了分配内存，并且在不使用它们时“自动”释放。 释放的过程称为垃圾回收。这个“自动”是混乱的根源，并让JavaScript（和其他高级语言）开发者错误的感觉他们可以不关心内存管理。 

## [内存生命周期](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management#内存生命周期)

不管什么程序语言，内存生命周期基本是一致的：  

1. 分配你所需要的内存
2. 使用分配到的内存（读、写）
3. 不需要时将其释放\归还

所有语言第二部分都是明确的。第一和第三部分在底层语言中是明确的，但在像JavaScript这些高级语言中，大部分都是隐含的。

### [JavaScript 的内存分配](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management#javascript_的内存分配)

#### 值的初始化

为了不让程序员费心分配内存，JavaScript 在定义变量时就完成了内存分配。

```js
var n = 123; // 给数值变量分配内存
var s = "azerty"; // 给字符串分配内存

var o = {
  a: 1,
  b: null
}; // 给对象及其包含的值分配内存

// 给数组及其包含的值分配内存（就像对象一样）
var a = [1, null, "abra"];

function f(a){
  return a + 2;
} // 给函数（可调用的对象）分配内存

// 函数表达式也能分配一个对象
someElement.addEventListener('click', function(){
  someElement.style.backgroundColor = 'blue';
}, false);
```

#### 通过函数调用分配内存

有些函数调用结果是分配对象内存：

```js
var d = new Date(); // 分配一个 Date 对象

var e = document.createElement('div'); // 分配一个 DOM 元素
```

有些方法分配新变量或者新对象：

```js
var s = "azerty";
var s2 = s.substr(0, 3); // s2 是一个新的字符串
// 因为字符串是不变量，
// JavaScript 可能决定不分配内存，
// 只是存储了 [0-3] 的范围。

var a = ["ouais ouais", "nan nan"];
var a2 = ["generation", "nan nan"];
var a3 = a.concat(a2);
// 新数组有四个元素，是 a 连接 a2 的结果
```

### [使用值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management#使用值)

使用值的过程实际上是对分配内存进行读取与写入的操作。读取与写入可能是写入一个变量或者一个对象的属性值，甚至传递函数的参数。

### [当内存不再需要使用时释放](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management#当内存不再需要使用时释放)

大多数内存管理的问题都在这个阶段。在这里**最艰难的任务是找到“哪些被分配的内存确实已经不再需要了”**。它往往要求开发人员来确定在程序中哪一块内存不再需要并且释放它。

高级语言解释器嵌入了“垃圾回收器”，它的主要工作是跟踪内存的分配和使用，以便当分配的内存不再使用时，自动释放它。这只能是一个近似的过程，因为要知道是否仍然需要某块内存是[无法判定的](http://en.wikipedia.org/wiki/Decidability_(logic))（无法通过某种算法解决）。

## [垃圾回收](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management#垃圾回收)

如上文所述自动寻找是否一些内存“不再需要”的问题是无法判定的。**因此，垃圾回收实现只能有限制的解决一般问题。**本节将解释必要的概念，了解主要的垃圾回收算法和它们的局限性。

### [引用](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management#引用)

垃圾回收算法主要依赖于引用的概念。在内存管理的环境中，一个对象如果有访问另一个对象的权限（隐式或者显式），叫做一个对象引用另一个对象。例如，一个Javascript对象具有对它[原型](https://developer.mozilla.org/en-US/JavaScript/Guide/Inheritance_and_the_prototype_chain)的引用（**隐式引用**）和对它属性的引用（**显式引用**）。

在这里，“对象”的概念不仅特指 JavaScript 对象，还包括函数作用域（或者全局词法作用域）。

### [引用计数垃圾收集](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management#引用计数垃圾收集)

这是最初级的垃圾收集算法。此算法把“对象是否不再需要”简化定义为“对象有没有其他对象引用到它”。如果没有引用指向该对象（零引用），对象将被垃圾回收机制回收。

#### 示例

```js
var o = {
  a: {
    b:2
  }
};
// 两个对象被创建，一个作为另一个的属性被引用，另一个被分配给变量o
// 很显然，没有一个可以被垃圾收集


var o2 = o; // o2变量是第二个对“这个对象”的引用

o = 1;      // 现在，“这个对象”只有一个o2变量的引用了，“这个对象”的原始引用o已经没有

var oa = o2.a; // 引用“这个对象”的a属性
               // 现在，“这个对象”有两个引用了，一个是o2，一个是oa

o2 = "yo"; // 虽然最初的对象现在已经是零引用了，可以被垃圾回收了
           // 但是它的属性a的对象还在被oa引用，所以还不能回收

oa = null; // a属性的那个对象现在也是零引用了
           // 它可以被垃圾回收了
```

#### 限制：循环引用

该算法有个限制：无法处理循环引用的事例。在下面的例子中，两个对象被创建，并互相引用，形成了一个循环。它们被调用之后会离开函数作用域，所以它们已经没有用了，可以被回收了。然而，引用计数算法考虑到它们互相都有至少一次引用，所以它们不会被回收。

```js
function f(){
  var o = {};
  var o2 = {};
  o.a = o2; // o 引用 o2
  o2.a = o; // o2 引用 o

  return "azerty";
}

f();
```



#### 实际例子

IE 6, 7 使用引用计数方式对 DOM 对象进行垃圾回收。该方式常常造成对象被循环引用时内存发生泄漏：

```js
var div;
window.onload = function(){
  div = document.getElementById("myDivElement");
  div.circularReference = div;
  div.lotsOfData = new Array(10000).join("*");
};
```

在上面的例子里，`myDivElement` 这个 DOM 元素里的 `circularReference 属性`引用了 `myDivElement`，造成了循环引用。**如果该属性没有显示移除或者设为 null，引用计数式垃圾收集器将总是且至少有一个引用，并将一直保持在内存里的 DOM 元素，即使其从DOM 树中删去了**。如果这个 DOM 元素拥有大量的数据 (如上的 `lotsOfData` 属性)，**而这个数据占用的内存将永远不会被释放**。

### [标记-清除算法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management#标记-清除算法)

这个算法把“对象是否不再需要”简化定义为“**对象是否可以获得**”。

这个算法假定设置一个叫做根（root）的对象（在Javascript里，根是全局对象）。垃圾回收器将定期从根开始，找所有从根开始引用的对象，然后找这些对象引用的对象……从根开始，垃圾回收器将找到**所有可以获得的对象**和**收集所有不能获得的对象**。

这个算法比前一个要好，因为“有零引用的对象”总是不可获得的，但是相反却不一定，参考“循环引用”。

从2012年起，所有现代浏览器都使用了标记-清除垃圾回收算法。**所有对JavaScript垃圾回收算法的改进都是基于标记-清除算法的改进**，并没有改进标记-清除算法本身和它对“对象是否不再需要”的简化定义。

#### 循环引用不再是问题了

在上面的示例中，函数调用返回之后，两个对象从全局对象出发无法获取。因此，他们将会被垃圾回收器回收。第二个示例同样，一旦 div 和其事件处理无法从根获取到，他们将会被垃圾回收器回收。

#### 限制: 那些无法从根对象查询到的对象都将被清除

尽管这是一个限制，但实践中我们很少会碰到类似的情况，所以开发者不太会去关心垃圾回收机制。



# Promise



**Promise** 对象用于表示一个异步操作的最终完成 (或失败)及其结果值。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#描述)

一个 `Promise` 对象代表一个在这个 promise 被创建出来时不一定已知的值。它让您能够把异步操作最终的成功返回值或者失败原因和相应的处理程序关联起来。 这样使得异步方法可以像同步方法那样返回值：**异步方法并不会立即返回最终的值，而是会返回一个 *promise***，以便在未来某个时候把值交给使用者。

一个 `Promise` 必然处于以下几种状态之一：

- *待定（pending）*: 初始状态，既没有被兑现，也没有被拒绝。
- *已兑现（fulfilled）*: 意味着操作成功完成。
- *已拒绝（rejected）*: 意味着操作失败。

待定状态的 Promise 对象要么会通过一个值*被兑现（fulfilled）*，要么会通过一个原因（错误）*被拒绝（rejected）*。当这些情况之一发生时，我们**用 promise 的 then 方法排列起来的相关处理程序就会被调用**。如果 promise 在一个相应的处理程序被绑定时就已经被兑现或被拒绝了，那么这个处理程序就会被调用，**因此在完成异步操作和绑定处理方法之间不会存在竞争状态**。

因为 `Promise.prototype.then` 和 `Promise.prototype.catch` 方法返回的是 promise， 所以它们可以被链式调用。

![promises过程](E:\pogject\学习笔记\image\js\promises过程.png)

> **备注：** 有一些语言中有惰性求值和延时计算的特性，它们也被称为“promises”，例如 Scheme。JavaScript 中的 promise 代表的是已经正在发生的进程， 而且可以通过回调函数实现链式调用。 如果您想对一个表达式进行惰性求值，就考虑一下使用无参数的"[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)": `f = () =>`*`表达式`* 来创建惰性求值的表达式*，*使用 `f()` 求值。

> **备注：** 如果一个 promise 已经**被兑现**（fulfilled）或**被拒绝**（rejected），那么我们也可以说它处于***已敲定**（settled）*状态。您还会听到一个经常跟 promise 一起使用的术语：***已决议**（resolved）*，它表示 promise 已经处于已敲定(settled)状态，或者为了匹配另一个 promise 的状态被"锁定"了。Domenic Denicola 的 [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) 中有更多关于 promise 术语的细节可以供您参考。

### [Promise的链式调用](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise的链式调用)

我们可以用 `promise.then()`，`promise.catch()` 和 `promise.finally()` 这些方法将进一步的操作与一个变为已敲定状态的 promise 关联起来。这些方法还会返回一个新生成的 promise 对象，这个对象可以被非强制性的用来做链式调用，就像这样：

```js
const myPromise =
  (new Promise(myExecutorFunc))
  .then(handleFulfilledA,handleRejectedA)
  .then(handleFulfilledB,handleRejectedB)
  .then(handleFulfilledC,handleRejectedC);

// 或者，这样可能会更好...

const myPromise =
  (new Promise(myExecutorFunc))
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

**过早地处理被拒绝的 promise 会对之后 promise 的链式调用造成影响。**不过有时候我们因为需要马上处理一个错误也只能这样做。（有关应对影响的技巧，请参见下面示例中的 `throw -999` ）另一方面，在没有迫切需要的情况下，可以在最后一个.catch() 语句时再进行错误处理，这种做法更加简单。

**这两个函数的签名很简单，它们只接受一个任意类型的参数。**这些函数由您（编程者）编写。这些函数的终止状态决定着链式调用中下一个promise的"已敲定 （settled）"状态是什么。任何不是 `throw` 的终止都会创建一个"已决议（resolved）"状态，而以 `throw` 终止则会创建一个"已拒绝"状态。

```js
handleFulfilled(value)       { /*...*/; return nextValue;  }
handleRejection(reason)  { /*...*/; throw  nextReason; }
handleRejection(reason)  { /*...*/; return nextValue;  }
```

被返回的 `nextValue` 可能是另一个promise对象，这种情况下这个promise会被动态地插入链式调用。 

当 `.then()` 中缺少能够返回 promise 对象的函数时，链式调用就直接继续进行下一环操作。因此，链式调用可以在最后一个 `.catch()` 之前把所有的 `handleRejection` 都省略掉。类似地， `.catch()` 其实只是没有给 `handleFulfilled` 预留参数位置的 `.then()` 而已。

链式调用中的 promise 们就像俄罗斯套娃一样，是嵌套起来的，但又像是一个栈，每个都必须从顶端被弹出。**链式调用中的第一个 promise 是嵌套最深的一个，也将是第一个被弹出的。**

```js
(promise D, (promise C, (promise B, (promise A) ) ) )
```

**当存在一个 `nextValue` 是 promise 时，就会出现一种动态的替换效果。**`return` 会导致一个 promise 被弹出，但这个 `nextValue` promise 则会被推入被弹出 promise 原来的位置。对于上面所示的嵌套场景，假设与 "promise B" 相关的 `.then()` 返回了一个值为 "promise X" 的 `nextValue` 。那么嵌套的结果看起来就会是这样：

```js
(promise D, (promise C, (promise X) ) )
```

**一个 promise 可能会参与不止一次的嵌套。**对于下面的代码，`promiseA` 向"已敲定"（"settled"）状态的过渡会导致两个实例的 `.then` 都被调用。

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2); 
```

一个已经处于"已敲定"（"settled"）状态的 promise 也可以接收操作。**在那种情况下，（如果没有问题的话，）这个操作会被作为第一个异步操作被执行。注意，所有的 promise 都一定是异步的。**因此，一个已经处于"已敲定"（"settled"）状态的 promise 中的操作只有 promise 链式调用的栈被清空了和一个事件循环过去了之后才会被执行。这种效果跟 `setTimeout(action, 10)` 特别相似。

```js
const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
    resolutionFunc(777);
});
// 这时，"promiseA" 已经被敲定了。
promiseA.then( (val) => console.log("asynchronous logging has val:",val) );
console.log("immediate logging");

// produces output in this order:
// immediate logging
// asynchronous logging has val: 777
```

## [构造函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#构造函数)

- [`Promise()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)

  创建一个新的 `Promise` 对象。该构造函数主要用于包装还没有添加 promise 支持的函数。

## [静态方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#静态方法)

- [`Promise.all(iterable)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

  这个方法返回一个新的promise对象，该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。这个新的promise对象在触发成功状态以后，会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，顺序跟iterable的顺序保持一致；如果这个新的promise对象触发了失败状态，它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。Promise.all方法常被用于处理多个promise对象的状态集合。（可以参考jQuery.when方法---译者注）

- [`Promise.allSettled(iterable)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)

  等到所有promises都已敲定（settled）（每个promise都已兑现（fulfilled）或已拒绝（rejected））。 返回一个promise，该promise在所有promise完成后完成。并带有一个对象数组，每个对象对应每个promise的结果。

- [`Promise.any(iterable)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)

  接收一个Promise对象的集合，当其中的一个 promise 成功，就返回那个成功的promise的值。

- [`Promise.race(iterable)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)

  当iterable参数里的任意一个子promise被成功或失败后，父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象。

- [`Promise.reject(reason)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject)

  返回一个状态为失败的Promise对象，并将给定的失败信息传递给对应的处理方法

- [`Promise.resolve(value)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)

  返回一个状态由给定value决定的Promise对象。如果该值是thenable(即，带有then方法的对象)，返回的Promise对象的最终状态由then方法执行决定；否则的话(该value为空，基本类型或者不带then方法的对象),返回的Promise对象状态为fulfilled，并且将该value传递给对应的then方法。通常而言，如果您不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,这样就能将该value以Promise对象形式使用。

## [创建Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#创建promise)

`Promise` 对象是由关键字 `new` 及其构造函数来创建的。该构造函数会把一个叫做“处理器函数”（executor function）的函数作为它的参数。这个“处理器函数”接受两个函数——`resolve` 和 `reject` ——作为其参数。当异步任务顺利完成且返回结果值时，会调用 `resolve` 函数；而当异步任务失败且返回失败原因（通常是一个错误对象）时，会调用`reject` 函数。

```js
const myFirstPromise = new Promise((resolve, reject) => {
  // ?做一些异步操作，最终会调用下面两者之一:
  //
  //   resolve(someValue); // fulfilled
  // ?或
  //   reject("failure reason"); // rejected
});
```

想要某个函数拥有promise功能，只需让其返回一个promise即可。

```js
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
};
```

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#示例)

### [基础示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#基础示例)

```js
let myFirstPromise = new Promise(function(resolve, reject){
    //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
    //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
    setTimeout(function(){
        resolve("成功!"); //代码正常执行！
    }, 250);
});

myFirstPromise.then(function(successMessage){
    //successMessage的值是上面调用resolve(...)方法传入的值.
    //successMessage参数不一定非要是字符串类型，这里只是举个例子
    console.log("Yay! " + successMessage);  //Yay! 成功!
});
```

### [高级示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#高级示例)

```html
<button id="btn">Make a promise!</button>
<div id="log"></div>
```

本例展示了 `Promise` 的一些机制。 `testPromise()` 方法在每次点击 button按钮时被调用，该方法会创建一个promise 对象，使用 [`window.setTimeout()`](https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout) 让Promise等待 1-3 秒不等的时间来填充数据（通过Math.random()方法）。

Promise 的值的填充过程都被日志记录（logged）下来，这些日志信息展示了方法中的同步代码和异步代码是如何通过Promise完成解耦的。

```js
'use strict';
var promiseCount = 0;

function testPromise() {
    let thisPromiseCount = ++promiseCount;

    let log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') 开始 (<small>同步代码开始</small>)<br/>');

    // 新构建一个 Promise 实例：使用Promise实现每过一段时间给计数器加一的过程，每段时间间隔为1~3秒不等
    let p1 = new Promise(
        // resolver 函数在 Promise 成功或失败时都可能被调用
       (resolve, reject) => {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Promise 开始 (<small>异步代码开始</small>)<br/>');
            // 创建一个异步调用
            window.setTimeout(
                function() {
                    // 填充 Promise
                    resolve(thisPromiseCount);
                }, Math.random() * 2000 + 1000);
        }
    );

    // Promise 不论成功或失败都会调用 then
    // catch() 只有当 promise 失败时才会调用
    p1.then(
        // 记录填充值
        function(val) {
            log.insertAdjacentHTML('beforeend', val +
                ') Promise 已填充完毕 (<small>异步代码结束</small>)<br/>');
        })
    .catch(
        // 记录失败原因
       (reason) => {
            console.log('处理失败的 promise ('+reason+')');
        });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promise made (<small>同步代码结束</small>)<br/>');
}
```



```js
if ("Promise" in window) {
  let btn = document.getElementById("btn");
  btn.addEventListener("click",testPromise);
} else {
  log = document.getElementById('log');
  log.innerHTML = "Live example not available as your browser doesn't support the <code>Promise<code> interface.";
}
```

```js
/*
1) 开始 (同步代码开始)
1) Promise 开始 (异步代码开始)
1) Promise made (同步代码结束
1) Promise 已填充完毕 (异步代码结束)
2) 开始 (同步代码开始)
2) Promise 开始 (异步代码开始)
2) Promise made (同步代码结束
2) Promise 已填充完毕 (异步代码结束)
3) 开始 (同步代码开始)
3) Promise 开始 (异步代码开始)
3) Promise made (同步代码结束
3) Promise 已填充完毕 (异步代码结束)
*/
```

## [使用 XHR 加载图像](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#使用_xhr_加载图像)

另一个用了 Promise 和[ XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) 加载一个图像的例子可在MDN GitHub[ promise-test](https://github.com/mdn/js-examples/tree/master/promises-test) 中找到。 您也可以[看这个实例](https://mdn.github.io/js-examples/promises-test/)。每一步都有注释可以让您详细的了解Promise和XHR架构。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width">

    <title>Promise example</title>

    <link rel="stylesheet" href="">
    <!--[if lt IE 9]>
      <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
  </head>

  <body>
    <h1>Promise example</h1>

   
  </body>

  <script>
  function imgLoad(url) {
    // Create new promise with the Promise() constructor;
    // This has as its argument a function
    // with two parameters, resolve and reject
    return new Promise(function(resolve, reject) {
      // Standard XHR to load an image
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.responseType = 'blob';
      // When the request loads, check whether it was successful
      request.onload = function() {
        if (request.status === 200) {
        // If successful, resolve the promise by passing back the request response
          resolve(request.response);
        } else {
        // If it fails, reject the promise with a error message
          reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
        }
      };
      request.onerror = function() {
      // Also deal with the case when the entire request fails to begin with
      // This is probably a network error, so reject the promise with an appropriate message
          reject(Error('There was a network error.'));
      };
      // Send the request
      request.send();
    });
  }
  // Get a reference to the body element, and create a new image object
  var body = document.querySelector('body');
  var myImage = new Image();
  // Call the function with the URL we want to load, but then chain the
  // promise then() method on to the end of it. This contains two callbacks
  imgLoad('200w.webp').then(function(response) {
    // The first runs when the promise resolves, with the request.response
    // specified within the resolve() method.
    var imageURL = window.URL.createObjectURL(response);
    myImage.src = imageURL;
    body.appendChild(myImage);
    // The second runs when the promise
    // is rejected, and logs the Error specified with the reject() method.
  }, function(Error) {
    console.log(Error);
  });
  </script>
</html>
```



# async函数

async函数是使用`async`关键字声明的函数。 async函数是[`AsyncFunction`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction)构造函数的实例， 并且其中允许使用`await`关键字。`async`和`await`关键字让我们可以用一种更简洁的方式写出基于[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)的异步行为，而无需刻意地链式调用`promise`。

async函数还可以被[作为表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function)来定义。

```js
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();

```



## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function#语法)

```js
async function name([param[, param[, ... param]]]) {
    statements 
}
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function#参数)

- `name`

  函数名称。

- `param`

  要传递给函数的参数的名称。

- `statements`

  包含函数主体的表达式。可以使用`await`机制。

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function#返回值)

一个[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，这个promise要么会通过一个由async函数返回的值被解决，要么会通过一个从async函数中抛出的（或其中没有被捕获到的）异常被拒绝。



## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function#描述)

async函数可能包含0个或者多个[`await`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await)表达式。**await表达式会暂停整个async函数的执行进程并出让其控制权，只有当其等待的基于promise的异步操作被兑现或被拒绝之后才会恢复进程**。promise的解决值会被当作该await表达式的返回值。使用`async` / `await`关键字就可以在异步代码中使用普通的`try` / `catch`代码块。

> **备注：****`await`关键字只在async函数内有效**。如果你在async函数体之外使用它，就会抛出语法错误 [`SyntaxError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) 。

> **备注：**`async`/`await`的目的为了简化使用基于promise的API时所需的语法。`async`/`await`的行为就好像搭配使用了生成器和promise。

**async函数一定会返回一个promise对象**。如果一个async函数的返回值看起来不是promise，那么它将会被隐式地包装在一个promise中。

例如，如下代码:

```js
async function foo() {
   return 1
}
```

等价于:

```js
function foo() {
   return Promise.resolve(1)
}
```

**async函数的函数体可以被看作是由0个或者多个await表达式分割开来的。**从第一行代码直到（并包括）第一个await表达式（如果有的话）都是同步运行的。这样的话，一个不含await表达式的async函数是会同步运行的。**然而，如果函数体内有一个await表达式，async函数就一定会异步执行。**

例如：

```js
async function foo() {
   await 1
}
```

等价于

```js
function foo() {
   return Promise.resolve(1).then(() => undefined)
}
```



在await表达式之后的代码可以被认为是存在在链式调用的then回调中，**多个await表达式都将加入链式调用的then回调中**，返回值将作为最后一个then回调的返回值。

在接下来的例子中，我们将使用await执行两次promise，整个`foo`函数的执行将会被分为**三个阶段**。

1. `foo`函数的第一行将会同步执行，await将会等待promise的结束。然后暂停通过`foo`的进程，并将控制权交还给调用`foo`的函数。
2. 一段时间后，当第一个promise完结的时候，控制权将重新回到foo函数内。示例中将会将`1`（promise状态为fulfilled）作为结果返回给await表达式的左边即`result1`。接下来函数会继续进行，到达第二个await区域，此时`foo`函数的进程将再次被暂停。
3. 一段时间后，同样当第二个promise完结的时候，`result2`将被赋值为`2`，之后函数将会正常同步执行，将默认返回`undefined` 。

```js
async function foo() {
   const result1 = await new Promise((resolve) => setTimeout(() => resolve('1')))
   const result2 = await new Promise((resolve) => setTimeout(() => resolve('2')))
}
foo()
```

注意：promise链不是一次就构建好的，相反，**promise链是分阶段构造的**，因此在处理异步函数时必须注意对错误函数的处理。

例如，在下面的代码中，在promise链上配置了`.catch`处理程序，将抛出未处理的promise错误。这是因为`p2`返回的结果不会被await处理。

```js
async function foo() {
   const p1 = new Promise((resolve) => setTimeout(() => resolve('1'), 1000))
   const p2 = new Promise((_,reject) => setTimeout(() => reject('2'), 500))
   const results = [await p1, await p2] // 不推荐使用这种方式，请使用 Promise.all或者Promise.allSettled 
}
foo().catch(() => {}) // 捕捉所有的错误...
```



## [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function#示例)

### [简单例子](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function#简单例子)

```js
var resolveAfter2Seconds = function() {
  console.log("starting slow promise");
  return new Promise(resolve => {
    setTimeout(function() {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
};

var resolveAfter1Second = function() {
  console.log("starting fast promise");
  return new Promise(resolve => {
    setTimeout(function() {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
};

//在sequentialStart中，程序在第一个await停留了2秒，然后又在第二个await停留了1秒。直到第一个计时器结束后，第二个计时器才被创建。程序需要3秒执行完毕。
var sequentialStart = async function() {
  console.log('==SEQUENTIAL START==');

  // 1. Execution gets here almost instantly
  const slow = await resolveAfter2Seconds();
  console.log(slow); // 2. this runs 2 seconds after 1.

  const fast = await resolveAfter1Second();
  console.log(fast); // 3. this runs 3 seconds after 1.
}

/*在 concurrentStart中，两个计时器被同时创建，然后执行await。这两个计时器同时运行，这意味着程序完成运行只需要2秒，而不是3秒,即最慢的计时器的时间。
但是 await 仍旧是顺序执行的，第二个 await 还是得等待第一个执行完。在这个例子中，这使得先运行结束的输出出现在最慢的输出之后。
*/
var concurrentStart = async function() {
  console.log('==CONCURRENT START with await==');
  const slow = resolveAfter2Seconds(); // starts timer immediately
  const fast = resolveAfter1Second(); // starts timer immediately

  // 1. Execution gets here almost instantly
  console.log(await slow); // 2. this runs 2 seconds after 1.
  console.log(await fast); // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
}

var concurrentPromise = function() {
  console.log('==CONCURRENT START with Promise.all==');
  return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
    console.log(messages[0]); // slow
    console.log(messages[1]); // fast
  });
}

//如果你希望并行执行两个或更多的任务，你必须像在parallel中一样使用await Promise.all([job1(), job2()])。
var parallel = async function() {
  console.log('==PARALLEL with await Promise.all==');

  // Start 2 "jobs" in parallel and wait for both of them to complete
  await Promise.all([
      (async()=>console.log(await resolveAfter2Seconds()))(),
      (async()=>console.log(await resolveAfter1Second()))()
  ]);
}

// This function does not handle errors. See warning below!
var parallelPromise = function() {
  console.log('==PARALLEL with Promise.then==');
  resolveAfter2Seconds().then((message)=>console.log(message));
  resolveAfter1Second().then((message)=>console.log(message));
}

sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

// wait above to finish
setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"

// wait again
setTimeout(concurrentPromise, 7000); // same as concurrentStart

// wait again
setTimeout(parallel, 10000); // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"

// wait again
setTimeout(parallelPromise, 13000); // same as parallel
```

### [使用async函数重写 promise 链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function#使用async函数重写_promise_链)

返回 [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)的 API 将会产生一个 promise 链，它将函数肢解成许多部分。例如下面的代码：

```js
function getProcessedData(url) {
  return downloadData(url) // 返回一个 promise 对象
    .catch(e => {
      return downloadFallbackData(url)  // 返回一个 promise 对象
    })
    .then(v => {
      return processDataInWorker(v); // 返回一个 promise 对象
    });
}
```

可以重写为单个async函数：

```js
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch (e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
```

注意，在上述示例中，`return` 语句中没有 `await` 操作符，因为 `async function` 的返回值将被隐式地传递给 `Promise.resolve`。

> 返回值`隐式的传递给`[`Promise.resolve`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)，并不意味着`return await promiseValue;和return promiseValue;`在功能上相同

看下下面重写的上面代码，在`processDataInWorker`抛出异常时返回了null：

```js
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch(e) {
    v = await downloadFallbackData(url);
  }
  try {
    return await processDataInWorker(v); // 注意 `return await` 和单独 `return` 的比较
  } catch (e) {
    return null;
  }
}
```

简单地写上`return processDataInworker(v);将导致在processDataInWorker(v)`出错时function返回值为[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)`而不是`返回null。`return foo;`和`return await foo;`，有一些细微的差异:`return foo;`不管`foo`是promise还是rejects都将会直接返回`foo。相反地，`如果`foo`是一个[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，`return await foo;`将等待`foo`执行(resolve)或拒绝(reject)，如果是拒绝，将会在返回前抛出异常。

# await

`await` 操作符用于等待一个[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 对象。它只能在异步函数 [`async function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function) 中使用。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await#语法)

```js
[返回值] = await 表达式;
```

- 表达式

  一个 [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 对象或者任何要等待的值。

- 返回值

  返回 Promise 对象的处理结果。如果等待的不是 Promise 对象，则返回该值本身。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await#描述)

await 表达式会暂停当前 [`async function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function) 的执行，等待 Promise 处理完成。若 Promise 正常处理(fulfilled)，其回调的resolve函数参数作为 await 表达式的值，继续执行 [`async function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)。

若 Promise 处理异常(rejected)，await 表达式会把 Promise 的异常原因抛出。

另外，如果 await 操作符后的表达式的值不是一个 Promise，则返回该值本身。

## [例子](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await#例子)

如果一个 Promise 被传递给一个 await 操作符，await 将等待 Promise 正常处理完成并返回其处理结果。

```js
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();
```

如果该值不是一个 Promise，await 会把该值转换为已正常处理的Promise，然后等待其处理结果。

```js
async function f2() {
  var y = await 20;
  console.log(y); // 20
}
f2();
```

如果 Promise 处理异常，则异常值被抛出。

```js
async function f3() {
  try {
    var z = await Promise.reject(30);
  } catch (e) {
    console.log(e); // 30
  }
}
f3();
```



# window.setImmediate

> **非标准:** 该特性是非标准的，请尽量不要在生产环境中使用它！
>
> **注意:** 该方法可能不会被批准成为标准，目前只有最新版本的 Internet Explorer 和Node.js 0.10+实现了该方法。它遇到了 [Gecko](https://bugzilla.mozilla.org/show_bug.cgi?id=686201)(Firefox) 和[Webkit](https://code.google.com/p/chromium/issues/detail?id=146172) (Google/Apple) 的阻力.

该方法用来把一些需要长时间运行的操作放在一个回调函数里，在浏览器完成后面的其他语句后，就立刻执行这个回调函数。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setImmediate#语法)

```js
var immediateID = setImmediate(func, [param1, param2, ...]);
var immediateID = setImmediate(func);
```

- `immediateID` 是这次setImmediate方法设置的唯一ID,可以作为 [`window.clearImmediate`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/clearImmediate) 的参数.
- `func` 是将要执行的回调函数

所有参数都会直接传给你的函数。

## [备注](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setImmediate#备注)

[`window.clearImmediate`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/clearImmediate) 方法可以用来取消通过setImmediate设置的将要执行的语句, 就像 [`window.clearTimeout` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout) 对应于 [`window.setTimeout`](https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout)一样.

该方法可以用来替代 `setTimeout(fn, 0)` 去执行[繁重的操作](https://www.nczonline.net/blog/2009/08/11/timed-array-processing-in-javascript/)([heavy operations](https://www.nczonline.net/blog/2009/08/11/timed-array-processing-in-javascript/)) 

可以通过以下几种方式来模仿该功能:

- [`window.postMessage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage) 可以被用来触发一个 immediate 但会产生回调. 请注意, Internet Explorer 8包含postMessage的同步版本, 这意味着它不能被用来作为代替品.
- [MessageChannel](https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel) 可以在Web Workers 内部很好的被使用, 而postMessage 的语义意味着它不能在那使用.
- `setTimeout(fn, 0)`*可以使用*, 然而按照[HTML规范](https://html.spec.whatwg.org/multipage/webappapis.html#timers), 嵌套深度超过5级的定时器, 会被限制在4ms , 他没有为setImmediate的天然及时性提供合适的polyfill.

```js
setImmediate(()=>{
    console.log("21")
});
//21
```



# Console

**`Console`** 对象提供了浏览器控制台调试的接口（如：Firefox 的 [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)）。在不同浏览器上它的工作方式可能不一样，但通常都会提供一套共性的功能。

`Console` 对象可以从任何全局对象中访问到，如 浏览器作用域上的 [`Window`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)，以及通过属性控制台作为workers中的特定变体的 [`WorkerGlobalScope`](https://developer.mozilla.org/zh-CN/docs/Web/API/WorkerGlobalScope)。可以通过 [`Window.console`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/console) 引用，也可以简单的通过 `console` 引用。例：

```js
console.log("Failed to open the specified link")
```

> **提示**: 实际的 `console` 接口被定义为全小写的形式（比如不是这种形式 `Console` ），这是历史原因导致的。

## [方法](https://developer.mozilla.org/zh-CN/docs/Web/API/Console#方法)

- [`Console.assert()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/assert)

  如果第一个参数为 `false` ，则将消息和堆栈跟踪记录到控制台。

- [`Console.clear()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/clear)

  清空控制台，并输出 `Console was cleared`。

- [`Console.count()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/count)

  以参数为标识记录调用的次数，调用时在控制台打印标识以及调用次数。

- [`Console.countReset()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/countReset)

  重置指定标签的计数器值。

- [`Console.debug()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/debug)

  在控制台打印一条 `"debug"` 级别的消息。

- [`Console.dir()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/dir)

  显示一个由特定的 Javascript 对象列表组成的可交互列表。这个列表可以使用三角形隐藏和显示来审查子对象的内容。.

- [`Console.dirxml()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/dirxml)

  打印 XML/HTML 元素表示的指定对象，否则显示 JavaScript 对象视图。

- [`Console.error()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/error)

  打印一条错误信息，使用方法可以参考 [string substitution](https://developer.mozilla.org/en-US/docs/Web/API/console#using_string_substitutions)。

- `Console.exception()` Non-Standard Deprecated

  `error()` 方法的别称。

- [`Console.group()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/group)

  创建一个新的内联 [group](https://developer.mozilla.org/en-US/docs/Web/API/console#using_groups_in_the_console), 后续所有打印内容将会以子层级的形式展示。调用 `groupEnd()`来闭合组。

- [`Console.groupCollapsed()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/groupCollapsed)

  创建一个新的内联 [group](https://developer.mozilla.org/en-US/docs/Web/API/console#using_groups_in_the_console)。使用方法和 `group()` 相同，不同的是，`groupCollapsed()` 方法打印出来的内容默认是折叠的。调用`groupEnd()`来闭合组。

- [`Console.groupEnd()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/groupEnd)

  闭合当前内联 [group](https://developer.mozilla.org/en-US/docs/Web/API/console#Using_groups_in_the_console)。

- [`Console.info()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/info)

  打印资讯类说明信息，使用方法可以参考 [string substitution](https://developer.mozilla.org/en-US/docs/Web/API/console#using_string_substitutions)。

- [`Console.log()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/log)

  打印内容的通用方法，使用方法可以参考 [string substitution](https://developer.mozilla.org/en-US/docs/Web/API/console#using_string_substitutions)。

- [`Console.profile()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/profile) Non-Standard

  Starts the browser's built-in profiler (for example, the [Firefox performance tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)). You can specify an optional name for the profile.

- [`Console.profileEnd()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/profileEnd) Non-Standard

  Stops the profiler. You can see the resulting profile in the browser's performance tool (for example, the [Firefox performance tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)).

- [`Console.table()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/table)

  将列表型的数据打印成表格。

- [`Console.time()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/time)

  启动一个以入参作为特定名称的[计时器](https://developer.mozilla.org/en-US/docs/Web/API/console#Timers)，在显示页面中可同时运行的计时器上限为10,000.

- [`Console.timeEnd()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/timeEnd)

  结束特定的 [计时器](https://developer.mozilla.org/en-US/docs/Web/API/console#Timers) 并以毫秒打印其从开始到结束所用的时间。

- [`Console.timeLog()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/timeLog)

  打印特定 [计时器](https://developer.mozilla.org/en-US/docs/Web/API/console#timers) 所运行的时间。

- [`Console.timeStamp()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/timeStamp) Non-Standard

  添加一个标记到浏览器的 [Timeline](https://developer.chrome.com/devtools/docs/timeline) 或 [Waterfall](https://developer.mozilla.org/en-US/docs/Tools/Performance/Waterfall) 工具。

- [`Console.trace()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/trace)

  输出一个 [stack trace](https://developer.mozilla.org/en-US/docs/Web/API/console#stack_traces)。

- [`Console.warn()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/warn)

  打印一个警告信息，可以使用 [string substitution](https://developer.mozilla.org/en-US/docs/Web/API/console#using_string_substitutions) 和额外的参数。

