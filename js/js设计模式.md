

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

跟别的语言大相径庭的是，JavaScript 的 this 总是指向一个对象，而具体指向哪个对象**是在运行时基于函数的执行环境动态绑定的**，而非函数被声明时的环境。

#### this的指向

除去不常用的 with 和 eval 的情况，具体到实际应用中，this 的指向大致可以分为以下 4 种。
- 作为对象的方法调用。
- 作为普通函数调用。
- 构造器调用。
- Function.prototype.call 或 Function.prototype.apply 调用。

##### 1. 作为对象的方法调用

当函数作为对象的方法被调用时，**this 指向该对象**：

```js
var obj={
   a:1,
   getA:function(){
      console.log(this===obj);  //true
      console.log(this.a);  //1
   }
}
obj.getA();
```

##### 2. 作为普通函数调用

当函数不作为对象的属性被调用时，也就是我们常说的**普通函数方式**，此时的 **this 总是指向全局对象**。在浏览器的 JavaScript 里，这个全局对象是 window 对象。

```js
    window.name="globalName";
    var getName=function(){
        return this.name;
    }
    console.log(getName());  //globalName
```

或者：

```js
    window.name="globalName";
    var obj={
       name:"Arnold",
       getName:function(){
          return this.name;
       }
    }
    var getName=obj.getName;
    console.log(getName());  //globalName
```

有时候我们会遇到一些困扰，比如在 div 节点的事件函数内部，有一个局部的 callback 方法， callback 被作为普通函数调用时，callback 内部的 this 指向了 window，但我们往往是想让它指向 该 div 节点，见如下代码：

```html
<div id="div1">div元素</div>
<script type="text/javascript">
    window.id="window";
    document.getElementById("div1").onclick=function(){
        console.log(this.id);  // div1
        var callback=function(){
            console.log(this.id);  // window
        }
        callback();
    };
</script>
```

此时有一种简单的解决方案，可以用一个变量保存 div 节点的引用：

```javascript
    window.id="window";
    document.getElementById("div1").onclick=function(){
        var that=this;  //保存 div 的引用
        console.log(this.id);  // div1
        var callback=function(){
            console.log(that.id);  // div1
        }
        callback();
    };
```

在 ECMAScript 5 的 strict 模式下，这种情况下的 this 已经被规定为不会指向全局对象，而是 undefined：

```js
    function func(){
        "use strict";
        console.log(this);  // undefined
    }
    func();
```

##### 3. 构造器调用

JavaScript 中没有类，但是可以从构造器中创建对象，同时也提供了 new 运算符，使得构造 器看起来更像一个类。 

除了宿主提供的一些内置函数，大部分 JavaScript 函数都可以当作构造器使用。**构造器的外 表跟普通函数一模一样**，它们的**区别在于被调用的方式**。当用 new 运算符调用函数时，该函数总 会返回一个对象，**通常情况下，构造器里的 this 就指向返回的这个对象**，见如下代码：

```js
var MyClass=function(){
   this.name="Arnold";
};

var obj=new MyClass();
console.log(obj.name);  // Arnold
```

但用 new 调用构造器时，还要注意一个问题，**如果构造器显式地返回了一个 object 类型的对象**，那么此**次运算结果最终会返回这个对象**，而不是我们之前期待的 this：

```js
var MyClass=function(){
   this.name="Arnold";
   return {
      name:"Alice"
   }
};

var obj=new MyClass();
console.log(obj.name);  // Alice
```

如果构造器**不显式地返回任何数据**，**或者是返回一个非对象类型的数据**，就不会造成上述问题：

```js
var MyClass=function(){
   this.name="Arnold";
   return "Alice";  //返回 string 类型
};

var obj=new MyClass();
console.log(obj.name);  // Arnold
```

##### 4. Function.prototype.call 或 Function.prototype.apply 调用

跟普通的函数调用相比，用 Function.prototype.call 或 Function.prototype.apply 可以动态地改变传入函数的 this：

```js
var obj1={
   name:"Arnold",
   getName:function(){
      return this.name;
   }
}

var obj2={
   name:"Alice",
}

console.log(obj1.getName());  // Arnold
console.log(obj1.getName.call(obj2));  // Alice
console.log(obj1.getName.apply(obj2));  // Alice
```

#### 丢失的this

这是一个经常遇到的问题，我们先看下面的代码：

```js
var obj={
   name:"Arnold",
   getName:function(){
      return this.name;
   }
}

console.log(obj.getName());  // Arnold

var getName2=obj.getName;
console.log(getName2());  // undefined

```

当调用 obj.getName 时，getName 方法是作为 obj 对象的属性被调用的，根据 2.1.1 节提到的规 律，此时的 this 指向 obj 对象，所以 obj.getName()输出'sven'。

当用另外一个变量 getName2 来引用 obj.getName，并且调用 getName2 时，根据 2.1.2 节提到的 规律，此时是普通函数调用方式，this 是指向全局 window 的，所以程序的执行结果是 undefined。 

再看另一个例子，document.getElementById 这个方法名实在有点过长，我们大概尝试过用一 个短的函数来代替它，如同 prototype.js 等一些框架所做过的事情：

```javascript
    var getId=function(id){
        return document.getElementById(id);
    };
    getId("div1");
```

我们也许思考过为什么不能用下面这种更简单的方式：

```js
var getId = document.getElementById;
getId( 'div1' );
```

现在不妨花 1 分钟时间，让这段代码在浏览器中运行一次：

```html
<div id="div1">div元素</div>
<script type="text/javascript">
    var getId = document.getElementById;
    getId( 'div1' );
	//test.html:82 Uncaught TypeError: Illegal invocation
</script>
```

在 Chrome、Firefox、IE10 中执行过后就会发现，这段代码抛出了一个异常。这是因为许多 引擎的 document.getElementById 方法的内部实现中需要用到 this。这个 this 本来被期望指向 document，当 getElementById 方法作为 document 对象的属性被调用时，方法内部的 this 确实是指 向 document 的。 

**但当用 getId 来引用 document.getElementById 之后，再调用 getId，此时就成了普通函数调用， 函数内部的 this 指向了 window**，而不是原来的 document。 

我们可以**尝试利用 apply 把 document 当作 this** 传入 getId 函数，帮助“修正”this：

```js
    document.getElementById=(function(func){
        return function(){
            return func.apply(document,arguments);
        }
    })(document.getElementById);
    
    var getId = document.getElementById;
    console.log(getId( 'div1' ).id);  //div1
```



### call 和 apply

ECAMScript 3给 Function的原型定义了两个方法，它们是 Function.prototype.call和 Function. prototype.apply。在实际开发中，特别是在一些函数式风格的代码编写中，call 和 apply 方法尤 为有用。在 JavaScript 版本的设计模式中，这两个方法的应用也非常广泛，能熟练运用这两个方 法，是我们真正成为一名 JavaScript 程序员的重要一步。

#### call和apply的区别

Function.prototype.call 和 Function.prototype.apply 都是非常常用的方法。它们的作用一模 一样，**区别仅在于传入参数形式的不同**。

 apply 接受两个参数:

- 第一个参数指定了函数体内 this 对象的指向，

- 第二个参数为一个带下 标的集合，这个集合可以为数组，也可以为类数组，apply 方法把这个集合中的元素作为参数传 递给被调用的函数：

```js
var func=function(a,b,c){
   console.log([a,b,c]);
}

func.apply(null,[1,2,3]);  //[1,2,3]
```

在这段代码中，参数 1、2、3 被放在数组中一起传入 func 函数，它们分别对应 func 参数列 表中的 a、b、c。 

**call 传入的参数数量不固定**，跟 apply 相同的是，第一个参数也是代表函数体内的 this 指向，从第二个参数开始往后，每个参数被依次传入函数：

```js
var func=function(a,b,c){
   console.log([a,b,c]);
}

func.apply(null,[1,2,3]);  //[1,2,3]
func.call(null,2,3,4,5);  //[ 2, 3, 4 ]
```

当调用一个函数时，JavaScript 的解释器并不会计较形参和实参在数量、类型以及顺序上的 区别，**JavaScript 的参数在内部就是用一个数组来表示的**。从这个意义上说，**apply 比 call 的使用 率更高**，我们不必关心具体有多少参数被传入函数，只要用 apply 一股脑地推过去就可以了。 

call 是包装在 apply 上面的一颗语法糖，如果我们明确地知道函数接受多少个参数，而且想 一目了然地表达形参和实参的对应关系，那么也可以用 call 来传送参数。 

当使用 call 或者 apply 的时候，**如果我们传入的第一个参数为 null**，**函数体内的 this 会指 向默认的宿主对象**，在浏览器中则是 window：

```js
    var func=function(a,b,c){
        console.log(this===window);  
    }
    func.apply(null,[1,2,3]);  // true
    func.call(null,1,2,3);  // true
```

但如果是在严格模式下，函数体内的 this 还是为 null：

```javascript
    var func=function(a,b,c){
        "use strict";
        console.log(this===window);  
        console.log(this===null);
    }
    func.apply(null,[1,2,3]);  // false true
    func.call(null,1,2,3);  // false true
```

有时候我们使用 call 或者 apply 的目的不在于指定 this 指向，而是另有用途，比如借用其他对象的方法。那么我们可以传入 null 来代替某个具体的对象：

```javascript
let ans=Math.max.apply(null,[1,2,3,4,5]);
console.log(ans);  //5
```

#### call和apply的用途

##### 1. 改变 this 指向

call 和 apply 最常见的用途是改变函数内部的 this 指向，我们来看个例子：

```html
<script type="text/javascript">
    var obj1={
        name:"Arnold"
    };
    var obj2={
        name:"Alice"
    };

    window.name="window";

    var getName=function(){
        console.log(this.name);
    }

    getName();  //  window
    getName.call(obj1);  //Arnold
    getName.call(obj2);  //Alice
</script>
```

当执行 getName.call( obj1 )这句代码时，getName 函数体内的 this 就指向 obj1 对象，所以此处的

```js
    var getName=function(){
        console.log(this.name);
    }
```

实际上相当于：

```js
	var getName=function(){
        console.log(obj1.name);
    }
```

在实际开发中，**经常会遇到 this 指向被不经意改变的场景**，比如有一个 div 节点，div 节点的 onclick 事件中的 this 本来是指向这个 div 的：

```js
	document.getElementById("div1").onclick=function(){
        console.log(this.id);  // div1
    }
```

假如该事件函数中有一个内部函数 func，在事件内部调用 func 函数时，func 函数体内的 this就指向了 window，而不是我们预期的 div，见如下代码：

```html
<script type="text/javascript">
    window.id="window";
    document.getElementById("div1").onclick=function(){
        console.log(this.id);  // div1
        var func=function(){
            console.log(this.id);  // window
        }
        func();
    };
</script>
```

这时候**我们用 call 来修正 func 函数内的 this，使其依然指向 div**：

```html
<script type="text/javascript">
    window.id="window";
    document.getElementById("div1").onclick=function(){
        console.log(this.id);  // div1
        var func=function(){
            console.log(this.id);  // div1
        }
        func.call(this);
    };
</script>
```

##### 2.  Function.prototype.bind

大部分高级浏览器都实现了内置的 Function.prototype.bind，用来指定函数内部的 this 指向，即使没有原生的 Function.prototype.bind 实现，我们来模拟一个也不是难事，代码如下：

```html
<script type="text/javascript">

Function.prototype.bind=function(context){
    var self=this;  //保存原函数
    return function(){  // 返回一个新的函数
        return self.apply(context,arguments);  // 执行新的函数的时候，会把之前传入的 context当作新函数体内的 this
    }
};

var obj={
    name:"Arnold"
};

var func=function(){
    console.log(this.name);  //Arnold
}.bind(obj);

func();

</script>
```

我们通过 Function.prototype.bind 来“包装”func 函数，并且传入一个对象 context 当作参 数，这个 context 对象就是我们想修正的 this 对象。 

在 Function.prototype.bind 的内部实现中，我们先把 func 函数的引用保存起来，然后返回一 个新的函数。当我们在将来执行 func 函数时，**实际上先执行的是这个刚刚返回的新函数**。在新 函数内部，**self.apply( context, arguments )这句代码才是执行原来的 func 函数**，并且指定 context 对象为 func 函数体内的 this。 

这是一个简化版的 Function.prototype.bind 实现，通常我们还会把它实现得稍微复杂一点， 使得可以往 func 函数中预先填入一些参数：

```js
Function.prototype.bind=function(){
    var self=this;  //保存原函数
    var context=[].shift.call(arguments);  //需要绑定的 this 上下文
    var args=[].slice.call(arguments);  //剩余的参数转成数组
    return function(){  // 返回一个新的函数
        return self.apply(context,[].concat.call(args,[].slice.call(arguments)));  // 执行新的函数的时候，会把之前传入的 context当作新函数体内的 this
        //并且组合两次分别传入的参数，作为新函数的参数
    }
};

var obj={
    name:"Arnold"
};

var func=function(a,b,c,d){
    console.log(this.name);  //Arnold
    console.log([a,b,c,d]);  //[ 1, 2, 3, 4 ]
}.bind(obj,1,2);

func(3,4);
```

##### 3. 借用其他对象的方法

借用方法的**第一种场景是“借用构造函数”**，通过这种技术，可以实现一些类似继承的效果：

```js
var A=function(name){
   this.name=name;
};
var B=function(){
   A.apply(this,arguments);
}

B.prototype.getName=function(){
   return this.name;
}

var b=new B("Alison");
console.log(b.getName());  //Alison
```

借用方法的第二种运用场景跟我们的关系更加密切。 

函数的参数列表 arguments 是一个类数组对象，虽然它也有“下标”，但它**并非真正的数组**， 所以也不能像数组一样，进行排序操作或者往集合里添加一个新的元素。这种情况下，我们**常常 会借用 Array.prototype 对象上的方法**。比如想往 arguments 中添加一个新的元素，通常会借用 Array.prototype.push：

```js
(function(){
   Array.prototype.push.call(arguments,4);
   console.log(arguments);  //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
})(1,2,3);
```

在操作 arguments 的时候，我们经常非常频繁地找 Array.prototype 对象借用方法。 

- 想把 arguments 转成真正的数组的时候，可以借用 Array.prototype.slice 方法；

- 想截去 arguments 列表中的头一个元素时，又可以借用 Array.prototype.shift 方法。

那么这种机制的内 部实现原理是什么呢？我们不妨翻开 V8 的引擎源码，以 Array.prototype.push 为例，看看 V8 引 擎中的具体实现：

```js
function ArrayPush() {
   var n = TO_UINT32( this.length ); // 被 push 的对象的 length
   var m = %_ArgumentsLength(); // push 的参数个数
   for (var i = 0; i < m; i++) {
      this[ i + n ] = %_Arguments( i ); // 复制元素 (1)
   }
   this.length = n + m; // 修正 length 属性的值 (2)
   return this.length;
};
```

通过这段代码可以看到，**Array.prototype.push 实际上是一个属性复制的过程**，把参数按照 下标依次添加到被 push 的对象上面，顺便修改了这个对象的 length 属性。至于被修改的对象是 谁，到底是数组还是类数组对象，这一点并不重要。 

由此可以推断，我们可以把“任意”对象传入 Array.prototype.push：

```js
var a={};

Array.prototype.push.call(a,"first");

console.log(a.length);  //1
console.log(a[0]);  //first
console.log(a);  //{ '0': 'first', length: 1 }
```

这段代码在绝大部分浏览器里都能顺利执行，但由于引擎的内部实现存在差异，如果在低版本的 IE 浏览器中执行，必须显式地给对象 a 设置 length 属性：

```js
var a = {
	length: 0
};
```

前面我们之所以把“任意”两字加了双引号，是因为可以借用 Array.prototype.push 方法的对象还要满足以下两个条件，从 ArrayPush 函数的(1)处和(2)处也可以猜到，这个对象至少还要满足：
- 对象本身要可以存取属性；
- 对象的 length 属性可读写。

**对于第一个条件，对象本身存取属性并没有问题**，但如果借用 Array.prototype.push 方法的 不是一个 object 类型的数据，而是一个 number 类型的数据呢? 我们无法在 number 身上存取其他 数据，那么从下面的测试代码可以发现，一个 number 类型的数据不可能借用到 Array.prototype. push 方法：

```js
var a=1;

Array.prototype.push.call(a,"first");

console.log(a.length);  //undefined
console.log(a[0]);  //undefined
console.log(a);  //1
```

**对于第二个条件，函数的 length 属性就是一个只读的属性，表示形参的个数**，我们尝试把一个函数当作 this 传入 Array.prototype.push：

```js
var func=function(){};

Array.prototype.push.call(func,"first");

console.log(func.length);  //
//TypeError: Cannot assign to read only property 'length' of function 'function(){}'

```



## 闭包和高阶函数

### 闭包

对于 JavaScript 程序员来说，闭包（closure）是一个难懂又必须征服的概念。闭包的形成与变量的作用域以及变量的生存周期密切相关。

#### 变量的作用域

变量的作用域，就是**指变量的有效范围**。我们最常谈到的是在函数中声明的变量作用域。 

当在函数中声明一个变量的时候，**如果该变量前面没有带上关键字 var，这个变量就会成为 全局变量**，这当然是一种容易造成命名冲突的做法。

 另外一种情况是**用 var 关键字在函数中声明变量，这时候的变量即是局部变量**，只有在该函 数内部才能访问到这个变量，在函数外面是访问不到的。代码如下：

```js
var func=function(){
   var a=1;
   console.log(a);
}
func();  //1
console.log(a);  //ReferenceError: a is not defined
```

在 JavaScript 中，函数可以用来创造函数作用域。此时的函数像一层半透明的玻璃，在函数 里面可以看到外面的变量，而在函数外面则无法看到函数里面的变量。这是因为当在函数中搜索 一个变量的时候，如果该函数内并没有声明这个变量，那么此次搜索的过程**会随着代码执行环境 创建的作用域链往外层逐层搜索**，一直搜索到全局对象为止。**变量的搜索是从内到外而非从外到 内的**。 

下面这段包含了嵌套函数的代码，也许能帮助我们加深对变量搜索过程的理解：

```js
var a=1;
var func1=function(){
   var b=2;
   var func2=function(){
      var c=2;
      console.log(a);  // 1
      console.log(b);  //2
   }
   func2();
   console.log(c);  //ReferenceError: c is not defined
}
func1();  //1

```

#### 变量的生存周期

除了变量的作用域之外，另外一个跟闭包有关的概念是变量的生存周期。 

对于全局变量来说，全局变量的生存周期当然是永久的，除非我们主动销毁这个全局变量。 

而对于在函数内用 var 关键字声明的局部变量来说，当退出函数时，这些局部变量即失去了 它们的价值，它们都会随着函数调用的结束而被销毁：

```js
var func=function(){
   var a=1;  // 退出函数后局部变量 a 将被销毁
   console.log(a);
}
func();  //1

```

现在来看看下面这段代码：

```js
var func=function(){
   var a=1;
   return function(){
      a++;
      console.log(a);
   }
};

var f=func();

f();  //  2
f();  //  3
f();  //  4
f();  //  5

```

跟我们之前的推论相反，当退出函数后，局部变量 a 并没有消失，而是似乎一直在某个地方 存活着。这是**因为当执行 var f = func();时，f 返回了一个匿名函数的引用，它可以访问到 func() 被调用时产生的环境，而局部变量 a 一直处在这个环境里**。既然局部变量所在的环境还能被外界 访问，这个局部变量就有了不被销毁的理由。在这里产生了一个闭包结构，局部变量的生命看起 来被延续了。 

利用闭包我们可以完成许多奇妙的工作，下面介绍一个闭包的经典应用。假设页面上有 5 个 div 节点，我们通过循环来给每个 div 绑定 onclick 事件，按照索引顺序，点击第 1 个 div 时弹出 0，点击第 2 个 div 时弹出 1，以此类推。代码如下：

```html
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>

<script type="text/javascript">
    var nodes=document.getElementsByTagName("div");
    for(var i=0,len=nodes.length;i<len;i++){
        nodes[i].onclick=function(){
            console.log(i);
        };
    }
</script>
```

测试这段代码就会发现，无论点击哪个 div，最后弹出的结果都是 5。这是**因为 div 节点的 onclick 事件是被异步触发的**，**当事件被触发的时候，for 循环早已结束，此时变量 i 的值已经是 5**，所以在 div 的 onclick 事件函数中顺着作用域链从内到外查找变量 i 时，查找到的值总是 5。 

**解决方法是在闭包的帮助下，把每次循环的 i 值都封闭起来**。当在事件函数中顺着作用域链 中从内到外查找变量 i 时，会先找到被封闭在闭包环境中的 i，如果有 5 个 div，这里的 i 就分别 是 0,1,2,3,4：

```js
    var nodes=document.getElementsByTagName("div");
    for(var i=0,len=nodes.length;i<len;i++){
        (function(i){
            nodes[i].onclick=function(){
                console.log(i);
            }
        })(i);
    }
```

或使用 let

```js
    var nodes=document.getElementsByTagName("div");
    for(let i=0,len=nodes.length;i<len;i++){
        nodes[i].onclick=function(){
            console.log(i);
        };
    }
```

根据同样的道理，我们还可以编写如下一段代码：

```js
    var Type={};
    for(var i=0,type;type=['String', 'Array', 'Number'][i++];){
        (function(type){
            Type['is'+type]=function(obj){
                return Object.prototype.toString.call(obj)==='[object '+type+']';
            }
        })(type);
    }
    console.log(Type.isArray([]));  //true
    console.log(Type.isString("str"));  //true
```

#### 闭包的更多作用

在实际开发中，闭包的运用非常广泛。

##### 1. 封装变量

闭包可以帮助把一些不需要暴露在全局的变量封装成“私有变量”。假设有一个计算乘积的简单函数：

```js
var mult=function(){
   var a=1;
   for(var i=0;i<arguments.length;i++){
      a=a*arguments[i];
   }
   return a;
};
console.log(mult(1,2,3,4));  //24
```

mult 函数接受一些 number 类型的参数，并返回这些参数的乘积。现在我们觉得对于那些相同的参数来说，每次都进行计算是一种浪费，我们**可以加入缓存机制来提高这个函数的性能**：

```js
var cache={};

var mult=function(){
   var args=Array.prototype.join.call(arguments,",");
   if (cache[args]) {
      return cache[args];
   }
   var a=1;
   for(var i=0;i<arguments.length;i++){
      a=a*arguments[i];
   }
   return cache[args]=a;
};

console.log(mult(1,2,3,4));  //24
console.log(mult(1,2,3,4));  //24
console.log(cache);  //{ '1,2,3,4': 24 }
console.log(mult(1,2,3,4,5));  //120
console.log(cache);  //{ '1,2,3,4': 24, '1,2,3,4,5': 120 }

```

我们看到 cache 这个变量仅仅在 mult 函数中被使用，与其让 cache 变量跟 mult 函数一起平行 地暴露在全局作用域下，**不如把它封闭在 mult 函数内部，这样可以减少页面中的全局变量**，以 避免这个变量在其他地方被不小心修改而引发错误。代码如下：

