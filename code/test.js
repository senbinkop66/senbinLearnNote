function Super(){
    this.name=["super"];
}
Super.prototype.getSuper=function(){
    return this.name;
}

function Sub(){

}

Sub.prototype = new Super();  //将Sub的原型对象Sub.prototype指向Super的实例

var sub1=new Sub();  //创建Sub的实例sub1
sub1.name.push("sub1");

console.log(sub1.getSuper());  // [ 'super', 'sub1' ]

var sub2=new Sub();  //创建Sub的实例sub2
sub2.name.push("sub2");

console.log(sub2.getSuper());  //[ 'super', 'sub1', 'sub2' ]