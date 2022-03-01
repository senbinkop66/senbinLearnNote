

# 基础部分

## 面向对象的 JavaScript

JavaScript 没有提供传统面向对象语言中的类式继承，而是通过**原型委托**的方式来实现对象与对象之间的继承。JavaScript 也没有在语言层面提供对抽象类和接口的支持。

### 动态类型语言和鸭子类型

编程语言按照数据类型大体可以分为两类，一类是静态类型语言，另一类是动态类型语言。 **静态类型语言**在编译时便已确定变量的类型，而**动态类型语言**的变量类型要到程序运行的时 候，待变量被赋予某个值之后，才会具有某种类型。

动态类型语言对变量类型的宽容给实际编码带来了很大的灵活性。由于无需进行类型检测， 我们可以尝试调用任何对象的任意方法，而无需去考虑它原本是否被设计为拥有该方法。 这一切都建立在**鸭子类型（duck typing）**的概念上，鸭子类型的通俗说法是：“如果它走起 路来像鸭子，叫起来也是鸭子，那么它就是鸭子。”

鸭子类型**指导我们只关注对象的行为**，而不关注对象本身，也就是关注 HAS-A, 而不是 IS-A。

```js
var duck = {
   duckSinging: function(){
      console.log( '嘎嘎嘎' );
   }
};
var chicken = {
   duckSinging: function(){
      console.log( '嘎嘎嘎' );
   }
};
var choir = []; // 合唱团
var joinChoir = function( animal ){
   if ( animal && typeof animal.duckSinging === 'function' ){
      choir.push( animal );
      console.log( '恭喜加入合唱团' );
      console.log( '合唱团已有成员数量:' + choir.length );
   }
};
joinChoir( duck ); // 恭喜加入合唱团
joinChoir( chicken ); // 恭喜加入合唱团
```

在动态类型语言的面向对象设计中，鸭子类型的概念至关重要。利用鸭子类型的思想，我们 不必借助超类型的帮助，就能轻松地在动态类型语言中实现一个原则：“面向接口编程，而不是 面向实现编程”。例如，一个对象若有 push 和 pop 方法，并且这些方法提供了正确的实现，它就 可以被当作栈来使用。一个对象如果有 length 属性，也可以依照下标来存取属性（最好还要拥 有 slice 和 splice 等方法），这个对象就可以被当作数组来使用。

### 多态

#### 多态思想

多态的实际含义是：同一操作作用于不同的对象上面，可以产生不同的解释和不同的执行结 果。换句话说，给不同的对象发送同一个消息的时候，这些对象会根据这个消息分别给出不同的 反馈。

```js
var makeSound=function(animal){
   if (animal instanceof Duck){
      console.log("嘎嘎嘎");
   }else if(animal instanceof Chicken){
      console.log("咯咯咯");
   }
};

var Duck = function(){};
var Chicken = function(){};

makeSound(new Duck());
makeSound(new Chicken());
```

**多态背后的思想**是将“做什么”和“谁去做以及怎样去做”分离开来，也就是将“不变的事 物”与 “可能改变的事物”分离开来。在这个故事中，动物都会叫，这是不变的，但是不同类 型的动物具体怎么叫是可变的。把不变的部分隔离出来，把可变的部分封装起来，这给予了我们 扩展程序的能力，程序看起来是可生长的，也是符合开放—封闭原则的，相对于修改代码来说， 仅仅增加代码就能完成同样的功能，这显然优雅和安全得多。

#### 对象的多态性

下面是改写后的代码，首先我们把不变的部分隔离出来，那就是所有的动物都会发出叫声：

```js
var makeSound=function(animal){
   animal.sound();
};
```

然后把可变的部分各自封装起来，我们刚才谈到的多态性实际上指的是对象的多态性：