```js
var mult=(function(){
   var cache={};
   return function(){
      console.log(cache);
      var args=Array.prototype.join.call(arguments,",");
      if (cache[args]) {
         return cache[args];
      }
      var a=1;
      for(var i=0;i<arguments.length;i++){
         a=a*arguments[i];
      }
      return cache[args]=a;
   }
})();

console.log(mult(1,2,3,4));  //24
console.log(mult(1,2,3,4));  //24
console.log(mult(1,2,3,4,5));  //120

```

提炼函数是代码重构中的一种常见技巧。如果在一个大函数中有一些代码块能够独立出来， 我们常常把这些代码块封装在独立的小函数里面。独立出来的小函数有助于代码复用，如果这些 小函数有一个良好的命名，它们本身也起到了注释的作用。**如果这些小函数不需要在程序的其他 地方使用，最好是把它们用闭包封闭起来。**代码如下：

```js
var mult=(function(){
   var cache={};
   var calculate=function(){
      //封闭 calculate 函数
      var a=1;
      for(var i=0;i<arguments.length;i++){
         a=a*arguments[i];
      }
      return a;
   };
   return function(){
      var args=Array.prototype.join.call(arguments,",");
      if (args in cache) {
         return cache[args];
      }
      return cache[args]=calculate.apply(null,arguments);
   }
})();

console.log(mult(1,2,3,4));  //24
console.log(mult(1,2,3,4));  //24
console.log(mult(1,2,3,4,5));  //120

```

#####  2. 延续局部变量的寿命

img 对象经常用于进行数据上报，如下所示：

```js
var report=function(src){
    var img=new Image();
    img.src=src;
};
report("https://v3.cn.vuejs.org/");

```

但是通过查询后台的记录我们得知，因为一些低版本浏览器的实现存在 bug，在这些浏览器 下使用 report 函数进行数据上报会丢失 30%左右的数据，也就是说，report 函数并不是每一次 都成功发起了 HTTP 请求。丢失数据的原因是 img 是 report 函数中的局部变量，**当 report 函数的 调用结束后，img 局部变量随即被销毁，而此时或许还没来得及发出 HTTP 请求，所以此次请求 就会丢失掉**。 

现在我们把 img 变量用闭包封闭起来，便能解决请求丢失的问题：

```js
var report=(function(src){
    var imgs=[];
    return function(){
        var img=new Image();
        imgs.push(img);
        img.src=src;
    }
    
})();
report("http:/ss/fasta_protein.png");
```

#### 闭包和面向对象设计

过程与数据的结合是形容面向对象中的“对象”时经常使用的表达。对象以方法的形式包含 了过程，而闭包则是在过程中以环境的形式包含了数据。通常用面向对象思想能实现的功能，用 闭包也能实现。反之亦然。在 JavaScript 语言的祖先 Scheme 语言中，甚至都没有提供面向对象 的原生设计，但可以使用闭包来实现一个完整的面向对象系统。 

下面来看看这段跟闭包相关的代码：

```js
var extent=function(){
   var value=0;
   return {
      call:function(){
         value++;
         console.log(value);
      }
   }
};

var extent=extent();
extent.call();  //  1
extent.call();  //  2
extent.call();  //  3
```

如果换成面向对象的写法，就是：

```js
var extent={
   value:0,
   call:function(){
      this.value++;
      console.log(this.value);
   }
};

extent.call();  //  1
extent.call();  //  2
extent.call();  //  3
```

或者

```js
var Extent=function(){
   this.value=0;
};
Extent.prototype.call=function(){
   this.value++;
   console.log(this.value);
};

var extent=new Extent();
extent.call();  //  1
extent.call();  //  2
extent.call();  //  3
```

#### 用闭包实现命令模式

在完成闭包实现的命令模式之前，我们先用**面向对象的方式**来编写一段命令模式的代码。虽 然还没有进入设计模式的学习，但这个作为演示作用的命令模式结构非常简单，不会对我们的理 解造成困难，代码如下：

```html
<button id="execute">点击我执行命令</button>
<button id="undo">点击我执行命令</button>

<script type="text/javascript">
//面向对象的方式
var Tv={
    open:function(){
        console.log("打开电视机");
    },
    close:function(){
        console.log("关闭电视机");
    }
};
var OpenTvCommand=function(receiver){
    this.receiver=receiver;
};

OpenTvCommand.prototype.execute=function(){
    this.receiver.open();  //执行命令，打开电视机
};
OpenTvCommand.prototype.undo=function(){
    this.receiver.close();  //撤销命令，关闭电视机
};

var setCommand=function(command){
    document.getElementById("execute").onclick=function(){
        command.execute();  //输出：打开电视机
    }
    document.getElementById("undo").onclick=function(){
        command.undo();  //输出：关闭电视机
    }
};

setCommand(new OpenTvCommand(Tv));

</script>
```

**命令模式的意图是把请求封装为对象，从而分离请求的发起者和请求的接收者（执行者）之 间的耦合关系**。在命令被执行之前，可以预先往命令对象中植入命令的接收者。 

但在 JavaScript 中，函数作为一等对象，本身就可以四处传递，用函数对象而不是普通对象 来封装请求显得更加简单和自然。如果需要往函数对象中预先植入命令的接收者，那么闭包可以 完成这个工作。**在面向对象版本的命令模式中，预先植入的命令接收者被当成对象的属性保存起 来**；而**在闭包版本的命令模式中，命令接收者会被封闭在闭包形成的环境中**，代码如下：

```js
//闭包版本
var Tv={
    open:function(){
        console.log("打开电视机");
    },
    close:function(){
        console.log("关闭电视机");
    }
};

var createCommand=function(receiver){
    var execute=function(){
        return receiver.open();  //执行命令，打开电视机
    };
    var undo=function(){
        return receiver.close();  //执行命令，关闭电视机
    };
    return {
        execute:execute,
        undo:undo
    }
};

var setCommand=function(command){
    document.getElementById("execute").onclick=function(){
        command.execute();  //输出：打开电视机
    }
    document.getElementById("undo").onclick=function(){
        command.undo();  //输出：关闭电视机
    }
};

setCommand(createCommand(Tv));
```

#### 闭包与内存管理

闭包是一个非常强大的特性，但人们对其也有诸多误解。一种耸人听闻的说法是闭包会造成 内存泄露，所以要尽量减少闭包的使用。 

局部变量本来应该在函数退出的时候被解除引用，**但如果局部变量被封闭在闭包形成的环境 中，那么这个局部变量就能一直生存下去。从这个意义上看，闭包的确会使一些数据无法被及时 销毁**。

使用闭包的一部分原因是我们选择主动把一些变量封闭在闭包中，因为可能在以后还需要 使用这些变量，把这些变量放在闭包中和放在全局作用域，对内存方面的影响是一致的，这里并 不能说成是内存泄露。**如果在将来需要回收这些变量，我们可以手动把这些变量设为 null。** 

跟闭包和内存泄露有关系的地方是，**使用闭包的同时比较容易形成循环引用**，如果闭包的作 用域链中保存着一些 DOM 节点，这时候就有可能造成内存泄露。但这本身并非闭包的问题，也 并非 JavaScript 的问题。在 IE 浏览器中，由于 BOM 和 DOM 中的对象是使用 C++以 COM 对象 的方式实现的，而 COM 对象的垃圾收集机制采用的是引用计数策略。**在基于引用计数策略的垃圾回收机制中，如果两个对象之间形成了循环引用，那么这两个对象都无法被回收**，但**循环引用 造成的内存泄露在本质上也不是闭包造成的**。 

同样，如果要解决循环引用带来的内存泄露问题，我们只需要把循环引用中的变量设为 null 即可。**将变量设置为 null 意味着切断变量与它此前引用的值之间的连接。当垃圾收集器下次运 行时，就会删除这些值并回收它们占用的内存**。

### 高阶函数

高阶函数是指至少满足下列条件之一的函数。
- 函数可以作为参数被传递；
- 函数可以作为返回值输出。

JavaScript 语言中的函数显然满足高阶函数的条件，在实际开发中，无论是将函数当作参数 传递，还是让函数的执行结果返回另外一个函数，这两种情形都有很多应用场景，下面就列举一 些高阶函数的应用场景。

#### 函数作为参数传递

把函数当作参数传递，这代表我们可以抽离出一部分容易变化的业务逻辑，把这部分业务逻 辑放在函数参数中，这样一来可以分离业务代码中变化与不变的部分。其中一个重要应用场景就 是常见的回调函数。

##### 1. 回调函数

在 ajax 异步请求的应用中，回调函数的使用非常频繁。当我们想在 ajax 请求返回之后做一 些事情，但又并不知道请求返回的确切时间时，最常见的方案就是把 callback 函数当作参数传入 发起 ajax 请求的方法中，待请求完成之后执行 callback 函数：

```js
var getUserInfo = function( userId, callback ){
   $.ajax( 'http://xxx.com/getUserInfo?' + userId, function( data ){
      if ( typeof callback === 'function' ){
         callback( data );
      }
   });
}
getUserInfo( 13157, function( data ){
   alert ( data.userName );
});
```

回调函数的应用不仅只在异步请求中，**当一个函数不适合执行一些请求时，我们也可以把这 些请求封装成一个函数，并把它作为参数传递给另外一个函数，“委托”给另外一个函数来执行**。 

比如，我们想在页面中创建 100 个 div 节点，然后把这些 div 节点都设置为隐藏。下面是一种编写代码的方式：

```js
var appendDiv=function(){
   for(var i=0;i<100;i++){
      var div=document.createElement("div");
      div.innerHTML=i;
      document.body.appendChild(div);
      div.style.display="none";
   }
}
appendDiv();
```

把 div.style.display = 'none'的逻辑硬编码在 appendDiv 里显然是不合理的，appendDiv 未免 有点个性化，成为了一个难以复用的函数，并不是每个人创建了节点之后就希望它们立刻被隐藏。 

于是**我们把 div.style.display = 'none'这行代码抽出来，用回调函数的形式传入 appendDiv 方法**：

```js
var appendDiv=function(callback){
   for(var i=0;i<100;i++){
      var div=document.createElement("div");
      div.innerHTML=i;
      document.body.appendChild(div);
      if (typeof callback==="function") {
         callback(div);
      }
   }
}
appendDiv(function(node){
   node.style.display="none";
});
```

可以看到，**隐藏节点的请求实际上是由客户发起的，但是客户并不知道节点什么时候会创 建好，于是把隐藏节点的逻辑放在回调函数中，“委托”给 appendDiv 方法**。appendDiv 方法当 然知道节点什么时候创建好，所以在节点创建好的时候，appendDiv 会执行之前客户传入的回 调函数。

##### 2.  Array.prototype.sort

Array.prototype.sort 接受一个函数当作参数，这个函数里面封装了数组元素的排序规则。从 Array.prototype.sort 的使用可以看到，我们的目的是对数组进行排序，这是不变的部分；而使 用 什 么 规 则 去 排 序 ， 则 是 可 变 的 部 分 。 **把 可 变 的 部 分 封 装 在 函 数 参 数 里 ， 动 态 传 入 Array.prototype.sort，使 Array.prototype.sort 方法成为了一个非常灵活的方法**，代码如下：

```js
//从小到大排列
let result=[1,4,3,2].sort(function(a,b){
   return a-b;
});
console.log(result);

//从大到小排列
result=[1,4,3,2].sort(function(a,b){
   return b-a;
});
console.log(result);
```

#### 函数作为返回值输出

相比把函数当作参数传递，函数当作返回值输出的应用场景也许更多，也更能体现函数式编程的巧妙。让函数继续返回一个可执行的函数，意味着运算过程是可延续的。
##### 1. 判断数据的类型

我们来看看这个例子，判断一个数据是否是数组，在以往的实现中，可以基于鸭子类型的概 念来判断，比如判断这个数据有没有 length 属性，有没有 sort 方法或者 slice 方法等。但更好 的方式是用 Object.prototype.toString 来计算。Object.prototype.toString.call( obj )返回一个 字 符 串 ， 比 如 Object.prototype.toString.call( [1,2,3] ) 总 是 返 回 "[object Array]" ， 而 Object.prototype.toString.call( “str”)总是返回"[object String]"。所以我们可以编写一系列的 isType 函数。代码如下：

```js
var isString=function(obj){
   return Object.prototype.toString.call(obj)==="[object String]";
};
var isArray=function(obj){
   return Object.prototype.toString.call(obj)==="[object Array]";
};
var isNumber=function(obj){
   return Object.prototype.toString.call(obj)==="[object Number]";
};
```

我们发现，这些函数的大部分实现都是相同的，不同的只是 Object.prototype.toString. call( obj )返回的字符串。为了避免多余的代码，我们尝试把这些字符串作为参数提前值入 isType 函数。代码如下：

```js
var isType=function(type){
   return function(obj){
      return Object.prototype.toString.call(obj)==='[object '+ type +']';
   }
};
var isString=isType("String");
var isArray=isType("Array");
var isNumber=isType("Number");

console.log(isArray([12,3,4]));

```

我们还可以用循环语句，来批量注册这些 isType 函数：

```js
var Type={};
for(var i=0,type;type=[ 'String', 'Array', 'Number' ][ i++ ];){
   (function(type){
      Type['is'+type]=function(obj){
         return Object.prototype.toString.call(obj)==='[object '+ type +']';
      }
   })(type);
};

console.log(Type.isArray([12,3,4]));
console.log(Type.isNumber([12,3,4]));

```

##### 2. getSingle

下面是一个单例模式的例子，在第三部分设计模式的学习中，我们将进行更深入的讲解，这里暂且只了解其代码实现：

```js
var getSingle=function(fn){
   var ret;
   return function(){
      return ret || (ret=fn.apply(this,arguments));
   };
};
```

这个高阶函数的例子，**既把函数当作参数传递，又让函数执行后返回了另外一个函数**。我们可以看看 getSingle 函数的效果：

```js
var getScript=getSingle(function(){
   return document.createElement("script");
});

var script1=getScript();
var script2=getScript();
console.log(script1===script2);  //true
```

#### 高阶函数实现AOP

AOP（面向切面编程）的**主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来**，这些 跟业务逻辑无关的功能通常包括日志统计、安全控制、异常处理等。把这些功能抽离出来之后， 再通过“动态织入”的方式掺入业务逻辑模块中。这样做的好处首先是可以保持业务逻辑模块的纯净和高内聚性，其次是可以很方便地复用日志统计等功能模块。

在 Java 语言中，可以通过反射和动态代理机制来实现 AOP 技术。而在 JavaScript 这种动态 语言中，AOP 的实现更加简单，这是 JavaScript 与生俱来的能力。 

通常，在 JavaScript 中实现 AOP，**都是指把一个函数“动态织入”到另外一个函数之中**，具 体的实现技术有很多，本节我们通过扩展 Function.prototype 来做到这一点。代码如下：

```js
Function.prototype.before=function(beforefn){
   var __self=this;  // 保存原函数的引用
   return function(){  // 返回包含了原函数和新函数的"代理"函数
      beforefn.apply(this,arguments);  // 执行新函数，修正 this
      return __self.apply(this,arguments);  // 执行原函数
   }
};

Function.prototype.after=function(afterfn){
   var __self=this;  // 保存原函数的引用
   return function(){  //
      var ret=__self.apply(this,arguments);
      afterfn.apply(this,arguments);  // 
      return ret;
   }
};

var func=function(){
   console.log(2);
}

func=func.before(function(){
   console.log(1);
}).after(function(){
   console.log(3);
});

func();
```

我们把负责打印数字 1 和打印数字 3 的两个函数通过 AOP 的方式动态植入 func 函数。通过执行上面的代码，我们看到控制台顺利地返回了执行结果 1、2、3。

这种使用 AOP 的方式来给函数添加职责，也是 JavaScript 语言中一种非常特别和巧妙的装饰者模式实现。这种装饰者模式在实际开发中非常有用。

#### 高阶函数的其他应用

##### 1. currying

首先我们讨论的是**函数柯里化**（function currying）。currying 的概念最早由俄国数学家 Moses Schönfinkel 发明，而后由著名的数理逻辑学家 Haskell Curry 将其丰富和发展，currying 由此得名。 

**currying 又称部分求值**。一个 currying 的函数首先会接受一些参数，接受了这些参数之后， 该函数并不会立即求值，而是继续返回另外一个函数，刚才传入的参数在函数形成的闭包中被保 存起来。待到函数被真正需要求值的时候，之前传入的所有参数都会被一次性用于求值。 

从字面上理解 currying 并不太容易，我们来看下面的例子。 假设我们要编写一个计算每月开销的函数。在每天结束之前，我们都要记录今天花掉了多少 钱。代码如下：

```js
var monthlyCost=0;
var cost=function(money){
   monthlyCost+=money;
};

cost( 100 ); // 第 1 天开销
cost( 200 ); // 第 2 天开销
cost( 300 ); // 第 3 天开销
//cost( 700 ); // 第 30 天开销

console.log(monthlyCost);
```

通过这段代码可以看到，每天结束后我们都会记录并计算到今天为止花掉的钱。但我们其实 并不太关心每天花掉了多少钱，而只想知道到月底的时候会花掉多少钱。也就是说，实际上只需 要在月底计算一次。 

如果在每个月的前 29 天，我们都只是保存好当天的开销，直到第 30 天才进行求值计算，这 样就达到了我们的要求。虽然下面的 cost 函数还不是一个 currying 函数的完整实现，但有助于 我们了解其思想：

```js
var monthlyCost=0;
var cost=(function(){
   var args=[];
   return function(){
      if (arguments.length===0) {
         var money=0;
         for(var i=0;i<args.length;i++){
            money+=args[i];
         }
         return money;
      }else{
         [].push.apply(args,arguments);
      }
   }
})();

cost( 100 ); // 未真正求值
cost( 200 ); // 未真正求值
cost( 300 ); // 未真正求值

console.log(cost());  //600
```

接下来我们编写一个通用的 function currying(){}，function currying(){}接受一个参数，即 将要被 currying 的函数。在这个例子里，这个函数的作用遍历本月每天的开销并求出它们的总和。 代码如下：

```js
var currying=function(fn){
   var args=[];
   return function(){
      if (arguments.length===0) {
         return fn.apply(this,args);
      }else{
         [].push.apply(args,arguments);
         return arguments.callee;
      }
   }
};
var cost=(function(){
   var money=0;
   return function(){
      for(var i=0;i<arguments.length;i++){
         money+=arguments[i];
      }
      return money;
   }
})();

var cost=currying(cost);  //转化成 currying 函数
cost( 100 ); // 未真正求值
cost( 200 ); // 未真正求值
cost( 300 ); // 未真正求值

console.log(cost());  //600
```

至此，我们完成了一个 currying 函数的编写。当调用 cost()时，如果明确地带上了一些参数， 表示此时并不进行真正的求值计算，而是把这些参数保存起来，此时让 cost 函数返回另外一个 函数。只有当我们以不带参数的形式执行 cost()时，才利用前面保存的所有参数，真正开始进行 求值计算。

##### 2. uncurrying

在 JavaScript 中，**当我们调用对象的某个方法时，其实不用去关心该对象原本是否被设计为 拥有这个方法**，这是动态类型语言的特点，也是常说的鸭子类型思想。 

同理，**一个对象也未必只能使用它自身的方法**，那么有什么办法可以让对象去借用一个原本 不属于它的方法呢？ 

答案对于我们来说很简单，**call 和 apply 都可以完成这个需求**：

```js
var obj1={
   name:"Arnold"
};
var obj2={
   getName:function(){
      return this.name;
   }
};

console.log(obj2.getName.call(obj1));  //Arnold
```

我们常常让类数组对象去借用 Array.prototype 的方法，这是 call 和 apply 最常见的应用场景之一：

```js
(function(){
   Array.prototype.push.call(arguments,4);  //arguments 借用 Array.prototype.push 方法
   console.log(arguments);  //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
})(1,2,3);
```

在我们的预期中，Array.prototype 上的方法原本只能用来操作 array 对象。**但用 call 和 apply 可以把任意对象当作 this 传入某个方法，这样一来，方法中用到 this 的地方就不再局限于原来 规定的对象**，而是加以泛化并得到更广的适用性。 

那么有没有办法把泛化 this 的过程提取出来呢？本小节讲述的 uncurrying 就是用来解决这 个问题的。uncurrying 的话题来自 JavaScript 之父 Brendan Eich 在 2011 年发表的一篇 Twitter。以 下代码是 uncurrying 的实现方式之一：

```js
Function.prototype.uncurrying=function(){
   var self=this;
   return function(){
      var obj=Array.prototype.shift.call(arguments);
      return self.apply(obj,arguments);
   };
};
```

在讲解这段代码的实现原理之前，我们先来瞧瞧它有什么作用。

在类数组对象 arguments 借用 Array.prototype 的方法之前，先把 Array.prototype.push.call这句代码转换为一个通用的 push 函数：

```js
var push=Array.prototype.push.uncurrying();
(function(){
   push(arguments,4);
   console.log(arguments);  //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
})(1,2,3);
```

通过 uncurrying 的方式，Array.prototype.push.call 变成了一个通用的 push 函数。这样一来， push 函数的作用就跟 Array.prototype.push 一样了，同样不仅仅局限于只能操作 array 对象。而 对于使用者而言，调用 push 函数的方式也显得更加简洁和意图明了。 

我们还**可以一次性地把 Array.prototype 上的方法“复制”到 array 对象上**，同样这些方法可 操作的对象也不仅仅只是 array 对象：

```js
Function.prototype.uncurrying=function(){
   var self=this;
   return function(){
      var obj=Array.prototype.shift.call(arguments);
      return self.apply(obj,arguments);
   };
};

for ( var i = 0, fn, ary = [ 'push', 'shift', 'forEach' ]; fn = ary[ i++ ]; ){
   Array[fn]=Array.prototype[fn].uncurrying();
}

var obj={
   "length":3,
   "0":1,
   "1":2,
   "2":3
};

Array.push( obj, 4 ); // 向对象中添加一个元素
console.log( obj.length ); // 输出：4
var first = Array.shift( obj ); // 截取第一个元素
console.log( first ); // 输出：1
console.log( obj ); // 输出：{0: 2, 1: 3, 2: 4, length: 3}
Array.forEach( obj, function( i, n ){
   console.log( n ); // 分别输出：0, 1, 2
});
```

甚至 Function.prototype.call 和 Function.prototype.apply 本身也可以被 uncurrying，不过这没有实用价值，只是使得对函数的调用看起来更像 JavaScript 语言的前身 Scheme：

```js
Function.prototype.uncurrying=function(){
   var self=this;
   return function(){
      var obj=Array.prototype.shift.call(arguments);
      return self.apply(obj,arguments);
   };
};

var call=Function.prototype.call.uncurrying();
var fn=function(name){
   console.log(name);
};
call(fn,window,"Arnold");  //Arnold

var apply = Function.prototype.apply.uncurrying();
var fn2 = function( name ){
    console.log( this.name ); // 输出："sven"
    console.log( arguments ); // 输出: [1, 2, 3]
};
apply( fn2, { name: 'sven' }, [ 1, 2, 3 ] );
```

