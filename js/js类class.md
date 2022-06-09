#  类

ECMAScript 6 新引入的 class 关键字具有正式定义类的能力。类（class）是ECMAScript 中新的基础性语法糖结构，因此刚开始接触时可能会不太习惯。虽然 ECMAScript 6 类表面上看起来可以支持正式的面向对象编程，但实际上它背后使用的仍然是原型和构造函数的概念。

----

## 4.1 类定义

*在面向对象的编程中，**class* *是用于创建对象的可扩展的程序代码模版，它为对象提供了状态（成员变量）的初始值和行为（成员函数或方法）的实现。*

在日常开发中，我们经常需要创建许多相同类型的对象，例如用户（users）、商品（goods）或者任何其他东西。

正如我们在 构造器和操作符 "new" 一章中已经学到的，new function 可以帮助我们实现这种需求。

但在现代 JavaScript 中，还有一个更高级的“类（class）”构造方式，它引入许多非常棒的新功能，这些功能对于面向对象编程很有用。

---

### 类的构成

类可以包含构造函数方法、实例方法、获取函数、设置函数和静态类方法，但这些都不是必需的。 空的类定义照样有效。默认情况下，类定义中的代码都在严格模式下执行。 

与函数构造函数一样，**多数编程风格都建议类名的首字母要大写**，以区别于通过它创建的实例（比 如，通过 class Foo {}创建实例 foo）：

```js
// 空类定义，有效
class Foo {}

// 有构造函数的类，有效
class Bar {
    constructor() {}
}

// 有获取函数的类，有效
class Baz {
    get myBaz() {}
}

// 有静态方法的类，有效
class Qux {
	static myQux() {}
}
```

类表达式的名称是可选的。在把类表达式赋值给变量后，可以通过 name 属性取得类表达式的名称字符串。**但不能在类表达式作用域外部访问这个标识符。**

```js
let Person = class PersonName {
    identify() {
    	console.log(Person.name, PersonName.name);
	}
}

let p = new Person();
p.identify(); // PersonName PersonName
console.log(Person.name); // PersonName

console.log(PersonName); // ReferenceError: PersonName is not defined
```



----

### 类声明和类表达式

与函数类型相似，定义类也有两种主要方式：类声明和类表达式。这两种方式都使用 class 关键字加大括号：

```js
// 类声明
class Person {}
// 类表达式
const Animal = class {};
```

#### 类表达式

就像函数一样，类可以在另外一个表达式中被定义，被传递，被返回，被赋值等。

这是一个类表达式的例子：

```js
let User = class {
  sayHi() {
    alert("Hello");
  }
};
```

类似于命名函数表达式（Named Function Expressions），类表达式可能也应该有一个名字。

**如果类表达式有名字，那么该名字仅在类内部可见**：

```js
let Person = class MyClassName {
  sayHi() {
    console.log("类表达式名字:",MyClassName);  // MyClassName 这个名字仅在类内部可见
  }
};

let p = new Person();
p.sayHi();  //类表达式名字: [class MyClassName]

console.log(MyClassName);  // ReferenceError: MyClassName is not defined
```

我们甚至可以动态地“按需”创建类，就像这样：

```js
function makeClass(name) {
  // 声明一个类并返回它
  return class {
    sayHi() {
      console.log("Hi!",name);
    }
  };
}

// 创建一个新的类
let Person = makeClass("kop");
new Person().sayHi();  // Hi! kop
```



----

### class语法

基本语法是：

```js
class MyClass {
  prop = value; // 属性

  constructor(...) { // 构造器
    // ...
  }

  method(...) {} // method

  get something(...) {} // getter 方法
  set something(...) {} // setter 方法

  [Symbol.iterator]() {} // 有计算名称（computed name）的方法（此处为 symbol）
  // ...
}
```

技术上来说，`MyClass` 是一个函数（我们提供作为 `constructor` 的那个），而 methods、getters 和 settors 都被写入了 `MyClass.prototype`。

然后使用 `new MyClass()` 来创建具有上述列出的所有方法的新对象。

`new` 会自动调用 `constructor()` 方法，因此我们可以在 `constructor()` 中初始化对象。

```js
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

// 用法：
let user = new User("John");
user.sayHi();
/*
当 new User("John") 被调用：

一个新对象被创建。
constructor 使用给定的参数运行，并将其赋值给 this.name。
……然后我们就可以调用对象方法了，例如 user.sayHi。
*/
```

>**类的方法之间没有逗号**
>
>对于新手开发人员来说，常见的陷阱是在类的方法之间放置逗号，这会导致语法错误。
>
>不要把这里的符号与对象字面量相混淆。在类中，不需要逗号。

---

### 什么是 class？

所以，`class` 到底是什么？正如人们可能认为的那样，这不是一个全新的语言级实体。

让我们揭开其神秘面纱，看看类究竟是什么。这将有助于我们理解许多复杂的方面。

在 JavaScript 中，**类是一种函数**。 或者，更确切地说，是 constructor 方法

看看下面这段代码：

```js
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log("Hi! ", this.name);
  }
}

// User 是一个函数
console.log(typeof User);  // function
```

`class User {...}` 构造实际上做了如下的事儿：

1. 创建一个名为 `User` 的函数，该函数成为类声明的结果。该函数的代码来自于 `constructor` 方法（如果我们不编写这种方法，那么它就被假定为空）。
2. 存储类中的方法，例如 `User.prototype` 中的 `sayHi`。

当 `new User` 对象被创建后，当我们调用其方法时，它会从原型中获取对应的方法，因此，对象 `new User` 可以访问类中的方法。

下面这些代码很好地解释了它们：

```js
// Class 是一个函数
console.log(typeof User);  // function

// 或者，更确切地说，是 constructor 方法
console.log(User === User.prototype.constructor);  // true

// 方法在 User.prototype 中
console.log(User.prototype.sayHi);  //[Function: sayHi]

// 在原型中实际上有两个方法
console.log(Object.getOwnPropertyNames(User.prototype));  // [ 'constructor', 'sayHi' ]
```

---

### 不仅仅是语法糖

常说 `class` 是一个语法糖（旨在使内容更易阅读，但不引入任何新内容的语法），因为我们实际上可以在不使用 `class` 的情况下声明相同的内容：

```js
// 用纯函数重写 class User

// 1. 创建构造器函数
function User(name) {
    this.name = name;
}
// 函数的原型（prototype）默认具有 "constructor" 属性，
// 所以，我们不需要创建它

// 2. 将方法添加到原型
User.prototype.sayHi = function() {
    console.log("Hi!", this.name);
}

// 用法：
let user = new User("kop");
user.sayHi();
```

这个定义的结果与使用类得到的结果基本相同。因此，这**确实是将 `class` 视为一种定义构造器及其原型方法的语法糖的理由。**

----

### 类与函数的关系和区别

与函数表达式类似，**类表达式在它们被求值前也不能引用**。不过，与函数定义不同的是，**虽然函数声明可以提升，但类定义不能**：

```js
console.log(FunctionExpression); // undefined
var FunctionExpression = function() {};
console.log(FunctionExpression); // function() {}

console.log(FunctionDeclaration); // FunctionDeclaration() {}
function FunctionDeclaration() {}
console.log(FunctionDeclaration); // FunctionDeclaration() {}

console.log(ClassExpression); // undefined
var ClassExpression = class {};
console.log(ClassExpression); // class {}

console.log(ClassDeclaration); // ReferenceError: ClassDeclaration is not defined
class ClassDeclaration {}
console.log(ClassDeclaration); // class ClassDeclaration {}
```

另一个跟函数声明不同的地方是，**函数受函数作用域限制**，而**类受块作用域限制**：

```js
{
    function FunctionDeclaration() {}
    class ClassDeclaration {}
}
console.log(FunctionDeclaration); // FunctionDeclaration() {}
console.log(ClassDeclaration); // ReferenceError: ClassDeclaration is not defined
```



尽管，它们之间存在着重大差异：

1. 首先，通过 `class` 创建的函数**具有特殊的内部属性标记** `[[IsClassConstructor]]: true`。因此，它与手动创建并不完全相同。

   编程语言会在许多地方检查该属性。例如，**与普通函数不同，必须使用 `new` 来调用它**：

```js
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log("Hi! ", this.name);
  }
}

User(); // TypeError: Class constructor User cannot be invoked without 'new'
```

此外，大多数 JavaScript 引擎中的类构造器的**字符串表示形式都以 “class…” 开头**

```js
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log("Hi! ", this.name);
  }
}

console.log(User); //  [class User]
```

1. 还有其他的不同之处，我们很快就会看到。

2. **类方法不可枚举**。 类定义将 `"prototype"` 中的所有方法的 `enumerable` 标志设置为 `false`。

   这很好，**因为如果我们对一个对象调用 `for..in` 方法，我们通常不希望 class 方法出现。**

3. 类总是使用 `use strict`。 **在类构造中的所有代码都将自动进入严格模式。**

此外，`class` 语法还带来了许多其他功能

----

### Getters/setters

就像对象字面量，类可能包括 getters/setters，计算属性（computed properties）等。

这是一个使用 `get/set` 实现 `user.name` 的示例：

```js
class User {
  constructor(name) {
    // 调用 setter
    this._name = name;
  }
  sayHi() {
    console.log("Hi! ", this._name);
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value === "String") {
      console.log("name must be string");
      return;
    }
    this._name = value;
  }
}

let user = new User("kop");
console.log(user.name);  //  kop
user.name = "bob";
console.log(user.name);  //  bob

```

从技术上来讲，这样的类声明可以通过在 `User.prototype` 中创建 getters 和 setters 来实现。

---

### 计算属性名称 […]

这里有一个使用中括号 `[...]` 的计算方法名称示例：

```js
class User {
  constructor(name) {
    // 调用 setter
    this._name = name;
  }
  ["say" + "Hi"]() {
    console.log("Hi!", this._name);
  }
}

let user = new User("kop");
user.sayHi();  // Hi! kop
```

这种特性很容易记住，因为它们和对象字面量类似。

----

### Class 字段

>**旧的浏览器可能需要 polyfill**   类字段（field）是最近才添加到语言中的。

之前，我们的类仅具有方法。

“类字段”是一种允许添加任何属性的语法。

