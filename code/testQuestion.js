/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    //动态规划方法
    let n = height.length;
    let leftMax = new Array(n);
    let rightMax = new Array(n);

    leftMax[0] = height[0];
    rightMax[n - 1] = height[n - 1];

    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
        rightMax[n - 1 - i] = Math.max(rightMax[n - i], height[n - 1 - i]);
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    return ans;
};

let height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height));