目 前 我 们 已 经 给 出 了 Function.prototype.uncurrying 的 一 种 实 现 。 现 在 来 分 析 调 用Array.prototype.push.uncurrying()这句代码时发生了什么事情：

```js
Function.prototype.uncurrying = function () {
	var self = this; // self 此时是 Array.prototype.push
	return function() {
		var obj = Array.prototype.shift.call( arguments );
        // obj 是{
        // "length": 1,
        // "0": 1
        // }
        // arguments 对象的第一个元素被截去，剩下[2]
		return self.apply( obj, arguments );
		// 相当于 Array.prototype.push.apply( obj, 2 )
};
};

var push = Array.prototype.push.uncurrying();

var obj = {
    "length": 1,
    "0": 1
};
push( obj, 2 );
console.log( obj ); // 输出：{0: 1, 1: 2, length: 2}
```

除了刚刚提供的代码实现，下面的代码是 uncurrying 的另外一种实现方式：

```js
Function.prototype.uncurrying=function(){
   var self=this;
   return function(){
      return Function.prototype.call.apply(self,arguments);
   }
};
```

##### 3. 函数节流

JavaScript 中的函数大多数情况下都是由用户主动调用触发的，除非是函数本身的实现不合 理，否则我们一般不会遇到跟性能相关的问题。**但在一些少数情况下，函数的触发不是由用户直 接控制的。在这些场景下，函数有可能被非常频繁地调用，而造成大的性能问题**。下面将列举一 些这样的场景。

###### (1) 函数被频繁调用的场景

- window.onresize 事件。我们给 window 对象绑定了 resize 事件，当浏览器窗口大小被拖动 而改变的时候，这个事件触发的频率非常之高。如果我们在 window.onresize 事件函数里 有一些跟 DOM 节点相关的操作，而跟 DOM 节点相关的操作往往是非常消耗性能的，这 时候浏览器可能就会吃不消而造成卡顿现象。 
- mousemove 事件。同样，如果我们给一个 div 节点绑定了拖曳事件（主要是 mousemove），当 div 节点被拖动的时候，也会频繁地触发该拖曳事件函数。 
- 上传进度。微云的上传功能使用了公司提供的一个浏览器插件。该浏览器插件在真正开 始上传文件之前，会对文件进行扫描并随时通知 JavaScript 函数，以便在页面中显示当前 的扫描进度。但该插件通知的频率非常之高，大约一秒钟 10 次，很显然我们在页面中不 需要如此频繁地去提示用户。

###### (2) 函数节流的原理

我们整理上面提到的三个场景，发现它们面临的共同问题是函数被触发的频率太高。 

比如我们在 window.onresize 事件中要打印当前的浏览器窗口大小，在我们通过拖曳来改变 窗口大小的时候，打印窗口大小的工作 1 秒钟进行了 10 次。而我们实际上只需要 2 次或者 3 次。 这就需要我们按时间段来忽略掉一些事件请求，比如确保在 500ms 内只打印一次。很显然，我们 可以借助 setTimeout 来完成这件事情。

###### (3) 函数节流的代码实现

关于函数节流的代码实现有许多种，下面的 throttle 函数的原理是，**将即将被执行的函数用 setTimeout 延迟一段时间执行。如果该次延迟执行还没有完成，则忽略接下来调用该函数的请求。** throttle 函数接受 2 个参数，第一个参数为需要被延迟执行的函数，第二个参数为延迟执行的时 间。具体实现代码如下：

```js
var throttle=function(fn,interval){
   var __self=fn,  // 保存需要被延迟执行的函数引用
      timer,  // 定时器
      firstTime=true;  //是否是第一次调用
   return function(){
      var args=arguments,__me=this;
      if (firstTime) {  // 如果是第一次调用，不需延迟执行
         __self.apply(__me,args);
         return firstTime=false;
      }
      if (timer) {  // 如果定时器还在，说明前一次延迟执行还没有完成
         return false;
      }
      timer=setTimeout(function(){  // 延迟一段时间执行
         clearTimeout(timer);
         timer=null;
         __self.apply(__me,args);
      },interval || 500)
   };
};

window.onresize=throttle(function(){
   console.log(1);
},500);
```

##### 4. 分时函数

在前面关于函数节流的讨论中，我们提供了一种限制函数被频繁调用的解决方案。

下面我们 将遇到另外一个问题，某些函数确实是用户主动调用的，但因为一些客观的原因，这些函数会严 重地影响页面性能。 

一个例子是创建 WebQQ 的 QQ 好友列表。列表中通常会有成百上千个好友，如果一个好友 用一个节点来表示，当我们在页面中渲染这个列表的时候，可能要一次性往页面中创建成百上千 个节点。 

在短时间内往页面中大量添加 DOM 节点显然也会让浏览器吃不消，我们看到的结果往往就 是浏览器的卡顿甚至假死。代码如下：

```js
var arr=[];

for(var i=0;i<1000;i++){
    arr.push(i);
}

var renderFriendList=function(data){
    for ( var i = 0;i<data.length; i++ ){
        var div = document.createElement( 'div' );
        div.innerHTML = i;
        document.body.appendChild( div );
    }
};

renderFriendList(arr);
```

这个问题的解决方案之一是下面的 timeChunk 函数，timeChunk 函数让创建节点的工作分批进 行，比如把 1 秒钟创建 1000 个节点，改为每隔 200 毫秒创建 8 个节点。 

timeChunk 函数接受 3 个参数，第 1 个参数是创建节点时需要用到的数据，第 2 个参数是封装了创建节点逻辑的函数，第 3 个参数表示每一批创建的节点数量。代码如下：

```js
var timeChunk=function(arr,fn,count){
    var obj,t;
    var len=arr.length;
    var start=function(){
        for(var i=0;i<Math.min(count || 1,arr.length);i++){
            var obj=arr.shift();
            fn(obj);
        }
    };
    return function(){
        t=setInterval(function(){
            if (arr.length===0) {  // 如果全部节点都已经被创建好
                return clearInterval(t);
            }
            start();
        },200);  // 分批执行的时间间隔，也可以用参数的形式传入
    };
};
```

最后我们进行一些小测试，假设我们有 1000 个好友的数据，我们利用 timeChunk 函数，每一批只往页面中创建 8 个节点：

```js
var arr=[];

for(var i=0;i<1000;i++){
    arr.push(i);
}

var renderFriendList=timeChunk(arr,function(n){
    var div = document.createElement( 'div' );
    div.innerHTML = n;
    document.body.appendChild( div );
},8);

renderFriendList();
```

##### 5. 惰性加载函数

在 Web 开发中，因为浏览器之间的实现差异，一些嗅探工作总是不可避免。比如我们需要一个在各个浏览器中能够通用的事件绑定函数 addEvent，**常见的写法如下**：

```js
var addEvent = function( elem, type, handler ){
   if ( window.addEventListener ){
      return elem.addEventListener( type, handler, false );
   }
   if ( window.attachEvent ){
      return elem.attachEvent( 'on' + type, handler );
   }
};

```

这个函数的缺点是，当它每次被调用的时候都会执行里面的 if 条件分支，虽然执行这些 if 分支的开销不算大，但也许有一些方法可以让程序避免这些重复的执行过程。 

第二种方案是这样，**我们把嗅探浏览器的操作提前到代码加载的时候，在代码加载的时候就 立刻进行一次判断**，以便让 addEvent 返回一个包裹了正确逻辑的函数。代码如下：

```js
var addEvent=(function(){
    if (window.addEventListener) {
        return function(elem,type,handler){
            elem.addEventListener(type,handler,false);
        }
    }
    if (window.attachEvent) {
        return function(elem,type,handler){
            elem.attachEvent('on'+type,handler);
        }
    }
})();
```

目前的 addEvent 函数依然有个缺点，也许我们从头到尾都没有使用过 addEvent 函数，这样看 来，前一次的浏览器嗅探就是完全多余的操作，而且这也会稍稍延长页面 ready 的时间。 

第三种方案即是**我们将要讨论的惰性载入函数方案**。此时 addEvent 依然被声明为一个普通函 数，在函数里依然有一些分支判断。但是在第一次进入条件分支之后，在函数内部会重写这个函 数，重写之后的函数就是我们期望的 addEvent 函数，在下一次进入 addEvent 函数的时候，addEvent 函数里不再存在条件分支语句：

```html
<div id="div1">点我绑定事件</div>
```

```js
var addEvent=function(elem,type,handler){
    if (window.addEventListener) {
        addEvent=function(elem,type,handler){
            elem.addEventListener(type,handler,false);
        }
    }else if (window.attachEvent) {
        addEvent=function(elem,type,handler){
            elem.attachEvent('on'+type,handler);
        }
    }
    addEvent(elem,type,handler);
};

var div = document.getElementById( 'div1' );
addEvent( div, 'click', function(){
    console.log(1);
});

addEvent( div, 'click', function(){
    console.log(2);
});
```



# 设计模式



## 单例模式

单例模式的定义是：**保证一个类仅有一个实例，并提供一个访问它的全局访问点。** 

单例模式是一种常用的模式，有一些对象我们往往只需要一个，比如线程池、全局缓存、浏 览器中的 window 对象等。在 JavaScript 开发中，单例模式的用途同样非常广泛。试想一下，当我 们单击登录按钮的时候，页面中会出现一个登录浮窗，而这个登录浮窗是唯一的，无论单击多少 次登录按钮，这个浮窗都只会被创建一次，那么这个登录浮窗就适合用单例模式来创建。

### 实现单例模式

要实现一个标准的单例模式并不复杂，无非是用一个变量来标志当前是否已经为某个类创建过对象，如果是，则在下一次获取该类的实例时，直接返回之前创建的对象。代码如下：

```js
var Singleton=function(name){
   this.name=name;
}

Singleton.instance=null;

Singleton.prototype.getName=function(){
   console.log(this.name);
}
Singleton.getInstance=function(name){
   if (!this.instance) {
      this.instance=new Singleton(name);
   }
   return this.instance;
}

var a=Singleton.getInstance("Alison");
var b=Singleton.getInstance("Arnold");

console.log(a===b);  //true
```

或者：

```js
var Singleton=function(name){
   this.name=name;
}

Singleton.prototype.getName=function(){
   console.log(this.name);
}
Singleton.getInstance=(function(){
   var instance=null;
   return function(name){
      if (!instance) {
         instance=new Singleton(name);
      }
      return instance;
   }
   
})();
```

我们通过 Singleton.getInstance 来获取 Singleton 类的唯一对象，这种方式相对简单，**但有 一个问题，就是增加了这个类的“不透明性”**，**Singleton 类的使用者必须知道这是一个单例类**， 跟以往通过 new XXX 的方式来获取对象不同，这里偏要使用 Singleton.getInstance 来获取对象。 

接下来顺便进行一些小测试，来证明这个单例类是可以信赖的：

```
var a=Singleton.getInstance("Alison");
var b=Singleton.getInstance("Arnold");

console.log(a===b);  //true
```

### 透明的单例模式

我们现在的目标是实现一个“透明”的单例类，用户从这个类中创建对象的时候，可以像使 用其他任何普通类一样。在下面的例子中，我们将使用 CreateDiv 单例类，它的作用是负责在页 面中创建唯一的 div 节点，代码如下：

```js
var CreateDiv=(function(){
    var instance;
    var CreateDiv=function(html){
        if (instance) {
            return instance;
        }
        this.html=html;
        this.init();
        return instance=this;
    };
    CreateDiv.prototype.init=function(){
        var div=document.createElement("div");
        div.innerHTML=this.html;
        document.body.appendChild(div);
    };
    return CreateDiv;
})();

var a=new CreateDiv("div1");
var b=new CreateDiv("div2");
console.log(a===b);  //true
```

虽然现在完成了一个透明的单例类的编写，但它同样有一些缺点。

为了把 instance 封装起来，我们使用了自执行的匿名函数和闭包，并且让这个匿名函数返回真正的 Singleton 构造方法，这增加了一些程序的复杂度，阅读起来也不是很舒服。

观察现在的 Singleton 构造函数：

```js
    var CreateDiv=function(html){
        if (instance) {
            return instance;
        }
        this.html=html;
        this.init();
        return instance=this;
    };
```

在这段代码中，CreateDiv 的构造函数实际上负责了两件事情。第一是创建对象和执行初始 化 init 方法，第二是保证只有一个对象。虽然我们目前还没有接触过“单一职责原则”的概念， 但可以明确的是，这是一种不好的做法，至少这个构造函数看起来很奇怪。 

假设我们某天需要利用这个类，在页面中创建千千万万的 div，即要让这个类从单例类变成 一个普通的可产生多个实例的类，那我们必须得改写 CreateDiv 构造函数，把控制创建唯一对象 的那一段去掉，这种修改会给我们带来不必要的烦恼。

### 用代理实现单例模式

现在我们通过引入代理类的方式，来解决上面提到的问题。

我们依然使用 4.2 节中的代码，首先在 CreateDiv 构造函数中，把负责管理单例的代码移除出去，使它成为一个普通的创建 div 的类：

```js
var CreateDiv=function(html){
    this.html=html;
    this.init();
};
CreateDiv.prototype.init=function(){
    var div=document.createElement("div");
    div.innerHTML=this.html;
    document.body.appendChild(div);
};
```

接下来引入代理类 proxySingletonCreateDiv：

```js
var ProxySingltonCreateDiv=(function(){
    var instance;
    return function(html){
        if (!instance) {
            instance=new CreateDiv(html);
        }
        return instance;
    }
})();

var a=new ProxySingltonCreateDiv("div1");
var b=new ProxySingltonCreateDiv("div2");
console.log(a===b);  //true
```

通过引入代理类的方式，我们同样完成了一个单例模式的编写，跟之前不同的是，**现在我们 把负责管理单例的逻辑移到了代理类 proxySingletonCreateDiv 中**。这样一来，**CreateDiv 就变成了 一个普通的类**，它跟 proxySingletonCreateDiv 组合起来可以达到单例模式的效果。 

本例是缓存代理的应用之一，在第 6 章中，我们将继续了解代理带来的好处。

### JavaScript 中的单例模式

前面提到的几种单例模式的实现，更多的是接近传统面向对象语言中的实现，单例对象从 “类”中创建而来。在以类为中心的语言中，这是很自然的做法。比如在 Java 中，如果需要某个 对象，就必须先定义一个类，对象总是从类中创建而来的。 

但 JavaScript 其实是一门无类（class-free）语言，也正因为如此，生搬单例模式的概念并无 意义。在 JavaScript 中创建对象的方法非常简单，既然我们只需要一个“唯一”的对象，为什 么要为它先创建一个“类”呢？这无异于穿棉衣洗澡，传统的单例模式实现在 JavaScript 中并 不适用。 

**单例模式的核心是确保只有一个实例，并提供全局访问。**

全局变量不是单例模式，但在 JavaScript 开发中，**我们经常会把全局变量当成单例来使用**。例如：

```js
var a = {};
```

当用这种方式创建对象 a 时，对象 a 确实是独一无二的。如果 a 变量被声明在全局作用域下， 则我们可以在代码中的任何位置使用这个变量，全局变量提供给全局访问是理所当然的。这样就 满足了单例模式的两个条件。 

**但是全局变量存在很多问题，它很容易造成命名空间污染**。在大中型项目中，如果不加以限 制和管理，程序中可能存在很多这样的变量。JavaScript 中的变量也很容易被不小心覆盖，相信 每个 JavaScript 程序员都曾经历过变量冲突的痛苦，就像上面的对象 var a = {};，随时有可能被 别人覆盖。 

Douglas Crockford 多次把全局变量称为 JavaScript 中最糟糕的特性。在对 JavaScript 的创造者 Brendan Eich 的访谈中， Brendan Eich 本人也承认全局变量是设计上的失误，是在没有足够的时 间思考一些东西的情况下导致的结果。 

作为普通的开发者，我们**有必要尽量减少全局变量的使用，即使需要，也要把它的污染降到 最低**。以下几种方式可以相对降低全局变量带来的命名污染。

#### 降低全局变量带来的命名污染

##### 1. 使用命名空间

适当地使用命名空间，并不会杜绝全局变量，但可以减少全局变量的数量。

最简单的方法依然是**用对象字面量的方式**：

```js
var namespace1={
   a:function(){
      console.log(1);
   },
   b:function(){
      console.log(2);
   }
};
```

把 a 和 b 都定义为 namespace1 的属性，这样可以减少变量和全局作用域打交道的机会。另外我们还可以**动态地创建命名空间**，代码如下（引自 Object-Oriented JavaScrtipt 一书）：

```js
var MyApp={};
MyApp.namespace=function(name){
   var parts=name.split(".");
   var current=MyApp;
   for(var p in parts){
      if (!current[parts[p]]) {
         current[parts[p]]={};
      }
      current=current[parts[p]];
   }
};

MyApp.namespace("event");
MyApp.namespace("dom.style");

console.dir(MyApp); 
//{ namespace: [Function (anonymous)], event: {}, dom: { style: {} } }

```

// 上述代码等价于：

```js
var MyApp = {
    event: {},
    dom: {
    	style: {}
    }
};
```

##### 2. 使用闭包封装私有变量

这种方法把一些变量封装在闭包的内部，只暴露一些接口跟外界通信：

```js
var user=(function(){
   var __name="Arnold";
   var __age=23;
   return {
      getUserInfo:function(){
         return __name+"-"+__age;
      }
   }
})();

console.log(user.getUserInfo());  //Arnold-23
```

我们用下划线来约定私有变量__name 和__age，它们被封装在闭包产生的作用域中，外部是访问不到这两个变量的，这就避免了对全局的命令污染。

### 惰性单例

**惰性单例指的是在需要的时候才创建对象实例**。惰性单例是单例模式的重点，这种技术在实 际开发中非常有用，有用的程度可能超出了我们的想象，实际上在本章开头就使用过这种技术， instance 实例对象总是在我们调用 Singleton.getInstance 的时候才被创建，而不是在页面加载好 的时候就创建，代码如下：

```js
Singleton.getInstance=(function(){
   var instance=null;
   return function(name){
      if (!instance) {
         instance=new Singleton(name);
      }
      return instance;
   }
   
})();
```

不过这是基于“类”的单例模式，前面说过，**基于“类”的单例模式在 JavaScript 中并不适 用**，下面我们将以 WebQQ 的登录浮窗为例，介绍与全局变量结合实现惰性的单例。 

假设我们是 WebQQ 的开发人员（网址是web.qq.com），当点击左边导航里 QQ 头像时，会弹 出一个登录浮窗（如图 4-1 所示），很明显这个浮窗在页面里总是唯一的，不可能出现同时存在 两个登录窗口的情况。

**第一种解决方案是在页面加载完成的时候便创建好这个 div 浮窗**，这个浮窗一开始肯定是隐藏状态的，当用户点击登录按钮的时候，它才开始显示：

```html
<div>
    <button id="loginBtn">登录</button>
</div>

<script type="text/javascript">

var loginLayer=(function(){
    var div=document.createElement("div");
    div.innerHTML='我是登录浮窗';
    div.style.display="none";
    document.body.appendChild(div);
    return div;
})();

document.getElementById("loginBtn").onclick=function(){
    loginLayer.style.display="block";
}

</script>
```

这种方式有一个问题，也许我们进入 WebQQ 只是玩玩游戏或者看看天气，根本不需要进行登录操作，因为登录浮窗总是一开始就被创建好，那么很有可能将白白浪费一些 DOM 节点。

现在改写一下代码，使用户点击登录按钮的时候才开始创建该浮窗：

```js
var createLoginLayer=function(){
    var div=document.createElement("div");
    div.innerHTML='我是登录浮窗';
    div.style.display="none";
    document.body.appendChild(div);
    return div;
};

document.getElementById("loginBtn").onclick=function(){
    var loginLayer=createLoginLayer();
    loginLayer.style.display="block";
}
```

虽然现在达到了惰性的目的，但失去了单例的效果。当我们每次点击登录按钮的时候，都会 创建一个新的登录浮窗 div。虽然我们可以在点击浮窗上的关闭按钮时（此处未实现）把这个浮 窗从页面中删除掉，但这样频繁地创建和删除节点明显是不合理的，也是不必要的。 

也许读者已经想到了，我们可以用一个变量来判断是否已经创建过登录浮窗，这也是本节第 一段代码中的做法：

```js
var createLoginLayer=(function(){
    var div;
    return function(){
        if (!div) {
            div=document.createElement("div");
            div.innerHTML='我是登录浮窗';
            div.style.display="none";
            document.body.appendChild(div);
        }
        return div;
    }
})();

document.getElementById("loginBtn").onclick=function(){
    var loginLayer=createLoginLayer();
    loginLayer.style.display="block";
}
```

### 通用的惰性单例

上一节我们完成了一个可用的惰性单例，但是我们发现它还有如下一些问题。 
- 这段代码仍然是违反单一职责原则的，创建对象和管理单例的逻辑都放在 createLoginLayer 对象内部。 
- 如果我们下次需要创建页面中唯一的 iframe，或者 script 标签，用来跨域请求数据，就 必须得如法炮制，把 createLoginLayer 函数几乎照抄一遍：

```js
var createIframe=(function(){
    var iframe;
    return function(){
        if (!iframe) {
            iframe=document.createElement("iframe");
            iframe.style.display="none";
            document.body.appendChild(iframe);
        }
        return iframe;
    }
})();
```

我们需要把不变的部分隔离出来，先不考虑创建一个 div 和创建一个 iframe 有多少差异，管 理单例的逻辑其实是完全可以抽象出来的，这个逻辑始终是一样的：用一个变量来标志是否创建 过对象，如果是，则在下次直接返回这个已经创建好的对象：

```js
var obj;
if ( !obj ){
	obj = xxx;
}
```

现在我们就把如何管理单例的逻辑从原来的代码中抽离出来，这些逻辑被封装在 getSingle函数内部，**创建对象的方法 fn 被当成参数动态传入 getSingle 函数**：

```js
var getSingle=function(fn){
    var result;
    return function(){
        return result || (result=fn.apply(this,arguments));
    }
};
```

接下来将**用于创建登录浮窗的方法用参数 fn 的形式传入 getSingle**，我们不仅可以传入 createLoginLayer，还能传入 createScript、createIframe、createXhr 等。之后再让 getSingle 返回 一个新的函数，并且用一个变量 result 来保存 fn 的计算结果。**result 变量因为身在闭包中，它永远不会被销毁。在将来的请求中，如果 result 已经被赋值，那么它将返回这个值**。代码如下：

```js
var createLoginLayer=function(){
    var div=document.createElement("div");
    div.innerHTML='我是登录浮窗';
    div.style.display="none";
    document.body.appendChild(div);
    return div;
};

var createSingleLoginLayer=getSingle(createLoginLayer);

document.getElementById("loginBtn").onclick=function(){
    var loginLayer=createSingleLoginLayer();
    loginLayer.style.display="block";
}
```

下面我们再试试创建唯一的 iframe 用于动态加载第三方页面：

```js
var createSingleIframe=getSingle(function(){
    var iframe=document.createElement("iframe");
    document.body.appendChild(iframe);
    return iframe;
});
document.getElementById("iframeBtn").onclick=function(){
    var iframe=createSingleIframe();
    iframe.src="https://translate.google.cn/";
}
```

