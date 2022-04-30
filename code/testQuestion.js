/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let maxValue=nums[0];
    let minValue=nums[0];
    for (let i=1;i<nums.length;i++){
        maxValue=Math.max(maxValue,nums[i]);
        minValue=Math.min(minValue,nums[i]);
    }
    if (maxValue-minValue-2*k<=0) {
        return 0;
    }else{
        return maxValue-minValue-2*k;
    }
};

let nums = [1,3,6], k = 3;
let result=smallestRangeI(nums,k);
console.log(result);