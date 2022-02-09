/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length===0) {
        return [];
    }
    let i=0;
    let j=1;
    let result=[];
    for(j;j<nums.length;j++){
        if (nums[j]-nums[j-1]!==1) {
            if (i===j-1) {
                result.push(nums[i].toString());
            }else{
                result.push(nums[i].toString()+"->"+nums[j-1].toString());
            }
            i=j;
        }
    }
    if (i===j-1) {
        result.push(nums[i].toString());
    }else{
        result.push(nums[i].toString()+"->"+nums[j-1].toString());
    }
    return result;
};

let test=[0,1,2,4,5,7];
let result=summaryRanges(test);
console.log(result);