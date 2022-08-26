/**
 * 
 * @param num int整型一维数组 
 * @return int整型二维数组
 */
function permute( nums ) {
    const n = nums.length;
    const ans = [];
    const backtrack = (first) => {
        // 所有数都填完了
        if (first === n) {
            ans.push([...nums]);
        }
        for (let i = first; i < n; i++) {
            // 动态维护数组
            [nums[first], nums[i]] = [nums[i], nums[first]];
            // 继续递归填下一个数
            backtrack(first + 1);
            // 撤销操作
            [nums[i], nums[first]] = [nums[first], nums[i]];
        }
    }
    backtrack(0);

    return ans;
}
module.exports = {
    permute : permute
};