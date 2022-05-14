/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    nums.sort((a, b) => a - b);
    let n = nums.length;
    let sum = 0;
    let closestValue = Number.MAX_SAFE_INTEGER;

    var updateClosestValue = (value) =>{
        // 根据差值的绝对值来更新答案
        if (Math.abs(value - target) < Math.abs(closestValue - target)) {
            closestValue = value;
        }
    }

    for (let i = 0; i < n; i++){
        if (i > 0 && nums[i] === nums[i-1]){
            continue;
        }
        let j = i + 1;
        let k = n - 1;
        let a = nums[i];
        while (j < k){
            let b = nums[j], c = nums[k];
            sum = a + b + c;
            if (sum === target) {
                return target;
            }
            updateClosestValue(sum);
            if (sum > target) {
                //如果和大于 target，移动 c 对应的指针
                k--;
                //移动到下一个不相等的元素
                while (j < k && nums[k] === c){
                    k--;
                }
            }else{
                // 如果和小于 target，移动 b 对应的指针
                j++;
                //移动到下一个不相等的元素
                while (j < k && nums[j] === b){
                    j++;
                }
            }
        }
    }

    return closestValue;
};

let nums = [-1,2,1,-4], target = 1;
let result = threeSumClosest(nums, target);
console.log(result);