```js
var makeSound=function(animal){
   animal.sound();
};

var Duck = function(){};
Duck.prototype.sound=function(){
   console.log("嘎嘎嘎");
}

var Chicken = function(){};
Chicken.prototype.sound=function(){
   console.log("咯咯咯");
}

makeSound(new Duck());
makeSound(new Chicken());

var Dog = function(){};
Dog.prototype.sound=function(){
   console.log("汪汪汪");
}

makeSound(new Dog());
```

#### 类型检查和多态

类型检查是在表现出对象多态性之前的一个绕不开的话题，但 JavaScript 是一门不必进行类 型检查的动态类型语言，为了真正了解多态的目的，我们需要转一个弯，从一门静态类型语言说起。

```java
public class Duck { // 鸭子类
  public void makeSound(){
    System.out.println( "嘎嘎嘎" );
  }
}
public class Chicken { // 鸡类
  public void makeSound(){
    System.out.println( "咯咯咯" );
  }
}
public class AnimalSound {
  public void makeSound( Duck duck ){ // (1)
    duck.makeSound();
  }
}
public class Test {
  public static void main( String args[] ){
    AnimalSound animalSound = new AnimalSound();
    Duck duck = new Duck();
    animalSound.makeSound( duck ); // 输出：嘎嘎嘎
  }
}
public class Test {
  public static void main( String args[] ){
    AnimalSound animalSound = new AnimalSound();
    Chicken chicken = new Chicken();
    animalSound.makeSound( chicken ); // 报错，只能接受 Duck 类型的参数
  }
}
```

为了解决这一问题，静态类型的面向对象语言通常被设计为可以向上转型：当给一个类变量 赋值时，这个变量的类型既可以使用这个类本身，也可以使用这个类的超类。这就像我们在描述 天上的一只麻雀或者一只喜鹊时，通常说“一只麻雀在飞”或者“一只喜鹊在飞”。但如果想忽 略它们的具体类型，那么也可以说“一只鸟在飞”。 

同理，当 Duck 对象和 Chicken 对象的类型都被隐藏在超类型 Animal 身后，Duck 对象和 Chicken 对象就能被交换使用，这是让对象表现出多态性的必经之路，而多态性的表现正是实现众多设计 模式的目标。

#### 使用继承得到多态效果

使用继承来得到多态效果，是让对象表现出多态性的最常用手段。继承通常包括实现继承和接口继承。

```java
abstract class Animal{
  abstract void makeSound();  //抽象方法
}

class Duck extends Animal{ // 鸭子类
  public void makeSound(){
    System.out.println("嘎嘎嘎");
  }
}
class Chicken extends Animal{ // 鸡类
  public void makeSound(){
    System.out.println("咯咯咯");
  }
}

//现在剩下的就是让 AnimalSound 类的 makeSound 方法接受 Animal 类型的参数，而不是具体的Duck 类型或者 Chicken 类型：

class AnimalSound {
  public void makeSound(Animal animal){
    animal.makeSound();
  }
}

public class TestJava {
  public static void main( String args[] ){
    AnimalSound animalSound = new AnimalSound();
    Animal duck=new Duck();
    Animal chicken=new Chicken();

    animalSound.makeSound(chicken);
    animalSound.makeSound(duck);
  }
}
```

#### JavaScript的多态

从前面的讲解我们得知，多态的思想实际上是把“做什么”和“谁去做”分离开来，要实现 这一点，归根结底先要消除类型之间的耦合关系。如果类型之间的耦合关系没有被消除，那么我 们在 makeSound 方法中指定了发出叫声的对象是某个类型，它就不可能再被替换为另外一个类型。 在 Java 中，可以通过向上转型来实现多态。

而 JavaScript 的变量类型在运行期是可变的。一个 JavaScript 对象，既可以表示 Duck 类型的 对象，又可以表示 Chicken 类型的对象，**这意味着 JavaScript 对象的多态性是与生俱来的。** 这种与生俱来的多态性并不难解释。JavaScript 作为一门动态类型语言，它在编译时没有类型 检查的过程，既没有检查创建的对象类型，又没有检查传递的参数类型。

