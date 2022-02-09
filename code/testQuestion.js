/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    nums.sort((a,b)=>a-b);
    let i=0;
    let j=1;
    let n=nums.length;
    let result=0;
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            if (nums[j]-nums[i]===k) {
                result+=1;
            }
            if (nums[j]-nums[i]>k) {
                break;
            }
        }
    }
    return result;
};

let test=[1,2,2,1];
let result=countKDifference(test,1);
console.log(result);