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