由此可见，某一种动物能否发出叫声，只取决于它有没有 makeSound 方法，而不取决于它是 否是某种类型的对象，这里不存在任何程度上的“类型耦合”。这正是我们从上一节的鸭子类型 中领悟的道理。在 JavaScript 中，并不需要诸如向上转型之类的技术来取得多态的效果。

#### 多态在面向对象程序设计中的作用

Martin Fowler 在《重构：改善既有代码的设计》里写到： 多态的最根本好处在于，你不必再向对象询问“你是什么类型”而后根据得到的答 案调用对象的某个行为——你只管调用该行为就是了，其他的一切多态机制都会为你安 排妥当。

换句话说，多态**最根本的作用**就是**通过把过程化的条件分支语句转化为对象的多态性，从而消除这些条件分支语句**。

每个对象应该做什么，已经成 为了该对象的一个方法，被安装在对象的内部，每个对象负责它们自己的行为。所以这些对象可 以根据同一个消息，有条不紊地分别进行各自的工作。 **将行为分布在各个对象中，并让这些对象各自负责自己的行为，这正是面向对象设计的优点**。

```js
var googleMap={
   show:function(){
      console.log( '开始渲染谷歌地图' );
   }
};

var renderMap=function(){
   googleMap.show();
}

renderMap();
```

后来因为某些原因，要把谷歌地图换成百度地图，为了让 renderMap 函数保持一定的弹性，我们用一些条件分支来让 renderMap 函数同时支持谷歌地图和百度地图：

```js
var googleMap={
   show:function(){
      console.log( '开始渲染谷歌地图' );
   }
};
var baiduMap={
   show:function(){
      console.log( '开始渲染百度地图' );
   }
};
var renderMap=function(type){
   if (type==="google") {
      googleMap.show();
   }else if(type==="baidu"){
      baiduMap.show()
   }
}

renderMap('google');
renderMap('baidu');
```

可以看到，虽然 renderMap 函数目前保持了一定的弹性，但这种弹性是很脆弱的，一旦需要 替换成搜搜地图，那无疑必须得改动 renderMap 函数，继续往里面堆砌条件分支语句。 我们还是先把程序中相同的部分抽象出来，那就是显示某个地图：

```js
var googleMap={
   show:function(){
      console.log( '开始渲染谷歌地图' );
   }
};
var baiduMap={
   show:function(){
      console.log( '开始渲染百度地图' );
   }
};
var renderMap=function(map){
   if (map.show instanceof Function) {
      map.show();
   }
}

renderMap(googleMap);
renderMap(baiduMap);
```

现在来找找这段代码中的多态性。当我们向谷歌地图对象和百度地图对象分别发出“展示地 图”的消息时，会分别调用它们的 show 方法，就会产生各自不同的执行结果。对象的多态性提 示我们，“做什么”和“怎么去做”是可以分开的，即使以后增加了搜搜地图，renderMap 函数仍 然不需要做任何改变，如下所示：

```js
var sosoMap={
   show:function(){
      console.log( '开始渲染搜搜地图' );
   }
};
renderMap(sosoMap);
```

#### 设计模式与多态

GoF 所著的《设计模式》一书的副书名是“可复用面向对象软件的基础”。该书完全是从面 向对象设计的角度出发的，通过对封装、继承、多态、组合等技术的反复使用，提炼出一些可重 复使用的面向对象设计技巧。而多态在其中又是重中之重，**绝大部分设计模式的实现都离不开多 态性的思想**。

在 JavaScript 这种将函数作为一等对象的语言中，函数本身也是对象，函数用来封装行为并 且能够被四处传递。当我们对一些函数发出“调用”的消息时，这些函数会返回不同的执行结 果，这是“多态性”的一种体现，也是很多设计模式在 JavaScript 中可以用**高阶函数**来代替实现 的原因。

### 封装

封装的目的是将信息隐藏。一般而言，我们讨论的封装是封装数据和封装实现。这一节将讨论更广义的封装，不仅包括封装数据和封装实现，还包括封装类型和封装变化。

