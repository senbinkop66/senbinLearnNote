/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let ans = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 1) {
            count++;
        }else{
            ans = Math.max(ans, count);
            count = 0;
        }
    }
    ans = Math.max(ans, count);
    return ans;
};

let nums = [1,1,0,1,1,1];
let result = findMaxConsecutiveOnes(nums);
console.log(result);