/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
   let m=new Map();
   for(let i=0;i<s.length;i++){
      m.set(s[i],m.has(s[i]) ? m.get(s[i])+1 : 1);
   }
   let ans=0;
   let flag=false;  //是否存在奇数个，中间可以是奇数个
   for(let val of m.values()){
      if (val%2===0) {
         ans+=val;
      }else{
         ans+=val-1;
         flag=true;
      }
   }
   if (flag) {
      ans+=1;
   }
   return ans;
};

let test="abccccdd";
let result=longestPalindrome(test);
console.log(result);