#### 封装数据

在许多语言的对象系统中，封装数据是由语法解析来实现的，这些语言也许提供了 private、 public、protected 等关键字来提供不同的访问权限。 

但 JavaScript 并没有提供对这些关键字的支持，我们只**能依赖变量的作用域来实现封装特性， 而且只能模拟出 public 和 private 这两种封装性**。 

除了 ECMAScript 6 中提供的 let 之外，一般我们**通过函数来创建作用域**：

```js
var myObject=(function(){
   var __name="sven";  //私有（private）变量
   return {
      // 公开（public）方法
      getName:function(){
         return __name;
      }
   }
})();

console.log(myObject.getName());  //sven
console.log(myObject.__name);  //undefined
```

另外值得一提的是，在 ECAMScript 6 中，还可以通过 Symbol 创建私有属性。

#### 封装实现

封装的目的是将信息隐藏，封装应该被视为“任何形式的封装”，也就是说，**封装不仅仅是 隐藏数据，还包括隐藏实现细节、设计细节以及隐藏对象的类型等。** 

从封装实现细节来讲，封装使得对象内部的变化对其他对象而言是透明的，也就是不可见的。 对象对它自己的行为负责。其他对象或者用户都不关心它的内部实现。**封装使得对象之间的耦合变松散，对象之间只通过暴露的 API 接口来通信**。当我们修改一个对象时，可以随意地修改它的 内部实现，只要对外的接口没有变化，就不会影响到程序的其他功能。 

封装实现细节的例子非常之多。拿迭代器来说明，迭代器的作用是在不暴露一个聚合对象的 内部表示的前提下，提供一种方式来顺序访问这个聚合对象。我们编写了一个 each 函数，它的 作用就是遍历一个聚合对象，使用这个 each 函数的人不用关心它的内部是怎样实现的，只要它 提供的功能正确便可以。即使 each 函数修改了内部源代码，只要对外的接口或者调用方式没有 变化，用户就不用关心它内部实现的改变。

#### 封装类型

封装类型是静态类型语言中一种重要的封装方式。**一般而言，封装类型是通过抽象类和接口 来进行的**。把对象的真正类型隐藏在抽象类或者接口之后，相比对象的类型，客户更关心对象 的行为。在许多静态语言的设计模式中，想方设法地去隐藏对象的类型，也是促使这些模式诞生 的原因之一。比如工厂方法模式、组合模式等。 

当然在 JavaScript 中，并没有对抽象类和接口的支持。JavaScript 本身也是一门类型模糊的语 言。在封装类型方面，JavaScript 没有能力，也没有必要做得更多。**对于 JavaScript 的设计模式实 现来说，不区分类型是一种失色，也可以说是一种解脱。**

#### 封装变化

从设计模式的角度出发，**封装在更重要的层面体现为封装变化**。 

《设计模式》一书曾提到如下文字： “考虑你的设计中哪些地方可能变化，这种方式与关注会导致重新设计的原因相反。 它不是考虑什么时候会迫使你的设计改变，而是考虑你怎样才能够在不重新设计的情况 下进行改变。这里的关键在于封装发生变化的概念，这是许多设计模式的主题。” 

这段文字即是《设计模式》提到的“**找到变化并封装之**”。《设计模式》一书中共归纳总结了 23 种设计模式。从意图上区分，这 23 种设计模式分别被划分为创建型模式、结构型模式和行为型模式。

拿创建型模式来说，要创建一个对象，是一种抽象行为，而具体创建什么对象则是可以变化 的，创建型模式的目的就是**封装创建对象的变化**。而结构型模式**封装的是对象之间的组合关系**。 行为型模式**封装的是对象的行为变化**。 

**通过封装变化的方式，把系统中稳定不变的部分和容易变化的部分隔离开来**，在系统的演变 过程中，我们只需要替换那些容易变化的部分，如果这些部分是已经封装好的，替换起来也相对容易。这可以最大程度地保证程序的稳定性和可扩展性。 

