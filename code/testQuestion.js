/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if (nums.length<2) {
        return 0;
    }
    nums.sort((a,b)=>a-b);  //排序
    let mindiff=nums[nums.length-1]-nums[0];  //初始为最大差值
    for(i=0;i<nums.length-k+1;i++){
        let temp=nums[i+k-1]-nums[i];
        mindiff=temp<mindiff ? temp : mindiff;
        if (mindiff===0) {
            return 0;
        }
    }
    return mindiff;
};

let test=[9,4,1,7];
let result=minimumDifference(test,2);
console.log(result);