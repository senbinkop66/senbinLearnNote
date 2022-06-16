/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
   const visited = new Set();
   const res = new Set();
    for (let num of nums) {
        if (visited.has(num - k)) {
            res.add(num - k);
        }
        if (visited.has(num + k)) {
            res.add(num);
        }
        visited.add(num);
    }
    return res.size;
};

let nums = [3, 1, 4, 1, 5], k = 2;
let result = findPairs(nums, k);
console.log(result);