从《设计模式》副标题“可复用面向对象软件的基础”可以知道，这本书理应教我们如何编 写可复用的面向对象程序。这本书把大多数笔墨都放在如何封装变化上面，这跟编写可复用的面 向对象程序是不矛盾的。当我们想办法把程序中变化的部分封装好之后，剩下的即是稳定而可复 用的部分了。

### 原型模式

原型模式是一种设计模式，也是一种编程泛型，它构成了 JavaScript 这门语言的根本。

**在以类为中心的面向对象编程语言中，类和对象的关系可以想象成铸模和铸件的关系**，对象 总是从类中创建而来。而**在原型编程的思想中，类并不是必需的，对象未必需要从类中创建而来，** 一个对象是通过克隆另外一个对象所得到的。就像电影《第六日》一样，通过克隆可以创造另外 一个一模一样的人，而且本体和克隆体看不出任何区别。

原型模式不单是一种设计模式，也被称为一种编程泛型。

#### 使用克隆的原型模式

从设计模式的角度讲，原型模式是用于创建对象的一种模式，如果我们想要创建一个对象， **一种方法是先指定它的类型，然后通过类来创建这个对象**。

**原型模式选择了另外一种方式**，我们 不再关心对象的具体类型，**而是找到一个对象，然后通过克隆来创建一个一模一样的对象**。 

既然原型模式是通过克隆来创建对象的，那么很自然地会想到，如果需要一个跟某个对象一 模一样的对象，就可以使用原型模式。 

假设我们在编写一个飞机大战的网页游戏。某种飞机拥有分身技能，当它使用分身技能的时 候，要在页面中创建一些跟它一模一样的飞机。如果不使用原型模式，那么在创建分身之前，无 疑必须先保存该飞机的当前血量、炮弹等级、防御等级等信息，随后将这些信息设置到新创建的 飞机上面，这样才能得到一架一模一样的新飞机。 

如果使用原型模式，我们只需要调用负责克隆的方法，便能完成同样的功能。 

**原型模式的实现关键，是语言本身是否提供了 clone方法**。ECMAScript 5提供了 Object.create 方法，可以用来克隆对象。代码如下：

```js
var Plane=function(){
   this.blood=100;
   this.attackLevel=1;
   this.defenseLevel=1;
};

var plane=new Plane();
plane.blood=500;
plane.attackLevel=10;
plane.defenseLevel=7;

var clonePlane=Object.create(plane);


console.log(clonePlane.blood);  //500
console.log(clonePlane.attackLevel);  //10
console.log(clonePlane.defenseLevel);  //7
```

在不支持 Object.create 方法的浏览器中，则可以使用以下代码：

```js
Object.create=Object.create || function(obj){
   var F=function(){};
   F.prototype=obj;
   return new F();
}
```

#### 克隆是创建对象的手段

通过上一节的代码，我们看到了如何通过原型模式来克隆出一个一模一样的对象。但原型模 式的真正目的**并非**在于需要得到一个一模一样的对象，而是提供了一种便捷的方式去创建某个类 型的对象，**克隆只是创建这个对象的过程和手段**。 

在用 Java 等静态类型语言编写程序的时候，类型之间的解耦非常重要。依赖倒置原则提醒 我们创建对象的时候要避免依赖具体类型，而用 new XXX 创建对象的方式显得很僵硬。工厂方法 模式和抽象工厂模式可以帮助我们解决这个问题，但这两个模式会带来许多跟产品类平行的工厂 类层次，也会增加很多额外的代码。 

原型模式提供了另外一种创建对象的方式，**通过克隆对象，我们就不用再关心对象的具体类 型名字**。这就像一个仙女要送给三岁小女孩生日礼物，虽然小女孩可能还不知道飞机或者船怎么 说，但她可以指着商店橱柜里的飞机模型说“我要这个”。

 当然在 JavaScript 这种类型模糊的语言中，创建对象非常容易，也不存在类型耦合的问题。 **从设计模式的角度来讲，原型模式的意义并不算大** 。但 JavaScript 本身是一门**基于原型的面向对 象语言**，它的对象系统就是使用原型模式来搭建的，在这里称之为**原型编程范型**也许更合适。

