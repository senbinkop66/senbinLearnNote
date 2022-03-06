/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function(security, time) {
   let ans=[];
   let n=security.length;
   let notbigthanbefore=new Array(n).fill(0);  //存储紧挨着当前元素之前连续非递增的元素个数
   let notsmallthanlater=new Array(n).fill(0);  //存储紧挨着当前元素之后连续非递减的元素个数
   let addcount=0;
   let minuscount=0;
   for(let i=1;i<n;i++){
      if (security[i]>security[i-1]) {
         notbigthanbefore[i]=0;
         notsmallthanlater[i]=++addcount;
         minuscount=0;
      }else if(security[i]<security[i-1]){
         notbigthanbefore[i]=++minuscount;
         notsmallthanlater[i]=0;
         addcount=0;
      }else{
         notbigthanbefore[i]=++minuscount;
         notsmallthanlater[i]=++addcount;
      }
   }
   //console.log(notbigthanbefore);
   //console.log(notsmallthanlater);
   for(let i=time;i<n-time;i++){
      if (notbigthanbefore[i]>=time && notsmallthanlater[i+time]>=time) {
         ans.push(i);
      }
   }
   return ans;
};

let security = [1,2,3,4,5,6], time = 2;
let result=goodDaysToRobBank(security,time);
console.log(result);