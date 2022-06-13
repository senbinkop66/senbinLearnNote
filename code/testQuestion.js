/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let ans = 0;
    let arr = [...heights];
    arr.sort((a, b) => a -b);
    arr.forEach((value, index) => {
        ans += value === heights[index] ? 0 : 1;
    });
    return ans;
};

let heights = [5,1,2,3,4];
let result = heightChecker(heights);
console.log(result);