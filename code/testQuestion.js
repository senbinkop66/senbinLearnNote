/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    nums.sort((a, b) => a - b);
    let zeroSize = 0;
    let diff = 0;
    for (let i = 0; i < 5; i++) {
        if (nums[i] === 0) {
            zeroSize++;
        }
        if (i > 0 && nums[i - 1] !== 0) {
            if (nums[i] === nums[i - 1]) {
                return false;
            }
            diff += nums[i] - nums[i - 1] - 1;
        }
    }
    return zeroSize >= diff;
};

let nums = [0,0,1,2,5];
console.log(isStraight(nums));