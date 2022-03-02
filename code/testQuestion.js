var func=function(){};

Array.prototype.push.call(func,"first");

console.log(func.length);  //
//TypeError: Cannot assign to read only property 'length' of function 'function(){}'
