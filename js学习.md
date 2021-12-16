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

