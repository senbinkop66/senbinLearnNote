
var missingNumber = function(nums) {
    if (nums.length < 1) {
        return -1;
    }
    const n = nums.length;
    let left = 0;
    let right = n;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > mid) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left === n ? n : nums[left] - 1;
};


let nums = [0, 1, 2, 3];
console.log(missingNumber(nums));