前面说过，原型模式不仅仅是一种设计模式，也是一种编程范型。JavaScript 就是使用原型 模式来搭建整个面向对象系统的。在 JavaScript 语言中不存在类的概念，对象也并非从类中创建出来的，**所有的 JavaScript 对象都是从某个对象上克隆而来的。**



#### 原型编程范型的一些规则

基于原型链的委托机制就是原型继承的本质。

原型编程中的一个重要特性，**即当对象无法响应某个请求时，会把该请求委托给它自己的原型。**

**原型编程范型至少包括以下基本规则**。

- 所有的数据都是对象。
- 要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它。
- 对象会记住它的原型。
- 如果对象无法响应某个请求，它会把这个请求委托给它自己的原型。

#### JavaScript中的原型继承

JavaScript 也同样遵守这些原型编程的基本规则。

##### 1. 所有的数据都是对象

JavaScript 在设计的时候，模仿 Java 引入了两套类型机制：基本类型和对象类型。基本类型 包括 undefined、number、boolean、string、function、object。从现在看来，这并不是一个好的 想法。 

按照 JavaScript 设计者的本意，除了 undefined 之外，一切都应是对象。为了实现这一目标， number、boolean、string 这几种基本类型数据也可以通过“包装类”的方式变成对象类型数据来 处理。

我们**不能说在 JavaScript 中所有的数据都是对象，但可以说绝大部分数据都是对象**。那么相 信在 JavaScript 中也一定会有一个根对象存在，这些对象追根溯源都来源于这个根对象。 

事实上，JavaScript 中的根对象是 **Object.prototype** 对象。**Object.prototype 对象是一个空的 对象。**我们在 JavaScript 遇到的每个对象，实际上都是从 Object.prototype 对象克隆而来的， Object.prototype 对象就是它们的原型。

比如下面的 obj1 对象和 obj2 对象：

```js
var obj1 = new Object();
var obj2 = {};
```

可以利用 ECMAScript 5 提供的 Object.getPrototypeOf 来查看这两个对象的原型：

```js
console.log( Object.getPrototypeOf( obj1 ) === Object.prototype ); // true
console.log( Object.getPrototypeOf( obj2 ) === Object.prototype ); // true
```

##### 2. 要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它

但在 JavaScript 语言里，我们并不需要关心克隆的细节，因为这是引擎内部负责实现的。我 们所需要做的只是显式地调用 var obj1 = new Object()或者 var obj2 = {}。此时，引擎内部会从 Object.prototype 上面克隆一个对象出来，我们最终得到的就是这个对象。

再来看看如何用 new 运算符从构造器中得到一个对象，下面的代码我们再熟悉不过了：

```js
function Person( name ){
   this.name = name;
};
Person.prototype.getName = function(){
   return this.name;
};

var a = new Person( 'sven' )
console.log( a.name ); // 输出：sven
console.log( a.getName() ); // 输出：sven
console.log( Object.getPrototypeOf( a ) === Person.prototype ); // 输出：true
```

在 JavaScript 中没有类的概念，这句话我们已经重复过很多次了。但刚才不是明明调用了 new Person()吗？ 

在这里 Person 并不是类，而是函数构造器，**JavaScript 的函数既可以作为普通函数被调用， 也可以作为构造器被调用。**当使用 new 运算符来调用函数时，此时的函数就是一个构造器。 **用 new 运算符来创建对象的过程，实际上也只是先克隆 Object.prototype 对象，再进行一些其他额 外操作的过程**。 

JavaScript 是通过克隆 Object.prototype 来得到新的对象，但实际上并不是每次都真正地克隆了一个新的对象。从 内存方面的考虑出发，JavaScript 还做了一些额外的处理。

