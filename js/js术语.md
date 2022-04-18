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