在这个例子中，我们把创建实例对象的职责和管理单例的职责分别放置在两个方法里，这两 个方法可以独立变化而互不影响，当它们连接在一起的时候，就完成了创建唯一实例对象的功能， 看起来是一件挺奇妙的事情。 

这种单例模式的用途远不止创建对象，比如我们通常渲染完页面中的一个列表之后，接下来 要给这个列表绑定 click 事件，如果是通过 ajax 动态往列表里追加数据，在使用事件代理的前提 下，click 事件实际上只需要在第一次渲染列表的时候被绑定一次，但是我们不想去判断当前是 否是第一次渲染列表，**如果借助于 jQuery，我们通常选择给节点绑定 one 事件**：

```js
var bindEvent=function(){
    $("div").one("click",function(){
        console.log("Clicked");
    });
};

var render=function(){
    console.log("开始渲染列表");
    bindEvent();
};

render();
render();
render();
```

如果利用 getSingle 函数，也能达到一样的效果。代码如下：

```js
var getSingle=function(fn){
    var result;
    return function(){
        return result || (result=fn.apply(this,arguments));
    }
};


var bindEvent=getSingle(function(){
    document.getElementById("div1").addEventListener("click",function(){
        console.log("Clicked");
    });
    return true;
});

var render=function(){
    console.log("开始渲染列表");
    bindEvent();
};

render();
render();
render();
```

可以看到，render 函数和 bindEvent 函数都分别执行了 3 次，但 div 实际上只被绑定了一个事件。



## 策略模式

策略模式的定义是：**定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。**

### 使用策略模式计算奖金

很多公司的年终奖是根据员工的工资基数和年底绩效情况来发放的。例如，绩效为 S 的人年 终奖有 4 倍工资，绩效为 A 的人年终奖有 3 倍工资，而绩效为 B 的人年终奖是 2 倍工资。假设财 务部要求我们提供一段代码，来方便他们计算员工的年终奖。

#### 最初的代码实现

 我们可以编写一个名为 calculateBonus 的函数来计算每个人的奖金数额。很显然， calculateBonus 函数要正确工作，就需要接收两个参数：员工的工资数额和他的绩效考核等级。 代码如下：

```js
var calculateBonus = function( performanceLevel, salary ){
   if ( performanceLevel === 'S' ){
      return salary * 4;
   }
   if ( performanceLevel === 'A' ){
      return salary * 3;
   }
   if ( performanceLevel === 'B' ){
      return salary * 2;
   }
};
calculateBonus( 'B', 20000 ); // 输出：40000
calculateBonus( 'S', 6000 ); // 输出：24000
```

可以发现，这段代码十分简单，但是存在着显而易见的缺点。 
- calculateBonus 函数比较庞大，包含了很多 if-else 语句，这些语句需要覆盖所有的逻辑 分支。 
- calculateBonus 函数缺乏弹性，如果增加了一种新的绩效等级 C，或者想把绩效 S 的奖金 系数改为 5，那我们必须深入 calculateBonus 函数的内部实现，这是违反开放封闭原则的。 
- 算法的复用性差，如果在程序的其他地方需要重用这些计算奖金的算法呢？我们的选择 只有复制和粘贴。 

因此，我们需要重构这段代码。

#### 使用组合函数重构代码

一般最容易想到的办法就是使用组合函数来重构代码，我们把各种算法封装到一个个的小函 数里面，这些小函数有着良好的命名，可以一目了然地知道它对应着哪种算法，它们也可以被复用在程序的其他地方。代码如下：

```js
var performanceS = function( salary ){
   return salary * 4;
};
var performanceA = function( salary ){
   return salary * 3;
};
var performanceB = function( salary ){
   return salary * 2;
};
var calculateBonus = function( performanceLevel, salary ){
   if ( performanceLevel === 'S' ){
      return performanceS( salary );
   }
   if ( performanceLevel === 'A' ){
      return performanceA( salary );
   }
   if ( performanceLevel === 'B' ){
      return performanceB( salary );
   }
};
calculateBonus( 'A' , 10000 ); // 输出：30000
```

目前，我们的程序得到了一定的改善，但这种改善非常有限，我们依然没有解决最重要的问题：calculateBonus 函数有可能越来越庞大，而且在系统变化的时候缺乏弹性。

#### 使用策略模式重构代码

经过思考，我们想到了更好的办法——使用策略模式来重构代码。策略模式指的是定义一系 列的算法，把它们一个个封装起来。**将不变的部分和变化的部分隔开**是每个设计模式的主题，策 略模式也不例外，策略模式的**目的就是将算法的使用与算法的实现分离开来**。 

在这个例子里，算法的使用方式是不变的，都是根据某个算法取得计算后的奖金数额。而算 法的实现是各异和变化的，每种绩效对应着不同的计算规则。 

一个基于策略模式的程序至少由两部分组成。第一个部分是一组**策略类**，策略类**封装了具体 的算法，并负责具体的计算过程**。 第二个部分是**环境类** Context，Context **接受客户的请求，随后 把请求委托给某一个策略类**。要做到这点，说明 Context 中要维持对某个策略对象的引用。 

现在用策略模式来重构上面的代码。第一个版本是模仿传统面向对象语言中的实现。我们先 把每种绩效的计算规则都封装在对应的策略类里面：

```js
var performanceS=function(){};
performanceS.prototype.calculate = function( salary ){
   return salary * 4;
};

var performanceA=function(){};
performanceA.prototype.calculate = function( salary ){
   return salary * 3;
};

var performanceB=function(){};
performanceB.prototype.calculate = function( salary ){
   return salary * 2;
};

//接下来定义奖金类 Bonus：
var Bonus=function(){
   this.salary=null;  // 原始工资
   this.strategy=null;  //绩效等级对应的策略对象
}
Bonus.prototype.setSalary=function(salary){
   this.salary=salary;  // 设置员工的原始工资
}
Bonus.prototype.setStrategy = function( strategy ){
   this.strategy = strategy;  // 设置员工绩效等级对应的策略对象
};

Bonus.prototype.getBonus=function(){  // 取得奖金数额
   if (!this.strategy) {
      throw new Error("未设置strategy属性");
   }
   return this.strategy.calculate(this.salary);  // 把计算奖金的操作委托给对应的策略对象
}
```

在完成最终的代码之前，我们再来回顾一下策略模式的思想：

**定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。**

“并且使它们可以相互替换”，这句话在很大程度上是相对于静态类型语言而言的。因为静态类型语言中有类型检 查机制，所以各个策略类需要实现同样的接口。当它们的真正类型被隐藏在接口后面时，它们才能被相互替换。 而在 JavaScript 这种“类型模糊”的语言中没有这种困扰，任何对象都可以被替换使用。因此，JavaScript 中的“可 以相互替换使用”表现为它们具有相同的目标和意图。

这句话如果说得更详细一点，就是：定义一系列的算法，把它们各自封装成策略类，算法被 封装在策略类内部的方法里。在客户对 Context 发起请求的时候，Context 总是把请求委托给这些 策略对象中间的某一个进行计算。 

现在我们来完成这个例子中剩下的代码。先创建一个 bonus 对象，并且给 bonus 对象设置一些原始的数据，比如员工的原始工资数额。接下来把某个计算奖金的策略对象也传入 bonus 对象 内部保存起来。当调用 bonus.getBonus()来计算奖金的时候，bonus 对象本身并没有能力进行计算， 而是把请求委托给了之前保存好的策略对象：

```js
var bonus=new Bonus();
bonus.setSalary(10000);
bonus.setStrategy(new performanceS());  // 设置策略对象
console.log( bonus.getBonus() ); // 输出：40000

bonus.setStrategy( new performanceA() ); // 设置策略对象
console.log( bonus.getBonus() ); // 输出：30000
```

刚刚我们用策略模式重构了这段计算年终奖的代码，可以看到通过策略模式重构之后，代码 变得更加清晰，各个类的职责更加鲜明。**但这段代码是基于传统面向对象语言的模仿**，下一节我 们将了解用 JavaScript 实现的策略模式。



### JavaScript 版本的策略模式

我们让 strategy 对象从各个策略类中创建而来，这是模拟一些传统面向对象语 言的实现。**实际上在 JavaScript 语言中，函数也是对象，所以更简单和直接的做法是把 strategy 直接定义为函数**：

```js
var strategies={
   "S":function(salary){
      return salary*4;
   },
   "A":function(salary){
      return salary*3;
   },
   "B":function(salary){
      return salary*2;
   },
};
```

同样，Context 也没有必要必须用 Bonus 类来表示，我们依然用 calculateBonus 函数充当Context 来接受用户的请求。经过改造，代码的结构变得更加简洁：

```js

var calculateBonus=function(level,salary){
   return strategies[level](salary);
}

console.log( calculateBonus( 'S', 20000 ) ); // 输出：80000
console.log( calculateBonus( 'A', 10000 ) ); // 输出：30000
```



### 多态在策略模式中的体现

通过使用策略模式重构代码，我们消除了原程序中大片的条件分支语句。所有跟计算奖金有 关的逻辑不再放在 Context 中，而是分布在各个策略对象中。Context 并没有计算奖金的能力，而 是把这个职责委托给了某个策略对象。每个策略对象负责的算法已被各自封装在对象内部。**当我 们对这些策略对象发出“计算奖金”的请求时，它们会返回各自不同的计算结果，这正是对象多 态性的体现**，也是“它们可以相互替换”的目的。**替换 Context 中当前保存的策略对象，便能执 行不同的算法来得到我们想要的结果。**



### 使用策略模式实现缓动动画

#### 实现动画效果的原理

用 JavaScript 实现动画效果的原理跟动画片的制作一样，动画片是把一些差距不大的原画以较快的帧数播放，来达到视觉上的动画效果。在 JavaScript 中，可以通过连续改变元素的某个 CSS 属性，比如 left、top、background-position 来实现动画效果。

#### 思路和一些准备工作

我们目标是编写一个动画类和一些缓动算法，让小球以各种各样的缓动效果在页面中运动。

现在来分析实现这个程序的思路。在运动开始之前，需要提前记录一些有用的信息，至少包括以下信息：

- 动画开始时，小球所在的原始位置；
- 小球移动的目标位置；
- 动画开始时的准确时间点；
- 小球运动持续的时间。

随后，我们会用 setInterval 创建一个定时器，定时器每隔 19ms 循环一次。在定时器的每一 帧里，我们会把动画已消耗的时间、小球原始位置、小球目标位置和动画持续的总时间等信息传 入缓动算法。该算法会通过这几个参数，计算出小球当前应该所在的位置。最后再更新该 div 对 应的 CSS 属性，小球就能够顺利地运动起来了。

#### 让小球运动起来

 在实现完整的功能之前，我们先了解一些常见的缓动算法，这些算法最初来自 Flash，但可 以非常方便地移植到其他语言中。 

这些算法都接受 4 个参数，这 **4 个参数的含义**分别是动画已消耗的时间、小球原始位置、小 球目标位置、动画持续的总时间，返回的值则是动画元素应该处在的当前位置。代码如下：

```js

var tween={
   linear:function(t,b,c,d){
      return c*t/d+b;
   },
   easeIn:function(t,b,c,d){
      return c*(t/=d)*t+b;
   },
   strongEaseIn: function(t, b, c, d){
      return c * ( t /= d ) * t * t * t * t + b;
   },
   strongEaseOut: function(t, b, c, d){
      return c * ( ( t = t / d - 1) * t * t * t * t + 1 ) + b;
   },
   sineaseIn: function( t, b, c, d ){
      return c * ( t /= d) * t * t + b;
   },
   sineaseOut: function(t,b,c,d){
      return c * ( ( t = t / d - 1) * t * t + 1 ) + b;
   }
};

```

现在我们开始编写完整的代码，下面代码的思想来自 jQuery 库，由于本节的目标是演示策略模式，而非编写一个完整的动画库，因此我们省去了动画的队列控制等更多完整功能。

现在进入代码实现阶段，首先在页面中放置一个 div：

```html
<div style="position:absolute;background:#345678" id="div">我是 div</div>
```

接下来定义 **Animate 类**，Animate 的构造函数接受一个参数：即将运动起来的 dom 节点。Animate类的代码如下：

```js
var Animate=function(dom){
  this.dom = dom; // 进行运动的 dom 节点
  this.startTime = 0; // 动画开始时间
  this.startPos = 0; // 动画开始时，dom 节点的位置，即 dom 的初始位置
  this.endPos = 0; // 动画结束时，dom 节点的位置，即 dom 的目标位置
  this.propertyName = null; // dom 节点需要被改变的 css 属性名
  this.easing = null; // 缓动算法
  this.duration = null; // 动画持续时间
};
```

接下来 Animate.prototype.start 方法负责启动这个动画，在动画被启动的瞬间，要记录一些 信息，供缓动算法在以后计算小球当前位置的时候使用。在记录完这些信息之后，此方法还要负 责启动定时器。代码如下：

```js
Animate.prototype.start=function(propertyName,endPos,duration,easing){
  this.startTime=+new Date;  //动画启动时间
  this.startPos=this.dom.getBoundingClientRect()[propertyName];  //dom 节点初始位置
  this.propertyName=propertyName;  //dom 节点需要被改变的 CSS 属性名
  this.endPos=endPos;  //dom 节点目标位置
  this.duration=duration;  //动画持续事件
  this.easing=tween[easing];  //缓动算法

  var self=this;
  var timeId=setInterval(function(){  //启动定时器，开始执行动画
    if (self.step()===false) {
      clearInterval(timeId);  //如果动画已结束，则清除定时器
    }
  },19);
};
```

Animate.prototype.start 方法接受以下 4 个参数。
- propertyName：要改变的 CSS 属性名，比如'left'、'top'，分别表示左右移动和上下移动。
- endPos： 小球运动的目标位置。
- duration： 动画持续时间。
- easing： 缓动算法。

再接下来是 Animate.prototype.step 方法，该方法代表小球运动的每一帧要做的事情。在此 处，这个方法负责计算小球的当前位置和调用更新 CSS 属性值的方法 Animate.prototype.update。 代码如下：

```js
Animate.prototype.step=function(){
  var t=+new Date;  //取得当前时间
  if (t>=this.startTime+this.duration) {  //(1)
    this.update(this.endPos);  //更新小球的 CSS 属性值
    return false;
  }
  var pos=this.easing(t-this.startTime,this.startPos,this.endPos-this.startPos,this.duration);  //pos 为小球当前位置
  this.update(pos);  //更新小球的 CSS 属性值
}
```

在这段代码中，(1)处的意思是，如果当前时间大于动画开始时间加上动画持续时间之和，说 明动画已经结束，此时要修正小球的位置。因为在这一帧开始之后，小球的位置已经接近了目标 位置，但很可能不完全等于目标位置。此时我们要主动修正小球的当前位置为最终的目标位置。 此外让 Animate.prototype.step 方法返回 false，可以通知 Animate.prototype.start 方法清除定 时器。 

最后是负责更新小球 CSS 属性值的 Animate.prototype.update 方法：

```js
Animate.prototype.update=function(pos){
  this.dom.style[this.propertyName]=pos+"px";
};
```

如果不嫌麻烦，我们可以进行一些小小的测试：

```js
var div = document.getElementById( 'div' );
var animate = new Animate( div );
animate.start( 'left', 500, 500, 'strongEaseOut' );
animate.start( 'top', 500, 500, 'strongEaseIn' );
```

通过这段代码，可以看到小球按照我们的期望以各种各样的缓动算法在页面中运动。

本节我们学会了怎样编写一个动画类，利用这个动画类和一些缓动算法就可以让小球运动起 来。我们使用策略模式把算法传入动画类中，来达到各种不同的缓动效果，这些算法都可以轻易 地被替换为另外一个算法，这是策略模式的经典运用之一。策略模式的实现并不复杂，关键是如 何从策略模式的实现背后，找到封装变化、委托和多态性这些思想的价值。



### 更广义的“算法”

策略模式指的是定义一系列的算法，并且把它们封装起来。本章我们介绍的计算奖金和缓动 动画的例子都封装了一些算法。 

从定义上看，策略模式就是用来封装算法的。但如果把策略模式仅仅用来封装算法，未免有 一点大材小用。在实际开发中，我们**通常会把算法的含义扩散开来，使策略模式也可以用来封装 一系列的“业务规则”。只要这些业务规则指向的目标一致，并且可以被替换使用，我们就可以 用策略模式来封装它们**。 

GoF 在《设计模式》一书中提到了一个利用策略模式来校验用户是否输入了合法数据的例子， 但 GoF 未给出具体的实现。刚好在 Web 开发中，表单校验是一个非常常见的话题。下面我们就 看一个使用策略模式来完成表单校验的例子。

### 表单校验

在一个 Web 项目中，注册、登录、修改用户信息等功能的实现都离不开提交表单。 

在将用户输入的数据交给后台之前，常常要做一些客户端力所能及的校验工作，比如注册的 时候需要校验是否填写了用户名，密码的长度是否符合规定，等等。这样可以避免因为提交不合 法数据而带来的不必要网络开销。

假设我们正在编写一个注册的页面，在点击注册按钮之前，有如下几条校验逻辑。
- 用户名不能为空。
- 密码长度不能少于 6 位。
- 手机号码必须符合格式。

#### 表单校验的第一个版本

现在编写表单校验的第一个版本，可以提前透露的是，目前我们还没有引入策略模式。代码如下：

```html
<div id="demo">
  <form action="http:// xxx.com/register" id="registerForm" method="post">
    请输入用户名：<input type="text" name="userName"/ >
    请输入密码：<input type="text" name="password"/ >
    请输入手机号码：<input type="text" name="phoneNumber"/ >
    <button>提交</button>
  </form>
</div>

<script type="text/javascript">
var registerForm = document.getElementById( 'registerForm' );
  registerForm.onsubmit = function(){
    if ( registerForm.userName.value === '' ){
      alert ( '用户名不能为空' );
      return false;
    }
    if ( registerForm.password.value.length < 6 ){
      alert ( '密码长度不能少于 6 位' );
      return false;
    }
    if ( !/(^1[3|5|8][0-9]{9}$)/.test( registerForm.phoneNumber.value ) ){
      alert ( '手机号码格式不正确' );
      return false;
  }
}

</script>
```

这是一种很常见的代码编写方式，它的缺点跟计算奖金的最初版本一模一样。 
- registerForm.onsubmit 函数比较庞大，包含了很多 if-else 语句，这些语句需要覆盖所有 的校验规则。 
- registerForm.onsubmit 函数缺乏弹性，如果增加了一种新的校验规则，或者想把密码的长 度校验从 6 改成 8，我们都必须深入 registerForm.onsubmit 函数的内部实现，这是违反开 放—封闭原则的。 
- 算法的复用性差，如果在程序中增加了另外一个表单，这个表单也需要进行一些类似的 校验，那我们很可能将这些校验逻辑复制得漫天遍野。

#### 用策略模式重构表单校验

下面我们将用策略模式来重构表单校验的代码，很显然第一步我们要把这些校验逻辑都封装成策略对象：

```js
var strategies={
  isNonEmpty:function(value,errorMessage){
    if (value==="") {
      return errorMessage;
    }
  },
  minLength:function(value,length,errorMessage){
    if (value.length<length) {
      return errorMessage;
    }
  },
  isMobile:function(value,errorMessage){
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMessage;
    }
  },
};

```

接下来我们准备实现 Validator 类。Validator 类在这里作为 Context，负责接收用户的请求 并委托给 strategy 对象。在给出 Validator 类的代码之前，有必要提前了解用户是如何向 Validator 类发送请求的，这有助于我们知道如何去编写 Validator 类的代码。代码如下：

```js
var validateFunc=function(){
  var validator=new Validator();  //创建一个 validator 对象
  //添加一些校验规则
  validator.add( registerForm.userName, 'isNonEmpty', '用户名不能为空' );
  validator.add( registerForm.password, 'minLength:6', '密码长度不能少于 6 位' );
  validator.add( registerForm.phoneNumber, 'isMobile', '手机号码格式不正确' );
  var errorMsg = validator.start(); // 获得校验结果
  return errorMsg; // 返回校验结果
}

var registerForm = document.getElementById( 'registerForm' );
registerForm.onsubmit = function(){
    var errorMsg = validateFunc(); // 如果 errorMsg 有确切的返回值，说明未通过校验
    if ( errorMsg ){
      alert ( errorMsg );
      return false; // 阻止表单提交
    }
};
```

从这段代码中可以看到，我们先创建了一个 validator 对象，然后通过 validator.add 方法， 往 validator 对象中添加一些校验规则。validator.add 方法接受 3 个参数，以下面这句代码说明：

```js
validator.add( registerForm.password, 'minLength:6', '密码长度不能少于 6 位' );
```

- registerForm.password 为参与校验的 input 输入框。 
- 'minLength:6'是一个以冒号隔开的字符串。冒号前面的 minLength代表客户挑选的 strategy 对象，冒号后面的数字 6 表示在校验过程中所必需的一些参数。'minLength:6'的意思就是 校验 registerForm.password 这个文本输入框的 value 最小长度为 6。如果这个字符串中不 包含冒号，说明校验过程中不需要额外的参数信息，比如'isNonEmpty'。 
- 第 3 个参数是当校验未通过时返回的错误信息。

当我们往 validator 对象里添加完一系列的校验规则之后，会调用 validator.start()方法来 启动校验。如果 validator.start()返回了一个确切的 errorMsg 字符串当作返回值，说明该次校验 没有通过，此时需让 registerForm.onsubmit 方法返回 false 来阻止表单的提交。

最后是 Validator 类的实现：

```js
var Validator=function(){
  this.cache=[];  //保存校验规则
};

Validator.prototype.add = function( dom, rule, errorMsg ){
  var ary = rule.split( ':' ); // 把 strategy 和参数分开
  this.cache.push(function(){ // 把校验的步骤用空函数包装起来，并且放入 cache
    var strategy = ary.shift(); // 用户挑选的 strategy
    ary.unshift( dom.value ); // 把 input 的 value 添加进参数列表
    ary.push( errorMsg ); // 把 errorMsg 添加进参数列表
    return strategies[ strategy ].apply( dom, ary );
  });
};
Validator.prototype.start = function(){
  for ( var i = 0, validatorFunc; validatorFunc = this.cache[ i++ ]; ){
    var msg = validatorFunc(); // 开始校验，并取得校验后的返回信息
    if ( msg ){ // 如果有确切的返回值，说明校验没有通过
      return msg;
    }
  }
};
```

**使用策略模式重构代码之后，我们仅仅通过“配置”的方式就可以完成一个表单的校验**， 这些校验规则也可以复用在程序的任何地方，还能作为插件的形式，方便地被移植到其他项 目中。 

在修改某个校验规则的时候，只需要编写或者改写少量的代码。比如我们想将用户名输入框 的校验规则改成用户名不能少于 4 个字符。可以看到，这时候的修改是毫不费力的。代码如下：

```js
validator.add( registerForm.userName, 'isNonEmpty', '用户名不能为空' );
// 改成：
validator.add( registerForm.userName, 'minLength:10', '用户名长度不能小于 10 位' );
```

