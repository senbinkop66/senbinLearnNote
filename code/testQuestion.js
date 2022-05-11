/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let n=nums.length;
    let maxF=nums[0];
    let minF=nums[0];
    let ans=nums[0];
    for (let i=1;i<n;i++){
        let mx=maxF,mn=minF;
        maxF=Math.max(mx*nums[i], Math.max(nums[i],mn*nums[i]));
        ans = Math.max(maxF,ans);
        minF=Math.min(mn*nums[i], Math.min(nums[i],mx*nums[i]));
    }
    return ans;
};

let nums=[2,3,-2,4];
let result=maxProduct(nums);
console.log(result);