例如，让我们在 `class User` 中添加一个 `age` 属性：

```js
class User {
  constructor(name) {
    // 调用 setter
    this._name = name;
  }
  age = 66;
  sayHi() {
    console.log("Hi!", this._name, this.age);
  }

}

let user = new User("kop");
user.sayHi();  // Hi! kop 66
```

所以，我们就只需在表达式中写 " = "，就这样。

类字段重要的不同之处在于，**它们会在每个独立对象中被设好**，而不是设在 `User.prototype`：

```js
class User {
  constructor(name) {
    // 调用 setter
    this.name = name;
  }
  age = 66;
  sayHi() {
    console.log("Hi!", this.name, this.age);
  }

}

let user = new User("kop");
console.log(user.name);  // kop
console.log(user.age);  // 66
console.log(User.prototype.name);  // undefined
console.log(User.prototype.age);  // undefined
```

我们也可以在赋值时使用更复杂的表达式和函数调用：

```js
class User {
  name = prompt("Name, please?", "John");
}

let user = new User();
alert(user.name); // John
```

----

### 使用类字段制作绑定方法

正如 函数绑定 一章中所讲的，**JavaScript 中的函数具有动态的 this。它取决于调用上下文**。

因此，如果一个对象方法被传递到某处，或者在另一个上下文中被调用，则 this 将不再是对其对象的引用。

例如，此代码将显示 undefined：

```js
class Button {
  constructor(value) {
    this.value = value;
  }
  click() {
    console.log(this.value);
  }
}

let button = new Button("kop");
setTimeout(button.click, 1000);  // undefined
```

这个问题被称为“丢失 this”。

我们在 函数绑定 一章中讲过，有两种可以修复它的方式：

1. 传递一个包装函数，例如 setTimeout(() => button.click(), 1000)。
2. 将方法绑定到对象，例如在 constructor 中。

```js
class Button {
  constructor(value) {
    this.value = value;
  }
  click() {
    console.log(this.value);
  }
}

let button = new Button("kop");

// 将方法绑定到对象
button.click = button.click.bind(button);
setTimeout(button.click, 1000);  // kop

// 传递一个包装函数
setTimeout(() => {
  button.click();
}, 1000);  // kop
```

类字段提供了另一种非常优雅的语法：

```js
class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    console.log(this.value);
  }
}

let button = new Button("kop");

setTimeout(button.click, 1000);  // kop

```

类字段 `click = () => {...}` 是基于每一个对象被创建的，**在这里对于每一个 `Button` 对象都有一个独立的方法，在内部都有一个指向此对象的 `this`**。我们可以把 `button.click` 传递到任何地方，而且 `this` 的值总是正确的。

**在浏览器环境中，它对于进行事件监听尤为有用。**

---

### 练习

重写Clock类

```js
 function Clock({ template }) {
  
    let timer;
  
    function render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  
  }
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();
```

class实现

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>
	<style type="text/css">
	
	</style>

<body>
	<div id="demo"></div>
	<button onclick="clock.start();">开始</button>
	<button onclick="clock.stop();">停止</button>
