/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function(nums){
    if (nums.length < 3) {
        return Math.max(...nums);
    }

    let first = nums[0];
    let second = Math.max(nums[0],nums[1]);
    let i = 2;
    while(i < nums.length){
        let temp = second;
        second = Math.max(second, first + nums[i]);
        first = temp;
        i++;
    }
    return second;
}

let nums=[2,7,9,3,1];
let result=rob(nums);
console.log(result);