#### 给某个文本输入框添加多种校验规则

为了让读者把注意力放在策略模式的使用上，目前我们的表单校验实现留有一点小遗憾：一 个文本输入框只能对应一种校验规则，比如，用户名输入框只能校验输入是否为空.

如果我们既想校验它是否为空，又想校验它输入文本的长度不小于 10 呢？我们期望以这样 的形式进行校验：

```js
validator.add( registerForm.userName, [{
    strategy: 'isNonEmpty',
    errorMsg: '用户名不能为空'
    }, {
    strategy: 'minLength:6',
    errorMsg: '用户名长度不能小于 10 位'
}] );
```

下面提供的代码可用于一个文本输入框对应多种校验规则：

```html
<div id="demo">
  <form action="#" id="registerForm" method="post">
    请输入用户名：<input type="text" name="userName"/ >
    请输入密码：<input type="text" name="password"/ >
    请输入手机号码：<input type="text" name="phoneNumber"/ >
    <button>提交</button>
  </form>
</div>

<script type="text/javascript">

var strategies={
  isNonEmpty:function(value,errorMessage){
    if (value==="") {
      return errorMessage;
    }
  },
  minLength:function(value,length,errorMessage){
    if (value.length<length) {
      return errorMessage;
    }
  },
  isMobile:function(value,errorMessage){
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMessage;
    }
  },
};

var Validator=function(){
  this.cache=[];  //保存校验规则
};

Validator.prototype.add = function( dom, rules ){
  var self=this;
  for(let i=0,rule;i<rules.length;i++){
    rule=rules[i];
    (function(rule){
      var strategyAry = rule.strategy.split( ':' );
      var errorMsg = rule.errorMsg;
      self.cache.push(function(){
        //把校验的步骤用空函数包装起来，并且放入 cache
        var strategy = strategyAry.shift(); // 用户挑选的 strategy
        strategyAry.unshift( dom.value ); // 把 input 的 value 添加进参数列表
        strategyAry.push( errorMsg ); // 把 errorMsg 添加进参数列表
        return strategies[ strategy ].apply( dom, strategyAry );
      });
    })(rule);
  }
};

Validator.prototype.start = function(){
  for ( var i = 0, validatorFunc; validatorFunc = this.cache[ i++ ]; ){
    var msg = validatorFunc(); // 开始校验，并取得校验后的返回信息
    if ( msg ){ // 如果有确切的返回值，说明校验没有通过
      return msg;
    }
  }
};

var validateFunc=function(){
  var validator=new Validator();  //创建一个 validator 对象
  //添加一些校验规则
  validator.add( registerForm.userName, [{
    strategy: 'isNonEmpty',
    errorMsg: '用户名不能为空'
    }, {
    strategy: 'minLength:6',
    errorMsg: '用户名长度不能小于 10 位'
    }]);
  validator.add( registerForm.password, [{
    strategy: 'minLength:6',
    errorMsg: '密码长度不能小于 6 位'
    }]);
  validator.add( registerForm.phoneNumber, [{
    strategy: 'isMobile',
    errorMsg: '手机号码格式不正确'
    }]);
  var errorMsg = validator.start(); // 获得校验结果
  return errorMsg; // 返回校验结果
}

var registerForm = document.getElementById( 'registerForm' );
registerForm.onsubmit = function(){
    var errorMsg = validateFunc(); // 如果 errorMsg 有确切的返回值，说明未通过校验
    if ( errorMsg ){
      alert ( errorMsg );
      return false; // 阻止表单提交
    }
};

</script>
```

### 策略模式的优缺点

策略模式是一种常用且有效的设计模式，本章提供了计算奖金、缓动动画、表单校验这三个 例子来加深大家对策略模式的理解。从这三个例子中，我们可以总结出策略模式的一些**优点**。 
- 策略模式利用组合、委托和多态等技术和思想，可以有效地避免多重条件选择语句。 
- 策略模式提供了对开放—封闭原则的完美支持，将算法封装在独立的 strategy 中，使得它 们易于切换，易于理解，易于扩展。 
- 策略模式中的算法也可以复用在系统的其他地方，从而避免许多重复的复制粘贴工作。 
- 在策略模式中利用组合和委托来让 Context 拥有执行算法的能力，这也是继承的一种更轻 便的替代方案。

当然，策略模式也有一些**缺点**，但这些缺点并不严重。 

首先，使用策略模式会在程序中增加许多策略类或者策略对象，但实际上这比把它们负责的 逻辑堆砌在 Context 中要好。 

其次，要使用策略模式，必须了解所有的 strategy，必须了解各个 strategy 之间的不同点， 这样才能选择一个合适的 strategy。比如，我们要选择一种合适的旅游出行路线，必须先了解选 择飞机、火车、自行车等方案的细节。此时 strategy 要向客户暴露它的所有实现，这是违反最少 知识原则的。

### 一等函数对象与策略模式

本章提供的几个策略模式示例，既有模拟传统面向对象语言的版本，也有针对 JavaScript 语 言的特有实现。在以类为中心的传统面向对象语言中，不同的算法或者行为被封装在各个策略类 中，Context 将请求委托给这些策略对象，这些策略对象会根据请求返回不同的执行结果，这样 便能表现出对象的多态性。 

Peter Norvig 在他的演讲中曾说过：“**在函数作为一等对象的语言中，策略模式是隐形的**。 **strategy 就是值为函数的变量**。”在 JavaScript 中，除了使用类来封装算法和行为之外，使用函数 当然也是一种选择。这些“算法”可以被封装到函数中并且四处传递，也就是我们常说的“高阶 函数”。**实际上在 JavaScript 这种将函数作为一等对象的语言里，策略模式已经融入到了语言本身 当中，我们经常用高阶函数来封装不同的行为，并且把它传递到另一个函数中**。当我们对这些函 数发出“调用”的消息时，不同的函数会返回不同的执行结果。在 JavaScript 中，“函数对象的多态性”来得更加简单。



## 代理模式

代理模式是为一个对象提供一个代用品或占位符，以便控制对它的访问。 

代理模式是一种非常有意义的模式，在生活中可以找到很多代理模式的场景。比如，明星都 有经纪人作为代理。如果想请明星来办一场商业演出，只能联系他的经纪人。经纪人会把商业演 出的细节和报酬都谈好之后，再把合同交给明星签。 

**代理模式的关键是，当客户不方便直接访问一个对象或者不满足需要的时候，提供一个替身 对象来控制对这个对象的访问，客户实际上访问的是替身对象。**替身对象对请求做出一些处理之 后，再把请求转交给本体对象。

我们从一个小例子开始熟悉代理模式的结构。

### 例子

```js
var Flower=function(){};

var xiaoming={
   sendFlower:function(target){
      var flower=new Flower();
      target.receiveFlower(flower);
   }
};

var A={
   receiveFlower:function(flower){
      console.log( '收到花 ' + flower );
   }
}

xiaoming.sendFlower(A);
```

接下来，我们引入代理 B，即小明通过 B 来给 A 送花：

```js
var Flower=function(){};

var xiaoming={
   sendFlower:function(target){
      var flower=new Flower();
      target.receiveFlower(flower);
   }
};

var B={
   receiveFlower:function(flower){
      A.receiveFlower(flower);
   }
}
var A={
   receiveFlower:function(flower){
      console.log( '收到花 ' + flower );
   }
}

xiaoming.sendFlower(B);
```

此处的代理模式毫无用处，它所做的只是把请求简单地转交给本体。但不管怎样，我们开始引入了代理，这是一个不错的起点。

```js
var Flower=function(){};

var xiaoming={
   sendFlower:function(target){
      var flower=new Flower();
      target.receiveFlower(flower);
   }
};

var B={
   receiveFlower:function(flower){
      A.listenGoodMood(function(){  // 监听 A 的好心情
         A.receiveFlower(flower);  //
      });
   }
}
var A={
   receiveFlower:function(flower){
      console.log( '收到花 ' + flower );
   },
   listenGoodMood:function(fn){
      setTimeout(function(){
         fn();  // 假设 10 秒之后 A 的心情变好
      },10000);
   }
};

xiaoming.sendFlower(B);
```



### 保护代理和虚拟代理

虽然这只是个虚拟的例子，但我们可以从中找到两种代理模式的身影。代理 B 可以帮助 A 过滤掉一些请求，比如送花的人中年龄太大的或者没有宝马的，这种请求就可以直接在代理 B 处被拒绝掉。这种代理叫作**保护代理**。A 和 B 一个充当白脸，一个充当黑脸。白脸 A 继续保持 良好的女神形象，不希望直接拒绝任何人，于是找了黑脸 B 来控制对 A 的访问。

 另外，假设现实中的花价格不菲，导致在程序世界里，new Flower 也是一个代价昂贵的操作， 那么我们可以把 new Flower 的操作交给代理 B 去执行，代理 B 会选择在 A 心情好时再执行 new Flower，这是代理模式的另一种形式，叫作**虚拟代理**。**虚拟代理把一些开销很大的对象，延迟到 真正需要它的时候才去创建**。代码如下：

```js
var B={
   receiveFlower:function(flower){
      A.listenGoodMood(function(){  // 监听 A 的好心情
         var flower=new Flower();  //延迟创建 flower 对象
         A.receiveFlower(flower);  //
      });
   }
}
```



保护代理用于控制不同权限的对象对目标对象的访问，**但在 JavaScript 并不容易实现保护代 理**，因为我们无法判断谁访问了某个对象。**而虚拟代理是最常用的一种代理模式，本章主要讨论 的也是虚拟代理**。 当然上面只是一个虚拟的例子，我们无需在此投入过多近精力，接下来我们看另外一个真实 的示例。

### 虚拟代理实现图片预加载

在 Web 开发中，图片预加载是一种常用的技术，如果直接给某个 img 标签节点设置 src 属性， 由于图片过大或者网络不佳，图片的位置往往有段时间会是一片空白。**常见的做法是先用一张 loading 图片占位，然后用异步的方式加载图片，等图片加载好了再把它填充到 img 节点里**，这种 场景就很适合使用**虚拟代理**。 

下面我们来实现这个虚拟代理，首先创建一个普通的本体对象，这个对象负责往页面中创建 一个 img 标签，并且提供一个对外的 setSrc 接口，外界调用这个接口，便可以给该 img 标签设置src 属性：

```js
var myImage=(function(){
  var imgNode=document.createElement("img");
  document.body.appendChild(imgNode);
  return {
    setSrc:function(src){
      imgNode.src=src;
    }
  }
})();

myImage.setSrc("https://v3.cn.vuejs.org/images/components_provide.png")
```

我们把网速调至 5KB/s，然后通过 MyImage.setSrc 给该 img 节点设置 src，可以看到，在图片 被加载好之前，页面中有一段长长的空白时间。 

现在开始引入代理对象 proxyImage，通过这个代理对象，在图片被真正加载好之前，页面中 将出现一张占位的菊花图 loading.gif, 来提示用户图片正在加载。代码如下：

```js
var myImage=(function(){
  var imgNode=document.createElement("img");
  document.body.appendChild(imgNode);
  return {
    setSrc:function(src){
      imgNode.src=src;
    }
  }
})();

var proxyImage=(function(){
  var img=new Image;
  img.onload=function(){
    myImage.setSrc(this.src);
  }
  return {
    setSrc:function(src){
      myImage.setSrc("../image/CSS 轮廓.png");
      img.src=src;
    }
  }
})();

proxyImage.setSrc("https://v3.cn.vuejs.org/images/components_provide.png");
```

现在我们通过 proxyImage 间接地访问 MyImage。proxyImage 控制了客户对 MyImage 的访问，并 且在此过程中加入一些额外的操作，比如在真正的图片加载好之前，先把 img 节点的 src 设置为 一张本地的 loading 图片。

### 代理的意义

也许读者会有疑问，不过是实现一个小小的图片预加载功能，即使不需要引入任何模式也能 办到，那么引入代理模式的好处究竟在哪里呢？下面我们先抛开代理，编写一个更常见的图片预 加载函数。

 **不用代理的预加载图片函数**实现如下：

```js
var myImage=(function(){
  var imgNode=document.createElement("img");
  document.body.appendChild(imgNode);

  var img=new Image;
  img.onload=function(){
    imgNode.src=img.src;
  }
  return {
    setSrc:function(src){
      imgNode.src="../image/CSS 轮廓.png";
      img.src=src;
    }
  }
})();


myImage.setSrc("https://v3.cn.vuejs.org/images/components_provide.png");
```

为了说明代理的意义，下面我们引入一个面向对象设计的原则——单一职责原则。 

**单一职责原则**指的是，就**一个类（通常也包括对象和函数等）而言，应该仅有一个引起它变 化的原因**。如果一个对象承担了多项职责，就意味着这个对象将变得巨大，引起它变化的原因可 能会有多个。**面向对象设计鼓励将行为分布到细粒度的对象之中**，如果一个对象承担的职责过多， 等于把这些职责耦合到了一起，这种耦合会导致脆弱和低内聚的设计。当变化发生时，设计可能 会遭到意外的破坏。 

**职责被定义为“引起变化的原因**”。上段代码中的 MyImage 对象除了负责给 img 节点设置 src 外，还要负责预加载图片。我们在处理其中一个职责时，有可能因为其强耦合性影响另外一个职 责的实现。 

另外，在面向对象的程序设计中，**大多数情况下，若违反其他任何原则，同时将违反开放— 封闭原则**。如果我们只是从网络上获取一些体积很小的图片，或者 5 年后的网速快到根本不再需 要预加载，我们可能希望把预加载图片的这段代码从 MyImage 对象里删掉。这时候就不得不改动 MyImage 对象了。 

实际上，我们需要的只是给 img 节点设置 src，预加载图片只是一个锦上添花的功能。如果 能把这个操作放在另一个对象里面，自然是一个非常好的方法。于是代理的作用在这里就体现出 来了，**代理负责预加载图片，预加载的操作完成之后，把请求重新交给本体 MyImage**。

纵观整个程序，我们并没有改变或者增加 MyImage 的接口，但是通过代理对象，实际上给系 统添加了新的行为。这是符合开放—封闭原则的。给 img 节点设置 src 和图片预加载这两个功能， 被隔离在两个对象里，它们可以各自变化而不影响对方。何况就算有一天我们不再需要预加载， 那么只需要改成请求本体而不是请求代理对象即可。

```js
//proxyImage.setSrc("https://v3.cn.vuejs.org/images/components_provide.png");
myImage.setSrc("https://v3.cn.vuejs.org/images/components_provide.png");
```

### 代理和本体接口的一致性

上一节说到，如果有一天我们不再需要预加载，那么就不再需要代理对象，可以选择直接请 求本体。其中关键是代理对象和本体都对外提供了 setSrc 方法，**在客户看来，代理对象和本体 是一致的， 代理接手请求的过程对于用户来说是透明的，用户并不清楚代理和本体的区别**，这 样做有两个好处。 
- 用户可以放心地请求代理，他只关心是否能得到想要的结果。 
- 在任何使用本体的地方都可以替换成使用代理。

在 Java 等语言中，代理和本体都需要显式地实现同一个接口，一方面接口保证了它们会拥 有同样的方法，**另一方面，面向接口编程迎合依赖倒置原则，通过接口进行向上转型，从而避开 编译器的类型检查，代理和本体将来可以被替换使用。**

在 JavaScript 这种动态类型语言中，我们有时通过鸭子类型来检测代理和本体是否都实现了 setSrc 方法，另外大多数时候甚至干脆不做检测，全部依赖程序员的自觉性，这对于程序的健壮 性是有影响的。不过对于一门快速开发的脚本语言，这些影响还是在可以接受的范围内，而且我 们也习惯了没有接口的世界。 

另外值得一提的是，如果代理对象和本体对象都为一个函数（函数也是对象），函数必然都 能被执行，则可以认为它们也具有一致的“接口”。



### 虚拟代理合并 HTTP 请求

先想象这样一个场景：每周我们都要写一份工作周报，周报要交给总监批阅。总监手下管理 着 150 个员工，如果我们每个人直接把周报发给总监，那总监可能要把一整周的时间都花在查看 邮件上面。 

现在我们把周报发给各自的组长，组长作为代理，把组内成员的周报合并提炼成一份后一次 性地发给总监。这样一来，总监的邮箱便清净多了。 

这个例子在程序世界里很容易引起共鸣，在 Web 开发中，也许最大的开销就是网络请求。 假设我们在做一个文件同步的功能，当我们选中一个 checkbox 的时候，它对应的文件就会被同 步到另外一台备用服务器上面，如图 6-3 所示。

我们先在页面中放置好这些 checkbox 节点：

```html
<div id="demo">
  <input type="checkbox" id="1"></input>1
  <input type="checkbox" id="2"></input>2
  <input type="checkbox" id="3"></input>3
  <input type="checkbox" id="4"></input>4
  <input type="checkbox" id="5"></input>5
  <input type="checkbox" id="6"></input>6
  <input type="checkbox" id="7"></input>7
  <input type="checkbox" id="8"></input>8
  <input type="checkbox" id="9"></input>9
</div>
```

接下来，给这些 checkbox 绑定点击事件，并且在点击的同时往另一台服务器同步文件：

```js
var synchronousFile=function(id){
  console.log( '开始同步文件，id 为: ' + id );
};

var checkbox=document.getElementsByTagName("input");

for ( var i = 0, c; c = checkbox[ i++ ]; ){
  c.onclick = function(){
    if ( this.checked === true ){
      synchronousFile( this.id );
    }
  }
};
```

当我们选中 3 个 checkbox 的时候，依次往服务器发送了 3 次同步文件的请求。而点击一个 checkbox 并不是很复杂的操作，作为 APM250+的资深 Dota 玩家，我有把握一秒钟之内点中 4 个 checkbox。可以预见，如此频繁的网络请求将会带来相当大的开销。 

解决方案是，我们可以通过一个代理函数 proxySynchronousFile 来收集一段时间之内的请求， 最后一次性发送给服务器。比如我们等待 2 秒之后才把这 2 秒之内需要同步的文件 ID 打包发给 服务器，如果不是对实时性要求非常高的系统，2 秒的延迟不会带来太大副作用，却能大大减轻 服务器的压力。代码如下：

```js
var synchronousFile=function(id){
  console.log( '开始同步文件，id 为: ' + id );
};

var proxySynchronousFile=(function(){
  var cache=[];  //保存一段时间内需要同步的 ID
  var timer;  //定时器
  return function(id){
    cache.push(id);
    if (timer) {  //保证不会覆盖已经启动的定时器
      return;
    }
    timer=setTimeout(function(){
      synchronousFile(cache.join(","));  //2 秒后向本体发送需要同步的 ID 集合
      clearTimeout(timer);  //清空定时器
      timer=null;
      cache.length=0;  //清空 ID 集合
    },2000);
  }
})();

var checkbox=document.getElementsByTagName("input");

for ( var i = 0, c; c = checkbox[ i++ ]; ){
  c.onclick = function(){
    if ( this.checked === true ){
      proxySynchronousFile( this.id );
    }
  }
};

```

### 虚拟代理在惰性加载中的应用

未加载真正的 miniConsole.js 之前的代码如下：

```js
var cache=[];
var miniConsole={
  log:function(){
    var args=arguments;
    cache.push(function(){
      return miniConsole.log.apply(miniConsole,args);
    });
  }
};

miniConsole.log(1);
```

当用户按下 F2 时，开始加载真正的 miniConsole.js，代码如下：

```js
var handler=function(ev){
  if (ev.keyCode=113) {
    var script=document.createElement("script");
    script.onload=function(){
      for(var i=0,fn;fn=cache[i++];){
        fn();
      }
    };
    script.src="miniConsole.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  }
};

document.body.addEventListener("keydown",handler,false);
```

miniConsole.js 代码

```js
miniConsole={
	log:function(){
		//
		console.log(Array.prototype.join.call(arguments));
	}
};
```

虽然我们没有给出 miniConsole.js 的真正代码，但这不影响我们理解其中的逻辑。当然这里 还要注意一个问题，就是**我们要保证在 F2 被重复按下的时候，miniConsole.js 只被加载一次。另外我们整理一下 miniConsole 代理对象的代码，使它成为一个标准的虚拟代理对象**，代码如下：

```js
var miniConsole=(function(){
  var cache=[];
  var handler=function(ev){
    if (ev.keyCode=113) {
      var script=document.createElement("script");
      script.onload=function(){
        for(var i=0,fn;fn=cache[i++];){
          fn();
        }
      };
      script.src="miniConsole.js";
      document.getElementsByTagName("head")[0].appendChild(script);
      document.body.removeEventListener("keydown",handler);  //只加载一次 miniConsole.js
    }
  };
  document.body.addEventListener("keydown",handler,false);
  return {
    log:function(){
      var args=arguments;
      cache.push(function(){
        return miniConsole.log.apply(miniConsole,args);
      });
    }
  }
  
})();

miniConsole.log(66);
miniConsole.log(26);
```



### 缓存代理

缓存代理可以为一些开销大的运算结果提供暂时的存储，在下次运算时，如果传递进来的参数跟之前一致，则可以直接返回前面存储的运算结果。

#### 缓存代理的例子——计算乘积

为了节省示例代码，以及让读者把注意力集中在代理模式上面，这里编写一个简单的求乘积的程序，请读者自行把它脑补为复杂的计算。

先创建一个用于求乘积的函数：

```js

var mult = function(){
   console.log( '开始计算乘积' );
   var a = 1;
   for ( var i = 0, l = arguments.length; i < l; i++ ){
      a = a * arguments[i];
   }
   return a;
};

console.log(mult( 2, 3 ));
console.log(mult( 2, 3 ,4));
```

现在加入缓存代理函数：

```js
var proxyMult = (function(){
   var cache = {};
   return function(){
   var args = Array.prototype.join.call( arguments, ',' );
   if ( args in cache ){
      return cache[ args ];
   }
   return cache[ args ] = mult.apply( this, arguments );
   }
})();

console.log(proxyMult( 1,2, 3,4 ));
console.log(proxyMult( 1,2, 3 ,4));
```

当我们第二次调用 proxyMult( 1, 2, 3, 4 )的时候，本体 mult 函数并没有被计算，proxyMult 直接返回了之前缓存好的计算结果。 

通过增加缓存代理的方式，mult 函数可以继续专注于自身的职责——计算乘积，缓存的功能 是由代理对象实现的。

#### 缓存代理用于ajax异步请求数据

我们在常常在项目中遇到分页的需求，同一页的数据理论上只需要去后台拉取一次，这些已 经拉取到的数据在某个地方被缓存之后，下次再请求同一页的时候，便可以直接使用之前的数据。

 显然这里也可以引入缓存代理，实现方式跟计算乘积的例子差不多，**唯一不同的是，请求数 据是个异步的操作，我们无法直接把计算结果放到代理对象的缓存中，而是要通过回调的方式。** 具体代码不再赘述，读者可以自行实现。



### 用高阶函数动态创建代理

通过传入高阶函数这种更加灵活的方式，可以为各种计算方法创建缓存代理。现在这些计算方法被当作参数传入一个专门用于创建缓存代理的工厂中， 这样一来，我们就可以为乘法、加 法、减法等创建缓存代理，代码如下：