</body>
<script type="text/javascript">
class Clock {
  constructor(args) {
    this.template = args.template;
    this.el = args.el;
  }
  timer = null;
  render() {
    let date = new Date();
    let hours = this.format(date.getHours());
    let minutes = this.format(date.getMinutes());
    let seconds = this.format(date.getSeconds());
    let output = this.template.replace("h", hours)
      .replace("m", minutes)
      .replace("s", seconds);
    this.el.innerHTML = output;
  }
  format(value) {
    if (value < 10) {
      return "0" + value;
    }
    return value;
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
  	clearInterval(this.timer);
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let el = document.getElementById("demo");
let clock = new Clock({template: 'h:m:s', el:el});
clock.start();

</script>

</html>
```



----

## 4.2 类构造函数

constructor 关键字用于在类定义块内部创建类的构造函数。方法名 **constructor 会告诉解释器**在使用 new 操作符创建类的新实例时，**应该调用这个函数**。构造函数的定义**不是必需的**，不定义构造函数**相当于将构造函数定义为空函数**。

### 实例化

使用 new 操作符实例化 Person 的操作等于使用 new 调用其构造函数。唯一可感知的不同之处就是，JavaScript 解释器知道使用 new 和类意味着应该使用 constructor 函数进行实例化。

使用 new 调用类的构造函数会执行如下操作。

(1) 在内存中创建一个新对象。
(2) 这个新对象内部的[[Prototype]]指针被赋值为构造函数的 prototype 属性。
(3) 构造函数内部的 this 被赋值为这个新对象（即 this 指向新对象）。
(4) 执行构造函数内部的代码（给新对象添加属性）。
(5) **如果构造函数返回非空对象，则返回该对象**；否则，返回刚创建的新对象。

```js
class Animal {}

class Person {
    constructor() {
        console.log('person ctor');
    }
}
class Vegetable {
    constructor() {
        this.color = 'orange';
    }
}
let a = new Animal();
let p = new Person(); // person ctor
let v = new Vegetable();
console.log(v.color); // orange
```

### 类构造函数参数

类实例化时传入的参数会用作构造函数的参数。**如果不需要参数，则类名后面的括号也是可选的**：

```js
class Person {
    constructor(name) {
        console.log(arguments.length);
        this.name = name || null;
    }
}
let p1 = new Person; // 0
console.log(p1.name); // null

let p2 = new Person(); // 0
console.log(p2.name); // null

let p3 = new Person('Jake'); // 1
console.log(p3.name); // Jake
```

### 类构造函数返回的对象

**默认情况下，类构造函数会在执行之后返回 this 对象。**构造函数返回的对象会被用作实例化的对象，**如果没有什么引用新创建的 this 对象，那么这个对象会被销毁。**

不过，如果返回的**不是 this 对象**，而是其他对象，那么这个对象不会通过 instanceof 操作符检测出跟类有关联，**因为这个对象的原型指针并没有被修改**。

```js
class Person {
    constructor(override) {
        this.foo = 'foo';
        if (override) {
            return {
                bar: 'bar'
            };
        }
    }
}
let p1 = new Person(),
p2 = new Person(true);

console.log(p1); // Person{ foo: 'foo' }
console.log(p1 instanceof Person); // true

console.log(p2); // { bar: 'bar' }
console.log(p2 instanceof Person); // false
```

### 类构造函数与普通构造函数的区别

类构造函数与普通构造函数的主要区别是，**调用类构造函数必须使用 new 操作符**。

而普通构造函数如果**不使用 new 调用，那么就会以全局的 this（通常是 window）作为内部对象**。

**调用类构造函数时如果忘了使用 new 则会抛出错误**：

```js
function Person() {}

class Animal {}

// 把 window 作为 this 来构建实例
let p = Person();

let a = Animal();
// TypeError: class constructor Animal cannot be invoked without 'new'
```

### 类构造函数的调用需要使用new

类构造函数没有什么特殊之处，**实例化之后，它会成为普通的实例方法**（但作为类构造函数，仍然要使用 new 调用）。因此，实例化之后可以在实例上引用它：

```js
class Person {}

// 使用类创建一个新实例
let p1 = new Person();
p1.constructor();
// TypeError: Class constructor Person cannot be invoked without 'new'

// 使用对类构造函数的引用创建一个新实例
let p2 = new p1.constructor();
```

### 把类当成特殊函数

ECMAScript 中没有正式的类这个类型。从各方面来看，ECMAScript 类就是一种特殊函数。声明一个类之后，通过 typeof 操作符检测类标识符，表明它是一个函数：

```js
class Person {}
console.log(Person); // class Person {}
console.log(typeof Person); // function
```

**类标识符**有 prototype 属性，**而这个原型也有一个 constructor 属性指向类自身**：

```js
class Person{}
console.log(Person.prototype); // { constructor: f() }

console.log(Person === Person.prototype.constructor); // true
```

与普通构造函数一样，**可以使用 instanceof 操作符检查构造函数原型是否存在于实例的原型链中**：

```js
class Person {}
let p = new Person();

console.log(p instanceof Person); // true
```

由此可知，可以使用 instanceof 操作符检查一个对象与类构造函数，以确定这个对象是不是类的 实例。**只不过此时的类构造函数要使用类标识符**，比如，在前面的例子中要检查 p 和 Person。 

### 类本身与构造函数

如前所述，类本身具有与普通构造函数一样的行为。在类的上下文中，**类本身**在使用 new 调用时就 **会被当成构造函数**。

重点在于，**类中定义的 constructor 方法不会被当成构造函数，在对它使用 instanceof 操作符时会返回 false**。

但是，如果在创建实例时**直接将类构造函数当成普通构造函数来 使用，那么 instanceof 操作符的返回值会反转**：

```js
class Person {}

let p1 = new Person();
console.log(p1.constructor === Person); // true
console.log(p1 instanceof Person); // true
console.log(p1 instanceof Person.constructor); // false

let p2 = new Person.constructor();
console.log(p2.constructor === Person); // false
console.log(p2 instanceof Person); // false
console.log(p2 instanceof Person.constructor); // true
```

### 类作为参数传递

类是 JavaScript 的一等公民，因此可**以像其他对象或函数引用一样把类作为参数传递**：

```js
// 类可以像函数一样在任何地方定义，比如在数组中
let classList = [
    class {
        constructor(id) {
            this.id_ = id;
            console.log(`instance ${this.id_}`);
        }
    }
];
function createInstance(classDefinition, id) {
	return new classDefinition(id);
}

let foo = createInstance(classList[0], 3141); // instance 3141
```

### 类也可以立即实例化

与立即调用函数表达式相似，**类也可以立即实例化**：

```js
// 因为是一个类表达式，所以类名是可选的
let p = new class Foo {
    constructor(x) {
        console.log(x);
    }
}('bar'); // bar

console.log(p); // Foo {}
```

----

## 4.3 实例、原型和类成员

类的语法可以非常方便地定义应该存在于实例上的成员、应该存在于原型上的成员，以及应该存在于类本身的成员。

### 实例成员

每次通过new 调用类标识符时，都会执行类构造函数。在这个函数内部，可以为新创建的实例（this）添加“自有”属性。至于添加什么样的属性，则没有限制。**另外，在构造函数执行完毕后，仍然可以给实例继续添加新成员。**

**每个实例都对应一个唯一的成员对象，这意味着所有成员都不会在原型上共享**：

```js
class Person {
    constructor() {
        // 这个例子先使用对象包装类型定义一个字符串
        // 为的是在下面测试两个对象的相等性
        this.name = new String('Jack');
        this.sayName = () => console.log(this.name);
        this.nicknames = ['Jake', 'J-Dog']
    }
}
let p1 = new Person(),
p2 = new Person();

p1.sayName(); // Jack
p2.sayName(); // Jack

console.log(p1.name === p2.name); // false
console.log(p1.sayName === p2.sayName); // false
console.log(p1.nicknames === p2.nicknames); // false

p1.name = p1.nicknames[0];
p2.name = p2.nicknames[1];
p1.sayName(); // Jake
p2.sayName(); // J-Dog
```

---

### 静态属性

>*最近新增的特性* ,  这是一个最近添加到 JavaScript 的特性。 

静态属性被用于当我们想要存储类级别的数据时，而不是绑定到实例。

静态的属性也是可能的，它们看起来就像常规的类属性，但前面加有 `static`：

```js
class Article {
  static publisher = "fans";
}

let article = new Article();
console.log(article.publisher);  // undefined
console.log(Article.publisher);  // fans
```

这等同于直接给 `Article` 赋值：

```js
Article.publisher = "fans";
```

### 继承静态属性和方法

**静态属性和方法是可被继承的。**

例如，下面这段代码中的 `Animal.compare` 和 `Animal.planet` 是可被继承的，可以通过 `Rabbit.compare` 和 `Rabbit.planet` 来访问：

```js
class Animal {
  static planet = "Earth";

  constructor(name, speed) {
    this.name = name;
    this.speed =speed;
  }

  run(speed = 0) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let rabbits = [
  new Rabbit("野兔", 100),
  new Rabbit("玉兔", 153),
  new Rabbit("灰兔", 88)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run();  //  灰兔 runs with speed 88.
console.log(Rabbit.planet);  //  Earth
```

现在我们调用 `Rabbit.compare` 时，继承的 `Animal.compare` 将会被调用。

它是如何工作的？再次，使用原型。你可能已经猜到了，`extends` 让 `Rabbit` 的 `[[Prototype]]` 指向了 `Animal`。

![class问题2](E:\pogject\学习笔记\image\js\class问题2.png)

所以，`Rabbit extends Animal` 创建了两个 `[[Prototype]]` 引用：

1. `Rabbit` 函数原型继承自 `Animal` 函数。
2. `Rabbit.prototype` 原型继承自 `Animal.prototype`。

结果就是，继承对常规方法和静态方法都有效。

这里，让我们通过代码来检验一下：

```js
// 对于静态的
console.log(Rabbit.__proto__ === Animal);  // true

// 对于常规方法
console.log(Rabbit.prototype.__proto__ === Animal.prototype);  // true


```



```js
class Animal {}

console.log(Animal.prototype.__proto__ === Object.prototype);  // true
console.log(Animal.__proto__ === Object);  // false
console.log(Animal.__proto__ === Function.prototype);  // true  所有函数都是默认如此

console.log(Animal.getOwnPropertyNames({a: 1, b: 2}));  //  TypeError: Animal.getOwnPropertyNames is not a function
```

```js
class Animal extends Object {}

console.log(Animal.prototype.__proto__ === Object.prototype);  // true
console.log(Animal.__proto__ === Object);  // true
console.log(Animal.__proto__ === Function.prototype);  // false

console.log(Animal.getOwnPropertyNames({a: 1, b: 2}));  //  [ 'a', 'b' ]
```



----

### 原型方法与访问器

**为了在实例间共享方法，类定义语法把在类块中定义的方法作为原型方法**。

```js
class Person {
    constructor() {
        // 添加到 this 的所有内容都会存在于不同的实例上
        this.locate = () => console.log('instance');
    }
    // 在类块中定义的所有内容都会定义在类的原型上
    locate() {
        console.log('prototype');
    }
}
let p = new Person();
p.locate(); // instance
Person.prototype.locate(); // prototype
```

可以把方法定义在类构造函数中或者类块中，但**不能在类块中给原型添加原始值或对象作为成员数据**：

```js
class Person {
	name: 'Jake'
}
// Uncaught SyntaxError: Unexpected token
```

**类方法等同于对象属性**，因此可以使用字符串、符号或计算的值作为键：

```js
const symbolKey = Symbol('symbolKey');
class Person {
    stringKey() {
        console.log('invoked stringKey');
    }
    [symbolKey]() {
        console.log('invoked symbolKey');
    }
    ['computed' + 'Key']() {
        console.log('invoked computedKey');
    }
}
let p = new Person();
p.stringKey(); // invoked stringKey
p[symbolKey](); // invoked symbolKey
p.computedKey(); // invoked computedKey
```

**类定义也支持获取和设置访问器**。语法与行为跟普通对象一样：

```js
class Person {
    set name(newName) {
    	this.name_ = newName;
    }
    get name() {
    	return this.name_;
    }
}
let p = new Person();
p.name = 'Jake';
console.log(p.name); // Jake
```

----

### 静态类方法

可以在类上定义静态方法。这些方法通常用于执行不特定于实例的操作，**也不要求存在类的实例**。

与原型成员类似，**静态成员每个类上只能有一个**。

静态方法被用于实现属于整个类的功能。它与具体的类实例无关。

**静态类成员在类定义中使用 static 关键字作为前缀**。在静态成员中，this 引用类自身。其他所有约定跟原型成员一样：

```js
class Person {
    constructor() {
    // 添加到 this 的所有内容都会存在于不同的实例上
        this.locate = () => console.log('instance', this);
    }
    // 定义在类的原型对象上
    locate() {
        console.log('prototype', this);
    }
    // 定义在类本身上
    static locate() {
        console.log('class', this);
    }
}
let p = new Person();
p.locate(); // instance, Person {}
Person.prototype.locate(); // prototype, {constructor: ... }

Person.locate(); // class, class Person {}
```

**静态类方法非常适合作为实例工厂**：

```js
class Person {
    constructor(age){
        // 添加到 this 的所有内容都会存在于不同的实例上
        this._age=age;
    }
    // 定义在类的原型对象上
    sayAge(){
        console.log(this._age);
    }
    // 定义在类本身上
    static create(){
        // 使用随机年龄创建并返回一个 Person 实例
        return new Person(Math.floor(Math.random()*100));
    }
}

console.log(Person.create()); // Person { _age: 34 }
console.log(Person.create()); // Person { _age: 62 }
```

我们可以把一个方法作为一个整体赋值给类。这样的方法被称为 **静态的（static）**。

在一个类的声明中，它们以 `static` 关键字开头，如下所示：

```js
class User {
  static staticMethod() {
    console.log(this === User);
  }
}

User.staticMethod();  // true
```

这实际上跟直接将其作为属性赋值的作用相同：

```js
class User {}

User.staticMethod = function() {
  console.log(this === User);
};

User.staticMethod(); // true
```

在 `User.staticMethod()` 调用中的 `this` 的值是类构造器 `User` 自身

**通常，静态方法用于实现属于整个类**，但不属于该类任何特定对象的函数。



例如，我们有对象 `Article`，并且需要一个方法来比较它们。

通常的解决方案就是添加 `Article.compare` 静态方法：

```js
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

let articles = [
  new Article("HTML", new Date(2022, 1, 1)),
  new Article("CSS", new Date(2022, 0, 3)),
  new Article("JavaScript", new Date(2022, 11, 1))
];

articles.sort(Article.compare);

console.log(articles[0]);  //Article { title: 'CSS', date: 2022-01-02T16:00:00.000Z }
```

这里 `Article.compare` 方法代表“上面的”文章，意思是比较它们。它不是文章的方法，而是整个 class 的方法。



另一个例子是所谓的 **工厂方法**。

比如说，我们需要通过多种方式来创建一篇文章：

1. 通过用给定的参数来创建（`title`，`date` 等）。
2. 使用今天的日期来创建一个空的文章。
3. ……其它方法。

第一种方法我们可以通过 constructor 来实现。对于第二种方式，我们可以创建类的一个静态方法来实现。

例如这里的 `Article.createTodays()`：

```js
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createTodays() {
    // 记住 this = Article
    return new this("kop's day", new Date());
  }
}

let article = Article.createTodays();

console.log(article);  // Article { title: "kop's day", date: 2022-06-09T08:45:56.680Z }
```



现在，每当我们需要创建一个今天的文章时，我们就可以调用 `Article.createTodays()`。再说明一次，它不是一个文章的方法，而是整个 class 的方法。

静态方法也被用于与数据库相关的公共类，可以用于搜索/保存/删除数据库中的条目， 就像这样：

```js
// 假定 Article 是一个用来管理文章的特殊类
// 通过 id 来移除文章的静态方法：
Article.remove({id: 12345});
```



----

### 非函数原型和类成员

虽然类定义并不显式支持在原型或类上添加成员数据，但在类定义外部，可以手动添加：

```js
class Person {
    sayName() {
        console.log(`${Person.greeting} ${this.name}`);
    }
}
// 在类上定义数据成员
Person.greeting = 'My name is';

// 在原型上定义数据成员
Person.prototype.name = 'Jake';

let p = new Person();
p.sayName(); // My name is Jake
```

**注意** 类定义中之所以没有显式支持添加数据成员，**是因为在共享目标（原型和类）上添加可变（可修改）数据成员是一种反模式**。

一般来说，对象实例应该独自拥有通过 this引用的数据。

---

### 私有的和受保护的属性和方法

面向对象编程最重要的原则之一 —— 将内部接口与外部接口分隔开来。

#### 内部接口和外部接口

在面向对象的编程中，属性和方法分为两组：

- **内部接口** —— 可以通过该类的其他方法访问，但不能从外部访问的方法和属性。
- **外部接口** —— 也可以从类的外部访问的方法和属性。

内部接口用于对象工作，它的细节相互使用。我们需要使用一个对象时只需知道它的外部接口。我们可能完全不知道它的内部是如何工作的。

在 JavaScript 中，有两种类型的对象字段（属性和方法）：

- 公共的：可从任何地方访问。它们构成了外部接口。到目前为止，我们只使用了公共的属性和方法。
- **私有的：只能从类的内部访问。这些用于内部接口。**

在许多其他编程语言中，还存在“受保护”的字段：只能从类的内部和基于其扩展的类的内部访问（例如私有的，但可以从继承的类进行访问）。它们对于内部接口也很有用。从某种意义上讲，它们比私有的属性和方法更为广泛，因为我们通常希望继承类来访问它们。

受保护的字段不是在语言级别的 Javascript 中实现的，但实际上它们非常方便，**因为它们是在 Javascript 中模拟的类定义语法**。

##### 受保护的 “waterAmount”

首先，让我们做一个简单的咖啡机类：

```js
class CoffeeMachine {
  waterAmount = 0;  // 内部的水量

  constructor(power) {
    this.power = power;
    console.log(`Create a coffee machine, power: ${power}`);
  }
}

//创建咖啡机
let coffeeMachine = new CoffeeMachine(666);

// 加水
coffeeMachine.waterAmount = 200;

console.log(coffeeMachine.waterAmount);  // 200
```

现在，属性 `waterAmount` 和 `power` 是公共的。我们可以轻松地从外部将它们 get/set 成任何值。

让我们将 `waterAmount` 属性更改为受保护的属性，以对其进行更多控制。例如，我们不希望任何人将它的值设置为小于零的数。

**受保护的属性通常以下划线 `_` 作为前缀。**

这不是在语言级别强制实施的，但是程序员之间有一个众所周知的约定，**即不应该从外部访问此类型的属性和方法**。

所以我们的属性将被命名为 `_waterAmount`：

```js
class CoffeeMachine {
  constructor(power) {
    this.power = power;
    console.log(`Create a coffee machine, power: ${power}`);
  }
  _waterAmount = 0;  // 内部的水量

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }
}

//创建咖啡机
let coffeeMachine = new CoffeeMachine(666);

// 加水
coffeeMachine.waterAmount = -100;

console.log(coffeeMachine.waterAmount);  // 0
```

现在访问已受到控制，因此将水量的值设置为小于零的数变得不可能。

##### 只读的 “power”

对于 `power` 属性，让我们将它设为只读。有时候一个属性必须只能被在创建时进行设置，之后不再被修改。

咖啡机就是这种情况：功率永远不会改变。

要做到这一点，我们只需要设置 getter，而不设置 setter：

```js
class CoffeeMachine {
  constructor(power) {
    this._power = power;
  }
  _waterAmount = 0;  // 内部的水量

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  get power() {
    return this._power;
  }
}

//创建咖啡机
let coffeeMachine = new CoffeeMachine(666);

console.log(coffeeMachine.power);  // 666

coffeeMachine.power = 250;  //无效

console.log(coffeeMachine.power);  // 666
```



**Getter/setter 函数**

这里我们使用了 getter/setter 语法。

但大多数时候首选 `get.../set...` 函数，像这样：

```js
class CoffeeMachine {
  _waterAmount = 0;

  setWaterAmount(value) {
    if (value < 0) value = 0;
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }
}

new CoffeeMachine().setWaterAmount(100);
```

这看起来有点长，但函数更灵活。它们可以接受多个参数（即使我们现在还不需要）。

另一方面，get/set 语法更短，所以最终没有严格的规定，而是由你自己来决定。

>**受保护的字段是可以被继承的**
>
>如果我们继承 `class MegaMachine extends CoffeeMachine`，那么什么都无法阻止我们从新的类中的方法访问 `this._waterAmount` 或 `this._power`。
>
>所以受保护的字段是自然可被继承的。与我们接下来将看到的私有字段不同。

##### 私有的 “#waterLimit”

> 这是一个最近添加到 JavaScript 的特性。 JavaScript 引擎不支持（或部分支持），需要 polyfills。

这儿有一个马上就会被加到规范中的已完成的 Javascript 提案，它为私有属性和方法提供语言级支持。

私有属性和方法应该以 `#` 开头。它们只在类的内部可被访问。

例如，这儿有一个私有属性 `#waterLimit` 和检查水量的私有方法 `#fixWaterAmount`：

```js
class CoffeeMachine {
  constructor(power) {
    this._power = power;  //受保护的属性
  }
  _waterAmount = 0;  // 内部的水量

  #waterLimit = 200;  //私有属性

  //私有方法
  #fixWaterAmount(value) {
    if (value < 0) {
      return 0;
    }
    if (value > this.#waterLimit) {
      return this.#waterLimit;
    }
    return value;
  }

  set waterAmount(value) {
    this._waterAmount = this.#fixWaterAmount(value);
  }

  get waterAmount() {
    return this._waterAmount;
  }

  get power() {
    return this._power;
  }
}

//创建咖啡机
let coffeeMachine = new CoffeeMachine(666);

console.log(coffeeMachine.waterAmount);  // 0
coffeeMachine.waterAmount = 100;
console.log(coffeeMachine.waterAmount);  // 100
coffeeMachine.waterAmount =300;
console.log(coffeeMachine.waterAmount);  //  300

// 不能从类的外部访问类的私有属性和方法

//coffeeMachine.#fixWaterAmount(123); // SyntaxError: Private field '#fixWaterAmount' must be declared in an enclosing class

coffeeMachine.#waterLimit = 1000; // SyntaxError: Private field '#waterLimit' must be declared in an enclosing class
```

在语言级别，`#` 是该字段为私有的特殊标志。我们无法从外部或从继承的类中访问它。

私有字段与公共字段不会发生冲突。我们可以同时拥有私有的 `#waterAmount` 和公共的 `waterAmount` 字段。

例如，让我们使 `waterAmount` 成为 `#waterAmount` 的一个访问器：

```js
class CoffeeMachine {

  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) value = 0;
    this.#waterAmount = value;
  }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;

console.log(machine.#waterAmount); // SyntaxError: Private field '#waterAmount' must be declared in an enclosing class
```



与受保护的字段不同，私有字段由语言本身强制执行。这是好事儿。

但是如果我们继承自 `CoffeeMachine`，那么我们将无法直接访问 `#waterAmount`。我们需要依靠 `waterAmount` getter/setter：

```js

class MegaCoffeeMachine extends CoffeeMachine {
  method() {
    console.log( this.#waterAmount ); // Error: can only access from CoffeeMachine
  }
}
```

在许多情况下，这种限制太严重了。如果我们扩展 `CoffeeMachine`，则可能有正当理由访问其内部。这就是为什么大多数时候都会使用受保护字段，即使它们不受语言语法的支持。

> **私有字段不能通过 this[name] 访问**
>
> 私有字段很特别。
>
> 正如我们所知道的，通常我们可以使用 `this[name]` 访问字段：
>
> ```js
> class User {
>   ...
>   sayHi() {
>     let fieldName = "name";
>     console.log(`Hello, ${this[fieldName]}`);
>   }
> }
> ```
>
> 对于私有字段来说，这是不可能的：`this['#name']` 不起作用。这是确保私有性的语法限制。

就面向对象编程（OOP）而言，内部接口与外部接口的划分被称为 [封装](https://en.wikipedia.org/wiki/Encapsulation_(computer_programming))。

它具有以下优点：

- 保护用户，使他们不会误伤自己

- 可支持性

- **如果我们严格界定内部接口，那么这个 class 的开发人员可以自由地更改其内部属性和方法，甚至无需通知用户。**

​			如果你是这样的 class 的开发者，那么你会很高兴知道可以安全地重命名私有变量，可以更改甚至删除其参数，因为没有外部代码依赖于它们。

​			对于用户来说，当新版本问世时，应用的内部可能被进行了全面检修，但如果外部接口相同，则仍然很容易升级。

- 隐藏复杂性

人们喜欢使用简单的东西。至少从外部来看是这样。内部的东西则是另外一回事了。

**当实施细节被隐藏，并提供了简单且有据可查的外部接口时，总是很方便的。**

为了隐藏内部接口，我们使用受保护的或私有的属性：

- 受保护的字段以 `_` 开头。这是一个众所周知的约定，不是在语言级别强制执行的。程序员应该只通过它的类和从它继承的类中访问以 `_` 开头的字段。
- 私有字段以 `#` 开头。JavaScript 确保我们只能从类的内部访问它们。

目前，各个浏览器对私有字段的支持不是很好，但可以用 polyfill 解决。

---

### 迭代器与生成器方法

类定义语法**支持在原型和类本身上定义生成器方法**：

```js
class Person {
    // 在原型上定义生成器方法
    *createNicknameIterator(){
        yield 'Jack';
        yield 'Jake';
        yield 'J-Dog';
    }
    //在类上定义生成器方法
    static *createJobIterator(){
        yield 'Butcher';
        yield 'Baker';
        yield 'Candlestick maker';
    }
}

let jobIter=Person.createJobIterator();
console.log(jobIter.next().value);  //Butcher
console.log(jobIter.next().value);  //Baker
console.log(jobIter.next().value);  //Candlestick maker

let p=new Person();
let nicknameIter=p.createNicknameIterator();
console.log(nicknameIter.next().value);  //Jack
console.log(nicknameIter.next().value);  //Jake
console.log(nicknameIter.next().value);  //J-Dog
```

因为支持生成器方法，所以**可以通过添加一个默认的迭代器，把类实例变成可迭代对象**：

```js
class Person {
    constructor(){
        this.nicknames=['Jack', 'Jake', 'J-Dog'];
    }
    *[Symbol.iterator](){
        yield *this.nicknames.entries();
    }
}

let p=new Person();
for (let [idx,nickname] of p){
    console.log(nickname);
}
// Jack
// Jake
// J-Dog
```

也**可以只返回迭代器实例**：

```js
class Person {
    constructor(){
        this.nicknames=['Jack', 'Jake', 'J-Dog'];
    }
    [Symbol.iterator](){
        return this.nicknames.entries();
    }
}

let p=new Person();
for (let [idx,nickname] of p){
    console.log(nickname);
}
// Jack
// Jake
// J-Dog
```

----

## 4.4 类继承

本章前面花了大量篇幅讨论如何使用 ES5 的机制实现继承。ECMAScript 6 新增特性中最出色的一个就是原生支持了类继承机制。虽然类继承使用的是新语法，**但背后依旧使用的是原型链**。

类继承是一个类扩展另一个类的一种方式。因此，我们可以在现有功能之上创建新功能。

### 继承基础

----

#### “extends” 关键字

“extends” 语法会设置两个原型：

1. 在构造函数的 `"prototype"` 之间设置原型（为了获取实例方法）。
2. 在构造函数之间会设置原型（为了获取静态方法）。

ES6 类支持**单继承**。使用 extends 关键字，就可以继承任何拥有[[Construct]]和原型的对象。很大程度上，**这意味着不仅可以继承一个类，也可以继承普通的构造函数**（保持向后兼容）：

```js
class Vehicle {}
// 继承类
class Bus extends Vehicle {}

let b = new Bus();
console.log(b instanceof Bus); // true
console.log(b instanceof Vehicle); // true

function Person() {}
// 继承普通构造函数
class Engineer extends Person {}

let e = new Engineer();
console.log(e instanceof Engineer); // true
console.log(e instanceof Person); // true
```

在内部，关键字 `extends` 使用了很好的旧的原型机制进行工作。

JavaScript 内建对象同样也使用原型继承。例如，`Date.prototype.[[Prototype]]` 是 `Object.prototype`。这就是为什么日期可以访问通用对象的方法。

----

##### 派生类可以通过原型链访问父类方法

**派生类都会通过原型链访问到类和原型上定义的方法**。this 的值会反映调用相应方法的实例或者类：

```js
class Vehicle {
    identifyPrototype(id) {
        console.log(id, this);
    }
    static identifyClass(id) {
        console.log(id, this);
    }
}
class Bus extends Vehicle {}

let v = new Vehicle();
let b = new Bus();

b.identifyPrototype('bus'); // bus, Bus {}
v.identifyPrototype('vehicle'); // vehicle, Vehicle {}

Bus.identifyClass('bus'); // bus [class Bus extends Vehicle]
Vehicle.identifyClass('vehicle'); // vehicle, class Vehicle {}
```

**注意** extends 关键字也可以在类表达式中使用，因此 let Bar = class extends Foo {}是有效的语法。

##### 在 `extends` 后允许任意表达式

类语法不仅允许指定一个类，在 `extends` 后可以指定任意表达式。

例如，一个生成父类的函数调用：

```js
function makeClass(id){
  return class {
      identifyPrototype() {
          console.log(id, this);
      }
  };
}
class Bus extends makeClass("Vehicle"){}

let b = new Bus();

console.log(b instanceof Bus); // true
b.identifyPrototype(); // Vehicle Bus {}
```

这里 `class Bus` 继承自 `makeClass("Vehicle")` 的结果。

这对于高级编程模式，例如当我们根据许多条件使用函数生成类，并继承它们时来说可能很有用。

----

### 重写方法

默认情况下，所有未在 `class Rabbit` 中指定的方法均从 `class Animal` 中直接获取。

但是如果我们在 `Rabbit` 中指定了我们自己的方法，例如 `stop()`，那么将会使用它：

但是通常来说，我们不希望完全替换父类的方法，**而是希望在父类方法的基础上进行调整或扩展其功能**。我们在我们的方法中做一些事儿，但是在它之前或之后或在过程中会调用父类方法。

#### 使用super

Class 为此提供了 `"super"` 关键字。

- 执行 `super.method(...)` 来调用一个父类方法。
- 执行 `super(...)` 来调用一个父类 constructor（只能在我们的 constructor 中）。

例如，让我们的 rabbit 在停下来的时候自动 hide：

```js
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides`);
  }

