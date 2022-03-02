var func=function(){};

Array.prototype.push.call(func,"first");

console.log(func.length);  //undefined