```js

//计算乘积
var mult = function(){
   var a = 1;
   for ( var i = 0, l = arguments.length; i < l; i++ ){
      a = a * arguments[i];
   }
   return a;
};
//计算加和
var plus = function(){
   var a = 0;
   for ( var i = 0, l = arguments.length; i < l; i++ ){
      a = a + arguments[i];
   }
   return a;
};

//创建缓存代理的工厂
var createProxyFactory = function( fn ){
   var cache = {};
   return function(){
      var args = Array.prototype.join.call( arguments, ',' );
      if ( args in cache ){
         return cache[ args ];
      }
      return cache[ args ] = fn.apply( this, arguments );
   }
};


var proxyMult = (function(){
   var cache = {};
   return function(){
   var args = Array.prototype.join.call( arguments, ',' );
   if ( args in cache ){
      return cache[ args ];
   }
   return cache[ args ] = mult.apply( this, arguments );
   }
})();

var proxyMult = createProxyFactory( mult ),
proxyPlus = createProxyFactory( plus );

console.log(proxyMult( 1, 2, 3, 4 ));
console.log(proxyMult( 1, 2, 3, 4 ));
console.log(proxyPlus( 1, 2, 3, 4 ));
console.log(proxyPlus( 1, 2, 3, 4 ));
```

### 其他代理模式

代理模式的变体种类非常多，限于篇幅及其在 JavaScript 中的适用性，本章只简约介绍一下 这些代理，就不一一详细展开说明了。 
- 防火墙代理：控制网络资源的访问，保护主题不让“坏人”接近。 
- 远程代理：为一个对象在不同的地址空间提供局部代表，在 Java 中，远程代理可以是另 一个虚拟机中的对象。
- 保护代理：用于对象应该有不同访问权限的情况。 
- 智能引用代理：取代了简单的指针，它在访问对象时执行一些附加操作，比如计算一个 对象被引用的次数。 
- 写时复制代理：通常用于复制一个庞大对象的情况。写时复制代理延迟了复制的过程， 当对象被真正修改时，才对它进行复制操作。写时复制代理是虚拟代理的一种变体，DLL （操作系统中的动态链接库）是其典型运用场景。



## 迭代器模式

迭代器模式是**指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象 的内部表示**。迭代器模式可以把迭代的过程从业务逻辑中分离出来，在使用迭代器模式之后，即 使不关心对象的内部构造，也可以按顺序访问其中的每个元素。

### jQuery 中的迭代器

迭代器模式**无非就是循环访问聚合对象中的各个元素**。比如 jQuery 中的$.each 函数，其中回调函数中的参数 i 为当前索引，n 为当前元素，代码如下：

```js
$.each( [1, 2, 3], function( i, n ){
	console.log( '当前下标为： '+ i );
	console.log( '当前值为:' + n );
});
```

### 实现自己的迭代器

现在我们来自己实现一个 each 函数，each 函数接受 2 个参数，第一个为被循环的数组，第 二个为循环中的每一步后将被触发的回调函数：

```js
var each=function(arr,callback){
   for(var i=0;i<arr.length;i++){
      callback.call(arr[i],i,arr[i]);  //把下标和元素当作参数传给 callback 函数
   }
};

each([12,3,4],function(i,n){
   console.log([i,n]);
})
```

### 内部迭代器和外部迭代器

#### 内部迭代器

我们刚刚编写的 each 函数属于内部迭代器，each 函数的内部已经定义好了迭代规则，它完 全接手整个迭代过程，外部只需要一次初始调用。 

内部迭代器在调用的时候非常方便，**外界不用关心迭代器内部的实现，跟迭代器的交互也仅 仅是一次初始调用**，但这也**刚好是内部迭代器的缺点**。由于内部迭代器的迭代规则已经被提前规 定，上面的 each 函数就无法同时迭代 2 个数组了。 

比如现在有个需求，要判断 2 个数组里元素的值是否完全相等， 如果不改写 each 函数本身 的代码，我们能够入手的地方似乎只剩下 each 的回调函数了，代码如下：

```js
var each=function(arr,callback){
   for(var i=0;i<arr.length;i++){
      callback.call(arr[i],i,arr[i]);  //把下标和元素当作参数传给 callback 函数
   }
};

var compare = function( ary1, ary2 ){
   if ( ary1.length !== ary2.length ){
      throw new Error ( 'ary1 和 ary2 不相等' );
   }
   each( ary1, function( i, n ){
      if ( n !== ary2[ i ] ){
         throw new Error ( 'ary1 和 ary2 不相等' );
      }
   });
   console.log ( 'ary1 和 ary2 相等' );
};

compare( [ 1, 2, 3 ], [ 1, 2, 4 ] );
```

说实话，**这个 compare 函数一点都算不上好看**，我们目前能够顺利完成需求，还要感谢在 JavaScript 里可以把函数当作参数传递的特性，但在其他语言中未必就能如此幸运。

在一些没有闭包的语言中，内部迭代器本身的实现也相当复杂。比如 C 语言中的内部迭代器 是用函数指针来实现的，循环处理所需要的数据都要以参数的形式明确地从外面传递进去。

#### 外部迭代器

外部迭代器**必须显式地请求迭代下一个元素**。

外部迭代器增加了一些调用的复杂度，**但相对也增强了迭代器的灵活性**，我们可以手工控制迭代的过程或者顺序。

下面这个外部迭代器的实现来自《松本行弘的程序世界》第 4 章，原例用 Ruby 写成，这里我们翻译成 JavaScript：

```js
var Iterator=function(obj){
   var current=0;
   var next=function(){
      current+=1;
   };
   var isDone=function(){
      return current>=obj.length;
   };
   var getCurrItem=function(){
      return obj[current];
   };
   return {
      next:next,
      isDone:isDone,
      getCurrItem:getCurrItem,
      length:obj.length
   }
};
```

再看看如何改写 compare 函数：

```js
var compare = function(iterator1,iterator2){
   if ( iterator1.length !== iterator2.length ){
      console.log( 'iterator1 和 iterator2 不相等' );
      return;
   }
   while(!iterator1.isDone() && !iterator2.isDone()){
      if (iterator1.getCurrItem()!==iterator2.getCurrItem()) {
         console.log( 'iterator1 和 iterator2 不相等' );
         return;
      }
      iterator1.next();
      iterator2.next();
   }
   console.log ( 'iterator1 和 iterator2 相等' );
};

var iterator1 = Iterator( [ 1, 2, 3 ,4] );
var iterator2 = Iterator( [ 1, 2, 3 ,5] );
compare( iterator1, iterator2 ); 
```

**外部迭代器虽然调用方式相对复杂，但它的适用面更广，也能满足更多变的需求。**内部迭代器和外部迭代器在实际生产中没有优劣之分，究竟使用哪个要根据需求场景而定。

### 迭代类数组对象和字面量对象

迭代器模式不仅可以迭代数组，还可以迭代一些类数组的对象。比如 arguments、 {"0":'a',"1":'b'}等。 通过上面的代码可以观察到，无论是内部迭代器还是外部迭代器，只要被 迭代的聚合对象拥有 length 属性而且可以用下标访问，那它就可以被迭代。

在 JavaScript 中，for in 语句可以用来迭代普通字面量对象的属性。jQuery 中提供了$.each` 函数来封装各种迭代行为：

```js
$.each = function( obj, callback ) {
    var value,
    i = 0,
    length = obj.length,
    isArray = isArraylike( obj );
    if ( isArray ) { // 迭代类数组
        for ( ; i < length; i++ ) {
            value = callback.call( obj[ i ], i, obj[ i ] );
            if ( value === false ) {
           	 break;
        	}
    	}
    } else {
        for ( i in obj ) { // 迭代 object 对象
            value = callback.call( obj[ i ], i, obj[ i ] );
            if ( value === false ) {
            	break;
            }
        }
    }
    return obj;
};
```

### 倒序迭代器

由于 GoF 中对迭代器模式的定义非常松散，所以我们可以有多种多样的迭代器实现。总的 来说， 迭代器模式提供了循环访问一个聚合对象中每个元素的方法，但它没有规定我们以顺序、 倒序还是中序来循环遍历聚合对象。

下面我们分分钟实现一个倒序访问的迭代器：

```js
var reverseEach = function( ary, callback ){
    for ( var l = ary.length - 1; l >= 0; l-- ){
    	callback( l, ary[ l ] );
    }
};
reverseEach( [ 0, 1, 2 ], function( i, n ){
	console.log( n ); // 分别输出：2, 1 ,0
});
```

### 中止迭代器

迭代器可以像普通 for 循环中的 break 一样，提供一种跳出循环的方法。在 1.4 节 jQuery 的each 函数里有这样一句：

```js
if ( value === false ) {
	break;
}
```

这句代码的意思是，**约定如果回调函数的执行结果返回 false，则提前终止循环**。下面我们把之前的 each 函数改写一下：

```js
var each = function( ary, callback ){
    for ( var i = 0, l = ary.length; i < l; i++ ){
        if ( callback( i, ary[ i ] ) === false ){ // callback 的执行结果返回 false，提前终止迭代
        	break;
        }
    }
};
each( [ 1, 2, 3, 4, 5 ], function( i, n ){
    if ( n > 3 ){ // n 大于 3 的时候终止循环
        return false;
    }
	console.log( n ); // 分别输出：1, 2, 3
});
```

### 迭代器模式的应用举例

我们把每种获取 upload 对象的方法都封装在各自的函数里，然后使用一个迭代器，迭代获取这些 upload 对象，直到获取到一个可用的为止：

```js
var getActiveUploadObj = function(){
    try{
    	return new ActiveXObject( "TXFTNActiveX.FTNUpload" ); // IE 上传控件
    }catch(e){
    	return false;
    }
};
var getFlashUploadObj = function(){
    if ( supportFlash() ){ // supportFlash 函数未提供
        var str = '<object type="application/x-shockwave-flash"></object>';
        return $( str ).appendTo( $('body') );
    }
    return false;
};
var getFormUpladObj = function(){
    var str = '<input name="file" type="file" class="ui-file"/>'; // 表单上传
    return $( str ).appendTo( $('body') );
};
```

在 getActiveUploadObj、getFlashUploadObj、getFormUpladObj 这 3 个函数中都有同一个约定： 如果该函数里面的 upload 对象是可用的，则让函数返回该对象，反之返回 false，提示迭代器继 续往后面进行迭代。 

所以我们的迭代器只需进行下面这几步工作。

- 提供一个可以被迭代的方法，使得 getActiveUploadObj，getFlashUploadObj 以及 getFlashUploadObj依照优先级被循环迭代。
- 如果正在被迭代的函数返回一个对象，则表示找到了正确的 upload 对象，反之如果该函数返回 false，则让迭代器继续工作。

迭代器代码如下：

```js
var iteratorUploadObj = function(){
    for ( var i = 0, fn; fn = arguments[ i++ ]; ){
        var uploadObj = fn();
        if ( uploadObj !== false ){
        	return uploadObj;
        }
    }
};
var uploadObj = iteratorUploadObj( getActiveUploadObj, getFlashUploadObj, getFormUpladObj );
```

重构代码之后，我们可以看到，获取不同上传对象的方法被隔离在各自的函数里互不干扰， try、catch 和 if 分支不再纠缠在一起，使得我们可以很方便地的维护和扩展代码。比如，后来 我们又给上传项目增加了 Webkit 控件上传和 HTML5 上传，我们要做的仅仅是下面一些工作。

增加分别获取 Webkit 控件上传对象和 HTML5 上传对象的函数：

```js
var getWebkitUploadObj = function(){
// 具体代码略
};
var getHtml5UploadObj = function(){
// 具体代码略
};
```

依照优先级把它们添加进迭代器：

```js
var uploadObj = iteratorUploadObj( getActiveUploadObj, getWebkitUploadObj,getFlashUploadObj, getHtml5UploadObj, getFormUpladObj );
```

迭代器模式是一种相对简单的模式，简单到很多时候我们都不认为它是一种设计模式。目前的绝大部分语言都内置了迭代器。



## 发布—订阅模式

发布—订阅模式又叫观察者模式，它定义对象间的一种一对多的依赖关系，当一个对象的状 态发生改变时，所有依赖于它的对象都将得到通知。在 JavaScript 开发中，我们一般用事件模型 来替代传统的发布—订阅模式。

### 现实中的发布－订阅模式

不论是在程序世界里还是现实生活中，发布—订阅模式的应用都非常之广泛。我们先看一个现实中的例子。

### 发布－订阅模式的作用

第一点说明**发布—订阅模式可以广泛应用于异步编程中，这是一种替代传递回调函数的方案**。 比如，我们可以订阅 ajax 请求的 error、succ 等事件。 或者如果想在动画的每一帧完成之后做一 些事情，那我们可以订阅一个事件，然后在动画的每一帧完成之后发布这个事件。在异步编程中 使用发布—订阅模式，我们就无需过多关注对象在异步运行期间的内部状态，而只需要订阅感兴 趣的事件发生点。 

第二点说明**发布—订阅模式可以取代对象之间硬编码的通知机制，一个对象不用再显式地调 用另外一个对象的某个接口**。发布—订阅模式让两个对象松耦合地联系在一起，虽然不太清楚彼 此的细节，但这不影响它们之间相互通信。当有新的订阅者出现时，发布者的代码不需要任何修 改；同样发布者需要改变时，也不会影响到之前的订阅者。只要之前约定的事件名没有变化，就 可以自由地改变它们。

### DOM 事件

实际上，只要我们曾经在 DOM 节点上面绑定过事件函数，那我们就曾经使用过发布—订阅模式，来看看下面这两句简单的代码发生了什么事情：

```js
document.body.addEventListener( 'click', function(){
	alert(2);
}, false );
document.body.click(); // 模拟用户点击
```

在这里需要监控用户点击 document.body 的动作，但是我们没办法预知用户将在什么时候点 击。所以我们订阅 document.body 上的 click 事件，当 body 节点被点击时，body 节点便会向订阅 者发布这个消息。这很像购房的例子，购房者不知道房子什么时候开售，于是他在订阅消息后等 待售楼处发布消息。 

当然我们还可以随意增加或者删除订阅者，增加任何订阅者都不会影响发布者代码的编写：

```js
document.body.addEventListener( 'click', function(){
	alert(2);
}, false );

document.body.addEventListener( 'click', function(){
	alert(3);
}, false );

document.body.addEventListener( 'click', function(){
	alert(4);
}, false );

document.body.click(); // 模拟用户点击
```

注意，手动触发事件更好的做法是 IE 下用 fireEvent，标准浏览器下用 dispatchEvent 实现。

### 自定义事件

除了 DOM 事件，我们还会经常实现一些自定义的事件，这种依靠自定义事件完成的发布— 订阅模式可以用于任何 JavaScript 代码中。 

现在看看如何一步步实现发布—订阅模式。

- 首先要指定好谁充当发布者（比如售楼处）；
- 然后给发布者添加一个缓存列表，用于存放回调函数以便通知订阅者（售楼处的花名册）；
- 最后发布消息的时候，发布者会遍历这个缓存列表，依次触发里面存放的订阅者回调函 数（遍历花名册，挨个发短信）。 

另外，我们还可以往回调函数里填入一些参数，订阅者可以接收这些参数。这是很有必要的， 比如售楼处可以在发给订阅者的短信里加上房子的单价、面积、容积率等信息，订阅者接收到这 些信息之后可以进行各自的处理：

```js
var salesOffices={};  //定义售楼处
salesOffices.clientList=[];  //缓存列表，存放订阅者的回调函数

salesOffices.listen=function(fn){  //增加订阅者
   this.salesOffices.push(fn);  //订阅的消息添加进缓存列表
}

salesOffices.trigger=function(){  //发布消息
   for(let i=0,fn;fn=this.clientList[i++];){
      fn.apply(this,arguments);  // arguments 是发布消息时带上的参数
   }
};

```

进行一些简单的测试：

```js
salesOffices.listen( function( price, squareMeter ){ // 小明订阅消息
   console.log( '价格= ' + price );
   console.log( 'squareMeter= ' + squareMeter );
});

salesOffices.listen( function( price, squareMeter ){ // 小红订阅消息
   console.log( '价格= ' + price );
   console.log( 'squareMeter= ' + squareMeter );
});

salesOffices.trigger( 2000000, 88 ); // 输出：200 万，88 平方米
salesOffices.trigger( 3000000, 110 ); // 输出：300 万，110 平方米

/*
价格= 2000000
squareMeter= 88
价格= 2000000
squareMeter= 88
价格= 3000000
squareMeter= 110
价格= 3000000
squareMeter= 110
*/
```

至此，我们已经实现了一个最简单的发布—订阅模式，但这里还存在一些问题。我们看到订 阅者接收到了发布者发布的每个消息，虽然小明只想买 88 平方米的房子，但是发布者把 110 平 方米的信息也推送给了小明，这对小明来说是不必要的困扰。所以我们有必要增加一个标示 key， 让订阅者只订阅自己感兴趣的消息。改写后的代码如下：

```js
var salesOffices={};  //定义售楼处
salesOffices.clientList={};  //缓存列表，存放订阅者的回调函数

salesOffices.listen=function(key,fn){  //增加订阅者
   if (!this.clientList[key]) {
      this.clientList[key]=[];  //如果还没有订阅过此类消息，给该类消息创建一个缓存列表
   }
   this.clientList[key].push(fn);  //订阅的消息添加进缓存列表
}

salesOffices.trigger=function(){  //发布消息
   var key=Array.prototype.shift.call(arguments);  //取出消息类型
   var fns=this.clientList[key];  //取出该消息对应的回调函数集合
   if (!fns || fns.length===0) {
      return false;  //如果没有订阅该消息，则返回
   }
   for(let i=0,fn;fn=fns[i++];){
      fn.apply(this,arguments);  // arguments 是发布消息时带上的参数
   }
};

salesOffices.listen( 'squareMeter88', function( price ){ // 小明订阅 88 平方米房子的消息
   console.log( '价格= ' + price ); // 输出： 2000000
});

salesOffices.listen( 'squareMeter110', function( price ){ // 小红订阅 110 平方米房子的消息
   console.log( '价格= ' + price ); // 输出： 3000000
});

salesOffices.trigger( 'squareMeter88', 2000000 ); // 发布 88 平方米房子的价格
salesOffices.trigger( 'squareMeter110', 3000000 ); // 发布 110 平方米房子的价格

/*
价格= 2000000
价格= 3000000
*/
```

很明显，现在订阅者可以只订阅自己感兴趣的事件了。

### 发布－订阅模式的通用实现

现在我们已经看到了如何让售楼处拥有接受订阅和发布事件的功能。假设现在小明又去另一个售楼处买房子，那么这段代码是否必须在另一个售楼处对象上重写一次呢，有没有办法可以让 所有对象都拥有发布—订阅功能呢？ 答案显然是有的，JavaScript 作为一门解释执行的语言，给对象动态添加职责是理所当然的 事情。 

所以我们把发布—订阅的功能提取出来，放在一个单独的对象内：

```js
var event={
   clientList:{},
   listen:function(key,fn){
      if (!this.clientList[key]) {
         this.clientList[key]=[];
      }
      this.clientList[key].push(fn);  //订阅的消息添加进缓存列表
   },
   trigger:function(){  //发布消息
      var key=Array.prototype.shift.call(arguments);  //取出消息类型
      var fns=this.clientList[key];  //取出该消息对应的回调函数集合
      if (!fns || fns.length===0) {
         return false;  //如果没有订阅该消息，则返回
      }
      for(let i=0,fn;fn=fns[i++];){
         fn.apply(this,arguments);  // arguments 是发布消息时带上的参数
      }
   },
}
```

再定义一个 installEvent 函数，这个函数可以给所有的对象都动态安装发布—订阅功能：

```js
var installEvent=function(obj){
   for (var i in event){
      obj[i]=event[i];
   }
}
```

再来测试一番，我们给售楼处对象 salesOffices 动态增加发布—订阅功能：

```js
var salesOffices={};  //定义售楼处

installEvent(salesOffices);


salesOffices.listen( 'squareMeter88', function( price ){ // 小明订阅 88 平方米房子的消息
   console.log( '价格= ' + price ); // 输出： 2000000
});

salesOffices.listen( 'squareMeter110', function( price ){ // 小红订阅 110 平方米房子的消息
   console.log( '价格= ' + price ); // 输出： 3000000
});

salesOffices.trigger( 'squareMeter88', 2000000 ); // 发布 88 平方米房子的价格
salesOffices.trigger( 'squareMeter110', 3000000 ); // 发布 110 平方米房子的价格
```

### 取消订阅的事件

有时候，我们也许需要取消订阅事件的功能。比如小明突然不想买房子了，为了避免继续接收到售楼处推送过来的短信，小明需要取消之前订阅的事件。现在我们给 event 对象增加 remove方法：

```js
var event={
   clientList:{},
   listen:function(key,fn){
      if (!this.clientList[key]) {
         this.clientList[key]=[];
      }
      this.clientList[key].push(fn);  //订阅的消息添加进缓存列表
   },
   trigger:function(){  //发布消息
      var key=Array.prototype.shift.call(arguments);  //取出消息类型
      var fns=this.clientList[key];  //取出该消息对应的回调函数集合
      if (!fns || fns.length===0) {
         return false;  //如果没有订阅该消息，则返回
      }
      for(let i=0,fn;fn=fns[i++];){
         fn.apply(this,arguments);  // arguments 是发布消息时带上的参数
      }
   },
   remove:function(key,fn){
      var fns=this.clientList[key];
      if (!fns) {
         return false;  //如果 key 对应的消息没有被人订阅，则直接返回
      }
      if (!fn) {
         //如果没有传入具体的回调函数，表示需要取消 key 对应消息的所有订阅
         fns && (fns.length=0);
      }else{
         for(let i=fns.length-1;i>=0;i--){  //反向遍历订阅的回调函数列表
            let _fn=fns[i];
            if (_fn===fn) {
               fns.splice(i,1);  //删除订阅者的回调函数
            }
         }
      }

   }
}


var installEvent=function(obj){
   for (var i in event){
      obj[i]=event[i];
   }
}
var salesOffices={};  //定义售楼处

installEvent(salesOffices);

var fn1=function( price ){ // 小明订阅 88 平方米房子的消息
   console.log( '价格= ' + price ); // 输出： 2000000
}
var fn2=function( price ){ // 小红订阅 110 平方米房子的消息
   console.log( '价格= ' + price ); // 输出： 3000000
}

salesOffices.listen( 'squareMeter88', fn1);

