/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let ans = 1;
    let sum = 1;
    for (let item of nums) {
        sum += item;
        if (sum < 1) {
            ans += 1 - sum;
            sum = 1;
        }
    }
    return ans;

};

let nums = [-3,2,-3,4,2];
console.log(minStartValue(nums));