  stop() {
    super.stop();  // 调用父类的 stop
    this.hide();  // 然后 hide
  }
}

let rabbit = new Rabbit("野兔");

rabbit.run(50);  // 野兔 runs with speed 50.
rabbit.stop();
// 野兔 stands still.
// 野兔 hides
```

#### **箭头函数没有** `super`

如果被访问，它会从外部函数获取。例如：

```js
class Rabbit extends Animal {
  stop() {
    setTimeout(() => super.stop(), 1000); // 1 秒后调用父类的 stop
  }
}
```

箭头函数中的 `super` 与 `stop()` 中的是一样的，所以它能按预期工作。

如果我们在这里指定一个“普通”函数，那么将会抛出错误：

```js
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides`);
  }

  stop() {
    // setTimeout(() => super.stop(), 1000); // 1 秒后调用父类的 stop,
    setTimeout(function() { super.stop() }, 1000);  // SyntaxError: 'super' keyword unexpected here
    this.hide();  // 然后 hide
  }
}
```

---

### 重写 constructor

对于重写 constructor 来说，则有点棘手。

到目前为止，Rabbit 还没有自己的 constructor。

根据 规范，如果一个类扩展了另一个类并且**没有 constructor**，那么**将生成下面这样的“空” constructor**：

```js
class Rabbit extends Animal {
  // 为没有自己的 constructor 的扩展类生成的
  constructor(...args) {
    super(...args);
  }
}
```

