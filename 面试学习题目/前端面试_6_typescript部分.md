----

##  TypeScript 和 JavaScript 的区别是什么？

`TypeScript` 是 `JavaScript` 的类型的超集，支持`ES6`语法，支持面向对象编程的概念，如类、接口、继承、泛型等

> 超集，不得不说另外一个概念，子集，怎么理解这两个呢，举个例子，如果一个集合A里面的的所有元素集合B里面都存在，那么我们可以理解集合B是集合A的超集，集合A为集合B的子集



![img](https://static.vue-js.com/61c2c1f0-0950-11ec-a752-75723a64e8f5.png)



其是一种静态类型检查的语言，提供了类型注解，在代码编译阶段就可以检查出数据类型的错误

同时扩展了` JavaScript` 的语法，所以任何现有的` JavaScript` 程序可以不加改变的在 `TypeScript` 下工作

为了保证兼容性，`typescript`在编译阶段需要编译器编译成纯`Javascript`来运行，是为大型应用之开发而设计的语言

- TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法
- TypeScript 可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译
- TypeScript 文件的后缀名 .ts （.ts，.tsx，.dts），JavaScript 文件是 .js
- 在编写 TypeScript 的文件的时候就会自动编译成 js 文件



----

## 为什么推荐使用 TypeScript ？

TypeScript是微软公司开发和维护的一种面向对象的编程语言。它是JavaScript的超集，包含其所有元素。

强类型和弱类型、静态类型和动态类型是两组不同的概念。

**类型强弱**是针对类型转换是否显示来区分，**静态和动态类型**是针对类型检查的时机来区分。

**TS对JS的改进主要是静态类型检查**，静态类型检查有何意义？**标准答案是“静态类型更有利于构建大型应用”。**

推荐使用TypeScript的原因有：

- TypeScript简化了JavaScript代码，使其更易于阅读和调试。
- TypeScript是开源的。
- TypeScript为JavaScript ide和实践（如静态检查）提供了高效的开发工具。
- TypeScript使代码更易于阅读和理解。
- 使用TypeScript，我们可以大大改进普通的JavaScript。
- TypeScript为我们提供了ES6（ECMAScript 6）的所有优点，以及更高的生产率。
- TypeScript通过对代码进行类型检查，可以帮助我们避免在编写JavaScript时经常遇到的令人痛苦的错误。
- 强大的类型系统，包括泛型。
- TypeScript只不过是带有一些附加功能的JavaScript。
- TypeScript代码可以按照ES5和ES6标准编译，以支持最新的浏览器。
- 与ECMAScript对齐以实现兼容性。
- 以JavaScript开始和结束。
- 支持静态类型。
- TypeScript将节省开发人员的时间。
- TypeScript是ES3、ES5和ES6的超集。



----

## TypeScript 的主要特点是什么？

- 跨平台：TypeScript 编译器可以安装在任何操作系统上，包括 Windows、macOS 和 Linux。
- ES6 特性：TypeScript 包含计划中的 ECMAScript 2015 (ES6) 的大部分特性，例如箭头函数。
- 面向对象的语言：TypeScript 提供所有标准的 OOP 功能，如类、接口和模块。
- 静态类型检查：TypeScript 使用静态类型并帮助在编译时进行类型检查。因此，你可以在编写代码时发现编译时错误，而无需运行脚本。
- 可选的静态类型：如果你习惯了 JavaScript 的动态类型，TypeScript 还允许可选的静态类型。
- DOM 操作：您可以使用 TypeScript 来操作 DOM 以添加或删除客户端网页元素。



`typescript`的特性主要有如下：

- **类型批注和编译时类型检查** ：在编译时批注变量类型
- **类型推断**：ts中没有批注变量类型会自动推断变量的类型
- **类型擦除**：在编译过程中批注的内容和接口会在运行时利用工具擦除
- **接口**：ts中用接口来定义对象类型
- **枚举**：用于取值被限定在一定范围内的场景
- **Mixin**：可以接受任意类型的值
- **泛型编程**：写代码时使用一些以后才指定的类型
- **名字空间**：名字只在该区域内有效，其他区域可重复使用该名字而不冲突
- **元组**：元组合并了不同类型的对象，相当于一个可以装不同类型数据的数组
- ...





---

## TypeScript 的内置数据类型有哪些？

`typescript` 的数据类型主要有如下：

- boolean（布尔类型）
- number（数字类型）
- string（字符串类型）
- array（数组类型）
- tuple（元组类型）
- enum（枚举类型）
- any（任意类型）
- null 和 undefined 类型
- void 类型
- never 类型
- object 对象类型

boolean

布尔类型

```javascript
let flag:boolean = true;
// flag = 123; // 错误
flag = false;  //正确
```



number

数字类型，和`javascript`一样，`typescript`的数值类型都是浮点数，可支持二进制、八进制、十进制和十六进制

```javascript
let num:number = 123;
// num = '456'; // 错误
num = 456;  //正确
```

进制表示：

```javascript
let decLiteral: number = 6; // 十进制
let hexLiteral: number = 0xf00d; // 十六进制
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744; // 八进制
```



string

字符串类型，和`JavaScript`一样，可以使用双引号（`"`）或单引号（`'`）表示字符串

```javascript
let str:string = 'this is ts';
str = 'test';
```

作为超集，当然也可以使用模版字符串``进行包裹，通过 ${} 嵌入变量

```javascript
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }
```



array

数组类型，跟`javascript`一致，通过`[]`进行包裹，有两种写法：

方式一：元素类型后面接上 `[]`

```javascript
 let arr:string[] = ['12', '23'];
 arr = ['45', '56'];
```

方式二：使用数组泛型，`Array<元素类型>`：

```javascript
let arr:Array<number> = [1, 2];
arr = ['45', '56'];
```



tuple

元祖类型，允许表示一个已知元素数量和类型的数组，各元素的类型不必相同

```javascript
let tupleArr:[number, string, boolean]; 
tupleArr = [12, '34', true]; //ok
typleArr = [12, '34'] // no ok
```

赋值的类型、位置、个数需要和定义（声明）的类型、位置、个数一致



enum

`enum`类型是对[JavaScript](https://cloud.tencent.com/product/sms?from=10680)标准数据类型的一个补充，使用枚举类型可以为一组数值赋予友好的名字

```javascript
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```



any

可以指定任何类型的值，在编程阶段还不清楚类型的变量指定一个类型，不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查，这时候可以使用`any`类型

使用`any`类型允许被赋值为任意类型，甚至可以调用其属性、方法

```javascript
let num:any = 123;
num = 'str';
num = true;
```

定义存储各种类型数据的数组时，示例代码如下：

```javascript
let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100;
```



null 和 和 undefined

在`JavaScript` 中 `null`表示 "什么都没有"，是一个只有一个值的特殊类型，表示一个空对象引用，而`undefined`表示一个没有设置值的变量

默认情况下`null`和`undefined`是所有类型的子类型， 就是说你可以把 `null`和 `undefined`赋值给 `number`类型的变量

```javascript
let num:number | undefined; // 数值类型 或者 undefined
console.log(num); // 正确
num = 123;
console.log(num); // 正确
```

但是`ts`配置了`--strictNullChecks`标记，`null`和`undefined`只能赋值给`void`和它们各自



void

用于标识方法返回值的类型，表示该方法没有返回值。

```javascript
function hello(): void {
    alert("Hello ts");
}
```



never

`never`是其他类型 （包括`null`和 `undefined`）的子类型，可以赋值给任何类型，代表从不会出现的值

**但是没有类型是 never 的子类型，这意味着声明 `never` 的变量只能被 `never` 类型所赋值。**

`never` 类型**一般用来指定那些总是会抛出异常、无限循环**

```javascript
let a:never;
a = 123; // 错误的写法

a = (() => { // 正确的写法
  throw new Error('错误');
})()

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
```



object

对象类型，非原始类型，常见的形式通过`{}`进行包裹

```javascript
let obj:object;
obj = {name: 'Wang', age: 25};
```



----

##  TypeScript中的类型有哪些？

类型系统表示语言支持的不同类型的值。它在程序存储或操作所提供的值之前检查其有效性。

它可以分为两种类型，

- 内置：包括数字(number)，字符串(string)，布尔值(boolean)，无效(void)，空值(null)和未定义(undefined)。
- 用户定义的：它包括枚举(enums)，类(classes)，接口(interfaces)，数组(arrays)和元组(tuple)。





---

## TypeScript中的变量以及如何声明？

变量是内存中用于存储值的命名空间。

在 TypeScript 中声明变量的类型语法在变量名称后包括一个冒号（:)，后跟其类型。 与 JavaScript 相似，我们使用var关键字声明变量。

在Typescript中声明变量时，必须遵循某些规则：

- 变量名称必须是字母或数字。
- 不能以数字开头名称。
- 除下划线（ _ ）和美元（ $ ）符号外，它不能包含空格和特殊字符。



----

## TypeScript中有哪些声明变量的方式？

声明变量有四种方法：

```typescript
// 声明类型和值，Declaring type and value in a single statement
var [identifier] : [type-annotation] = value; 

// 只声明类型，Declaring type without value
var [identifier] : [type-annotation]; 

// 只声明值，Declaring its value without type
var [identifier] = value; 

// 声明变量无类型和值，Declaring without value and type
var [identifier]; 
```



----

##  Typescript中never 和 void 的区别？

- void 表示没有任何类型（可以被赋值为 null 和 undefined）。
- **never 表示一个不包含值的类型，即表示永远不存在的值**。
- 拥有 void 返回值类型的函数能正常运行。拥有 never 返回值类型的函数无法正常返回，无法终止，或会抛出异常。





----

## TypeScript 中的模块是什么？

TypeScript 中的模块是相关变量、函数、类和接口的集合。 你可以将模块视为包含执行任务所需的一切的容器。可以导入模块以轻松地在项目之间共享代码。

```js
module module_name{
  class xyz{
    export sum(x, y){
      return x+y;
    }
  }
}
```



----

## TypeScript 中的类型断言是什么？

TypeScript 中的类型断言的工作方式类似于其他语言中的类型转换，但没有 C# 和 Java 等语言中可能的类型检查或数据重组。类型断言对运行时没有影响，仅由编译器使用。

类型断言本质上是类型转换的软版本，它建议编译器将变量视为某种类型，但如果它处于不同的形式，则不会强制它进入该模型。



----

## 如何使用 TypeScript mixin。

Mixin 本质上是在相反方向上工作的继承。Mixins 允许你通过组合以前类中更简单的部分类设置来构建新类。

相反，类A继承类B来获得它的功能，类B从类A需要返回一个新类的附加功能。



---

##  Typescript中什么是装饰器，它们可以应用于什么？

装饰器是一种特殊的声明，它允许你通过使用@<name>注释标记来一次性修改类或类成员。每个装饰器都必须引用一个将在运行时评估的函数。

例如，装饰器@sealed将对应于sealed函数。任何标有 的@sealed都将用于评估sealed函数。

```js
function sealed(target) {
  // do something with 'target' ...
}
```

它们可以附加到：

- 类声明
- 方法
- 配件
- 特性
- 参数

注意：**默认情况下不启用装饰器**。要启用它们，你必须`experimentalDecorators从tsconfig.json`文件或命令行编辑编译器选项中的字段。



---

## TypeScript 中的 getter/setter 是什么？你如何使用它们？

Getter 和 setter 是特殊类型的方法，可帮助你根据程序的需要委派对私有变量的不同级别的访问。

Getters 允许你引用一个值但不能编辑它。Setter 允许你更改变量的值，但不能查看其当前值。这些对于实现封装是必不可少的。

例如，新雇主可能能够了解get公司的员工人数，但无权set了解员工人数。

```typescript
const fullNameMaxLength = 10;
class Employee {
  private _fullName: string = "";
  get fullName(): string {
    return this._fullName;
  }
  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error("fullName has a max length of " + fullNameMaxLength);
    }
    this._fullName = newName;
  }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  console.log(employee.fullName);
}
```



---

##  TypeScript 中的类是什么？你如何定义它们？特性?

类表示一组相关对象的共享行为和属性。

- 类（Class）：定义了一件事物的抽象特点，包含它的属性和方法
- 对象（Object）：类的实例，通过 `new` 生成
- 面向对象（OOP）的三大特性：封装、继承、多态
- 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
- 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
- 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 `Cat` 和 `Dog` 都继承自 `Animal`，但是分别实现了自己的 `eat` 方法。此时针对某一个实例，我们无需了解它是 `Cat` 还是 `Dog`，就可以直接调用 `eat` 方法，程序会自动判断出来应该如何执行 `eat`
- 存取器（getter & setter）：用以改变属性的读取和赋值行为
- 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 `public` 表示公有属性或方法
- 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
- 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口

你使用关键字声明类class：

```typescript
class Student {    
    studCode: number;    
    studName: string;    
    constructor(code: number, name: string) {    
    	this.studName = name;    
    	this.studCode = code; 
    }
 }
```



TypeScript 编译器将 TypeScript 中的类编译为普通的 JavaScript 函数，以跨平台和浏览器工作。

一个类包括以下内容：

- 构造器（Constructor）
- 属性（Properties）
- 方法（Methods）

```typescript
class Employee {
    empID: number;
    empName: string;
 
    constructor(ID: number, name: string) {
        this.empName = name;
        this.empID = ID;
    }
 
    getSalary(): number {
        return 40000;
    }
}
```

类的其他特性有：

- 继承（Inheritance）
- 封装（Encapsulation）
- 多态（Polymorphism）
- 抽象（Abstraction）



---

## Typescript中泛型是什么？

TypeScript Generics是提供创建可重用组件的方法的工具。 它能够创建可以使用多种数据类型而不是单一数据类型的组件。 而且，它在不影响性能或生产率的情况下提供了类型安全性。 泛型允许我们创建泛型类，泛型函数，泛型方法和泛型接口。

在泛型中，类型参数写在左括号（<）和右括号（>）之间，这使它成为强类型集合。 它使用一种特殊的类型变量<T>来表示类型。

```js
function identity<T>(arg: T): T {
    return arg;
}
let output1 = identity<string>("edureka");
let output2 = identity<number>( 117 );
console.log(output1);
console.log(output2);
```



----

##  Typescript中 interface 和 type 的差别是什么？

### 相同点

- 都可以描述一个对象或者函数

**interface**

```typescript
interface User {
  name: string
  age: number
}

interface SetUser {
  (name: string, age: number): void;
}
```

**type**

```typescript
type User = {
  name: string
  age: number
};

type SetUser = (name: string, age: number)=> void;
```

- 都允许拓展（extends）

interface 和 type 都可以拓展，并且两者并不是相互独立的，也就是说 interface 可以 extends type, type 也可以 extends interface 。 虽然效果差不多，但是两者语法不同。

**interface extends interface**

```typescript
interface Name { 
  name: string; 
}
interface User extends Name { 
  age: number; 
}
```

**type extends type**

```typescript
type Name = { 
  name: string; 
}
type User = Name & { age: number  };
```

**interface extends type**

```typescript
type Name = { 
  name: string; 
}
interface User extends Name { 
  age: number; 
}
```

**type extends interface**

```typescript
interface Name { 
  name: string; 
}
type User = Name & { 
  age: number; 
}
```

### 不同点

- type 可以而 interface 不行

**type 可以声明基本类型别名，联合类型，元组等类型**

```typescript
// 基本类型别名
type Name = string

// 联合类型
interface Dog {
    wong();
}
interface Cat {
    miao();
}

type Pet = Dog | Cat

// 具体定义数组每个位置的类型
type PetList = [Dog, Pet]
```

**type 语句中还可以使用 typeof 获取实例的 类型进行赋值**

```typescript
// 当你想获取一个变量的类型时，使用 typeof
let div = document.createElement('div');
type B = typeof div
```

**其他骚操作**

```typescript
type StringOrNumber = string | number;  
type Text = string | { text: string };  
type NameLookup = Dictionary<string, Person>;  
type Callback<T> = (data: T) => void;  
type Pair<T> = [T, T];  
type Coordinates = Pair<number>;  
type Tree<T> = T | { left: Tree<T>, right: Tree<T> };
```

- interface 可以而 type 不行

**interface 能够声明合并**

```typescript
interface User {
  name: string
  age: number
}

interface User {
  sex: string
}

/*
User 接口为 {
  name: string
  age: number
  sex: string 
}
*/
```

一般来说，如果不清楚什么时候用interface/type，**能用 interface 实现，就用 interface** , 如果不能就用 type 。



----

##  Typescript中什么是类类型接口？

- 如果接口用于一个类的话，那么接口会表示“行为的抽象”
- 对类的约束，让类去实现接口，类可以实现多个接口
- 接口只能约束类的公有成员（实例属性/方法），无法约束私有成员、构造函数、静态属性/方法



----

## 什么是TypeScript Declare关键字?

我们知道所有的JavaScript库/框架都没有TypeScript声明文件，但是我们希望在TypeScript文件中使用它们时不会出现编译错误。为此，我们使用declare关键字。在我们希望定义可能存在于其他地方的变量的环境声明和方法中，可以使用declare关键字。

declare关键字用于环境声明和您要定义可能在其他位置存在的变量的方法。



例如，假设我们有一个名为myLibrary的库，它没有TypeScript声明文件，在全局命名空间中有一个名为myLibrary的命名空间。如果我们想在TypeScript代码中使用这个库，我们可以使用以下代码:

```typescript
declare var myLibrary;  
```

TypeScript运行时将把myLibrary变量赋值为any任意类型。这是一个问题，我们不会得到智能感知在设计时，但我们将能够使用库在我们的代码。



---

## 什么是方法重载(重写)？

如果子类或子类具有与父类中声明的方法相同的方法，则称为方法重写。 基本上，它在派生类或子类中重新定义了基类方法。

方法覆盖规则：

- 该方法必须与父类中的名称相同。
- 它必须具有与父类相同的参数。
- 必须存在IS-A关系或继承。

```typescript
class NewPrinter extends Printer {  
    doPrint(): any {  
        super.doPrint();  
        console.log("Called Child class.");  
    }  
    doInkJetPrint(): any {  
        console.log("Called doInkJetPrint().");  
    }  
}  
let printer: new () => NewPrinter;  
printer.doPrint();  
printer.doInkJetPrint();  
```



----

## 如何在TypeScript中实现继承？

继承是一种从另一个类获取一个类的属性和行为的机制。它是OOPs语言的一个重要方面，并且具有从现有类创建新类的能力，继承成员的类称为基类，继承这些成员的类称为派生类。

继承可以通过使用extend关键字来实现。我们可以通过下面的例子来理解它。

```typescript
class Shape {     
   Area:number     
   constructor(area:number) {     
      this.Area = area    
   }     
}     
class Circle extends Shape {     
   display():void {     
      console.log("圆的面积: "+this.Area)     
   }     
}    
var obj = new Circle(320);     
obj.display()  
```



----

## 如何检查TypeScript中的null和undefined ？

通过使用一个缓冲检查，我们可以检查空和未定义:

```typescript
if (x == null) {  
}  
```

如果我们使用严格的检查，它将总是对设置为null的值为真，而对未定义的变量不为真。

例子

```typescript
var a: number;  
var b: number = null;  
function check(x, name) {  
    if (x == null) {  
        console.log(name + ' == null');  
    }  
    if (x === null) {  
        console.log(name + ' === null');  
    }  
    if (typeof x === 'undefined') {  
        console.log(name + ' is undefined');  
    }  
}  
check(a, 'a');  
check(b, 'b');  
```

输出

```
"a == null"  
"a is undefined"  
"b == null"  
"b === null"  
```



----

## 什么是TypeScript映射文件？

- TypeScript Map文件是一个源映射文件，其中包含有关我们原始文件的信息。
- .map文件是源映射文件，可让工具在发出的JavaScript代码和创建它的TypeScript源文件之间进行映射。
- 许多调试器可以使用这些文件，因此我们可以调试TypeScript文件而不是JavaScript文件。



----

##  解释一下TypeScript中的枚举。

枚举是TypeScipt数据类型，它允许我们定义一组命名常量。 使用枚举使记录意图或创建一组不同的案例变得更加容易。 它是相关值的集合，可以是数字值或字符串值。

```typescript
enum Gender {
    Male,
    Female
    Other
}
console.log(Gender.Male); // Output: 0

//We can also access an enum value by it's number value.
console.log(Gender[1]); // Output: Female
```



----

##  TypeScript支持的访问修饰符有哪些？

TypeScript支持访问修饰符 public，private 和 protected，它们决定了类成员的可访问性。

- 公共（Public），类的所有成员，其子类以及该类的实例都可以访问。
- 受保护（Projected），该类及其子类的所有成员都可以访问它们。 但是该类的实例无法访问。
- 私有（Private），只有类的成员可以访问它们。

如果未指定访问修饰符，则它是隐式公共的，因为它符合 JavaScript 的便利性。



----

## tsconfig.json文件有什么用？

tsconfig.json文件是JSON格式的文件。

在tsconfig.json文件中，可以指定不同的选项来告诉编译器如何编译当前项目。

目录中包含tsconfig.json文件，表明该目录是TypeScript项目的根目录。



----

## 使用ts实现一个判断入参是否是数组类型的方法？

unknown 用于变量类型不确定，但肯定可以确定的情形下，比如下面这个示例中，入参总归会有个值，根据这个值的类型进行不同的处理，这里使用 unknown 替代 any 则会更加类型安全。

```typescript
function isArray(x: unknown): boolean {
  if (Array.isArray(x)) {
    return true;
  }
  return false;
}
```



----

## 说说对 TypeScript 中命名空间与模块的理解？区别？

### 模块

`TypeScript` 与` ECMAScript` 2015 一样，任何包含顶级 `import` 或者 `export` 的文件都被当成一个模块

相反地，如果一个文件不带有顶级的`import`或者`export`声明，那么它的内容被视为全局可见的

例如我们在在一个 `TypeScript` 工程下建立一个文件 `1.ts`，声明一个变量`a`，如下：

```typescript
const a = 1
```

然后在另一个文件同样声明一个变量`a`，这时候会出现错误信息

提示重复声明`a`变量，但是所处的空间是全局的

如果需要解决这个问题，则通过`import`或者`export`引入模块系统即可，如下：

```typescript
const a = 10;

export default a
```

在`typescript`中，`export`关键字可以导出变量或者类型，用法与`es6`模块一致，如下：

```typescript
export const a = 1
export type Person = {
    name: String
}
```

通过`import` 引入模块，如下：

```typescript
import { a, Person } from './export';
```

### 命名空间

命名空间一个最明确的目的就是解决重名问题

命名空间定义了标识符的可见范围，一个标识符可在多个名字空间中定义，它在不同名字空间中的含义是互不相干的

这样，在一个新的名字空间中可定义任何标识符，它们不会与任何已有的标识符发生冲突，因为已有的定义都处于其他名字空间中

`TypeScript` 中命名空间使用 `namespace` 来定义，语法格式如下：

```typescript
namespace SomeNameSpaceName {
   export interface ISomeInterfaceName {      }
   export class SomeClassName {      }
}
```

以上定义了一个命名空间 `SomeNameSpaceName`，如果我们需要在外部可以调用 `SomeNameSpaceName` 中的类和接口，则需要在类和接口添加 `export` 关键字

使用方式如下：

```typescript
SomeNameSpaceName.SomeClassName
```

命名空间本质上是一个对象，作用是将一系列相关的全局变量组织到一个对象的属性，如下：

```typescript
namespace Letter {
  export let a = 1;
  export let b = 2;
  export let c = 3;
  // ...
  export let z = 26;
}
```

编译成`js`如下：

```typescript
var Letter;
(function (Letter) {
    Letter.a = 1;
    Letter.b = 2;
    Letter.c = 3;
    // ...
    Letter.z = 26;
})(Letter || (Letter = {}));
```

### 区别

- 命名空间是位于全局命名空间下的一个普通的带有名字的 JavaScript 对象，使用起来十分容易。但就像其它的全局命名空间污染一样，它很难去识别组件之间的依赖关系，尤其是在大型的应用中
- 像命名空间一样，模块可以包含代码和声明。 不同的是模块可以声明它的依赖
- 在正常的TS项目开发过程中**并不建议用命名空间**，但通常在通过 d.ts 文件标记 js 库类型的时候使用命名空间，主要作用是给编译器编写代码的时候参考使用



----

## 如何将 unknown 类型指定为一个更具体的类型？

- 使用 typeof 进行类型判断（这些缩小类型范围的技术都有助于TS基于控制流程下的类型分析）

```typescript
  function unknownToString(value: unknown): string {
    if (typeof value === "string") {
     return value;
    }
  
    return String(value);
  }
```

- 对 unknown 类型使用类型断言

要强制编译器信任类型为 unknown 的值为给定类型，则可以使用类型断言：

```typescript
  const value: unknown = "Hello World";
  const foo: string = value; // Error
  const bar: string = value as string; // OK
```

断言错了时语法能通过检测，但是运行的时候就会报错了！

```typescript
  const value: unknown = "Hello World";

  const bar: number = value as number; // runtime Error
```



----

## ts中any和unknown有什么区别？

unknown 和 any 的主要区别是 unknown 类型会更加严格：**在对 unknown 类型的值执行大多数操作之前，我们必须进行某种形式的检查**。而在对 any 类型的值执行操作之前，我们不必进行任何检查。

举例说明：

```typescript
let foo: any = 123;
console.log(foo.msg); // 符合TS的语法
let a_value1: unknown = foo;   // OK
let a_value2: any = foo;      // OK
let a_value3: string = foo;   // OK

let bar: unknown = 222; // OK 
console.log(bar.msg); // Error
let k_value1: unknown = bar;   // OK
let K_value2: any = bar;      // OK
let K_value3: string = bar;   // Error
```

因为bar是一个未知类型(任何类型的数据都可以赋给 `unknown` 类型)，所以不能确定是否有msg属性。不能通过TS语法检测；而 unknown 类型的值也不能将值赋给 any 和 unknown 之外的类型变量

**总结**

any 和 unknown 都是顶级类型，但是 unknown 更加严格，不像 any 那样不做类型检查，反而 unknown 因为未知性质，不允许访问属性，不允许赋值给其他有明确类型的变量。



----



