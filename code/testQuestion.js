/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function(s, queries) {
   let ans=new Array(queries.length).fill(0);
   let n=s.length;
   const preSum=new Array(n).fill(0);
   for(let i=0,sum=0;i<n;i++){
      if (s[i]==="*") {
         sum++;
      }
      preSum[i]=sum;
   }
   const left=new Array(n).fill(0);
   for(let i=0,l=-1;i<n;i++){
      if (s[i]==="|") {
         l=i;
      }
      left[i]=l;
   }
   const right=new Array(n).fill(0);
   for(let i=n-1,r=-1;i>=0;i--){
      if (s[i]==="|") {
         r=i;
      }
      right[i]=r;
   }
   for(let i=0;i<queries.length;i++){
      let x=right[queries[i][0]];
      let y=left[queries[i][1]];
      ans[i]=x===-1 || y===-1 || x>=y ? 0: preSum[y]-preSum[x];
   }
   return ans;
};

let s = "**|**|***|", queries = [[2,5],[5,9]];
let result=platesBetweenCandles(s,queries);
console.log(result);