正如我们所看到的，它调用了父类的 `constructor`，并传递了所有的参数。如果我们没有写自己的 constructor，就会出现这种情况。

现在，我们给 `Rabbit` 添加一个自定义的 constructor。除了 `name` 之外，它还会指定 `earLength`。

**继承类的 constructor 必须调用 `super(...)`，并且 (!) 一定要在使用 `this` 之前调用。**

……但这是为什么呢？这里发生了什么？确实，这个要求看起来很奇怪。

在 JavaScript 中，继承类（所谓的“派生构造器”，英文为 “derived constructor”）的构造函数与其他函数之间是有区别的。**派生构造器具有特殊的内部属性 `[[ConstructorKind]]:"derived"`。这是一个特殊的内部标签。**

**该标签会影响它的 `new` 行为**：

- 当通过 `new` 执行一个常规函数时，它将创建一个空对象，并将这个空对象赋值给 `this`。
- **但是当继承的 constructor 执行时，它不会执行此操作**。它期望父类的 constructor 来完成这项工作。

因此，派生的 constructor 必须调用 `super` 才能执行其父类（base）的 constructor，否则 `this` 指向的那个对象将不会被创建。并且我们会收到一个报错。

为了让 `Rabbit` 的 constructor 可以工作，它需要在使用 `this` 之前调用 `super()`，就像下面这样：

```js
class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);  // 必需先调用
    this.earLength = earLength;
  }
  hide() {
    console.log(`${this.name} hides`);
  }

  stop() {
    setTimeout(() => super.stop(), 1000); // 1 秒后调用父类的 stop,
    this.hide();  // 然后 hide
  }
}

let rabbit = new Rabbit("野兔", 66);

console.log(rabbit.name);  // 野兔
console.log(rabbit.earLength);  // 66
```

---

### 重写类字段: 一个棘手的注意要点

我们不仅可以重写方法，还可以重写类字段。

不过，当我们访问在父类构造器中的一个被重写的字段时，这里会有一个诡异的行为，这与绝大多数其他编程语言都很不一样。

请思考此示例：

```js
class Animal {
  name = "animal";

  constructor() {
    console.log(this.name);  // (*)
  }
}

class Rabbit extends Animal {
  name = "野兔";
}

new Animal();  // animal
new Rabbit();  // animal

```

这里，`Rabbit` 继承自 `Animal`，并且用它自己的值重写了 `name` 字段。

**因为 `Rabbit` 中没有自己的构造器，所以 `Animal` 的构造器被调用了。**

有趣的是在这两种情况下：`new Animal()` 和 `new Rabbit()`，在 `(*)` 行的 `console.log` 都打印了 `animal`。

**换句话说，父类构造器总是会使用它自己字段的值，而不是被重写的那一个。**

古怪的是什么呢？

如果这还不清楚，那么让我们用方法来进行比较。

这里是相同的代码，但是我们调用 `this.showName()` 方法而不是 `this.name` 字段：

```js
class Animal {
  showName() {
    console.log("动物");
  }
  constructor() {
    this.showName();
  }
}

class Rabbit extends Animal {
  showName() {
    console.log("兔子");
  }
}

new Animal();  // 动物
new Rabbit();  // 兔子
```

请注意：这时的输出是不同的。

这才是我们本来所期待的结果。**当父类构造器在派生的类中被调用时，它会使用被重写的方法。**

……但对于类字段并非如此。正如前文所述，**父类构造器总是使用父类的字段**。

这里为什么会有这样的区别呢？

实际上，**原因在于字段初始化的顺序**。类字段是这样初始化的：

- 对于基类（还未继承任何东西的那种），**在构造函数调用前初始化**。
- 对于派生类，**在 `super()` 后立刻初始化**。

在我们的例子中，`Rabbit` 是派生类，里面没有 `constructor()`。正如先前所说，这相当于一个里面只有 `super(...args)` 的空构造器。

所以，`new Rabbit()` 调用了 `super()`，因此它执行了父类构造器，**并且（根据派生类规则）只有在此之后，它的类字段才被初始化**。

**在父类构造器被执行的时候，`Rabbit` 还没有自己的类字段**，这就是为什么 `Animal` 类字段被使用了。

这种字段与方法之间微妙的区别**只特定于 JavaScript**。

幸运的是，**这种行为仅在一个被重写的字段被父类构造器使用时才会显现出来**。接下来它会发生的东西可能就比较难理解了，所以我们要在这里对此行为进行解释。

如果出问题了，我们可以通过使用方法或者 getter/setter 替代类字段，来修复这个问题。

---

### 深入：内部探究和 [[HomeObject]]

首先要说的是，从我们迄今为止学到的知识来看，`super` 是不可能运行的。

的确是这样，让我们问问自己，以技术的角度它是如何工作的？当一个对象方法执行时，它会将当前对象作为 `this`。随后如果我们调用 `super.method()`，那么引擎需要从当前对象的原型中获取 `method`。但这是怎么做到的？

这个任务看起来是挺容易的，但其实并不简单。引擎知道当前对象的 `this`，所以它可以获取父 `method` 作为 `this.__proto__.method`。不幸的是，这个“天真”的解决方法是行不通的。

让我们演示一下这个问题。简单起见，我们使用普通对象而不使用类。

如果你不想知道更多的细节知识，你可以跳过此部分，并转到下面的 `[[HomeObject]]` 小节。这没关系的。但如果你感兴趣，想学习更深入的知识，那就继续阅读吧。

