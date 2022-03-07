/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
   if (num===0) {
      return "0";
   }
   let flag=false;
   if (num<0) {
      flag=true;
   }
   num=Math.abs(num);
   let ans=[];
   while(num>0){
      let e=num%7;
      num=(num-e)/7;
      ans.unshift(e);
   }
   return flag? "-"+ans.join("") : ans.join("");
};

let num = -7;
let result=convertToBase7(num);
console.log(result);