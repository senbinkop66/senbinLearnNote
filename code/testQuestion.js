/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let obj={};
    let sum=0;
    for(let i=0;i<nums.length;i++){
        obj[nums[i]]===undefined ? obj[nums[i]]=1 : ++obj[nums[i]];
        if (obj[nums[i]]===1) {
            //计数为1时，加该值
            sum+=nums[i];
        }
        if (obj[nums[i]]===2) {
            //计数为2时,减掉
            sum-=nums[i];
        }
    }
    return sum;
};


let test=[2,2,1,1,1,2,2];
let result=sumOfUnique(test);
console.log(result);