在下面的例子中，`rabbit.__proto__ = animal`。现在让我们尝试一下：在 `rabbit.eat()` 我们将会使用 `this.__proto__` 调用 `animal.eat()`：

```js
let animal = {
    name: "动物",
    eat() {
        console.log(`${this.name} eats`);
    }
}

let rabbit = {
    __proto__: animal,
    name: "兔子",
    eat() {
        // 这就是 super.eat() 可以大概工作的方式
        this.__proto__.eat.call(this);  // (*)
    }
}

rabbit.eat();  // 兔子 eats
```

在 `(*)` 这一行，我们从原型（`animal`）中获取 `eat`，**并在当前对象的上下文中调用它**。请注意，`.call(this)` 在这里非常重要，因为简单的调用 `this.__proto__.eat()` 将在原型的上下文中执行 `eat`，而非当前对象。

在上面的代码中，它确实按照了期望运行：我们获得了正确的 `alert`。

现在，**让我们在原型链上再添加一个对象。我们将看到这件事是如何被打破的**：

```js
let animal = {
    name: "动物",
    eat() {
        console.log(`${this.name} eats`);
    }
}

let rabbit = {
    __proto__: animal,
    name: "兔子",
    eat() {
        // 这就是 super.eat() 可以大概工作的方式
        this.__proto__.eat.call(this);  // (*)
    }
}

let longEar = {
    __proto__: rabbit,
    name:"耳朵",
    eat() {
        this.__proto__.eat.call(this);  // (**)
    }
}

rabbit.eat();  // 兔子 eats
longEar.eat();  //  RangeError: Maximum call stack size exceeded
```

代码无法再运行了！我们可以看到，在试图调用 `longEar.eat()` 时抛出了错误。

原因可能不那么明显，但是如果我们跟踪 `longEar.eat()` 调用，就可以发现原因。**在 `(*)` 和 `(**)` 这两行中，`this` 的值都是当前对象（`longEar`）**。这是至关重要的一点：**所有的对象方法都将当前对象作为 `this`**，而非原型或其他什么东西。

因此，在 `(*)` 和 `(**)` 这两行中，`this.__proto__` 的值是完全相同的：都是 `rabbit`。**它们俩都调用的是 `rabbit.eat`，它们在不停地循环调用自己**，而不是在原型链上向上寻找方法。

这张图介绍了发生的情况：

![class问题1](E:\pogject\学习笔记\image\js\class问题1.png)

在 `longEar.eat()` 中，`(**)` 这一行调用 `rabbit.eat` 并为其提供 `this=longEar`。

```js
// 在 longEar.eat() 中我们有 this = longEar
this.__proto__.eat.call(this) // (**)

// 变成了
longEar.__proto__.eat.call(this)

// 也就是
rabbit.eat.call(this);
```

之后在 `rabbit.eat` 的 `(*)` 行中，我们希望将函数调用在原型链上向更高层传递，但是 `this=longEar`，所以 `this.__proto__.eat` 又是 `rabbit.eat`！

```js
// 在 rabbit.eat() 中我们依然有 this = longEar
this.__proto__.eat.call(this) // (*)

// 变成了
longEar.__proto__.eat.call(this)

// 或（再一次）
rabbit.eat.call(this);
```

1. ……所以 `rabbit.eat` 在不停地循环调用自己，因此它无法进一步地提升。

这个问题没法仅仅通过使用 `this` 来解决。

----

#### [[HomeObject]]

为了提供解决方法，JavaScript 为函数添加了一个特殊的内部属性：`[[HomeObject]]`。

当一个**函数**被定义为**类**或者**对象**方法时，**它的 `[[HomeObject]]` 属性就成为了该对象**。

然后 `super` 使用它来解析（resolve）父原型及其方法。

让我们看看它是怎么工作的，首先，对于普通对象：

```js
let animal = {
    name: "动物",
    eat() {
        // animal.eat.[[HomeObject]] == animal
        console.log(`${this.name} eats`);
    }
}

let rabbit = {
    __proto__: animal,
    name: "兔子",
    eat() {
        // rabbit.eat.[[HomeObject]] == rabbit
        super.eat();
    }
}

let longEar = {
    __proto__: rabbit,
    name:"耳朵",
    eat() {
        // longEar.eat.[[HomeObject]] == longEar
        super.eat();
    }
}

rabbit.eat();  // 兔子 eats
longEar.eat();  //  耳朵 eats
```

它基于 `[[HomeObject]]` 运行机制按照预期执行。一个方法，例如 `longEar.eat`，知道其 `[[HomeObject]]` 并且从其原型中获取父方法。并没有使用 `this`。

---

#### 方法并不是“自由”的

正如我们之前所知道的，函数通常都是“自由”的，并没有绑定到 JavaScript 中的对象。正因如此，它们可以在对象之间复制，并用另外一个 `this` 调用它。

**`[[HomeObject]]` 的存在违反了这个原则，因为方法记住了它们的对象**。`[[HomeObject]]` 不能被更改，**所以这个绑定是永久的**。

在 JavaScript 语言中 `[[HomeObject]]` **仅被用于 `super`**。

所以，如果一个方法不使用 `super`，那么我们仍然可以视它为自由的并且可在对象之间复制。但是用了 `super` 再这样做可能就会出错。

下面是复制后错误的 `super` 结果的示例：

```js
let animal = {
  sayHi() {
    console.log(`I'm an animal`);
  }
};

// rabbit 继承自 animal
let rabbit = {
  __proto__: animal,
  sayHi() {
    super.sayHi();
  }
};

let plant = {
  sayHi() {
    console.log(`I'm a plant`);
  }
};

// tree 继承自 plant
let tree = {
  __proto__: plant,
  sayHi: rabbit.sayHi // (*)
};

tree.sayHi();  // I'm an animal 
```

调用 `tree.sayHi()` 显示 “I’m an animal”。这绝对是错误的。

原因很简单：

- 在 `(*)` 行，`tree.sayHi` 方法是从 `rabbit` 复制而来。也许我们只是想避免重复代码？
- 它的 `[[HomeObject]]` 是 `rabbit`，**因为它是在 `rabbit` 中创建的。没有办法修改 `[[HomeObject]]`**。
- `tree.sayHi()` 内具有 `super.sayHi()`。它从 `rabbit` 中上溯，然后从 `animal` 中获取方法。

---

#### 方法，不是函数属性

`[[HomeObject]]` 是为类和普通对象中的方法定义的。但是对于对象而言，方法必须确切指定为 `method()`，而不是 `"method: function()"`。

这个差别对我们来说可能不重要，但是对 JavaScript 来说却非常重要。

在下面的例子中，使用非方法（non-method）语法进行了比较。未设置 `[[HomeObject]]` 属性，并且继承无效：

```js
let animal = {
  eat: function() { // 这里是故意这样写的，而不是 eat() {...
    // ...
  }
};

let rabbit = {
  __proto__: animal,
  eat: function() {
    super.eat();
  }
};

rabbit.eat();  // 错误调用 super（因为这里没有 [[HomeObject]]）
```

---

#### 总结

```
   1. 想要扩展一个类：
      - 这意味着 `Child.prototype.__proto__` 将是 `Parent.prototype`，所以方法会被继承。
   
   2. 重写一个 constructor：
      - 在使用 `this` 之前，我们必须在 `Child` 的 constructor 中将父 constructor 调用为 `super()`。
   
   3. 重写一个方法：
      - 我们可以在一个 `Child` 方法中使用 `super.method()` 来调用 `Parent` 方法。
   
   4. 内部：
      - 方法在内部的 `[[HomeObject]]` 属性中记住了它们的类/对象。这就是 `super` 如何解析父方法的。
      - 因此，将一个带有 `super` 的方法从一个对象复制到另一个对象是不安全的。
   
   5. 补充：
   
   - 箭头函数没有自己的 `this` 或 `super`，所以它们能融入到就近的上下文中，像透明似的。
```

   

----

### 构造函数、HomeObject 和 super()

派生类的方法可以通过 super 关键字引用它们的原型。

**这个关键字只能在派生类中使用**，而且**仅限于类构造函数、实例方法和静态方法内部**。

在类构造函数中使用 super 可以调用父类构造函数。

```js
class Vehicle {
    constructor() {
        this.hasEngine = true;
    }
}
class Bus extends Vehicle {
    constructor() {
        // 不要在调用 super()之前引用 this，否则会抛出 ReferenceError
        super(); // 相当于 super.constructor()
        console.log(this instanceof Vehicle); // true
        console.log(this); // Bus { hasEngine: true }
    }
}
new Bus();
```



在静态方法中可以通过 super 调用继承的类上定义的静态方法：

```js
class Vehicle {
    static identify() {
        console.log('vehicle');
    }
}
class Bus extends Vehicle {
    static identify() {
        super.identify();
    }
}
Bus.identify(); // vehicle
```

**注意** ES6 给类构造函数和静态方法添加了**内部特性[[HomeObject]]**，这个**特性是一个指针，指向定义该方法的对**象。

这个指针是自动赋值的，**而且只能在 JavaScript 引擎内部访问**。**super 始终会定义为[[HomeObject]]的原型**。

#### 关于super

在使用 super 时要注意几个问题。

1. super 只能在**派生类构造函数**和**静态方法**中使用。

   ```js
   class Vehicle {
       constructor() {
           super();
           // SyntaxError: 'super' keyword unexpected
       }
   }
   ```

2. 不能单独引用 super 关键字，**要么用它调用构造函数，要么用它引用静态方法。**

   ```js
   class Vehicle {}
   class Bus extends Vehicle {
       constructor() {
       	console.log(super);
       	// SyntaxError: 'super' keyword unexpected here
       }
   }
   ```

3. 调用 super()会调用父类构造函数，**并将返回的实例赋值给 this**。

   ```js
   class Vehicle {}
   class Bus extends Vehicle {
   	constructor() {
   		super();
   		console.log(this instanceof Vehicle);
   	}
   }
   new Bus(); // true
   ```

4. **super()的行为如同调用构造函数**，如果需要给父类构造函数传参，则需要手动传入。

   ```js
   class Vehicle {
       constructor(licensePlate) {
       	this.licensePlate = licensePlate;
       }
   }
   class Bus extends Vehicle {
       constructor(licensePlate) {
       	super(licensePlate);
       }
   }
   console.log(new Bus('1337H4X')); // Bus { licensePlate: '1337H4X' }
   ```

5. 如果**没有定义类构造函数，在实例化派生类时会调用 super(**)，而且会传入所有传给派生类的参数。

   ```js
   class Vehicle {
       constructor(licensePlate) {
       	this.licensePlate = licensePlate;
       }
   }
   class Bus extends Vehicle {}
   console.log(new Bus('1337H4X')); // Bus { licensePlate: '1337H4X' }
   ```

6. 在类构造函数中，**不能在调用 super()之前引用 this。**

   ```js
   class Vehicle {}
   class Bus extends Vehicle {
       constructor() {
       	console.log(this);
       }
   }
   new Bus();
   // ReferenceError: Must call super constructor in derived class
   // before accessing 'this' or returning from derived constructor
   ```

7. 如果在派生类中显式定义了构造函数，**则要么必须在其中调用 super()**，**要么必须在其中返回一个对象**。

   ```js
   class Vehicle {}
   class Car extends Vehicle {}
   class Bus extends Vehicle {
       constructor() {
       	super();
   	}
   }
   class Van extends Vehicle {
   	constructor() {
   		return {};
   	}
   }
   console.log(new Car()); // Car {}
   console.log(new Bus()); // Bus {}
   console.log(new Van()); // {}
   ```

   ---
   
   

### 抽象基类

有时候可能需要定义这样一个类，它可供其他类继承，但本身不会被实例化。虽然 ECMAScript 没有专门支持这种类的语法 ，但**通过 new.target 也很容易实现。new.target 保存通过 new 关键字调用的类或函数。通过在实例化时检测 new.target 是不是抽象基类**，可以阻止对抽象基类的实例化：

```js
class Vehicle {
    constructor(){
        console.log(new.target);
        if (new.target===Vehicle) {
            throw new Error('Vehicle cannot be directly instantiated');
        }
    }
}
class Bus extends Vehicle {
}
new Bus();  //[class Bus extends Vehicle]
new Vehicle();  //Error: Vehicle cannot be directly instantiated

