/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    const arr = [...nums];
    arr.sort((a, b) => a - b);
    const n = nums.length;
    const x = Math.floor((n + 1) / 2);
    for (let i = 0, j = x - 1, k = n - 1; i < n; i += 2, j--, k--) {
        nums[i] = arr[j];
        if (i + 1 < n) {
            nums[i + 1] = arr[k];
        }
    }
};

let nums = [1,5,1,1,6,4];
wiggleSort(nums)
console.log(nums);