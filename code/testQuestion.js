/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
     let max_diff=0;
     let min_val=nums[0];
     for(let i=1;i<nums.length;i++){
        let diff=nums[i]-min_val;
        max_diff=max_diff>diff ? max_diff : diff;
        min_val=nums[i]<min_val ? nums[i] : min_val;
     }
    return max_diff>0 ? max_diff : -1;
};

let test=[1,5,2,10];
let result=maximumDifference(test);
console.log(result);
