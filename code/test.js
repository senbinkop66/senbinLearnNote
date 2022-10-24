/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
    const n = nums.length;
    let leftMax = nums[0], leftPos = 0, curMax = nums[0];
    for (let i = 1; i < n - 1; i++) {
        curMax = Math.max(curMax, nums[i]);
        if (nums[i] < leftMax) {
            leftMax = curMax;
            leftPos = i;
        }
    }
    return leftPos + 1;
};


let nums = [1,1,1,0,6,12];
console.log(partitionDisjoint(nums));