salesOffices.listen( 'squareMeter110', fn2);
salesOffices.remove("squareMeter88",fn1)
salesOffices.trigger( 'squareMeter88', 2000000 ); // 发布 88 平方米房子的价格
salesOffices.trigger( 'squareMeter110', 3000000 ); // 发布 110 平方米房子的价格
```



### 真实的例子——网站登录

假如我们正在开发一个商城网站，网站里有 header 头部、nav 导航、消息列表、购物车等模块。这几个模块的渲染有一个共同的前提条件，就是必须先用 ajax 异步请求获取用户的登录信息。 这是很正常的，比如用户的名字和头像要显示在 header 模块里，而这两个字段都来自用户登录后 返回的信息。 

至于 ajax 请求什么时候能成功返回用户信息，这点我们没有办法确定。现在的情节看起来像 极了售楼处的例子，小明不知道什么时候开发商的售楼手续能够成功办下来。 但现在还不足以说服我们在此使用发布—订阅模式，因为异步的问题通常也可以用回调函数 来解决。更重要的一点是，我们不知道除了 header 头部、nav 导航、消息列表、购物车之外，**将 来还有哪些模块需要使用这些用户信息**。如果它们和用户信息模块产生了强耦合，比如下面这样 的形式：

```js
login.succ(function(data){
    header.setAvatar( data.avatar); // 设置 header 模块的头像
    nav.setAvatar( data.avatar ); // 设置导航模块的头像
    message.refresh(); // 刷新消息列表
    cart.refresh(); // 刷新购物车列表
});
```

现在登录模块是我们负责编写的，但我们还必须了解 header 模块里设置头像的方法叫 setAvatar、购物车模块里刷新的方法叫 refresh，这种耦合性会使程序变得僵硬，header 模块不 能随意再改变 setAvatar 的方法名，它自身的名字也不能被改为 header1、header2。 这是针对具 体实现编程的典型例子，针对具体实现编程是不被赞同的。 

等到有一天，项目中又新增了一个收货地址管理的模块，这个模块本来是另一个同事所写的， 而此时你正在马来西亚度假，但是他却不得不给你打电话：“Hi，登录之后麻烦刷新一下收货地 址列表。”于是你又翻开你 3 个月前写的登录模块，在最后部分加上这行代码：

```js
login.succ(function( data ){
    header.setAvatar( data.avatar);
    nav.setAvatar( data.avatar );
    message.refresh();
    cart.refresh();
    address.refresh(); // 增加这行代码
});
```

用**发布—订阅模式**重写之后，对用户信息感兴趣的业务模块将自行订阅登录成功的消息事件。 当登录成功时，登录模块只需要发布登录成功的消息，而业务方接受到消息之后，就会开始进行 各自的业务处理，**登录模块并不关心业务方究竟要做什么，也不想去了解它们的内部细节**。改善 后的代码如下：

```js
$.ajax( 'http:// xxx.com?login', function(data){ // 登录成功
	login.trigger( 'loginSucc', data); // 发布登录成功的消息
});
```

各模块监听登录成功的消息：

```js
var header = (function(){ // header 模块
	login.listen( 'loginSucc', function( data){
		header.setAvatar( data.avatar );
	});
    return {
        setAvatar: function( data ){
        	console.log( '设置 header 模块的头像' );
        }	
    }
})();
var nav = (function(){ // nav 模块
    login.listen( 'loginSucc', function( data ){
    	nav.setAvatar( data.avatar );
	});
    return {
        setAvatar: function( avatar ){
        	console.log( '设置 nav 模块的头像' );
        }
    }
})();
```

如上所述，我们随时可以把 setAvatar 的方法名改成 setTouxiang。如果有一天在登录完成之 后，又增加一个刷新收货地址列表的行为，那么只要在收货地址模块里加上监听消息的方法即可， 而这可以让开发该模块的同事自己完成，你作为登录模块的开发者，永远不用再关心这些行为了。 代码如下：

```js
var address = (function(){ // nav 模块
    login.listen( 'loginSucc', function( obj ){
    	address.refresh( obj );
    });
    return {
        refresh: function( avatar ){
        	console.log( '刷新收货地址列表' );
        }
    }
})();
```

### 全局的发布－订阅对象

回想下刚刚实现的发布—订阅模式，我们给售楼处对象和登录对象都添加了订阅和发布的功 能，这里还存在两个小问题。
- 我们给每个发布者对象都添加了 listen 和 trigger 方法，以及一个缓存列表 clientList， 这其实是一种资源浪费。
- 小明跟售楼处对象还是存在一定的耦合性，小明至少要知道售楼处对象的名字是 salesOffices，才能顺利的订阅到事件。见如下代码：

```js
salesOffices.listen( 'squareMeter100', function( price ){ // 小明订阅消息
	console.log( '价格= ' + price );
});
```

如果小明还关心 300 平方米的房子，而这套房子的卖家是 salesOffices2，这意味着小明要开始订阅 salesOffices2 对象。见如下代码：

```js
salesOffices2.listen( 'squareMeter300', function( price ){ // 小明订阅消息
	console.log( '价格= ' + price );
});
```

其实在现实中，买房子未必要亲自去售楼处，我们只要把订阅的请求交给中介公司，而各大 房产公司也只需要通过中介公司来发布房子信息。这样一来，我们不用关心消息是来自哪个房产 公司，我们在意的是能否顺利收到消息。当然，为了保证订阅者和发布者能顺利通信，订阅者和 发布者都必须知道这个中介公司。 

同样在程序中，发布—订阅模式可以用一个全局的 Event 对象来实现，**订阅者不需要了解消 息来自哪个发布者，发布者也不知道消息会推送给哪些订阅者，Event 作为一个类似“中介者” 的角色**，把订阅者和发布者联系起来。见如下代码：

```javascript
var Event=(function(){
   var clientList={},listen,trigger,remove;
   listen=function(key,fn){
      if (!clientList[key]) {
         clientList[key]=[];
      }
      clientList[key].push(fn);  //订阅的消息添加进缓存列表
   };
   trigger=function(){  //发布消息
      var key=Array.prototype.shift.call(arguments);  //取出消息类型
      var fns=clientList[key];  //取出该消息对应的回调函数集合
      if (!fns || fns.length===0) {
         return false;  //如果没有订阅该消息，则返回
      }
      for(let i=0,fn;fn=fns[i++];){
         fn.apply(this,arguments);  // arguments 是发布消息时带上的参数
      }
   };
   remove=function(key,fn){
      var fns=clientList[key];
      if (!fns) {
         return false;  //如果 key 对应的消息没有被人订阅，则直接返回
      }
      if (!fn) {
         //如果没有传入具体的回调函数，表示需要取消 key 对应消息的所有订阅
         fns && (fns.length=0);
      }else{
         for(let i=fns.length-1;i>=0;i--){  //反向遍历订阅的回调函数列表
            let _fn=fns[i];
            if (_fn===fn) {
               fns.splice(i,1);  //删除订阅者的回调函数
            }
         }
      }
   };
   return {
      listen:listen,
      trigger:trigger,
      remove:remove
   }
})();


var fn1=function( price ){ // 小明订阅 88 平方米房子的消息
   console.log( '价格= ' + price ); // 输出： 2000000
}
var fn2=function( price ){ // 小红订阅 110 平方米房子的消息
   console.log( '价格= ' + price ); // 输出： 3000000
}

Event.listen( 'squareMeter88', fn1);

Event.listen( 'squareMeter110', fn2);
Event.remove("squareMeter88",fn1)

Event.trigger( 'squareMeter88', 2000000 ); // 售楼处发布 88 平方米房子的价格
Event.trigger( 'squareMeter110', 3000000 ); // 售楼处发布 110 平方米房子的价格
```



### 模块间通信

上一节中实现的发布—订阅模式的实现，是基于一个全局的 Event 对象，我们利用它可以在 两个封装良好的模块中进行通信，这两个模块可以完全不知道对方的存在。就如同有了中介公司 之后，我们不再需要知道房子开售的消息来自哪个售楼处。 

比如现在有两个模块，a 模块里面有一个按钮，每次点击按钮之后，b 模块里的 div 中会显示 按钮的总点击次数，我们用全局发布—订阅模式完成下面的代码，使得 a 模块和 b 模块可以在保 持封装性的前提下进行通信。

```html
<div id="demo">
  <button id="count">点我</button>
  <div id="show"></div>
</div>
```

```js
  var a=(function(){
    var count=0;
    let button=document.getElementById("count");
    button.onclick=function(){
      Event.trigger("add",count++);
    }
  })();

  var b=(function(){
    var div=document.getElementById("show");
    Event.listen("add",function(count){
      div.innerHTML=count;
    });
  })();

```

但在这里我们要留意另一个问题，**模块之间如果用了太多的全局发布—订阅模式来通信，那 么模块与模块之间的联系就被隐藏到了背后**。我们最终会搞不清楚消息来自哪个模块，或者消息 会流向哪些模块，这又会给我们的维护带来一些麻烦，也许某个模块的作用就是暴露一些接口给 其他模块调用。

### 必须先订阅再发布吗

我们所了解到的发布—订阅模式，都是订阅者必须先订阅一个消息，随后才能接收到发布者 发布的消息。如果把顺序反过来，发布者先发布一条消息，而在此之前并没有对象来订阅它，这 条消息无疑将消失在宇宙中。 

在某些情况下，我们需要先将这条消息保存下来，等到有对象来订阅它的时候，再重新把消 息发布给订阅者。就如同 QQ 中的离线消息一样，离线消息被保存在服务器中，接收人下次登录 上线之后，可以重新收到这条消息。 

这种需求在实际项目中是存在的，比如在之前的商城网站中，获取到用户信息之后才能渲染 用户导航模块，而获取用户信息的操作是一个 ajax 异步请求。当 ajax 请求成功返回之后会发布 一个事件，在此之前订阅了此事件的用户导航模块可以接收到这些用户信息。 

但是这只是理想的状况，因为异步的原因，我们不能保证 ajax 请求返回的时间，有时候它返 回得比较快，而此时用户导航模块的代码还没有加载好（还没有订阅相应事件），特别是在用了 一些模块化惰性加载的技术后，这是很可能发生的事情。

也许我们还需要一个方案，使得我们的 发布—订阅对象**拥有先发布后订阅**的能力。 

为了满足这个需求，我们要建立一个存放离线事件的堆栈，**当事件发布的时候，如果此时还 没有订阅者来订阅这个事件，我们暂时把发布事件的动作包裹在一个函数里，这些包装函数将被 存入堆栈中**，等到终于有对象来订阅此事件的时候，我们将遍历堆栈并且依次执行这些包装函数， 也就是重新发布里面的事件。**当然离线事件的生命周期只有一次**，就像 QQ 的未读消息只会被重 新阅读一次，所以刚才的操作我们只能进行一次。

### 全局事件的命名冲突

全局的发布—订阅对象里只有一个 clinetList 来存放消息名和回调函数，大家都通过它来订 阅和发布各种消息，久而久之，难免会出现事件名冲突的情况，**所以我们还可以给 Event 对象提 供创建命名空间的功能。**

```js
var Event=(function(){
   var global=this,Event,_default="default";

   Event=function(){
      var _listen,_trigger,_remove,
         _slice=Array.prototype.slice,
         _shift=Array.prototype.shift,
         _unshift=Array.prototype.unshift,
         namespaceCache={},
         _create,
         find,
         each=function(arr,fn){
            var ret;
            for (let i=0;i<arr.length;i++){
               let n=arr[i];
               ret=fn.call(n,i,n);
            }
            return ret;
         };
         _listen=function(key,fn,cache){
            if (!cache[key]) {
               cache[key]=[];
            }
            cache[key].push(fn);  //订阅的消息添加进缓存列表
         };
         _remove=function(key,cache,fn){
            if (cache[key]) {
              if(fn){
                  for(let i=cache[key].length-1;i>=0;i--){  //反向遍历订阅的回调函数列表
                     if (cache[key][i]===fn) {
                        cache[key].splice(i,1);  //删除订阅者的回调函数
                     }
                  }
               }else{
                  cache[key]=[];
               }
            }
         };
         _trigger=function(){  //发布消息
            var cache=_shift.call(arguments),
               key=_shift.call(arguments),
               args=arguments,
               _self=this,
               ret,
               stack=cache[key];
            if (!stack || stack.length===0) {
               return;  //如果没有订阅该消息，则返回
            }
            return each(stack,function(){
               return this.apply(_self,args);
            });
         };
         _create=function(namespace){
            var namespace=namespace || _default;
            var cache={};
            var offlineStack=[];//离线事件
            var ret={
               listen:function(key,fn,last){
                  _listen(key,fn,cache);
                  if (offlineStack===null) {
                     return;
                  }
                  if (last==="last") {
                     offlineStack.length && offlineStack.pop()();
                  }else{
                     each(offlineStack,function(){
                        this();
                     });
                  }
                  offlineStack=null;
               },
               one:function(key,fn,last){
                  _remove(key,cache);
                  this.listen(key,fn,last);
               },
               remove:function(key,fn){
                  _remove(key,cache,fn);
               },
               trigger:function(){
                  var fn,args,_self=this;
                  _unshift.call(arguments,cache);
                  args=arguments;
                  fn=function(){
                     return _trigger.apply(_self,args);
                  };
                  if (offlineStack) {
                     return offlineStack.push(fn);
                  }
                  return fn();
               },
            };
            return namespace ? (namespaceCache[namespace] ? namespaceCache[namespace] : namespaceCache[namespace]=ret) : ret;
         };
      return {
         create:_create,
         one:function(key,fn,last){
            var event=this.create();
            event.one(key,fn,last);
         },
         remove:function(key,fn){
            var event=this.create();
            event.remove(key,fn);
         },
         listen:function(key,fn,last){
            var event=this.create();
            event.listen(key,fn,last);
         },
         trigger:function(){
            var event=this.create();
            event.trigger.apply(this,arguments);
         }
      };
   }();
   return Event;
})();



/************** 先发布后订阅 ********************/
Event.trigger( 'click', 1 );

Event.listen( 'click', function( a ){
   console.log( a ); // 输出：1
});

/************** 使用命名空间 ********************/
Event.create( 'namespace1' ).listen( 'click', function( a ){
   console.log( a ); // 输出：1
});

Event.create( 'namespace1' ).trigger( 'click', 1 );

Event.create( 'namespace2' ).listen( 'click', function( a ){
   console.log( a ); // 输出：2
});
Event.create( 'namespace2' ).trigger( 'click', 2 );
```

### JavaScript 实现发布－订阅模式的便利性

这里要提出的是，我们一直讨论的发布—订阅模式，跟一些别的语言（比如 Java）中的实现 还是有区别的。在 Java 中实现一个自己的发布—订阅模式，通常会把订阅者对象自身当成引用传 入发布者对象中，同时订阅者对象还需提供一个名为诸如 update 的方法，供发布者对象在适合的 时候调用。**而在 JavaScript 中，我们用注册回调函数的形式来代替传统的发布—订阅模式，显得更 加优雅和简单。** 

另外，在 JavaScript 中，我们无需去选择使用推模型还是拉模型。**推模型**是指在事件发生时， 发布者一次性把所有更改的状态和数据都推送给订阅者。**拉模型**不同的地方是，发布者仅仅通知 订阅者事件已经发生了，此外发布者要提供一些公开的接口供订阅者来主动拉取数据。拉模型的 好处是可以让订阅者“按需获取”，但同时有可能让发布者变成一个“门户大开”的对象，同时 增加了代码量和复杂度。 

刚好在 JavaScript 中，arguments 可以很方便地表示参数列表，所以我们一般都会选择推模型， 使用 Function.prototype.apply 方法把所有参数都推送给订阅者。

### 发布－订阅模式的优缺点

发布—订阅模式的**优点**非常明显，一为时间上的解耦，二为对象之间的解耦。它的应用非常 广泛，既可以用在异步编程中，也可以帮助我们完成更松耦合的代码编写。发布—订阅模式还可 以用来帮助实现一些别的设计模式，比如中介者模式。 从架构上来看，无论是 MVC 还是 MVVM， 都少不了发布—订阅模式的参与，而且 JavaScript 本身也是一门基于事件驱动的语言。 

当然，发布—订阅模式也不是完全没有**缺点**。创建订阅者本身要消耗一定的时间和内存，而 且当你订阅一个消息后，也许此消息最后都未发生，但这个订阅者会始终存在于内存中。另外， 发布—订阅模式虽然可以弱化对象之间的联系，但如果过度使用的话，对象和对象之间的必要联 系也将被深埋在背后，会导致程序难以跟踪维护和理解。特别是有多个发布者和订阅者嵌套到一 起的时候，要跟踪一个 bug 不是件轻松的事情。



## 命令模式

### 命令模式的用途

命令模式是最简单和优雅的模式之一，命令模式中的**命令（command）指的是一个执行某些 特定事情的指令**。 

命令模式最常见的应用场景是：**有时候需要向某些对象发送请求，但是并不知道请求的接收 者是谁，也不知道被请求的操作是什么。此时希望用一种松耦合的方式来设计程序，使得请求发送者和请求接收者能够消除彼此之间的耦合关系。** 

拿订餐来说，客人需要向厨师发送请求，但是完全不知道这些厨师的名字和联系方式，也不 知道厨师炒菜的方式和步骤。 命令模式把客人订餐的请求封装成 command 对象，也就是订餐中的 订单对象。这个对象可以在程序中被四处传递，就像订单可以从服务员手中传到厨师的手中。这 样一来，客人不需要知道厨师的名字，从而解开了请求调用者和请求接收者之间的耦合关系。 

另外，相对于过程化的请求调用，**command 对象拥有更长的生命周期**。对象的生命周期是跟 初始请求无关的，因为这个请求已经被封装在了 command 对象的方法中，成为了这个对象的行为。 我们可以在程序运行的任意时刻去调用这个方法，就像厨师可以在客人预定 1 个小时之后才帮他 炒菜，相当于程序在 1 个小时之后才开始执行 command 对象的方法。 

除了这两点之外，命令模式还支持撤销、排队等操作，本章稍后将会详细讲解。

### 令模式的例子——菜单程序

假设我们正在编写一个用户界面程序，该用户界面上至少有数十个 Button 按钮。因为项目 比较复杂，所以我们决定让某个程序员负责绘制这些按钮，而另外一些程序员则负责编写点击按 钮后的具体行为，这些行为都将被封装在对象里。 

在大型项目开发中，这是很正常的分工。对于绘制按钮的程序员来说，他完全不知道某个按 钮未来将用来做什么，可能用来刷新菜单界面，也可能用来增加一些子菜单，他只知道点击这个 按钮会发生某些事情。那么当完成这个按钮的绘制之后，应该如何给它绑定 onclick 事件呢？

我们很快可以找到在这里运用命令模式的理由：点击了按钮之后，必须向某些负责具体行为 的对象发送请求，这些对象就是请求的接收者。但是目前并不知道接收者是什么对象，也不知道 接收者究竟会做什么。此时我们**需要借助命令对象的帮助，以便解开按钮和负责具体行为对象之 间的耦合**。 

设计模式的主题总是把不变的事物和变化的事物分离开来，命令模式也不例外。按下按钮之 后会发生一些事情是不变的，而具体会发生什么事情是可变的。通过 command 对象的帮助，将来 我们可以轻易地改变这种关联，因此也可以在将来再次改变按钮的行为。 下面进入代码编写阶段，首先在页面中完成这些按钮的“绘制”：

```html
<div id="demo">
  <button id="button1">点击按钮 1</button>
  <button id="button2">点击按钮 2</button>
  <button id="button3">点击按钮 3</button>
  <div id="show"></div>
</div>

<script type="text/javascript">

  var button1 = document.getElementById( 'button1' );
  var button2 = document.getElementById( 'button2' );
  var button3 = document.getElementById( 'button3' );

</script>
```

接下来定义 setCommand 函数，setCommand 函数负责往按钮上面安装命令。可以肯定的是，点 击按钮会执行某个 command 命令，执行命令的动作被约定为调用 command 对象的 execute()方法。 虽然还不知道这些命令究竟代表什么操作，但**负责绘制按钮的程序员不关心这些事情，他只需要 预留好安装命令的接口**，command 对象自然知道如何和正确的对象沟通：

```js
  var setCommand=function(button,command){
    button.onclick=function(){
      command.execute();
    }
  };
```

最后，负责编写点击按钮之后的具体行为的程序员总算交上了他们的成果，他们完成了刷新 菜单界面、增加子菜单和删除子菜单这几个功能，这几个功能被分布在 MenuBar 和 SubMenu 这两 个对象中：

```js
 var MenuBar={
    refresh:function(){
      console.log("刷新菜单目录");
    }
  };
  var SubMenu={
    add:function(){
      console.log("增加子菜单");
    },
    del:function(){
      console.log("删除子菜单");
    }
  };
```

在让 button 变得有用起来之前，我们要先把这些行为都封装在命令类中：

```js
  var RefreshMenuBarCommand=function(receiver){
    this.receiver=receiver;
  };
  RefreshMenuBarCommand.prototype.execute=function(){
    this.receiver.refresh();
  };
  var AddSubMenuCommand = function( receiver ){
    this.receiver = receiver;
  };
  AddSubMenuCommand.prototype.execute = function(){
    this.receiver.add();
  };
  var DelSubMenuCommand = function( receiver ){
    this.receiver = receiver;
  };
  DelSubMenuCommand.prototype.execute = function(){
    this.receiver.del();
  };
```

最后就是把命令接收者传入到 command 对象中，并且把 command 对象安装到 button 上面：

```js
  var refreshMenuBarCommand=new RefreshMenuBarCommand(MenuBar);
  var addSubMenuCommand=new AddSubMenuCommand(SubMenu);
  var delSubMenuCommand=new DelSubMenuCommand(SubMenu);

  setCommand(button1,refreshMenuBarCommand);
  setCommand(button2,addSubMenuCommand);
  setCommand(button3,delSubMenuCommand);
```

以上只是一个很简单的命令模式示例，但从中可以看到我们是如何把请求发送者和请求接收者解耦开的。

### JavaScript 中的命令模式

也许我们会感到很奇怪，所谓的命令模式，看起来就是给对象的某个方法取了 execute 的名 字。引入 command 对象和 receiver 这两个无中生有的角色无非是把简单的事情复杂化了，即使不 用什么模式，用下面寥寥几行代码就可以实现相同的功能：

```js
var bindClick = function( button, func ){
	button.onclick = func;
};
bindClick( button1, MenuBar.refresh );
bindClick( button2, SubMenu.add );
bindClick( button3, SubMenu.del );
```

这种说法是正确的，9.2 节中的示例代码是模拟传统面向对象语言的命令模式实现。**命令模 式将过程式的请求调用封装在 command 对象的 execute 方法里，通过封装方法调用，我们可以把 运算块包装成形**。command 对象可以被四处传递，所以在调用命令的时候，客户（Client）不需要 关心事情是如何进行的。 

**命令模式的由来**，其实**是回调（callback）函数的一个面向对象的替代品**。

JavaScript 作为将函数作为一等对象的语言，跟策略模式一样，命令模式也早已融入到了 JavaScript 语言之中。运算块不一定要封装在 command.execute 方法中，也可以封装在普通函数中。 函数作为一等对象，本身就可以被四处传递。即使我们依然需要请求“接收者”，那也未必使用 面向对象的方式，闭包可以完成同样的功能。 

在面向对象设计中，命令模式的接收者被当成 command 对象的属性保存起来，同时约定执行 命令的操作调用 command.execute 方法。**在使用闭包的命令模式实现中，接收者被封闭在闭包产 生的环境中，执行命令的操作可以更加简单，仅仅执行回调函数即可。**无论接收者被保存为对象 的属性，还是被封闭在闭包产生的环境中，在将来执行命令的时候，接收者都能被顺利访问。用 闭包实现的命令模式如下代码所示：

```js
  var setCommand=function(button,func){
    button.onclick=function(){
      func();
    }
  };

  var MenuBar={
    refresh:function(){
      console.log("刷新菜单目录");
    }
  };
  var RefreshMenuBarCommand=function(receiver){
    return function(){
      receiver.refresh();
    }
  };
  var refreshMenuBarCommand=new RefreshMenuBarCommand(MenuBar);

  setCommand(button1,refreshMenuBarCommand);

