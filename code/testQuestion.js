let reg1=/\B../g;

let reg2=new RegExp("\\B(ba)","g");

let str1="baz foot foo";
let str2=" baz foo aba";

console.log(str1.match(reg1));  //[ 'az', 'oo', 't ', 'oo' ]
console.log(str2.replace(reg2,"X"));  // baz foo aX