在 Chrome 和 Firefox 等向外暴露了对象__proto__属性的浏览器下，我们可以通过下面这段代 码来理解 new 运算的过程：

```js
function Person( name ){
   this.name = name;
};
Person.prototype.getName = function(){
   return this.name;
};

var objectFactory=function(){
   var obj=new Object();  //从 Object.prototype 上克隆一个空的对象
   var Constructor=[].shift.call(arguments);  //取得外部传入的构造器，此例是 Person
   obj.__proto__=Constructor.prototype;  // 指向正确的原型
   var ret=Constructor.apply(obj,arguments);  //借用外部传入的构造器给 obj 设置属性
   return typeof ret==='object' ? ret : obj;  //确保构造器总是会返回一个对象
};

var a = objectFactory(Person, 'sven' )
console.log( a.name ); // 输出：sven
console.log( a.getName() ); // 输出：sven
console.log( Object.getPrototypeOf( a ) === Person.prototype ); // 输出：true
```

##### 3. 对象会记住它的原型

如果请求可以在一个链条中依次往后传递，那么每个节点都必须知道它的下一个节点。同理， 要完成 Io 语言或者 JavaScript语言中的原型链查找机制，**每个对象至少应该先记住它自己的原型。** 

目前我们一直在讨论“对象的原型”，就 JavaScript 的真正实现来说，其实并**不能**说对象有 原型，而**只能说对象的构造器有原型**。对于“对象把请求委托给它自己的原型”这句话，更好 的说法是对象把请求委托给它的构造器的原型。那么对象如何把请求顺利地转交给它的构造器 的原型呢？ 

JavaScript 给对象提供了一个名为`__proto__`的隐藏属性，**某个对象的`__proto__`属性默认会指 向它的构造器的原型对象**，即{Constructor}.prototype。在一些浏览器中，`__proto__`被公开出来， 我们可以在 Chrome 或者 Firefox 上用这段代码来验证：

```js
var a = new Object();
console.log ( a.__proto__=== Object.prototype ); // 输出：true
```

实际上，**`__proto__`就是对象跟“对象构造器的原型”联系起来的纽带**。正因为对象要通过 `__proto__`属性来记住它的构造器的原型，所以我们用上一节的 objectFactory 函数来模拟用 new 创建对象时， 需要手动给 obj 对象设置正确的`__proto__`指向。

```javascript
obj.__proto__ = Constructor.prototype;
```

通过这句代码，我们让` obj.__proto__ `指向 Person.prototype，而不是原来的 Object.prototype。

##### 4. 如果对象无法响应某个请求，它会把这个请求委托给它的构造器的原型

这条规则即是原型继承的精髓所在。从对 Io 语言的学习中，我们已经了解到，当一个对象 无法响应某个请求的时候，它会顺着原型链把请求传递下去，直到遇到一个可以处理该请求的对 象为止。

JavaScript 的克隆跟 Io 语言还有点不一样，Io 中每个对象都可以作为原型被克隆，当 Animal 对象克隆自 Object 对象，Dog 对象又克隆自 Animal 对象时，便形成了一条天然的原型链。

而**在 JavaScript 中，每个对象都是从 Object.prototype 对象克隆而来的**，如果是这样的话， 我们只能得到单一的继承关系，即每个对象都继承自 Object.prototype 对象，这样的对象系统显 然是非常受限的。 

实际上，虽然 JavaScript 的对象最初都是由 Object.prototype 对象克隆而来的，**但对象构造 器的原型并不仅限于 Object.prototype 上，而是可以动态指向其他对象。**这样一来，当对象 a 需 要借用对象 b 的能力时，可以有选择性地把对象 a 的构造器的原型指向对象 b，从而达到继承的 效果。

下面的代码是我们**最常用的原型继承方式**：

```js
var obj={name:"mane"};

var A=function(){};
A.prototype=obj;

var a=new A();
console.log(a.name);  //mane
console.log(a.__proto__);  //{ name: 'mane' }

```