```

另外，通过在抽象基类构造函数中进行检查，**可以要求派生类必须定义某个方法**。因为原型方法在调用类构造函数之前就已经存在了，所以可以通过 this 关键字来检查相应的方法：

```js
class Vehicle {
    constructor(){
        console.log(new.target);
        if (new.target===Vehicle) {
            throw new Error('Vehicle cannot be directly instantiated');
        }
        if (!this.foo) {
            throw new Error('Inheriting class must define foo()');
        }
    }
}

// 派生类
class Bus extends Vehicle {
    foo() {}
}
// 派生类
class Van extends Vehicle {}

new Bus(); // [class Bus extends Vehicle]

new Van(); // Error: Inheriting class must define foo()

```

### 继承内置类型

ES6 类为继承内置引用类型提供了顺畅的机制，**开发者可以方便地扩展内置类型**：

```js
class SuperArray extends Array{
    shuffle(){
        //洗牌算法
        for (let i=this.length-1;i>0;i--){
            const j=Math.floor(Math.random()*(i+1));
            [this[i],this[j]]=[this[j],this[i]];
        }
    }
}

let a=new SuperArray(1,2,3,4,5);

console.log(a instanceof Array);
console.log(a instanceof SuperArray);

console.log(a); // [1, 2, 3, 4, 5]
a.shuffle();
console.log(a); // [3, 2, 5, 4, 1]
```

有些内置类型的方法会返回新实例**。默认情况下，返回实例的类型与原始实例的类型是一致的**：

```js
class SuperArray extends Array {}

let a1 = new SuperArray(1, 2, 3, 4, 5);
let a2 = a1.filter(x => !!(x%2))

console.log(a1); // [1, 2, 3, 4, 5]
console.log(a2); // [1, 3, 5]

console.log(a1 instanceof SuperArray); // true
console.log(a2 instanceof SuperArray); // true
```

**如果想覆盖这个默认行为，则可以覆盖 Symbol.species 访问器，这个访问器决定在创建返回的实例时使用的类**：

```js
class SuperArray extends Array {
    static get [Symbol.species]() {
    	return Array;
    }
}
let a1 = new SuperArray(1, 2, 3, 4, 5);
let a2 = a1.filter(x => !!(x%2))

console.log(a1); // [1, 2, 3, 4, 5]
console.log(a2); // [1, 3, 5]
console.log(a1 instanceof SuperArray); // true
console.log(a2 instanceof SuperArray); // false
```

---

#### 扩展内建类

内建的类，例如 `Array`，`Map` 等也都是可以扩展的（extendable）。

例如，这里有一个继承自原生 `Array` 的类 `PowerArray`：

```js
// 给 PowerArray 新增了一个方法（可以增加更多）
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(2, 3, 5, 7, 10);

console.log(arr.isEmpty());  // false

let arr2 = arr.filter(item => item >=10);
console.log(arr2);  // PowerArray(1) [ 10 ]
console.log(arr2.isEmpty());  // false
```

请注意一个非常有趣的事儿。内建的方法例如 `filter`，`map` 等 — 返回的正是子类 `PowerArray` 的新对象。它们内部使用了对象的 `constructor` 属性来实现这一功能。

在上面的例子中，

```js
console.log(arr.constructor === PowerArray);  // true
```

当 `arr.filter()` 被调用时，**它的内部使用的是 `arr.constructor` 来创建新的结果数组**，而不是使用原生的 `Array`。这真的很酷，**因为我们可以在结果数组上继续使用 `PowerArray` 的方法。**

甚至，我们可以定制这种行为。

我们可以给这个类添加一个特殊的静态 getter `Symbol.species`。如果存在，则应返回 JavaScript 在内部用来在 `map` 和 `filter` 等方法中创建新实体的 `constructor`。

如果我们希望像 `map` 或 `filter` 这样的内建方法返回常规数组，我们可以在 `Symbol.species` 中返回 `Array`，就像这样：

```js
// 给 PowerArray 新增了一个方法（可以增加更多）
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  // 内建方法将使用这个作为 constructor
  static get [Symbol.species]() {
    return Array;
  }
}

let arr = new PowerArray(2, 3, 5, 7, 10, 66);

console.log(arr.isEmpty());  // false

// filter 使用 arr.constructor[Symbol.species] 作为 constructor 创建新数组
let arr2 = arr.filter(item => item >=10);
console.log(arr2);  // [ 10, 66 ]

console.log(arr2.isEmpty());  // TypeError: arr2.isEmpty is not a function

console.log(arr.constructor === PowerArray);  // true
console.log(arr.constructor === Array);  // false


console.log(arr2.constructor === PowerArray);  // false
console.log(arr2.constructor === Array);  // true

```

正如你所看到的，现在 `.filter` 返回 `Array`。所以扩展的功能不再传递。

**其他集合的工作方式类似**

其他集合，例如 `Map` 和 `Set` 的工作方式类似。它们也使用 `Symbol.species`。



#### 内建类没有静态方法继承

内建对象有它们自己的静态方法，例如 `Object.keys`，`Array.isArray` 等。

如我们所知道的，**原生的类互相扩展**。例如，`Array` 扩展自 `Object`。

通常，当一个类扩展另一个类时，静态方法和非静态方法都会被继承。这已经在 [静态属性和静态方法](https://zh.javascript.info/static-properties-methods#statics-and-inheritance) 中详细地解释过了。

**但内建类却是一个例外。它们相互间不继承静态方法。**

例如，`Array` 和 `Date` 都继承自 `Object`，所以它们的实例都有来自 `Object.prototype` 的方法。但 `Array.[[Prototype]]` 并不指向 `Object`，所以它们没有例如 `Array.keys()`（或 `Date.keys()`）这些静态方法。

这里有一张 `Date` 和 `Object` 的结构关系图：

![class问题3](E:\pogject\学习笔记\image\js\class问题3.png)



正如你所看到的，`Date` 和 `Object` 之间没有连结。它们是独立的，**只有 `Date.prototype` 继承自 `Object.prototype`，仅此而已。**

与我们所了解的通过 `extends` 获得的继承相比，**这是内建对象之间继承的一个重要区别**。





----

### 类混入

把不同类的行为集中到一个类是一种常见的 JavaScript 模式。虽然 ES6 没有显式支持多类继承，但 通过现有特性可以轻松地模拟这种行为。

**注意** Object.assign()方法是为了混入对象行为而设计的。只有在需要混入类的行为 时才有必要自己实现混入表达式。**如果只是需要混入多个对象的属性，那么使用 Object.assign()就可以了**。 

在下面的代码片段中，extends 关键字后面是一个 JavaScript 表达式。**任何可以解析为一个类或一 个构造函数的表达式都是有效的**。这个表达式会在求值类定义时被求值：

```js
class Vehicle {}

function getParentClass() {
	console.log('evaluated expression');
	return Vehicle;
}

class Bus extends getParentClass() {}
// 可求值的表达式
```

混入模式可以通过在一个表达式中连缀多个混入元素来实现，这个表达式最终会解析为一个可以被继承的类。如果 Person 类需要组合 A、B、C，则需要某种机制实现 B 继承 A，C 继承 B，而 Person再继承 C，从而把 A、B、C 组合到这个超类中。实现这种模式有不同的策略。

一个策略是**定义一组“可嵌套”的函数**，每个函数分别接收一个超类作为参数，而将混入类定义为这个参数的子类，并返回这个类。这些组合函数可以连缀调用，最终组合成超类表达式：

```js
class Vehicle {}

let FooMixin = (Superclass) => class extends Superclass{
    foo(){
        console.log("foo");
    }
}
let BarMixin = (Superclass) => class extends Superclass {
    bar() {
        console.log('bar');
    }
};
let BazMixin = (Superclass) => class extends Superclass {
    baz() {
        console.log('baz');
    }
};

class Bus extends FooMixin(BarMixin(BazMixin(Vehicle))){}

let b = new Bus();
b.foo(); // foo
b.bar(); // bar
b.baz(); // baz
```

通过写一个辅助函数，可以把嵌套调用展开：

```js
class Vehicle{}

