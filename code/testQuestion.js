/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let temp;
    for (let i=0,j=nums.length-1;i<j;){
        if (isEven(nums[i])) {  //左边位是偶数，不动
            i++;
        }else{
            //左边位是奇数，与右边的偶数换位置
            if(isEven(nums[j])){
                temp=nums[i];
                nums[i]=nums[j];
                nums[j]=temp;
            }else{
                j--;
            }
        }
    }
    return nums;
};
var isEven=function(num){
    return num%2===0;
}

let test=[3,1,2,4]
let result=sortArrayByParity(test);
console.log(result);