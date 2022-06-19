/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    const sums = new Map();
    let ans = [];
    let maxSumCount = 0;
    const dfs = (root) => {
        let sum = root.val;
        if (root.left !== null) {
            sum += dfs(root.left);
        }
        if (root.right !== null) {
            sum += dfs(root.right);
        }
        sums.set(sum, sums.has(sum) ? sums.get(sum) + 1 : 1);
        if (sums.get(sum) > maxSumCount) {
            maxSumCount = sums.get(sum);
            ans = [sum];
        }else if (sums.get(sum) === maxSumCount) {
            ans.push(sum);
        }
        return sum;
    }
    dfs(root);
    return ans;
};