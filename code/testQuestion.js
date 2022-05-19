/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let len1 = nums1.length, len2 = nums2.length;
    let ans = new Array(len1);
    const m = new Map();
    const stack = [];
    for (let i = len2 - 1; i>=0; i--){
        while(stack.length && stack[stack.length - 1] <= nums2[i]){
            stack.pop();
        }
        if (stack.length) {
            m.set(nums2[i], stack[stack.length - 1]);
        }else{
            m.set(nums2[i], -1);
        }
        stack.push(nums2[i]);
    }
    for (let i = 0; i < len1; i++){
        ans[i] = m.get(nums1[i]);
    }
    return ans;

};

let nums1 = [4,1,2], nums2 = [1,3,4,2];
let result = nextGreaterElement(nums1, nums2);
console.log(result);