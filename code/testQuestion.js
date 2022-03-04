/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
   let ans=0;
   let n=nums.length;
   for(let i=0;i<n;i++){
      let minValue=Number.MAX_VALUE,maxValue=-Number.MAX_VALUE;
      for(let j=i;j<n;j++){
         minValue=Math.min(minValue,nums[j]);
         maxValue=Math.max(maxValue,nums[j]);
         ans+=maxValue-minValue;
      }
   }
   return ans;

};

let str1=[1,2,3,4,5];
let result=subArrayRanges(str1);
console.log(result);