/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length;
  if (n === 1) {
    return nums[0];
  } else if (n === 2) {
    return Math.max(nums[0], nums[1]);
  } else {
    return Math.max(robRange(nums, 0, n - 2), robRange(nums, 1, n - 1));
  }
};

const robRange = (nums, start, end) => {
  let first = nums[start], second = Math.max(nums[start], nums[start + 1]);
  for (let i = start + 2; i <= end; i++) {
    const temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  return second;
}

let nums = [2,7,9,3,1];
console.log(rob(nums));