我们来看看执行这段代码的时候，引擎做了哪些事情。
- 首先，尝试遍历对象 a 中的所有属性，但没有找到 name 这个属性。

- 查找 name 属性的这个请求被委托给对象 a 的构造器的原型，它被 `a.__proto__ `记录着并且指向 A.prototype，而 A.prototype 被设置为对象 obj。

- 在对象 obj 中找到了 name 属性，并返回它的值。


当我们**期望得到一个“类”继承自另外一个“类”的效果时**，往往会用下面的代码来模拟实现：

```js
var A=function(){};
A.prototype={name:"Arnold"};

var B=function(){};
B.prototype=new A();

var b=new B();
console.log(b.name);  //Arnold

```

再看这段代码执行的时候，引擎做了什么事情。
- 首先，尝试遍历对象 b 中的所有属性，但没有找到 name 这个属性。
- 查找 name 属性的请求被委托给对象 b 的构造器的原型，它被 `b.__proto__` 记录着并且指向B.prototype，而 B.prototype 被设置为一个通过 new A()创建出来的对象。
- 在该对象中依然没有找到 name 属性，于是请求被继续委托给这个对象构造器的原型A.prototype。
- 在 A.prototype 中找到了 name 属性，并返回它的值。

和把 B.prototype 直接指向一个字面量对象相比，通过 B.prototype = new A()形成的原型链比 之前多了一层。但二者之间没有本质上的区别，都是将对象构造器的原型指向另外一个对象，继 承总是发生在对象和对象之间。 

```js
console.log(b.address);  //undefined
```

最后还要留意一点，原型链并不是无限长的。现在我们尝试访问对象 b 的 address 属性。而 对象b 和它构造器的原型上都没有 address 属性，那么这个请求会被最终传递到哪里呢？ 

实际上，当请求达到 A.prototype，并且在 A.prototype 中也没有找到 address 属性的时候， 请求会被传递给 A.prototype 的构造器原型 Object.prototype，显然 Object.prototype 中也没有 address 属性，**但 Object.prototype 的原型是 null**，说明这时候原型链的后面已经没有别的节点了。 所以该次请求就到此打住，b.address 返回 undefined。

#### 原型继承的未来

设计模式在很多时候其实都体现了语言的不足之处。Peter Norvig 曾说，设计模式是对语言 不足的补充，如果要使用设计模式，不如去找一门更好的语言。这句话非常正确。不过，作为 Web 前端开发者，相信 JavaScript 在未来很长一段时间内都是唯一的选择。虽然我们没有办法换 一门语言，但语言本身也在发展，说不定哪天某个模式在 JavaScript 中就已经是天然的存在，不再 需要拐弯抹角来实现。比如 **Object.create 就是原型模式的天然实现**。使用 Object.create 来完成原 型继承看起来更能体现原型模式的精髓。目前大多数主流浏览器都提供了 Object.create 方法。 

但美中不足是**在当前的 JavaScript 引擎下，通过 Object.create 来创建对象的效率并不高**，通 常比通过构造函数创建对象要慢。此外还有一些值得注意的地方，比如通过设置构造器的 prototype 来实现原型继承的时候，**除了根对象 Object.prototype 本身之外，任何对象都会有一个 原型**。**而通过 Object.create( null )可以创建出没有原型的对象**。 另外，ECMAScript 6 带来了新的 Class 语法。这让 JavaScript 看起来像是一门基于类的语言， 但其背后仍是通过原型机制来创建对象。通过 Class 创建对象的一段简单示例代码 如下所示 ：

```js
class Animal {
   constructor(name) {
      this.name = name;
   }
   getName() {
      return this.name;
   }
}
class Dog extends Animal {
   constructor(name) {
      super(name);
   }
   speak() {
      return "woof";
   }
}
var dog = new Dog("Scamp");
console.log(dog.getName() + ' says ' + dog.speak());
```



## 重要概念

### this