let FooMixin=(Superclass)=>class extends Superclass{
    foo(){
        console.log("foo");
    }
}
let BarMixin = (Superclass) => class extends Superclass {
    bar() {
        console.log('bar');
    }
};
let BazMixin = (Superclass) => class extends Superclass {
    baz() {
        console.log('baz');
    }
};

function mix(BaseClass, ...Mixins){
    return Mixins.reduce((accumulator, current)=>current(accumulator), BaseClass);
}

class Bus extends mix(Vehicle,FooMixin,BarMixin,BazMixin){}

let b = new Bus();
b.foo(); // foo
b.bar(); // bar
b.baz(); // baz
```

**注意** 很多 JavaScript 框架（特别是 React）已经抛弃混入模式，**转向了组合模式**（把方法 提取到独立的类和辅助对象中，然后把它们组合起来，但不使用继承）。这反映了那个众 所周知的软件设计原则：“**组合胜过继承**（composition over inheritance）。”这个设计原则被 很多人遵循，在代码设计中能提供极大的灵活性。









---

# 类检查："instanceof"

`instanceof` 操作符用于检查一个对象是否属于某个特定的 class。同时，它还考虑了继承。

在许多情况下，可能都需要进行此类检查。例如，它可以被用来构建一个 **多态性（polymorphic）** 的函数，该函数根据参数的类型对参数进行不同的处理。

## instanceof 操作符

```js
obj instanceof Class
```

**如果 `obj` 隶属于 `Class` 类（或 `Class` 类的衍生类）**，则返回 `true`。

```js
class Rabbit {}
let rabbit = new Rabbit();

// rabbit 是 Rabbit class 的对象吗？
console.log( rabbit instanceof Rabbit ); // true
```

它还可以与构造函数一起使用：

```js
// 这里是构造函数，而不是 class
function Rabbit() {}

let rabbit = new Rabbit();
// rabbit 是 Rabbit class 的对象吗？
console.log(rabbit instanceof Rabbit ); // true
```

……与诸如 `Array` 之类的内建 class 一起使用：

```js
let arr = [1, 2, 3];
console.log( arr instanceof Array ); // true
console.log( arr instanceof Object ); // true
```

有一点需要留意，`arr` 同时还隶属于 `Object` 类。因为从原型上来讲，`Array` 是继承自 `Object` 的。

通常，`instanceof` 在检查中会将原型链考虑在内。此外，**我们还可以在静态方法 `Symbol.hasInstance` 中设置自定义逻辑**。

`obj instanceof Class` 算法的执行过程大致如下：

1. 如果这儿有静态方法 `Symbol.hasInstance`，那就直接调用这个方法：

   例如：

   **`Symbol.hasInstance`**用于判断某对象是否为某构造器的实例。因此你可以用它自定义 [`instanceof`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) 操作符在某个类上的行为。

```js
// 设置 instanceOf 检查
// 并假设具有 canEat 属性的都是 animal

class Animal {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) {
      return true;
    }
  }
}

let obj = { canEat: true};
console.log(obj instanceof Animal);  //  true

let animal = new Animal();
console.log(animal instanceof Animal);  //  false
```

2.大多数 class 没有 `Symbol.hasInstance`。**在这种情况下，标准的逻辑是**：使用 `obj instanceOf Class` 检查 `Class.prototype` 是否等于 `obj` 的原型链中的原型之一。

换句话说就是，一个接一个地比较：

```js
obj.__proto__ === Class.prototype ?
obj.__proto__.__proto__ === Class.prototype ?
obj.__proto__.__proto__.__proto__ === Class.prototype ?
...
// 如果任意一个的答案为 true，则返回 true
// 否则，如果我们已经检查到了原型链的尾端，则返回 false
```

在上面那个例子中，`rabbit.__proto__ === Rabbit.prototype`，所以立即就给出了结果。

而在继承的例子中，匹配将在第二步进行：

```js
class Animal {}
class Rabbit extends Animal {}

let rabbit = new Rabbit();
console.log(rabbit instanceof Animal); // true

console.log(rabbit.__proto__ === Animal.prototype);  // false（无匹配）
console.log(rabbit.__proto__.__proto__ === Animal.prototype);  // true（匹配！）

```

下图展示了 `rabbit instanceof Animal` 的执行过程中，`Animal.prototype` 是如何参与比较的：

![class问题4](E:\pogject\学习笔记\image\js\class问题4.png)

这里还要提到一个方法 [objA.isPrototypeOf(objB)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/object/isPrototypeOf)，如果 `objA` 处在 `objB` 的原型链中，则返回 `true`。

所以，**可以将 `obj instanceof Class` 检查改为 `Class.prototype.isPrototypeOf(obj)`。**

这很有趣，但是 `Class` 的 constructor 自身是不参与检查的！检查过程只和原型链以及 `Class.prototype` 有关。

创建对象后，如果更改 `prototype` 属性，可能会导致有趣的结果。

就像这样：

```js
function Rabbit() {}
let rabbit = new Rabbit();

// 修改了 prototype
Rabbit.prototype = {};

// ...再也不是 rabbit 了！
console.log( rabbit instanceof Rabbit ); // false
console.log( rabbit instanceof Object ); // true


console.log(rabbit.__proto__ === Rabbit.prototype);  //false
console.log(rabbit.__proto__.__proto__ === Object.prototype)  //true
```



## 使用 Object.prototype.toString 方法来揭示类型

大家都知道，一个普通对象被转化为字符串时为 `[object Object]`：

```js
let obj = {a: 1};
console.log(obj); // { a: 1 }
console.log(obj.toString()); // [object Object]

let arr = [1, 2, 3];
console.log(arr);  //  [ 1, 2, 3 ]
console.log(arr.toString());  // 1,2,3
```

这是通过 `toString` 方法实现的。但是这儿有一个隐藏的功能，该功能可以使 `toString` 实际上比这更强大。**我们可以将其作为 `typeof` 的增强版或者 `instanceof` 的替代方法来使用。**

听起来挺不可思议？那是自然，精彩马上揭晓。

按照 [规范](https://tc39.github.io/ecma262/#sec-object.prototype.tostring) 所讲，内建的 `toString` 方法可以被从对象中提取出来，并在任何其他值的上下文中执行。其结果取决于该值。

- 对于 number 类型，结果是 `[object Number]`
- 对于 boolean 类型，结果是 `[object Boolean]`
- 对于 `null`：`[object Null]`
- 对于 `undefined`：`[object Undefined]`
- 对于数组：`[object Array]`
- ……等（可自定义）

让我们演示一下：

```js
// 方便起见，将 toString 方法复制到一个变量中
let objectToString = Object.prototype.toString;

let a = 66;
console.log(objectToString.call(a));  //  [object Number]

let str = "abc";
console.log(objectToString.call(str));  //  [object String]

let b = false;
console.log(objectToString.call(b));  //  [object Boolean]

let n = null;
console.log(objectToString.call(n));  //  [object Null]

let u = undefined;
console.log(objectToString.call(u));  //  [object Undefined]

let arr = [1, 2, 3];
console.log(objectToString.call(arr)); // [object Array]

let obj = {a: 1};
console.log(objectToString.call(obj)); // [object Object]

let s = Symbol("b");
console.log(objectToString.call(s)); // [object Symbol]

let m = BigInt(100);
console.log(objectToString.call(m));  //  [object BigInt]

let reg = /abc/;
console.log(objectToString.call(reg));  //  [object RegExp]

let now = new Date();
console.log(objectToString.call(now));  //  [object Date]

let fn = function() {
  return 200;
}
console.log(objectToString.call(fn));  //  [object Function]

class Person {}
console.log(objectToString.call(Person));  //  [object Function]
```

这里我们用到了在 [装饰器模式和转发，call/apply](https://zh.javascript.info/call-apply-decorators) 一章中讲过的 [call](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/function/call) 方法来在上下文 `this=arr` 中执行函数 `objectToString`。

在内部，**`toString` 的算法会检查 `this`，并返回相应的结果**。



## Symbol.toStringTag

可以使用特殊的对象属性 Symbol.toStringTag 自定义对象的 toString 方法的行为。

例如：

```js
let user = {
  [Symbol.toStringTag]: "User"
};

console.log( {}.toString.call(user) ); // [object User]
```

对于大多数特定于环境的对象，都有一个这样的属性。下面是一些特定于浏览器的示例：

```js
// 特定于环境的对象和类的 toStringTag：
console.log( window[Symbol.toStringTag]); // Window

console.log( XMLHttpRequest.prototype[Symbol.toStringTag] ); // XMLHttpRequest

console.log( {}.toString.call(window) ); // [object Window]

console.log( {}.toString.call(new XMLHttpRequest()) ); // [object XMLHttpRequest]
```

正如我们所看到的，输出结果恰好是 `Symbol.toStringTag`（如果存在），只不过被包裹进了 `[object ...]` 里。

这样一来，我们手头上就有了个“磕了药似的 typeof”，不仅能检查原始数据类型，而且适用于内建对象，更可贵的是还支持自定义。

所以，如果我们想要获取内建对象的类型，并希望把该信息以字符串的形式返回，**而不只是检查类型的话，我们可以用 `{}.toString.call` 替代 `instanceof`。**



让我们总结一下我们知道的类型检查方法：

|               | 用于                                                         | 返回值     |
| :------------ | :----------------------------------------------------------- | :--------- |
| `typeof`      | 原始数据类型                                                 | string     |
| `{}.toString` | 原始数据类型，内建对象，包含 `Symbol.toStringTag` 属性的对象 | string     |
| `instanceof`  | 对象                                                         | true/false |

正如我们所看到的，从技术上讲，`{}.toString` 是一种“更高级的” `typeof`。

当我们使用类的层次结构（hierarchy），并想要对该类进行检查，同时还要考虑继承时，这种场景下 `instanceof` 操作符确实很出色。



在下面的代码中，为什么 `instanceof` 会返回 `true`？我们可以明显看到，`a` 并不是通过 `B()` 创建的。

```js
function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log( a instanceof B ); // true
```

是的，看起来确实很奇怪。

`instanceof` 并不关心函数，而是关心函数的与原型链匹配的 `prototype`。

并且，这里 `a.__proto__ == B.prototype`，所以 `instanceof` 返回 `true`。

总之，**根据 `instanceof` 的逻辑，真正决定类型的是 `prototype`**，而不是构造函数。