```

当然，如果想更明确地表达当前正在使用命令模式，或者除了执行命令之外，将来有可能还
要提供撤销命令等操作。那我们最好还是把执行函数改为调用 execute 方法：

```js
  var setCommand=function(button,command){
    button.onclick=function(){
      command.execute();
    }
  };

  var MenuBar={
    refresh:function(){
      console.log("刷新菜单目录");
    }
  };
  var RefreshMenuBarCommand=function(receiver){
    return {
      execute:function(){
        receiver.refresh();
      },
    };
  };
  var refreshMenuBarCommand=new RefreshMenuBarCommand(MenuBar);

  setCommand(button1,refreshMenuBarCommand);
```

### 撤销命令

命令模式的作用不仅是封装运算块，而且可以很方便地给命令对象增加撤销操作。就像订餐 时客人可以通过电话来取消订单一样。

下面来看撤销命令的例子。 本节的目标是利用 5.4 节中的 Animate 类来编写一个动画，这个动画的表现是让页面上的小 球移动到水平方向的某个位置。现在页面中有一个 input 文本框和一个 button 按钮，文本框中可 以输入一些数字，表示小球移动后的水平位置，小球在用户点击按钮后立刻开始移动，代码如下：

```html
<div id="demo">
  <div id="ball" style="position:absolute;background:#000;width:50px;height:50px"></div>
  输入小球移动后的位置：<input id="pos"/>
  <button id="moveBtn">开始移动</button>
</div>

<script type="text/javascript">

var ball = document.getElementById( 'ball' );
var pos = document.getElementById( 'pos' );
var moveBtn = document.getElementById( 'moveBtn' );
moveBtn.onclick = function(){
  var animate = new Animate( ball );
  animate.start( 'left', pos.value, 1000, 'strongEaseOut' );
};

</script>
```

如果文本框输入 200，然后点击 moveBtn 按钮，可以看到小球顺利地移动到水平方向 200px 的位置。现在我们需要一个方法让小球还原到开始移动之前的位置。当然也可以在文本框中再次 输入-200，并且点击 moveBtn 按钮，这也是一个办法，不过显得很笨拙。页面上最好有一个撤销 按钮，点击撤销按钮之后，小球便能回到上一次的位置。 

在给页面中增加撤销按钮之前，先把目前的代码改为用命令模式实现：

```js
var ball = document.getElementById( 'ball' );
var pos = document.getElementById( 'pos' );
var moveBtn = document.getElementById( 'moveBtn' );

var MoveCommand = function( receiver, pos ){
  this.receiver = receiver;
  this.pos = pos;
};
MoveCommand.prototype.execute = function(){
  this.receiver.start( 'left', this.pos, 1000, 'strongEaseOut' );
};

var moveCommand;
moveBtn.onclick = function(){
  var animate = new Animate( ball );
  moveCommand = new MoveCommand( animate, pos.value );
  moveCommand.execute();
};
```

接下来增加撤销按钮：

```html
<button id="cancelBtn">cancel</cancel> <!--增加取消按钮-->
```

撤销操作的实现一般是给命令对象增加一个名为 unexecude 或者 undo 的方法，在该方法里执 行 execute 的反向操作。**在 command.execute 方法让小球开始真正运动之前，我们需要先记录小球 的当前位置，在 unexecude 或者 undo 操作中，再让小球回到刚刚记录下的位置，**代码如下：

```js
var ball = document.getElementById( 'ball' );
var pos = document.getElementById( 'pos' );
var moveBtn = document.getElementById( 'moveBtn' );
var cancelBtn=document.getElementById("cancelBtn");

var MoveCommand = function( receiver, pos ){
  this.receiver = receiver;
  this.pos = pos;
  this.oldPos=null;
};

MoveCommand.prototype.execute = function(){
  this.receiver.start( 'left', this.pos, 1000, 'strongEaseOut' );
  this.oldPos=this.receiver.dom.getBoundingClientRect()[this.receiver.propertyName];  //记录小球开始移动前的位置
};

MoveCommand.prototype.undo=function(){
  this.receiver.start("left",this.oldPos,1000,"strongEaseOut");  //回到小球移动前记录的位置
};

var moveCommand;
moveBtn.onclick = function(){
  var animate = new Animate( ball );
  animate.start( 'left', 500, 1500, 'strongEaseOut' );
  animate.start( 'top', 200, 1500, 'sineaseIn' );
  moveCommand = new MoveCommand( animate, pos.value );
  moveCommand.execute();
};

cancelBtn.onclick=function(){
  moveCommand.undo();  //撤销命令
};
```

```html
<div id="demo">
  <div id="ball" style="position:absolute;background:#000;width:50px;height:50px"></div>
  输入小球移动后的位置：<input id="pos"/>
  <button id="moveBtn">开始移动</button>
  <button id="cancelBtn">cancel</cancel> <!--增加取消按钮-->
</div>

<script type="text/javascript">

var tween={
   linear:function(t,b,c,d){
      return c*t/d+b;
   },
   easeIn:function(t,b,c,d){
      return c*(t/=d)*t+b;
   },
   strongEaseIn: function(t, b, c, d){
      return c * ( t /= d ) * t * t * t * t + b;
   },
   strongEaseOut: function(t, b, c, d){
      return c * ( ( t = t / d - 1) * t * t * t * t + 1 ) + b;
   },
   sineaseIn: function( t, b, c, d ){
      return c * ( t /= d) * t * t + b;
   },
   sineaseOut: function(t,b,c,d){
      return c * ( ( t = t / d - 1) * t * t + 1 ) + b;
   }
};

var Animate=function(dom){
  this.dom = dom; // 进行运动的 dom 节点
  this.startTime = 0; // 动画开始时间
  this.startPos = 0; // 动画开始时，dom 节点的位置，即 dom 的初始位置
  this.endPos = 0; // 动画结束时，dom 节点的位置，即 dom 的目标位置
  this.propertyName = null; // dom 节点需要被改变的 css 属性名
  this.easing = null; // 缓动算法
  this.duration = null; // 动画持续时间
};

Animate.prototype.start=function(propertyName,endPos,duration,easing){
  this.startTime=+new Date;  //动画启动时间
  this.startPos=this.dom.getBoundingClientRect()[propertyName];  //dom 节点初始位置
  this.propertyName=propertyName;  //dom 节点需要被改变的 CSS 属性名
  this.endPos=endPos;  //dom 节点目标位置
  this.duration=duration;  //动画持续事件
  this.easing=tween[easing];  //缓动算法

  var self=this;
  var timeId=setInterval(function(){  //启动定时器，开始执行动画
    if (self.step()===false) {
      clearInterval(timeId);  //如果动画已结束，则清除定时器
    }
  },200);
};

Animate.prototype.step=function(){
  var t=+new Date;  //取得当前时间
  if (t>=this.startTime+this.duration) {  //(1)
    this.update(this.endPos);  //更新小球的 CSS 属性值
    return false;
  }
  var pos=this.easing(t-this.startTime,this.startPos,this.endPos-this.startPos,this.duration);  //pos 为小球当前位置
  this.update(pos);  //更新小球的 CSS 属性值
};

Animate.prototype.update=function(pos){
  this.dom.style[this.propertyName]=pos+"px";
};

var ball = document.getElementById( 'ball' );
var pos = document.getElementById( 'pos' );
var moveBtn = document.getElementById( 'moveBtn' );
var cancelBtn=document.getElementById("cancelBtn");

var MoveCommand = function( receiver, pos ){
  this.receiver = receiver;
  this.pos = pos;
  this.oldPos=null;
};

MoveCommand.prototype.execute = function(){
  this.receiver.start( 'left', this.pos, 1000, 'strongEaseOut' );
  this.oldPos=this.receiver.dom.getBoundingClientRect()[this.receiver.propertyName];  //记录小球开始移动前的位置
};

MoveCommand.prototype.undo=function(){
  this.receiver.start("left",this.oldPos,1000,"strongEaseOut");  //回到小球移动前记录的位置
};

var moveCommand;
moveBtn.onclick = function(){
  var animate = new Animate( ball );
  animate.start( 'left', 500, 1500, 'strongEaseOut' );
  animate.start( 'top', 200, 1500, 'sineaseIn' );
  moveCommand = new MoveCommand( animate, pos.value );
  moveCommand.execute();
};

cancelBtn.onclick=function(){
  moveCommand.undo();  //撤销命令
};

</script>
```

现在通过命令模式轻松地实现了撤销功能。如果用普通的方法调用来实现，也许需要每次都 手工记录小球的运动轨迹，才能让它还原到之前的位置。而命令模式中小球的原始位置在小球开 始移动前已经作为 command 对象的属性被保存起来，所以只需要再提供一个 undo 方法，并且在 undo 方法中让小球回到刚刚记录的原始位置就可以了。 

**撤销是命令模式里一个非常有用的功能**，试想一下开发一个围棋程序的时候，我们把每一步 棋子的变化都封装成命令，则可以轻而易举地实现悔棋功能。同样，撤销命令还可以用于实现文 本编辑器的 Ctrl+Z 功能。



### 撤消和重做

上一节我们讨论了如何撤销一个命令。很多时候，我们需要撤销一系列的命令。比如在一个 围棋程序中，现在已经下了 10 步棋，我们需要一次性悔棋到第 5 步。在这之前，我们可以把所 有执行过的下棋命令都储存在一个历史列表中，然后倒序循环来依次执行这些命令的 undo 操作， 直到循环执行到第 5 个命令为止。

 然而，在某些情况下无法顺利地利用 undo 操作让对象回到 execute 之前的状态。比如在一个 Canvas 画图的程序中，画布上有一些点，我们在这些点之间画了 N 条曲线把这些点相互连接起 来，当然这是用命令模式来实现的。但是我们却很难为这里的命令对象定义一个擦除某条曲线的 undo 操作，因为在 Canvas 画图中，擦除一条线相对不容易实现。 

这时候最好的办法是先清除画布，然后把刚才执行过的命令全部重新执行一遍，这一点同样 可以利用一个历史列表堆栈办到。**记录命令日志，然后重复执行它们，这是逆转不可逆命令的一 个好办法。** 

在编写的 HTML5 版《街头霸王》游戏中，命令模式可以用来实现播放录像功能。原理跟 Canvas 画图的例子一样，我们把用户在键盘的输入都封装成命令，执行过的命令将被存放到堆栈 中。播放录像的时候只需要从头开始依次执行这些命令便可，代码如下：

```js
<button id="replay">播放录像</button>
```



```js
var Ryu = {
  attack: function(){
    console.log( '攻击' );
  },
  defense: function(){
    console.log( '防御' );
  },
  jump: function(){
    console.log( '跳跃' );
  },
  crouch: function(){
    console.log( '蹲下' );
  }
};
var makeCommand = function( receiver, state ){ // 创建命令
  return  receiver[ state ];
};
var commands = {
  "119": "jump", // W
  "115": "crouch", // S
  "97": "defense", // A
  "100": "attack" // D
};

var commandStack = []; // 保存命令的堆栈
document.onkeypress = function( ev ){
  var keyCode = ev.keyCode,
  command = makeCommand( Ryu, commands[ keyCode ] );
  if ( command ){
    command(); // 执行命令
    commandStack.push( command ); // 将刚刚执行过的命令保存进堆栈
  }
};
document.getElementById( 'replay' ).onclick = function(){ // 点击播放录像
  var command;
  while( command = commandStack.shift() ){ // 从堆栈里依次取出命令并执行
    command();
  }
};
```

可以看到，当我们在键盘上敲下 W、A、S、D 这几个键来完成一些动作之后，再按下 Replay按钮，此时便会重复播放之前的动作。

### 命令队列

在订餐的故事中，如果订单的数量过多而厨师的人手不够，则可以让这些订单进行排队处理。 第一个订单完成之后，再开始执行跟第二个订单有关的操作。 

队列在动画中的运用场景也非常多，比如之前的小球运动程序有可能遇到另外一个问题：有 些用户反馈，这个程序只适合于 APM 小于 20 的人群，大部分用户都有快速连续点击按钮的习惯， 当用户第二次点击 button 的时候，此时小球的前一个动画可能尚未结束，于是前一个动画会骤然 停止，小球转而开始第二个动画的运动过程。但这并不是用户的期望，用户希望这两个动画会排 队进行。 

**把请求封装成命令对象的优点在这里再次体现了出来，对象的生命周期几乎是永久的，除非 我们主动去回收它**。也就是说，命令对象的生命周期跟初始请求发生的时间无关，command 对象 的 execute 方法可以在程序运行的任何时刻执行，即使点击按钮的请求早已发生，但我们的命令 对象仍然是有生命的。 

所以我们可以把 div 的这些运动过程都封装成命令对象，再把它们压进一个队列堆栈，当动 画执行完，也就是当前 command 对象的职责完成之后，会主动通知队列，此时取出正在队列中等 待的第一个命令对象，并且执行它。 

我们比较关注的问题是，一个动画结束后该如何通知队列。通常可以使用回调函数来通知队 列，**除了回调函数之外，还可以选择发布订阅模式**。即在一个动画结束后发布一个消息，订阅 者接收到这个消息之后，便开始执行队列里的下一个动画。读者可以尝试按照这个思路来自行实 现一个队列动画。

### 宏命令









# 设计原则和编程技巧



## 单一职责原则

就一个类而言，应该仅有一个引起它变化的原因。在 JavaScript 中，需要用到类的场景并不 太多，单一职责原则更多地是被运用在对象或者方法级别上，因此本节我们的讨论大多基于对象 和方法。 

单一职责原则（SRP）的**职责**被定义为“引起变化的原因”。如果我们有两个动机去改写一 个方法，那么这个方法就具有两个职责。**每个职责都是变化的一个轴线，如果一个方法承担了过 多的职责，那么在需求的变迁过程中，需要改写这个方法的可能性就越大。** 

此时，这个方法通常是一个不稳定的方法，修改代码总是一件危险的事情，特别是当两个职 责耦合在一起的时候，一个职责发生变化可能会影响到其他职责的实现，造成意想不到的破坏， 这种耦合性得到的是低内聚和脆弱的设计。 

因此，SRP 原则体现为：**一个对象（方法）只做一件事情**。

### 设计模式中的 SRP 原则

SRP 原则在很多设计模式中都有着广泛的运用，例如代理模式、迭代器模式、单例模式和装饰者模式。

#### 代理模式

我们在第 6 章中已经见过这个图片预加载的例子了。通过增加虚拟代理的方式，把预加载图 片的职责放到代理对象中，而本体仅仅负责往页面中添加 img 标签，这也是它最原始的职责。

myImage 负责往页面中添加 img 标签：

```js
var myImage=(function(){
  var imgNode=document.createElement("img");
  document.body.appendChild(imgNode);
  return {
    setSrc:function(src){
      imgNode.src=src;
    }
  }
})();

myImage.setSrc("https://v3.cn.vuejs.org/images/components_provide.png")
```

proxyImage 负责预加载图片，并在预加载完成之后把请求交给本体 myImage：

```js
var proxyImage=(function(){
  var img=new Image;
  img.onload=function(){
    myImage.setSrc(this.src);
  }
  return {
    setSrc:function(src){
      myImage.setSrc("../image/CSS 轮廓.png");
      img.src=src;
    }
  }
})();

proxyImage.setSrc("https://v3.cn.vuejs.org/images/components_provide.png");
```

把添加 img 标签的功能和预加载图片的职责分开放到两个对象中，这两个对象各自都只有一个被修改的动机。在它们各自发生改变的时候，也不会影响另外的对象。

#### 迭代器模式

我们有这样一段代码，先遍历一个集合，然后往页面中添加一些 div，这些 div 的 innerHTML分别对应集合里的元素：

```js
var appendDiv = function( data ){
    for ( var i = 0, l = data.length; i < l; i++ ){
    	var div = document.createElement( 'div' );
    	div.innerHTML = data[ i ];
    	document.body.appendChild( div );
    }
};
appendDiv( [ 1, 2, 3, 4, 5, 6 ] );
```

这其实是一段很常见的代码，经常用于 ajax 请求之后，在回调函数中遍历 ajax 请求返回的 数据，然后在页面中渲染节点。 

**appendDiv 函数本来只是负责渲染数据，但是在这里它还承担了遍历聚合对象 data 的职责**。 我们想象一下，如果有一天 cgi 返回的 data 数据格式从 array 变成了 object，那我们遍历 data 的 代码就会出现问题，必须改成 for ( var i in data )的方式，这时候必须去修改 appendDiv 里的 代码，否则因为遍历方式的改变，导致不能顺利往页面中添加 div 节点。 

我们有必要把遍历 data 的职责提取出来，这正是迭代器模式的意义，**迭代器模式提供了一 种方法来访问聚合对象，而不用暴露这个对象的内部表示**。

当把迭代聚合对象的职责单独封装在 each 函数中后，即使以后还要增加新的迭代方式，我们只需要修改 each 函数即可，appendDiv 函数不会受到牵连，代码如下：

```js
var each = function( obj, callback ) {
   var value,
   i = 0,
   length = obj.length,
   isArray = isArraylike( obj ); // isArraylike 函数未实现，可以翻阅 jQuery 源代码
   if ( isArray ) { // 迭代类数组
      for ( ; i < length; i++ ) {
         callback.call( obj[ i ], i, obj[ i ] );
      }
   } else {
      for ( i in obj ) { // 迭代 object 对象
         value = callback.call( obj[ i ], i, obj[ i ] );
      }
   }
   return obj;
};
var appendDiv = function( data ){
   each( data, function( i, n ){
      var div = document.createElement( 'div' );
      div.innerHTML = n;
      document.body.appendChild( div );
   });
};

appendDiv( [ 1, 2, 3, 4, 5, 6 ] );
appendDiv({a:1,b:2,c:3,d:4} );
```

#### 单例模式

第 4 章曾实现过一个惰性单例，最开始的代码是这样的：

```js
var createLoginLayer=(function(){
    var div;
    return function(){
        if (!div) {
            div=document.createElement("div");
            div.innerHTML='我是登录浮窗';
            div.style.display="none";
            document.body.appendChild(div);
        }
        return div;
    }
})();
```

现在我们把管理单例的职责和创建登录浮窗的职责分别封装在两个方法里，这两个方法可以 独立变化而互不影响，当它们连接在一起的时候，就完成了创建唯一登录浮窗的功能，下面的代 码显然是更好的做法：

```js
var getSingle=function(fn){
    var result;
    return function(){
        return result || (result=fn.apply(this,arguments));
    }
};
var createLoginLayer=function(){
    var div=document.createElement("div");
    div.innerHTML='我是登录浮窗';
    div.style.display="none";
    document.body.appendChild(div);
    return div;
};

var createSingleLoginLayer=getSingle(createLoginLayer);

var loginLayer1 = createSingleLoginLayer();
var loginLayer2 = createSingleLoginLayer();
alert ( loginLayer1 === loginLayer2 ); // 输出： true
```

#### 装饰者模式

使用装饰者模式的时候，我们通常让类或者对象一开始只具有一些基础的职责，更多的职责 在代码运行时被动态装饰到对象上面。装饰者模式可以为对象动态增加职责，从另一个角度来看， 这也是分离职责的一种方式。 

下面是第 15 章曾提到的例子，我们把数据上报的功能单独放在一个函数里，然后把这个函 数动态装饰到业务函数上面：

```html
<html>
<body>
<button tag="login" id="button">点击打开登录浮层</button>
</body>
<script>
    Function.prototype.after = function( afterfn ){
        var __self = this;
        return function(){
            var ret = __self.apply( this, arguments );
            afterfn.apply( this, arguments );
            return ret;
    	}
    };
    var showLogin = function(){
    	console.log( '打开登录浮层' );
    };
    var log = function(){
    	console.log( '上报标签为: ' + this.getAttribute( 'tag' ) );
    };
    document.getElementById( 'button' ).onclick = showLogin.after( log );
    // 打开登录浮层之后上报数据
</script>
</html>
```

SRP 原则的应用难点就是如何去分离职责，下面的小节我们将开始讨论这点。

### 何时应该分离职责

SRP 原则是所有原则中最简单也是最难正确运用的原则之一。 

要明确的是，**并不是所有的职责都应该一一分离。** 

**一方面，如果随着需求的变化，有两个职责总是同时变化，那就不必分离他们**。比如在 ajax 请求的时候，创建 xhr 对象和发送 xhr 请求几乎总是在一起的，那么创建 xhr 对象的职责和发送 xhr 请求的职责就没有必要分开。 

**另一方面，职责的变化轴线仅当它们确定会发生变化时才具有意义**，即使两个职责已经被耦 合在一起，但它们还没有发生改变的征兆，那么也许没有必要主动分离它们，在代码需要重构的 时候再进行分离也不迟。

### 违反 SRP 原则

在人的常规思维中，总是习惯性地把一组相关的行为放到一起，如何正确地分离职责不是一 件容易的事情。 

我们也许从来没有考虑过如何分离职责，但这并不妨碍我们编写代码完成需求。对于 SRP 原则，许多专家委婉地表示“This is sometimes hard to see.”。 

一方面，我们受设计原则的指导，另一方面，我们未必要在任何时候都一成不变地遵守原则。 

在实际开发中，因为种种原因违反 SRP 的情况并不少见。比如 jQuery 的 attr 等方法，就是明显 违反 SRP 原则的做法。jQuery 的 attr 是个非常庞大的方法，既负责赋值，又负责取值，这对于 jQuery 的维护者来说，会带来一些困难，但对于 jQuery 的用户来说，却简化了用户的使用。

 **在方便性与稳定性之间要有一些取舍。具体是选择方便性还是稳定性，并没有标准答案，而 是要取决于具体的应用环境。**比如如果一个电视机内置了 DVD 机，当电视机坏了的时候，DVD 机也没法正常使用，那么一个 DVD 发烧友通常不会选择这样的电视机。但如果我们的客厅本来 就小得夸张，或者更在意 DVD 在使用上的方便，那让电视机和 DVD 机耦合在一起就是更好的 选择。

### SRP 原则的优缺点

SRP 原则的**优点**是降低了单个类或者对象的复杂度，按照职责把对象分解成更小的粒度， 这有助于代码的复用，也有利于进行单元测试。当一个职责需要变更的时候，不会影响到其他 的职责。 

但 SRP 原则也有一些**缺点**，最明显的是会增加编写代码的复杂度。当我们按照职责把对象 分解成更小的粒度之后，实际上也增大了这些对象之间相互联系的难度。

