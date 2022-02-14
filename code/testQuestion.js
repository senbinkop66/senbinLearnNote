/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
     //数组长度一定是奇数个
     let left=0;
     let right=nums.length-1;
     while(left<right){
          let mid=(left+right)>>1;
          if (nums[mid]===nums[mid^1]) {
               left=mid+1;
          }else{
               right=mid;
          }
     }
     return nums[left];
};

let test=[3,3,7,7,10,11,11];
let result=singleNonDuplicate(test);
console.log(result);