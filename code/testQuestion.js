/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
   let m=a.length;
   let n=b.length;
   if (m!==n) {
      return Math.max(m,n);
   }
   while(m>0){
      m--;
      if (a[m]!==b[m]) {
         return Math.max(m+1,n-m-1);
      }
   }
   return -1;
};

let a = "aba", b = "cdc";
let result=findLUSlength(a,b);
console.log(result);