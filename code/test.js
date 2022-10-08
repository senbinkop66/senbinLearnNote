/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  const n = nums.length;
  let ans = nums[0], sum = nums[0];
  for (let i = 1; i < n; i++) {
    if (nums[i] <= nums[i - 1]) {
      ans = Math.max(ans, sum);
      sum = nums[i];
    } else {
      sum += nums[i];
    }
  }
  ans = Math.max(ans, sum);
  return ans;
};

let nums = [10,20,30,5,10,50];
console.log(maxAscendingSum(nums));