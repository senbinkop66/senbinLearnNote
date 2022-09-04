/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param height int整型一维数组 
 * @return int整型
 */
function maxArea( height ) {
    // write code here
    if (height < 2) {
        return 0;
    }
    let left = 0, right = height.length - 1;
    let ans = 0;
    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left);
        ans = Math.max(ans, area);
        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return ans;
}
module.exports = {
    maxArea : maxArea
};