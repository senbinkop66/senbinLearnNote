/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let n=nums.length;
    let ans=new Set();
    let i=0;
    while(i<n){
        if(nums[i]!==i+1){
            if (nums[i]>i+1) {
                if (nums[nums[i]-1]==nums[i]) {
                    ans.add(nums[i]);
                    nums[i]=0
                    i++;
                }else{
                    let temp=nums[i];
                    nums[i]=nums[nums[i]-1];
                    nums[temp-1]=temp;
                }
            }else{
                if (nums[nums[i]-1]!==0) {
                    ans.add(nums[i]);
                    nums[i]=0;
                }else{
                    nums[nums[i]-1]=nums[i];
                    nums[i]=0;
                }
                i++;
            }
        }else{
            i++;
        }
    }
    return [...ans];
};

let nums = [4,3,2,7,8,2,3,1];
let result=findDuplicates(nums);
console.log(result);