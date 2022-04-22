/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    let n=nums.length;
    let sum=0,numSum=0;
    for(let i=0;i<n;i++){
        sum+=i*nums[i];
        numSum+=nums[i];
        
    }
    let maxSum=sum;
    for (let i=n-1;i>0;i--){
        //找到迭代公式
        sum+=numSum-n*nums[i];
        maxSum=maxSum>sum ? maxSum : sum;
    }
    return maxSum;
};

let data = [4,3,2,6];
let result=maxRotateFunction(data);
console.log(result);