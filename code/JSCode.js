
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