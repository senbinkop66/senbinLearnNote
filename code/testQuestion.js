/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let ans=0;
    let sum=1;  //连续子数组和
    let i=0;
    for (let j=0;j<nums.length;j++){
        if (nums[j]<k) {
            while (i<j && sum*nums[j]>=k){
                sum/=nums[i];
                i++;
            }
            sum*=nums[j];
            ans+=(j-i+1);
        }else{
            i=j+1;
            sum=1;
        }
    }
    return ans;
};

let nums = [100,2,3,4,100,5,6,7,100], k = 100;
let result=numSubarrayProductLessThanK(nums,k);
console.log(result);