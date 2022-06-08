# 基本引用类型



# 对象

## 1 理解对象

创建自定义对象的通常方式是创建Object的一个新实例，然后给它添加属性和方法。

```js
let person=new Object();
person.name="mane";
person.age=29;
person.job="forward";
person.sayName=function(){
	console.log(this.name);
}
```

对象字面量变成了更流行的方式。前面的例子如果使用对象字面量则可以这样写：

```js
let person={
	name:"mane",
	age:29,
	job:"forward",
	sayName(){
	console.log(this.name);
	}
};
```

### 1.1 属性的类型

#### 数据属性

数据属性包含一个保存数据值的位置。值会从这个位置读取，也会写入到这个位置。数据属性有 4个特性描述它们的行为。
- [[Configurable]]：表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特性，以及是否可以把它改为访问器属性。默认情况下，所有直接定义在对象上的属性的这个特
性都是 true，如前面的例子所示。
- [[Enumerable]]：表示属性是否可以通过 for-in 循环返回。默认情况下，所有直接定义在对象上的属性的这个特性都是 true，如前面的例子所示。
- [[Writable]]：表示属性的值是否可以被修改。默认情况下，所有直接定义在对象上的属性的这个特性都是 true，如前面的例子所示。
- [[Value]]：包含属性实际的值。这就是前面提到的那个读取和写入属性值的位置。这个特性的默认值为 undefined。

要修改属性的默认特性，就必须使用 Object.defineProperty()方法。这个方法接收 3 个参数： 要给其添加属性的对象、属性的名称和一个描述符对象。最后一个参数，即描述符对象上的属性可以包 含：configurable、enumerable、writable 和 value，跟相关特性的名称一一对应。根据要修改 的特性，可以设置其中一个或多个值。

```js
let person={};
Object.defineProperty(person,"name",{
	writable:false,
	value:"Arnold"
});
console.log(person.name);  //Arnold
person.name="mane";
console.log(person.name);  //Arnold

```

在非严格模式下尝试给这个属性重新赋值会被忽略。在严格模式下，尝试修改只读属性的值会抛出错误。

类似的规则也适用于创建不可配置的属性。比如：

```js
let person={};
Object.defineProperty(person,"name",{
	configurable:false,
	value:"Arnold"
});
console.log(person.name);  //Arnold
delete person.name;
console.log(person.name);  //Arnold

```

这个例子把 configurable 设置为 false，意味着这个属性不能从对象上删除。非严格模式下对 这个属性调用 delete 没有效果，严格模式下会抛出错误。此外，一个属性被定义为不可配置之后，就 不能再变回可配置的了。再次调用 Object.defineProperty()并修改任何非 writable 属性会导致 错误：

```js
let person={};
Object.defineProperty(person,"name",{
	configurable:false,
	value:"Arnold"
});

Object.defineProperty(person,"name",{
	//TypeError: Cannot redefine property: name
	configurable:true,
	value:"Arnold"
});

```

在调用 Object.defineProperty()时，configurable、enumerable 和 writable 的值如果不指定，则都默认为 false。

#### 访问器属性

访问器属性不包含数据值。相反，它们包含一个获取（getter）函数和一个设置（setter）函数，不 过这两个函数不是必需的。在读取访问器属性时，会调用获取函数，这个函数的责任就是返回一个有效 的值。在写入访问器属性时，会调用设置函数并传入新值，这个函数必须决定对数据做出什么修改。访 问器属性有 4 个特性描述它们的行为。
- [[Configurable]]：表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特 性，以及是否可以把它改为数据属性。默认情况下，所有直接定义在对象上的属性的这个特性 都是 true。
- [[Enumerable]]：表示属性是否可以通过 for-in 循环返回。默认情况下，所有直接定义在对 象上的属性的这个特性都是 true。
- [[Get]]：获取函数，在读取属性时调用。默认值为 undefined。
- [[Set]]：设置函数，在写入属性时调用。默认值为 undefined。

访问器属性是不能直接定义的，必须使用 Object.defineProperty()。

```js
// 定义一个对象，包含伪私有成员 year_和公共成员 edition
let book={
	year_:2017,  //year_中的下划线常用来表示该属性并不希望在对象方法的外部被访问。
	edition:1
};

Object.defineProperty(book,"year",{
    /*属性 year 被定义为一个访问器属性，其中获取函数简
	单地返回 year_的值，而设置函数会做一些计算以决定正确的版本（edition）。*/
	get(){
		return this.year_;
	},
	set(newValue){
		if (newValue>2017) {
			this.year_=newValue;
			this.edition+=newValue-2017;
		}
	}
});
console.log(book.year_);  //2017
book.year=2021;
console.log(book.year_);  //2021
console.log(book.edition);  //5
```

获取函数和设置函数不一定都要定义。只定义获取函数意味着属性是只读的，尝试修改属性会被忽 略。在严格模式下，尝试写入只定义了获取函数的属性会抛出错误。类似地，只有一个设置函数的属性 是不能读取的，非严格模式下读取会返回 undefined，严格模式下会抛出错误。

 在不支持 Object.defineProperty()的浏览器中没有办法修改[[Configurable]]或[[Enumerable]]。

### 1.2 定义多个属性

在一个对象上同时定义多个属性的可能性是非常大的。为此，ECMAScript 提供了 Object.defineProperties()方法。这个方法可以通过多个描述符一次性定义多个属性。它接收两个参数：要为之添加或修改属性的对象和另一个描述符对象，其属性与要添加或修改的属性一一对应。

```js
let book={};

Object.defineProperties(book,{
	year_:{
		value:2017
	},
	edition:{
		value:1
	},
	year:{
		get(){
			return this.year_;
		},
		set(newValue){
			if (newValue>2017) {
				this.year_=newValue;
				this.edition+=newValue-2017;
			}
		}
	},
});
console.log(book.year_);  //2017
book.year=2021;
console.log(book.year_);  //2017
console.log(book.edition);  //1
```

这段代码在 book 对象上定义了两个数据属性 year_和 edition，还有一个访问器属性 year。最终的对象跟上一节示例中的一样。唯一的区别是所有属性都是同时定义的，并且**数据属性的configurable、enumerable 和 writable 特性值都是 false。**

### 1.3 读取属性的特性

使用 Object.getOwnPropertyDescriptor()方法可以取得指定属性的属性描述符。这个方法接收两个参数：属性所在的对象和要取得其描述符的属性名。返回值是一个对象，对于访问器属性包含configurable、enumerable、get 和 set 属性，对于数据属性包含 configurable、enumerable、writable 和 value 属性。

```js
let book={};

Object.defineProperties(book,{
	year_:{
		value:2017
	},
	edition:{
		value:1
	},
	year:{
		get(){
			return this.year_;
		},
		set(newValue){
			if (newValue>2017) {
				this.year_=newValue;
				this.edition+=newValue-2017;
			}
		}
	},
});

let descriptor=Object.getOwnPropertyDescriptor(book,"year_");
console.log(descriptor.value);  //2017
console.log(descriptor.configurable);  //false
console.log(typeof descriptor.get);  //undefined

descriptor=Object.getOwnPropertyDescriptor(book,"year");  //
console.log(descriptor.value);  //undefined
console.log(descriptor.enumerable);  //false
console.log(typeof descriptor.get);  //function

```

ECMAScript 2017 新增了 Object.getOwnPropertyDescriptors()静态方法。这个方法实际上会在每个自有属性上调用 Object.getOwnPropertyDescriptor()并在一个新对象中返回它们。

```js
console.log(Object.getOwnPropertyDescriptors(book));
/*
{
  year_: {
    value: 2017,
    writable: false,
    enumerable: false,
    configurable: false
  },
  edition: { value: 1, writable: false, enumerable: false, configurable: false },
  year: {
    get: [Function: get],
    set: [Function: set],
    enumerable: false,
    configurable: false
  }
}
[Finished in 120ms]
*/
```

### 1.4 合并对象

JavaScript 开发者经常觉得“合并”（merge）两个对象很有用。更具体地说，就是把源对象所有的 本地属性一起复制到目标对象上。有时候这种操作也被称为“混入”（mixin），因为目标对象通过混入 源对象的属性得到了增强。

ECMAScript 6 专门为合并对象提供了 Object.assign()方法。这个方法接收一个目标对象和一个 或多个源对象作为参数，然后将每个源对象中可枚举（Object.propertyIsEnumerable()返回 true） 和自有（Object.hasOwnProperty()返回 true）属性复制到目标对象。以字符串和符号为键的属性 会被复制。对每个符合条件的属性，这个方法会使用源对象上的[[Get]]取得属性的值，然后使用目标 对象上的[[Set]]设置属性的值。

```js
let dest, src, result;
/**
* 简单复制
*/
dest = {};
src = { id: 'src' };
result = Object.assign(dest, src);
// Object.assign 修改目标对象
// 也会返回修改后的目标对象
console.log(dest === result); // true
console.log(dest !== src); // true
console.log(result); // { id: src }
console.log(dest); // { id: src }
/**
* 多个源对象
*/
dest = {};
result = Object.assign(dest, { a: 'foo' }, { b: 'bar' });
console.log(result); // { a: foo, b: bar }
/**
* 获取函数与设置函数
*/
dest = {
set a(val) {
console.log(`Invoked dest setter with param ${val}`);
}
};
src = {
get a() {
console.log('Invoked src getter');
return 'foo';
}
};
Object.assign(dest, src);
// 调用 src 的获取方法
// 调用 dest 的设置方法并传入参数"foo"
// 因为这里的设置函数不执行赋值操作
// 所以实际上并没有把值转移过来
console.log(dest); // { set a(val) {...} }
```

Object.assign()实际上对每个源对象执行的是浅复制。如果多个源对象都有相同的属性，则使用最后一个复制的值。此外，从源对象访问器属性取得的值，比如获取函数，会作为一个静态值赋给目标对象。换句话说，不能在两个对象间转移获取函数和设置函数。

```js
let dest, src, result;
/**
* 覆盖属性
*/
dest = { id: 'dest' };
result = Object.assign(dest, { id: 'src1', a: 'foo' }, { id: 'src2', b: 'bar' });
// Object.assign 会覆盖重复的属性
console.log(result); // { id: src2, a: foo, b: bar }
// 可以通过目标对象上的设置函数观察到覆盖的过程：
dest = {
set id(x) {
console.log(x);
}
};
Object.assign(dest, { id: 'first' }, { id: 'second' }, { id: 'third' });
// first
// second
// third
/**
* 对象引用
*/
dest = {};
src = { a: {} };
Object.assign(dest, src);
// 浅复制意味着只会复制对象的引用
console.log(dest); // { a :{} }
console.log(dest.a === src.a); // true
```

如果赋值期间出错，则操作会中止并退出，同时抛出错误。Object.assign()没有“回滚”之前赋值的概念，因此它是一个尽力而为、可能只会完成部分复制的方法。

```js
let dest, src, result;
/**
* 错误处理
*/
dest = {};
src = {
a: 'foo',
get b() {
// Object.assign()在调用这个获取函数时会抛出错误
throw new Error();
},
c: 'bar'
};
try {
Object.assign(dest, src);
} catch(e) {}
// Object.assign()没办法回滚已经完成的修改
// 因此在抛出错误之前，目标对象上已经完成的修改会继续存在：
console.log(dest); // { a: foo }
```

### 1.5 对象标识及相等判定

在 ECMAScript 6 之前，有些特殊情况即使是===操作符也无能为力：

```js
// 这些是===符合预期的情况
console.log(true === 1); // false
console.log({} === {}); // false
console.log("2" === 2); // false
// 这些情况在不同 JavaScript 引擎中表现不同，但仍被认为相等
console.log(+0 === -0); // true
console.log(+0 === 0); // true
console.log(-0 === 0); // true
// 要确定 NaN 的相等性，必须使用极为讨厌的 isNaN()
console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true
```

为改善这类情况，ECMAScript 6 规范新增了 Object.is()，这个方法与===很像，但同时也考虑到了上述边界情形。这个方法必须接收两个参数：

```js
console.log(Object.is(true, 1)); // false
console.log(Object.is({}, {})); // false
console.log(Object.is("2", 2)); // false
// 正确的 0、-0、+0 相等/不等判定
console.log(Object.is(+0, -0)); // false
console.log(Object.is(+0, 0)); // true
console.log(Object.is(-0, 0)); // false
// 正确的 NaN 相等判定
console.log(Object.is(NaN, NaN)); // true
```

要检查超过两个值，递归地利用相等性传递即可：

```js
function recursivelyCheckEqual(x,...rest) {
	return Object.is(x,rest[0]) && (rest.length<2 || recursivelyCheckEqual(...rest));
}
```

### 1.6 增强的对象语法

ECMAScript 6 为定义和操作对象新增了很多极其有用的语法糖特性。这些特性都没有改变现有引擎的行为，但极大地提升了处理对象的方便程度。

#### 属性值简写

在给对象添加变量的时候，开发者经常会发现属性名和变量名是一样的。例如：

```js
let name = 'Matt';
let person = {
name: name
};
console.log(person); // { name: 'Matt' }
```

为此，简写属性名语法出现了。简写属性名只要使用变量名（不用再写冒号）就会自动被解释为同名的属性键。如果没有找到同名变量，则会抛出 ReferenceError。

```js
let name = 'Matt';
let person = {
name
};
console.log(person); // { name: 'Matt' }
```

代码压缩程序会在不同作用域间保留属性名，以防止找不到引用。以下面的代码为例：

```js
function makePerson(name) {
return {
name
};
}
let person = makePerson('Matt');
console.log(person.name); // Matt
```

在这里，即使参数标识符只限定于函数作用域，编译器也会保留初始的 name 标识符。如果使用Google Closure 编译器压缩，那么函数参数会被缩短，而属性名不变：

```js
function makePerson(a) {
return {
	name: a
};
}
var person = makePerson("Matt");
console.log(person.name); // Matt
```

#### 可计算属性

在引入可计算属性之前，如果想使用变量的值作为属性，那么必须先声明对象，然后使用中括号语法来添加属性。换句话说，不能在对象字面量中直接动态命名属性。比如：

```js
const nameKey = 'name';
const ageKey = 'age';
const jobKey = 'job';
let person = {};
person[nameKey] = 'Matt';
person[ageKey] = 27;
person[jobKey] = 'Software engineer';
console.log(person); // { name: 'Matt', age: 27, job: 'Software engineer' }
```

有了可计算属性，就可以在对象字面量中完成动态属性赋值。中括号包围的对象属性键告诉运行时将其作为 JavaScript 表达式而不是字符串来求值：

```js
const nameKey = 'name';
const ageKey = 'age';
const jobKey = 'job';
let person = {
	[nameKey]: 'Matt',
	[ageKey]: 27,
	[jobKey]: 'Software engineer'
};
console.log(person); // { name: 'Matt', age: 27, job: 'Software engineer' }
```

因为被当作 JavaScript 表达式求值，所以可计算属性本身可以是复杂的表达式，在实例化时再求值：

```js
const nameKey = 'name';
const ageKey = 'age';
const jobKey = 'job';
let uniqueToken = 0;
function getUniqueKey(key) {
return `${key}_${uniqueToken++}`;
}
let person = {
    [getUniqueKey(nameKey)]: 'Matt',
    [getUniqueKey(ageKey)]: 27,
    [getUniqueKey(jobKey)]: 'Software engineer'
};
console.log(person); // { name_0: 'Matt', age_1: 27, job_2: 'Software engineer' }
```

**注意** 可计算属性表达式中抛出任何错误都会中断对象创建。如果计算属性的表达式有副作用，那就要小心了，因为如果表达式抛出错误，那么之前完成的计算是不能回滚的。

#### 简写方法名

在给对象定义方法时，通常都要写一个方法名、冒号，然后再引用一个匿名函数表达式，如下所示：

```js
let person = {
sayName: function(name) {
	console.log(`My name is ${name}`);
}
};
person.sayName('Matt'); // My name is Matt
```

新的简写方法的语法遵循同样的模式，但开发者要放弃给函数表达式命名（不过给作为方法的函数命名通常没什么用）。相应地，这样也可以明显缩短方法声明。

```js
let person = {
    sayName(name) {
        console.log(`My name is ${name}`);
    }
};
person.sayName('Matt'); // My name is Matt
```

简写方法名对获取函数和设置函数也是适用的：

```js
let person = {
    name_: '',
    get name() {
        return this.name_;
    },
    set name(name) {
        this.name_ = name;
    },
    sayName() {
        console.log(`My name is ${this.name_}`);
    }
};
person.name = 'Matt';
person.sayName(); // My name is Matt
```

简写方法名与可计算属性键相互兼容：

```js
const methodKey = 'sayName';
let person = {
    [methodKey](name) {
    	console.log(`My name is ${name}`);
    }
}
person.sayName('Matt'); // My name is Matt
```

### 1.7 对象解构

ECMAScript 6 新增了对象解构语法，可以在一条语句中使用嵌套数据实现一个或多个赋值操作。简单地说，对象解构就是使用与对象匹配的结构来实现对象属性赋值。
下面的例子展示了两段等价的代码，首先是不使用对象解构的：

```js
// 不使用对象解构
let person = {
	name: 'Matt',
	age: 27
};
let personName = person.name,personAge = person.age;
console.log(personName); // Matt
console.log(personAge); // 27
```

然后，是使用对象解构的：

```js
// 使用对象解构
let person = {
    name: 'Matt',
    age: 27
};
let { name: personName, age: personAge } = person;
console.log(personName); // Matt
console.log(personAge); // 27
```

使用解构，可以在一个类似对象字面量的结构中，声明多个变量，同时执行多个赋值操作。如果想让变量直接使用属性的名称，那么可以使用简写语法，比如：

```js
let { name, age } = person;
console.log(name); // Matt
console.log(age); // 27
```

解构赋值不一定与对象的属性匹配。赋值的时候可以忽略某些属性，而如果引用的属性不存在，则该变量的值就是 undefined：

```js
let { name, job } = person;
console.log(name); // Matt
console.log(job); // undefined
```

也可以在解构赋值的同时定义默认值，这适用于前面刚提到的引用的属性不存在于源对象中的情况：

```js
let person = {
name: 'Matt',
age: 27
};
let { name, job='Software engineer' } = person;
console.log(name); // Matt
console.log(job); // Software engineer
```

解构在内部使用函数 ToObject()（不能在运行时环境中直接访问）把源数据结构转换为对象。这意味着在对象解构的上下文中，原始值会被当成对象。这也意味着（根据 ToObject()的定义），null和 undefined 不能被解构，否则会抛出错误。

```js
let { length } = 'foobar';
console.log(length); // 6
let { constructor: c } = 4;
console.log(c === Number); // true
let { _ } = null; // TypeError
let { _ } = undefined; // TypeError
```

解构并不要求变量必须在解构表达式中声明。不过，如果是给事先声明的变量赋值，则赋值表达式必须包含在一对括号中：

```js
let personName, personAge;
let person = {
name: 'Matt',
age: 27
};
({name: personName, age: personAge} = person);
console.log(personName, personAge); // Matt, 27
```

#### 嵌套解构

解构对于引用嵌套的属性或赋值目标没有限制。为此，可以通过解构来复制对象属性：

```js

let person = {
	name: 'Matt',
	age: 27,
	job: {
		title: 'Software engineer'
	}
};
let personCopy = {};
({
	name: personCopy.name,
	age: personCopy.age,
	job: personCopy.job
} = person);

// 因为一个对象的引用被赋值给 personCopy，所以修改
// person.job 对象的属性也会影响 personCopy
person.job.title = 'Hacker'
console.log(person);
// { name: 'Matt', age: 27, job: { title: 'Hacker' } }
console.log(personCopy);
// { name: 'Matt', age: 27, job: { title: 'Hacker' } }

```

解构赋值可以使用嵌套结构，以匹配嵌套的属性：

```js
let person = {
name: 'Matt',
    age: 27,
    job: {
    title: 'Software engineer'
}
};
// 声明 title 变量并将 person.job.title 的值赋给它
let { job: { title } } = person;
console.log(title); // Software engineer
```

在外层属性没有定义的情况下不能使用嵌套解构。无论源对象还是目标对象都一样：

```js
let person = {
	job: {
		title: 'Software engineer'
	}
};
let personCopy = {};
// foo 在源对象上是 undefined
({
	foo: {
		bar: personCopy.bar
	}
} = person);
// TypeError: Cannot destructure property 'bar' of 'undefined' or 'null'.
// job 在目标对象上是 undefined
({
	job: {
		title: personCopy.job.title
	}
} = person);
// TypeError: Cannot set property 'title' of undefined
```

#### 部分解构

需要注意的是，涉及多个属性的解构赋值是一个输出无关的顺序化操作。如果一个解构表达式涉及多个赋值，开始的赋值成功而后面的赋值出错，则整个解构赋值只会完成一部分：

```js
let person = {
	name: 'Matt',
	age: 27
};
let personName, personBar, personAge;
try {
	// person.foo 是 undefined，因此会抛出错误
	({name: personName, foo: { bar: personBar }, age: personAge} = person);
} catch(e) {}
console.log(personName, personBar, personAge);
// Matt, undefined, undefined
```

#### 参数上下文匹配

在函数参数列表中也可以进行解构赋值。对参数的解构赋值不会影响 arguments 对象，但可以在函数签名中声明在函数体内使用局部变量：

```js
let person = {
	name: 'Matt',
	age: 27
};
function printPerson(foo, {name, age}, bar) {
	console.log(arguments);
	console.log(name, age);
}
function printPerson2(foo, {name: personName, age: personAge}, bar) {
	console.log(arguments);
	console.log(personName, personAge);
}

printPerson('1st', person, '2nd');
// ['1st', { name: 'Matt', age: 27 }, '2nd']
// 'Matt', 27
printPerson2('1st', person, '2nd');
// ['1st', { name: 'Matt', age: 27 }, '2nd']
// 'Matt', 27
```

## 2 创建对象

虽然使用 Object 构造函数或对象字面量可以方便地创建对象，但这些方式也有明显**不足**：创建具有同样接口的多个对象需要重复编写很多代码。

### 2.1 概述

ECMAScript 6 开始正式支持类和继承。ES6 的类旨在完全涵盖之前规范设计的基于原型的继承模式。不过，无论从哪方面看，ES6 的类都仅仅是封装了 ES5.1 构造函数加原型继承的语法糖而已。

### 2.2 工厂模式

工厂模式是一种众所周知的设计模式，广泛应用于软件工程领域，用于抽象创建特定对象的过程。下面的例子展示了一种按照特定接口创建对象的方式：

```js
function createPerson(name, age, job) {
	let o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function() {
		console.log(this.name);
	};
	return o;
}
let person1 = createPerson("Nicholas", 29, "Software Engineer");
let person2 = createPerson("Greg", 27, "Doctor");
```

这里，函数 createPerson()接收 3 个参数，根据这几个参数构建了一个包含 Person 信息的对象。可以用不同的参数多次调用这个函数，每次都会返回包含 3 个属性和 1 个方法的对象。这种工厂模式虽然可以解决创建多个类似对象的问题，但没有解决对象标识问题（即新创建的对象是什么类型）。

### 2.3 构造函数模式

ECMAScript 中的构造函数是用于创建特定类型对象的。像 Object 和 Array 这样的原生构造函数，运行时可以直接在执行环境中使用。当然也可以自定义构造函数，以函数的形式为自己的对象类型定义属性和方法。
比如，前面的例子使用构造函数模式可以这样写：

```js
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function() {
		console.log(this.name);
	};
}
let person1 = new Person("Nicholas", 29, "Software Engineer");
let person2 = new Person("Greg", 27, "Doctor");
person1.sayName(); // Nicholas
person2.sayName(); // Greg
```

在这个例子中，Person()构造函数代替了 createPerson()工厂函数。实际上，Person()内部的代码跟 createPerson()基本是一样的，只是有如下区别。

- 没有显式地创建对象。

- 属性和方法直接赋值给了 this。

- 没有 return

另外，要注意函数名 Person 的首字母大写了。按照惯例，构造函数名称的首字母都是要大写的， 非构造函数则以小写字母开头。这是从面向对象编程语言那里借鉴的，有助于在 ECMAScript 中区分构 造函数和普通函数。毕竟 ECMAScript 的构造函数就是能创建对象的函数。

要创建 Person 的实例，应使用 new 操作符。以这种方式调用构造函数会执行如下操作。
(1) 在内存中创建一个新对象。
(2) 这个新对象内部的[[Prototype]]特性被赋值为构造函数的 prototype 属性。
(3) 构造函数内部的 this 被赋值为这个新对象（即 this 指向新对象）。
(4) 执行构造函数内部的代码（给新对象添加属性）。
(5) 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象。

上一个例子的最后，person1 和 person2 分别保存着 Person 的不同实例。这两个对象都有一个constructor 属性指向 Person，如下所示：

```js
console.log(person1.constructor == Person); // true
console.log(person2.constructor == Person); // true
```

constructor 本来是用于标识对象类型的。不过，一般认为 instanceof 操作符是确定对象类型更可靠的方式。前面例子中的每个对象都是 Object 的实例，同时也是 Person 的实例，如下面调用instanceof 操作符的结果所示：

```js
console.log(person1 instanceof Object); // true
console.log(person1 instanceof Person); // true
console.log(person2 instanceof Object); // true
console.log(person2 instanceof Person); // true
```

定义自定义构造函数可以确保实例被标识为特定类型，相比于工厂模式，这是一个很大的好处。在这个例子中，person1 和 person2 之所以也被认为是 Object 的实例，是因为所有自定义对象都继承自 Object。
构造函数不一定要写成函数声明的形式。赋值给变量的函数表达式也可以表示构造函数：

```js
let Person = function(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
    	console.log(this.name);
    };
}
let person1 = new Person("Nicholas", 29, "Software Engineer");
let person2 = new Person("Greg", 27, "Doctor");
person1.sayName(); // Nicholas
person2.sayName(); // Greg
console.log(person1 instanceof Object); // true
console.log(person1 instanceof Person); // true
console.log(person2 instanceof Object); // true
console.log(person2 instanceof Person); // true
```

在实例化时，如果不想传参数，那么构造函数后面的括号可加可不加。只要有 new 操作符，就可以调用相应的构造函数：

```js
function Person() {
    this.name = "Jake";
    this.sayName = function() {
    	console.log(this.name);
    };
}
let person1 = new Person();
let person2 = new Person;
person1.sayName(); // Jake
person2.sayName(); // Jake
console.log(person1 instanceof Object); // true
console.log(person1 instanceof Person); // true
console.log(person2 instanceof Object); // true
console.log(person2 instanceof Person); // true
```

#### 构造函数也是函数

构造函数与普通函数唯一的区别就是调用方式不同。除此之外，构造函数也是函数。并没有把某个 函数定义为构造函数的特殊语法。任何函数只要使用 new 操作符调用就是构造函数，而不使用 new 操 作符调用的函数就是普通函数。比如，前面的例子中定义的 Person()可以像下面这样调用：

```js
// 作为构造函数
let person = new Person("Nicholas", 29, "Software Engineer");
person.sayName(); // "Nicholas"
// 作为函数调用
Person("Greg", 27, "Doctor"); // 添加到 window 对象
window.sayName(); // "Greg"
// 在另一个对象的作用域中调用
let o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
o.sayName(); // "Kristen"
```

这个例子一开始展示了典型的构造函数调用方式，即使用 new 操作符创建一个新对象。

然后是普通 函数的调用方式，这时候没有使用 new 操作符调用 Person()，结果会将属性和方法添加到 window 对 象。

这里要记住，在调用一个函数而没有明确设置 this 值的情况下（即没有作为对象的方法调用，或 者没有使用 call()/apply()调用），this 始终指向 Global 对象（在浏览器中就是 window 对象）。 因此在上面的调用之后，window 对象上就有了一个 sayName()方法，调用它会返回"Greg"。

最后展 示的调用方式是通过 call()（或 apply()）调用函数，同时将特定对象指定为作用域。这里的调用将 对象 o 指定为 Person()内部的 this 值，因此执行完函数代码后，所有属性和 sayName()方法都会添 加到对象 o 上面。

#### 构造函数的问题

构造函数虽然有用，但也不是没有问题。构造函数的**主要问题在于，其定义的方法会在每个实例上 都创建一遍**。因此对前面的例子而言，person1 和 person2 都有名为 sayName()的方法，但这两个方 法不是同一个 Function 实例。我们知道，ECMAScript 中的函数是对象，因此每次定义函数时，都会 初始化一个对象。逻辑上讲，这个构造函数实际上是这样的：

```js
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = new Function("console.log(this.name)"); // 逻辑等价
}
```

这样理解这个构造函数可以更清楚地知道，每个 Person 实例都会有自己的 Function 实例用于显示 name 属性。当然了，以这种方式创建函数会带来不同的作用域链和标识符解析。但创建新 Function实例的机制是一样的。因此不同实例上的函数虽然同名却不相等，如下所示：

```js
console.log(person1.sayName == person2.sayName); // false
```

因为都是做一样的事，所以没必要定义两个不同的 Function 实例。况且，this 对象可以把函数与对象的绑定推迟到运行时。
要解决这个问题，可以把函数定义转移到构造函数外部：

```js
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}
function sayName() {
	console.log(this.name);
}
let person1 = new Person("Nicholas", 29, "Software Engineer");
let person2 = new Person("Greg", 27, "Doctor");
person1.sayName(); // Nicholas
person2.sayName(); // Greg
```

在这里，sayName()被定义在了构造函数外部。在构造函数内部，sayName 属性等于全局 sayName() 函数。因为这一次 sayName 属性中包含的只是一个指向外部函数的指针，所以 person1 和 person2 共享了定义在全局作用域上的 sayName()函数。这样虽然解决了相同逻辑的函数重复定义的问题，但 全局作用域也因此被搞乱了，因为那个函数实际上只能在一个对象上调用。**如果这个对象需要多个方法， 那么就要在全局作用域中定义多个函数。这会导致自定义类型引用的代码不能很好地聚集一起**。这个新 问题可以通过原型模式来解决。

### 2.4 原型模式

每个函数都会创建一个 prototype 属性，这个属性是一个对象，包含应该由特定引用类型的实例 共享的属性和方法。实际上，这个对象就是通过调用构造函数创建的对象的原型。使用原型对象的好处 是，在它上面定义的属性和方法可以被对象实例共享。原来在构造函数中直接赋给对象实例的值，可以 直接赋值给它们的原型，如下所示：

```js
function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
console.log(this.name);
};
let person1 = new Person();
person1.sayName(); // "Nicholas"
let person2 = new Person();
person2.sayName(); // "Nicholas"
console.log(person1.sayName == person2.sayName); // true
```

使用函数表达式也可以：

```js
let Person = function() {};
//...
```

这里，所有属性和 sayName()方法都直接添加到了 Person 的 prototype 属性上，构造函数体中 什么也没有。但这样定义之后，调用构造函数创建的新对象仍然拥有相应的属性和方法。与构造函数模 式不同，使用这种原型模式定义的属性和方法是由所有实例共享的。因此 person1 和 person2 访问的 都是相同的属性和相同的 sayName()函数。要理解这个过程，就必须理解 ECMAScript 中原型的本质。

#### 理解原型

无论何时，只要创建一个函数，就会按照特定的规则为这个函数创建一个 prototype 属性（指向 原型对象）。默认情况下，所有原型对象自动获得一个名为 constructor 的属性，指回与之关联的构 造函数。对前面的例子而言，Person.prototype.constructor 指向 Person。然后，因构造函数而 异，可能会给原型对象添加其他属性和方法。

在自定义构造函数时，原型对象默认只会获得 constructor 属性，其他的所有方法都继承自 Object。每次调用构造函数创建一个新实例，这个实例的内部[[Prototype]]指针就会被赋值为构 造函数的原型对象。脚本中没有访问这个[[Prototype]]特性的标准方式，但 Firefox、Safari 和 Chrome 会在每个对象上暴露__proto__属性，通过这个属性可以访问对象的原型。在其他实现中，这个特性 完全被隐藏了。关键在于理解这一点：实例与构造函数原型之间有直接的联系，但实例与构造函数之 间没有。 

这种关系不好可视化，但可以通过下面的代码来理解原型的行为：

```js
/**
* 构造函数可以是函数表达式
* 也可以是函数声明，因此以下两种形式都可以：
* function Person() {}
* let Person = function() {}
*/
function Person() {}
/**
* 声明之后，构造函数就有了一个
* 与之关联的原型对象：
*/
console.log(typeof Person.prototype);
console.log(Person.prototype);
// {
// constructor: f Person(),
// __proto__: Object
// }
/**
* 如前所述，构造函数有一个 prototype 属性
* 引用其原型对象，而这个原型对象也有一个
* constructor 属性，引用这个构造函数
* 换句话说，两者循环引用：
*/
console.log(Person.prototype.constructor === Person); // true
/**
* 正常的原型链都会终止于 Object 的原型对象
* Object 原型的原型是 null
*/
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Person.prototype.__proto__.constructor === Object); // true
console.log(Person.prototype.__proto__.__proto__ === null); // true
console.log(Person.prototype.__proto__);
// {
// constructor: f Object(),
// toString: ...
// hasOwnProperty: ...
// isPrototypeOf: ...
// ...
// }
let person1 = new Person(),
person2 = new Person();
/**
* 构造函数、原型对象和实例
* 是 3 个完全不同的对象：
*/
console.log(person1 !== Person); // true
console.log(person1 !== Person.prototype); // true
console.log(Person.prototype !== Person); // true
/**
* 实例通过__proto__链接到原型对象，
* 它实际上指向隐藏特性[[Prototype]]
*
* 构造函数通过 prototype 属性链接到原型对象
*
* 实例与构造函数没有直接联系，与原型对象有直接联系
*/
console.log(person1.__proto__ === Person.prototype); // true
conosle.log(person1.__proto__.constructor === Person); // true
/**
* 同一个构造函数创建的两个实例
* 共享同一个原型对象：
*/
console.log(person1.__proto__ === person2.__proto__); // true
/**
* instanceof 检查实例的原型链中
* 是否包含指定构造函数的原型：
*/
console.log(person1 instanceof Person); // true
console.log(person1 instanceof Object); // true
console.log(Person.prototype instanceof Object); // true
```

对于前面例子中的 Person 构造函数和 Person.prototype，可以通过图 8-1 看出各个对象之间的关系。

![js原型理解](E:\pogject\学习笔记\image\js\js原型理解.png)

图 8-1 展示了 Person 构造函数、Person 的原型对象和 Person 现有两个实例之间的关系。注意， Person.prototype 指向原型对象，而 Person.prototype.contructor 指回 Person 构造函数。原 型对象包含 constructor 属性和其他后来添加的属性。Person 的两个实例 person1 和 person2 都只 有一个内部属性指回 Person.prototype，而且两者都与构造函数没有直接联系。另外要注意，虽然这两 个实例都没有属性和方法，但 person1.sayName()可以正常调用。这是由于对象属性查找机制的原因。 

虽然不是所有实现都对外暴露了[[Prototype]]，但可以使用 **isPrototypeOf()方法**确定两个对 象之间的这种关系。本质上，isPrototypeOf()会在传入参数的[[Prototype]]指向调用它的对象时 返回 true，如下所示：

```js
console.log(Person.prototype.isPrototypeOf(person1)); // true
console.log(Person.prototype.isPrototypeOf(person2)); // true
```

这里通过原型对象调用 isPrototypeOf()方法检查了 person1 和 person2。因为这两个例子内部都有链接指向 Person.prototype，所以结果都返回 true。

ECMAScript 的 Object 类型有一个方法叫 **Object.getPrototypeOf()**，返回参数的内部特性[[Prototype]]的值。例如：

```js
console.log(Object.getPrototypeOf(person1) == Person.prototype); // true
console.log(Object.getPrototypeOf(person1).name); // "Nicholas"
```

第一行代码简单确认了 Object.getPrototypeOf()返回的对象就是传入对象的原型对象。第二行代码则取得了原型对象上 name 属性的值，即"Nicholas"。使用 Object.getPrototypeOf()可以方便地取得一个对象的原型，而这在通过原型实现继承时显得尤为重要。

Object 类型还有一个 **setPrototypeOf()方法**，可以向实例的私有特性[[Prototype]]写入一个新值。这样就可以重写一个对象的原型继承关系：

```js
let biped = {
	numLegs: 2
};
let person = {
	name: 'Matt'
};
Object.setPrototypeOf(person, biped);
console.log(person.name); // Matt
console.log(person.numLegs); // 2
console.log(Object.getPrototypeOf(person) === biped); // true
```

**警告** Object.setPrototypeOf()可能会严重影响代码性能。Mozilla 文档说得很清楚： “在所有浏览器和 JavaScript 引擎中，修改继承关系的影响都是微妙且深远的。这种影响并 不仅是执行 Object.setPrototypeOf()语句那么简单，而是会涉及所有访问了那些修 改过[[Prototype]]的对象的代码。”

为避免使用 Object.setPrototypeOf()可能造成的性能下降，可以通过 **Object.create()**来创建一个新对象，同时为其指定原型：

```js
let biped = {
    numLegs: 2
};
let person = Object.create(biped);
person.name = 'Matt';
console.log(person.name); // Matt
console.log(person.numLegs); // 2
console.log(Object.getPrototypeOf(person) === biped); // true
```

#### 原型层级

在通过对象访问属性时，会按照这个属性的名称开始搜索。搜索开始于对象实例本身。如果在这个 实例上发现了给定的名称，则返回该名称对应的值。如果没有找到这个属性，则搜索会沿着指针进入原 型对象，然后在原型对象上找到属性后，再返回对应的值。因此，在调用 person1.sayName()时，会 发生两步搜索。首先，JavaScript 引擎会问：“person1 实例有 sayName 属性吗？”答案是没有。然后， 继续搜索并问：“person1 的原型有 sayName 属性吗？”答案是有。于是就返回了保存在原型上的这 个函数。在调用 person2.sayName()时，会发生同样的搜索过程，而且也会返回相同的结果。这就是 原型用于在多个对象实例间共享属性和方法的原理。

**注意** 前面提到的 constructor 属性只存在于原型对象，因此通过实例对象也是可以访问到的。

虽然可以通过实例读取原型对象上的值，但不可能通过实例重写这些值。如果在实例上添加了一个与原型对象中同名的属性，那就会在实例上创建这个属性，这个属性会遮住原型对象上的属性。下面看一个例子：

```js
function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
console.log(this.name);
};
let person1 = new Person();
let person2 = new Person();
person1.name = "Greg";
console.log(person1.name); // "Greg"，来自实例
console.log(person2.name); // "Nicholas"，来自原型
```

在这个例子中，person1 的 name 属性遮蔽了原型对象上的同名属性。虽然 person1.name 和 person2.name 都返回了值，但前者返回的是"Greg"（来自实例），后者返回的是"Nicholas"（来自 原型）。当 console.log()访问 person1.name 时，会先在实例上搜索个属性。因为这个属性在实例 上存在，所以就不会再搜索原型对象了。而在访问 person2.name 时，并没有在实例上找到这个属性， 所以会继续搜索原型对象并使用定义在原型上的属性。 

只要给对象实例添加一个属性，这个属性就会**遮蔽（shadow）原型对象上的同名属性**，也就是虽然 不会修改它，但会屏蔽对它的访问。即使在实例上把这个属性设置为 null，也不会恢复它和原型的联 系。不过，使用 **delete 操作符**可以完全删除实例上的这个属性，从而让标识符解析过程能够继续搜索 原型对象。

```js
function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
console.log(this.name);
};
let person1 = new Person();
let person2 = new Person();
person1.name = "Greg";
console.log(person1.name); // "Greg"，来自实例
console.log(person2.name); // "Nicholas"，来自原型
delete person1.name;
console.log(person1.name); // "Nicholas"，来自原型
```

这个修改后的例子中使用 delete 删除了 person1.name，这个属性之前以"Greg"遮蔽了原型上 的同名属性。然后原型上 name 属性的联系就恢复了，因此再访问 person1.name 时，就会返回原型对 象上这个属性的值。

**hasOwnProperty()方法**用于确定某个属性是在实例上还是在原型对象上。这个方法是继承自 Object的，会在属性存在于调用它的对象实例上时返回 true，如下面的例子所示：

```js
function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
console.log(this.name);
};
let person1 = new Person();
let person2 = new Person();
console.log(person1.hasOwnProperty("name")); // false
person1.name = "Greg";
console.log(person1.name); // "Greg"，来自实例
console.log(person1.hasOwnProperty("name")); // true
console.log(person2.name); // "Nicholas"，来自原型
console.log(person2.hasOwnProperty("name")); // false
delete person1.name;
console.log(person1.name); // "Nicholas"，来自原型
console.log(person1.hasOwnProperty("name")); // false
```

在这个例子中，通过调用 hasOwnProperty()能够清楚地看到访问的是实例属性还是原型属性。调用 person1.hasOwnProperty("name")只在重写 person1 上 name 属性的情况下才返回 true，表明此时 name 是一个实例属性，不是原型属性。

**注意** ECMAScript 的 Object.getOwnPropertyDescriptor()方法只对实例属性有效。要取得原型属性的描述符，就必须直接在原型对象上调用 Object.getOwnPropertyDescriptor()。

#### 原型和 in 操作符

有两种方式使用 in 操作符：单独使用和在 for-in 循环中使用。在单独使用时，in 操作符会在可以通过对象访问指定属性时返回 true，无论该属性是在实例上还是在原型上。来看下面的例子：

```js
function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
console.log(this.name);
};
let person1 = new Person();
let person2 = new Person();
console.log(person1.hasOwnProperty("name")); // false
console.log("name" in person1); // true
person1.name = "Greg";
console.log(person1.name); // "Greg"，来自实例
console.log(person1.hasOwnProperty("name")); // true
console.log("name" in person1); // true
console.log(person2.name); // "Nicholas"，来自原型
console.log(person2.hasOwnProperty("name")); // false
console.log("name" in person2); // true
delete person1.name;
console.log(person1.name); // "Nicholas"，来自原型
console.log(person1.hasOwnProperty("name")); // false
console.log("name" in person1); // true
```

在上面整个例子中，name 随时可以通过实例或通过原型访问到。因此，调用"name" in persoon1时始终返回 true，无论这个属性是否在实例上。

如果要确定某个属性是否存在于原型上，则可以像下面这样同时使用 hasOwnProperty()和 in 操作符：

```js
function hasPrototypeProperty(object, name){
	return !object.hasOwnProperty(name) && (name in object);
}
```

只要通过对象可以访问，in 操作符就返回 true，而 hasOwnProperty()只有属性存在于实例上时才返回 true。因此，只要 in 操作符返回 true 且 hasOwnProperty()返回 false，就说明该属性是一个原型属性。来看下面的例子：

```js
function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
console.log(this.name);
};
let person = new Person();
console.log(hasPrototypeProperty(person, "name")); // true
person.name = "Greg";
console.log(hasPrototypeProperty(person, "name")); // false
```

在这里，name 属性首先只存在于原型上，所以 hasPrototypeProperty()返回 true。而在实例上重写这个属性后，实例上也有了这个属性，因此 hasPrototypeProperty()返回 false。即便此时原型对象还有 name 属性，但因为实例上的属性遮蔽了它，所以不会用到。

在 for-in 循环中使用 in 操作符时，可以通过对象访问且可以被枚举的属性都会返回，包括实例 属性和原型属性。遮蔽原型中不可枚举（[[Enumerable]]特性被设置为 false）属性的实例属性也会 在 for-in 循环中返回，因为默认情况下开发者定义的属性都是可枚举的。 

#### Object.keys()

要获得对象上所有可枚举的实例属性，可以使用 **Object.keys()方法**。这个方法接收一个对象作 为参数，返回包含该对象所有可枚举属性名称的字符串数组。比如：

```js
function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
	console.log(this.name);
};

let keys = Object.keys(Person.prototype);
console.log(keys); // "name,age,job,sayName"

let p1 = new Person();
p1.name = "Rob";
p1.age = 31;
let p1keys = Object.keys(p1);
console.log(p1keys); // "[name,age]"
```

这里，keys 变量保存的数组中包含"name"、"age"、"job"和"sayName"。这是正常情况下通过 for-in 返回的顺序。而在 Person 的实例上调用时，Object.keys()返回的数组中只包含"name"和 "age"两个属性。 

如果想列出所有实例属性，无论是否可以枚举，都可以使用 **Object.getOwnPropertyNames()**：

```js
let keys = Object.getOwnPropertyNames(Person.prototype);
console.log(keys); // "[constructor,name,age,job,sayName]"
```

注意，返回的结果中包含了一个不可枚举的属性 constructor。Object.keys()和 Object. getOwnPropertyNames()在适当的时候都可用来代替 for-in 循环。 

在 ECMAScript 6 新增符号类型之后，相应地出现了增加一个 Object.getOwnPropertyNames() 的兄弟方法的需求，因为以符号为键的属性没有名称的概念。因此，**Object.getOwnPropertySymbols()方法**就出现了，这个方法与 Object.getOwnPropertyNames()类似，只是针对符号而已：

```js
let k1=Symbol('k1');
let k2=Symbol('k2');

let o={
    [k1]:'k1',
    [k2]:'k2'
};

console.log(Object.getOwnPropertySymbols(o));
//[ Symbol(k1), Symbol(k2) ]
```

#### 属性枚举顺序

for-in 循环、Object.keys()、Object.getOwnPropertyNames()、Object.getOwnProperty- Symbols()以及 Object.assign()在属性枚举顺序方面有很大区别。for-in 循环和 Object.keys() 的枚举顺序是不确定的，取决于 JavaScript 引擎，可能因浏览器而异。 

Object.getOwnPropertyNames()、Object.getOwnPropertySymbols()和 Object.assign() 的枚举顺序是确定性的。**先以升序枚举数值键**，**然后以插入顺序枚举字符串和符号键**。在对象字面量中 定义的键以它们逗号分隔的顺序插入。

```js
let k1=Symbol('k1');
let k2=Symbol('k2');

let o={
    1:1,
    first:'first',
    [k1]:'sym1',
    second:'second',
    0:0
};

o[k2]='sym2';
o[3]=3;
o.third='third';
o[2]=2;
console.log(Object.getOwnPropertyNames(o));
//[ '0', '1', '2', '3', 'first', 'second', 'third' ]
console.log(Object.getOwnPropertySymbols(o));
//[ Symbol(k1), Symbol(k2) ]
```

### 2.5 对象迭代

#### Object.values()和 Object.entries()

在 JavaScript 有史以来的大部分时间内，迭代对象属性都是一个难题。ECMAScript 2017 新增了两 个静态方法，用于将对象内容转换为序列化的——更重要的是可迭代的——格式。这两个静态方法 Object.values()和 Object.entries()接收一个对象，返回它们内容的数组。Object.values() 返回对象值的数组，Object.entries()返回键/值对的数组。

```js
const o={
    foo:"bar",
    baz:1,
    qux:{}
}

console.log(Object.keys(o));  //[ 'foo', 'baz', 'qux' ]
console.log(Object.values(o));  //[ 'bar', 1, {} ]
console.log(Object.entries(o));  //[ [ 'foo', 'bar' ], [ 'baz', 1 ], [ 'qux', {} ] ]
```

注意，非字符串属性会被转换为字符串输出。另外，这两个方法执行对象的浅复制：

```js
const o = {
qux: {}
};
console.log(Object.values(o)[0] === o.qux);
// true
console.log(Object.entries(o)[0][1] === o.qux);
// true
```

符号属性会被忽略：

```js
const sym = Symbol();
const o = {
[sym]: 'foo'
};
console.log(Object.values(o));
// []
console.log(Object.entries((o)));
// []
```

#### 其他原型语法

在前面的例子中，每次定义一个属性或方法都会把 Person.prototype 重写一遍。为了减少代码冗余，也为了从视觉上更好地封装原型功能，直接通过一个包含所有属性和方法的对象字面量来重写原型成为了一种常见的做法，如下面的例子所示：

```js
function Person(){}

Person.prototype={
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    }
};
```

在这个例子中，Person.prototype 被设置为等于一个通过对象字面量创建的新对象。最终结果 是一样的，只有一个问题：这样重写之后，Person.prototype 的 constructor 属性就不指向 Person 了。在创建函数时，也会创建它的 prototype 对象，同时会自动给这个原型的 constructor 属性赋 值。而上面的写法完全重写了默认的 prototype 对象，因此其 constructor 属性也指向了完全不同 的新对象（Object 构造函数），不再指向原来的构造函数。虽然 instanceof 操作符还能可靠地返回 值，但我们不能再依靠 constructor 属性来识别类型了，如下面的例子所示：

```js
let friend = new Person();
console.log(friend instanceof Object); // true
console.log(friend instanceof Person); // true
console.log(friend.constructor == Person); // false
console.log(friend.constructor == Object); // true
```

这里，instanceof 仍然对Object 和Person 都返回true。但constructor 属性现在等于Object而不是 Person 了。如果 constructor 的值很重要，则可以像下面这样在重写原型对象时专门设置一下它的值：

```js
function Person(){}

Person.prototype={
    constructor:Person,
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    }
};

let friend = new Person();
console.log(friend instanceof Object); // true
console.log(friend instanceof Person); // true
console.log(friend.constructor == Person); // true
console.log(friend.constructor == Object); // false
```

这次的代码中特意包含了 constructor 属性，并将它设置为 Person，保证了这个属性仍然包含 恰当的值。 

但要注意，以这种方式恢复 constructor 属性会创建一个[[Enumerable]]为 true 的属性。而 原生 constructor 属性默认是不可枚举的。因此，如果你使用的是兼容 ECMAScript 的 JavaScript 引擎， 那可能会改为使用 Object.defineProperty()方法来定义 constructor 属性：

```js
function Person(){}

Person.prototype={
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    }
};

Object.defineProperty(Person.prototype,"constructor",{
    enumerable:false,
    value:Person
});

let friend = new Person();
console.log(friend instanceof Object); // true
console.log(friend instanceof Person); // true
console.log(friend.constructor == Person); // true
console.log(friend.constructor == Object); // false
```

#### 原型的动态性

因为从原型上搜索值的过程是动态的，所以即使实例在修改原型之前已经存在，任何时候对原型对象所做的修改也会在实例上反映出来。下面是一个例子：

```js
let friend = new Person();
Person.prototype.sayHi = function() {
console.log("hi");
};
friend.sayHi(); // "hi"，没问题！
```

以上代码先创建一个 Person 实例并保存在 friend 中。然后一条语句在 Person.prototype 上 添加了一个名为 sayHi()的方法。虽然 friend 实例是在添加方法之前创建的，但它仍然可以访问这个方法。之所以会这样，主要原因是实例与原型之间松散的联系。在调用 friend.sayHi()时，首先会从 这个实例中搜索名为 sayHi 的属性。在没有找到的情况下，运行时会继续搜索原型对象。因为实例和 原型之间的链接就是简单的指针，而不是保存的副本，所以会在原型上找到 sayHi 属性并返回这个属 性保存的函数。

虽然随时能给原型添加属性和方法，并能够立即反映在所有对象实例上，但这跟重写整个原型是两 回事。实例的[[Prototype]]指针是在调用构造函数时自动赋值的，这个指针即使把原型修改为不同 的对象也不会变。重写整个原型会切断最初原型与构造函数的联系，但实例引用的仍然是最初的原型。 记住，实例只有指向原型的指针，没有指向构造函数的指针。来看下面的例子：

```js
function Person() {}
let friend = new Person();
Person.prototype = {
constructor: Person,
name: "Nicholas",
age: 29,
job: "Software Engineer",
sayName() {
console.log(this.name);
}
};
friend.sayName(); // 错误
```

在这个例子中，Person 的新实例是在重写原型对象之前创建的。在调用 friend.sayName()的时候，会导致错误。这是因为 firend 指向的原型还是最初的原型，而这个原型上并没有 sayName 属性。

重写构造函数上的原型之后再创建的实例才会引用新的原型。而在此之前创建的实例仍然会引用最初的原型。

#### 原生对象原型

原型模式之所以重要，不仅体现在自定义类型上，而且还因为它也是实现所有原生引用类型的模式。 所有原生引用类型的构造函数（包括 Object、Array、String 等）都在原型上定义了实例方法。比如， 数组实例的 sort()方法就是 Array.prototype 上定义的，而字符串包装对象的 substring()方法也 是在 String.prototype 上定义的，如下所示：

```js
console.log(typeof Array.prototype.sort); // "function"
console.log(typeof String.prototype.substring); // "function"
```

通过原生对象的原型可以取得所有默认方法的引用，也可以给原生类型的实例定义新的方法。可以像修改自定义对象原型一样修改原生对象原型，因此随时可以添加方法。比如，下面的代码就给 String原始值包装类型的实例添加了一个 startsWith()方法：

```js
String.prototype.startsWith=function(text){
    return this.indexOf(text)===0;
}

let str="goldenrod";
console.log(str.startsWith("og"));  //false
```

如果给定字符串的开头出现了调用 startsWith()方法的文本，那么该方法会返回 true。因为这 个方法是被定义在 String.prototype 上，所以当前环境下所有的字符串都可以使用这个方法。msg 是个字符串，在读取它的属性时，后台会自动创建 String 的包装实例，从而找到并调用 startsWith() 方法。

**注意** 尽管可以这么做，但并不推荐在产品环境中修改原生对象原型。这样做很可能造成 误会，而且可能引发命名冲突（比如一个名称在某个浏览器实现中不存在，在另一个实现 中却存在）。另外还有可能意外重写原生的方法。推荐的做法是创建一个自定义的类，继 承原生类型。

#### 原型的问题

原型模式也不是没有问题。**首先，它弱化了向构造函数传递初始化参数的能力，会导致所有实例默 认都取得相同的属性值**。虽然这会带来不便，但还不是原型的最大问题。**原型的最主要问题源自它的共 享特性**。 

我们知道，原型上的所有属性是在实例间共享的，这对函数来说比较合适。另外包含原始值的属性 也还好，如前面例子中所示，可以通过在实例上添加同名属性来简单地遮蔽原型上的属性。**真正的问题 来自包含引用值的属性**。来看下面的例子：

```js
function Person() {}
Person.prototype = {
    constructor: Person,
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    friends: ["Shelby", "Court"],
    sayName() {
        console.log(this.name);
    }
};

let person1 = new Person();
let person2 = new Person();
person1.friends.push("Van");
console.log(person1.friends); // "Shelby,Court,Van"
console.log(person2.friends); // "Shelby,Court,Van"
console.log(person1.friends === person2.friends); // true
```

这里，Person.prototype 有一个名为 friends 的属性，它包含一个字符串数组。然后这里创建 了两个 Person 的实例。person1.friends 通过 push 方法向数组中添加了一个字符串。由于这个 friends 属性存在于 Person.prototype 而非 person1 上，新加的这个字符串也会在（指向同一个 数组的）person2.friends 上反映出来。如果这是有意在多个实例间共享数组，那没什么问题。**但一 般来说，不同的实例应该有属于自己的属性副本。这就是实际开发中通常不单独使用原型模式的原因。**

## 3 继承

继承是面向对象编程中讨论最多的话题。很多面向对象语言都支持两种继承：接口继承和实现继承。前者只继承方法签名，后者继承实际的方法。接口继承在 ECMAScript 中是不可能的，因为函数没有签名。实现继承是 ECMAScript 唯一支持的继承方式，而这主要是通过原型链实现的。

### 3.1 原型链

#### 基本思想

ECMA-262 把原型链定义为 ECMAScript 的主要继承方式。其基本思想就是通过原型继承多个引用 类型的属性和方法。重温一下构造函数、原型和实例的关系：每个构造函数都有一个原型对象，原型有 一个属性指回构造函数，而实例有一个内部指针指向原型。如果原型是另一个类型的实例呢？那就意味 着这个原型本身有一个内部指针指向另一个原型，相应地另一个原型也有一个指针指向另一个构造函 数。这样就在实例和原型之间构造了一条原型链。这就是原型链的基本构想。

实现原型链涉及如下代码模式：

```js
function SuperType(){
    this.property=true;
}
SuperType.prototype.getSuperValue=function(){
    return this.property;
};

function SubType(){
    this.subproperty=false;
}
// 继承 SuperType
SubType.prototype=new SuperType();
SubType.prototype.getSubValue=function(){
    return this.subproperty;
};

let instance=new SubType();
console.log(instance.getSuperValue());  //true
```

以上代码定义了两个类型：SuperType 和 SubType。这两个类型分别定义了一个属性和一个方法。 这两个类型的主要区别是 SubType 通过创建 SuperType 的实例并将其赋值给自己的原型 SubTtype. prototype 实现了对 SuperType 的继承。这个赋值重写了 SubType 最初的原型，将其替换为 SuperType 的实例。这意味着 SuperType 实例可以访问的所有属性和方法也会存在于 SubType. prototype。这样实现继承之后，代码紧接着又给 SubType.prototype，也就是这个 SuperType 的 实例添加了一个新方法。最后又创建了 SubType 的实例并调用了它继承的 getSuperValue()方法。 图 8-4 展示了子类的实例与两个构造函数及其对应的原型之间的关系。

![原型链继承关系](E:\pogject\学习笔记\image\js\原型链继承关系.png)

这个例子中实现继承的关键，是 SubType 没有使用默认原型，而是将其替换成了一个新的对象。这个 新的对象恰好是 SuperType 的实例。这样一来，SubType 的实例不仅能从 SuperType 的实例中继承属性 和方法，而且还与 SuperType 的原型挂上了钩。于是 instance（通过内部的[[Prototype]]）指向 SubType.prototype，而 SubType.prototype（作为 SuperType 的实例又通过内部的[[Prototype]]） 指向 SuperType.prototype。注意，getSuperValue()方法还在 SuperType.prototype 对象上， 而 property 属性则在 SubType.prototype 上。这是因为 getSuperValue()是一个原型方法，而 property 是一个实例属性。SubType.prototype 现在是 SuperType 的一个实例，因此 property 才会存储在它上面。还要注意，由于 SubType.prototype 的 constructor 属性被重写为指向 SuperType，所以 instance.constructor 也指向 SuperType。 

原型链扩展了前面描述的原型搜索机制。我们知道，在读取实例上的属性时，首先会在实例上搜索 这个属性。如果没找到，则会继承搜索实例的原型。在通过原型链实现继承之后，搜索就可以继承向上， 搜索原型的原型。对前面的例子而言，调用 instance.getSuperValue()经过了 3 步搜索：instance、 SubType.prototype 和 SuperType.prototype，最后一步才找到这个方法。对属性和方法的搜索会 一直持续到原型链的末端。

#### 默认原型

实际上，原型链中还有一环。默认情况下，所有引用类型都继承自 Object，这也是通过原型链实现的。任何函数的默认原型都是一个 Object 的实例，这意味着这个实例有一个内部指针指向Object.prototype。这也是为什么自定义类型能够继承包括 toString()、valueOf()在内的所有默认方法的原因。因此前面的例子还有额外一层继承关系。图 8-5 展示了完整的原型链。

![完整的原型链](E:\pogject\学习笔记\image\js\完整的原型链.png)

SubType 继承 SuperType，而 SuperType 继承 Object。在调用 instance.toString()时，实际上调用的是保存在 Object.prototype 上的方法。

#### 原型与继承关系

##### instanceof 操作符

原型与实例的关系可以通过两种方式来确定。第一种方式是使用 instanceof 操作符，如果一个实例的原型链中出现过相应的构造函数，则 instanceof 返回 true。如下例所示：

```js
console.log(instance instanceof Object);  // true
console.log(instance instanceof SuperType);  // true
console.log(instance instanceof SubType);  // true
```

从技术上讲，instance 是 Object、SuperType 和 SubType 的实例，因为 instance 的原型链中包含这些构造函数的原型。结果就是 instanceof 对所有这些构造函数都返回 true。

##### isPrototypeOf()方法

确定这种关系的第二种方式是使用 isPrototypeOf()方法。原型链中的每个原型都可以调用这个方法，如下例所示，只要原型链中包含这个原型，这个方法就返回 true：

```js
console.log(Object.prototype.isPrototypeOf(instance)); // true
console.log(SuperType.prototype.isPrototypeOf(instance)); // true
console.log(SubType.prototype.isPrototypeOf(instance)); // true
```

#### 关于方法

子类有时候需要覆盖父类的方法，或者增加父类没有的方法。为此，这些方法必须在原型赋值之后再添加到原型上。来看下面的例子：

```js
function SuperType(){
    this.property=true;
}
SuperType.prototype.getSuperValue=function(){
    return this.property;
};

function SubType(){
    this.subproperty=false;
}
// 继承 SuperType
SubType.prototype=new SuperType();
// 新方法
SubType.prototype.getSubValue=function(){
    return this.subproperty;
};
// 覆盖已有的方法
SubType.prototype.getSuperValue=function(){
    return false;
}

let instance=new SubType();
console.log(instance.getSuperValue());  //false

```

在上面的代码中，加粗的部分涉及两个方法。第一个方法 getSubValue()是 SubType 的新方法， 而第二个方法 getSuperValue()是原型链上已经存在但在这里被遮蔽的方法。后面在 SubType 实例 上调用 getSuperValue()时调用的是这个方法。而 SuperType 的实例仍然会调用最初的方法。重点 在于上述两个方法都是在把原型赋值为 SuperType 的实例之后定义的。 

另一个要理解的重点是，以对象字面量方式创建原型方法会破坏之前的原型链，因为这**相当于重写 了原型链**。下面是一个例子：

```js
function SuperType(){
    this.property=true;
}
SuperType.prototype.getSuperValue=function(){
    return this.property;
};

function SubType(){
    this.subproperty=false;
}
// 继承 SuperType
SubType.prototype=new SuperType();

// 通过对象字面量添加新方法，这会导致上一行无效
SubType.prototype = {
    getSubValue() {
        return this.subproperty;
    },
    someOtherMethod() {
        return false;
    }
};

let instance=new SubType();
console.log(instance.getSuperValue());  //出错！

```

在这段代码中，子类的原型在被赋值为 SuperType 的实例后，又被一个对象字面量覆盖了。覆盖后的原型是一个 Object 的实例，而不再是 SuperType 的实例。因此之前的原型链就断了。SubType和 SuperType 之间也没有关系了。

#### 原型链的问题

原型链虽然是实现继承的强大工具，但它也有问题。**主要问题出现在原型中包含引用值的时候**。前 面在谈到原型的问题时也提到过，原型中包含的引用值会在所有实例间共享，这也是为什么属性通常会 在构造函数中定义而不会定义在原型上的原因。在使用原型实现继承时，原型实际上变成了另一个类型 的实例。这意味着原先的实例属性摇身一变成为了原型属性。下面的例子揭示了这个问题：

```js
function SuperType() {
	this.colors = ["red", "blue", "green"];
}
function SubType() {}
// 继承 SuperType
SubType.prototype = new SuperType();
let instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors); // "red,blue,green,black"
let instance2 = new SubType();
console.log(instance2.colors); // "red,blue,green,black"
```

在这个例子中，SuperType 构造函数定义了一个 colors 属性，其中包含一个数组（引用值）。每 个 SuperType 的实例都会有自己的 colors 属性，包含自己的数组。但是，当 SubType 通过原型继承 SuperType 后，SubType.prototype 变成了 SuperType 的一个实例，因而也获得了自己的 colors 属性。这类似于创建了 SubType.prototype.colors 属性。最终结果是，SubType 的所有实例都会 共享这个 colors 属性。这一点通过 instance1.colors 上的修改也能反映到 instance2.colors 上就可以看出来。 

原型链的**第二个问题是，子类型在实例化时不能给父类型的构造函数传参**。事实上，我们无法在不 影响所有对象实例的情况下把参数传进父类的构造函数。再加上之前提到的原型中包含引用值的问题， 就导致原型链基本不会被单独使用。

### 3.2 盗用构造函数

为了解决原型包含引用值导致的继承问题，一种叫作“**盗用构造函数**”（constructor stealing）的技 术在开发社区流行起来（这种技术有时也称作“对象伪装”或“经典继承”）。基本思路很简单：在子类 构造函数中调用父类构造函数。因为毕竟函数就是在特定上下文中执行代码的简单对象，所以可以使用 apply()和 call()方法以新创建的对象为上下文执行构造函数。来看下面的例子：

```js
function SuperType() {
    this.colors = ["red", "blue", "green"];
}
function SubType() {
    // 继承 SuperType
    SuperType.call(this);
}

let instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors); // [ 'red', 'blue', 'green', 'black' ]
let instance2 = new SubType();
console.log(instance2.colors); // [ 'red', 'blue', 'green' ]
```

示例中加粗的代码展示了盗用构造函数的调用。通过使用 call()（或 apply()）方法，SuperType构造函数在为 SubType 的实例创建的新对象的上下文中执行了。这相当于新的 SubType 对象上运行了SuperType()函数中的所有初始化代码。结果就是每个实例都会有自己的 colors 属性。

#### **传递参数**

相比于使用原型链，盗用构造函数的一个优点就是可以在子类构造函数中向父类构造函数传参。来看下面的例子：

```js
function SuperType(name) {
    this.name=name;
}
function SubType() {
    // 继承 SuperType并传参
    SuperType.call(this,"Arnold");
    // 实例属性
    this.age = 23;
}

let instance1 = new SubType();
console.log(instance1.name); //Arnold
console.log(instance1.age); //23

```

在这个例子中，SuperType 构造函数接收一个参数 name，然后将它赋值给一个属性。在 SubType 构造函数中调用 SuperType 构造函数时传入这个参数，实际上会在 SubType 的实例上定义 name 属性。 为确保 SuperType 构造函数不会覆盖 SubType 定义的属性，可以在调用父类构造函数之后再给子类实 例添加额外的属性。

#### **盗用构造函数的问题**

盗用构造函数的**主要缺点，也是使用构造函数模式自定义类型的问题**：必须在构造函数中定义方法，因此函数不能重用。此外，子类也不能访问父类原型上定义的方法，因此所有类型只能使用构造函数模式。由于存在这些问题，盗用构造函数基本上也不能单独使用。

### 3.3 组合继承

**组合继承**（有时候也叫伪经典继承）综合了原型链和盗用构造函数，将两者的优点集中了起来。基本的思路是使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。这样既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性。来看下面的例子：

```js
function SuperType(name) {
    this.name=name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName=function(){
    console.log(this.name);
};

function SubType(name,age) {
    // 继承属性
    SuperType.call(this,name);
    this.age=age;
}

//继承方法
SubType.prototype=new SuperType();

SubType.prototype.sayAge=function(){
    console.log(this.age);
};

let instance1 = new SubType("Arnold",23);
instance1.colors.push("black");
console.log(instance1.colors); // [ 'red', 'blue', 'green', 'black' ]
instance1.sayName();  //Arnold
instance1.sayAge();  //23
let instance2 = new SubType("mane",29);
console.log(instance2.colors); // [ 'red', 'blue', 'green' ]
instance2.sayName();  //mane
instance2.sayAge();  //29
```

在这个例子中，SuperType 构造函数定义了两个属性，name 和 colors，而它的原型上也定义了 一个方法叫 sayName()。SubType 构造函数调用了 SuperType 构造函数，传入了 name 参数，然后又 定义了自己的属性 age。此外，SubType.prototype 也被赋值为 SuperType 的实例。原型赋值之后， 又在这个原型上添加了新方法 sayAge()。这样，就可以创建两个 SubType 实例，让这两个实例都有 自己的属性，包括 colors，同时还共享相同的方法。 

组合继承弥补了原型链和盗用构造函数的不足，是 JavaScript 中使用最多的继承模式。而且组合继 承也保留了 instanceof 操作符和 isPrototypeOf()方法识别合成对象的能力。

### 3.4 原型式继承

2006 年，Douglas Crockford 写了一篇文章：《JavaScript 中的原型式继承》（“Prototypal Inheritance inJavaScript”）。这篇文章介绍了一种不涉及严格意义上构造函数的继承方法。他的出发点是即使不自定义类型也可以通过原型实现对象之间的信息共享。文章最终给出了一个函数：

```js
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}
```

这个 object()函数会创建一个临时构造函数，将传入的对象赋值给这个构造函数的原型，然后返回这个临时类型的一个实例。本质上，object()是对传入的对象执行了一次浅复制。来看下面的例子：

```js
let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

let anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

let yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");
console.log(person.friends); // "Shelby,Court,Van,Rob,Barbie"
```

Crockford 推荐的原型式继承适用于这种情况：**你有一个对象，想在它的基础上再创建一个新对象。 你需要把这个对象先传给 object()，然后再对返回的对象进行适当修改**。在这个例子中，person 对 象定义了另一个对象也应该共享的信息，把它传给 object()之后会返回一个新对象。这个新对象的原型 是 person，意味着它的原型上既有原始值属性又有引用值属性。这也意味着 person.friends 不仅是 person 的属性，也会跟 anotherPerson 和 yetAnotherPerson 共享。这里实际上克隆了两个 person。

 ECMAScript 5 通过增加 **Object.create()方法**将原型式继承的概念规范化了。这个方法接收两个 参数：作为新对象原型的对象，以及给新对象定义额外属性的对象（第二个可选）。在只有一个参数时， Object.create()与这里的 object()方法效果相同：

```js
let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

let anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

let yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");
console.log(person.friends); // "Shelby,Court,Van,Rob,Barbie"
```

Object.create()的第二个参数与 Object.defineProperties()的第二个参数一样：每个新增属性都通过各自的描述符来描述。以这种方式添加的属性会遮蔽原型对象上的同名属性。比如：

```js
let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};
let anotherPerson = Object.create(person, {
    name: {
        value: "Greg"
    }
});
console.log(anotherPerson.name); // "Greg"
```

原型式继承**非常适合不需要单独创建构造函数**，**但仍然需要在对象间共享信息的场合**。但要记住，属性中包含的引用值始终会在相关对象间共享，跟使用原型模式是一样的。

### 3.5 寄生式继承

与原型式继承比较接近的一种继承方式是寄生式继承（parasitic inheritance），也是 Crockford 首倡的一种模式。寄生式继承背后的思路类似于寄生构造函数和工厂模式：创建一个实现继承的函数，以某种方式增强对象，然后返回这个对象。基本的寄生继承模式如下：

```js
function object(o){
    function F(){}
    F.prototype=o;
    return new F();
}

function createAnother(original){
    let clone=object(original);  // 通过调用函数创建一个新对象
    clone.sayHi=function(){  // 以某种方式增强这个对象
        console.log("hi");
    };
    return clone;  // 返回这个对象
}
```

在这段代码中，createAnother()函数接收一个参数，就是新对象的基准对象。这个对象 original会被传给 object()函数，然后将返回的新对象赋值给 clone。接着给 clone 对象添加一个新方法sayHi()。最后返回这个对象。可以像下面这样使用 createAnother()函数：

```js
let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};
let anotherPerson = createAnother(person);
anotherPerson.sayHi(); // "hi"
```

这个例子基于 person 对象返回了一个新对象。新返回的 anotherPerson 对象具有 person 的所 有属性和方法，还有一个新方法叫 sayHi()。 

寄生式继承同样适合主要关注对象，而不在乎类型和构造函数的场景。object()函数不是寄生式 继承所必需的，任何返回新对象的函数都可以在这里使用。 

**注意** 通过寄生式继承给对象添加函数会导致函数难以重用，与构造函数模式类似。

### 3.6 寄生式组合继承

组合继承其实也存在效率问题。最主要的效率问题就是父类构造函数始终会被调用两次：一次在是创建子类原型时调用，另一次是在子类构造函数中调用。本质上，子类原型最终是要包含超类对象的所有实例属性，子类构造函数只要在执行时重写自己的原型就行了。再来看一看这个组合继承的例子：

```js
function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function() {
    console.log(this.name);
};
function SubType(name, age){
    SuperType.call(this, name); // 第二次调用 SuperType()
    this.age = age;
}
SubType.prototype = new SuperType(); // 第一次调用 SuperType()
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
    console.log(this.age);
};
```

代码中加粗的部分是调用 SuperType 构造函数的地方。在上面的代码执行后，SubType.prototype上会有两个属性：name 和 colors。它们都是 SuperType 的实例属性，但现在成为了 SubType 的原型属性。在调用 SubType 构造函数时，也会调用 SuperType 构造函数，这一次会在新对象上创建实例属性 name 和 colors。这两个实例属性会遮蔽原型上同名的属性。

有两组 name 和 colors 属性：一组在实例上，另一组在 SubType 的原型上。这是调用两次 SuperType 构造函数的结果。好在有办法解决这个问题。

寄生式组合继承通过盗用构造函数继承属性，但使用混合式原型链继承方法。基本思路是不通过调用父类构造函数给子类原型赋值，而是取得父类原型的一个副本。说到底就是使用寄生式继承来继承父类原型，然后将返回的新对象赋值给子类原型。寄生式组合继承的基本模式如下所示：

```js
function inheritPrototype(subType, superType) {
    let prototype = object(superType.prototype); // 创建对象
    prototype.constructor = subType; // 增强对象
    subType.prototype = prototype; // 赋值对象
}
```

这个 inheritPrototype()函数实现了寄生式组合继承的核心逻辑。这个函数接收两个参数：子 类构造函数和父类构造函数。在这个函数内部，第一步是创建父类原型的一个副本。然后，给返回的 prototype 对象设置 constructor 属性，解决由于重写原型导致默认 constructor 丢失的问题。最 后将新创建的对象赋值给子类型的原型。如下例所示，调用 inheritPrototype()就可以实现前面例 子中的子类型原型赋值：

```js
function object(o){
    function F(){}
    F.prototype=o;
    return new F();
}

function inheritPrototype(subType, superType) {
    let prototype = object(superType.prototype); // 创建对象
    prototype.constructor = subType; // 增强对象
    subType.prototype = prototype; // 赋值对象
}

function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function() {
    console.log(this.name);
};
function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function() {
    console.log(this.age);
};

let instance1 = new SubType("Arnold",23);
instance1.colors.push("black");
console.log(instance1.colors); // [ 'red', 'blue', 'green', 'black' ]
instance1.sayName();  //Arnold
instance1.sayAge();  //23
```

这里只调用了一次 SuperType 构造函数，避免了 SubType.prototype 上不必要也用不到的属性，因此可以说这个例子的效率更高。而且，原型链仍然保持不变，因此 instanceof 操作符和isPrototypeOf()方法正常有效。寄生式组合继承可以算是引用类型继承的最佳模式。





# 迭代器与生成器

## 1 理解迭代

迭代的英文“iteration”源自拉丁文 itero，意思是“重复”或“再来”。在软件开发领域，“迭代”的意思是按照顺序反复多次执行一段程序，通常会有明确的终止条件。ECMAScript 6 规范新增了两个高级特性：迭代器和生成器。使用这两个特性，能够更清晰、高效、方便地实现迭代。

在 JavaScript 中，计数循环就是一种最简单的迭代：

```js
for (let i = 1; i <= 10; ++i) {
	console.log(i);
}
```

**循环是迭代机制的基础**，这是因为它可以指定迭代的次数，以及每次迭代要执行什么操作。每次循环都会在下一次迭代开始之前完成，而每次迭代的顺序都是事先定义好的。

**迭代会在一个有序集合上进行**。（“有序”可以理解为集合中所有项都可以按照既定的顺序被遍历到，特别是开始和结束项有明确的定义。）数组是 JavaScript 中有序集合的最典型例子。

```js
let collection = ['foo', 'bar', 'baz'];
for (let index = 0; index < collection.length; ++index) {
	console.log(collection[index]);
}
```

因为数组有已知的长度，且数组每一项都可以通过索引获取，所以整个数组可以通过递增索引来遍历。

由于如下原因，通过这种循环来执行例程并不理想。

- **迭代之前需要事先知道如何使用数据结构**。数组中的每一项都只能先通过引用取得数组对象，然后再通过[]操作符取得特定索引位置上的项。这种情况并不适用于所有数据结构。
- **遍历顺序并不是数据结构固有的**。通过递增索引来访问数据是特定于数组类型的方式，并不适用于其他具有隐式顺序的数据结构。

ES5 新增了 Array.prototype.forEach()方法，向通用迭代需求迈进了一步（但仍然不够理想）：

```js
let collection = ['foo', 'bar', 'baz'];
collection.forEach((item) => console.log(item));
```

这个方法解决了单独记录索引和通过数组对象取得值的问题。不过，没有办法标识迭代何时终止。 因此这个方法只适用于数组，而且回调结构也比较笨拙。

 在 ECMAScript 较早的版本中，执行迭代必须使用循环或其他辅助结构。随着代码量增加，代码会 变得越发混乱。很多语言都通过原生语言结构解决了这个问题，开发者无须事先知道如何迭代就能实现 迭代操作。这个解决方案就是迭代器模式。Python、Java、C++，还有其他很多语言都对这个模式提供 了完备的支持。JavaScript 在 ECMAScript 6 以后也支持了迭代器模式。

## 2 迭代器模式

### 2.0 可迭 代对象

迭代器模式（特别是在 ECMAScript 这个语境下）描述了一个方案，**即可以把有些结构称为“可迭 代对象”（iterable）**，因为它们实现了正式的 Iterable 接口，而且可以通过迭代器 Iterator 消费。 

可迭代对象是一种抽象的说法。基本上，可以把可迭代对象理解成数组或集合这样的集合类型的对 象。它们包含的元素都是有限的，而且都具有无歧义的遍历顺序：

```js
// 数组的元素是有限的
// 递增索引可以按序访问每个元素
let arr = [3, 1, 4];
// 集合的元素是有限的
// 可以按插入顺序访问每个元素
let set = new Set().add(3).add(1).add(4);
```

不过，可迭代对象不一定是集合对象，也可以是仅仅具有类似数组行为的其他数据结构，比如本章 开头提到的计数循环。该循环中生成的值是暂时性的，但循环本身是在执行迭代。计数循环和数组都具 有可迭代对象的行为。

**注意** 临时性可迭代对象可以实现为生成器

任何实现 Iterable 接口的数据结构都可以被实现 Iterator 接口的结构“消费”（consume）。**迭 代器（iterator）是按需创建的一次性对象**。每个迭代器都会关联一个可迭代对象，而迭代器会暴露迭代 其关联可迭代对象的 API。迭代器无须了解与其关联的可迭代对象的结构，只需要知道如何取得连续的 值。这种概念上的分离正是 Iterable 和 Iterator 的强大之处。

### 2.1 可迭代协议

实现 Iterable 接口（可迭代协议）要求同时具备两种能力：**支持迭代的自我识别能力**和**创建实现 Iterator 接口的对象的能力**。在 ECMAScript 中，这意味着必须暴露一个属性作为“默认迭代器”，而 且这个属性必须使用特殊的 Symbol.iterator 作为键。这个默认迭代器属性必须引用一个迭代器工厂 函数，调用这个工厂函数必须返回一个新迭代器。 

很多内置类型都实现了 Iterable 接口： 字符串 、数组 、映射 、集合 、arguments 对象 、NodeList 等 DOM 集合类型

检查是否存在默认迭代器属性可以暴露这个**工厂函数**：

```js
let num = 1;
let obj = {};
// 这两种类型没有实现迭代器工厂函数
console.log(num[Symbol.iterator]); // undefined
console.log(obj[Symbol.iterator]); // undefined
let str = 'abc';
let arr = ['a', 'b', 'c'];
let map = new Map().set('a', 1).set('b', 2).set('c', 3);
let set = new Set().add('a').add('b').add('c');
let els = document.querySelectorAll('div');
// 这些类型都实现了迭代器工厂函数
console.log(str[Symbol.iterator]); // f values() { [native code] }
console.log(arr[Symbol.iterator]); // f values() { [native code] }
console.log(map[Symbol.iterator]); // f values() { [native code] }
console.log(set[Symbol.iterator]); // f values() { [native code] }
console.log(els[Symbol.iterator]); // f values() { [native code] }
// 调用这个工厂函数会生成一个迭代器
console.log(str[Symbol.iterator]()); // StringIterator {}
console.log(arr[Symbol.iterator]()); // ArrayIterator {}
console.log(map[Symbol.iterator]()); // MapIterator {}
console.log(set[Symbol.iterator]()); // SetIterator {}
console.log(els[Symbol.iterator]()); // ArrayIterator {}
```

实际写代码过程中，不需要显式调用这个工厂函数来生成迭代器。实现可迭代协议的所有类型都会自动兼容接收可迭代对象的任何语言特性。接收可迭代对象的原生语言特性包括：

- for-of 循环
- 数组解构
- 扩展操作符
- Array.from()
- 创建集合
- 创建映射
- Promise.all()接收由期约组成的可迭代对象
- Promise.race()接收由期约组成的可迭代对象
- yield*操作符，在生成器中使用

这些原生语言结构会在后台调用提供的可迭代对象的这个工厂函数，从而创建一个迭代器：

```js
let arr = ['foo', 'bar', 'baz'];

// for-of 循环
for (let el of arr) {
    console.log(el);
}

// 数组解构
let [a, b, c] = arr;
console.log(a, b, c); // foo, bar, baz

// 扩展操作符
let arr2 = [...arr];
console.log(arr2); // ['foo', 'bar', 'baz']

// Array.from()
let arr3 = Array.from(arr);
console.log(arr3); // ['foo', 'bar', 'baz']

// Set 构造函数
let set = new Set(arr);
console.log(set); // Set(3) {'foo', 'bar', 'baz'}

// Map 构造函数
let pairs = arr.map((x, i) => [x, i]);
console.log(pairs); // [['foo', 0], ['bar', 1], ['baz', 2]]

let map = new Map(pairs);
console.log(map); // Map(3) { 'foo'=>0, 'bar'=>1, 'baz'=>2 }
```

如果对象原型链上的父类实现了 Iterable 接口，那这个对象也就实现了这个接口：

```js
class FooArray extends Array {}
let fooArr = new FooArray('foo', 'bar', 'baz');
for (let el of fooArr) {
	console.log(el);
}
```

### 2.2 迭代器协议

迭代器是一种一次性使用的对象，用于迭代与其关联的可迭代对象。迭代器 API 使用 next()方法 在可迭代对象中遍历数据。每次成功调用 next()，都会返回一个 IteratorResult 对象，其中包含迭 代器返回的下一个值。若不调用 next()，则无法知道迭代器的当前位置。 

next()方法返回的迭代器对象 IteratorResult 包含两个属性：**done 和 value**。done 是一个布 尔值，表示是否还可以再次调用 next()取得下一个值；value 包含可迭代对象的下一个值（done 为 false），或者 undefined（done 为 true）。**done: true 状态称为“耗尽”**。可以通过以下简单的数 组来演示：

```js
// 可迭代对象
let arr = ['foo', 'bar'];
// 迭代器工厂函数
console.log(arr[Symbol.iterator]); // f values() { [native code] }
// 迭代器
let iter = arr[Symbol.iterator]();
console.log(iter); // ArrayIterator {}
// 执行迭代
console.log(iter.next()); // { done: false, value: 'foo' }
console.log(iter.next()); // { done: false, value: 'bar' }
console.log(iter.next()); // { done: true, value: undefined }
```

这里通过创建迭代器并调用 next()方法按顺序迭代了数组，直至不再产生新值。**迭代器并不知道怎么从可迭代对象中取得下一个值，也不知道可迭代对象有多大。只要迭代器到达 done: true 状态，后续调用 next()就一直返回同样的值了**：

```js
let arr = ['foo'];
let iter = arr[Symbol.iterator]();
console.log(iter.next()); // { done: false, value: 'foo' }
console.log(iter.next()); // { done: true, value: undefined }
console.log(iter.next()); // { done: true, value: undefined }
console.log(iter.next()); // { done: true, value: undefined }
```

每个迭代器都表示对可迭代对象的一次性有序遍历。**不同迭代器的实例相互之间没有联系**，只会独立地遍历可迭代对象：

```js
let arr = ['foo', 'bar'];
let iter1 = arr[Symbol.iterator]();
let iter2 = arr[Symbol.iterator]();
console.log(iter1.next()); // { done: false, value: 'foo' }
console.log(iter2.next()); // { done: false, value: 'foo' }
console.log(iter2.next()); // { done: false, value: 'bar' }
console.log(iter1.next()); // { done: false, value: 'bar' }
```

迭代器并不与可迭代对象某个时刻的快照绑定，而仅仅是使用游标来记录遍历可迭代对象的历程。如果可迭代对象在迭代期间被修改了，那么迭代器也会反映相应的变化：

```js
let arr = ['foo', 'baz'];
let iter = arr[Symbol.iterator]();
console.log(iter.next()); // { done: false, value: 'foo' }
// 在数组中间插入值
arr.splice(1, 0, 'bar');
console.log(iter.next()); // { done: false, value: 'bar' }
console.log(iter.next()); // { done: false, value: 'baz' }
console.log(iter.next()); // { done: true, value: undefined }
```

**注意** 迭代器维护着一个指向可迭代对象的引用，因此迭代器会阻止垃圾回收程序回收可迭代对象。

迭代器”的概念有时候容易模糊，因为它可以指通用的迭代，也可以指接口，还可以指正式的迭代器类型。下面的例子比较了一个显式的迭代器实现和一个原生的迭代器实现。

```js
// 这个类实现了可迭代接口（Iterable）
// 调用默认的迭代器工厂函数会返回
// 一个实现迭代器接口（Iterator）的迭代器对象
class Foo {
    [Symbol.iterator]() {
        return {
            next() {
                return { done: false, value: 'foo' };
            }
        }
    }
}
let f = new Foo();
// 打印出实现了迭代器接口的对象
console.log(f[Symbol.iterator]()); // { next: [Function: next] }
// Array 类型实现了可迭代接口（Iterable）
// 调用 Array 类型的默认迭代器工厂函数
// 会创建一个 ArrayIterator 的实例
let a = new Array();
// 打印出 ArrayIterator 的实例
console.log(a[Symbol.iterator]()); // Object [Array Iterator] {}
```

### 2.3 自定义迭代器

与 Iterable 接口类似，**任何实现 Iterator 接口的对象都可以作为迭代器使用**。下面这个例子中的 Counter 类只能被迭代一定的次数：

```js
class Counter{
    // Counter 的实例应该迭代 limit 次
    constructor(limit){
        this.count=1;
        this.limit=limit;
    }

    next(){
        if (this.count<=this.limit) {
            return {done:false,value:this.count++};
        }else{
            return {done:true,value:undefined};
        }
    }
    [Symbol.iterator](){
        return this;
    }
}

let c1=new Counter(5);
for (let i of c1){
    console.log(i);
}
```

这个类实现了 Iterator 接口，但不理想。这是因为它的每个实例只能被迭代一次：

```js
let c1=new Counter(5);
for (let i of c1){
    console.log(i);  //1,2,3,4,5
}
//没有输出
for (let i of c1){
    console.log(i);
}
```

为了让一个可迭代对象能够创建多个迭代器，必须每创建一个迭代器就对应一个新计数器。为此，**可以把计数器变量放到闭包里，然后通过闭包返回迭代器**：

```js
class Counter{
    // Counter 的实例应该迭代 limit 次
    constructor(limit){
        this.limit=limit;
    }

    
    [Symbol.iterator](){
        let count=1;
        let limit=this.limit;
        return {
            next(){
                if (count<=limit) {
                    return {done:false,value:count++};
                }else{
                    return {done:true,value:undefined};
                }
            }
        };
    }
}

let c1=new Counter(5);
for (let i of c1){
    console.log(i);  //1,2,3,4,5
}

for (let i of c1){
    console.log(i);  //1,2,3,4,5
}
```

**每个以这种方式创建的迭代器也实现了 Iterable 接口**。Symbol.iterator 属性引用的工厂函数会返回相同的迭代器：

```js
let arr = ['foo', 'bar', 'baz'];
let iter1 = arr[Symbol.iterator]();
console.log(iter1[Symbol.iterator]); // f values() { [native code] }
let iter2 = iter1[Symbol.iterator]();
console.log(iter1 === iter2); // true
```

因为每个迭代器也实现了 Iterable 接口，所以它们可以用在任何期待可迭代对象的地方，比如for-of 循环：

```js
let arr = [3, 1, 4];
let iter = arr[Symbol.iterator]();
for (let item of arr ) { console.log(item); }
// 3
// 1
// 4
for (let item of iter ) { console.log(item); }
// 3
// 1
// 4
```

### 2.4 提前终止迭代器

**可选的 return()方法**用于指定在迭代器提前关闭时执行的逻辑。执行迭代的结构在想让迭代器知道它不想遍历到可迭代对象耗尽时，就可以“关闭”迭代器。可能的情况包括：

- for-of 循环通过 break、continue、return 或 throw 提前退出；
- 解构操作并未消费所有值。

**return()方法必须返回一个有效的 IteratorResult 对象**。简单情况下，可以只返回{ done: true }。因为这个返回值只会用在生成器的上下文中，所以本章后面再讨论这种情况。

如下面的代码所示，内置语言结构在发现还有更多值可以迭代，但不会消费这些值时，会自动调用return()方法。

```js
class Counter{
    // Counter 的实例应该迭代 limit 次
    constructor(limit){
        this.limit=limit;
    }

    
    [Symbol.iterator](){
        let count=1;
        let limit=this.limit;
        return {
            next(){
                if (count<=limit) {
                    return {done:false,value:count++};
                }else{
                    return {done:true};
                }
            },
            return(){
                console.log("exiting early");
                return {done:true};
            }
        };
    }
}

let c1=new Counter(5);
for (let i of c1){
    if (i>2) {
        break;
    }
    console.log(i);
}
/*
1
2
exiting early
*/

let c2=new Counter(5);
try{
    for (let i of c2){
        if (i>2) {
            throw "err";
        }
        console.log(i);
    }
}catch(e){}
/*
1
2
exiting early
*/

let c3=new Counter(5);
//解构
let [a,b]=c3;  //exiting early

```

**如果迭代器没有关闭，则还可以继续从上次离开的地方继续迭代**。比如，数组的迭代器就是不能关闭的：

```js
let a = [1, 2, 3, 4, 5];
let iter = a[Symbol.iterator]();
for (let i of iter) {
    console.log(i);
    if (i > 2) {
        break
    }
}
// 1
// 2
// 3
for (let i of iter) {
    console.log(i);
}
// 4
// 5
```

因为 return()方法是可选的，所以**并非所有迭代器都是可关闭的**。要知道某个迭代器是否可关闭， 可以测试这个迭代器实例的 return 属性是不是函数对象。不过，仅仅给一个不可关闭的迭代器增加这 个方法并不能让它变成可关闭的。这是因为**调用 return()不会强制迭代器进入关闭状态**。即便如此， return()方法还是会被调用。

```js
let a = [1, 2, 3, 4, 5];
let iter = a[Symbol.iterator]();
iter.return = function() {
    console.log('Exiting early');
    return { done: true };
};
for (let i of iter) {
    console.log(i);
    if (i > 2) {
        break
    }
}
// 1
// 2
// 3
// Exiting early
for (let i of iter) {
    console.log(i);
}
// 4
// 5
```



## 3 生成器

### 3.1 生成器基础

生成器是 ECMAScript 6 新增的一个极为灵活的结构，拥有在一个函数块内暂停和恢复代码执行的能力。这种新能力具有深远的影响，比如，使**用生成器可以自定义迭代器和实现协程**。

**生成器的形式是一个函数，函数名称前面加一个星号（*）表示它是一个生成器**。只要是可以定义函数的地方，就可以定义生成器。

```js
// 生成器函数声明
function* generatorFn() {}
// 生成器函数表达式
let generatorFn = function* () {}
// 作为对象字面量方法的生成器函数
let foo = {
    * generatorFn() {}
}
// 作为类实例方法的生成器函数
class Foo {
    * generatorFn() {}
}
// 作为类静态方法的生成器函数
class Bar {
    static * generatorFn() {}
}
```

**注意** 箭头函数不能用来定义生成器函数。

**标识生成器函数的星号不受两侧空格的影响**：

```js
// 等价的生成器函数：
function* generatorFnA() {}
function *generatorFnB() {}
function * generatorFnC() {}
// 等价的生成器方法：
class Foo {
	*generatorFnD() {}
	* generatorFnE() {}
}
```

调用生成器函数会产生一个**生成器对象**。生成器对象一开始处于**暂停执行（suspended）的状态**。与迭代器相似，生成器对象也实现了 Iterator 接口，因此具有 next()方法。调用这个方法会让生成器开始或恢复执行。

```js
function * generatorFn(){}

const g=generatorFn();

console.log(g);  //Object [Generator] {<suspended>}
console.log(g.next);  //[Function: next]
```

**next()方法的返回值类似于迭代器**，有一个 done 属性和一个 value 属性。函数体为空的生成器函数中间不会停留，调用一次 next()就会让生成器到达 done: true 状态。

```js
function * generatorFn(){}

const g=generatorFn();

console.log(g);  //Object [Generator] {}
console.log(g.next());  //{ value: undefined, done: true }

```

**value 属性是生成器函数的返回值**，默认值为 undefined，可以通过生成器函数的返回值指定：

```js
function * generatorFn(){
    return 'foo';
}

const g=generatorFn();

console.log(g);  //Object [Generator] {}
console.log(g.next());  //{ value: 'foo', done: true }
```

**生成器函数只会在初次调用 next()方法后开始执行**，如下所示：

```js
function * generatorFn(){
    console.log('foo');
}
// 初次调用生成器函数并不会打印日志
const g=generatorFn();
g.next();  //foo
```

**生成器对象实现了 Iterable 接口**，它们默认的迭代器是自引用的：

```js
function * generatorFn(){}

console.log(generatorFn);  //[GeneratorFunction: generatorFn]
console.log(generatorFn()[Symbol.iterator]);  //[Function: [Symbol.iterator]]
console.log(generatorFn());  //Object [Generator] {}
console.log(generatorFn()[Symbol.iterator]);  //[Function: [Symbol.iterator]]

const g=generatorFn();
console.log(g===g[Symbol.iterator]());  //true
```

### 3.2 通过 yield 中断执行

**yield 关键字可以让生成器停止和开始执行**，也是生成器最有用的地方。**生成器函数在遇到 yield关键字之前会正常执行**。遇到这个关键字后，执行会停止，函数作用域的状态会被保留。停止执行的生成器函数**只能通过在生成器对象上调用 next()方法来恢复执行**：

```js
function * generatorFn(){
    yield;
}

const g=generatorFn();
console.log(g.next());  //{ value: undefined, done: false }
console.log(g.next());  //{ value: undefined, done: true }
console.log(g.next());  //{ value: undefined, done: true }
```

#### yield 关键字与 return 关键字

此时的 yield 关键字有点像函数的中间返回语句，它生成的值会出现在 next()方法返回的对象里。

通过 **yield 关键字**退出的生成器函数会处在 done: false 状态；

通过 **return 关键字**退出的生成器函数会处于 done: true 状态。

```js
function * generatorFn(){
    yield 'foo';
    yield 'bar';
    return "baz";
}

const g=generatorFn();
console.log(g.next());  //{ value: 'foo', done: false }
console.log(g.next());  //{ value: 'bar', done: false }

console.log(g.next());  //{ value: 'baz', done: true }

console.log(g.next());  //{ value: undefined, done: true }
```

生成器函数内部的执行流程会针对每个生成器对象区分作用域。**在一个生成器对象上调用 next()不会影响其他生成器**：

```js
function * generatorFn(){
    yield 'foo';
    yield 'bar';
    return "baz";
}

const g1=generatorFn();
const g2=generatorFn();

console.log(g1.next());  //{ value: 'foo', done: false }
console.log(g2.next());  //{ value: 'foo', done: false }
console.log(g2.next());  //{ value: 'bar', done: false }
console.log(g1.next());  //{ value: 'bar', done: false }
console.log(g1.next());  //{ value: 'baz', done: true }
console.log(g2.next());  //{ value: 'baz', done: true }
```

**yield 关键字只能在生成器函数内部使用，用在其他地方会抛出错误**。类似函数的 return 关键字**，yield 关键字必须直接位于生成器函数定义中**，出现在嵌套的非生成器函数中会抛出语法错误：

```js
// 有效
function* validGeneratorFn() {
    yield;
}
// 无效
function* invalidGeneratorFnA() {
    function a() {
        yield;
    }
}
// 无效
function* invalidGeneratorFnB() {
    const b = () => {
        yield;
    }
}
// 无效
function* invalidGeneratorFnC() {
    (() => {
        yield;
    })();
}
```

#### 生成器对象作为可迭代对象

在生成器对象上显式调用 next()方法的用处并不大。其实，如果把生成器对象当成可迭代对象，那么使用起来会更方便：

```js
function* generatorFn() {
    yield 1;
    yield 2;
    yield 3;
}
for (const x of generatorFn()) {
    console.log(x);  //1,2,3
}
```

在需要自定义迭代对象时，这样使用生成器对象会特别有用。比如，我们需要定义一个可迭代对象，而它会产生一个迭代器，这个迭代器会执行指定的次数。使用生成器，可以通过一个简单的循环来实现：

```js
function* nTimes(n) {
    while(n--){
        yield;
    }
}
for (let _ of nTimes(5)) {
    console.log("foo");  //foo foo foo foo foo
}
```

传给生成器的函数可以控制迭代循环的次数。在 n 为 0 时，while 条件为假，循环退出，生成器函数返回。

#### 使用 yield 实现输入和输出

除了可以作为函数的中间返回语句使用，yield 关键字还可以作为函数的中间参数使用。上一次让生成器函数暂停的 yield 关键字会接收到传给 next()方法的第一个值。这里有个地方不太好理解——**第一次调用 next()传入的值不会被使用，因为这一次调用是为了开始执行生成器函数**：

```js
function* generatorFn(initial) {
    console.log(initial);
    console.log(yield);
    console.log(yield);
}

let g=generatorFn("a");

g.next("b");  //a
g.next("c");  //c
g.next("d");  //d
```

**yield 关键字可以同时用于输入和输出**，如下例所示：

```js
function* generatorFn(initial) {
    return yield 'foo';
}

let g=generatorFn();

console.log(g.next());  //{ value: 'foo', done: false }
console.log(g.next("bar"));  //{ value: 'bar', done: true }
console.log(g.next("baz"));  //{ value: undefined, done: true }
```

因为函数必须对整个表达式求值才能确定要返回的值，所以它在遇到 yield 关键字时暂停执行并计算出要产生的值："foo"。下一次调用 next()传入了"bar"，作为交给同一个 yield 的值。然后这个值被确定为本次生成器函数要返回的值。

**yield 关键字并非只能使用一次**。比如，以下代码就定义了一个无穷计数生成器函数：

```js
function* generatorFn() {
    for (let i = 0;;++i) {
        yield i;
    }
}
let generatorObject = generatorFn();
console.log(generatorObject.next().value); // 0
console.log(generatorObject.next().value); // 1
console.log(generatorObject.next().value); // 2
console.log(generatorObject.next().value); // 3
console.log(generatorObject.next().value); // 4
console.log(generatorObject.next().value); // 5
//...
```

假设我们想定义一个生成器函数，它会根据配置的值迭代相应次数并产生迭代的索引。初始化一个新数组可以实现这个需求，但不用数组也可以实现同样的行为：

```js
function* nTimes(n) {
    for (let i = 0; i < n; ++i) {
        yield i;
    }
}
for (let x of nTimes(3)) {
    console.log(x);
}
// 0
// 1
// 2
```

另外，使用 while 循环也可以，而且代码稍微简洁一点：

```js
function* nTimes(n) {
    let i = 0;
    while(n--) {
        yield i++;
    }
}
for (let x of nTimes(3)) {
    console.log(x);
}
// 0
// 1
// 2
```

这样使用生成器也可以实现范围和填充数组：

```js
function* range(start, end) {
    while(end > start) {
        yield start++;
    }
}
for (const x of range(4, 7)) {
    console.log(x);
}
// 4
// 5
// 6

function* zeroes(n) {
    while(n--) {
    yield 0;
    }
}
console.log(Array.from(zeroes(8))); // [0, 0, 0, 0, 0, 0, 0, 0]
```

#### 产生可迭代对象

**可以使用星号增强 yield 的行为，让它能够迭代一个可迭代对象，从而一次产出一个值**：

```js
//等价的 generatorFn：
function* generatorFn1() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}

function *generatorFn(){
    yield* [1,2,3];
}

let generatorObject = generatorFn();
for (let x of generatorFn()) {
    console.log(x);
}
```

与生成器函数的星号类似，**yield 星号两侧的空格不影响其行为**：

```js
//等价的 generatorFn：
function* generatorFn() {
    yield* [1, 2];
    yield *[3, 4];
    yield * [5, 6];
}

let generatorObject = generatorFn();
for (let x of generatorFn()) {
    console.log(x);
}
// 1
// 2
// 3
// 4
// 5
// 6
```

因为 yield*实际上只是将一个可迭代对象序列化为一连串可以单独产出的值，所以这跟把 yield放到一个循环里没什么不同。下面两个生成器函数的行为是等价的：

```js
function* generatorFnA() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}
for (const x of generatorFnA()) {
    console.log(x);
}
// 1
// 2
// 3
function* generatorFnB() {
        yield* [1, 2, 3];
}
for (const x of generatorFnB()) {
    console.log(x);
}
// 1
// 2
// 3
```

**yield*的值是关联迭代器返回 done: true 时的 value 属性**。对于普通迭代器来说，这个值是undefined：

```js
function* generatorFn() {
    console.log('iter value:', yield* [1, 2, 3]);
}
for (const x of generatorFn()) {
    console.log('value:', x);
}
// value: 1
// value: 2
// value: 3
// iter value: undefined
```

对于生成器函数产生的迭代器来说，这个值就是生成器函数返回的值：

```js
function* innerGeneratorFn() {
    yield 'foo';
    return 'bar';
}
function* outerGeneratorFn(genObj) {
    console.log('iter value:', yield* innerGeneratorFn());
}
for (const x of outerGeneratorFn()) {
    console.log('value:', x);
}
// value: foo
// iter value: bar
```

#### 使用 yield*实现递归算法

yield*最有用的地方是实现递归操作，此时生成器可以产生自身。看下面的例子：

```js
function* nTimes(n) {
    if (n>0) {
        yield * nTimes(n-1);
        yield n-1;
    }
}

for (const x of nTimes(3)) {
    console.log(x);
}
// 0
// 1
// 2
```

在这个例子中，每个生成器首先都会从新创建的生成器对象产出每个值，然后再产出一个整数。结果就是生成器函数会递归地减少计数器值，并实例化另一个生成器对象。**从最顶层来看，这就相当于创建一个可迭代对象并返回递增的整数**。

**使用递归生成器结构和 yield*可以优雅地表达递归算法**。下面是一个图的实现，用于生成一个随机的双向图：

```js
class Node{
    constructor(id){
        this.id=id;
        this.neighbors=new Set();
    }
    connect(node){
        if (node!==this) {
            this.neighbors.add(node);
            node.neighbors.add(this);
        }
    }
}

class RandomGraph{
    constructor(size){
        this.nodes=new Set();
        //创建节点
        for (let i=0;i<size;++i){
            this.nodes.add(new Node(i));
        }
        // 随机连接节点
        const threshold=1/size;
        for (let x of this.nodes){
            for (let y of this.nodes){
                if (Math.random()<threshold) {
                    x.connect(y);
                }
            }
        }
    }
    // 这个方法仅用于调试
    print(){
        for (let node of this.nodes){
            let ids=[...node.neighbors].map((n)=>n.id).join(",");
            console.log(`${node.id}:${ids}`);
        }
    }
}

const g = new RandomGraph(6);
g.print();
/*
0:2,3
1:2,3
2:0,1,5,3
3:1,0,2
4:
5:2
*/
```

图数据结构非常适合递归遍历，而递归生成器恰好非常合用。为此，生成器函数必须接收一个可迭代对象，产出该对象中的每一个值，并且对每个值进行递归。这个实现可以用来测试某个图是否连通，即是否没有不可到达的节点。只要从一个节点开始，然后尽力访问每个节点就可以了。结果就得到了一个非常简洁的深度优先遍历：

```js
class Node{
    constructor(id){
        this.id=id;
        this.neighbors=new Set();
    }
    connect(node){
        if (node!==this) {
            this.neighbors.add(node);
            node.neighbors.add(this);
        }
    }
}

class RandomGraph{
    constructor(size){
        this.nodes=new Set();
        //创建节点
        for (let i=0;i<size;++i){
            this.nodes.add(new Node(i));
        }
        // 随机连接节点
        const threshold=1/size;
        for (let x of this.nodes){
            for (let y of this.nodes){
                if (Math.random()<threshold) {
                    x.connect(y);
                }
            }
        }
    }
    // 这个方法仅用于调试
    print(){
        for (let node of this.nodes){
            let ids=[...node.neighbors].map((n)=>n.id).join(",");
            console.log(`${node.id}:${ids}`);
        }
    }
    isConnected(){
        let visitedNodes=new Set();
        function *traverse(nodes){
            for (let node of nodes){
                if (!visitedNodes.has(node)) {
                    yield node;
                    yield* traverse(node.neighbors);
                }
            }
        }
        // 取得集合中的第一个节点
        let firstNode=this.nodes[Symbol.iterator]().next().value;
        //使用递归生成器迭代每个节点
        for (let node of traverse([firstNode])){
            visitedNodes.add(node);
        }
        return visitedNodes.size===this.nodes.size;
    }
}

const g = new RandomGraph(6);
g.print();
console.log(g.isConnected()); //false
/*
0:4
1:3
2:
3:1,5
4:0
5:3
*/
```

### 3.3 生成器作为默认迭代器

因为生成器对象实现了 Iterable 接口，而且生成器函数和默认迭代器被调用之后都产生迭代器，所以生成器格外适合作为默认迭代器。下面是一个简单的例子，这个类的默认迭代器可以用一行代码产出类的内容：

```js
class Foo {
    constructor() {
        this.values = [1, 2, 3];
    }
    * [Symbol.iterator]() {
        yield* this.values;
    }
}
const f = new Foo();
for (const x of f) {
    console.log(x);
}
// 1
// 2
// 3
```

这里，for-of 循环调用了默认迭代器（它恰好又是一个生成器函数）并产生了一个生成器对象。这个生成器对象是可迭代的，所以完全可以在迭代中使用。

### 3.4 提前终止生成器

与迭代器类似，生成器也支持“可关闭”的概念。一个实现 Iterator 接口的对象一定有 next()方法，还有一个可选的 return()方法用于提前终止迭代器。生成器对象除了有这两个方法，还有第三个方法：throw()。

```js
function* generatorFn() {}
const g = generatorFn();
console.log(g); // Object [Generator] {}
console.log(g.next); // [Function: next]
console.log(g.return); // [Function: return]
console.log(g.throw); // [Function: throw]
```

return()和 throw()方法都可以用于强制生成器进入关闭状态。

#### return()

**return()方法会强制生成器进入关闭状态**。提供给 return()方法的值，就是终止迭代器对象的值：

```js
function* generatorFn() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}
const g = generatorFn();
console.log(g); // generatorFn {<suspended>}
console.log(g.return(4)); // { done: true, value: 4 }
console.log(g); // generatorFn {<closed>}
```

与迭代器不同，**所有生成器对象都有 return()方法，只要通过它进入关闭状态，就无法恢复了**。后续调用 next()会显示 done: true 状态，而提供的任何返回值都不会被存储或传播：

```js
function* generatorFn() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}
const g = generatorFn();
console.log(g.next()); // { done: false, value: 1 }
console.log(g.return(4)); // { done: true, value: 4 }
console.log(g.next()); // { done: true, value: undefined }
console.log(g.next()); // { done: true, value: undefined }
console.log(g.next()); // { done: true, value: undefined }
```

for-of 循环等内置语言结构**会忽略状态为 done: true 的 IteratorObject 内部返回的值**。

```js
function* generatorFn() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}
const g = generatorFn();
for (const x of g) {
    if (x > 1) {
        g.return(4);
    }
    console.log(x);
}
// 1
// 2
```

#### throw()

throw()方法会在暂停的时候将一个提供的错误注入到生成器对象中。如果错误未被处理，生成器就会关闭：

```js
function* generatorFn() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}
const g = generatorFn();
console.log(g); // generatorFn {<suspended>}
try {
    g.throw('foo');
} catch (e) {
    console.log(e); // foo
}
console.log(g); // generatorFn {<closed>}
```

不过，**假如生成器函数内部处理了这个错误，那么生成器就不会关闭，而且还可以恢复执行**。错误处理会跳过对应的 yield，因此在这个例子中会跳过一个值。比如：

```js
function* generatorFn() {
    for (const x of [1, 2, 3]) {
        try {
            yield x;
        } catch(e) {}
    }
}
const g = generatorFn();
console.log(g.next()); // { done: false, value: 1}
g.throw('foo');
console.log(g.next()); // { done: false, value: 3}
```

在这个例子中，生成器在 try/catch 块中的 yield 关键字处暂停执行。在暂停期间，throw()方 法向生成器对象内部注入了一个错误：字符串"foo"。这个错误会被 yield 关键字抛出。因为错误是在 生成器的 try/catch 块中抛出的，所以仍然在生成器内部被捕获。可是，由于 yield 抛出了那个错误， 生成器就不会再产出值 2。此时，生成器函数继续执行，在下一次迭代再次遇到 yield 关键字时产出了 值 3。 

**注意** 如果生成器对象还没有开始执行，那么调用 throw()抛出的错误不会在函数内部被 捕获，**因为这相当于在函数块外部抛出了错误**。



# 集合引用类型

## 1 Object

到目前为止，大多数引用值的示例使用的是 Object 类型。Object 是 ECMAScript 中最常用的类型之一。虽然 Object 的实例没有多少功能，但很适合存储和在应用程序间交换数据。
显式地创建 Object 的实例有两种方式。第一种是**使用 new 操作符和 Object 构造函数**，如下所示：

```js
let person = new Object();
person.name = "Nicholas";
person.age = 29;
```

另一种方式是使用**对象字面量（object literal）表示法**。对象字面量是对象定义的简写形式，目的是 为了简化包含大量属性的对象的创建。比如，下面的代码定义了与前面示例相同的 person 对象，但使 用的是对象字面量表示法：

```js
let person = {
    name: "Nicholas",
    age: 29
};	
```

在这个例子中，左大括号（{）表示对象字面量开始，因为它出现在一个**表达式上下文**（expression context）中。在 ECMAScript 中，表达式上下文指的是期待返回值的上下文。赋值操作符表示后面要期 待一个值，因此左大括号表示一个表达式的开始。同样是左大括号，如果出现在语句上下文（statement context）中，比如 if 语句的条件后面，则表示一个语句块的开始。

 接下来指定了 name 属性，后跟一个冒号，然后是属性的值。逗号用于在对象字面量中分隔属性， 因此字符串"Nicholas"后面有一个逗号，而 29 后面没有，因为 age 是这个对象的最后一个属性。在 最后一个属性后面加上逗号在非常老的浏览器中会导致报错，但所有现代浏览器都支持这种写法。 

在对象字面量表示法中，属性名可以是字符串或数值，比如：

```js
let person = {
    "name": "Nicholas",
    "age": 29,
    5: true
};
```

这个例子会得到一个带有属性 name、age 和 5 的对象。注意，数值属性会自动转换为字符串。

当然也**可以用对象字面量表示法来定义一个只有默认属性和方法的对象**，只要使用一对大括号，中间留空就行了：

```js
let person = {}; // 与 new Object()相同
person.name = "Nicholas";
person.age = 29;
```

这个例子跟本节开始的第一个例子是等效的，虽然看起来有点怪。对象字面量表示法通常只在为了让属性一目了然时才使用。

**注意** 在使用对象字面量表示法定义对象时，并不会实际调用 Object 构造函数。

虽然使用哪种方式创建 Object 实例都可以，但实际上开发者更倾向于使用对象字面量表示法。这 是因为对象字面量代码更少，看起来也更有封装所有相关数据的感觉。事实上，对象字面量已经成为给 函数传递大量可选参数的主要方式，比如：

```js
function displayInfo(args) {
    let output = "";
    if (typeof args.name == "string"){
        output += "Name: " + args.name + "\n";
    }
    if (typeof args.age == "number") {
        output += "Age: " + args.age + "\n";
    }
    console.log(output);
}
displayInfo({
    name: "Nicholas",
    age: 29
});
displayInfo({
    name: "Greg"
});
```

这里，函数 displayInfo()接收一个名为 args 的参数。这个参数可能有属性 name 或 age，也可 能两个属性都有或者都没有。函数内部会使用 typeof 操作符测试每个属性是否存在，然后根据属性有 无构造并显示一条消息。然后，这个函数被调用了两次，每次都通过一个对象字面量传入了不同的数据。 两种情况下，函数都正常运行。

**注意** 这种模式非常适合函数有大量可选参数的情况。一般来说，命名参数更直观，但在可选参数过多的时候就显得笨拙了。**最好的方式是对必选参数使用命名参数，再通过一个对象字面量来封装多个可选参数。**

虽然属性一般是通过点语法来存取的，这也是面向对象语言的惯例，但也可以使用中括号来存取属性。在使用中括号时，要在括号内使用属性名的字符串形式，比如：

```js
console.log(person["name"]); // "Nicholas"
console.log(person.name); // "Nicholas"
```

从功能上讲，这两种存取属性的方式没有区别。**使用中括号的主要优势就是可以通过变量访问属性**，就像下面这个例子中一样：

```js
let propertyName = "name";
console.log(person[propertyName]); // "Nicholas"
```

另外，如果属性名中包含可能会导致语法错误的字符，或者包含关键字/保留字时，也可以使用中括号语法。比如：

```js
person["first name"] = "Nicholas";
```

因为"first name"中包含一个空格，所以不能使用点语法来访问。不过，**属性名中是可以包含非字母数字字符的，这时候只要用中括号语法存取它们就行了**。

通常，**点语法是首选的属性存取方式**，除非访问属性时必须使用变量。



## 2 Array

除了 Object，Array 应该就是 ECMAScript 中最常用的类型了。ECMAScript 数组跟其他编程语言 的数组有很大区别。跟其他语言中的数组一样，ECMAScript 数组也是一组有序的数据，但跟其他语言 不同的是，**数组中每个槽位可以存储任意类型的数据**。这意味着可以创建一个数组，它的第一个元素 是字符串，第二个元素是数值，第三个是对象。**ECMAScript 数组也是动态大小的，会随着数据添加而 自动增长**。

### 2.1 创建数组

有几种基本的方式可以创建数组。一种是**使用 Array 构造函数**，比如：

```js
let colors = new Array();
```

如果知道数组中元素的数量，那么可以给构造函数传入一个数值，然后 **length 属性**就会被自动创建并设置为这个值。比如，下面的代码会创建一个初始 length 为 20 的数组：

```js
let colors = new Array(20);
```

也可以给 Array 构造函数传入要保存的元素。比如，下面的代码会创建一个包含 3 个字符串值的数组：

```js
let colors = new Array("red", "blue", "green");
```

**创建数组时可以给构造函数传一个值。这时候就有点问题**了，因为如果这个值是数值，则会创建一个长度为指定数值的数组；而如果这个值是其他类型的，则会创建一个只包含该特定值的数组。下面看一个例子：

```js
let colors = new Array(3); // 创建一个包含 3 个元素的数组
let names = new Array("Greg"); // 创建一个只包含一个元素，即字符串"Greg"的数组
```

在使用 Array 构造函数时，也可以省略 new 操作符。结果是一样的，比如：

```js
let colors = Array(3); // 创建一个包含 3 个元素的数组
let names = Array("Greg"); // 创建一个只包含一个元素，即字符串"Greg"的数组
```

另一种创建数组的方式是使用**数组字面量（array literal）表示法**。数组字面量是在中括号中包含以逗号分隔的元素列表，如下面的例子所示：

```js
let colors = ["red", "blue", "green"]; // 创建一个包含 3 个元素的数组
let names = []; // 创建一个空数组
let values = [1,2,]; // 创建一个包含 2 个元素的数组
```

在这个例子中，第一行创建一个包含 3 个字符串的数组。第二行用一对空中括号创建了一个空数组。第三行展示了在数组最后一个值后面加逗号的效果：values 是一个包含两个值（1 和 2）的数组。

**注意** 与对象一样，**在使用数组字面量表示法创建数组不会调用 Array 构造函数**。

Array 构造函数还有两个 ES6 新增的用于创建数组的静态方法：from()和 of()。**from()用于将类数组结构转换为数组实例**，而 **of()用于将一组参数转换为数组实例**。

#### Array.from()

Array.from()的第一个参数是一个类数组对象，即任何可迭代的结构，或者有一个 length 属性和可索引元素的结构。这种方式可用于很多场合：

```js
// 字符串会被拆分为单字符数组
console.log(Array.from("Arnold"));  //[ 'A', 'r', 'n', 'o', 'l', 'd' ]

// 可以使用 from()将集合和映射转换为一个新数组
let m=new Map().set(1,2).set(3,4);
let s=new Set().add(1).add(2).add(3).add(4);
console.log(Array.from(m));  //[ [ 1, 2 ], [ 3, 4 ] ]
console.log(Array.from(s));  //[ 1, 2, 3, 4 ]

// Array.from()对现有数组执行浅复制
let a1=[1,2,3,4];
let a2=Array.from(a1);
console.log(a2);  //[ 1, 2, 3, 4 ]
console.log(a1===a2);  //false

// 可以使用任何可迭代对象
let iter={
    *[Symbol.iterator](){
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    }
};
console.log(Array.from(iter));  //[ 1, 2, 3, 4 ]

// arguments 对象可以被轻松地转换为数组
function getArgsArray(){
    return Array.from(arguments);
}
console.log(getArgsArray(1,2,3,4));  //[ 1, 2, 3, 4 ]

// from()也能转换带有必要属性的自定义对象
let arrayLikeObject = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    length: 4
};
let arrayLikeObject2 = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    length: 5
};
console.log(Array.from(arrayLikeObject));  //[ 1, 2, 3, 4 ]
console.log(Array.from(arrayLikeObject2));  //[ 1, 2, 3, 4 ,5 ]

```

Array.from()还**接收第二个可选的映射函数参数**。这个函数可以直接增强新数组的值，而无须像调用 Array.from().map()那样先创建一个中间数组。还可以**接收第三个可选参数，用于指定映射函数中 this 的值**。但这个重写的 this 值在箭头函数中不适用。

```js
let a1=[1,2,3,4];

//两个参数
let a2=Array.from(a1,x=>x*2);
console.log(a2);  //[ 2, 4, 6, 8 ]

//三个参数
let a3=Array.from(a1,function(x){
    return x**this.exponent
},{exponent:2});
console.log(a3);  //[ 1, 4, 9, 16 ]
```

#### Array.of()

**Array.of()可以把一组参数转换为数组**。这个方法用于替代在 ES6 之前常用的 Array.prototype.slice.call(arguments)，一种异常笨拙的将 arguments 对象转换为数组的写法：

```js
let a1=[1,2,3,4];

console.log(Array.of(a1));  //[ [ 1, 2, 3, 4 ] ]
console.log(Array.of(1,2,3,4));  //[ 1, 2, 3, 4 ]
console.log(Array.of(undefined));  //[ undefined ]
```

### 2.2 数组空位

使用数组字面量初始化数组时，可以使用一串逗号来创建空位（hole）。**ECMAScript 会将逗号之间相应索引位置的值当成空位**，ES6 规范重新定义了该如何处理这些空位。

可以像下面这样创建一个空位数组：

```js
const options = [,,,,,]; // 创建包含 5 个元素的数组
console.log(options.length); // 5
console.log(options); // [,,,,,]   [ <5 empty items> ]
```

 ES6 新增的方法和迭代器与早期 ECMAScript 版本中存在的方法行为不同。**ES6 新增方法普遍将这些空位当成存在的元素，只不过值为 undefined**：

```js
const options = [1,,,,5];
for (const option of options) {
    console.log(option === undefined);
}
// false
// true
// true
// true
// false
const a = Array.from([,,,]); // 使用 ES6 的 Array.from()创建的包含 3 个空位的数组
for (const val of a) {
    console.log(val === undefined);
}
// true
// true
// true
console.log(Array.of(...[,,,])); // [undefined, undefined, undefined]
for (const [index, value] of options.entries()) {
    console.log(value);
}
// 1
// undefined
// undefined
// undefined
// 5
```

ES6 之前的方法则会忽略这个空位，但具体的行为也会因方法而异：

```js
const options = [1,,,,5];
// map()会跳过空位置
console.log(options.map(() => 6)); // [ 6, <3 empty items>, 6 ]
// join()视空位置为空字符串
console.log(options.join('-')); // "1----5"
```

**注意** 由于行为不一致和存在性能隐患，因此**实践中要避免使用数组空位**。**如果确实需要空位，则可以显式地用 undefined 值代替**。

### 2.3 数组索引

要取得或设置数组的值，需要使用中括号并提供相应值的数字索引，如下所示：

```js
let colors = ["red", "blue", "green"]; // 定义一个字符串数组
alert(colors[0]); // 显示第一项
colors[2] = "black"; // 修改第三项
colors[3] = "brown"; // 添加第四项
```

在中括号中提供的索引表示要访问的值。如果索引小于数组包含的元素数，则返回存储在相应位置 的元素，就像示例中 colors[0]显示"red"一样。设置数组的值方法也是一样的，就是替换指定位置的 值。**如果把一个值设置给超过数组最大索引的索引**，就像示例中的 colors[3]，**则数组长度会自动扩 展到该索引值加 1**（示例中设置的索引 3，所以数组长度变成了 4）。

 数组中元素的数量保存在 length 属性中，这个属性始终返回 0 或大于 0 的值，如下例所示：

```js
let colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
let names = []; // 创建一个空数组
alert(colors.length); // 3
alert(names.length); // 0
```

数组 length 属性的独特之处在于，它不是只读的。**通过修改 length 属性，可以从数组末尾删除或添加元素**。来看下面的例子：

```js
let colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
colors.length = 2;
console.log(colors[2]); // undefined
```

这里，数组 colors 一开始有 3 个值。将 length 设置为 2，就删除了最后一个（位置 2 的）值，因此 colors[2]就没有值了。**如果将 length 设置为大于数组元素数的值，则新添加的元素都将以undefined 填充，**如下例所示：

```js
let colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
colors.length = 4;
alert(colors[3]); // undefined
```

这里将数组 colors 的 length 设置为 4，虽然数组只包含 3 个元素。位置 3 在数组中不存在，因此访问其值会返回特殊值 undefined。

**使用 length 属性可以方便地向数组末尾添加元素**，如下例所示：

```js
let colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
colors[colors.length] = "black"; // 添加一种颜色（位置 3）
colors[colors.length] = "brown"; // 再添加一种颜色（位置 4）
```

数组中最后一个元素的索引始终是 length - 1，因此下一个新增槽位的索引就是 length。每次 在数组最后一个元素后面新增一项，数组的 length 属性都会自动更新，以反映变化。这意味着第二行 的 colors[colors.length]会在位置 3 添加一个新元素，下一行则会在位置 4 添加一个新元素。**新的 长度会在新增元素被添加到当前数组外部的位置上时自动更新**。换句话说，就是 length 属性会更新为 位置加上 1，如下例所示：

```js
let colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
colors[99] = "black"; // 添加一种颜色（位置 99）
console.log(colors.length); // 100
```

这里，colors 数组有一个值被插入到位置 99，结果新 length 就变成了 100（99 + 1）。这中间的 所有元素，即位置 3~98，实际上并不存在，因此在访问时会返回 undefined。 

**注意** 数组**最多可以包含 4 294 967 295 个元素**，这对于大多数编程任务应该足够了。如果 尝试添加更多项，则会导致抛出错误。以这个最大值作为初始值创建数组，可能导致脚本 运行时间过长的错误。

### 2.4 检测数组

一个经典的 ECMAScript 问题是判断一个对象是不是数组。在只有一个网页（因而只有一个全局作用域）的情况下，使用 instanceof 操作符就足矣：

```js
if (value instanceof Array){
// 操作数组
}

let colors = ["red", "blue", "green"]; 
if (colors instanceof Array){
	// 操作数组
	console.log(colors);
}
```

**使用 instanceof 的问题是假定只有一个全局执行上下文**。如果网页里有多个框架，则可能涉及两 个不同的全局执行上下文，因此就会有两个不同版本的 Array 构造函数。如果要把数组从一个框架传 给另一个框架，则这个数组的构造函数将有别于在第二个框架内本地创建的数组。

为解决这个问题，ECMAScript 提供了 **Array.isArray()方法**。这个方法的目的就是确定一个值是 否为数组，而不用管它是在哪个全局执行上下文中创建的。来看下面的例子：

```js
if (Array.isArray(value)){
	// 操作数组
}
let colors = ["red", "blue", "green"]; 
if (Array.isArray(colors)){
	// 操作数组
	console.log(colors);
}
```

### 2.5 迭代器方法

在 ES6 中，Array 的原型上暴露了 3 个用于检索数组内容的方法：keys()、values()和entries()。keys()返回数组索引的迭代器，values()返回数组元素的迭代器，而 entries()返回索引/值对的迭代器：

```js
const a = ["foo", "bar", "baz", "qux"];

//因为这些方法都返回迭代器，所以可以将它们的内容,通过 Array.from()直接转换为数组实例
let aKeys=Array.from(a.keys());
let aValues=Array.from(a.values());
let aEntries=Array.from(a.entries());

console.log(aKeys);  //[ 0, 1, 2, 3 ]
console.log(aValues);  //[ 'foo', 'bar', 'baz', 'qux' ]
console.log(aEntries);  //[ [ 0, 'foo' ], [ 1, 'bar' ], [ 2, 'baz' ], [ 3, 'qux' ] ]
```

使用 ES6 的解构可以非常容易地在循环中拆分键/值对：

```js
const a = ["foo", "bar", "baz", "qux"];
for (const [idx, element] of a.entries()) {
	console.log(idx);
	console.log(element);
}
```

### 2.6 复制和填充方法

ES6 新增了两个方法：批量复制方法 copyWithin()，以及填充数组方法 fill()。这两个方法的 函数签名类似，都需要指定既有数组实例上的一个范围，包含开始索引，不包含结束索引。使用这个方 法不会改变数组的大小。 

#### fill()方法

使用 **fill()方法**可以向一个已有的数组中插入全部或部分相同的值。开始索引用于指定开始填充 的位置，它是可选的。如果不提供结束索引，则一直填充到数组末尾。负值索引从数组末尾开始计算。 也可以将负索引想象成数组长度加上它得到的一个正索引：

```js
console.log(zeroes);  //[ 0, 0, 0, 6, 6 ]

// 用 7 填充索引大于等于 1 且小于 3 的元素
zeroes.fill(7,1,3);
console.log(zeroes);  //[ 0, 7, 7, 6, 6 ]

// 用 8 填充索引大于等于 1 且小于 4 的元素
// (-4 + zeroes.length = 1)
// (-1 + zeroes.length = 4)
//zeroes.fill(8,1,4);
zeroes.fill(8,-4,-1);
console.log(zeroes);  //[ 0, 8, 8, 8, 6 ]
```

fill()静默忽略超出数组边界、零长度及方向相反的索引范围：

```js
const zeroes = [0, 0, 0, 0, 0];
// 索引过低，忽略
zeroes.fill(1, -10, -6);
console.log(zeroes); // [0, 0, 0, 0, 0]
// 索引过高，忽略
zeroes.fill(1, 10, 15);
console.log(zeroes); // [0, 0, 0, 0, 0]
// 索引反向，忽略
zeroes.fill(2, 4, 2);
console.log(zeroes); // [0, 0, 0, 0, 0]
// 索引部分可用，填充可用部分
zeroes.fill(4, 3, 10)
console.log(zeroes); // [0, 0, 0, 4, 4]
```

#### copyWithin()

与 fill()不同，**copyWithin()会按照指定范围浅复制数组中的部分内容，然后将它们插入到指定索引开始的位置**。开始索引和结束索引则与 fill()使用同样的计算方法：

```js
let ints;
let reset=()=>ints=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];  //重置函数
reset();

// 从 ints 中复制索引 0 开始的内容，插入到索引 5 开始的位置
// 在源索引或目标索引到达数组边界时停止
console.log(ints);  //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
ints.copyWithin(5);
console.log(ints);  //[0, 1, 2, 3, 4, 0, 1, 2, 3, 4]
reset();

// 从 ints 中复制索引 5 开始的内容，插入到索引 0 开始的位置
ints.copyWithin(0,5);
console.log(ints);  //[5, 6, 7, 8, 9, 5, 6, 7, 8, 9]
reset();

// 从 ints 中复制索引 0 开始到索引 3 结束的内容
// 插入到索引 4 开始的位置
ints.copyWithin(4,0,3);
console.log(ints);  //[0, 1, 2, 3, 0, 1, 2, 7, 8, 9]
reset();

// JavaScript 引擎在插值前会完整复制范围内的值
// 因此复制期间不存在重写的风险
ints.copyWithin(2, 0, 6);
console.log(ints);  //[0, 1, 0, 1, 2, 3, 4, 5, 8, 9]
reset();

// 支持负索引值，与 fill()相对于数组末尾计算正向索引的过程是一样的
ints.copyWithin(-4, -7, -3);
console.log(ints); // [0, 1, 2, 3, 4, 5, 3, 4, 5, 6]
```

copyWithin()静默忽略超出数组边界、零长度及方向相反的索引范围：

```js
let ints,
reset = () => ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
reset();
// 索引过低，忽略
ints.copyWithin(1, -15, -12);
console.log(ints); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
reset()
// 索引过高，忽略
ints.copyWithin(1, 12, 15);
console.log(ints); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
reset();
// 索引反向，忽略
ints.copyWithin(2, 4, 2);
console.log(ints); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
reset();
// 索引部分可用，复制、填充可用部分
ints.copyWithin(4, 7, 10)
console.log(ints); // [0, 1, 2, 3, 7, 8, 9, 7, 8, 9];
```

### 2.7 转换方法

#### toString()

#### valueOf()

前面提到过，所有对象都有 toLocaleString()、toString()和 valueOf()方法。其中，valueOf()返回的还是数组本身。而 toString()返回由数组中每个值的等效字符串拼接而成的一个逗号分隔的字符串。也就是说，对数组的每个值都会调用其 toString()方法，以得到最终的字符串。来看下面的例子：

```js
let colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
console.log(colors.toString()); // red,blue,green
console.log(colors.valueOf()); // [ 'red', 'blue', 'green' ]
console.log(colors); //[ 'red', 'blue', 'green' ]
alert(colors);  // red,blue,green
```

首先是被显式调用的 toString()和 valueOf()方法，它们分别返回了数组的字符串表示，即将所有字符串组合起来，以逗号分隔。最后一行代码直接用 alert()显示数组，**因为 alert()期待字符 串，所以会在后台调用数组的 toString()方法**，从而得到跟前面一样的结果。 

#### toLocaleString()

**toLocaleString()方法也可能返回跟 toString()和 valueOf()相同的结果**，但也不一定。在 调用数组的 toLocaleString()方法时，会得到一个逗号分隔的数组值的字符串。它与另外两个方法 唯一的区别是，为了得到最终的字符串，会调用数组每个值的 toLocaleString()方法，而不是 toString()方法。看下面的例子：

```js
let person1 = {
	toLocaleString() {
		return "Nikolaos";
	},
	toString() {
		return "Nicholas";
	}
};
let person2 = {
	toLocaleString() {
		return "Grigorios";
	},
	toString() {
		return "Greg";
	}
};

let people = [person1, person2];
alert(people); // Nicholas,Greg
console.log(people); // 
console.log(people.toString()); // Nicholas,Greg
console.log(people.toLocaleString()); // Nikolaos,Grigorios
```

这里定义了两个对象 person1 和 person2，它们都定义了 toString()和 toLocaleString()方 法，而且返回不同的值。然后又创建了一个包含这两个对象的数组 people。在将数组传给 alert()时， 输出的是"Nicholas,Greg"，这是因为会在数组每一项上调用 toString()方法（与下一行显式调用 toString()方法结果一样）。而在调用数组的 toLocaleString()方法时，结果变成了"Nikolaos, Grigorios"，这是因为调用了数组每一项的 toLocaleString()方法。

#### join()方法

 **继承的方法 toLocaleString()以及 toString()都返回数组值的逗号分隔的字符串**。如果想使 用不同的分隔符，则可以使用 **join()方法**。join()方法接收一个参数，即字符串分隔符，返回包含所 有项的字符串。来看下面的例子：

```js
let colors = ["red", "green", "blue"];
console.log(colors.join(",")); // red,green,blue
console.log(colors.join("||")); // red||green||blue
```

这里在 colors 数组上调用了 join()方法，得到了与调用 toString()方法相同的结果。传入逗号 ， 结 果 就 是 逗 号 分 隔 的 字 符 串 。 最 后 一 行 给 join() 传 入 了 双 竖 线 ， 得 到 了 字 符 串"red||green||blue"。**如果不给 join()传入任何参数，或者传入 undefined，则仍然使用逗号作为分隔符。**

**注意** 如果数组中某一项是 null 或 undefined，则在 join()、toLocaleString()、toString()和 valueOf()返回的结果中会以空字符串表示。

### 2.8 栈方法

ECMAScript 给数组提供几个方法，让它看起来像是另外一种数据结构。数组对象可以像栈一样， 也就是一种限制插入和删除项的数据结构。栈是一种后进先出（LIFO，Last-In-First-Out）的结构，也就 是最近添加的项先被删除。数据项的插入（称为推入，push）和删除（称为弹出，pop）只在栈的一个 地方发生，即栈顶。ECMAScript 数组提供了 push()和 pop()方法，以实现类似栈的行为。 

#### push()方法

#### pop()方法

**push()方法**接收任意数量的参数，并将它们添加到数组末尾，返回数组的最新长度。**pop()方法**则 用于删除数组的最后一项，同时减少数组的 length 值，返回被删除的项。来看下面的例子：

```js
let colors = new Array(); // 创建一个数组
let count = colors.push("red", "green"); // 推入两项
alert(count); // 2
count = colors.push("black"); // 再推入一项
alert(count); // 3
let item = colors.pop(); // 取得最后一项
alert(item); // black
alert(colors.length); // 2
```

这里创建了一个当作栈来使用的数组（注意不需要任何额外的代码，push()和 pop()都是数组的 默认方法）。首先，使用 push()方法把两个字符串推入数组末尾，将结果保存在变量 count 中（结果 为 2）。 然后，再推入另一个值，再把结果保存在 count 中。因为现在数组中有 3 个元素，所以 push()返 回 3。在调用 pop()时，会返回数组的最后一项，即字符串"black"。此时数组还有两个元素。 

栈方法可以与数组的其他任何方法一起使用，如下例所示：

```js
let colors = ["red", "blue"];
colors.push("brown"); // 再添加一项
colors[3] = "black"; // 添加一项
alert(colors.length); // 4
let item = colors.pop(); // 取得最后一项
alert(item); // black
```

这里先初始化了包含两个字符串的数组，然后通过 push()添加了第三个值，第四个值是通过直接 在位置 3 上赋值添加的。调用 pop()时，返回了字符串"black"，也就是最后添加到数组的字符串。

### 2.9 队列方法

####  shift()

就像栈是以 LIFO 形式限制访问的数据结构一样，队列以先进先出（FIFO，First-In-First-Out）形式 限制访问。队列在列表末尾添加数据，但从列表开头获取数据。因为有了在数据末尾添加数据的 push() 方法，所以要模拟队列就差一个从数组开头取得数据的方法了。这个数组方法叫 shift()，它会删除数 组的第一项并返回它，然后数组长度减 1。使用 shift()和 push()，可以把数组当成队列来使用：

```js
let colors = new Array(); // 创建一个数组
let count = colors.push("red", "green"); // 推入两项
alert(count); // 2
count = colors.push("black"); // 再推入一项
alert(count); // 3
let item = colors.shift(); // 取得第一项
alert(item); // red
alert(colors.length); // 2
```

这个例子创建了一个数组并用 push()方法推入三个值。加粗的那行代码使用 shift()方法取得了 数组的第一项，即"red"。删除这一项之后，"green"成为第一个元素，"black"成为第二个元素，数 组此时就包含两项。 

####  unshift()

ECMAScript 也为数组提供了 unshift()方法。顾名思义，unshift()就是执行跟 shift()相反的 操作：在数组开头添加任意多个值，然后返回新的数组长度。通过使用 unshift()和 pop()，可以在 相反方向上模拟队列，即在数组开头添加新数据，在数组末尾取得数据，如下例所示：

```js
let colors = new Array(); // 创建一个数组
let count = colors.unshift("red", "green"); // 从数组开头推入两项
alert(count); // 2
count = colors.unshift("black"); // 再推入一项
alert(count); // 3
let item = colors.pop(); // 取得最后一项
alert(item); // green
alert(colors.length); // 2
```

这里，先创建一个数组，再通过 unshift()填充数组。首先，给数组添加"red"和"green"，再添 加"black"，得到["black","red","green"]。调用 pop()时，删除最后一项"green"并返回它。

### 2.10 排序方法

#### reverse()方法

数组有两个方法可以用来对元素重新排序：reverse()和 sort()。顾名思义，reverse()方法就是将数组元素反向排列。比如：

```js
let values = [1, 2, 3, 4, 5];
values.reverse();
alert(values); // 5,4,3,2,1
```

#### sort()方法

这里，数组 values 的初始状态为[1,2,3,4,5]。通过调用 reverse()反向排序，得到了 [5,4,3,2,1]。这个方法很直观，但不够灵活，所以才有了 sort()方法。 

```js
let values = [0, 1, 5, 10, 15];
values.sort();
alert(values); // 0,1,10,15,5
```

**默认情况下，sort()会按照升序重新排列数组元素，即最小的值在前面，最大的值在后面。**为此， sort()会在每一项上调用 String()转型函数，然后比较字符串来决定顺序。即使数组的元素都是数值， 也会先把数组转换为字符串再比较、排序。比如：

一开始数组中数值的顺序是正确的，但调用 sort()会按照这些数值的字符串形式重新排序。因此， 即使 5 小于 10，但字符串"10"在字符串"5"的前头，所以 10 还是会排到 5 前面。很明显，这在多数情 况下都不是最合适的。为此，**sort()方法可以接收一个比较函数，用于判断哪个值应该排在前面**。

比较函数接收两个参数，**如果第一个参数应该排在第二个参数前面，就返回负值**；如果两个参数相 等，就返回 0；**如果第一个参数应该排在第二个参数后面，就返回正值。**下面是使用简单比较函数的一 个例子：

```js
function compare(value1, value2) {
	if (value1 < value2) {
		return -1;
	} else if (value1 > value2) {
		return 1;
	} else {
		return 0;
	}
}
```

这个比较函数可以适用于大多数数据类型，可以把它当作参数传给 sort()方法，如下所示：

```js
let values = [0, 1, 5, 10, 15];
values.sort(compare);
console.log(values); // 0,1,5,10,15
```

在给 sort()方法传入比较函数后，数组中的数值在排序后保持了正确的顺序。当然，比较函数也可以产生降序效果，只要把返回值交换一下即可：

```js
function compare(value1, value2) {
	if (value1 < value2) {
		return 1;
	} else if (value1 > value2) {
		return -1;
	} else {
		return 0;
	}
}

let values = [0, 1, 5, 10, 15];
values.sort(compare);
console.log(values); // [ 15, 10, 5, 1, 0 ]
```

此外，这个比较函数还可简写为一个箭头函数：

```js
let values = [0, 1, 5, 10, 15];
values.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
console.log(values); // [ 15, 10, 5, 1, 0 ]
```

在这个修改版函数中，如果第一个值应该排在第二个值后面则返回 1，如果第一个值应该排在第二 个值前面则返回1。交换这两个返回值之后，较大的值就会排在前头，数组就会按照降序排序。当然， **如果只是想反转数组的顺序，reverse()更简单也更快**。

 **注意** reverse()和 sort()都返回调用它们的数组的引用。 

**如果数组的元素是数值，或者是其 valueOf()方法返回数值的对象（如 Date 对象**），这个比较函 数还可以写得更简单，因为这时可以直接用第二个值减去第一个值：

```js
function compare(value1, value2){
	return value2 - value1;
}
```

比较函数就是要返回小于 0、0 和大于 0 的数值，因此减法操作完全可以满足要求。

### 2.11 操作方法

#### concat()方法

对于数组中的元素，我们有很多操作方法。比如，concat()方法可以在现有数组全部元素基础上 创建一个新数组。**它首先会创建一个当前数组的副本，然后再把它的参数添加到副本末尾，最后返回这 个新构建的数组。**如果传入一个或多个数组，则 concat()会把这些数组的每一项都添加到结果数组。 如果参数不是数组，则直接把它们添加到结果数组末尾。来看下面的例子：

```js
let colors = ["red", "green", "blue"];
let colors2 = colors.concat("yellow", ["black", "brown"]);
console.log(colors); // ["red", "green","blue"]
console.log(colors2); // ["red", "green", "blue", "yellow", "black", "brown"]
```

这里先创建一个包含 3 个值的数组 colors。然后 colors 调用 concat()方法，传入字符串"yellow"和一个包含"black"和"brown"的数组。保存在 colors2 中的结果就是["red", "green", "blue", "yellow", "black", "brown"]。原始数组 colors 保持不变。 

#### Symbol.isConcatSpreadable

**打平数组参数的行为可以重写，**方法是在参数数组上指定一个特殊的符号：Symbol.isConcatSpreadable。这个符号能够阻止 concat()打平参数数组。相反，把这个值设置为 true 可以强制打平 类数组对象：

```js
let colors = ["red", "green", "blue"];
let newColors = ["black", "brown"];
let moreNewColors = {
[Symbol.isConcatSpreadable]: true,
	length: 2,
	0: "pink",
	1: "cyan"
};
newColors[Symbol.isConcatSpreadable] = false;
// 强制不打平数组
let colors2 = colors.concat("yellow", newColors);
// 强制打平类数组对象
let colors3 = colors.concat(moreNewColors);
console.log(colors); // ["red", "green", "blue"]
console.log(colors2); // ["red", "green", "blue", "yellow", ["black", "brown"]]
console.log(colors3); // ["red", "green", "blue", "pink", "cyan"]
```

#### slice()方法

接下来，**方法 slice()用于创建一个包含原有数组中一个或多个元素的新数组**。slice()方法可以 接收一个或两个参数：返回元素的开始索引和结束索引。如果只有一个参数，则 slice()会返回该索引 到数组末尾的所有元素。如果有两个参数，则 slice()返回从开始索引到结束索引对应的所有元素，其 中不包含结束索引对应的元素。记住，这个操作不影响原始数组。来看下面的例子：

```js
let colors = ["red", "green", "blue", "yellow", "purple"];
let colors2 = colors.slice(1);
let colors3 = colors.slice(1, 4);
console.log(colors2); // green,blue,yellow,purple
console.log(colors3); // green,blue,yellow
```

不包括"red"，这是因为拆分操作要从位置 1 开始，即从"green"开始。得到的 colors2 数组包含 "green"、"blue"、"yellow"和"purple"。colors3 数组是通过调用 slice()并传入 1 和 4 得到的， 即从位置 1 开始复制到位置 3。因此 colors3 包含"green"、"blue"和"yellow"。

 **注意** 如果 slice()的参数有负值，那么就以数值长度加上这个负值的结果确定位置。比 如，在包含 5 个元素的数组上调用 slice(-2,-1)，就相当于调用 slice(3,4)。**如果结 束位置小于开始位置，则返回空数组。**

#### splice()方法

或许最强大的数组方法就属 splice()了，使用它的方式可以有很多种。splice()的主要目的是 在数组中间插入元素，但有 3 种不同的方式使用这个方法。

1.  **删除**。需要给 splice()传 2 个参数：**要删除的第一个元素的位置和要删除的元素数量**。可以从 数组中删除任意多个元素，比如 splice(0, 2)会删除前两个元素。 
2.  **插入**。需要给 splice()传 3 个参数：**开始位置、0（要删除的元素数量）和要插入的元素，可 以在数组中指定的位置插入元素。**第三个参数之后还可以传第四个、第五个参数，乃至任意多 个要插入的元素。比如，splice(2, 0, "red", "green")会从数组位置 2 开始插入字符串 "red"和"green"。
3.  **替换**。splice()在删除元素的同时可以在指定位置插入新元素，同样要传入 3 个参数：**开始位 置、要删除元素的数量和要插入的任意多个元素。**要插入的元素数量不一定跟删除的元素数量 一致。比如，splice(2, 1, "red", "green")会在位置 2 删除一个元素，然后从该位置开始 向数组中插入"red"和"green"。 

splice()方法始终返回这样一个数组，它包含从数组中被删除的元素（如果没有删除元素，则返 回空数组）。以下示例展示了上述 3 种使用方式。

```js
let colors = ["red", "green", "blue"];

let removed=colors.splice(0,1);  //删除第一项
console.log(colors); //[ 'green', 'blue' ]
console.log(removed); //[ 'red' ]

removed=colors.splice(1,0,"yellow","orange"); //在位置 1 插入两个元素
console.log(colors); //[ 'green', 'yellow', 'orange', 'blue' ]
console.log(removed); //[]

removed=colors.splice(1,1,"red","purple");  //插入两个值，删除一个元素
console.log(colors); //[ 'green', 'red', 'purple', 'orange', 'blue' ]
console.log(removed); //[ 'yellow' ]
```

 这个例子中，colors 数组一开始包含 3 个元素。第一次调用 splice()时，只删除了第一项，colors 中还有"green"和"blue"。第二次调用 slice()时，在位置 1 插入两项，然后 colors 包含"green"、 "yellow"、"orange"和"blue"。这次没删除任何项，因此返回空数组。最后一次调用 splice()时 删除了位置 1 上的一项，同时又插入了"red"和"purple"。最后，colors 数组包含"green"、"red"、 "purple"、"orange"和"blue"。

### 2.12 搜索和位置方法

ECMAScript 提供两类搜索数组的方法：按严格相等搜索和按断言函数搜索。

#### 严格相等

##### indexOf()

##### lastIndexOf()

##### includes()

ECMAScript 提供了 3 个严格相等的搜索方法：indexOf()、lastIndexOf()和 includes()。其 中，前两个方法在所有版本中都可用，而第三个方法是 ECMAScript 7 新增的。这些方法都接收两个参 数：**要查找的元素和一个可选的起始搜索位置**。indexOf()和 includes()方法从**数组前头**（第一项） 开始向后搜索，而 lastIndexOf()从**数组末尾**（最后一项）开始向前搜索。

 indexOf()和 lastIndexOf()都返回要查找的元素在数组中的位置，如果没找到则返回1。 **includes()返回布尔值，表示是否至少找到一个与指定元素匹配的项**。在比较第一个参数跟数组每一 项时，**会使用全等（===）比较，也就是说两项必须严格相等**。下面来看一些例子：

```js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

console.log(numbers.indexOf(4));  //3
console.log(numbers.lastIndexOf(4));  //5
console.log(numbers.includes(4));  //true

console.log(numbers.indexOf(4,4));  //5
console.log(numbers.lastIndexOf(4,4));  //3
console.log(numbers.includes(4,7));  //false

let person = { name: "Nicholas" };
let people = [{ name: "Nicholas" }];
let morePeople = [person];

console.log(people.indexOf(person));  //-1
console.log(morePeople.indexOf(person));  //0
console.log(people.includes(person));  //false
console.log(morePeople.includes(person));  //true
```

#### 断言函数

ECMAScript 也允许按照定义的断言函数搜索数组，每个索引都会调用这个函数。断言函数的返回 值决定了相应索引的元素是否被认为匹配。 

断言函数接收 3 个参数：**元素、索引和数组本身**。其中元素是数组中当前搜索的元素，索引是当前 元素的索引，而数组就是正在搜索的数组。断言函数返回真值，表示是否匹配。 

##### find()

##### findIndex()

find()和 findIndex()方法使用了断言函数。这两个方法都从数组的最小索引开始。find()返回 第一个匹配的元素，findIndex()返回第一个匹配元素的索引。这**两个方法也都接收第二个可选的参数， 用于指定断言函数内部 this 的值。**

```js
const people = [
	{
		name: "Matt",
		age: 27
	},
	{
		name: "Nicholas",
		age: 29
	}
];
console.log(people.find((element, index, array) => element.age < 28));
// {name: "Matt", age: 27}
console.log(people.findIndex((element, index, array) => element.age < 28));
// 0
```

找到匹配项后，这两个方法都不再继续搜索。

```js
const evens = [2, 4, 6];
// 找到匹配后，永远不会检查数组的最后一个元素
evens.find((element, index, array) => {
	console.log(element);
	console.log(index);
	console.log(array);
	return element === 4;
});
// 2
// 0
// [2, 4, 6]
// 4
// 1
// [2, 4, 6]
```

### 2.13 迭代方法

ECMAScript 为数组定义了 5 个迭代方法。每个方法接收两个参数：**以每一项为参数运行的函数**， 以及**可选的作为函数运行上下文的作用域对象**（影响函数中 this 的值）。传给每个方法的函数接收 3 个参数：**数组元素、元素索引和数组本身**。因具体方法而异，这个函数的执行结果可能会也可能不会影 响方法的返回值。数组的 5 个迭代方法如下。

- every()：对数组每一项都运行传入的函数，如果对每一项函数都返回 true，则这个方法返回 true。
- filter()：对数组每一项都运行传入的函数，函数返回 true 的项会组成数组之后返回。
- forEach()：对数组每一项都运行传入的函数，没有返回值。
- map()：对数组每一项都运行传入的函数，返回由每次函数调用的结果构成的数组。 
- some()：对数组每一项都运行传入的函数，如果有一项函数返回 true，则这个方法返回 true。

 这些方法都不改变调用它们的数组。 

#### every()和 some()

在这些方法中，every()和 some()是最相似的，都是从数组中搜索符合某个条件的元素。对 every() 来说，传入的函数必须对每一项都返回 true，它才会返回 true；否则，它就返回 false。而对 some() 来说，只要有一项让传入的函数返回 true，它就会返回 true。下面是一个例子：

```js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

let r1=numbers.every((item,index,array)=>item>2);
console.log(r1);  //false

let r2=numbers.some((item,index,array)=>item>2);
console.log(r2);  //true
```

以上代码调用了 every()和 some()，传入的函数都是在给定项大于 2 时返回 true。every()返回 false 是因为并不是每一项都能达到要求。而 some()返回 true 是因为至少有一项满足条件。

#### filter()方法

下面再看一看 filter()方法。这个方法**基于给定的函数来决定某一项是否应该包含在它返回的数组中**。比如，要返回一个所有数值都大于 2 的数组，可以使用如下代码：

```js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

let r1=numbers.filter((item,index,array)=>item>2);
console.log(r1);  //[ 3, 4, 5, 4, 3 ]
```

这里，调用 filter()返回的数组包含 3、4、5、4、3，因为只有对这些项传入的函数才返回 true。这个方法非常适合从数组中筛选满足给定条件的元素。

####  map()方法

接下来 map()方法也会返回一个数组。这个数组的**每一项都是对原始数组中同样位置的元素运行传入函数而返回的结果**。例如，可以将一个数组中的每一项都乘以 2，并返回包含所有结果的数组，如下所示：

```js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

let r1=numbers.map((item,index,array)=>item**2);
console.log(r1);  //[1, 4, 9, 16, 25, 16, 9, 4,  1 ]
```

以上代码返回了一个数组，包含原始数组中每个值平方的结果。这个方法非常适合创建一个与原始数组元素一一对应的新数组。

####  forEach()方法

最后，再来看一看 forEach()方法。这个方法只会对每一项运行传入的函数，没有返回值。**本质上，forEach()方法相当于使用 for 循环遍历数组**。比如：

```js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

numbers.forEach((item,index,array)=>{
	if (item>4) {
		console.log(item);
	}
});  //5

numbers.forEach(function(item,index,array){
	if (item>this.value) {
		console.log(item);
	}
},{value:3});  //4,5,4

```

数组的这些迭代方法通过执行不同操作方便了对数组的处理。

### 2.14 归并方法

ECMAScript 为数组提供了两个归并方法：reduce()和 reduceRight()。这两个方法都会迭代数 组的所有项，并在此基础上构建一个最终返回值。reduce()方法从数组第一项开始遍历到最后一项。 而 reduceRight()从最后一项开始遍历至第一项。 

这两个方法都接收两个参数：**对每一项都会运行的归并函数**，以及**可选的以之为归并起点的初始值**。 传给 reduce()和 reduceRight()的函数接收 4 个参数：**上一个归并值、当前项、当前项的索引和数 组本身**。这个函数返回的任何值都会作为下一次调用同一个函数的第一个参数。如果没有给这两个方法 传入可选的第二个参数（作为归并起点值），则第一次迭代将从数组的第二项开始，因此传给归并函数 的第一个参数是数组的第一项，第二个参数是数组的第二项。 

#### reduce()

可以使用 reduce()函数执行累加数组中所有数值的操作，比如：

```js
let numbers = [1, 2, 3, 4, 5];

let sum=numbers.reduce((prev,cur,index,array)=>prev+cur);
console.log(sum);  //15

let mul=numbers.reduce((prev,cur,index)=>prev*cur);
console.log(mul);  //120

```

第一次执行归并函数时，prev 是 1，cur 是 2。第二次执行时，prev 是 3（1 + 2），cur 是 3（数组第三项）。如此递进，直到把所有项都遍历一次，最后返回归并结果。

#### reduceRight()方法

reduceRight()方法与之类似，只是方向相反。来看下面的例子：

```js
let numbers = [1, 2, 3, 4, 5];

let sum=numbers.reduceRight((prev,cur,index,array)=>prev+cur);
console.log(sum);  //15

let mul=numbers.reduceRight((prev,cur,index)=>prev*cur);
console.log(mul);  //120

```

在这里，第一次调用归并函数时 prev 是 5，而 cur 是 4。当然，最终结果相同，因为归并操作都是简单的加法。

究竟是使用 reduce()还是 reduceRight()，只取决于遍历数组元素的方向。除此之外，这两个方法没什么区别。



## 3 定型数组

定型数组（typed array）是 ECMAScript 新增的结构，目的是提升向原生库传输数据的效率。实际上， JavaScript 并没有“TypedArray”类型，它所指的其实是一种特殊的包含数值类型的数组。为理解如何使 用定型数组，有必要先了解一下它的用途。

### 3.1 历史

### 3.2 ArrayBuffer

**Float32Array 实际上是一种“视图**”，可以允许 JavaScript 运行时访问一块名为 ArrayBuffer 的预分配内存。**ArrayBuffer 是所有定型数组及视图引用的基本单位**。

**注意** SharedArrayBuffer 是 ArrayBuffer 的一个变体，可以无须复制就在执行上下文间传递它。

ArrayBuffer()是一个普通的 JavaScript 构造函数，**可用于在内存中分配特定数量的字节空间**。

```js
let buf=new ArrayBuffer(16);  // 在内存中分配 16 字节
console.log(buf.byteLength);  //16
```

**ArrayBuffer 一经创建就不能再调整大小**。不过，可以使用 slice()复制其全部或部分到一个新实例中：

```js
let buf1=new ArrayBuffer(16);  // 在内存中分配 16 字节
let buf2=buf1.slice(4,12);
console.log(buf2.byteLength);  //8
```

ArrayBuffer 某种程度上类似于 C++的 malloc()，但**也有几个明显的区别**。 

- malloc()在分配失败时会返回一个 null 指针。ArrayBuffer 在分配失败时会抛出错误。 
- malloc()可以利用虚拟内存，因此最大可分配尺寸只受可寻址系统内存限制。ArrayBuffer 分配的内存不能超过 Number.MAX_SAFE_INTEGER（253  1）字节。 
- malloc()调用成功不会初始化实际的地址。声明 ArrayBuffer 则会将所有二进制位初始化 为 0。 
- 通过 malloc()分配的堆内存除非调用 free()或程序退出，否则系统不能再使用。而通过声明 ArrayBuffer 分配的堆内存可以被当成垃圾回收，不用手动释放。 

不能仅通过对 ArrayBuffer 的引用就读取或写入其内容。**要读取或写入 ArrayBuffer，就必须 通过视图**。视图有不同的类型，但引用的都是 ArrayBuffer 中存储的二进制数据。

### 3.3 DataView

第一种允许你读写 ArrayBuffer 的视图是 DataView。这个视图专为文件 I/O 和网络 I/O 设计，其 API 支持对缓冲数据的高度控制，但相比于其他类型的视图性能也差一些。DataView 对缓冲内容没有 任何预设，也不能迭代。 

必须在对已有的 ArrayBuffer 读取或写入时才能创建 DataView 实例。这个实例可以使用全部或 部分 ArrayBuffer，且维护着对该缓冲实例的引用，以及视图在缓冲中开始的位置。

```js
let buf=new ArrayBuffer(16);  // 在内存中分配 16 字节

//DataView 默认使用整个 ArrayBuffer
let fullDataView=new DataView(buf);
console.log(fullDataView.byteOffset);  //0
console.log(fullDataView.byteLength);  //16
console.log(fullDataView.buffer===buf);  //true

// 构造函数接收一个可选的字节偏移量和字节长度
// byteOffset=0 表示视图从缓冲起点开始
// byteLength=8 限制视图为前 8 个字节
const firstHalfDataView = new DataView(buf, 0, 8);
console.log(firstHalfDataView.byteOffset); // 0
console.log(firstHalfDataView.byteLength); // 8
console.log(firstHalfDataView.buffer === buf); // true

// 如果不指定，则 DataView 会使用剩余的缓冲
// byteOffset=8 表示视图从缓冲的第 9 个字节开始
// byteLength 未指定，默认为剩余缓冲
const secondHalfDataView = new DataView(buf, 8);
console.log(secondHalfDataView.byteOffset); // 8
console.log(secondHalfDataView.byteLength); // 8
console.log(secondHalfDataView.buffer === buf); // true
```

要通过 DataView 读取缓冲，还需要几个组件。

- 首先是要读或写的字节偏移量。可以看成 DataView 中的某种“地址”。
- DataView 应该使用 ElementType 来实现 JavaScript 的 Number 类型到缓冲内二进制格式的转换。
- 最后是内存中值的字节序。默认为大端字节序。

#### ElementType

DataView 对存储在缓冲内的数据类型没有预设。它暴露的 API 强制开发者在读、写时指定一个ElementType，然后 DataView 就会忠实地为读、写而完成相应的转换。
ECMAScript 6 支持 8 种不同的 ElementType（见下表）。

![8 种不同的 ElementType](E:\pogject\学习笔记\image\js\8 种不同的 ElementType.png)

DataView 为上表中的每种类型都暴露了 get 和 set 方法，这些方法使用 byteOffset（字节偏移量）定位要读取或写入值的位置。类型是可以互换使用的，如下例所示：

```js
let buf=new ArrayBuffer(2);  // // 在内存中分配两个字节并声明一个 DataView
let view=new DataView(buf);

// 说明整个缓冲确实所有二进制位都是 0
// 检查第一个和第二个字符
console.log(view.getInt8(0));  //0
console.log(view.getInt8(1));  //0

// 检查整个缓冲
console.log(view.getInt16(0));  //0

// 将整个缓冲都设置为 1
// 255 的二进制表示是 11111111（2^8 - 1）
view.setUint8(0,255);
console.log(view.getInt8(0));  //-1

// DataView 会自动将数据转换为特定的 ElementType
// 255 的十六进制表示是 0xFF
view.setUint8(1,0xFF);
console.log(view.getInt8(1));  //-1

// 现在，缓冲里都是 1 了
// 如果把它当成二补数的有符号整数，则应该是-1
console.log(view.getInt16(0)); // -1
```

#### 字节序

前面例子中的缓冲有意回避了字节序的问题。

**“字节序**”指的是计算系统维护的一种字节顺序的约 定。DataView 只支持两种约定：大端字节序和小端字节序。**大端字节序**也称为“网络字节序”，意思 是最高有效位保存在第一个字节，而最低有效位保存在最后一个字节。**小端字节序**正好相反，即最低有 效位保存在第一个字节，最高有效位保存在最后一个字节。 

JavaScript 运行时所在系统的原生字节序决定了如何读取或写入字节，但 DataView 并不遵守这 个约定。对一段内存而言，DataView 是一个中立接口，它会遵循你指定的字节序。DataView 的所 有 API 方法都以大端字节序作为默认值，但接收一个可选的布尔值参数，设置为 true 即可启用小端 字节序。

```js
let buf=new ArrayBuffer(2);  // 在内存中分配两个字节并声明一个 DataView
let view=new DataView(buf);

// 填充缓冲，让第一位和最后一位都是 1
view.setUint8(0, 0x80); // 设置最左边的位等于 1
view.setUint8(1, 0x01); // 设置最右边的位等于 1

// 缓冲内容（为方便阅读，人为加了空格）
// 0x8 0x0 0x0 0x1
// 1000 0000 0000 0001

// 按大端字节序读取 Uint16
// 0x80 是高字节，0x01 是低字节
// 0x8001 = 2^15 + 2^0 = 32768 + 1 = 32769
console.log(view.getUint16(0)); // 32769

// 按小端字节序读取 Uint16
// 0x01 是高字节，0x80 是低字节
// 0x0180 = 2^8 + 2^7 = 256 + 128 = 384
console.log(view.getUint16(0, true)); // 384

// 按大端字节序写入 Uint16
view.setUint16(0, 0x0004);

// 缓冲内容（为方便阅读，人为加了空格）
// 0x0 0x0 0x0 0x4
// 0000 0000 0000 0100

console.log(view.getUint8(0)); // 0
console.log(view.getUint8(1)); // 4

// 按小端字节序写入 Uint16
view.setUint16(0, 0x0002, true);

// 缓冲内容（为方便阅读，人为加了空格）
// 0x0 0x2 0x0 0x0
// 0000 0010 0000 0000

console.log(view.getUint8(0)); // 2
console.log(view.getUint8(1)); // 0
```

#### 边界情形

DataView 完成读、写操作的前提是必须有充足的缓冲区，否则就会抛出 RangeError：

```js
const buf = new ArrayBuffer(6);
const view = new DataView(buf);
// 尝试读取部分超出缓冲范围的值
view.getInt32(4);
// RangeError
// 尝试读取超出缓冲范围的值
view.getInt32(8);
// RangeError
// 尝试读取超出缓冲范围的值
view.getInt32(-1);
// RangeError
// 尝试写入超出缓冲范围的值
view.setInt32(4, 123);
// RangeError
```

DataView 在写入缓冲里会尽最大努力把一个值转换为适当的类型，后备为 0。如果无法转换，则抛出错误：

```js
const buf = new ArrayBuffer(1);
const view = new DataView(buf);
view.setInt8(0, 1.5);
console.log(view.getInt8(0)); // 1
view.setInt8(0, [4]);
console.log(view.getInt8(0)); // 4
view.setInt8(0, 'f');
console.log(view.getInt8(0)); // 0
view.setInt8(0, Symbol());
// TypeError
```

### 3.4 定型数组

**定型数组**是另一种形式的 ArrayBuffer 视图。虽然概念上与 DataView 接近，但定型数组的区别 在于，**它特定于一种 ElementType 且遵循系统原生的字节序**。相应地，定型数组提供了适用面更广的 API 和更高的性能。设计定型数组的目的就是提高与 WebGL 等原生库交换二进制数据的效率。由于定 型数组的二进制表示对操作系统而言是一种容易使用的格式，JavaScript 引擎可以重度优化算术运算、 按位运算和其他对定型数组的常见操作，因此使用它们速度极快。 

#### 创建定型数组的方式

**创建定型数组的方式**包括读取已有的缓冲、使用自有缓冲、填充可迭代结构，以及填充基于任意类 型的定型数组。另外，通过<ElementType>.from()和<ElementType>.of()也可以创建定型数组：

```js
// 创建一个 12 字节的缓冲
let buf=new ArrayBuffer(12);

// 创建一个引用该缓冲的 Int32Array
let ints=new Int32Array(buf);
//这个定型数组知道自己的每个元素需要 4 字节
// 因此长度为 3
console.log(ints.length);  //3

// 创建一个长度为 6 的 Int32Array
let ints2=new Int32Array(6);
// 每个数值使用 4 字节，因此 ArrayBuffer 是 24 字节
console.log(ints2.length);  //6
// 类似 DataView，定型数组也有一个指向关联缓冲的引用
console.log(ints2.buffer.byteLength);  //24

// 创建一个包含[2, 4, 6, 8]的 Int32Array
let ints3=new Int32Array([2,4,6,8]);
console.log(ints3.length);  //4
console.log(ints3.buffer.byteLength);  //16
console.log(ints3[2]);  //6

// 通过复制 ints3 的值创建一个 Int16Array
let ints4=new Int16Array(ints3);
// 这个新类型数组会分配自己的缓冲
// 对应索引的每个值会相应地转换为新格式
console.log(ints4.length);  //4
console.log(ints4.buffer.byteLength);  //8
console.log(ints4[2]);  //6

// 基于普通数组来创建一个 Int16Array
let ints5=Int16Array.from([3,5,7,9]);
console.log(ints5.length);  //4
console.log(ints5.buffer.byteLength);  //8
console.log(ints5[2]);  //7

// 基于传入的参数创建一个 Float32Array
let float1=Float32Array.of(3.14,2.718,1.618);
console.log(float1.length);  //3
console.log(float1.buffer.byteLength);  //12
console.log(float1[2]);  //1.6180000305175781
```

定型数组的构造函数和实例都有一个 BYTES_PER_ELEMENT 属性，返回该类型数组中每个元素的大小：

```js
console.log(Int16Array.BYTES_PER_ELEMENT);  //2
console.log(Int32Array.BYTES_PER_ELEMENT);  //4

let ints6=new Int32Array(1);
let float2=new Float64Array(1);
console.log(ints6.BYTES_PER_ELEMENT);  //4
console.log(float2.BYTES_PER_ELEMENT);  //8

```

如果定型数组没有用任何值初始化，则其关联的缓冲会以 0 填充：

```js
let ints7=new Int32Array(4);
console.log(ints7[0]);  //0
console.log(ints7[1]);  //0
console.log(ints7[2]);  //0
console.log(ints7[3]);  //0
```

#### 定型数组行为

从很多方面看，定型数组与普通数组都很相似。定型数组支持如下操作符、方法和属性：

```js
[] 、copyWithin() 、entries() 、every() 、fill() 、filter() 、find() 、findIndex() 、forEach() 、indexOf() 、join() 、keys() 、lastIndexOf() 、length 、map() 、reduce() 、reduceRight() 、reverse() 、slice() 、some() 、sort() 、toLocaleString() 、toString() 、values()
```

其中，返回新数组的方法也会返回包含同样元素类型（element type）的新定型数组：

```js
const ints = new Int16Array([1, 2, 3]);
const doubleints = ints.map(x => 2*x);
console.log(doubleints instanceof Int16Array); // true
```

定型数组有一个 Symbol.iterator 符号属性，因此可以通过 for..of 循环和扩展操作符来操作：

```js
const ints = new Int16Array([1, 2, 3]);
for (let int of ints){
	console.log(int);  //1,2,3
}

console.log(Math.max(...ints)); //3
```

#### 合并、复制和修改定型数组

定型数组同样使用数组缓冲来存储数据，**而数组缓冲无法调整大小**。因此，下列方法不适用于定型数组：

```
concat()  、pop()  、push()  、shift()  、splice()  、unshift()
```

不过，**定型数组也提供了两个新方法，可以快速向外或向内复制数据**：set()和 subarray()。

##### set()

set()从提供的数组或定型数组中把值复制到当前定型数组中指定的索引位置：

```js
// 创建长度为 8 的 int16 数组
const container = new Int16Array(8);

// 把定型数组复制为前 4 个值
// 偏移量默认为索引 0
container.set(Int8Array.of(1,2,3,4));
console.log(container); //Int16Array(8) [1, 2, 3, 4, 0, 0, 0, 0 ]

// 把普通数组复制为后 4 个值
// 偏移量 4 表示从索引 4 开始插入
container.set([5,6,7,8],4);
console.log(container); //Int16Array(8) [1, 2, 3, 4, 5, 6, 7, 8 ]

// 溢出会抛出错误
container.set([5,6,7,8], 7);
// RangeError: offset is out of bounds
```

##### subarray()

subarray()执行与 set()相反的操作，它会基于从原始定型数组中复制的值返回一个新定型数组。复制值时的开始索引和结束索引是可选的：

```js
let source=Int16Array.of(2,4,6,8);

// 把整个数组复制为一个同类型的新数组
let fullCopy=source.subarray();
console.log(fullCopy);  //Int16Array(4) [ 2, 4, 6, 8 ]

// 从索引 2 开始复制数组
let halfCopy=source.subarray(2);
console.log(halfCopy);  //Int16Array(2) [ 6, 8 ]

// 从索引 1 开始复制到索引 3
let partialCopy =source.subarray(1,3);
console.log(partialCopy);  //Int16Array(2) [ 4, 6 ]
```

定型数组没有原生的拼接能力，但使用定型数组 API 提供的很多工具可以手动构建：

```js
// 第一个参数是应该返回的数组类型
// 其余参数是应该拼接在一起的定型数组
function typedArrayConcat(typedArrayConstructor,...typedArrays){
	// 计算所有数组中包含的元素总数
	let numElements=typedArrays.reduce((x,y)=>(x.length || x) +y.length);
	// 按照提供的类型创建一个数组，为所有元素留出空间
	let resultArray=new typedArrayConstructor(numElements);
	// 依次转移数组
	let currentOffset=0;
	typedArrays.map(x=>{
		resultArray.set(x,currentOffset);
		currentOffset+=x.length;
	});
	return resultArray;
}

let concatArray=typedArrayConcat(Int32Array,Int8Array.of(1,2,3),
	Int16Array.of(4,5,6),Float32Array.of(7,8,9));

console.log(concatArray);  //Int32Array(9) [1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(concatArray instanceof Int32Array); //true
```

#### 下溢和上溢

定型数组中值的下溢和上溢不会影响到其他索引，但仍然需要考虑数组的元素应该是什么类型。定型数组对于可以存储的每个索引只接受一个相关位，而不考虑它们对实际数值的影响。以下代码演示了如何处理下溢和上溢：

```js
// 长度为 2 的有符号整数数组
// 每个索引保存一个二补数形式的有符号整数
// 范围是-128（-1 * 2^7）~127（2^7 - 1）
const ints = new Int8Array(2);
// 长度为 2 的无符号整数数组
// 每个索引保存一个无符号整数
// 范围是 0~255（2^7 - 1）
const unsignedInts = new Uint8Array(2);

// 上溢的位不会影响相邻索引
// 索引只取最低有效位上的 8 位
unsignedInts[1] = 256; // 0x100
console.log(unsignedInts); // [0, 0]
unsignedInts[1] = 511; // 0x1FF
console.log(unsignedInts); // [0, 255]

// 下溢的位会被转换为其无符号的等价值
// 0xFF 是以二补数形式表示的-1（截取到 8 位）,
// 但 255 是一个无符号整数
unsignedInts[1] = -1 // 0xFF (truncated to 8 bits)
console.log(unsignedInts); // [0, 255]

// 上溢自动变成二补数形式
// 0x80 是无符号整数的 128，是二补数形式的-128
ints[1] = 128; // 0x80
console.log(ints); // [0, -128]

// 下溢自动变成二补数形式
// 0xFF 是无符号整数的 255，是二补数形式的-1
ints[1] = 255; // 0xFF
console.log(ints); // [0, -1]
```

除了 8 种元素类型，还有一种“夹板”数组类型：Uint8ClampedArray，不允许任何方向溢出。超出最大值 255 的值会被向下舍入为 255，而小于最小值 0 的值会被向上舍入为 0。

```js
const clampedInts = new Uint8ClampedArray([-1, 0, 255, 256]);
console.log(clampedInts); // [0, 0, 255, 255]
```

按照 JavaScript 之父 Brendan Eich 的说法：“Uint8ClampedArray 完全是 HTML5canvas 元素的历史留存。除非真的做跟 canvas 相关的开发，否则不要使用它。”



## 4 Map

ECMAScript 6 以前，在 JavaScript 中实现“键/值”式存储可以使用 Object 来方便高效地完成，也 就是使用对象属性作为键，再使用属性来引用值。但这种实现并非没有问题，为此 TC39 委员会专门为 “键/值”存储定义了一个规范。 

作为 ECMAScript 6 的新增特性，Map 是一种新的集合类型，为这门语言带来了真正的键/值存储机 制。Map 的大多数特性都可以通过 Object 类型实现，但二者之间还是存在一些细微的差异。具体实践 中使用哪一个，还是值得细细甄别。

### 4.1 基本 API

#### 初始化

使用 new 关键字和 Map 构造函数可以创建一个空映射：

```js
const m = new Map();
```

如果想在创建的同时初始化实例，可以给 Map 构造函数传入一个可迭代对象，需要包含键/值对数组。可迭代对象中的每个键/值对都会按照迭代顺序插入到新映射实例中：

```js
// 使用嵌套数组初始化映射
const m1 = new Map([
	["key1", "val1"],
	["key2", "val2"],
	["key3", "val3"]
]);
console.log(m1.size); // 3

// 使用自定义迭代器初始化映射
let m2=new Map({
	[Symbol.iterator]:function*(){
		yield ["key1","val1"];
		yield ["key2","val2"];
		yield ["key3","val3"];
	}
});
console.log(m2.size); // 3

// 映射期待的键/值对，无论是否提供
let m3=new Map([[]]);
console.log(m3.has(undefined));  //true
console.log(m3.get(undefined));  //undefined

```

#### set()和get()

####  size 属性

#### delete()和 clear()

初始化之后，可以使用 set()方法再添加键/值对。另外，可以使用 get()和 has()进行查询，可以通过 size 属性获取映射中的键/值对的数量，还可以使用 delete()和 clear()删除值。

```js
let m=new Map();
console.log(m.has("firstName"));  //false
console.log(m.get("firstName"));  //undefined
console.log(m.size);  //0

m.set("firstName","sadio").set("lastName","mane");
console.log(m.has("firstName"));  //true
console.log(m.get("firstName"));  //sadio
console.log(m.size);  //2

m.delete("firstName");  //只删除这一个键/值对
console.log(m.has("firstName")); // false
console.log(m.has("lastName")); // true
console.log(m.size); // 1

m.clear();  //清除这个映射实例中的所有键/值对
console.log(m.has("firstName")); // false
console.log(m.has("lastName")); // false
console.log(m.size); // 0
```

set()方法返回映射实例，因此可以把多个操作连缀起来，包括初始化声明：

```js
let m=new Map().set("key1", "val1");
m.set("key2", "val2").set("key3", "val3");

console.log(m.size); // 3
```

与 Object 只能使用数值、字符串或符号作为键不同，**Map 可以使用任何 JavaScript 数据类型作为键**。Map 内部使用 SameValueZero 比较操作（ECMAScript 规范内部定义，语言中不能使用），基本上相当于使用严格对象相等的标准来检查键的匹配性。**与 Object 类似，映射的值是没有限制的。**

```js
let m=new Map();

let functionKey=function(){};
let symbolKey=Symbol();
let objectKey=new Object();

m.set(functionKey,"functionValue");
m.set(symbolKey,"symbolValue");
m.set(objectKey,"objectValue")


console.log(m.size); // 3
console.log(m.get(functionKey));  //functionValue
console.log(m.get(symbolKey));  //symbolValue
console.log(m.get(objectKey));  //objectValue

// SameValueZero 比较意味着独立实例不冲突
console.log(m.get(function(){}));  //undefined
```

**与严格相等一样，在映射中用作键和值的对象及其他“集合”类型，在自己的内容或属性被修改时仍然保持不变**：

```js
let m=new Map();

const objKey = {},
objVal = {},
arrKey = [],
arrVal = [];

m.set(objKey, objVal);
m.set(arrKey, arrVal);

objKey.foo = "foo";
objVal.bar = "bar";

arrKey.push("foo");
arrVal.push("bar");

console.log(m.get(objKey)); // {bar: "bar"}
console.log(m.get(arrKey)); // ["bar"]
```

SameValueZero 比较也可能导致意想不到的冲突：

```js
let m=new Map();

const a = 0/"", // NaN
b = 0/"", // NaN
pz = +0,
nz = -0;

console.log(a === b); // false
console.log(pz === nz); // true
m.set(a, "foo");
m.set(pz, "bar");
console.log(m.get(b)); // foo
console.log(m.get(nz)); // bar
```

**注意** SameValueZero 是 ECMAScript 规范新增的相等性比较算法。关于 ECMAScript 的相等性比较，可以参考 MDN 文档中的文章“Equality Comparisons and Sameness”。

### 4.2 顺序与迭代

与 Object 类型的一个主要差异是，Map 实例会维护键值对的插入顺序，因此可以根据插入顺序执行迭代操作。

**映射实例可以提供一个迭代器（Iterator），能以插入顺序生成[key, value]形式的数组。**可以通过 entries()方法（或者 Symbol.iterator 属性，它引用 entries()）取得这个迭代器：

```js
let m=new Map([
	["key1", "val1"],
	["key2", "val2"],
	["key3", "val3"]
]);

console.log(m.entries===m[Symbol.iterator]); // true

for (let pair of m.entries()){
	console.log(pair);
}
//一样效果
for (let pair of m[Symbol.iterator]()){
	console.log(pair);
}
/*
[ 'key1', 'val1' ]
[ 'key2', 'val2' ]
[ 'key3', 'val3' ]
*/
```

因为 entries()是默认迭代器，所以可以直接对映射实例使用扩展操作，把映射转换为数组：

```js
console.log([...m]);
//[ [ 'key1', 'val1' ], [ 'key2', 'val2' ], [ 'key3', 'val3' ] ]
```

如果不使用迭代器，而是使用回调方式，则可以调用映射的 forEach(callback, opt_thisArg)方法并传入回调，依次迭代每个键/值对。传入的回调接收可选的第二个参数，这个参数用于重写回调内部 this 的值：

```js
m.forEach((val,key)=>console.log(`${key}->${val}`));
// key1 -> val1
// key2 -> val2
// key3 -> val3
```

keys()和 values()分别返回以插入顺序生成键和值的迭代器：

```js
for (let key of m.keys()){
	console.log(key);
}
for (let val of m.values()){
	console.log(val);
}
```

键和值在迭代器遍历时是可以修改的，但映射内部的引用则无法修改。当然，这并不妨碍修改作为键或值的对象内部的属性，因为这样并不影响它们在映射实例中的身份：

```js
const m1 = new Map([
	["key1", "val1"]
]);
// 作为键的字符串原始值是不能修改的
for (let key of m1.keys()) {
	key = "newKey";
	console.log(key); // newKey
	console.log(m1.get("key1")); // val1
}
const keyObj = {id: 1};
const m = new Map([
	[keyObj, "val1"]
]);
// 修改了作为键的对象的属性，但对象在映射内部仍然引用相同的值
for (let key of m.keys()) {
	key.id = "newKey";
	console.log(key); // {id: "newKey"}
	console.log(m.get(keyObj)); // val1
}
console.log(keyObj); // {id: "newKey"}
```

### 4.3 选择 Object 还是 Map

对于多数 Web 开发任务来说，选择 Object 还是 Map 只是个人偏好问题，影响不大。不过，对于 在乎内存和性能的开发者来说，对象和映射之间确实存在显著的差别。 
1. 内存占用 
    Object 和 Map 的工程级实现在不同浏览器间存在明显差异，但存储单个键/值对所占用的内存数量 都会随键的数量线性增加。批量添加或删除键/值对则取决于各浏览器对该类型内存分配的工程实现。 **不同浏览器的情况不同，但给定固定大小的内存，Map 大约可以比 Object 多存储 50%的键/值对**。 
2. 插入性能 
    向 Object 和 Map 中插入新键/值对的消耗大致相当，不过插入 Map 在所有浏览器中一般会稍微快 一点儿。对这两个类型来说，插入速度并不会随着键/值对数量而线性增加。**如果代码涉及大量插入操 作，那么显然 Map 的性能更佳。** 
3. 查找速度 
    与插入不同，从大型 Object 和 Map 中查找键/值对的性能差异极小，但如果只包含少量键/值对， 则 Object 有时候速度更快。在把 Object 当成数组使用的情况下（比如使用连续整数作为属性），浏 览器引擎可以进行优化，在内存中使用更高效的布局。这对 Map 来说是不可能的。对这两个类型而言， 查找速度不会随着键/值对数量增加而线性增加。**如果代码涉及大量查找操作，那么某些情况下可能选 择 Object 更好一些。** 
4. 删除性能 
    使用 delete 删除 Object 属性的性能一直以来饱受诟病，目前在很多浏览器中仍然如此。为此， 出现了一些伪删除对象属性的操作，包括把属性值设置为 undefined 或 null。但很多时候，这都是一 种讨厌的或不适宜的折中。而对大多数浏览器引擎来说，Map 的 delete()操作都比插入和查找更快。 **如果代码涉及大量删除操作，那么毫无疑问应该选择 Map。**



## 5 WeakMap（弱映射）

ECMAScript 6 新增的“弱映射”（WeakMap）是一种新的集合类型，为这门语言带来了增强的键/值对存储机制。WeakMap 是 Map 的“兄弟”类型，其 API 也是 Map 的子集。WeakMap 中的“weak”（弱），描述的是 JavaScript 垃圾回收程序对待“弱映射”中键的方式。

### 5.1 基本 API

可以使用 new 关键字实例化一个空的 WeakMap：

```js
const wm = new WeakMap();
```

**弱映射中的键只能是 Object 或者继承自 Object 的类型**，尝试使用非对象设置键会抛出TypeError。值的类型没有限制。

如果想在初始化时填充弱映射，则构造函数可以接收一个可迭代对象，其中需要包含键/值对数组。可迭代对象中的每个键/值都会按照迭代顺序插入新实例中：

```js
const key1 = {id: 1},
	key2 = {id: 2},
	key3 = {id: 3};
// 使用嵌套数组初始化弱映射
const wm1 = new WeakMap([
	[key1, "val1"],
	[key2, "val2"],
	[key3, "val3"]
]);
console.log(wm1.get(key1)); // val1
console.log(wm1.get(key2)); // val2
console.log(wm1.get(key3)); // val3

// 原始值可以先包装成对象再用作键
let stringKey=new String("key1");
let wm3=new WeakMap([
	[key1, "val1"],
	[stringKey, "val2"],
	[key3, "val3"]
	]);
console.log(wm3.get(stringKey));  //val2

// 初始化是全有或全无的操作
// 只要有一个键无效就会抛出错误，导致整个初始化失败
let wm2=new WeakMap([
    [key1,"val1"],
    ["badkey","val2"],
    [key3,"val3"]  //TypeError: Invalid value used as weak map key
    ]);
```

初始化之后可以使用 set()再添加键/值对，可以使用 get()和 has()查询，还可以使用 delete()删除：

```js
let wm=new WeakMap();

let key1={id:1},key2={id:2};

console.log(wm.has(key1));  //false
console.log(wm.get(key1));  //undefined

wm.set(key1,"Arnold").set(key2,"mane");

console.log(wm.has(key1)); // true
console.log(wm.get(key1)); // Arnold

wm.delete(key1); // 只删除这一个键/值对
console.log(wm.has(key1)); // false
console.log(wm.has(key2)); // true
```

set()方法返回弱映射实例，因此可以把多个操作连缀起来，包括初始化声明：

```js
const key1 = {id: 1},
	key2 = {id: 2},
	key3 = {id: 3};
const wm = new WeakMap().set(key1, "val1");

wm.set(key2, "val2").set(key3, "val3");

console.log(wm.get(key1)); // val1
console.log(wm.get(key2)); // val2
console.log(wm.get(key3)); // val3
```

### 5.2 弱键

WeakMap 中“weak”表示弱映射的键是“弱弱地拿着”的。意思就是，这些键不属于正式的引用， 不会阻止垃圾回收。但要注意的是，弱映射中值的引用可不是“弱弱地拿着”的。只要键存在，键/值 对就会存在于映射中，并被当作对值的引用，因此就不会被当作垃圾回收。

来看下面的例子：

```js
const wm = new WeakMap();
wm.set({}, "val");
```

set()方法初始化了一个新对象并将它用作一个字符串的键。因为没有指向这个对象的其他引用， 所以当这行代码执行完成后，这个对象键就会被当作垃圾回收。然后，这个键/值对就从弱映射中消失 了，使其成为一个空映射。在这个例子中，**因为值也没有被引用，所以这对键/值被破坏以后，值本身 也会成为垃圾回收的目标。** 

再看一个稍微不同的例子：

```js
const wm = new WeakMap();
const container = {
	key: {}
};

wm.set(container.key, "val");

function removeReference() {
	container.key = null;
}
```

这一次，container 对象维护着一个对弱映射键的引用，因此这个对象键不会成为垃圾回收的目标。不过，如果调用了 removeReference()，就会摧毁键对象的最后一个引用，垃圾回收程序就可以把这个键/值对清理掉。

### 5.3 不可迭代键

**因为 WeakMap 中的键/值对任何时候都可能被销毁，所以没必要提供迭代其键/值对的能力**。当然， 也用不着像 clear()这样一次性销毁所有键/值的方法。WeakMap 确实没有这个方法。因为不可能迭代， 所以也不可能在不知道对象引用的情况下从弱映射中取得值。即便代码可以访问 WeakMap 实例，也没 办法看到其中的内容。 

**WeakMap 实例之所以限制只能用对象作为键，是为了保证只有通过键对象的引用才能取得值**。如果 允许原始值，那就没办法区分初始化时使用的字符串字面量和初始化之后使用的一个相等的字符串了。

### 5.4 使用弱映射

WeakMap 实例与现有 JavaScript 对象有着很大不同，可能一时不容易说清楚应该怎么使用它。这个问题没有唯一的答案，但已经出现了很多相关策略。

#### 私有变量

弱映射造就了在 JavaScript 中实现真正私有变量的一种新方式。前提很明确：私有变量会存储在弱映射中，以对象实例为键，以私有成员的字典为值。
下面是一个示例实现：

```js
const wm = new WeakMap();

class User{
	constructor(id){
		this.idProperty=Symbol('id');
		this.setId(id);
	}
	setPrivate(property,value){
		let privateMembers=wm.get(this) || {};
		privateMembers[property]=value;
		wm.set(this,privateMembers);
	}
	getPrivate(property){
		return wm.get(this)[property];
	}
	setId(id){
		this.setPrivate(this.idProperty,id);
	}
	getId(){
		return this.getPrivate(this.idProperty);
	}
}

let user=new User(123);
console.log(user.getId());  //123
user.setId(456);
console.log(user.getId());  //456

// 并不是真正私有的
console.log(wm.get(user)[user.idProperty]);  //456

```

慧眼独具的读者会发现，对于上面的实现，外部代码只需要拿到对象实例的引用和弱映射，就可以取得“私有”变量了。**为了避免这种访问，可以用一个闭包把 WeakMap 包装起来，这样就可以把弱映射与外界完全隔离开了**：

```js
const User=(()=>{
	const wm = new WeakMap();

	class User{
		constructor(id){
			this.idProperty=Symbol('id');
			this.setId(id);
		}
		setPrivate(property,value){
			let privateMembers=wm.get(this) || {};
			privateMembers[property]=value;
			wm.set(this,privateMembers);
		}
		getPrivate(property){
			return wm.get(this)[property];
		}
		setId(id){
			this.setPrivate(this.idProperty,id);
		}
		getId(){
			return this.getPrivate(this.idProperty);
		}
	}

	return User;
})();
	

let user=new User(123);
console.log(user.getId());  //123
user.setId(456);
console.log(user.getId());  //456

```

这样，拿不到弱映射中的健，也就无法取得弱映射中对应的值。虽然这防止了前面提到的访问，**但整个代码也完全陷入了 ES6 之前的闭包私有变量模式**。

#### DOM 节点元数据

因为 WeakMap 实例不会妨碍垃圾回收，所以非常适合保存关联元数据。来看下面这个例子，其中使用了常规的 Map：

```js
const m = new Map();
const loginButton = document.querySelector('#login');
// 给这个节点关联一些元数据
m.set(loginButton, {disabled: true});
```

假设在上面的代码执行后，页面被 JavaScript 改变了，原来的登录按钮从 DOM 树中被删掉了。但 由于映射中还保存着按钮的引用，所以对应的 DOM 节点仍然会逗留在内存中，除非明确将其从映射中 删除或者等到映射本身被销毁。

 如果这里使用的是弱映射，如以下代码所示，那么**当节点从 DOM 树中被删除后，垃圾回收程序就 可以立即释放其内存（假设没有其他地方引用这个对象）**：

```js
const wm = new WeakMap();
const loginButton = document.querySelector('#login');
// 给这个节点关联一些元数据
wm.set(loginButton, {disabled: true});
```



## 6 Set

CMAScript 6 新增的 Set 是一种新集合类型，为这门语言带来集合数据结构。Set 在很多方面都像是加强的 Map，这是因为它们的大多数 API 和行为都是共有的。

### 6.1 基本 API

使用 new 关键字和 Set 构造函数可以创建一个空集合：

```js
const m = new Set();
```

如果想在创建的同时初始化实例，则可以给 Set 构造函数传入一个可迭代对象，其中需要包含插入到新集合实例中的元素：

```js
// 使用数组初始化集合
const s1 = new Set(["val1", "val2", "val3"]);
console.log(s1.size); // 3
// 使用自定义迭代器初始化集合
const s2 = new Set({
	[Symbol.iterator]: function*() {
		yield "val1";
		yield "val2";
		yield "val3";
	}
});
console.log(s2.size); // 3
```

初始化之后，可以使用 add()增加值，使用 has()查询，通过 size 取得元素数量，以及使用 delete()和 clear()删除元素：

```js
const s = new Set();
console.log(s.has("Matt")); // false
console.log(s.size); // 0

s.add("Matt")
.add("Frisbie");
console.log(s.has("Matt")); // true
console.log(s.size); // 2

s.delete("Matt");
console.log(s.has("Matt")); // false
console.log(s.has("Frisbie")); // true
console.log(s.size); // 1

s.clear(); // 销毁集合实例中的所有值
console.log(s.has("Matt")); // false
console.log(s.has("Frisbie")); // false
console.log(s.size); // 0
```

add()返回集合的实例，所以可以将多个添加操作连缀起来，包括初始化：

```js
const s = new Set().add("val1");
s.add("val2").add("val3");
console.log(s.size); // 3
```

与 Map 类似，**Set 可以包含任何 JavaScript 数据类型作为值**。集合也使用 SameValueZero 操作（ECMAScript 内部定义，无法在语言中使用），基本上相当于使用严格对象相等的标准来检查值的匹配性。

```js
const s = new Set();

const functionVal = function() {};
const symbolVal = Symbol();
const objectVal = new Object();

s.add(functionVal);
s.add(symbolVal);
s.add(objectVal);

console.log(s.has(functionVal)); // true
console.log(s.has(symbolVal)); // true
console.log(s.has(objectVal)); // true

// SameValueZero 检查意味着独立的实例不会冲突
console.log(s.has(function() {})); // false
```

与严格相等一样，用作值的对象和其他“集合”类型在自己的内容或属性被修改时也不会改变：

```js
const s = new Set();
const objVal = {},
arrVal = [];
s.add(objVal);
s.add(arrVal);
objVal.bar = "bar";
arrVal.push("bar");
console.log(s.has(objVal)); // true
console.log(s.has(arrVal)); // true
```

add()和 delete()操作是幂等的。delete()返回一个布尔值，表示集合中是否存在要删除的值：

```js
const s = new Set();
s.add('foo');
console.log(s.size); // 1
s.add('foo');
console.log(s.size); // 1
// 集合里有这个值
console.log(s.delete('foo')); // true
// 集合里没有这个值
console.log(s.delete('foo')); // false
```

### 6.2 顺序与迭代

Set 会维护值插入时的顺序，因此支持按顺序迭代。

集合实例可以提供一个迭代器（Iterator），能以插入顺序生成集合内容。可以通过 values()方法及其别名方法 keys()（或者 Symbol.iterator 属性，它引用 values()）取得这个迭代器：

```js
const s = new Set(["val1", "val2", "val3"]);
console.log(s.values === s[Symbol.iterator]); // true
console.log(s.keys === s[Symbol.iterator]); // true
for (let value of s.values()) {
console.log(value);
}
// val1
// val2
// val3
for (let value of s[Symbol.iterator]()) {
console.log(value);
}
// val1
// val2
// val3
```

因为 values()是默认迭代器，所以可以直接对集合实例使用扩展操作，把集合转换为数组：

```js
const s = new Set(["val1", "val2", "val3"]);
console.log([...s]); // ["val1", "val2", "val3"]
```

集合的 entries()方法返回一个迭代器，可以按照插入顺序产生包含两个元素的数组，**这两个元素是集合中每个值的重复出现**：

```js
const s = new Set(["val1", "val2", "val3"]);
for (let pair of s.entries()) {
	console.log(pair);
}
// ["val1", "val1"]
// ["val2", "val2"]
// ["val3", "val3"]
```

如果不使用迭代器，而是使用回调方式，则可以调用集合的 forEach()方法并传入回调，依次迭代每个键/值对。传入的回调接收可选的第二个参数，这个参数用于重写回调内部 this 的值：

```js
const s = new Set(["val1", "val2", "val3"]);
s.forEach((val, dupVal) => console.log(`${val} -> ${dupVal}`));
// val1 -> val1
// val2 -> val2
// val3 -> val3
```

**修改集合中值的属性不会影响其作为集合值的身份**：

```js
const s1 = new Set(["val1"]);
// 字符串原始值作为值不会被修改
for (let value of s1.values()) {
	value = "newVal";
	console.log(value); // newVal
	console.log(s1.has("val1")); // true
}

const valObj = {id: 1};
const s2 = new Set([valObj]);
// 修改值对象的属性，但对象仍然存在于集合中
for (let value of s2.values()) {
	value.id = "newVal";
	console.log(value); // {id: "newVal"}
	console.log(s2.has(valObj)); // true
}
console.log(valObj); // {id: "newVal"}
```

### 6.3 定义正式集合操作

从各方面来看，Set 跟 Map 都很相似，只是 API 稍有调整。唯一需要强调的就是集合的 API 对自 身的简单操作。很多开发者都喜欢使用 Set 操作，但需要手动实现：或者是子类化 Set，或者是定义一 个实用函数库。要把两种方式合二为一，可以在子类上实现静态方法，然后在实例方法中使用这些静态 方法。在实现这些操作时，需要考虑几个地方。
- 某些 Set 操作是有关联性的，因此最好让实现的方法能支持处理任意多个集合实例。
- Set 保留插入顺序，所有方法返回的集合必须保证顺序。
- 尽可能高效地使用内存。扩展操作符的语法很简洁，但尽可能避免集合和数组间的相互转换能 够节省对象初始化成本。
- 不要修改已有的集合实例。union(a, b)或 a.union(b)应该返回包含结果的新集合实例。

```js
class Xset extends Set{
	union(...sets){
		return Xset.union(this,...sets);
	}
	intersection(...sets){
		return Xset.intersection(this,...sets);
	}
	difference(set){
		return Xset.difference(this,set);
	}
	symmetricDifference(set){
		return Xset.symmetricDifference(this,set);
	}
	cartesianProduct(set){
		return Xset.cartesianProduct(this,set);
	}
	powerSet(){
		return Xset.powerSet(this);
	}
	//返回两个或更多集合的并集
	static union(a,...bSets){
		let unionSet=new Xset(a);
		for (let b of bSets){
			for (let bValue of b){
				unionSet.add(bValue);
			}
		}
		return unionSet;
	}
	// 返回两个或更多集合的交集
	static intersection(a,...bSets){
		let intersectionSet=new Xset(a);
		for (let aValues of intersectionSet){
			for (let b of bSets){
				if (!b.has(aValues)){
					intersectionSet.delete(aValues);
				}
			}
		}
		return intersectionSet;
	}
	// 返回两个集合的差集
	static difference(a,b){
		let differenceSet=new Xset(a);
		for (let bValue of b){
			if (a.has(bValue)) {
				differenceSet.delete(bValue);
			}
		}
		return differenceSet;
	}
	// 返回两个集合的对称差集
	static symmetricDifference(a,b){
		// 按照定义，对称差集可以表达为
		return a.union(b).difference(a.intersection(b));
	}
	// 返回两个集合（数组对形式）的笛卡儿积
	// 必须返回数组集合，因为笛卡儿积可能包含相同值的对
	//笛卡尔乘积是指在数学中，两个集合X和Y的笛卡尔积（Cartesian product），
	//又称直积，表示为X × Y，第一个对象是X的成员而第二个对象是Y的所有可能有序对的其中一个成员 。
	static cartesianProduct(a,b){
		let cartesianProductSet=new Xset();
		for (let aValues of a){
			for (let bValue of b){
				cartesianProductSet.add([aValues,bValue]);
			}
		}
		return cartesianProductSet;
	}
	// 返回一个集合的幂集
	//所谓幂集（Power Set）， 就是原集合中所有的子集（包括全集和空集）构成的集族。
	static powerSet(a){
		let powerSet=new Xset().add(new Xset());
		for (let aValues of a){
			for (let set of new Xset(powerSet)){
				powerSet.add(new Xset(set).add(aValues));
			}
		}
		return powerSet;
	}
}

let a=new Xset([1,2,3]);
let b=new Xset([2,3,4]);


//并集
console.log("并集");
let result=a.union(b);
for (let value of result.values()) {
	console.log(value);
}

//求交集
console.log("交集");
result=a.intersection(b);
for (let value of result.values()) {
	console.log(value);
}

//两个集合的差集
console.log("差集");
result=a.difference(b);
for (let value of result.values()) {
	console.log(value);
}

//两个集合的对称差集
console.log("对称差集");
result=a.symmetricDifference(b);
for (let value of result.values()) {
	console.log(value);
}

//两个集合的笛卡儿积
console.log("笛卡儿积");
result=a.cartesianProduct(b);
for (let value of result.values()) {
	console.log(value);
}

//返回一个集合的幂集
console.log("返回一个集合的幂集");
result=a.powerSet();
for (let value of result.values()) {
	console.log(value);
}

```



## 7 WeakSet （弱集合）

ECMAScript 6 新增的“弱集合”（WeakSet）是一种新的集合类型，为这门语言带来了集合数据结构。WeakSet 是 Set 的“兄弟”类型，其 API 也是 Set 的子集。WeakSet 中的**“weak”（弱），描述的是 JavaScript 垃圾回收程序对待“弱集合”中值的方式。**

### 7.1 基本 API

可以使用 new 关键字实例化一个空的 WeakSet：

```js
const ws = new WeakSet();
```

**弱集合中的值只能是 Object 或者继承自 Object 的类型**，尝试使用非对象设置值会抛出 TypeError。

如果想在初始化时填充弱集合，则构造函数可以接收一个可迭代对象，其中需要包含有效的值。可迭代对象中的每个值都会按照迭代顺序插入到新实例中：

```js
const val1 = {id: 1},
	val2 = {id: 2},
	val3 = {id: 3};

// 使用数组初始化弱集合
const ws1 = new WeakSet([val1, val2, val3]);
console.log(ws1.has(val1)); // true
console.log(ws1.has(val2)); // true
console.log(ws1.has(val3)); // true

// 原始值可以先包装成对象再用作值
const stringVal = new String("val1");
const ws3 = new WeakSet([stringVal]);
console.log(ws3.has(stringVal)); // true

// 初始化是全有或全无的操作
// 只要有一个值无效就会抛出错误，导致整个初始化失败
const ws2 = new WeakSet([val1, "BADVAL", val3]);
// TypeError: Invalid value used in WeakSet
console.log(typeof ws2);
// ReferenceError: ws2 is not defined

```

初始化之后可以使用 add()再添加新值，可以使用 has()查询，还可以使用 delete()删除：

```js
const ws = new WeakSet();

const val1 = {id: 1},val2 = {id: 2};

console.log(ws.has(val1)); // false

ws.add(val1).add(val2);
console.log(ws.has(val1)); // true
console.log(ws.has(val2)); // true

ws.delete(val1); // 只删除这一个值
console.log(ws.has(val1)); // false
console.log(ws.has(val2)); // true
```

add()方法返回弱集合实例，因此可以把多个操作连缀起来，包括初始化声明：

```js
const val1 = {id: 1},val2 = {id: 2},val3 = {id: 3};

const ws = new WeakSet().add(val1);
ws.add(val2).add(val3);

console.log(ws.has(val1)); // true
console.log(ws.has(val2)); // true
console.log(ws.has(val3)); // true
```

### 7.2 弱值

WeakSet 中**“weak”表示弱集合的值是“弱弱地拿着”的**。意思就是，这些值不属于正式的引用，不会阻止垃圾回收。

来看下面的例子：

```js
const ws = new WeakSet();
ws.add({});
```

add()方法初始化了一个新对象，并将它用作一个值。因为没有指向这个对象的其他引用，所以当这行代码执行完成后，这个对象值就会被当作垃圾回收。然后，这个值就从弱集合中消失了，使其成为一个空集合。

再看一个稍微不同的例子：

```js
const ws = new WeakSet();
const container = {
	val: {}
};

ws.add(container.val);

function removeReference() {
	container.val = null;
}
```

这一次，container 对象维护着一个对弱集合值的引用，因此这个对象值不会成为垃圾回收的目标。不过，如果调用了 removeReference()，就会摧毁值对象的最后一个引用，垃圾回收程序就可以把这个值清理掉。

### 7.3 不可迭代值

**因为 WeakSet 中的值任何时候都可能被销毁，所以没必要提供迭代其值的能力**。当然，也用不着 像 clear()这样一次性销毁所有值的方法。WeakSet 确实没有这个方法。因为不可能迭代，所以也不 可能在不知道对象引用的情况下从弱集合中取得值。即便代码可以访问 WeakSet 实例，也没办法看到 其中的内容。 

**WeakSet 之所以限制只能用对象作为值，是为了保证只有通过值对象的引用才能取得值**。如果允许 原始值，那就没办法区分初始化时使用的字符串字面量和初始化之后使用的一个相等的字符串了。

### 7.4 使用弱集合

相比于 WeakMap 实例，WeakSet 实例的用处没有那么大。不过，**弱集合在给对象打标签时还是有价值的**。
来看下面的例子，这里使用了一个普通 Set：

```js
const disabledElements = new Set();
const loginButton = document.querySelector('#login');
// 通过加入对应集合，给这个节点打上“禁用”标签
disabledElements.add(loginButton);
```

这样，通过查询元素在不在 disabledElements 中，就可以知道它是不是被禁用了。不过，假如元素从 DOM 树中被删除了，它的引用却仍然保存在 Set 中，因此垃圾回收程序也不能回收它。

为了让垃圾回收程序回收元素的内存，可以在这里使用 WeakSet：

```js
const disabledElements = new WeakSet();
const loginButton = document.querySelector('#login');
// 通过加入对应集合，给这个节点打上“禁用”标签
disabledElements.add(loginButton);
```

这样，只要 WeakSet 中任何元素从 DOM 树中被删除，垃圾回收程序就可以忽略其存在，而立即释放其内存（假设没有其他地方引用这个对象）。



## 8 迭代与扩展操作

ECMAScript 6 新增的迭代器和扩展操作符对集合引用类型特别有用。这些新特性让集合类型之间 相互操作、复制和修改变得异常方便。

有 4 种原生集合类型定义了默认迭代器：  Array  所有定型数组  Map  Set

很简单，这意味着上述所有类型都支持顺序迭代，都可以传入 for-of 循环：

```js
let iterableThings = [
	Array.of(1, 2),
	typedArr = Int16Array.of(3, 4),
	new Map([[5, 6], [7, 8]]),
	new Set([9, 10])
];

for (const iterableThing of iterableThings) {
	for (const x of iterableThing) {
		console.log(x);
	}
}
```

这也意味着所有这些类型都兼容扩展操作符。**扩展操作符在对可迭代对象执行浅复制时特别有用**，只需简单的语法就可以复制整个对象：

```js
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]
console.log(arr1 === arr2); // false
```

对于期待可迭代对象的构造函数，只要传入一个可迭代对象就可以实现复制：

```js
let map1 = new Map([[1, 2], [3, 4]]);
let map2 = new Map(map1);
console.log(map1); // Map {1 => 2, 3 => 4}
console.log(map2); // Map {1 => 2, 3 => 4}
```

当然，也可以构建数组的部分元素：

```js
let arr1 = [1, 2, 3];
let arr2 = [0, ...arr1, 4, 5];
console.log(arr2); // [0, 1, 2, 3, 4, 5]
```

浅复制意味着只会复制对象引用：

```js
let arr1 = [{}];
let arr2 = [...arr1];
arr1[0].foo = 'bar';
console.log(arr2[0]); // { foo: 'bar' }
```

上面的这些类型都支持多种构建方法，比如 Array.of()和 Array.from()静态方法。在与扩展操作符一起使用时，可以非常方便地实现互操作：

```js
let arr1 = [1, 2, 3];

// 把数组复制到定型数组
let typedArr1 = Int16Array.of(...arr1);
let typedArr2 = Int16Array.from(arr1);
console.log(typedArr1); // Int16Array [1, 2, 3]
console.log(typedArr2); // Int16Array [1, 2, 3]

// 把数组复制到映射
let map = new Map(arr1.map((x) => [x, 'val' + x]));
console.log(map); // Map {1 => 'val 1', 2 => 'val 2', 3 => 'val 3'}

// 把数组复制到集合
let set = new Set(typedArr2);
console.log(set); // Set {1, 2, 3}

// 把集合复制回数组
let arr2 = [...set];
console.log(arr2); // [1, 2, 3]
```



# 函数

## 0 定义函数的方式

### 0.1 函数声明的方式定义

函数是 ECMAScript中最有意思的部分之一，这主要是因为**函数实际上是对象**。每个函数都是 Function类型的实例，而 Function 也有属性和方法，跟其他引用类型一样。因为函数是对象，所以**函数名就是指向函数对象的指针**，**而且不一定与函数本身紧密绑定**。函数通常以函数声明的方式定义，比如：

```js
function sum (num1, num2) {
	return num1 + num2;
}
```

注意函数定义最后没有加分号。

### 0.2 函数表达式

另一种定义函数的语法是函数表达式。函数表达式与函数声明几乎是等价的：

```js
let sum = function(num1, num2) {
	return num1 + num2;
};
```

这里，代码定义了一个变量 sum 并将其初始化为一个函数。注意 function 关键字后面没有名称，因为不需要。这个函数可以通过变量 sum 来引用。

注意这里的函数末尾是有分号的，与任何变量初始化语句一样。

### 0.3 箭头函数方式

还有一种定义函数的方式与函数表达式很像，叫作“箭头函数”（arrow function），如下所示：

```js
let sum = (num1, num2) => {
	return num1 + num2;
};
```

### 0.4 使用 Function 构造函数

最后一种定义函数的方式是使用 Function 构造函数。这个构造函数接收任意多个字符串参数，最后一个参数始终会被当成函数体，而之前的参数都是新函数的参数。来看下面的例子：

```js
let sum = new Function("num1", "num2", "return num1 + num2"); // 不推荐
```

我们不推荐使用这种语法来定义函数，因为这段代码会被解释两次：第一次是将它当作常规 ECMAScript 代码，第二次是解释传给构造函数的字符串。这显然会影响性能。不过，把函数想象为对 象，把函数名想象为指针是很重要的。而上面这种语法很好地诠释了这些概念。 

**注意** 这几种实例化函数对象的方式之间存在微妙但重要的差别，无论 如何，通过其中任何一种方式都可以创建函数。

## 1 箭头函数

ECMAScript 6 新增了使用胖箭头（=>）语法定义函数表达式的能力。很大程度上，箭头函数实例化的函数对象与正式的函数表达式创建的函数对象行为是相同的。**任何可以使用函数表达式的地方，都可以使用箭头函数**：

```js
let arrowSum = (a, b) => {
	return a + b;
};
let functionExpressionSum = function(a, b) {
	return a + b;
};
console.log(arrowSum(5, 8)); // 13
console.log(functionExpressionSum(5, 8)); // 13
```

**箭头函数简洁的语法非常适合嵌入函数的场景**：

```js
let ints = [1, 2, 3];
console.log(ints.map(function(i) { return i + 1; })); // [2, 3, 4]
console.log(ints.map((i) => { return i + 1 })); // [2, 3, 4]
```

**如果只有一个参数，那也可以不用括号**。只有没有参数，或者多个参数的情况下，才需要使用括号：

```js
// 以下两种写法都有效
let double = (x) => { return 2 * x; };
let triple = x => { return 3 * x; };
// 没有参数需要括号
let getRandom = () => { return Math.random(); };
// 多个参数需要括号
let sum = (a, b) => { return a + b; };
// 无效的写法：
let multiply = a, b => { return a * b; };
```

箭头函数也可以不用大括号，但这样会改变函数的行为。**使用大括号就说明包含“函数体”，可以在一个函数中包含多条语句**，跟常规的函数一样。**如果不使用大括号，那么箭头后面就只能有一行代码**，比如一个赋值操作，或者一个表达式。而且，**省略大括号会隐式返回这行代码的值**：

```js
// 以下两种写法都有效，而且返回相应的值
let double = (x) => { return 2 * x; };
let triple = (x) => 3 * x;
// 可以赋值
let value = {};
let setName = (x) => x.name = "Matt";
setName(value);
console.log(value.name); // "Matt"
// 无效的写法：
let multiply = (a, b) => return a * b;
```

箭头函数虽然语法简洁，但也有很多场合不适用。箭头函数**不能**使用 arguments、super 和new.target，也不能用作构造函数。此外，**箭头函数也没有 prototype 属性。**

## 2 函数名

因为**函数名就是指向函数的指针**，所以它们跟其他包含对象指针的变量具有相同的行为。这意味着**一个函数可以有多个名称**，如下所示：

```js
function sum(num1, num2) {
	return num1 + num2;
}
console.log(sum(10, 10)); // 20
let anotherSum = sum;
console.log(anotherSum(10, 10)); // 20
sum = null;
console.log(anotherSum(10, 10)); // 20
```

以上代码定义了一个名为 sum()的函数，用于求两个数之和。然后又声明了一个变量 anotherSum， 并将它的值设置为等于 sum。注意，**使用不带括号的函数名会访问函数指针，而不会执行函数。**此时， anotherSum 和 sum 都指向同一个函数。调用 anotherSum()也可以返回结果。**把 sum 设置为 null 之后，就切断了它与函数之间的关联。**而 anotherSum()还是可以照常调用，没有问题。 

**ECMAScript 6 的所有函数对象都会暴露一个只读的 name 属性，其中包含关于函数的信息。**多数情 况下，这个属性中保存的就是一个函数标识符，或者说是一个字符串化的变量名。即使函数没有名称， 也会如实显示成空字符串。如果它是使用 Function 构造函数创建的，则会标识成"anonymous"：

```js
function foo() {}
let bar = function() {};
let baz = () => {};

console.log(foo.name); // foo
console.log(bar.name); // bar
console.log(baz.name); // baz
console.log((() => {}).name); //（空字符串）
console.log((new Function()).name); // anonymous
```

如果函数是一个获取函数、设置函数，或者使用 bind()实例化，**那么标识符前面会加上一个前缀**：

```js
function foo() {}
console.log(foo.bind(null).name); // bound foo

let dog = {
	years: 1,
	get age() {
		return this.years;
	},
	set age(newAge) {
		this.years = newAge;
	}
}
let propertyDescriptor = Object.getOwnPropertyDescriptor(dog, 'age');
console.log(propertyDescriptor.get.name); // get age
console.log(propertyDescriptor.set.name); // set age
```

## 3 理解参数

ECMAScript 函数的参数跟大多数其他语言不同。**ECMAScript 函数既不关心传入的参数个数，也不 关心这些参数的数据类型。**定义函数时要接收两个参数，并不意味着调用时就传两个参数。你可以传一 个、三个，甚至一个也不传，解释器都不会报错。 

之所以会这样，主要是因为 **ECMAScript 函数的参数在内部表现为一个数组。函数被调用时总会接 收一个数组，但函数并不关心这个数组中包含什么。**如果数组中什么也没有，那没问题；如果数组的元 素超出了要求，那也没问题。事实上，在使用 function 关键字定义（非箭头）函数时，可以在函数内 部访问 arguments 对象，从中取得传进来的每个参数值。

 **arguments 对象是一个类数组对象（但不是 Array 的实例），因此可以使用中括号语法访问其中的 元素**（第一个参数是 arguments[0]，第二个参数是 arguments[1]）。而要确定传进来多少个参数， 可以访问 **arguments.length 属性**。

在下面的例子中，sayHi()函数的第一个参数叫 name：

```js
function sayHi(name, message) {
	console.log("Hello " + name + ", " + message);
}
```

**可以通过 arguments[0]取得相同的参数值。因此，把函数重写成不声明参数也可以**：

```js
function sayHi() {
	console.log("Hello " + arguments[0] + ", " + arguments[1]);
}
```

在重写后的代码中，没有命名参数。name 和 message 参数都不见了，但函数照样可以调用。这就 表明，**ECMAScript 函数的参数只是为了方便才写出来的**，并不是必须写出来的。与其他语言不同，在 ECMAScript 中的命名参数不会创建让之后的调用必须匹配的函数签名。这是因为根本不存在验证命名 参数的机制。 

**也可以通过 arguments 对象的 length 属性检查传入的参数个数。**下面的例子展示了在每调用一 个函数时，都会打印出传入的参数个数：

```js
function howManyArgs() {
	console.log(arguments.length);
}
howManyArgs("string", 45); // 2
howManyArgs(); // 0
howManyArgs(12); // 1
```

这个例子分别打印出 2、0 和 1（按顺序）。既然如此，那么开发者可以想传多少参数就传多少参数。比如：

```js
function doAdd() {
	if (arguments.length === 1) {
		console.log(arguments[0] + 10);
	} else if (arguments.length === 2) {
		console.log(arguments[0] + arguments[1]);
	}
}
doAdd(10); // 20
doAdd(30, 20); // 50
```

这个函数 doAdd()在只传一个参数时会加 10，在传两个参数时会将它们相加，然后返回。因此doAdd(10)返回 20，而 doAdd(30,20)返回 50。**虽然不像真正的函数重载那么明确，但这已经足以弥补 ECMAScript 在这方面的缺失了**。

还有一个必须理解的重要方面，那就是 **arguments 对象可以跟命名参数一起使用**，比如：

```js
function doAdd(num1, num2) {
	if (arguments.length === 1) {
		console.log(num1 + 10);
	} else if (arguments.length === 2) {
		console.log(arguments[0] + num2);
	}
}
```

在这个 doAdd()函数中，同时使用了两个命名参数和 arguments 对象。命名参数 num1 保存着与arugments[0]一样的值，因此使用谁都无所谓。（同样，num2 也保存着跟 arguments[1]一样的值。）

arguments 对象的另一个有意思的地方就是，**它的值始终会与对应的命名参数同步**。来看下面的例子：

```js
function doAdd(num1, num2) {
	arguments[1] = 10;
	console.log(arguments[0] + num2);
}
```

这个 doAdd()函数把第二个参数的值重写为 10。因为 arguments 对象的值会自动同步到对应的命 名参数，所以修改 arguments[1]也会修改 num2 的值，因此两者的值都是 10。但这**并不意味着它们都 访问同一个内存地址，它们在内存中还是分开的，只不过会保持同步而已**。另外还要记住一点：如果只 传了一个参数，然后把 arguments[1]设置为某个值，那么这个值并不会反映到第二个命名参数。这是 **因为 arguments 对象的长度是根据传入的参数个数，而非定义函数时给出的命名参数个数确定的。**

**对于命名参数而言，如果调用函数时没有传这个参数，那么它的值就是 undefined。这就类似于 定义了变量而没有初始化**。比如，如果只给 doAdd()传了一个参数，那么 num2 的值就是 undefined。 

**严格模式下，arguments 会有一些变化**。首先，像前面那样给 arguments[1]赋值不会再影响 num2 的值。就算把 arguments[1]设置为 10，num2 的值仍然还是传入的值。其次，在函数中尝试重写 arguments 对象会导致语法错误。（代码也不会执行。）

**如果函数是使用箭头语法定义的，那么传给函数的参数将不能使用 arguments 关键字访问**，而只能通过定义的命名参数访问。

```js
function foo() {
	console.log(arguments[0]);
}
foo(5); // 5
let bar = () => {
	console.log(arguments[0]);
};
bar(5); // ReferenceError: arguments is not defined
```

虽然箭头函数中没有 arguments 对象，但可以在包装函数中把它提供给箭头函数：

```js
function foo() {
    let bar = () => {
    	console.log(arguments[0]); // 5
    };
    bar();
}
foo(5);
```

**注意** ECMAScript 中的所有参数都**按值传递**的。不可能按引用传递参数。**如果把对象作为参数传递，那么传递的*值*就是这个对象的引用**。

## 4 没有重载

ECMAScript 函数不能像传统编程那样重载。在其他语言比如 Java 中，一个函数可以有两个定义， 只要签名（接收参数的类型和数量）不同就行。如前所述，ECMAScript 函数没有签名，因为参数是由 包含零个或多个值的数组表示的。**没有函数签名，自然也就没有重载。**

 **如果在 ECMAScript 中定义了两个同名函数，则后定义的会覆盖先定义的**。来看下面的例子：

```js
function addSomeNumber(num) {
	return num + 100;
}
function addSomeNumber(num) {
	return num + 200;
}
let result = addSomeNumber(100); // 300
```

这里，函数 addSomeNumber()被定义了两次。第一个版本给参数加 100，第二个版本加 200。最 后一行调用这个函数时，返回了 300，因为第二个定义覆盖了第一个定义。 

前面也提到过，**可以通过检查参数的类型和数量，然后分别执行不同的逻辑来模拟函数重载。** 

把函数名当成指针也有助于理解为什么 ECMAScript 没有函数重载。在前面的例子中，定义两个同 名的函数显然会导致后定义的重写先定义的。而那个例子几乎跟下面这个是一样的：

```js
let addSomeNumber = function(num) {
	return num + 100;
};
addSomeNumber = function(num) {
	return num + 200;
};
let result = addSomeNumber(100); // 300
```

看这段代码应该更容易理解发生了什么。在创建第二个函数时，变量 addSomeNumber 被重写成保存第二个函数对象了。

## 5 默认参数值

在 ECMAScript5.1 及以前，实现默认参数的一种常用方式就是检测某个参数是否等于 undefined，如果是则意味着没有传这个参数，那就给它赋一个值：

```js
function makeKing(name) {
	name = (typeof name !== 'undefined') ? name : 'Henry';
	return `King ${name} VIII`;
}
console.log(makeKing()); // 'King Henry VIII'
console.log(makeKing('Louis')); // 'King Louis VIII'
```

ECMAScript 6 之后就不用这么麻烦了，因为它**支持显式定义默认参数**了。下面就是与前面代码等价的 ES6 写法，只要在函数定义中的参数后面用=就可以为参数赋一个默认值：

```js
function makeKing(name = 'Henry') {
	return `King ${name} VIII`;
}
console.log(makeKing('Louis')); // 'King Louis VIII'
console.log(makeKing()); // 'King Henry VIII'
```

**给参数传 undefined 相当于没有传值，不过这样可以利用多个独立的默认值**：

```js
function makeKing(name = 'Henry', numerals = 'VIII') {
	return `King ${name} ${numerals}`;
}

console.log(makeKing()); // 'King Henry VIII'
console.log(makeKing('Louis')); // 'King Louis VIII'
console.log(makeKing(undefined, 'VI')); // 'King Henry VI'
```

**在使用默认参数时，arguments 对象的值不反映参数的默认值，只反映传给函数的参数**。当然，跟 ES5 严格模式一样，修改命名参数也不会影响 arguments 对象，它始终以调用函数时传入的值为准：

```js
function makeKing(name = 'Henry') {
	name = 'Louis';
	return `King ${arguments[0]}`;
}
console.log(makeKing()); // 'King undefined'
console.log(makeKing('mane')); // King mane
```

默认参数值并不限于原始值或对象类型，也可以使用调用函数返回的值：

```js
let romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI'];
let ordinality = 0;

function getNumerals() {
// 每次调用后递增
	return romanNumerals[ordinality++];
}

function makeKing(name = 'Henry', numerals = getNumerals()) {
	return `King ${name} ${numerals}`;
}

console.log(makeKing()); // 'King Henry I'
console.log(makeKing('Louis', 'XVI')); // 'King Louis XVI'
console.log(makeKing()); // 'King Henry II'
console.log(makeKing()); // 'King Henry III'
```

函数的默认参数只有在函数被调用时才会求值，不会在函数定义时求值。而且，**计算默认值的函数只有在调用函数但未传相应参数时才会被调用**。

**箭头函数同样也可以这样使用默认参数**，只不过在只有一个参数时，就必须使用括号而不能省略了：

```js
let makeKing = (name = 'Henry') => `King ${name}`;
console.log(makeKing()); // King Henry
```

### 默认参数作用域与暂时性死区

因为在求值默认参数时可以定义对象，也可以动态调用函数，所以函数参数肯定是在某个作用域中求值的。

给多个参数定义默认值实际上跟使用 let 关键字顺序声明变量一样。来看下面的例子：

```js
function makeKing(name = 'Henry', numerals = 'VIII') {
	return `King ${name} ${numerals}`;
}
console.log(makeKing()); // King Henry VIII
```

这里的默认参数会按照定义它们的顺序依次被初始化。可以依照如下示例想象一下这个过程：

```js
function makeKing() {
	let name = 'Henry';
	let numerals = 'VIII';
	return `King ${name} ${numerals}`;
}
```

**因为参数是按顺序初始化的，所以后定义默认值的参数可以引用先定义的参数**。看下面这个例子：

```js
function makeKing(name = 'Henry', numerals = name) {
	return `King ${name} ${numerals}`;
}
console.log(makeKing()); // King Henry Henry
```

参数初始化顺序遵循“暂时性死区”规则，即**前面定义的参数不能引用后面定义的。**像这样就会抛出错误：

```js
// 调用时不传第一个参数会报错
function makeKing(name = numerals, numerals = 'VIII') {
	return `King ${name} ${numerals}`;
}
```

**参数也存在于自己的作用域中，它们不能引用函数体的作用域**：

```js
// 调用时不传第二个参数会报错
function makeKing(name = 'Henry', numerals = defaultNumeral) {
	let defaultNumeral = 'VIII';
	return `King ${name} ${numerals}`;
}
console.log(makeKing("sadio","mane"));  //King sadio mane
console.log(makeKing("sadio"));  //ReferenceError: defaultNumeral is not defined
```

## 6 参数扩展与收集

ECMAScript 6 新增了扩展操作符，使用它可以非常简洁地操作和组合集合数据。扩展操作符最有用的场景就是函数定义中的参数列表，在这里它可以充分利用这门语言的弱类型及参数长度可变的特点。**扩展操作符既可以用于调用函数时传参**，**也可以用于定义函数参数**。

### 6.1 扩展参数

在给函数传参时，有时候可能不需要传一个数组，而是要分别传入数组的元素。

假设有如下函数定义，它会将所有传入的参数累加起来：

```js
let values = [1, 2, 3, 4];
function getSum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; ++i) {
    	sum += arguments[i];
    }
    return sum;
}
```

这个函数希望将所有加数逐个传进来，然后通过迭代 arguments 对象来实现累加。如果不使用扩展操作符，想把定义在这个函数这面的数组拆分，那么就得求助于 apply()方法：

```js
console.log(getSum.apply(null, values)); // 10
```

但在 ECMAScript 6 中，可以通过扩展操作符极为简洁地实现这种操作。**对可迭代对象应用扩展操作符，并将其作为一个参数传入，可以将可迭代对象拆分，并将迭代返回的每个值单独传入。**

比如，使用扩展操作符可以将前面例子中的数组像这样直接传给函数：

```js
console.log(getSum(...values)); // 10
```

**因为数组的长度已知，所以在使用扩展操作符传参的时候，并不妨碍在其前面或后面再传其他的值**，包括使用扩展操作符传其他参数：

```js
console.log(getSum(-1, ...values)); // 9
console.log(getSum(...values, 5)); // 15
console.log(getSum(-1, ...values, 5)); // 14
console.log(getSum(...values, ...[5,6,7])); // 28
```

**对函数中的 arguments 对象而言，它并不知道扩展操作符的存在**，而是按照调用函数时传入的参数接收每一个值：

```js
let values = [1,2,3,4]
function countArguments() {
	console.log(arguments.length);
}
countArguments(-1, ...values); // 5
countArguments(...values, 5); // 5
countArguments(-1, ...values, 5); // 6
countArguments(...values, ...[5,6,7]); // 7
```

arguments 对象只是消费扩展操作符的一种方式。**在普通函数和箭头函数中，也可以将扩展操作符用于命名参数，当然同时也可以使用默认参数**：

```js
function getProduct(a, b, c = 1) {
	return a * b * c;
}
let getSum = (a, b, c = 0) => {
	return a + b + c;
}
console.log(getProduct(...[1,2])); // 2
console.log(getProduct(...[1,2,3])); // 6
console.log(getProduct(...[1,2,3,4])); // 6
console.log(getSum(...[0,1])); // 1
console.log(getSum(...[0,1,2])); // 3
console.log(getSum(...[0,1,2,3])); // 3
```

### 6.2 收集参数

在构思函数定义时，可以使用扩展操作符把不同长度的独立参数组合为一个数组。这有点类似arguments 对象的构造机制，只**不过收集参数的结果会得到一个 Array 实例。**

```js
function getSum(...values) {
    // 顺序累加 values 中的所有值
    // 初始值的总和为 0
    return values.reduce((x, y) => x + y, 0);
}
console.log(getSum(1,2,3)); // 6
```

收集参数的前面如果还有命名参数，则只会收集其余的参数；如果没有则会得到空数组。**因为收集参数的结果可变，所以只能把它作为最后一个参数**：

```js
// 不可以
function getProduct(...values, lastValue) {}
// 可以
function ignoreFirst(firstValue, ...values) {
	console.log(values);
}
ignoreFirst(); // []
ignoreFirst(1); // []
ignoreFirst(1,2); // [2]
ignoreFirst(1,2,3); // [2, 3]
```

**箭头函数虽然不支持 arguments 对象**，**但支持收集参数的定义方式**，因此也可以实现与使用arguments 一样的逻辑：

```js
let getSum = (...values) => {
	return values.reduce((x, y) => x + y, 0);
}
console.log(getSum(1,2,3)); // 6
```

另外，**使用收集参数并不影响 arguments 对象**，**它仍然反映调用时传给函数的参数**：

```js
function getSum(...values) {
    console.log(arguments.length); // 3
    console.log(arguments); // [1, 2, 3]
    console.log(values); // [1, 2, 3]
}
console.log(getSum(1,2,3));
```

## 7 函数声明与函数表达式

本章到现在一直没有把函数声明和函数表达式区分得很清楚。事实上，JavaScript 引擎在加载数据 时对它们是区别对待的。**JavaScript 引擎在任何代码执行之前，会先读取函数声明，并在执行上下文中 生成函数定义。**而函数表达式必须等到代码执行到它那一行，才会在执行上下文中生成函数定义。来看 下面的例子：

```js
// 没问题
console.log(sum(10, 10));
function sum(num1, num2) {
	return num1 + num2;
}
```

以上代码可以正常运行，**因为函数声明会在任何代码执行之前先被读取并添加到执行上下文。**这个 过程叫作**函数声明提升**（function declaration hoisting）。在执行代码时，JavaScript 引擎会先执行一遍扫描， 把发现的函数声明提升到源代码树的顶部。因此即使函数定义出现在调用它们的代码之后，引擎也会把 函数声明提升到顶部。**如果把前面代码中的函数声明改为等价的函数表达式，那么执行的时候就会出错**：

```js
// 会出错
console.log(sum(10, 10));
let sum = function(num1, num2) {
	return num1 + num2;
};
```

上面的代码之所以会出错，是因为这个函数定义包含在一个变量初始化语句中，而不是函数声明中。这意味着代码如果没有执行到加粗的那一行，那么执行上下文中就没有函数的定义，所以上面的代码会出错。这并不是因为使用 let 而导致的，使用 var 关键字也会碰到同样的问题：

```js
console.log(sum(10, 10));
var sum = function(num1, num2) {
	return num1 + num2;
};
```

除了函数什么时候真正有定义这个区别之外，这两种语法是等价的。

**注意** 在使用函数表达式初始化变量时，也可以给函数一个名称，比如 let sum =function sum() {}。

## 8 函数作为值

因为**函数名在 ECMAScript 中就是变量，所以函数可以用在任何可以使用变量的地方**。这意味着不仅可以把函数作为参数传给另一个函数，而且还可以在一个函数中返回另一个函数。来看下面的例子：

```js
function callSomeFunction(someFunction, someArgument) {
	return someFunction(someArgument);
}
```

这个函数接收两个参数。第一个参数应该是一个函数，第二个参数应该是要传给这个函数的值。任何函数都可以像下面这样作为参数传递：

```js
function callSomeFunction(func,para){
	return func(para);
}
function add10(num) {
	return num + 10;
}
let result1 = callSomeFunction(add10, 10);
console.log(result1); // 20

function getGreeting(name) {
	return "Hello, " + name;
}

let result2 = callSomeFunction(getGreeting, "Nicholas");
console.log(result2); // "Hello, Nicholas"
```

callSomeFunction()函数是通用的，第一个参数传入的是什么函数都可以，而且它始终返回调用 作为第一个参数传入的函数的结果。要注意的是，**如果是访问函数而不是调用函数，那就必须不带括号**， 所以传给 callSomeFunction()的必须是 add10 和 getGreeting，而不能是它们的执行结果。 

**从一个函数中返回另一个函数也是可以的，而且非常有用**。例如，假设有一个包含对象的数组，而 我们想按照任意对象属性对数组进行排序。为此，可以定义一个 sort()方法需要的比较函数，它接收 两个参数，即要比较的值。但这个比较函数还需要想办法确定根据哪个属性来排序。**这个问题可以通过 定义一个根据属性名来创建比较函数的函数来解决。**比如：

```js
function createComparisionFunction(propertyName){
	return function(object1,object2){
		let value1=object1[propertyName];
		let value2=object2[propertyName];
		if (value1<value2){
			return -1;
		}else if(value1>value2){
			return 1;
		}else{
			return 0;
		}
	};
}
```

这个函数的语法乍一看比较复杂，但实际上就是在一个函数中返回另一个函数，注意那个 return操作符。**内部函数可以访问 propertyName 参数，并通过中括号语法取得要比较的对象的相应属性值。取得属性值以后，再按照 sort()方法的需要返回比较值就行了。**这个函数可以像下面这样使用：

```js
function createComparisionFunction(propertyName){
	//按属性返回从小到大的排序函数
	return function(object1,object2){
		let value1=object1[propertyName];
		let value2=object2[propertyName];
		if (value1<value2){
			return -1;
		}else if(value1>value2){
			return -1;
		}else{
			return 0;
		}
	};
}

let data = [
	{name: "Zachary", age: 28},
	{name: "Nicholas", age: 29}
];

data.sort(createComparisionFunction("name"));
console.log(data);
//[ { name: 'Nicholas', age: 29 }, { name: 'Zachary', age: 28 } ]
data.sort(createComparisionFunction("name"));
console.log(data);
//[ { name: 'Zachary', age: 28 }, { name: 'Nicholas', age: 29 } ]
```

在上面的代码中，数组 data 中包含两个结构相同的对象。每个对象都有一个 name 属性和一个 age 属性。默认情况下，sort()方法要对这两个对象执行 toString()，然后再决定它们的顺序，但这样 得不到有意义的结果。而通过调用 createComparisonFunction("name")来创建一个比较函数，就 可以根据每个对象 name 属性的值来排序，结果 name 属性值为"Nicholas"、age 属性值为 29 的对象 会排在前面。而调用 createComparisonFunction("age")则会创建一个根据每个对象 age 属性的值 来排序的比较函数，结果 name 属性值为"Zachary"、age 属性值为 28 的对象会排在前面。

## 9 函数内部

在 ECMAScript 5 中，函数内部存在两个特殊的对象：arguments 和 this。ECMAScript 6 又新增了 new.target 属性。

### 9.1 arguments.callee

arguments 对象前面讨论过多次了，它是一个类数组对象，包含调用函数时传入的所有参数。这 个对象只有以 function 关键字定义函数（相对于使用箭头语法创建函数）时才会有。虽然主要用于包 含函数参数，但 **arguments 对象其实还有一个 callee 属性，是一个指向 arguments 对象所在函数的 指针**。来看下面这个经典的阶乘函数：

```js
function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}
```

阶乘函数一般定义成递归调用的，就像上面这个例子一样。只要给函数一个名称，而且这个名称不会变，这样定义就没有问题。但是，这个函数要正确执行就必须保证函数名是 factorial，从而导致了紧密耦合。**使用 arguments.callee 就可以让函数逻辑与函数名解耦**：

```js
function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * arguments.callee(num - 1);
	}
}

console.log(factorial(5));
```

这个重写之后的 factorial()函数已经用 arguments.callee 代替了之前硬编码的 factorial。这意味着无论函数叫什么名称，都可以引用正确的函数。考虑下面的情况：

```js
function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * arguments.callee(num - 1);
	}
}

let trueFactorial=factorial;

factorial=function(){
	return 0;
}

console.log(trueFactorial(5));  //120
console.log(factorial(5));  //0
```

这里，trueFactorial 变量被赋值为 factorial，**实际上把同一个函数的指针又保存到了另一个 位置**。然后，**factorial 函数又被重写为一个返回 0 的函数**。如果像 factorial()最初的版本那样不 使用 arguments.callee，那么像上面这样调用 trueFactorial()就会返回 0。不过，**通过将函数与 名称解耦，trueFactorial()就可以正确计算阶乘，而 factorial()则只能返回 0。**

### 9.2 this

另一个特殊的对象是 this，它在标准函数和箭头函数中有不同的行为。

**在标准函数中，this 引用的是把函数当成方法 *调用* 的上下文对象**，这时候**通常称其为 this 值**（在网页的全局上下文中调用函数时，this 指向 windows）。来看下面的例子：

```js
window.color="red";
let o={
	color:"blue"
};

function sayColor(){
	console.log(this.color);
}

sayColor(); //red

o.sayColor=sayColor;

o.sayColor(); //blue
```

定义在全局上下文中的函数 sayColor()引用了 this 对象。**这个 this 到底引用哪个对象必须到 函数被调用时才能确定**。因此这个值在代码执行的过程中可能会变。如果在全局上下文中调用 sayColor()，这结果会输出"red"，因为 this 指向 window，而 this.color 相当于 window.color。 而在把 sayColor()赋值给 o 之后再调用 o.sayColor()，this 会指向 o，即 this.color 相当于 o.color，所以会显示"blue"。

**在箭头函数中，this 引用的是 *定义* 箭头函数的上下文。**下面的例子演示了这一点。在对sayColor() 的两次调用中，this 引用的都是 window 对象，因为这个箭头函数是在 window 上下文中定义的：

```js
window.color="red";
let o={
	color:"blue"
};

let sayColor=()=>{
	console.log(this.color);
}

sayColor(); //red

o.sayColor=sayColor;

o.sayColor(); //red
```

有读者知道，**在事件回调或定时回调中调用某个函数时，this 值指向的并非想要的对象**。此时将回调函数写成箭头函数就可以解决问题。这是因为*箭头函数中的 this 会保留定义该函数时的上下文：*

```js
function King(){
	this.royaltyName = 'Henry';
	// this 引用 King 的实例
	//箭头函数this 会保留定义该函数时的上下文
	setTimeout(()=>console.log(this.royaltyName),1000);
}

function Queen() {
	this.royaltyName = 'Elizabeth';
	//普通函数调用时才指定this
	setTimeout(function() { console.log(this.royaltyName); }, 1000);
}

new King(); // Henry
new Queen(); // undefined, this 引用 window 对象
```



注意 **函数名只是保存指针的变量。**因此全局定义的 sayColor()函数和 o.sayColor()是同一个函数，**只不过执行的上下文不同**。

### 9.3 caller

ECMAScript 5 也会给函数对象上添加一个属性：caller。虽然 ECMAScript 3 中并没有定义，但所有浏览器除了早期版本的 Opera 都支持这个属性。**这个属性引用的是调用当前函数的函数，或者如果是在全局作用域中调用的则为 null。**比如：

```js
function outer() {
	inner();
}
function inner() {
	console.log(inner.caller);
}

outer();  //[Function: outer]
```

以上代码会显示 outer()函数的源代码。这是因为 ourter()调用了 inner()，inner.caller指向 outer()。**如果要降低耦合度，则可以通过 arguments.callee.caller 来引用同样的值**：

```js
function outer() {
	inner();
}
function inner() {
	console.log(inner.arguments.callee.caller);
}

outer();  //[Function: outer]
```

在严格模式下访问 arguments.callee 会报错。ECMAScript 5 也定义了 **arguments.caller，但在严格模式下访问它会报错，在非严格模式下则始终是 undefined。这是为了分清 arguments.caller和函数的 caller 而故意为之的**。而作为对这门语言的安全防护，**这些改动也让第三方代码无法检测同一上下文中运行的其他代码**。

**严格模式下还有一个限制，就是不能给函数的 caller 属性赋值**，否则会导致错误。

### 9.4 new.target

ECMAScript 中的**函数始终可以作为构造函数实例化一个新对象**，也可以作为普通函数被调用。ECMAScript 6 新增了检测函数是否使用 new 关键字调用的 new.target 属性。**如果函数是正常调用的，则 new.target 的值是 undefined**；如果**是使用 new 关键字调用的，则 new.target 将引用被调用的构造函数**。

```js
function King() {
	if (!new.target) {
		throw 'King must be instantiated using "new"'
	}
	console.log('King instantiated using "new"');
}

new King(); // King instantiated using "new"
King(); // Error: King must be instantiated using "new"
```



## 10 函数属性与方法

前面提到过，ECMAScript 中的函数是对象，因此有属性和方法。**每个函数都有两个属性：length和 prototype**。其中，**length 属性保存函数定义的命名参数的个数，**

### length 属性

如下例所示：

```js
function sayName(name) {
	console.log(name);
}
function sum(num1, num2) {
	return num1 + num2;
}
function sayHi() {
	console.log("hi");
}

console.log(sayName.length); // 1
console.log(sum.length); // 2
console.log(sayHi.length); // 0
```

以上代码定义了 3 个函数，每个函数的命名参数个数都不一样。sayName()函数有 1 个命名参数， 所以其 length 属性为 1。类似地，sum()函数有两个命名参数，所以其 length 属性是 2。而 sayHi() 没有命名参数，其 length 属性为 0。 

### prototype 属性

prototype 属性也许是 ECMAScript 核心中最有趣的部分。**prototype 是保存引用类型所有实例 方法的地方**，这意味着 toString()、valueOf()等方法实际上都保存在 prototype 上，进而由所有实 例共享。这个属性在自定义类型时特别重要。在 ECMAScript 5 中，**prototype 属性是不可枚举的，因此使用 for-in 循环不会返回这个属性。** 

### apply()方法

函数还有两个方法：apply()和 call()。这**两个方法都会以指定的 this 值来调用函数，**即会设 置调用函数时函数体内 this 对象的值。a**pply()方法接收两个参数：函数内 this 的值和一个参数数 组。**第二个参数可以是 Array 的实例，但也可以是 arguments 对象。来看下面的例子：

```js
function sum(num1, num2) {
	return num1 + num2;
}

function callSum1(num1,num2){
	return sum.apply(this,arguments);  // 传入 arguments 对象
}

function callSum2(num1,num2) {
	return sum.apply(this,[num1,num2]);  //传入数组
}

console.log(callSum1(10,20)); // 30
console.log(callSum2(10,20)); // 30

```

在这个例子中，callSum1()会调用 sum()函数，将 this 作为函数体内的 this 值（这里等于 window，因为是在全局作用域中调用的）传入，同时还传入了 arguments 对象。callSum2()也会调 用 sum()函数，但会传入参数的数组。这两个函数都会执行并返回正确的结果。 

注意 **在严格模式下，调用函数时如果没有指定上下文对象，则 this 值不会指向 window**。 *除非使用 apply()或 call()把函数指定给一个对象，**否则 this 的值会变成 undefined。*** 

### call()方法

**call()方法与 apply()的作用一样，只是传参的形式不同**。第一个参数跟 apply()一样，也是 this 值，而剩下的要传给被调用函数的参数则是逐个传递的。**换句话说，通过 call()向函数传参时，必须 将参数一个一个地列出来**，比如：

```js
function sum(num1, num2) {
	return num1 + num2;
}

function callSum(num1,num2){
	return sum.call(this,num1,num2);  // 必须将参数一个一个地列出来
}

console.log(callSum(10,20)); // 30
```

这里的 callSum()函数必须逐个地把参数传给 call()方法。结果跟 apply()的例子一样。**到底是 使用 apply()还是 call()，完全取决于怎么给要调用的函数传参更方便。如果想直接传 arguments 对象或者一个数组，那就用 apply()**；否则，就用 call()。当然，如果不用给被调用的函数传参，则 使用哪个方法都一样。 

**apply()和 call()真正强大的地方**并不是给函数传参，**而是控制函数调用上下文即函数体内 this 值的能力**。考虑下面的例子：

```js
window.color = 'red';

let o = {
	color: 'blue'
};

function sayColor() {
	console.log(this.color);
}

sayColor(); // red
sayColor.call(this); // red
sayColor.call(window); // red
sayColor.call(o); // blue
```

这个例子是在之前那个关于 this 对象的例子基础上修改而成的。同样，sayColor()是一个全局 函数，如果在全局作用域中调用它，那么会显示"red"。这是因为 this.color 会求值为 window.color。 如果在全局作用域中显式调用 sayColor.call(this)或者 sayColor.call(window)，则同样都会显示"red"。而在使用 sayColor.call(o)把函数的执行上下文即 this 切换为对象 o 之后，结果就变成 了显示"blue"了。

**使用 call()或 apply()的好处是可以将任意对象设置为任意函数的作用域，这样对象可以不用关 心方法**。在前面例子最初的版本中，为切换上下文需要先把 sayColor()直接赋值为 o 的属性，然后再 调用。而在这个修改后的版本中，就不需要这一步操作了。 

### bind()方法

ECMAScript 5 出于同样的目的定义了一个新方法：bind()。**bind()方法会创建一个新的函数实例**， **其 this 值会被绑定到传给 bind()的对象**。比如：

```js
window.color = 'red';
var o = {
	color: 'blue'
};
function sayColor() {
	console.log(this.color);
}
let objectSayColor = sayColor.bind(o);
objectSayColor(); // blue
```

这里，在 sayColor()上调用 bind()并传入对象 o 创建了一个新函数 objectSayColor()。 objectSayColor()中的 this 值被设置为 o，因此直接调用这个函数，即使是在全局作用域中调用， 也会返回字符串"blue"。 

**对函数而言，继承的方法 toLocaleString()和 toString()始终返回函数的代码**。返回代码的 具体格式因浏览器而异。有的返回源代码，包含注释，而有的只返回代码的内部形式，会删除注释，甚 至代码可能被解释器修改过。由于这些差异，因此不能在重要功能中依赖这些方法返回的值，而只应在 调试中使用它们。继承的方法 valueOf()返回函数本身。

```js
let color = 'red';

function sayColor() {
	console.log(this.color);
}

console.log(sayColor.toString());

/*
function sayColor() {
	console.log(this.color);
}
*/
```

## 11 函数表达式

函数表达式虽然更强大，但也更容易让人迷惑。我们知道，定义函数有两种方式：函数声明和函数表达式。函数声明是这样的：

```js
function functionName(arg0, arg1, arg2) {
	// 函数体
}
```

函数声明的关键特点是**函数声明提升**，即**函数声明会在代码执行之前获得定义**。这意味着函数声明可以出现在调用它的代码之后：

```js
sayHi();
function sayHi() {
	console.log("Hi!");
}
```

这个例子不会抛出错误，因为 JavaScript 引擎会先读取函数声明，然后再执行代码。

第二种创建函数的方式就是函数表达式。函数表达式有几种不同的形式，最常见的是这样的：

```js
let functionName = function(arg0, arg1, arg2) {
	// 函数体
};
```

函数表达式看起来就像一个普通的变量定义和赋值，即创建一个函数再把它赋值给一个变量functionName。这样创建的函数叫作**匿名函数**（anonymous funtion），因为 function 关键字后面没有标识符。（匿名函数有也时候也被称为兰姆达函数）。**未赋值给其他变量的匿名函数的 name 属性是空字符串**。

函数表达式跟 JavaScript 中的其他表达式一样，需要先赋值再使用。下面的例子会导致错误：

```js
sayHi(); // Error! function doesn't exist yet
let sayHi = function() {
	console.log("Hi!");
};
```

理解函数声明与函数表达式之间的区别，**关键是理解提升**。比如，以下代码的执行结果可能会出乎意料：

```js
// 千万别这样做！
if (condition) {
	function sayHi() {
		console.log('Hi!');
	}
} else {
	function sayHi() {
		console.log('Yo!');
	}
}
```

这段代码看起来很正常，就是如果 condition 为 true，则使用第一个 sayHi()定义；否则，就 使用第二个。事实上，这种写法在 ECAMScript 中不是有效的语法。JavaScript 引擎会尝试将其纠正为适 当的声明。问题在于浏览器纠正这个问题的方式并不一致。多数浏览器会忽略 condition 直接返回第 二个声明。Firefox 会在 condition 为 true 时返回第一个声明。这种写法很危险，不要使用。不过， 如果把上面的函数声明换成函数表达式就没问题了：

```js
// 没问题
let sayHi;
if (condition) {
	sayHi = function() {
		console.log("Hi!");
	};
} else {
	sayHi = function() {
		console.log("Yo!");
	};
}
```

这个例子可以如预期一样，根据 condition 的值为变量 sayHi 赋予相应的函数。

创建函数并赋值给变量的能力也可以用于在一个函数中把另一个函数当作值返回：

```js
function createComparisonFunction(propertyName) {
	return function(object1, object2) {
		let value1 = object1[propertyName];
		let value2 = object2[propertyName];
		if (value1 < value2) {
			return -1;
		} else if (value1 > value2) {
			return 1;
		} else {
			return 0;
		}
	};
}
```

这里的 createComparisonFunction()函数返回一个匿名函数，这**个匿名函数要么被赋值给一个变量，要么可以直接调用。**但在 createComparisonFunction()内部，那个函数是匿名的。**任何时候，只要函数被当作值来使用，它就是一个函数表达式。**本章后面会介绍，这并不是使用函数表达式的唯一方式。

## 12 递归

**递归函数通常的形式是一个函数通过名称调用自己**，如下面的例子所示：

```js
function factorial(num) {
    if (num <= 1) {
    	return 1;
    } else {
    	return num * factorial(num - 1);
    }
}
```

这是经典的递归阶乘函数。虽然这样写是可以的，但如果把这个函数赋值给其他变量，就会出问题：

```js
let anotherFactorial = factorial;
factorial = null;
console.log(anotherFactorial(4)); // 报错
```

这里把 factorial()函数保存在了另一个变量 anotherFactorial 中，然后将 factorial 设置 为 null，于是只保留了一个对原始函数的引用。而在调用 anotherFactorial()时，要递归调用 factorial()，但因为它已经不是函数了，所以会出错。在写递归函数时使用 arguments.callee 可 以避免这个问题。 

### arguments.callee 

**arguments.callee 就是一个指向正在执行的函数的指针，因此可以在函数内部递归调用**，如下 所示：

```js
function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * arguments.callee(num - 1);
	}
}
```

像这里加粗的这一行一样，把函数名称替换成 arguments.callee，可以确保无论通过什么变量调用这个函数都不会出问题。因**此在编写递归函数时，arguments.callee 是引用当前函数的首选。**

### 命名函数表达式

不过，**在严格模式下运行的代码是不能访问 arguments.callee 的，**因为访问会出错。此时，**可以使用命名函数表达式（named function expression）达到目的**。比如：

```js
const factorial=(function f(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * f(num - 1);
	}
});

console.log(factorial(10));  //3628800
```

这里创建了一个命名函数表达式 f()，然后将它赋值给了变量 factorial。即使把函数赋值给另一个变量，函数表达式的名称 f 也不变，因此递归调用不会有问题。这个模式在严格模式和非严格模式下都可以使用。

## 13 尾调用优化

ECMAScript 6 规范新增了一项内存管理优化机制，让 JavaScript 引擎在满足条件时可以**重用栈帧**。具体来说，这项优化非常适合“尾调用”，**即外部函数的返回值是一个内部函数的返回值。**比如：

```js
function outerFunction() {
	return innerFunction(); // 尾调用
}
```

在 ES6 优化之前，执行这个例子会在内存中发生如下操作。

(1) 执行到 outerFunction 函数体，第一个栈帧被推到栈上。
(2) 执行 outerFunction 函数体，到 return 语句。计算返回值必须先计算 innerFunction。
(3) 执行到 innerFunction 函数体，第二个栈帧被推到栈上。
(4) 执行 innerFunction 函数体，计算其返回值。
(5) 将返回值传回 outerFunction，然后 outerFunction 再返回值。
(6) 将栈帧弹出栈外。

在 ES6 优化之后，执行这个例子会在内存中发生如下操作。

(1) 执行到 outerFunction 函数体，第一个栈帧被推到栈上。
(2) 执行 outerFunction 函数体，到达 return 语句。为求值返回语句，必须先求值 innerFunction。
(3) 引擎发现把第一个栈帧弹出栈外也没问题，因为 innerFunction 的返回值也是 outerFunction的返回值。
(4) 弹出 outerFunction 的栈帧。
(5) 执行到 innerFunction 函数体，栈帧被推到栈上。
(6) 执行 innerFunction 函数体，计算其返回值。
(7) 将 innerFunction 的栈帧弹出栈外。

很明显，第一种情况下每多调用一次嵌套函数，就会多增加一个栈帧。**而第二种情况下无论调用多少次嵌套函数，都只有一个栈帧**。这就是 ES6 尾调用优化的关键：**如果函数的逻辑允许基于尾调用将其销毁，则引擎就会那么做**。

**注意** 现在还没有办法测试尾调用优化是否起作用。不过，因为这是 ES6 规范所规定的，兼容的浏览器实现都能保证在代码满足条件的情况下应用这个优化。

### 13.1 尾调用优化的条件

尾调用优化的条件就是确定外部栈帧真的没有必要存在了。涉及的条件如下：
- 代码在严格模式下执行；

- 外部函数的返回值是对尾调用函数的调用；

- 尾调用函数返回后不需要执行额外的逻辑；

- 尾调用函数不是引用外部函数作用域中自由变量的闭包。

下面展示了几个违反上述条件的函数，因此都不符号尾调用优化的要求：

```js
"use strict";
// 无优化：尾调用没有返回
function outerFunction() {
	innerFunction();
}

// 无优化：尾调用没有直接返回
function outerFunction() {
	let innerFunctionResult = innerFunction();
	return innerFunctionResult;
}

// 无优化：尾调用返回后必须转型为字符串
function outerFunction() {
	return innerFunction().toString();
}

// 无优化：尾调用是一个闭包
function outerFunction() {
	let foo = 'bar';
	function innerFunction() { return foo; }
	return innerFunction();
}
```

下面是几个符合尾调用优化条件的例子：

```js
"use strict";
// 有优化：栈帧销毁前执行参数计算
function outerFunction(a, b) {
	return innerFunction(a + b);
}

// 有优化：初始返回值不涉及栈帧
function outerFunction(a, b) {
	if (a < b) {
		return a;
	}
	return innerFunction(a + b);
}

// 有优化：两个内部函数都在尾部
function outerFunction(condition) {
	return condition ? innerFunctionA() : innerFunctionB();
}
```

**差异化尾调用**和**递归尾调用**是容易让人混淆的地方。无论是递归尾调用还是非递归尾调用，都可以应用优化。引擎并不区分尾调用中调用的是函数自身还是其他函数。不过，**这个优化在递归场景下的效果是最明显的，因为递归代码最容易在栈内存中迅速产生大量栈帧**。

注意 之所以要求严格模式，主要因为**在非严格模式下函数调用中允许使用 f.arguments和 f.caller**，而它们都会引用外部函数的栈帧。显然，这意味着不能应用优化了。**因此尾调用优化要求必须在严格模式下有效，以防止引用这些属性**。

### 13.2 尾调用优化的代码

可以通过把简单的递归函数转换为待优化的代码来加深对尾调用优化的理解。下面是一个通过递归计算斐波纳契数列的函数：

```js
function fib(n) {
	if (n < 2) {
		return n;
	}
	return fib(n - 1) + fib(n - 2);
}

console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
console.log(fib(5)); // 5
console.log(fib(6)); // 8
```

**显然这个函数不符合尾调用优化的条件，因为返回语句中有一个相加的操作**。结果，f**ib(n)的栈帧数的内存复杂度是 O(2^n)**。因此，即使这么一个简单的调用也可以给浏览器带来麻烦：

```js
fib(1000);
```

当然，解决这个问题也有不同的策略，比如把递归改写成迭代循环形式。不过，也可以保持递归实现，但将其重构为满足优化条件的形式。为此可**以使用两个嵌套的函数，外部函数作为基础框架，内部函数执行递归**：

```js
"use strict";
// 基础框架
function fib(n) {
	return fibImpl(0, 1, n);
}
// 执行递归
function fibImpl(a, b, n) {
	if (n === 0) {
		return a;
	}
	return fibImpl(b, a + b, n - 1);
}

console.log(fib(1000)); // 4.346655768693743e+208
```

这样重构之后，就可以满足尾调用优化的所有条件，再调用 fib(1000)就不会对浏览器造成威胁了。

## 14 闭包

匿名函数经常被人误认为是闭包（closure）。**闭包指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。**比如，下面是之前展示的 createComparisonFunction()函数，注意其中加粗的代码：

```js
function createComparisonFunction(propertyName) {
	return function(object1, object2) {
		let value1 = object1[propertyName];
		let value2 = object2[propertyName];
		if (value1 < value2) {
			return -1;
		} else if (value1 > value2) {
			return 1;
		} else {
			return 0;
		}
	};
}
```

这里加粗的代码位于内部函数（匿名函数）中，其中引用了外部函数的变量 propertyName。在这 个内部函数被返回并在其他地方被使用后，它仍然引用着那个变量。这是因为内部函数的作用域链包含 createComparisonFunction()函数的作用域。要理解为什么会这样，可以想想第一次调用这个函数 时会发生什么。 

### 作用域链

理解作用域链创建和使用的细节对理解闭包非常重要。**在 调用一个函数时，会为这个函数调用创建一个执行上下文，并创建一个作用域链。**然后用 arguments 和其他命名参数来初始化这个函数的活动对象。外部函数的活动对象是内部函数作用域链上的第二个对 象。这个作用域链一直向外串起了所有包含函数的活动对象，直到全局执行上下文才终止。 

**在函数执行时，要从作用域链中查找变量，以便读、写值。**来看下面的代码：

```js
function compare(value1, value2) {
	if (value1 < value2) {
		return -1;
	} else if (value1 > value2) {
		return 1;
	} else {
		return 0;
	}
}
let result = compare(5, 10);
```

这里定义的 compare()函数是在全局上下文中调用的。第一次调用 compare()时，会为它创建一 个包含 arguments、value1 和 value2 的**活动对象**，这个对象是其作用域链上的第一个对象。而**全局 上下文的变量对象**则是 compare()作用域链上的第二个对象，其中包含 this、result 和 compare。 图 10-1 展示了以上关系。 

![作用域链关系](E:\pogject\学习笔记\image\js\作用域链关系.png)

函数执行时，每个执行上下文中都会有一个包含其中变量的对象。全局上下文中的叫**变量对象**，它 会在代码执行期间始终存在。而函数局部上下文中的叫**活动对象**，只在函数执行期间存在。在定义 compare()函数时，就会为它创建作用域链，预装载全局变量对象，并保存在内部的[[Scope]]中。在 调用这个函数时，会创建相应的执行上下文，然后通过复制函数的[[Scope]]来创建其作用域链。接着 会创建函数的活动对象（用作变量对象）并将其推入作用域链的前端。在这个例子中，这意味着 compare() 函数执行上下文的作用域链中有两个变量对象：局部变量对象和全局变量对象。**作用域链其实是一个包含指针的列表，每个指针分别指向一个变量对象，但物理上并不会包含相应的对象。**

函数内部的代码在访问变量时，就会使用给定的名称从作用域链中查找变量。函数执行完毕后，局部活动对象会被销毁，内存中就只剩下全局作用域。不过，闭包就不一样了。

在一个函数内部定义的函数会把其包含函数的活动对象添加到自己的作用域链中。因此，在createComparisonFunction()函数中，匿名函数的作用域链中实际上包含 createComparisonFunction()的活动对象。图 10-2 展示了以下代码执行后的结果。

```js
let compare = createComparisonFunction('name');
let result = compare({ name: 'Nicholas' }, { name: 'Matt' });
```

![匿名函数的作用域链](E:\pogject\学习笔记\image\js\匿名函数的作用域链.png)

在 createComparisonFunction()返回匿名函数后，它的作用域链被初始化为包含 createComparisonFunction()的活动对象和全局变量对象。这样，匿名函数就可以访问到 createComparisonFunction()可以访问的所有变量。另一个有意思的副作用就是，createComparisonFunction()的 活动对象并不能在它执行完毕后销毁，因为匿名函数的作用域链中仍然有对它的引用。在 createComparisonFunction()执行完毕后，其执行上下文的作用域链会销毁，但它的活动对象仍然会保留 在内存中，直到匿名函数被销毁后才会被销毁：

```js
// 创建比较函数
let compareNames = createComparisonFunction('name');
// 调用函数
let result = compareNames({ name: 'Nicholas' }, { name: 'Matt' });
// 解除对函数的引用，这样就可以释放内存了
compareNames = null;
```

这里，创建的比较函数被保存在变量 compareNames 中。把 compareNames 设置为等于 null 会 解除对函数的引用，从而让垃圾回收程序可以将内存释放掉。作用域链也会被销毁，其他作用域（除全 局作用域之外）也可以销毁。图 10-2 展示了调用 compareNames()之后作用域链之间的关系。

 注意 **因为闭包会保留它们包含函数的作用域，所以比其他函数更占用内存**。过度使用闭 包可能导致内存过度占用，因此建议仅在十分必要时使用。V8 等优化的 JavaScript 引擎会 努力回收被闭包困住的内存，不过我们还是**建议在使用闭包时要谨慎**。

### 14.1 this 对象

在闭包中使用 this 会让代码变复杂。如果内部函数没有使用箭头函数定义，则 this 对象会在运 行时绑定到执行函数的上下文。如果在全局函数中调用，则 this 在非严格模式下等于 window，在严 格模式下等于 undefined。如果作为某个对象的方法调用，则 this 等于这个对象。匿名函数在这种情 况下不会绑定到某个对象，这就意味着 this 会指向 window，除非在严格模式下 this 是 undefined。 不过，由于闭包的写法所致，这个事实有时候没有那么容易看出来。来看下面的例子：

```js
window.identity = 'The Window';

let object = {
	identity: 'My Object',
	getIdentityFunc() {
		return function() {
			return this.identity;
		};
	}
};

console.log(object.getIdentityFunc()()); // 'The Window'
```

这里先创建了一个全局变量 identity，之后又创建一个包含 identity 属性的对象。这个对象还 包含一个 getIdentityFunc()方法，返回一个匿名函数。这个匿名函数返回 this.identity。因为 getIdentityFunc()返回函数，所以 object.getIdentityFunc()()会立即调用这个返回的函数， 从而得到一个字符串。可是，此时返回的字符串是"The Winodw"，即全局变量 identity 的值。为什么匿名函数没有使用其包含作用域（getIdentityFunc()）的 this 对象呢？ 

前面介绍过，**每个函数在被调用时都会自动创建两个特殊变量：this 和 arguments**。**内部函数永 远不可能直接访问外部函数的这两个变量**。但是，如果把 this 保存到闭包可以访问的另一个变量中， 则是行得通的。比如：

```js
window.identity = 'The Window';

let object = {
	identity: 'My Object',
	getIdentityFunc() {
        //
		let that=this;
		return function() {
			return that.identity;
		};
	}
};

console.log(object.getIdentityFunc()()); // 'My Object'
```

这里加粗的代码展示了与前面那个例子的区别。**在定义匿名函数之前，先把外部函数的 this 保存 到变量 that 中。**然后在定义闭包时，就可以让它访问 that，因为这是包含函数中名称没有任何冲突的 一个变量。即使在外部函数返回之后，that 仍然指向 object，所以调用 object.getIdentityFunc()() 就会返回"My Object"。

 注意 t**his 和 arguments 都是不能直接在内部函数中访问的。**如果想访问包含作用域中 的 arguments 对象，则同样需要将其引用先保存到闭包能访问的另一个变量中。 

在一些特殊情况下，this 值可能并不是我们所期待的值。比如下面这个修改后的例子：

```js
window.identity = 'The Window';
let object = {
	identity: 'My Object',
    getIdentity () {
    	return this.identity;
    }
};
```

getIdentity()方法就是返回 this.identity 的值。以下是几种调用 object.getIdentity()的方式及返回值：

```js
object.getIdentity(); // 'My Object'
(object.getIdentity)(); // 'My Object'
(object.getIdentity = object.getIdentity)(); // 'The Window'
```

第一行调用 object.getIdentity()是正常调用，会返回"My Object"，因为 this.identity 就是 object.identity。第二行在调用时把 object.getIdentity 放在了括号里。虽然加了括号之 后看起来是对一个函数的引用，但 this 值并没有变。**这是因为按照规范，object.getIdentity 和 (object.getIdentity)是相等的**。第三行执行了一次赋值，然后再调用赋值后的结果。**因为赋值表 达式的值是函数本身，this 值不再与任何对象绑定，所以返回的是"The Window"**。 

一般情况下，不大可能像第二行和第三行这样调用对象上的方法。但通过这个例子，我们可以知道， 即使语法稍有不同，也可能影响 this 的值。

### 14.2 内存泄漏

由于 IE 在 IE9 之前对 JScript 对象和 COM 对象使用了不同的垃圾回收机制（第 4 章讨论过），所以闭包在这些旧版本 IE 中可能会导致问题。在这些版本的 IE 中，把 HTML 元素保存在某个闭包的作用域中，就相当于宣布该元素不能被销毁。来看下面的例子：

```js
function assignHandler() {
	let element = document.getElementById('someElement');
	element.onclick = () => console.log(element.id);
}
```

以上代码创建了一个闭包，即 element 元素的事件处理程序。 而这个处理程序又创建了一个循环引用。**匿名函数引用着 assignHandler()的活动对象**，阻止了对 element 的引用计数归零。**只要这个匿名函数存在，element 的引用计数就至少等于 1**。也就是说， 内存不会被回收。其实只要这个例子稍加修改，就可以避免这种情况，比如：

```js
function assignHandler() {
    let element = document.getElementById('someElement');
    let id = element.id;
    element.onclick = () => console.log(id);
    element = null;
}
```

在这个修改后的版本中，**闭包改为引用一个保存着 element.id 的变量 id，从而消除了循环引用。** 不过，光有这一步还不足以解决内存问题。因为闭包还是会引用包含函数的活动对象，而其中包含 element。**即使闭包没有直接引用 element，包含函数的活动对象上还是保存着对它的引用。因此，必 须再把 element 设置为 null。**这样就解除了对这个 COM 对象的引用，其引用计数也会减少，从而确 保其内存可以在适当的时候被回收。

## 15 立即调用的函数表达式

**立即调用的匿名函数**又被称作**立即调用的函数表达式**（IIFE，Immediately Invoked FunctionExpression）。它类似于函数声明，但由于被包含在括号中，所以会被解释为函数表达式。紧跟在第一组括号后面的第二组括号会立即调用前面的函数表达式。下面是一个简单的例子：

```js
(function() {
	// 块级作用域
})();
```

**使用 IIFE 可以模拟块级作用域，即在一个函数表达式内部声明变量，然后立即调用这个函数。**这样位于函数体作用域的变量就像是在块级作用域中一样。ECMAScript 5 尚未支持块级作用域，使用 IIFE模拟块级作用域是相当普遍的。比如下面的例子：

```js
//IIFE
let count=5;
(function(){
	for (var i=0;i<count;i++){
		console.log(i);  //0 1 2 3 4
	}
})();

console.log(i);  //ReferenceError: i is not defined
```

前面的代码在执行到 IIFE 外部的 console.log()时会出错，因为它访问的变量是在 IIFE 内部定义 的，在外部访问不到。在 ECMAScript 5.1 及以前，为了防止变量定义外泄，IIFE 是个非常有效的方式。 这样也不会导致闭包相关的内存问题，因为不存在对这个匿名函数的引用。为此，只要函数执行完毕， 其作用域链就可以被销毁。 

在 ECMAScript 6 以后，IIFE 就没有那么必要了，因为**块级作用域中的变量无须 IIFE 就可以实现同 样的隔离**。下面展示了两种不同的块级作用域形式：

```js
// 内嵌块级作用域
{
	let i;
	for (i = 0; i < count; i++) {
		console.log(i);
	}
}
console.log(i); // 抛出错误

// 循环的块级作用域
for (let i = 0; i < count; i++) {
	console.log(i);
}
console.log(i); // 抛出错误
```

说明 IIFE 用途的一个实际的例子，就是**可以用它锁定参数值**。比如：

```js
let divs = document.querySelectorAll('div');
// 达不到目的！
for (var i = 0; i < divs.length; ++i) {
	divs[i].addEventListener('click', function() {
	console.log(i);
});
}
```

**这里使用 var 关键字声明了循环迭代变量 i，但这个变量并不会被限制在 for 循环的块级作用域内。** 因此，渲染到页面上之后，点击每个<div>都会弹出元素总数。这是因为在执行单击处理程序时，迭代变 量的值是循环结束时的最终值，即元素的个数。而且，这个变量 i 存在于循环体外部，随时可以访问。

以前，为了实现点击第几个<div>就显示相应的索引值，需要借助 IIFE 来执行一个函数表达式，传 入每次循环的当前索引，从而“锁定”点击时应该显示的索引值：

```js
let divs = document.querySelectorAll('div');
for (var i = 0; i < divs.length; ++i) {
    divs[i].addEventListener('click', (function(frozenCounter) {
        return function() {
            console.log(frozenCounter);
        };
	})(i));
}
```

而使用 ECMAScript 块级作用域变量，就不用这么大动干戈了：

```js
let divs = document.querySelectorAll('div');
for (let i = 0; i < divs.length; ++i) {
	divs[i].addEventListener('click', function() {
		console.log(i);
	});
}
```

这样就可以让每次点击都显示正确的索引了。这里，**事件处理程序执行时就会引用 for 循环块级作 用域中的索引值**。这是因为在 ECMAScript 6 中，**如果对 for 循环使用块级作用域变量关键字，在这里 就是 let，那么循环就会为每个循环创建独立的变量，**从而让每个单击处理程序都能引用特定的索引。 **但要注意**，如果把变量声明拿到 for 循环外部，那就不行了。下面这种写法会碰到跟在循环中使用 var i = 0 同样的问题：

```js
let divs = document.querySelectorAll('div');
// 达不到目的！
let i;
for (i = 0; i < divs.length; ++i) {
    divs[i].addEventListener('click', function() {
    	console.log(i);
    });
}
```

## 16 私有变量

严格来讲，JavaScript 没有私有成员的概念，所有对象属性都公有的。不过，倒是有**私有变量**的概 念。**任何定义在函数或块中的变量，都可以认为是私有的**，因为在这个函数或块的外部无法访问其中的 变量。**私有变量包括函数参数、局部变量，以及函数内部定义的其他函数**。

来看下面的例子：

```js
function add(num1, num2) {
	let sum = num1 + num2;
	return sum;
}
```

在这个函数中，函数 add()有 3 个私有变量：num1、num2 和 sum。这几个变量只能在函数内部使 用，不能在函数外部访问。**如果这个函数中创建了一个闭包，则这个闭包能通过其作用域链访问其外部 的这 3 个变量。基于这一点，就可以创建出能够访问私有变量的公有方法。** 

### 特权方法

**特权方法**（privileged method）是**能够访问函数私有变量（及私有函数）的公有方法**。在对象上有 两种方式创建特权方法。第一种是**在构造函数中实现**，比如：

```js
function MyObject() {
	// 私有变量和私有函数
	let privateVariable = 10;

	function privateFunction() {
		return false;
	}

	// 特权方法
	this.publicMethod = function() {
		privateVariable++;
		return privateFunction();
	};
}

let test=new MyObject();
console.log(test.publicMethod())  //false
```

这个模式是把所有私有变量和私有函数都定义在构造函数中。然后，再创建一个能够访问这些私有成员的特权方法。**这样做之所以可行，是因为定义在构造函数中的特权方法其实是一个闭包，它具有访 问构造函数中定义的所有变量和函数的能力。**在这个例子中，变量 privateVariable 和函数 privateFunction()只能通过 publicMethod()方法来访问。在创建 MyObject 的实例后，没有办法 直接访问 privateVariable 和 privateFunction()，唯一的办法是使用 publicMethod()。 

如下面的例子所示，可以定义私有变量和特权方法，以隐藏不能被直接修改的数据：

```js
function Person(name) {
	this.getName = function() {
		return name;
	};
	this.setName = function (value) {
		name = value;
	};
}

let person = new Person('Nicholas');
console.log(person.getName()); // 'Nicholas'

person.setName('Greg');
console.log(person.getName()); // 'Greg'
```

这段代码中的构造函数定义了两个特权方法：getName()和 setName()。每个方法都可以构造函 数外部调用，并通过它们来读写私有的 name 变量。在 Person 构造函数外部，没有别的办法访问 name。 因为两个方法都定义在构造函数内部，所以它们都是能够通过作用域链访问 name 的闭包。**私有变量 name 对每个 Person 实例而言都是独一无二的，因为每次调用构造函数都会重新创建一套变量和方法。** 不过这样也有个问题：必须通过构造函数来实现这种隔离。正如第 8 章所讨论的，构造函数模式的缺点 是每个实例都会重新创建一遍新方法。使用静态私有变量实现特权方法可以避免这个问题。

### 16.1 静态私有变量

特权方法也可以通过使用**私有作用域**定义**私有变量和函数**来实现。这个模式如下所示：

```js
(function() {
	// 私有变量和私有函数
	let privateVariable = 10;
	function privateFunction() {
		return false;
	}
	
	// 构造函数
	MyObject = function() {};

	// 公有和特权方法
	MyObject.prototype.publicMethod = function() {
		privateVariable++;
		console.log(privateVariable);
		return privateFunction();
	};
})();

let test1=new MyObject();
console.log(test1.publicMethod());

let test2=new MyObject();
console.log(test2.publicMethod());
/*
11
false
12
false
*/
```

在这个模式中，匿名函数表达式创建了一个包含构造函数及其方法的私有作用域。首先定义的是私 有变量和私有函数，然后又定义了构造函数和公有方法。**公有方法定义在构造函数的原型上，**与典型的 原型模式一样。注意，这个模式定义的构造函数**没有**使用函数声明，使用的是函数表达式。函数声明会创建内部函数，在这里并不是必需的。**基于同样的原因（但操作相反），这里声明 MyObject 并没有使 用任何关键字。因为不使用关键字声明的变量会创建在全局作用域中，所以 MyObject 变成了全局变量， 可以在这个私有作用域外部被访问。**注意在严格模式下给未声明的变量赋值会导致错误。 

这个模式与前一个模式的**主要区别**就是，私有变量和私有函数是由实例共享的。**因为特权方法定义 在原型上，所以同样是由实例共享的**。特权方法作为一个闭包，始终引用着包含它的作用域。来看下面 的例子：

```js
(function() {
	let name = '';
	Person = function(value) {
		name = value;
	};

	Person.prototype.getName = function() {
		return name;
	};
	Person.prototype.setName = function(value) {
		name = value;
	};
})();

let person1 = new Person('Nicholas');
console.log(person1.getName()); // 'Nicholas'
person1.setName('Matt');
console.log(person1.getName()); // 'Matt'

let person2 = new Person('Michael');
console.log(person1.getName()); // 'Michael'
console.log(person2.getName()); // 'Michael'
```

这里的 Person 构造函数可以访问私有变量 name，跟 getName()和 setName()方法一样。**使用这 种模式，name 变成了静态变量，可供所有实例使用**。这意味着在任何实例上调用 setName()修改这个 变量都会影响其他实例。调用 setName()或创建新的 Person 实例都要把 name 变量设置为一个新值。 而所有实例都会返回相同的值。 

**像这样创建静态私有变量可以利用原型更好地重用代码，只是每个实例没有了自己的私有变量**。最 终，到底是把私有变量放在实例中，还是作为静态私有变量，都需要根据自己的需求来确定。 

注意 使用闭包和私有变量会导致作用域链变长，**作用域链越长，则查找变量所需的时间 也越多**。

### 16.2 模块模式

前面的模式通过自定义类型创建了私有变量和特权方法。而下面要讨论的 Douglas Crockford 所说的模块模式，则在一个单例对象上实现了相同的隔离和封装。单例对象（singleton）就是只有一个实例的对象。按照惯例，JavaScript 是通过对象字面量来创建单例对象的，如下面的例子所示：

```js
let singleton = {
    name: value,
    method() {
    	// 方法的代码
    }
};
```

**模块模式**是在单例对象基础上加以扩展，**使其通过作用域链来关联私有变量和特权方法**。模块模式的样板代码如下：

```js
let singleton = function() {
	// 私有变量和私有函数
	let privateVariable = 10;
	function privateFunction() {
		return false;
	}

	// 特权/公有方法和属性
	return {
		publicProperty: true,
		publicMethod() {
			privateVariable++;
			return privateFunction();
		}
	};
}();
```

模块模式使用了匿名函数返回一个对象。在匿名函数内部，首先定义私有变量和私有函数。之后， 创建一个要通过匿名函数返回的对象字面量。这个对象字面量中只包含可以公开访问的属性和方法。因 为这个对象定义在匿名函数内部，所以它的所有公有方法都可以访问同一个作用域的私有变量和私有函 数。**本质上，对象字面量定义了单例对象的公共接口。**如果单例对象需要进行某种初始化，并且需要访 问私有变量时，那就可以采用这个模式：

```js
let application = function() {
	// 私有变量和私有函数
	let components = new Array();

	// 初始化
	components.push(new BaseComponent());

	// 公共接口
	return {
		getComponentCount() {
			return components.length;
		},
		registerComponent(component) {
			if (typeof component == 'object') {
				components.push(component);
			}
		}
	};
}();
```

在 Web 开发中，经常需要使用单例对象管理应用程序级的信息。上面这个简单的例子创建了一个 application 对象用于管理组件。在创建这个对象之后，内部就会创建一个私有的数组 components， 然后将一个 BaseComponent 组件的新实例添加到数组中。（BaseComponent 组件的代码并不重要，在这里用它只是为了说明模块模式的用法。）对象字面量中定义的 getComponentCount()和 register- Component()方法都是可以访问 components 私有数组的特权方法。前一个方法返回注册组件的数量， 后一个方法负责注册新组件。

 **在模块模式中，单例对象作为一个模块，经过初始化可以包含某些私有的数据，而这些数据又可以 通过其暴露的公共方法来访问**。以这种方式创建的*每个单例对象都是 Object 的实例，因为最终单例都 由一个对象字面量来表示*。不过这无关紧要，因为单例对象通常是可以全局访问的，而不是作为参数传 给函数的，所以可以避免使用 instanceof 操作符确定参数是不是对象类型的需求。

### 16.3 模块增强模式

另一个利用模块模式的做法是**在返回对象之前先对其进行增强**。这适合单例对象需要是某个特定类型的实例，但又必须给它添加额外属性或方法的场景。来看下面的例子：

```js
let singleton = function() {
	// 私有变量和私有函数
	let privateVariable = 10;
	function privateFunction() {
		return false;
	}

	// 创建对象
	let object = new CustomType();

	// 添加特权/公有属性和方法
	object.publicProperty = true;
	object.publicMethod = function() {
		privateVariable++;
		return privateFunction();
	};
	// 返回对象
	return object;
}();
```

如果前一节的 application 对象必须是 BaseComponent 的实例，那么就可以使用下面的代码来创建它：

```js
let application = function() {
	// 私有变量和私有函数
	let components = new Array();

	// 初始化
	components.push(new BaseComponent());

	// 创建局部变量保存实例
	let app = new BaseComponent();

	// 公共接口
	app.getComponentCount = function() {
		return components.length;
	};
	app.registerComponent = function(component) {
		if (typeof component == "object") {
			components.push(component);
		}
	};
	
	// 返回实例
	return app;
}();
```

在这个重写的 application 单例对象的例子中，首先定义了私有变量和私有函数，跟之前例子中 一样。主要区别在于这里创建了一个名为 app 的变量，其中保存了 BaseComponent 组件的实例。**这是 最终要变成 application 的那个对象的局部版本**。在给这个局部变量 app 添加了能够访问私有变量的 公共方法之后，匿名函数返回了这个对象。然后，这个对象被赋值给 application。



# 代理与反射

ECMAScript 6 新增的代理和反射为开发者提供了拦截并向基本操作嵌入额外行为的能力。**具体地 说，可以给目标对象定义一个关联的代理对象，而这个代理对象可以作为抽象的目标对象来使用。**在对 目标对象的各种操作影响目标对象之前，可以在代理对象中对这些操作加以控制。

注意 在 ES6 之前，ECMAScript 中并没有类似代理的特性。由于代理是一种新的基础性 语言能力，很多转译程序都不能把代理行为转换为之前的 ECMAScript 代码，因为代理的 行为实际上是无可替代的。为此，代理和反射只在百分之百支持它们的平台上有用。可以 检测代理是否存在，不存在则提供后备代码。不过这会导致代码冗余，因此并不推荐。

## 1 代理基础

代理是目标对象的抽象。从很多方面看，代理类似 C++指针，因为它**可以 用作目标对象的替身**，**但又完全独立于目标对象**。目标对象既可以直接被操作，也可以通过代理来操作。 但直接操作会绕过代理施予的行为。 

注意 ECMAScript 代理与 C++指针有重大区别，后面会再讨论。不过作为一种有助于理 解的类比，指针在概念上还是比较合适的结构。

### 1.1 创建空代理

**最简单的代理是空代理**，即除了作为一个抽象的目标对象，什么也不做。**默认情况下，在代理对象 上执行的所有操作都会无障碍地传播到目标对象**。因此，在任何可以使用目标对象的地方，都可以通过 同样的方式来使用与之关联的代理对象。

代理是使用 Proxy 构造函数创建的。这个构造函数接收两个参数：**目标对象**和**处理程序对象**。缺 少其中任何一个参数都会抛出 TypeError。要创建空代理，可以传一个简单的对象字面量作为处理程序对象，从而让所有操作畅通无阻地抵达目标对象。

 如下面的代码所示，在代理对象上执行的任何操作实际上都会应用到目标对象。**唯一可感知的不同 就是代码中操作的是代理对象**。

```js
const target={
	id:"target"
}

const handler={};

const proxy=new Proxy(target,handler);

//id 属性会访问同一个值
console.log(target.id);  //target
console.log(proxy.id);  //target

// 给目标属性赋值会反映在两个对象上
// 因为两个对象访问的是同一个值
target.id="foo";
console.log(target.id);  //foo
console.log(proxy.id);  //foo

// 给代理属性赋值会反映在两个对象上
// 因为这个赋值会转移到目标对象
proxy.id="bar";
console.log(target.id);  //bar
console.log(proxy.id);  //bar

// hasOwnProperty()方法在两个地方
// 都会应用到目标对象
console.log(proxy.hasOwnProperty("id"));  //true
console.log(target.hasOwnProperty('id')); // true

// 严格相等可以用来区分代理和目标
console.log(target===proxy);  //false

// Proxy.prototype 是 undefined
// 因此不能使用 instanceof 操作符
//console.log(target instanceof Proxy);  //TypeError: Function has non-object prototype 'undefined' in instanceof check
//console.log(proxy instanceof Proxy);  //TypeError: Function has non-object prototype 'undefined' in instanceof check
```

### 1.2 定义捕获器

使用代理的**主要目的是可以定义捕获器**（trap）。**捕获器就是在处理程序对象中定义的“基本操作的 拦截器”**。每个处理程序对象可以包含零个或多个捕获器，每个捕获器都对应一种基本操作，可以直接 或间接在代理对象上调用。**每次在代理对象上调用这些基本操作时，代理可以在这些操作传播到目标对 象之前先调用捕获器函数，从而拦截并修改相应的行为。**

**注意** 捕获器（trap）是从操作系统中借用的概念。在操作系统中，捕获器是程序流中的 一个同步中断，可以暂停程序流，转而执行一段子例程，之后再返回原始程序流。

例如，可以定义一个 get()捕获器，在 ECMAScript 操作以某种形式调用 get()时触发。下面的例 子定义了一个 get()捕获器：

```js
const target={
	foo:"bar"
}

const handler={
	// 捕获器在处理程序对象中以方法名为键
	get(){
		return 'handler override';
	}
};

const proxy=new Proxy(target,handler);

```

这样，**当通过代理对象执行 get()操作时，就会触发定义的 get()捕获器**。当然，get()不是 ECMAScript 对象可以调用的方法。这个操作在 JavaScript 代码中可以通过多种形式触发并被 get()捕获 器拦截到。proxy[property]、proxy.property 或 Object.create(proxy)[property]等操作都 会触发基本的 get()操作以获取属性。因此所有这些操作只要发生在代理对象上，就会触发 get()捕获 器。**注意，只有在代理对象上执行这些操作才会触发捕获器**。在目标对象上执行这些操作仍然会产生正 常的行为。

```js
const target={
	foo:"bar"
}

const handler={
	// 捕获器在处理程序对象中以方法名为键
	get(){
		return 'handler override';
	}
};

const proxy=new Proxy(target,handler);

console.log(target.foo); // bar
console.log(proxy.foo); // handler override

console.log(target['foo']); // bar
console.log(proxy['foo']); // handler override

console.log(Object.create(target)['foo']);  //bar
console.log(Object.create(proxy)['foo']);  //handler override

```

### 1.3 捕获器参数和反射 API

**所有捕获器都可以访问相应的参数，基于这些参数可以重建被捕获方法的原始行为**。比如，get()捕获器会接收到目标对象、要查询的属性和代理对象三个参数。

```js
const target={
	foo:"bar"
}

const handler={
	// 捕获器在处理程序对象中以方法名为键
	get(trapTarget,property,receiver){
		//get()捕获器会接收到目标对象、要查询的属性和代理对象三个参数。
		console.log(trapTarget===target);
		console.log(property);
		console.log(receiver===proxy);
	}
};

const proxy=new Proxy(target,handler);

proxy.foo;
// true
// foo
// true
```

有了这些参数，就**可以重建被捕获方法的原始行为**：

```js
const target={
	foo:"bar"
}

const handler={
	// 捕获器在处理程序对象中以方法名为键
	get(trapTarget,property,receiver){
		//get()捕获器会接收到目标对象、要查询的属性和代理对象三个参数。
		return trapTarget[property];
	}
};

const proxy=new Proxy(target,handler);

console.log(target.foo); // bar
console.log(proxy.foo); // bar
```

所有捕获器都可以基于自己的参数重建原始操作，但并非所有捕获器行为都像 get()那么简单。因 此，通过手动写码如法炮制的想法是不现实的。实际上，开发者并不需要手动重建原始行为，而是**可以 通过调用全局 Reflect 对象上（封装了原始行为）的同名方法来轻松重建**。 

**处理程序对象中所有可以捕获的方法都有对应的反射（Reflect）API 方法**。这些方法与捕获器拦截 的方法具有相同的名称和函数签名，而且也具有与被拦截方法相同的行为。因此，使用反射 API 也可以 像下面这样定义出空代理对象：

```js
const target={
	foo:"bar"
}

const handler={
	get(){
		return Reflect.get(...arguments);
	}
};

const proxy=new Proxy(target,handler);

console.log(target.foo); // bar
console.log(proxy.foo); // bar
```

甚至还可以写得更简洁一些：

```js
const target={
	foo:"bar"
}

const handler={
	get: Reflect.get
};

const proxy=new Proxy(target,handler);

console.log(target.foo); // bar
console.log(proxy.foo); // bar
```

事实上，如果真想创建一个可以捕获所有方法，然后将每个方法转发给对应反射 API 的空代理，那么**甚至不需要定义处理程序对象**：

```js
const target={
	foo:"bar"
}

const proxy=new Proxy(target,Reflect);

console.log(target.foo); // bar
console.log(proxy.foo); // bar
```

反射 API 为开发者准备好了样板代码，**在此基础上开发者可以用最少的代码修改捕获的方法**。比如，下面的代码在某个属性被访问时，会对返回的值进行一番修饰：

```js
const target={
	foo:"bar",
	baz:"qux"
}

const handler={
	// 捕获器在处理程序对象中以方法名为键
	get(trapTarget,property,receiver){
		//get()捕获器会接收到目标对象、要查询的属性和代理对象三个参数。
		let decoration="";
		if (property==="foo") {
			decoration="!!!";
		}
		return Reflect.get(...arguments)+decoration;
	}
};

const proxy=new Proxy(target,handler);

console.log(target.foo); // bar
console.log(proxy.foo); // bar!!!

console.log(proxy.baz); // qux
console.log(target.baz); // qux
```

### 1.4 捕获器不变式

使用捕获器几乎可以改变所有基本方法的行为，但也不是没有限制。根据 ECMAScript 规范，**每个 捕获的方法都知道目标对象上下文、捕获函数签名**，而捕获处理程序的行为必须遵循“捕获器不变式” （trap invariant）。**捕获器不变式因方法不同而异，但通常都会防止捕获器定义出现过于反常的行为。** 

比如，如果目标对象有一个不可配置且不可写的数据属性，那么在捕获器返回一个与该属性不同的 值时，会抛出 TypeError：

```js
const target={};

Object.defineProperty(target,"foo",{
	configurable:false,
	writable:false,
	value:"bar"
});


const handler={
	get(){
		return "qux";
	}
};

const proxy=new Proxy(target,handler);

console.log(target.foo); // bar
console.log(proxy.foo); // bar!!!
/*TypeError: 'get' on proxy: property 'foo' is a read-only 
and non-configurable data property on the proxy target but 
the proxy did not return its actual value (expected 'bar' but got 'qux')*/
```

### 1.5 可撤销代理

有时候可能需要中断代理对象与目标对象之间的联系。对于使用 new Proxy()创建的普通代理来 说，这种联系会在代理对象的生命周期内一直持续存在。 

Proxy 也暴露了 **revocable()方法**，这个方法支持撤销代理对象与目标对象的关联。**撤销代理的 操作是不可逆的**。而且，**撤销函数（revoke()）是幂等的，**调用多少次的结果都一样。撤销代理之后 再调用代理会抛出 TypeError。 

撤销函数和代理对象是在实例化时同时生成的：

```js
const target={
	foo:"bar"
};


const handler={
	get(){
		return 'intercepted';
	}
};

const {proxy,revoke}=Proxy.revocable(target,handler);

console.log(target.foo); // bar
console.log(proxy.foo); // intercepted

revoke();  //撤销函数

console.log(proxy.foo);  //TypeError: Cannot perform 'get' on a proxy that has been revoked
```

### 1.6 实用反射 API

某些情况下应该优先使用反射 API，这是有一些理由的。
1. 反射 API 与对象 API
在使用反射 API 时，要记住：
(1) **反射 API 并不限于捕获处理程序**；
(2) **大多数反射 API 方法在 Object 类型上有对应的方法**。
通常，Object 上的方法适用于通用程序，而反射方法适用于细粒度的对象控制与操作。

2. 状态标记
很多反射方法返回称作“状态标记”的布尔值，表示意图执行的操作是否成功。有时候，状态标记比那些返回修改后的对象或者抛出错误（取决于方法）的反射 API 方法更有用。例如，可以使用反射API 对下面的代码进行重构：

```js
// 初始代码
const o={};

try{
	Object.defineProperty(o,"foo","bar");
	console.log("success");
}catch(e){
	console.log("failure");
}
```

在定义新属性时如果发生问题，Reflect.defineProperty()会返回 false，而不是抛出错误。因此使用这个反射方法可以这样重构上面的代码：

```js
// 重构后的代码
const o={};

if (Reflect.defineProperty(o,"foo",{value:"bar"})) {
	console.log("success");
}else{
	console.log("failure");
}
```

以下反射方法都会提供状态标记：
- Reflect.defineProperty()
- Reflect.preventExtensions()
- Reflect.setPrototypeOf()
- Reflect.set()
- Reflect.deleteProperty()

3. 用一等函数替代操作符

以下反射方法提供只有通过操作符才能完成的操作。
- Reflect.get()：可以替代对象属性访问操作符。
- Reflect.set()：可以替代=赋值操作符。
- Reflect.has()：可以替代 in 操作符或 with()。
- Reflect.deleteProperty()：可以替代 delete 操作符。
- Reflect.construct()：可以替代 new 操作符。

4. 安全地应用函数
在通过 apply 方法调用函数时，被调用的函数可能也定义了自己的 apply 属性（虽然可能性极小）。为绕过这个问题，可以使用定义在 Function 原型上的 apply 方法，比如：

```js
Function.prototype.apply.call(myFunc, thisVal, argumentList);
```

这种可怕的代码完全可以使用 Reflect.apply 来避免：

```js
Reflect.apply(myFunc, thisVal, argumentsList);
```

### 1.7 代理另一个代理

代理可以拦截反射 API 的操作，而这意味着完全可以创建一个代理，通过它去代理另一个代理。这样就可以在一个目标对象之上构建多层拦截网：

```js
const target={
    foo:"bar"
};

const firstProxy=new Proxy(target,{
    get(){
        console.log("first proxy");
        return Reflect.get(...arguments);
    }
});

const secondProxy=new Proxy(firstProxy,{
    get(){
        console.log("second proxy");
        return Reflect.get(...arguments);
    }
});

console.log(secondProxy.foo);  //
// second proxy
// first proxy
// bar
```

### 1.8 代理的问题与不足

代理是在 ECMAScript 现有基础之上构建起来的一套新 API，因此其实现已经尽力做到最好了。**很大程度上，代理作为对象的虚拟层可以正常使用**。但在某些情况下，代理也不能与现在的 ECMAScript机制很好地协同。

1. 代理中的 this

代理潜在的一个问题来源是 this 值。我们知道，方法中的 this 通常指向调用这个方法的对象：

```js
const target={
    thisValEqualsProxy() {
        return this === proxy;
    }
};

const proxy=new Proxy(target,{});

console.log(target.thisValEqualsProxy()); // false
console.log(proxy.thisValEqualsProxy()); // true
```

从直觉上讲，这样完全没有问题：调用代理上的任何方法，比如 proxy.outerMethod()，而这个方法进而又会调用另一个方法，如 this.innerMethod()，实际上都会调用 proxy.innerMethod()。多数情况下，这是符合预期的行为。可是，**如果目标对象依赖于对象标识，那就可能碰到意料之外的问题。**

还记得第 6 章中通过 WeakMap 保存私有变量的例子吧，以下是它的简化版：

```js
const wm = new WeakMap();

class User {
    constructor(userId) {
        wm.set(this, userId);
    }
    set id(userId) {
        wm.set(this, userId);
    }
    get id() {
        return wm.get(this);
    }
}
```

由于这个实现依赖 User 实例的对象标识，在这个实例被代理的情况下就会出问题：

```js
let user=new User(123);
console.log(user.id);  //123

const userInstanceProxy = new Proxy(user, {});
console.log(userInstanceProxy.id); // undefined
```

这是因为 User 实例一开始使用目标对象作为 WeakMap 的键，代理对象却尝试从自身取得这个实例。要解决这个问题，**就需要重新配置代理，把代理 User 实例改为代理 User 类本身。**之后再创建代理的实例就会以代理实例作为 WeakMap 的键了：

```js
const wm = new WeakMap();

class User {
    constructor(userId) {
        wm.set(this, userId);
    }
    set id(userId) {
        wm.set(this, userId);
    }
    get id() {
        return wm.get(this);
    }
}

const UserClassProxy = new Proxy(User, {});
const proxyUser = new UserClassProxy(456);
console.log(proxyUser.id);  //456
```

2. 代理与内部槽位

代理与内置引用类型（比如 Array）的实例通常可以很好地协同，但**有些 ECMAScript 内置类型可 能会依赖代理无法控制的机制**，结果导致在代理上调用某些方法会出错。 

一个典型的例子就是 Date 类型。根据 ECMAScript 规范，**Date 类型方法的执行依赖 this 值上的 内部槽位[[NumberDate]]。代理对象上不存在这个内部槽位，**而且这个内部槽位的值也不能通过普通 的 get()和 set()操作访问到，于是代理拦截后本应转发给目标对象的方法会抛出 TypeError：

```js
const target = new Date();
const proxy = new Proxy(target, {});

console.log(proxy instanceof Date); // true
proxy.getDate(); // TypeError: 'this' is not a Date object
```



## 2 代理捕获器与反射方法

代理可以捕获 13 种不同的基本操作。这些操作有各自不同的反射 API 方法、参数、关联 ECMAScript 操作和不变式。 

正如前面示例所展示的，有几种不同的 JavaScript 操作会调用同一个捕获器处理程序。不过，**对于 在代理对象上执行的任何一种操作，只会有一个捕获处理程序被调用。不会存在重复捕获的情况。** 

**只要在代理上调用，所有捕获器都会拦截它们对应的反射 API 操作。**

### 2.1 get()

**get()捕获器会在获取属性值的操作中被调用**。对应的反射 API 方法为 Reflect.get()。

```js
const mytarget={};

const proxy=new Proxy(mytarget,{
    get(target,property,receiver){
        console.log('get()');
        return Reflect.get(...arguments);
    }
});

proxy.foo;  //get()
```

1. 返回值
返回值无限制。

2. 拦截的操作

- proxy.property
- proxy[property]
- Object.create(proxy)[property]
- Reflect.get(proxy, property, receiver)

3. 捕获器处理程序参数

- target：目标对象。
- property：引用的目标对象上的字符串键属性。
- receiver：代理对象或继承代理对象的对象。

4. 捕获器不变式
    如果 target.property 不可写且不可配置，则处理程序返回的值必须与 target.property 匹配。

  如果 target.property 不可配置且[[Get]]特性为 undefined，处理程序的返回值也必须是 undefined。

### 2.2 set()

**set()捕获器会在设置属性值的操作中被调用**。对应的反射 API 方法为 Reflect.set()。

```js
const mytarget={};

const proxy=new Proxy(mytarget,{
    set(target,property,value,receiver){
        console.log('set()');
        return Reflect.set(...arguments);
    }
});

proxy.foo="bar";  //set()
```

1. 返回值
返回 true 表示成功；返回 false 表示失败，严格模式下会抛出 TypeError。
2. 拦截的操作
- proxy.property = value
- proxy[property] = value
- Object.create(proxy)[property] = value
- Reflect.set(proxy, property, value, receiver)
3. 捕获器处理程序参数
- target：目标对象。
- property：引用的目标对象上的字符串键属性。
- value：要赋给属性的值。
- receiver：接收最初赋值的对象。
4. 捕获器不变式
    如果 target.property 不可写且不可配置，则不能修改目标属性的值。

  如果 target.property 不可配置且[[Set]]特性为 undefined，则不能修改目标属性的值。在严格模式下，处理程序中返回 false 会抛出 TypeError。

### 2.3 has()

has()捕获器会在 in 操作符中被调用。对应的反射 API 方法为 Reflect.has()。

```js
const mytarget={};

const proxy=new Proxy(mytarget,{
    has(target,property){
        console.log('has()');
        return Reflect.has(...arguments);
    }
});

console.log("foo" in proxy);  //false
//has()
```

1. 返回值
has()必须返回布尔值，表示属性是否存在。返回非布尔值会被转型为布尔值。
2. 拦截的操作
- property in proxy
- property in Object.create(proxy)
- with(proxy) {(property);}
- Reflect.has(proxy, property)
3. 捕获器处理程序参数
- target：目标对象。
- property：引用的目标对象上的字符串键属性。
4. 捕获器不变式
    如果 target.property 存在且不可配置，则处理程序必须返回 true。

  如果 target.property 存在且目标对象不可扩展，则处理程序必须返回 true。

### 2.4 defineProperty()

defineProperty()捕获器会在 Object.defineProperty()中被调用。对应的反射 API 方法为Reflect.defineProperty()。

```js
const mytarget={};

const proxy=new Proxy(mytarget,{
    defineProperty(target,property,descriptor){
        console.log('defineProperty()');
        return Reflect.defineProperty(...arguments);
    }
});

Object.defineProperty(proxy,"foo",{value:"bar"});
//defineProperty()
```

1. 返回值
defineProperty()必须返回布尔值，表示属性是否成功定义。返回非布尔值会被转型为布尔值。
2. 拦截的操作
- Object.defineProperty(proxy, property, descriptor)
- Reflect.defineProperty(proxy, property, descriptor)
3. 捕获器处理程序参数
- target：目标对象。
- property：引用的目标对象上的字符串键属性。
- descriptor：包含可选的 enumerable、configurable、writable、value、get 和 set定义的对象。
4. 捕获器不变式
如果目标对象不可扩展，则无法定义属性。
如果目标对象有一个可配置的属性，则不能添加同名的不可配置属性。
如果目标对象有一个不可配置的属性，则不能添加同名的可配置属性。

### 2.5 getOwnPropertyDescriptor()

getOwnPropertyDescriptor()捕获器会在 Object.getOwnPropertyDescriptor()中被调用。对应的反射 API 方法为 Reflect.getOwnPropertyDescriptor()。

```js
const mytarget={};

const proxy=new Proxy(mytarget,{
    getOwnPropertyDescriptor(target,property){
        console.log('getOwnPropertyDescriptor()');
        return Reflect.getOwnPropertyDescriptor(...arguments);
    }
});

Object.getOwnPropertyDescriptor(proxy,"foo");
//getOwnPropertyDescriptor()
```

1. 返回值
getOwnPropertyDescriptor()必须返回对象，或者在属性不存在时返回 undefined。
2. 拦截的操作
- Object.getOwnPropertyDescriptor(proxy, property)
- Reflect.getOwnPropertyDescriptor(proxy, property)
3. 捕获器处理程序参数
- target：目标对象。
- property：引用的目标对象上的字符串键属性。
4. 捕获器不变式
如果自有的 target.property 存在且不可配置，则处理程序必须返回一个表示该属性存在的对象。
如果自有的 target.property 存在且可配置，则处理程序必须返回表示该属性可配置的对象。
如果自有的 target.property 存在且 target 不可扩展，则处理程序必须返回一个表示该属性存在的对象。
如果 target.property 不存在且 target 不可扩展，则处理程序必须返回 undefined 表示该属性不存在。
如果 target.property 不存在，则处理程序不能返回表示该属性可配置的对象。

### 2.6 deleteProperty()

deleteProperty()捕获器会在 delete 操作符中被调用。对应的反射 API 方法为 Reflect.deleteProperty()。

```js
const mytarget={};

const proxy=new Proxy(mytarget,{
    deleteProperty(target,property){
        console.log('deleteProperty()');
        return Reflect.deleteProperty(...arguments);
    }
});

console.log(delete proxy.foo);  //true
//deleteProperty()
```

1. 返回值
deleteProperty()必须返回布尔值，表示删除属性是否成功。返回非布尔值会被转型为布尔值。
2. 拦截的操作
- delete proxy.property
- delete proxy[property]
- Reflect.deleteProperty(proxy, property)
3. 捕获器处理程序参数
- target：目标对象。
- property：引用的目标对象上的字符串键属性。
4. 捕获器不变式
如果自有的 target.property 存在且不可配置，则处理程序不能删除这个属性。

### 2.7 ownKeys()

ownKeys()捕获器**会在 Object.keys()及类似方法中被调用**。对应的反射 API 方法为 Reflect.ownKeys()。

```js
const mytarget={};

const proxy=new Proxy(mytarget,{
    ownKeys(target){
        console.log('ownKeys()');
        return Reflect.ownKeys(...arguments);
    }
});

console.log(Object.keys(proxy));  //[]
//ownKeys()
```

1. 返回值
ownKeys()必须返回包含字符串或符号的可枚举对象。
2. 拦截的操作
- Object.getOwnPropertyNames(proxy)
- Object.getOwnPropertySymbols(proxy)
- Object.keys(proxy)
- Reflect.ownKeys(proxy)
3. 捕获器处理程序参数
- target：目标对象。
4. 捕获器不变式
返回的可枚举对象必须包含 target 的所有不可配置的自有属性。
如果 target 不可扩展，则返回可枚举对象必须准确地包含自有属性键。

### 2.8 getPrototypeOf()

getPrototypeOf()捕获器会在 Object.getPrototypeOf()中被调用。对应的反射 API 方法为Reflect.getPrototypeOf()。

```js
const mytarget={};

const proxy=new Proxy(mytarget,{
    getPrototypeOf(target){
        console.log('getPrototypeOf()');
        return Reflect.getPrototypeOf(...arguments);
    }
});

console.log(Object.getPrototypeOf(proxy));  //[Object: null prototype] {}
//getPrototypeOf()
```

1. 返回值
getPrototypeOf()必须返回对象或 null。
2. 拦截的操作
- Object.getPrototypeOf(proxy)
- Reflect.getPrototypeOf(proxy)
- proxy.__proto__
- Object.prototype.isPrototypeOf(proxy)
- proxy instanceof Object
3. 捕获器处理程序参数
- target：目标对象。
4. 捕获器不变式
如果 target 不可扩展，则 Object.getPrototypeOf(proxy)唯一有效的返回值就是 Object.getPrototypeOf(target)的返回值。

### 2.9 setPrototypeOf()

setPrototypeOf()捕获器会在 Object.setPrototypeOf()中被调用。对应的反射 API 方法为Reflect.setPrototypeOf()。

```js
const mytarget={};

const proxy=new Proxy(mytarget,{
    setPrototypeOf(target,prototype){
        console.log('setPrototypeOf()');
        return Reflect.setPrototypeOf(...arguments);
    }
});

console.log(Object.setPrototypeOf(proxy,Object));  //Function {}
//setPrototypeOf()
```

1. 返回值
setPrototypeOf()必须返回布尔值，表示原型赋值是否成功。返回非布尔值会被转型为布尔值。
2. 拦截的操作
- Object.setPrototypeOf(proxy)
- Reflect.setPrototypeOf(proxy)
3. 捕获器处理程序参数
- target：目标对象。
- prototype：target 的替代原型，如果是顶级原型则为 null。
4. 捕获器不变式
如果 target 不可扩展，则唯一有效的 prototype 参数就是 Object.getPrototypeOf(target)的返回值。

### 2.10 isExtensible()

isExtensible()捕获器会在 Object.isExtensible()中被调用。对应的反射 API 方法为Reflect.isExtensible()。

```js
const mytarget={};

const proxy=new Proxy(mytarget,{
    isExtensible(target){
        console.log('isExtensible()');
        return Reflect.isExtensible(...arguments);
    }
});

console.log(Object.isExtensible(proxy));  //true
//isExtensible()
```

1. 返回值
isExtensible()必须返回布尔值，表示 target 是否可扩展。返回非布尔值会被转型为布尔值。
2. 拦截的操作
- Object.isExtensible(proxy)
- Reflect.isExtensible(proxy)
3. 捕获器处理程序参数
- target：目标对象。
4. 捕获器不变式
如果 target 可扩展，则处理程序必须返回 true。
如果 target 不可扩展，则处理程序必须返回 false。

### 2.11 preventExtensions()

preventExtensions()捕获器会在 Object.preventExtensions()中被调用。对应的反射 API方法为 Reflect.preventExtensions()。

```js
const mytarget={};

const proxy=new Proxy(mytarget,{
    preventExtensions(target){
        console.log('preventExtensions()');
        return Reflect.preventExtensions(...arguments);
    }
});

console.log(Object.preventExtensions(proxy));  //
//preventExtensions()
```

1. 返回值
preventExtensions()必须返回布尔值，表示 target 是否已经不可扩展。返回非布尔值会被转型为布尔值。
2. 拦截的操作
- Object.preventExtensions(proxy)
- Reflect.preventExtensions(proxy)
3. 捕获器处理程序参数
- target：目标对象。
4. 捕获器不变式
如果 Object.isExtensible(proxy)是 false，则处理程序必须返回 true。

### 2.12 apply()

apply()捕获器会在调用函数时中被调用。对应的反射 API 方法为 Reflect.apply()。

```js
const mytarget=()=>{};

const proxy=new Proxy(mytarget,{
    apply(target,thisArg,...argumentsList){
        console.log('apply()');
        return Reflect.apply(...arguments);
    }
});

proxy();  //apply()
```

1. 返回值
返回值无限制。
2. 拦截的操作
- proxy(...argumentsList)
- Function.prototype.apply(thisArg, argumentsList)
- Function.prototype.call(thisArg, ...argumentsList)
- Reflect.apply(target, thisArgument, argumentsList)
3. 捕获器处理程序参数
- target：目标对象。
- thisArg：调用函数时的 this 参数。
- argumentsList：调用函数时的参数列表
4. 捕获器不变式
target 必须是一个函数对象。

### 2.13 construct()

construct()捕获器会在 new 操作符中被调用。对应的反射 API 方法为 Reflect.construct()。

```js
const mytarget=function(){};

const proxy=new Proxy(mytarget,{
    construct(target,argumentsList,newTarget){
        console.log('construct()');
        return Reflect.construct(...arguments);
    }
});

new proxy;  //construct()
```

1. 返回值
construct()必须返回一个对象。
2. 拦截的操作
- new proxy(...argumentsList)
- Reflect.construct(target, argumentsList, newTarget)
3. 捕获器处理程序参数
- target：目标构造函数。
- argumentsList：传给目标构造函数的参数列表。
- newTarget：最初被调用的构造函数。
4. 捕获器不变式
target 必须可以用作构造函数。

## 3 代理模式

使用代理可以在代码中实现一些有用的编程模式。

### 3.1 跟踪属性访问

**通过捕获 get、set 和 has 等操作，可以知道对象属性什么时候被访问、被查询。**把实现相应捕获器的某个对象代理放到应用中，可以监控这个对象何时在何处被访问过：

```js
const user={
    name:"Arnold"
};

const proxy=new Proxy(user,{
    get(target,property,receiver){
        console.log(`Getting ${property}`);
        return Reflect.get(...arguments);
    },
    set(target,property,value,receiver){
        console.log(`Setting ${property}=${value}`);
        return Reflect.set(...arguments);
    },
});

proxy.name;  //Getting name
proxy.age=23;  //Setting age=23
```

### 3.2 隐藏属性

代理的内部实现对外部代码是不可见的，因此要隐藏目标对象上的属性也轻而易举。比如：

```js
const hiddenProperties = ['foo', 'bar'];

const targetObject = {
    foo: 1,
    bar: 2,
    baz: 3
};

const proxy=new Proxy(targetObject,{
    get(target,property){
        if (hiddenProperties.includes(property)) {
            return undefined;
        }else{
            return Reflect.get(...arguments);
        }
    },
    has(target,property){
        if (hiddenProperties.includes(property)) {
            return false;
        }else{
            return Reflect.has(...arguments);
        }
    },
});

// get()
console.log(proxy.foo); // undefined
console.log(proxy.bar); // undefined
console.log(proxy.baz); // 3
// has()
console.log('foo' in proxy); // false
console.log('bar' in proxy); // false
console.log('baz' in proxy); // true
```

### 3.3 属性验证

因为所有赋值操作都会触发 set()捕获器，所以可以根据所赋的值决定是允许还是拒绝赋值：

```js
const target = {
    onlyNumbersGoHere: 0
};

const proxy=new Proxy(target,{
    set(target,property,value){
        if (typeof value !=="number") {
            return false;
        }else{
            return Reflect.set(...arguments);
        }
    }
});

proxy.onlyNumbersGoHere = 1;
console.log(proxy.onlyNumbersGoHere); // 1
proxy.onlyNumbersGoHere = '2';
console.log(proxy.onlyNumbersGoHere); // 1
```

### 3.4 函数与构造函数参数验证

跟保护和验证对象属性类似，也可对函数和构造函数参数进行审查。比如，可以让函数只接收某种类型的值：

```js
function median(...nums){
    return nums.sort()[Math.floor(nums.length/2)]
}

const proxy=new Proxy(median,{
    apply(target,thisArg,argumentsList){
        for (let arg of argumentsList){
            if (typeof arg !=="number") {
                throw "Non-number argument provided";
            }
        }
        return Reflect.apply(...arguments);
    }
});

console.log(proxy(4, 7, 1)); // 4
console.log(proxy(4, '7', 1));
// Error: Non-number argument provided
```

类似地，可以要求实例化时必须给构造函数传参：

### 3.5 数据绑定与可观察对象

**通过代理可以把运行时中原本不相关的部分联系到一起**。这样就可以实现各种模式，从而让不同的代码互操作。

比如，可以将被代理的类绑定到一个全局实例集合，让所有创建的实例都被添加到这个集合中：

```js
const userList = [];

class User {
    constructor(name) {
        this.name_ = name;
    }
}

const proxy=new Proxy(User,{
    construct(target,argumentsList,newTarget){
        const newUser = Reflect.construct(...arguments);
        userList.push(newUser);
        return newUser;
    }
});

new proxy('John');
new proxy('Jacob');
new proxy('Jingleheimerschmidt');
console.log(userList); // 
/*
[
  User { name_: 'John' },
  User { name_: 'Jacob' },
  User { name_: 'Jingleheimerschmidt' }
]
*/
```

另外，还可以把集合绑定到一个事件分派程序，每次插入新实例时都会发送消息：

```js
const userList = [];

function emit(newValue){
    console.log(newValue);
}

const proxy=new Proxy(userList,{
    set(target, property, value, receiver) {
        const result=Reflect.set(...arguments);
        if (result) {
            emit(Reflect.get(target,property,receiver));
        }
        return result;
    }
});

proxy.push('John');
// John
//1
proxy.push('Jacob');
// Jacob
//2
```



# 期约与异步函数

ECMAScript 6 及之后的几个版本逐步加大了对异步编程机制的支持，提供了令人眼前一亮的新特 性。ECMAScript 6 新增了正式的 **Promise（期约）**引用类型，支持优雅地定义和组织异步逻辑。接下 来几个版本增加了使用 async 和 await 关键字定义异步函数的机制。 

注意 本章示例将大量使用异步日志输出的方式 setTimeout(console.log, 0, ... params)，旨在演示执行顺序及其他异步行为。异步输出的内容看起来虽然像是同步输出 的，但实际上是异步打印的。这样可以让期约等返回的值达到其最终状态。 此外，浏览器控制台的输出经常能打印出 JavaScript 运行中无法获取的对象信息（比如期 约的状态）。这个特性在示例中广泛使用，以便辅助读者理解相关概念。

## 1 异步编程

同步行为和异步行为的对立统一是计算机科学的一个基本概念。特别是在 JavaScript 这种单线程事 件循环模型中，同步操作与异步操作更是代码所要依赖的核心机制。**异步行为是为了优化因计算量大而 时间长的操作**。如果在等待其他操作完成的同时，即使运行其他指令，系统也能保持稳定，那么这样做 就是务实的。 

重要的是，**异步操作并不一定计算量大或要等很长时间**。只要你不想为等待某个异步操作而阻塞线 程执行，那么任何时候都可以使用。

### 1.1 同步与异步

**同步行为**对应内存中顺序执行的处理器指令。每条指令都会严格按照它们出现的顺序来执行，而每 条指令执行后也能立即获得存储在系统本地（如寄存器或系统内存）的信息。这样的执行流程容易分析 程序在执行到代码任意位置时的状态（比如变量的值）。

同步操作的例子可以是执行一次简单的数学计算：

```js
let x = 3;
x = x + 4;
```

在程序执行的每一步，都可以推断出程序的状态。这是**因为后面的指令总是在前面的指令完成后才 会执行**。等到最后一条指定执行完毕，存储在 x 的值就立即可以使用。 

这两行 JavaScript 代码对应的**低级指令**（从 JavaScript 到 x86）并不难想象。首先，操作系统会在栈 内存上分配一个存储浮点数值的空间，然后针对这个值做一次数学计算，再把计算结果写回之前分配的 内存中。**所有这些指令都是在单个线程中按顺序执行的**。在低级指令的层面，有充足的工具可以确定系 统状态。 

相对地，**异步行为**类似于系统中断，**即当前进程外部的实体可以触发代码执行。异步操作经常是必 要的**，因为强制进程等待一个长时间的操作通常是不可行的（同步操作则必须要等）。如果代码要访问 一些高延迟的资源，比如向远程服务器发送请求并等待响应，那么就会出现长时间的等待。 

异步操作的例子可以是在定时回调中执行一次简单的数学计算：

```js
et x = 3;
setTimeout(() => x = x + 4, 1000);
```

这段程序最终与同步代码执行的任务一样，都是把两个数加在一起，但这一次执行线程不知道 x 值 何时会改变，**因为这取决于回调何时从消息队列出列并执行。** 

异步代码不容易推断。虽然这个例子对应的低级代码最终跟前面的例子没什么区别，但**第二个指令 块**（加操作及赋值操作）是由系统计时器触发的，这会生成一个入队执行的中断。**到底什么时候会触发 这个中断，这对 JavaScript 运行时来说是一个黑盒**，因此实际上无法预知（尽管可以保证这发生在当前 线程的同步代码执行之后，否则回调都没有机会出列被执行）。**无论如何，在排定回调以后基本没办法 知道系统状态何时变化。**

 **为了让后续代码能够使用 x，异步执行的函数需要在更新 x 的值以后通知其他代码**。如果程序不需 要这个值，那么就只管继续执行，不必等待这个结果了。 

设计一个能够知道 x 什么时候可以读取的系统是非常难的。JavaScript 在实现这样一个系统的过程 中也经历了几次迭代。

### 1.2 以往的异步编程模式

异步行为是 JavaScript 的基础，但以前的实现不理想。在早期的 JavaScript 中，只支持定义回调函数 来表明异步操作完成。**串联多个异步操作是一个常见的问题，通常需要深度嵌套的回调函数**（俗称“***回调地狱***”）**来解决**。 假设有以下异步函数，使用了 setTimeout 在一秒钟之后执行某些操作：

```js
function double(value) {
	setTimeout(() => setTimeout(console.log, 0, value * 2), 1000);
}
double(3);
// 6（大约 1000 毫秒之后）
```

这里的代码没什么神秘的，但关键是理解为什么说它是一个异步函数。**setTimeout 可以定义一个 在指定时间之后会被调度执行的回调函数。**对这个例子而言，1000 毫秒之后，JavaScript 运行时会把回 调函数推到自己的消息队列上去等待执行。推到队列之后，回调什么时候出列被执行对 JavaScript 代码 就完全不可见了。还有一点，double()函数在 setTimeout 成功调度异步操作之后会立即退出。

#### 异步返回值

假设 setTimeout 操作会返回一个有用的值。有什么好办法把这个值传给需要它的地方？广泛接受的**一个策略是给异步操作提供一个回调**，这个回调中包含要使用异步返回值的代码（作为回调的参数）。

```js
function double(value,callback) {
	setTimeout(() => callback(value * 2), 1000);
}
double(3,(x)=>console.log(`I was given: ${x}`));
// I was given: 6（大约 1000 毫秒之后）
```

这里的 setTimeout 调用告诉 JavaScript 运行时在 1000 毫秒之后把一个函数推到消息队列上。这个函数会由运行时负责异步调度执行。**而位于函数闭包中的回调及其参数在异步执行时仍然是可用的**。

####  失败处理

异步操作的失败处理在回调模型中也要考虑，因此自然就出现了成功回调和失败回调：

```js
function double(value,success,failure) {
	setTimeout(() => {
		try{
			if (typeof value!=="number") {
				throw "Must provide number as first argument";
			}
			success(2*value);
		}catch(e){
			failure(e);
		}
	},1000);
}

const successCallback=(x)=>console.log(`success:${x}`);
const failureCallback = (e) => console.log(`Failure: ${e}`);

double(3,successCallback,failureCallback);  //Success: 6（大约 1000 毫秒之后）
double('3',successCallback,failureCallback);  //Failure: Must provide number as first argument（大约 1000 毫秒之后）
```

**这种模式已经不可取了，因为必须在初始化异步操作时定义回调**。异步函数的返回值只在短时间内存在，只有预备好将这个短时间内存在的值作为参数的回调才能接收到它。

#### 嵌套异步回调

如果异步返值又依赖另一个异步返回值，那么回调的情况还会进一步变复杂。在实际的代码中，这就要求嵌套回调：

```js
function double(value,success,failure) {
	setTimeout(() => {
		try{
			if (typeof value!=="number") {
				throw "Must provide number as first argument";
			}
			success(2*value);
		}catch(e){
			failure(e);
		}
	},1000);
}

const successCallback=(x)=>{
	double(x,(y)=>console.log(`success:${y}`));
};
const failureCallback = (e) => console.log(`Failure: ${e}`);

double(3,successCallback,failureCallback);  //
// Success: 12（大约 1000 毫秒之后）
```

显然，随着代码越来越复杂，回调策略是不具有扩展性的。**“回调地狱”这个称呼可谓名至实归。**嵌套回调的代码维护起来就是噩梦。

## 2 期约

**期约是对尚不存在结果的一个替身**。期约（promise）这个名字最早是由 Daniel Friedman 和 David Wise 在他们于 1976 年发表的论文“The Impact of Applicative Programming on Multiprocessing”中提出来的。 但直到十几年以后，Barbara Liskov 和 Liuba Shrira 在 1988 年发表了论文“Promises: Linguistic Support for Efficient Asynchronous Procedure Calls in Distributed Systems”，这个概念才真正确立下来。同一时期的计 算机科学家还使用了“终局”（eventual）、“期许”（future）、“延迟”（delay）和“迟付”（deferred）等 术语指代同样的概念。所有这些概念描述的都是一种异步程序执行的机制。

### 2.1 Promises/A+规范

早期的期约机制在 jQuery 和 Dojo 中是以 Deferred API 的形式出现的。到了 2010 年，CommonJS 项 目实现的 Promises/A 规范日益流行起来。Q 和 Bluebird 等第三方 JavaScript 期约库也越来越得到社区认 可，虽然这些库的实现多少都有些不同。为弥合现有实现之间的差异，2012 年 Promises/A+组织分叉（fork） 了 CommonJS 的 Promises/A 建议，并以相同的名字制定了 Promises/A+规范。这个规范最终成为了 ECMAScript 6 规范实现的范本。 

ECMAScript 6 增加了对 Promises/A+规范的完善支持，即 Promise 类型。一经推出，Promise 就 大受欢迎，成为了主导性的异步编程机制。所有现代浏览器都支持 ES6 期约，很多其他浏览器 API（如 fetch()和 Battery Status API）也以期约为基础。

### 2.2 期约基础

ECMAScript 6 新增的引用类型 Promise，可以通过 new 操作符来实例化。**创建新期约时需要传入执行器（executor）函数作为参数**，下面的例子使用了一个空函数对象来应付一下解释器：

```js
let p=new Promise(()=>{});
setTimeout(console.log,0,p);  //Promise { <pending> }
```

之所以说是**应付解释器**，是因为如果不提供执行器函数，就会抛出 SyntaxError。

#### 期约状态机

在把一个期约实例传给 console.log()时，控制台输出（可能因浏览器不同而略有差异）表明该 实例处于待定（pending）状态。如前所述，期约是一个有状态的对象，可能处于如下 3 种状态之一：
- 待定（pending） 

- 兑现（fulfilled，有时候也称为“解决”，resolved） 

- 拒绝（rejected） 

**待定（pending）**是期约的最初始状态。在待定状态下，期约可以**落定（settled）**为代表成功的**兑现 （fulfilled）**状态，或者代表失败的**拒绝（rejected）**状态。

**无论落定为哪种状态都是不可逆的**。只要从待 定转换为兑现或拒绝，期约的状态就不再改变。

而且，**也不能保证期约必然会脱离待定状态**。因此，组 织合理的代码无论期约解决（resolve）还是拒绝（reject），甚至永远处于待定（pending）状态，都应该 具有恰当的行为。 

重要的是，**期约的状态是私有的，不能直接通过 JavaScript 检测到**。这主要是为了避免根据读取到 的期约状态，以同步方式处理期约对象。另外，**期约的状态也不能被外部 JavaScript 代码修改。**这与不 能读取该状态的原因是一样的：**期约故意将异步行为封装起来，从而隔离外部的同步代码**。

#### 解决值、拒绝理由及期约用例

期约主要有两大用途。

- 首先是**抽象地表示一个异步操作**。*期约的状态代表期约是否完成*。“待定” 表示尚未开始或者正在执行中。“兑现”表示已经成功完成，而“拒绝”则表示没有成功完成。 

**某些情况下，这个状态机就是期约可以提供的最有用的信息**。知道一段异步代码已经完成，对于其 他代码而言已经足够了。比如，假设期约要向服务器发送一个 HTTP 请求。请求返回 200~299 范围内的 状态码就足以让期约的状态变为“兑现”。类似地，如果请求返回的状态码不在 200~299 这个范围内， 那么就会把期约状态切换为“拒绝”。 

在另外一些情况下，**期约封装的异步操作会实际生成某个值，而程序期待期约状态改变时可以访问 这个值。**相应地，如果期约被拒绝，程序就会期待期约状态改变时可以拿到拒绝的理由。比如，假设期 约向服务器发送一个 HTTP 请求并预定会返回一个 JSON。如果请求返回范围在 200~299 的状态码，则 足以让期约的状态变为兑现。此时期约内部就可以收到一个 JSON 字符串。类似地，如果请求返回的状 态码不在 200~299 这个范围内，那么就会把期约状态切换为拒绝。此时拒绝的理由可能是一个 Error 对象，包含着 HTTP 状态码及相关错误消息。

 **为了支持这两种用例，每个期约只要状态切换为兑现，就会有一个私有的内部值（value）**。

类似地， 每个期约**只要状态切换为拒绝，就会有一个私有的内部理由（reason）**。无论是值还是理由，都是包含原 始值或对象的不可修改的引用。二者都是可选的，而且默认值为 undefined。**在期约到达某个落定状 态时执行的异步代码始终会收到这个值或理由。**

#### 通过执行函数控制期约状态

**由于期约的状态是私有的，所以只能在内部进行操作**。内部操作在期约的**执行器函数**中完成。

执行 器函数主要有两项职责：**初始化期约的异步行为**和**控制状态的最终转换**。其中，控制期约状态的转换是 通过调用它的两个函数参数实现的。这两个函数参数通常都命名为 **resolve()和 reject()**。*调用 resolve()会把状态切换为兑现，调用 reject()会把状态切换为拒绝。另外，调用 reject()也会抛 出错误（后面会讨论这个错误）。*

```js
//调用 resolve()会把状态切换为兑现，
let p1=new Promise((resolve,reject)=>resolve());
setTimeout(console.log,0,p1);  //// Promise <resolved>

//调用 reject()会把状态切换为拒绝。
let p2=new Promise((resolve,reject)=>reject());
setTimeout(console.log,0,p2);  // Promise <rejected>
//UnhandledPromiseRejectionWarning: undefined
```

在前面的例子中，并没有什么异步操作，因为在初始化期约时，执行器函数已经改变了每个期约的状态。**这里的关键在于，执行器函数是同步执行的。这是因为执行器函数是期约的初始化程序**。通过下面的例子可以看出上面代码的执行顺序：

```js
new Promise(() => setTimeout(console.log, 0, 'executor'));
setTimeout(console.log, 0, 'promise initialized');
// executor
// promise initialized
```

**添加 setTimeout 可以推迟切换状态：**

```js
let p = new Promise((resolve, reject) => setTimeout(resolve, 1000));

// 在 console.log 打印期约实例的时候，还不会执行超时回调（即 resolve()）
setTimeout(console.log, 0, p); // Promise <pending>
```

**无论 resolve()和 reject()中的哪个被调用，状态转换都不可撤销了。**于是继续修改状态会静默失败，如下所示：

```js
let p = new Promise((resolve, reject) => {
	resolve();
	reject(); // 没有效果
});
setTimeout(console.log, 0, p); // Promise <resolved>
```

**为避免期约卡在待定状态，可以添加一个定时退出功能**。比如，可以通过 setTimeout 设置一个10 秒钟后无论如何都会拒绝期约的回调：

```js
let p = new Promise((resolve, reject) => {
	setTimeout(reject,10000);  //10 秒后调用 reject()
	// 执行函数的逻辑
});

setTimeout(console.log, 0, p); // // Promise <pending>
setTimeout(console.log, 11000, p); // 11 秒后再检查状态
// (After 10 seconds) Uncaught error
// (After 11 seconds) Promise <rejected>
```

**因为期约的状态只能改变一次，所以这里的超时拒绝逻辑中可以放心地设置让期约处于待定状态的最长时间。**如果执行器中的代码在超时之前已经解决或拒绝，那么超时回调再尝试拒绝也会静默失败。

#### Promise.resolve()

**期约并非一开始就必须处于待定状态，然后通过执行器函数才能转换为落定状态**。通过调用Promise.resolve()静态方法，可以实例化一个解决的期约。下面两个期约实例实际上是一样的：

```js
let p1 = new Promise((resolve, reject) => resolve());
let p2 = Promise.resolve();
```

这个解决的期约的值对应着传给 Promise.resolve()的第一个参数。使用这个静态方法，实际上可以把任何值都转换为一个期约：

```js
setTimeout(console.log, 0, Promise.resolve());
// Promise { undefined }

setTimeout(console.log, 0, Promise.resolve(3));
// Promise { 3 }

// 多余的参数会忽略
setTimeout(console.log, 0, Promise.resolve(4, 5, 6));
// Promise { 4 }
```

对这个静态方法而言，**如果传入的参数本身是一个期约，那它的行为就类似于一个空包装**。因此，**Promise.resolve()可以说是一个幂等方法**，如下所示：

```js
let p = Promise.resolve(7);

setTimeout(console.log, 0, p === Promise.resolve(p));
// true

setTimeout(console.log, 0, p === Promise.resolve(Promise.resolve(p)));
// true
```

这个**幂等性会保留传入期约的状态**：

```js
let p = new Promise(() => {});

setTimeout(console.log, 0, p); // Promise <pending>
setTimeout(console.log, 0, Promise.resolve(p)); // Promise <pending>

setTimeout(console.log, 0, p === Promise.resolve(p)); // true
```

注意，**这个静态方法能够包装任何非期约值，包括错误对象，并将其转换为解决的期约**。因此，也可能导致不符合预期的行为：

```js
let p = Promise.resolve(new Error('foo'));

setTimeout(console.log, 0, p);
// Promise <resolved>: Error: foo
```

####  Promise.reject()

与 Promise.resolve()类似，Promise.reject()会实例化一个拒绝的期约并抛出一个异步错误（这个错误不能通过 try/catch 捕获，而只能通过拒绝处理程序捕获）。下面的两个期约实例实际上是一样的：

```js
let p1 = new Promise((resolve, reject) => reject());
let p2 = Promise.reject();
```

这个拒绝的期约的理由就是传给 Promise.reject()的第一个参数。这个参数也会传给后续的拒绝处理程序：

```js
let p = Promise.reject(3);
setTimeout(console.log, 0, p); // Promise <rejected>: 3

p.then(null, (e) => setTimeout(console.log, 0, e)); // 3
```

关键在于，Promise.reject()**并没有**照搬 Promise.resolve()的幂等逻辑。**如果给它传一个期约对象，则这个期约会成为它返回的拒绝期约的理由**：

```js
setTimeout(console.log, 0, Promise.reject(Promise.resolve()));
// Promise <rejected>: Promise <resolved>
```

#### 同步/异步执行的二元性

Promise 的设计很大程度上会导致一种完全不同于 JavaScript 的计算模式。下面的例子完美地展示了这一点，其中包含了两种模式下抛出错误的情形：

```js
try {
	throw new Error('foo');
} catch(e) {
	console.log(e); // Error: foo
}

try {
	Promise.reject(new Error('bar'));
} catch(e) {
	console.log(e);
}
// Uncaught (in promise) Error: bar
```

第一个 try/catch 抛出并捕获了错误，第二个 try/catch 抛出错误却没有捕获到。乍一看这可能 有点违反直觉，因为代码中确实是同步创建了一个拒绝的期约实例，而这个实例也抛出了包含拒绝理由 的错误。**这里的同步代码之所以没有捕获期约抛出的错误，是因为它没有通过异步模式捕获错误**。从这 里就可以看出**期约真正的异步特性**：*它们是同步对象（在同步执行模式中使用），但也是异步执行模式 的媒介*。 

在前面的例子中，拒绝期约的错误并没有抛到执行同步代码的线程里，而是通过浏览器异步消息队 列来处理的。因此，try/catch 块并不能捕获该错误。**代码一旦开始以异步模式执行，则唯一与之交互 的方式就是使用异步结构**——更具体地说，**就是期约的方法**。

### 2.3 期约的实例方法

**期约实例的方法是连接外部同步代码与内部异步代码之间的桥梁**。这些方法可以访问异步操作返回的数据，处理期约成功和失败的结果，连续对期约求值，或者添加只有期约进入终止状态时才会执行的代码。

#### 实现 Thenable 接口

在 ECMAScript 暴露的**异步结构中，任何对象都有一个 then()方法**。这个方法被认为实现了Thenable 接口。下面的例子展示了实现这一接口的最简单的类：

```js
class MyThenable {
	then() {}
}
```

ECMAScript 的 Promise 类型实现了 Thenable 接口。这个简化的接口跟 TypeScript 或其他包中的接口或类型定义不同，它们都设定了 Thenable 接口更具体的形式。

#### Promise.prototype.then()

Promise.prototype.then()是为期约实例添加处理程序的主要方法。这个 then()方法接收最多两个参数：**onResolved 处理程序**和 **onRejected 处理程序**。这两个参数都是可选的，**如果提供的话，则会在期约分别进入“兑现”和“拒绝”状态时执行**。

```js
function onResolved(id){
	setTimeout(console.log,0,id,"resolved");
}

function onRejected(id){
	setTimeout(console.log,0,id,"rejected");
}

let p1=new Promise((resolve,reject)=>setTimeout(resolve,3000));
let p2=new Promise((resolve,reject)=>setTimeout(reject,3000));

p1.then(()=>onResolved("p1"),()=>onRejected("p1"));
p2.then(()=>onResolved("p2"),()=>onRejected("p2"));
//（3 秒后）
// p1 resolved
// p2 rejected
```

因为期约只能转换为最终状态一次，所以**这两个操作一定是互斥的**。

如前所述，两个处理程序参数都是可选的。而且，传给 then()的任何非函数类型的参数都会被静默忽略。**如果想只提供 onRejected 参数，那就要在 onResolved 参数的位置上传入 undefined。这样有助于避免在内存中创建多余的对象，**对期待函数参数的类型系统也是一个交代。

```js
function onResolved(id){
	setTimeout(console.log,0,id,"resolved");
}

function onRejected(id){
	setTimeout(console.log,0,id,"rejected");
}

let p1=new Promise((resolve,reject)=>setTimeout(resolve,3000));
let p2=new Promise((resolve,reject)=>setTimeout(reject,3000));

// 非函数处理程序会被静默忽略，不推荐
p1.then('gobbeltygook');

p1.then(()=>onResolved("p1"),null);

// 不传 onResolved 处理程序的规范写法
p2.then(null,()=>onRejected("p2"));

//（3 秒后）
//p1 resolved
// p2 rejected
```

Promise.prototype.then()方法**返回一个新的期约实例**：

```js
let p1 = new Promise(() => {});
let p2 = p1.then();
setTimeout(console.log, 0, p1); // Promise <pending>
setTimeout(console.log, 0, p2); // Promise <pending>
setTimeout(console.log, 0, p1 === p2); // false
```

这个**新期约实例基于 onResovled 处理程序的返回值构建**。换句话说，该处理程序的返回值会通过Promise.resolve()包装来生成新期约。**如果没有提供这个处理程序，则 Promise.resolve()就会包装上一个期约解决之后的值。**如果没有显式的返回语句，则 Promise.resolve()会包装默认的返回值 undefined。

```js
let p1 = Promise.resolve('foo');

// 若调用 then()时不传处理程序，则原样向后传
let p2 = p1.then();
setTimeout(console.log, 0, p2); // Promise <resolved>: foo

// 这些都一样
let p3 = p1.then(() => undefined);
let p4 = p1.then(() => {});
let p5 = p1.then(() => Promise.resolve());

setTimeout(console.log, 0, p3); // Promise <resolved>: undefined
setTimeout(console.log, 0, p4); // Promise <resolved>: undefined
setTimeout(console.log, 0, p5); // Promise <resolved>: undefined
```

**如果有显式的返回值，则 Promise.resolve()会包装这个值**：

```js
// 这些都一样
let p6 = p1.then(() => 'bar');
let p7 = p1.then(() => Promise.resolve('bar'));
setTimeout(console.log, 0, p6); // Promise <resolved>: bar
setTimeout(console.log, 0, p7); // Promise <resolved>: bar

// Promise.resolve()保留返回的期约
let p8 = p1.then(() => new Promise(() => {}));
let p9 = p1.then(() => Promise.reject());
// Uncaught (in promise): undefined

setTimeout(console.log, 0, p8); // Promise <pending>
setTimeout(console.log, 0, p9); // Promise <rejected>: undefined
```

**抛出异常会返回拒绝的期约**：

```js
let p10 = p1.then(() => { throw 'baz'; });
// Uncaught (in promise) baz
setTimeout(console.log, 0, p10); // Promise <rejected> baz
```

注意，返回错误值不会触发上面的拒绝行为，而会把错误对象包装在一个解决的期约中：

```js
let p11 = p1.then(() => Error('qux'));
setTimeout(console.log, 0, p11); // Promise <resolved>: Error: qux
```

onRejected 处理程序也与之类似：**onRejected 处理程序返回的值也会被 Promise.resolve()包装。**乍一看这可能有点违反直觉，但是想一想，onRejected 处理程序的任务不就是捕获异步错误吗？**因此，拒绝处理程序在捕获错误后不抛出异常是符合期约的行为，应该返回一个解决期约。**

下面的代码片段展示了用 Promise.reject()替代之前例子中的 Promise.resolve()之后的结果：

```js
let p1 = Promise.reject('foo');

// 调用 then()时不传处理程序则原样向后传
let p2 = p1.then();
// Uncaught (in promise) foo

setTimeout(console.log, 0, p2); // Promise <rejected>: foo

// 这些都一样
let p3 = p1.then(null, () => undefined);
let p4 = p1.then(null, () => {});
let p5 = p1.then(null, () => Promise.resolve());
setTimeout(console.log, 0, p3); // Promise <resolved>: undefined
setTimeout(console.log, 0, p4); // Promise <resolved>: undefined
setTimeout(console.log, 0, p5); // Promise <resolved>: undefined

// 这些都一样
let p6 = p1.then(null, () => 'bar');
let p7 = p1.then(null, () => Promise.resolve('bar'));
setTimeout(console.log, 0, p6); // Promise <resolved>: bar
setTimeout(console.log, 0, p7); // Promise <resolved>: bar

// Promise.resolve()保留返回的期约
let p8 = p1.then(null, () => new Promise(() => {}));
let p9 = p1.then(null, () => Promise.reject());
// Uncaught (in promise): undefined

setTimeout(console.log, 0, p8); // Promise <pending>
setTimeout(console.log, 0, p9); // Promise <rejected>: undefined

let p10 = p1.then(null, () => { throw 'baz'; });
// Uncaught (in promise) baz
setTimeout(console.log, 0, p10); // Promise <rejected>: baz

let p11 = p1.then(null, () => Error('qux'));
setTimeout(console.log, 0, p11); // Promise <resolved>: Error: qux
```

#### Promise.prototype.catch()

Promise.prototype.catch()方法**用于给期约添加拒绝处理程序。**这个方法只接收一个参数： onRejected 处理程序。事实上，**这个方法就是一个语法糖**，调用它就相当于调用 Promise.prototype. then(null, onRejected)。 

下面的代码展示了这两种同样的情况：

```js
let p=Promise.reject();
let onRejected=function(e){
	setTimeout(console.log,0,"rejected");
}

// 这两种添加拒绝处理程序的方式是一样的：
p.then(null,onRejected);  //rejected
p.catch(onRejected);  //rejected
```

**Promise.prototype.catch()返回一个新的期约实例**：

```js
let p1=new Promise(()=>{});
let p2=p1.catch();
setTimeout(console.log,0,p1);  //Promise { <pending> }
setTimeout(console.log,0,p2);  //Promise { <pending> }
setTimeout(console.log,0,p1===p2);  //false
```

在返回新期约实例方面，Promise.prototype.catch()的行为与 Promise.prototype.then()的 onRejected 处理程序是一样的。

#### Promise.prototype.finally()

Promise.prototype.finally()方法**用于给期约添加 onFinally 处理程序**，这个处理程序在期 约转换为解决或拒绝状态时都会执行。这个方法可以避免 onResolved 和 onRejected 处理程序中出 现冗余代码。**但 onFinally 处理程序没有办法知道期约的状态是解决还是拒绝，所以这个方法主要用 于添加清理代码。**

```js
let p1=Promise.resolve();
let p2=Promise.reject();
let onFinally=function(){
	setTimeout(console.log,0,"Finally!");
}

p1.finally(onFinally); // Finally
p2.finally(onFinally); // Finally
```

Promise.prototype.finally()方法返回一个新的期约实例：

```js
let p1 = new Promise(() => {});
let p2 = p1.finally();
setTimeout(console.log, 0, p1); // Promise <pending>
setTimeout(console.log, 0, p2); // Promise <pending>
setTimeout(console.log, 0, p1 === p2); // false
```

**这个新期约实例不同于 then()或 catch()方式返回的实例**。因为 onFinally 被设计为一个状态无关的方法，所以在大多数情况下它将表现为父期约的传递。对于已解决状态和被拒绝状态都是如此。

```js
let p1 = Promise.resolve("foo");

// 这里都会原样后传
let p2=p1.finally();
let p3=p1.finally(()=>undefined);
let p4=p1.finally(()=>{});
let p5=p1.finally(()=>Promise.resolve());
let p6=p1.finally(()=>"bar");
let p7=p1.finally(()=>Promise.resolve("bar"));
let p8=p1.finally(()=>Error("qux"));

setTimeout(console.log, 0, p2); // Promise <resolved>: foo
setTimeout(console.log, 0, p3); // Promise <resolved>: foo
setTimeout(console.log, 0, p4); // Promise <resolved>: foo
setTimeout(console.log, 0, p5); // Promise <resolved>: foo
setTimeout(console.log, 0, p6); // Promise <resolved>: foo
setTimeout(console.log, 0, p7); // Promise <resolved>: foo
setTimeout(console.log, 0, p8); // Promise <resolved>: foo

```

**如果返回的是一个待定的期约，或者 onFinally 处理程序抛出了错误**（显式抛出或返回了一个拒绝期约），**则会返回相应的期约（待定或拒绝）**，如下所示：

```js
// Promise.resolve()保留返回的期约
let p9=p1.finally(()=>new Promise(()=>{}));
let p10=p1.finally(()=>Promise.reject());
// Uncaught (in promise): undefined
setTimeout(console.log, 0, p9); // Promise <pending>
setTimeout(console.log, 0, p10); // Promise <rejected>: undefined

let p11=p1.finally(()=>{throw "baz";});
// Uncaught (in promise) baz

setTimeout(console.log,0,p11);  //Promise <rejected>: baz
```

**返回待定期约的情形并不常见**，这是因为只要期约一解决，新期约仍然会原样后传初始的期约：

```js
let p1 = Promise.resolve('foo');
// 忽略解决的值
let p2 = p1.finally(
	() => new Promise((resolve, reject) => setTimeout(() => resolve('bar'), 100)));

setTimeout(console.log, 0, p2); // Promise <pending>

setTimeout(() => setTimeout(console.log, 0, p2), 200);
// 200 毫秒后：
// Promise <resolved>: foo
```



#### 非重入期约方法

当期约进入落定状态时，与该状态相关的处理程序仅仅会被**排期**，而非立即执行。**跟在添加这个处 理程序的代码之后的同步代码一定会在处理程序之前先执行**。即使期约一开始就是与附加处理程序关联 的状态，执行顺序也是这样的。**这个特性由 JavaScript 运行时保证**，被称为“**非重入**”（non-reentrancy） 特性。下面的例子演示了这个特性：

```js
// 创建解决的期约
let p=Promise.resolve();

// 添加解决处理程序
// 直觉上，这个处理程序会等期约一解决就执行
p.then(()=>console.log("onResolved handler"));

//同步输出，证明 then()已经返回
console.log("then() return");

//实际的输出：
// then() returns
// onResolved handler
```

在这个例子中，在一个解决期约上调用 then()会把 onResolved 处理程序推进**消息队列**。**但这个 处理程序在当前线程上的同步代码执行完成前不会执行**。因此，跟在 then()后面的同步代码一定先于 处理程序执行。 

**先添加处理程序后解决期约也是一样的**。如果添加处理程序后，同步代码才改变期约状态，那么处 理程序仍然会基于该状态变化表现出非重入特性。下面的例子展示了即使先添加了 onResolved 处理程序，再同步调用 resolve()，处理程序也不会进入同步线程执行：

```js
let synchronousResolve;

// 创建解决的期约
let p=new Promise((resolve)=>{
	synchronousResolve=function(){
		console.log('1: invoking resolve()');
		resolve();
		console.log('2: resolve() returns');
	};
})

// 添加解决处理程序
// 直觉上，这个处理程序会等期约一解决就执行
p.then(() => console.log('4: then() handler executes'));

synchronousResolve();
console.log('3: synchronousResolve() returns');

// 实际的输出：
// 1: invoking resolve()
// 2: resolve() returns
// 3: synchronousResolve() returns
// 4: then() handler executes
```

在这个例子中，**即使期约状态变化发生在添加处理程序之后，处理程序也会等到运行的消息队列让它出列时才会执行。**

**非重入适用于 onResolved/onRejected 处理程序、catch()处理程序和 finally()处理程序**。下面的例子演示了这些处理程序都只能异步执行：

```js
let p1=Promise.resolve();
p1.then(()=>console.log("p1.then() onResolved"));

let p2=Promise.reject();
p2.then(null,()=>console.log("p2.then() onRejected"));

let p3=Promise.reject();
p3.catch(()=>console.log("p3.catch() onRejected"));
console.log("p3.catch() returns");

let p4=Promise.resolve();
p4.finally(()=>console.log("p4.finally() onFinally"));
console.log("p4.finally() returns");

/*
p3.catch() returns
p4.finally() returns
p1.then() onResolved
p2.then() onRejected
p3.catch() onRejected
p4.finally() onFinally
*/
```

#### 邻近处理程序的执行顺序

如果给期约添加了多个处理程序，当期约状态变化时，相关处理程序会按照添加它们的顺序依次执行。无论是 then()、catch()还是 finally()添加的处理程序都是如此。

```js
let p1 = Promise.resolve();
let p2 = Promise.reject();
p1.then(() => setTimeout(console.log, 0, 1));
p1.then(() => setTimeout(console.log, 0, 2));
// 1
// 2
p2.then(null, () => setTimeout(console.log, 0, 3));
p2.then(null, () => setTimeout(console.log, 0, 4));
// 3
// 4
p2.catch(() => setTimeout(console.log, 0, 5));
p2.catch(() => setTimeout(console.log, 0, 6));
// 5
// 6
p1.finally(() => setTimeout(console.log, 0, 7));
p1.finally(() => setTimeout(console.log, 0, 8));
// 7
// 8
```

#### 传递解决值和拒绝理由

**到了落定状态后，期约会提供其解决值（如果兑现）或其拒绝理由（如果拒绝）给相关状态的处理 程序**。拿到返回值后，就可以进一步对这个值进行操作。比如，第一次网络请求返回的 JSON 是发送第 二次请求必需的数据，那么第一次请求返回的值就应该传给 onResolved 处理程序继续处理。当然，失 败的网络请求也应该把 HTTP 状态码传给 onRejected 处理程序。 

在执行函数中，解决的值和拒绝的理由是分别作为 resolve()和 reject()的第一个参数往后传 的。然后，这些值又会传给它们各自的处理程序，作为 onResolved 或 onRejected 处理程序的唯一 参数。下面的例子展示了上述传递过程：

```js
let p1 = new Promise((resolve, reject) => resolve('foo'));
p1.then((value) => console.log(value)); // foo
let p2 = new Promise((resolve, reject) => reject('bar'));
p2.catch((reason) => console.log(reason)); // bar
```

**Promise.resolve()和 Promise.reject()在被调用时就会接收解决值和拒绝理由**。同样地，它们返回的期约也会像执行器一样把这些值传给 onResolved 或 onRejected 处理程序：

```js
let p1 = Promise.resolve('foo');
p1.then((value) => console.log(value)); // foo
let p2 = Promise.reject('bar');
p2.catch((reason) => console.log(reason)); // bar
```

#### 拒绝期约与拒绝错误处理

拒绝期约类似于 throw()表达式，**因为它们都代表一种程序状态，即需要中断或者特殊处理**。在期 约的执行函数或处理程序中抛出错误会导致拒绝，对应的错误对象会成为拒绝的理由。因此以下这些期 约都会以一个错误对象为由被拒绝：

```js
let p1 = new Promise((resolve, reject) => reject(Error('foo')));
let p2 = new Promise((resolve, reject) => { throw Error('foo'); });
let p3 = Promise.resolve().then(() => { throw Error('foo'); });
let p4 = Promise.reject(Error('foo'));

setTimeout(console.log, 0, p1); // Promise <rejected>: Error: foo
setTimeout(console.log, 0, p2); // Promise <rejected>: Error: foo
setTimeout(console.log, 0, p3); // Promise <rejected>: Error: foo
setTimeout(console.log, 0, p4); // Promise <rejected>: Error: foo
//// 也会抛出 4 个未捕获错误
```

期约可以以任何理由拒绝，包括 undefined，**但最好统一使用错误对象。这样做主要是因为创建错误对象可以让浏览器捕获错误对象中的栈追踪信息**，而这些信息对调试是非常关键的。例如，前面例子中抛出的 4 个错误的栈追踪信息如下：

```
Uncaught (in promise) Error: foo
at Promise (test.html:5)
at new Promise (<anonymous>)
at test.html:5
Uncaught (in promise) Error: foo
at Promise (test.html:6)
at new Promise (<anonymous>)
at test.html:6
Uncaught (in promise) Error: foo
at test.html:8
Uncaught (in promise) Error: foo
at Promise.resolve.then (test.html:7)
```

**所有错误都是异步抛出且未处理的**，通过错误对象捕获的栈追踪信息展示了错误发生的路径。注意 错误的顺序：Promise.resolve().then()的错误最后才出现，**这是因为它需要在运行时消息队列中 添加处理程序**；也就是说，*在最终抛出未捕获错误之前它还会创建另一个期约*。 

这个例子同样揭示了异步错误有意思的副作用。**正常情况下，在通过 throw()关键字抛出错误时， JavaScript 运行时的错误处理机制会停止执行抛出错误之后的任何指令**：

```js
throw Error('foo');
console.log('bar'); // 这一行不会执行
// Uncaught Error: foo
```

但是，在期约中抛出错误时，**因为错误实际上是从消息队列中异步抛出的，所以并不会阻止运行时继续执行同步指令**：

```js
Promise.reject(Error('foo'));
console.log('bar');
// bar
// Uncaught (in promise) Error: foo
```

如本章前面的 Promise.reject()示例所示，**异步错误只能通过异步的 onRejected 处理程序捕获**：

```js
// 正确
Promise.reject(Error('foo')).catch((e) => {});

// 不正确
try {
	Promise.reject(Error('foo'));
} catch(e) {}
```

这**不包括捕获执行函数中的错误**，在解决或拒绝期约之前，仍然可以使用 try/catch 在执行函数中捕获错误：

```js
let p = new Promise((resolve, reject) => {
	try {
		throw Error('foo');
	} catch(e) {}

	resolve('bar');
});

setTimeout(console.log, 0, p); // Promise <resolved>: bar
```

**then()和 catch()的 onRejected 处理程序在语义上相当于 try/catch**。出发点都是**捕获错误之后将其隔离**，同时不影响正常逻辑执行。为此，**onRejected 处理程序的任务应该是在捕获异步错误之后返回一个解决的期约**。下面的例子中对比了同步错误处理与异步错误处理：

```js
console.log('begin synchronous execution');
try {
	throw Error('foo');
} catch(e) {
	console.log('caught error', e);
}
console.log('continue synchronous execution');
// begin synchronous execution
// caught error Error: foo
// continue synchronous execution

new Promise((resolve, reject) => {
	console.log('begin asynchronous execution');
	reject(Error('bar'));
}).catch((e) => {
	console.log('caught error', e);
}).then(() => {
	console.log('continue asynchronous execution');
});
// begin asynchronous execution
// caught error Error: bar
// continue asynchronous execution
```



### 2.4 期约连锁与期约合成

**多个期约组合在一起可以构成强大的代码逻辑**。这种组合可以通过两种方式实现：期约连锁与期约合成。前者就是一个期约接一个期约地拼接，后者则是将多个期约组合为一个期约。

#### 期约连锁

把期约逐个地串联起来是一种非常有用的编程模式。之所以可以这样做，是**因为每个期约实例的方法（then()、catch()和 finally()）都会返回一个新的期约对象，而这个新期约又有自己的实例方法**。这样连缀方法调用就可以构成所谓的“期约连锁”。比如：

```js
let p=new Promise((resolve,reject)=>{
	console.log("first");
	resolve();
});
p.then(()=>console.log("second"))
	.then(()=>console.log("third"))
	.then(()=>console.log("fourth"));
// first
// second
// third
// fourth
```

这个实现最终执行了一连串同步任务。**正因为如此，这种方式执行的任务没有那么有用**，毕竟分别使用 4 个同步函数也可以做到：

```js
(() => console.log('first'))();
(() => console.log('second'))();
(() => console.log('third'))();
(() => console.log('fourth'))();
```

要真正执行异步任务，可以改写前面的例子，**让每个执行器都返回一个期约实例。这样就可以让每个后续期约都等待之前的期约，也就是串行化异步任务**。比如，可以像下面这样让每个期约在一定时间后解决：

```js
let p=new Promise((resolve,reject)=>{
	console.log("p1 executor");
	setTimeout(resolve,1000);
});
p.then(()=>new Promise((resolve,reject)=>{
		console.log("p2 executor");
		setTimeout(resolve,1000);
	}))
	.then(()=>new Promise((resolve,reject)=>{
		console.log("p3 executor");
		setTimeout(resolve,1000);
	}))
	.then(()=>new Promise((resolve,reject)=>{
		console.log("p4 executor");
		setTimeout(resolve,1000);
	}));
// p1 executor（1 秒后）
// p2 executor（2 秒后）
// p3 executor（3 秒后）
// p4 executor（4 秒后）
```

把生成期约的代码**提取到一个工厂函数**中，就可以写成这样：

```js
function delayedResolve(str){
	return new Promise((resolve,reject)=>{
		console.log(str);
		setTimeout(resolve,1000);
	});
}

delayedResolve("p1 executor")
	.then(()=>delayedResolve("p2 executor"))
	.then(()=>delayedResolve("p3 executor"))
	.then(()=>delayedResolve("p4 executor"));
// p1 executor（1 秒后）
// p2 executor（2 秒后）
// p3 executor（3 秒后）
// p4 executor（4 秒后）
```

**每个后续的处理程序都会等待前一个期约解决，然后实例化一个新期约并返回它**。***这种结构可以简洁地将异步任务串行化，解决之前依赖回调的难题***。假如这种情况下不使用期约，那么前面的代码可能就要这样写了：

```js
unction delayedExecute(str, callback = null) {
	setTimeout(() => {
		console.log(str);
		callback && callback();
	}, 1000)
}
delayedExecute('p1 callback', () => {
	delayedExecute('p2 callback', () => {
		delayedExecute('p3 callback', () => {
			delayedExecute('p4 callback');
		});
	});
});
// p1 callback（1 秒后）
// p2 callback（2 秒后）
// p3 callback（3 秒后）
// p4 callback（4 秒后）
```

心明眼亮的开发者会发现，这不正是期约所要解决的回调地狱问题吗？

因为 then()、catch()和 finally()都返回期约，所以串联这些方法也很直观。下面的例子同时使用这 3 个实例方法：

```js
let p = new Promise((resolve, reject) => {
	console.log('initial promise rejects');
	reject();
});
p.catch(() => console.log('reject handler'))
	.then(() => console.log('resolve handler'))
	.finally(() => console.log('finally handler'));
// initial promise rejects
// reject handler
// resolve handler
// finally handler
```

#### 期约图

因为一个期约可以有任意多个处理程序，所以期约连锁可以构建**有向非循环图**的结构。这样，每个期约都是图中的一个节点，而使用实例方法添加的处理程序则是有向顶点。因为图中的每个节点都会等待前一个节点落定，所以图的方向就是期约的解决或拒绝顺序。

下面的例子展示了一种期约有向图，也就是二叉树：

```
// A
// / \
// B C
// /\ /\
// D E F G
```

```js
let A = new Promise((resolve, reject) => {
	console.log('A');
	resolve();
});

let B=A.then(()=>console.log("B"));
let C=A.then(()=>console.log("C"));

B.then(()=>console.log("D"));
B.then(()=>console.log("E"));
C.then(()=>console.log("F"));
C.then(()=>console.log("G"));

//A B C D E F G
```

注意，日志的输出语句是对二叉树的层序遍历。如前所述，期约的处理程序是按照它们添加的顺序 执行的。由于期约的处理程序是先添加到消息队列，然后才逐个执行，因此构成了层序遍历。 **树只是期约图的一种形式**。考虑到根节点不一定唯一，且多个期约也可以组合成一个期约（通过下 一节介绍的 Promise.all()和 Promise.race()），**所以有向非循环图是体现期约连锁可能性的最准 确表达**。

#### Promise.all()

Promise 类提供两个将多个期约实例组合成一个期约的静态方法：Promise.all()和 Promise.race()。而合成后期约的行为取决于内部期约的行为。

**Promise.all()静态方法创建的期约会在一组期约全部解决之后再解决。**这个静态方法接收一个可迭代对象，返回一个新期约：

```js
let p1=Promise.all([
	Promise.resolve(),
	Promise.resolve()
]);

// 可迭代对象中的元素会通过 Promise.resolve()转换为期约
let p2=Promise.all([3,4]);

// 空的可迭代对象等价于 Promise.resolve()
let p3=Promise.all([]);

// 无效的语法
let p4=Promise.all();
//TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
```

**合成的期约只会在每个包含的期约都解决之后才解决**：

```js
let p=Promise.all([
	Promise.resolve(),
	new Promise((resolve,reject)=>setTimeout(resolve,1000))
]);

setTimeout(console.log,0,p);  //Promise <pending>

p.then(()=>setTimeout(console.log,0,"all() resolved"))
// all() resolved!（大约 1 秒后）
```

**如果至少有一个包含的期约待定，则合成的期约也会待定**。如果有一个包含的期约拒绝，则合成的期约也会拒绝：

```js
// 永远待定
let p1 = Promise.all([new Promise(() => {})]);
setTimeout(console.log, 0, p1); // Promise <pending>

// 一次拒绝会导致最终期约拒绝
let p2 = Promise.all([
	Promise.resolve(),
	Promise.reject(),
	Promise.resolve()
]);
setTimeout(console.log, 0, p2); // Promise <rejected>
// Uncaught (in promise) undefined
```

如果所有期约都成功解决，**则合成期约的解决值就是所有包含期约解决值的数组**，按照迭代器顺序：

```js
let p = Promise.all([
	Promise.resolve(3),
	Promise.resolve(),
	Promise.resolve(4)
]);

p.then((values) => setTimeout(console.log, 0, values));
// [3, undefined, 4]
```

**如果有期约拒绝**，**则第一个拒绝的期约会将自己的理由作为合成期约的拒绝理由**。之后再拒绝的期约不会影响最终期约的拒绝理由。不过，这并不影响所有包含期约正常的拒绝操作。**合成的期约会静默处理所有包含期约的拒绝操作**，如下所示：

```js
// 虽然只有第一个期约的拒绝理由会进入
// 拒绝处理程序，第二个期约的拒绝也
// 会被静默处理，不会有错误跑掉
let p = Promise.all([
	Promise.reject(3),
	new Promise((resolve, reject) => setTimeout(reject, 1000))
]);

p.catch((reason) => setTimeout(console.log, 0, reason)); // 3
// 没有未处理的错误
```



#### Promise.race()

Promise.race()静态方法**返回一个包装期约**，是一组集合中**最先解决**或**拒绝**的期约的**镜像**。这个方法接收一个可迭代对象，返回一个新期约：

```js
let p1=Promise.race([
	Promise.resolve(),
	Promise.resolve()
]);

// 可迭代对象中的元素会通过 Promise.resolve()转换为期约
let p2=Promise.race([3,4]);

// 空的可迭代对象等价于 new Promise(() => {})
let p3=Promise.race([]);

// 无效的语法
let p4 = Promise.race();
// TypeError: cannot read Symbol.iterator of undefined
```

Promise.race()不**会对解决或拒绝的期约区别对待**。无论是解决还是拒绝，只要是第一个落定的期约，Promise.race()就会包装其解决值或拒绝理由并返回新期约：

```js
// 解决先发生，超时后的拒绝被忽略
let p1=Promise.race([
	Promise.resolve(3),
	new Promise((resolve,reject)=>setTimeout(reject,1000))
]);
setTimeout(console.log,0,p1);  //Promise { 3 }

// 拒绝先发生，超时后的解决被忽略
let p2 = Promise.race([
	Promise.reject(4),
	new Promise((resolve, reject) => setTimeout(resolve, 1000))
]);
setTimeout(console.log, 0, p2); // Promise <rejected>: 4

// 迭代顺序决定了落定顺序
let p3 = Promise.race([
	Promise.resolve(5),
	Promise.resolve(6),
	Promise.resolve(7)
]);
setTimeout(console.log, 0, p3); // Promise <resolved>: 5
```

**如果有一个期约拒绝，只要它是第一个落定的，就会成为拒绝合成期约的理由**。之后再拒绝的期约不会影响最终期约的拒绝理由。不过，这并不影响所有包含期约正常的拒绝操作。与 Promise.all()类似，**合成的期约会静默处理所有包含期约的拒绝操作**，如下所示：

```js
// 虽然只有第一个期约的拒绝理由会进入
// 拒绝处理程序，第二个期约的拒绝也
// 会被静默处理，不会有错误跑掉
let p = Promise.race([
	Promise.reject(3),
	new Promise((resolve, reject) => setTimeout(reject, 1000))
]);
p.catch((reason) => setTimeout(console.log, 0, reason)); // 3
// 没有未处理的错误
```

#### 串行期约合成

到目前为止，我们讨论期约连锁一直围绕期约的串行执行，忽略了期约的另一个主要特性：异步产生值并将其传给处理程序。**基于后续期约使用之前期约的返回值来串联期约**是期约的基本功能。这很像函数合成，即将多个函数合成为一个函数，比如：

```js
function addTwo(x) {return x + 2;}
function addThree(x) {return x + 3;}
function addFive(x) {return x + 5;}
function addTen(x) {
	return addFive(addTwo(addThree(x)));
}
console.log(addTen(7)); // 17
```

在这个例子中，有 3 个函数基于一个值合成为一个函数。类似地，期约也可以像这样合成起来，渐进地消费一个值，并返回一个结果：

```js
function addTwo(x) {return x + 2;}
function addThree(x) {return x + 3;}
function addFive(x) {return x + 5;}

function addTen(x){
	return Promise.resolve(x)
		.then(addTwo)
		.then(addThree)
		.then(addFive);
}

addTen(8).then(console.log); // 18
```

**使用 Array.prototype.reduce()可以写成更简洁的形式**：

```js
function addTwo(x) {return x + 2;}
function addThree(x) {return x + 3;}
function addFive(x) {return x + 5;}

function addTen(x){
	return [addTwo,addThree,addFive]
		.reduce((promise,fn)=>promise.then(fn),Promise.resolve(x));
}

addTen(8).then(console.log); // 18
```

这种模式可以提炼出一个通用函数，**可以把任意多个函数作为处理程序合成一个连续传值的期约连锁**。这个通用的合成函数可以这样实现：

```js
function addTwo(x) {return x + 2;}
function addThree(x) {return x + 3;}
function addFive(x) {return x + 5;}

function compose(...fns){
	return (x)=>fns.reduce((promise,fn)=>promise.then(fn),Promise.resolve(x));
}

let addTen = compose(addTwo, addThree, addFive);
addTen(8).then(console.log); // 18
```

### 2.5 期约扩展

ES6 期约实现是很可靠的，但它也有不足之处。比如，很多第三方期约库实现中具备而 ECMAScript规范却未涉及的两个特性：期约取消和进度追踪。

#### 期约取消

我们经常会遇到期约正在处理过程中，程序却不再需要其结果的情形。这时候如果能够取消期约就 好了。某些第三方库，比如 Bluebird，就提供了这个特性。实际上，TC39 委员会也曾准备增加这个特性， 但相关提案最终被撤回了。结果，ES6 期约被认为是“激进的”：只要期约的逻辑开始执行，就没有办 法阻止它执行到完成。 

实际上，可以在现有实现基础上提供一种**临时性的封装，以实现取消期约的功能**。这可以用到 Kevin Smith 提到的“**取消令牌**”（cancel token）。**生成的令牌实例提供了一个接口，利用这个接口可以取消期 约；同时也提供了一个期约的实例，可以用来触发取消后的操作并求值取消状态**。

下面是 CancelToken 类的一个基本实例：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>test js</title>
</head>
<body>
	<button id="start">Start</button>
	<button id="cancel">Cancel</button>
<script type="text/javascript">
	class CancelToken{
		constructor(cancelFn){
			this.promise=new Promise((resolve,reject)=>{
				cancelFn(()=>{
					setTimeout(console.log,0,"delay cancelled");
					resolve();
				});
			});
		}
	}

	const startButton = document.querySelector('#start');
	const cancelButton = document.querySelector('#cancel');

	function cancellableDelayedResolve(delay) {
		setTimeout(console.log,0,"set delay");
		return new Promise((resolve,reject)=>{
			const id=setTimeout((()=>{
				setTimeout(console.log,0,"delay resolve");
				resolve();
			}),delay);
			const cancelToken=new CancelToken((cancelCallback)=>
				cancelButton.addEventListener("click",cancelCallback));
			cancelToken.promise.then(()=>clearTimeout(id));
		});
	}
	startButton.addEventListener("click",()=>cancellableDelayedResolve(1000));

</script>

</body>
</html>
```

每次单击“Start”按钮都会开始计时，并实例化一个新的 CancelToken 的实例。此时，“Cancel”按钮一旦被点击，就会触发令牌实例中的期约解决。而解决之后，单击“Start”按钮设置的超时也会被取消。

####  期约进度通知

执行中的期约可能会有不少离散的“阶段”，在最终解决之前必须依次经过。某些情况下，监控期约的执行进度会很有用。ECMAScript 6 期约并不支持进度追踪，但是可以通过扩展来实现。

一种实现方式是**扩展 Promise 类，为它添加 notify()方法**，如下所示：

```js
class TrackablePromise extends Promise{
	constructor(executor){
		const notifyHandlers=[];
		super((resolve,reject)=>{
			return executor(resolve,reject,(status)=>{
				notifyHandlers.map((handler)=>handler(status));
			});
		});
		this.notifyHandlers=notifyHandlers;
	}
	notify(notifyHandler){
		this.notifyHandlers.push(notifyHandler);
		return this;
	}
}
```

这样，TrackablePromise 就可以在执行函数中使用 notify()函数了。可以像下面这样使用这个函数来实例化一个期约：

```js
let p=new TrackablePromise((resolve,reject,notify)=>{
	function countdown(x){
		if (x>0) {
			notify(`${20*x}% remaining`);
			setTimeout(()=>countdown(x-1),1000);
		}else{
			resolve();
		}
	}
	countdown(5);
});
```

这个期约会连续 5次递归地设置 1000毫秒的超时。每个超时回调都会调用 notify()并传入状态值。假设通知处理程序简单地这样写：

```js
p.notify((x)=>setTimeout(console.log,0,"progress:",x));
p.then(()=>setTimeout(console.log,0,"completed"));
// （约 1 秒后）80% remaining
// （约 2 秒后）60% remaining
// （约 3 秒后）40% remaining
// （约 4 秒后）20% remaining
// （约 5 秒后）completed
```

**notify()函数会返回期约，所以可以连缀调用，连续添加处理程序**。多个处理程序会针对收到的每条消息分别执行一遍，如下所示：

```js
p.notify((x)=>setTimeout(console.log,0,"a:",x))
	.notify((x)=>setTimeout(console.log,0,"b:",x));
p.then(()=>setTimeout(console.log,0,"completed"));

// （约 1 秒后） a: 80% remaining
// （约 1 秒后） b: 80% remaining
// （约 2 秒后） a: 60% remaining
// （约 2 秒后） b: 60% remaining
// （约 3 秒后） a: 40% remaining
// （约 3 秒后） b: 40% remaining
// （约 4 秒后） a: 20% remaining
// （约 4 秒后） b: 20% remaining
// （约 5 秒后） completed
```

总体来看，这还是一个比较粗糙的实现，但应该可以演示出如何使用通知报告进度了。

**注意 ES6 不支持取消期约和进度通知**，一个主要原因就*是这样会导致期约连锁和期约合成 过度复杂化*。比如在一个期约连锁中，如果某个被其他期约依赖的期约被取消了或者发出了 通知，那么接下来应该发生什么完全说不清楚。毕竟，如果取消了 Promise.all()中的一个 期约，或者期约连锁中前面的期约发送了一个通知，那么接下来应该怎么办才比较合理呢？



## 3 异步函数

**异步函数**，也称为“**async/await”（语法关键字）**，是 ES6 期约模式在 ECMAScript 函数中的应用。 async/await 是 ES8 规范新增的。这个特性从行为和语法上都增强了 JavaScript，让以同步方式写的代码能够异步执行。下面来看一个最简单的例子，这个期约在超时之后会解决为一个值：

```js
let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
```

这个期约在 1000 毫秒之后解决为数值 3。如果程序中的其他代码要在这个值可用时访问它，则需要写一个解决处理程序：

```js
let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
p.then((x) => console.log(x)); // 3
```

这其实是**很不方便的，因为其他代码都必须塞到期约处理程序中**。不过可以把处理程序定义为一个函数：

```js
function handler(x) { console.log(x); }
let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
p.then(handler); // 3
```

这个改进其实也不大。这是因为任何需要访问这个期约所产生值的代码，都需要以处理程序的形式来接收这个值。也就是说，代码照样还是要放到处理程序里。ES8 为此提供了 async/await 关键字。

### 3.1 异步函数

ES8 的 **async/await 旨在解决利用异步结构组织代码的问题**。为此，ECMAScript 对函数进行了扩展，为其增加了两个新关键字：async 和 await。

#### async

async 关键字用于声明异步函数。这个关键字可以用在函数声明、函数表达式、箭头函数和方法上：

```js
//函数声明
async function foo(){}
//函数表达式
let bar=async function(){};
//箭头函数
let baz=async ()=>{};

class Qux{
    //方法
	async qux(){}
}
```

**使用 async 关键字可以让函数具有异步特征**，但**总体上其代码仍然是同步求值的**。而在参数或闭包方面，异步函数仍然具有普通 JavaScript 函数的正常行为。正如下面的例子所示，foo()函数仍然会在后面的指令之前被求值：

```js
async function foo(){
	console.log(1);
}

foo();

console.log(2);
// 1
// 2
```

不过，异步函数如果使用 return 关键字返回了值（如果没有 return 则会返回 undefined），**这个值会被 Promise.resolve()包装成一个期约对象**。***异步函数始终返回期约对象***。在函数外部调用这个函数可以得到它返回的期约：

```js
async function foo(){
	console.log(1);
	return 3;
}

// 给返回的期约添加一个解决处理程序

foo().then(console.log);
console.log(2);
// 1
// 2
// 3
```

当然，直接返回一个期约对象也是一样的：

```js
async function foo(){
	console.log(1);
	return Promise.resolve(3);
}

// 给返回的期约添加一个解决处理程序
foo().then(console.log);

console.log(2);
// 1
// 2
// 3
```

异步函数的返回值期待（但实际上并不要求）一个实现 thenable 接口的对象，但常规的值也可以。**如果返回的是实现 thenable 接口的对象，则这个对象可以由提供给 then()的处理程序“解包”**。如果不是，则返回值就被当作已经解决的期约。下面的代码演示了这些情况：

```js
// 返回一个原始值
async function foo(){
	return "foo";
}
// 给返回的期约添加一个解决处理程序
foo().then(console.log);
//foo

// 返回一个没有实现 thenable 接口的对象
async function bar(){
	return ["bar"];
}
bar().then(console.log);
//[ 'bar' ]

// 返回一个实现了 thenable 接口的非期约对象
async function baz(){
	const thenable={
		then(callback){
			callback("baz");
		}
	};
	return thenable;
}
baz().then(console.log);
//baz

// 返回一个期约
async function qux(){
	return Promise.resolve("qux");
}
qux().then(console.log);
//qux
```

与在期约处理程序中一样，**在异步函数中抛出错误会返回拒绝的期约**：

```js
// 返回一个原始值
async function foo(){
	console.log(1);
	throw 3;
}
// 给返回的期约添加一个拒绝处理程序
foo().catch(console.log);
console.log(2);
// 1
// 2
// 3

```

不过，拒绝期约的**错误**不会被异步函数捕获：

```js
// 返回一个原始值
async function foo(){
	console.log(1);
	Promise.reject(3);
}
// 给返回的期约添加一个拒绝处理程序
foo().catch(console.log);
console.log(2);
// 1
//2
//(node:14616) UnhandledPromiseRejectionWarning: 3

```

#### await

因为异步函数主要针对不会马上完成的任务，所以自然需要一种暂停和恢复执行的能力。**使用 await关键字可以暂停异步函数代码的执行，等待期约解决**。来看下面这个本章开始就出现过的例子：

```js
let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
p.then((x) => console.log(x)); // 3
```

使用 async/await 可以写成这样：

```js
async function foo() {
	let p=new Promise((resolve,reject)=>setTimeout(resolve,1000,3));
	console.log(await p);
}
foo();
//3
```

注意，**await 关键字会暂停执行异步函数后面的代码，让出 JavaScript 运行时的执行线程**。这个行 为与生成器函数中的 yield 关键字是一样的。**await 关键字同样是尝试“解包”对象的值，然后将这 个值传给表达式，再异步恢复异步函数的执行**。 

**await 关键字的用法与 JavaScript 的一元操作一样。它可以单独使用，也可以在表达式中使用**，如下面的例子所示：

```js
// 异步打印"foo"
async function foo() {
	console.log(await Promise.resolve("foo"));
}
foo();
//foo

// 异步打印"bar"
async function bar() {
	return await Promise.resolve("bar");
}
bar().then(console.log);
// bar

// 1000 毫秒后异步打印"baz"
async function baz(){
	await new Promise((resolve,reject)=>setTimeout(resolve,1000));
	console.log("baz");
}
baz();
// baz（1000 毫秒后）
```

**await 关键字期待**（但实际上并不要求）**一个实现 thenable 接口的对象**，但常规的值也可以。如 果是实现 thenable 接口的对象，则这个对象可以由 await 来“解包”。如果不是，则这个值就被当作 已经解决的期约。下面的代码演示了这些情况：

```js
// 等待一个原始值
async function foo() {
	console.log(await "foo");
}
foo();
//foo

// 等待一个没有实现 thenable 接口的对象
async function bar() {
	console.log(await ["bar"]);
}
bar();
// ['bar']

// 等待一个实现了 thenable 接口的非期约对象
async function baz(){
	const thenable = {
		then(callback) { callback('baz'); }
	};
	console.log(await thenable);
}
baz();
// baz

// 等待一个期约
async function qux(){
	console.log(await Promise.resolve("qux"));
}
qux();
//qux
```

等待会抛出错误的同步操作，会返回拒绝的期约：

```js
async function foo() {
	console.log(1);
	await (()=>{throw 3;})();
}

// 给返回的期约添加一个拒绝处理程序
foo().catch(console.log);
console.log(2);

// 1
// 2
// 3

```

如前面的例子所示，**单独的 Promise.reject()不会被异步函数捕获，而会抛出未捕获错误**。不过，**对拒绝的期约使用 await 则会释放（unwrap）错误值**（将拒绝期约返回）：

```js
async function foo() {
	console.log(1);
	await Promise.reject(3);
	console.log(4);  //这行代码不会执行
}

// 给返回的期约添加一个拒绝处理程序
foo().catch(console.log);
console.log(2);

// 1
// 2
// 3
```

####  await 的限制

**await 关键字必须在异步函数中使用**，不能在顶级上下文如<script>标签或模块中使用。不过，定义并立即调用异步函数是没问题的。下面两段代码实际是相同的：

```js
async function foo() {
	console.log(await Promise.resolve(3));
}
foo();
// 3

// 立即调用的异步函数表达式
(async function() {
	console.log(await Promise.resolve(3));
})();
// 3
```

此外，**异步函数的特质不会扩展到嵌套函数**。因此，**await 关键字也只能直接出现在异步函数的定义中**。**在同步函数内部使用 await 会抛出 SyntaxError。**

下面展示了一些会出错的例子：

```js
// 不允许：await 出现在了箭头函数中
function foo() {
	const syncFn = () => {
	return await Promise.resolve('foo');
	};
	console.log(syncFn());
}

// 不允许：await 出现在了同步函数声明中
function bar() {
	function syncFn() {
		return await Promise.resolve('bar');
	}
	console.log(syncFn());
}

// 不允许：await 出现在了同步函数表达式中
function baz() {
	const syncFn = function() {
		return await Promise.resolve('baz');
	};
	console.log(syncFn());
}

// 不允许：IIFE 使用同步函数表达式或箭头函数
function qux() {
	(function () { console.log(await Promise.resolve('qux')); })();
	(() => console.log(await Promise.resolve('qux')))();
}
```



### 3.2停止和恢复执行

使用 await 关键字之后的区别其实比看上去的还要微妙一些。比如，下面的例子中按顺序调用了 3个函数，但它们的输出结果顺序是相反的：

```js
async function foo() {
	console.log(await Promise.resolve('foo'));
}
async function bar() {
	console.log(await 'bar');
}
async function baz() {
	console.log('baz');
}

foo();
bar();
baz();
// baz
// foo
// bar
```

async/await 中**真正起作用的是 await**。async 关键字，无论从哪方面来看，都不过是一个标识符。毕竟，**异步函数如果不包含 await 关键字，其执行基本上跟普通函数没有什么区别：**

```js
async function foo() {
	console.log(2);
}

console.log(1);
foo();
console.log(3);

// 1
// 2
// 3
```

要完全理解 await 关键字，必须知道它并非只是等待一个值可用那么简单。**JavaScript 运行时在碰 到 await 关键字时，会记录在哪里暂停执行。等到 await 右边的值可用了**，**JavaScript 运行时会向消息 队列中推送一个任务，这个任务会恢复异步函数的执行**。 

因此，**即使 await 后面跟着一个立即可用的值，函数的其余部分也会被异步求值**。下面的例子演 示了这一点：

```js
async function foo() {
	console.log(2);
	await null;
	console.log(4);
}

console.log(1);
foo();
console.log(3);
// 1
// 2
// 3
// 4
```

控制台中输出结果的顺序很好地解释了运行时的工作过程：
(1) 打印 1；
(2) 调用异步函数 foo()；
(3)（在 foo()中）打印 2；
(4)（在 foo()中）await 关键字暂停执行，**为立即可用的值 null 向消息队列中添加一个任务**；
(5) foo()退出；
(6) 打印 3；
(7) 同步线程的代码执行完毕；
(8) JavaScript 运行时从消息队列中取出任务，**恢复异步函数执行**；
(9)（在 foo()中）恢复执行，await 取得 null 值（这里并没有使用）；
(10)（在 foo()中）打印 4；
(11) foo()返回。

**如果 await 后面是一个期约，则问题会稍微复杂一些**。此时，为了执行异步函数，**实际上会有两个任务被添加到消息队列并被异步求值**。下面的例子虽然看起来很反直觉，但它演示了真正的执行顺序：

```js
async function foo() {
	console.log(2);
	console.log(await Promise.resolve(8));
	console.log(9);
}
async function bar() {
	console.log(4);
	console.log(await 6);
	console.log(7);
}

console.log(1);
foo();
console.log(3);
bar();
console.log(5);
//1 2 3 4 5 8 9 6 7  在新版浏览器中

//1 2 3 4 5 6 7 8 9

```

TC39 对 await 后面是期约的情况如何处理做过一次修改。修改后，本例中的 Promise.resolve(8)只会生成一个 异步任务。**因此在新版浏览器中，这个示例的输出结果为 123458967**。实际开发中，对于并行的异步操作我们通常 更关注结果，而不依赖执行顺序。

运行时会像这样执行上面的例子：
(1) 打印 1；
(2) 调用异步函数 foo()；
(3)（在 foo()中）打印 2；
(4)（在 foo()中）await 关键字暂停执行，向消息队列中添加一个期约在落定之后执行的任务；
(5) 期约立即落定，把给 await 提供值的任务添加到消息队列；
(6) foo()退出；
(7) 打印 3；
(8) 调用异步函数 bar()；
(9)（在 bar()中）打印 4；
(10)（在 bar()中）await 关键字暂停执行，为立即可用的值 6 向消息队列中添加一个任务；
(11) bar()退出；
(12) 打印 5；
(13) 顶级线程执行完毕；
(14) JavaScript 运行时从消息队列中取出解决 await 期约的处理程序，并将解决的值 8 提供给它；
(15) JavaScript 运行时向消息队列中添加一个恢复执行 foo()函数的任务；
(16) JavaScript 运行时从消息队列中取出恢复执行 bar()的任务及值 6；
(17)（在 bar()中）恢复执行，await 取得值 6；
(18)（在 bar()中）打印 6；
(19)（在 bar()中）打印 7；
(20) bar()返回；
(21) 异步任务完成，JavaScript 从消息队列中取出恢复执行 foo()的任务及值 8；
(22)（在 foo()中）打印 8；
(23)（在 foo()中）打印 9；
(24) foo()返回。

### 3.3 异步函数策略

因为简单实用，所以异步函数很快成为 JavaScript 项目使用最广泛的特性之一。不过，在使用异步函数时，还是有些问题要注意。

#### 实现 sleep()

很多人在刚开始学习 JavaScript 时，想找到一个类似 Java 中 Thread.sleep()之类的函数，好在程 序中加入非阻塞的暂停。以前，这个需求基本上都通过 setTimeout()利用 JavaScript 运行时的行为来 实现的。 

有了异步函数之后，就不一样了。**一个简单的箭头函数就可以实现 sleep()**：

```js
async function sleep(delay){
	return new Promise((resolve,reject)=>setTimeout(resolve,delay));
}

async function foo(){
	const t0=Date.now();
	await sleep(1500);  //暂停约 1500 毫秒
	console.log(Date.now()-t0);
}

foo();  //1509
```

#### 利用平行执行

如果使用 await 时不留心，则很可能错过平行加速的机会。来看下面的例子，其中顺序等待了 5个随机的超时：

```js
async function randomDelay(id){
	// 延迟 0~1000 毫秒
	const delay=Math.random()*1000;
	return new Promise((resolve,reject)=>setTimeout(()=>{
		console.log(`${id} finished`);
		resolve();
	},delay));
}

async function foo(){
	const t0=Date.now();
	await randomDelay(0);
	await randomDelay(1);
	await randomDelay(2);
	await randomDelay(3);
	await randomDelay(4);
	console.log(`${Date.now() - t0}ms elapsed`);
}

foo();
/*
0 finished
1 finished
2 finished
3 finished
4 finished
2214ms elapsed
*/
```

用一个 for 循环重写，就是：

```js
async function randomDelay(id){
	// 延迟 0~1000 毫秒
	const delay=Math.random()*1000;
	return new Promise((resolve,reject)=>setTimeout(()=>{
		console.log(`${id} finished`);
		resolve();
	},delay));
}

async function foo(){
	const t0=Date.now();
	for (let i=0;i<5;i++){
		await randomDelay(i);
	}
	console.log(`${Date.now() - t0}ms elapsed`);
}

foo();
/*
0 finished
1 finished
2 finished
3 finished
4 finished
2856ms elapsed
*/
```

**就算这些期约之间没有依赖，异步函数也会依次暂停，等待每个超时完成**。这样可以保证执行顺序，但总执行时间会变长。

如果顺序不是必需保证的，**那么可以先一次性初始化所有期约，然后再分别等待它们的结果**。比如：

```js
async function randomDelay(id){
	// 延迟 0~1000 毫秒
	const delay=Math.random()*1000;
	return new Promise((resolve,reject)=>setTimeout(()=>{
		setTimeout(console.log,0,`${id} finished`);
		resolve();
	},delay));
}

async function foo(){
	const t0 = Date.now();
	const p0 = randomDelay(0);
	const p1 = randomDelay(1);
	const p2 = randomDelay(2);
	const p3 = randomDelay(3);
	const p4 = randomDelay(4);

	await p0;
	await p1;
	await p2;
	await p3;
	await p4;
	setTimeout(console.log,0,`${Date.now() - t0}ms elapsed`)
}

foo();
/*
4 finished
2 finished
1 finished
0 finished
3 finished
937ms elapsed
*/
```

用数组和 for 循环再包装一下就是：

```js
async function randomDelay(id){
	// 延迟 0~1000 毫秒
	const delay=Math.random()*1000;
	return new Promise((resolve,reject)=>setTimeout(()=>{
		setTimeout(console.log,0,`${id} finished`);
		resolve();
	},delay));
}

async function foo(){
	const t0 = Date.now();

	const promises=Array(5).fill(null).map((_,i)=>randomDelay(i))

	for (let p of promises){
		await p;
	}

	setTimeout(console.log,0,`${Date.now() - t0}ms elapsed`)
}

foo();
/*
3 finished
1 finished
0 finished
2 finished
4 finished
942ms elapsed
*/
```

注意，**虽然期约没有按照顺序执行，但 await 按顺序收到了每个期约的值**：

```js
async function randomDelay(id){
	// 延迟 0~1000 毫秒
	const delay=Math.random()*1000;
	return new Promise((resolve,reject)=>setTimeout(()=>{
		setTimeout(console.log,0,`${id} finished`);
		resolve(id);
	},delay));
}

async function foo(){
	const t0 = Date.now();

	const promises=Array(5).fill(null).map((_,i)=>randomDelay(i))

	for (let p of promises){
		//await p;
		console.log(`awaited ${await p}`);
	}

	setTimeout(console.log,0,`${Date.now() - t0}ms elapsed`)
}

foo();
/*
awaited 0
0 finished
4 finished
2 finished
awaited 1
awaited 2
1 finished
awaited 3
awaited 4
3 finished
722ms elapsed
*/
```

#### 串行执行期约

如何串行执行期约并把值传给后续的期约。使用 async/await，期约连锁会变得很简单：

```js
function addTwo(x) {return x + 2;}
function addThree(x) {return x + 3;}
function addFive(x) {return x + 5;}

async function addTen(x) {
	for (const fn of [addTwo, addThree, addFive]) {
		x = await fn(x);
	}
	return x;
}
addTen(9).then(console.log); // 19
```

这里，**await 直接传递了每个函数的返回值，结果通过迭代产生**。当然，这个例子并没有使用期约，如果要使用期约，则可以把所有函数都改成异步函数。这样它们就都返回期约了：

```js
async function addTwo(x) {return x + 2;}
async function addThree(x) {return x + 3;}
async function addFive(x) {return x + 5;}

async function addTen(x) {
	for (const fn of [addTwo, addThree, addFive]) {
		x = await fn(x);
	}
	return x;
}
addTen(9).then(console.log); // 19
```

#### 栈追踪与内存管理

**期约与异步函数的功能有相当程度的重叠，但它们在内存中的表示则差别很大**。看看下面的例子，*它展示了拒绝期约的栈追踪信息：*

```js
function fooPromiseExecutor(resolve, reject) {
	setTimeout(reject, 1000, 'bar');
}

function foo() {
	new Promise(fooPromiseExecutor);
}

foo();

// Uncaught (in promise) bar
// setTimeout
// setTimeout (async)
// fooPromiseExecutor
// foo
```

根据对期约的不同理解程度，以上栈追踪信息可能会让某些读者不解。**栈追踪信息应该相当直接地 表现 JavaScript 引擎当前栈内存中函数调用之间的嵌套关系**。在超时处理程序执行时和拒绝期约时，我 们看到的错误信息包含嵌套函数的标识符，那是被调用以创建最初期约实例的函数。可是，我们知道这 些函数已经返回了，因此栈追踪信息中不应该看到它们。 

答案很简单，这是因为 JavaScript 引擎会在创建期约时尽可能保留完整的调用栈。**在抛出错误时， 调用栈可以由运行时的错误处理逻辑获取，因而就会出现在栈追踪信息中**。当然，这意味着栈追踪信息 会占用内存，从而带来一些计算和存储成本。 

如果在前面的例子中使用的是异步函数，那又会怎样呢？比如：

```js
function fooPromiseExecutor(resolve, reject) {
	setTimeout(reject, 1000, 'bar');
}

async function foo() {
	await new Promise(fooPromiseExecutor);
}

foo();

// Uncaught (in promise) bar
// foo
// async function (async)
// foo
```

**这样一改，栈追踪信息就准确地反映了当前的调用栈**。fooPromiseExecutor()已经返回，所以 它不在错误信息中。但 foo()此时被挂起了，并没有退出。**JavaScript 运行时可以简单地在嵌套函数中 存储指向包含函数的指针，就跟对待同步函数调用栈一样。这个指针实际上存储在内存中，可用于在出 错时生成栈追踪信息。这样就不会像之前的例子那样带来额外的消耗**，因此在重视性能的应用中是可以 优先考虑的。
