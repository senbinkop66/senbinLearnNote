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
var findMode = function(root) {
    let ans = [];
    let maxCount = 0, count = 0, base = 0;

    const update = (x) => {
        if (x === base) {
            ++count;
        }else{
            count = 1;
            base = x;
        }
        if (count === maxCount) {
            ans.push(base)
        }
        if (count > maxCount){
            maxCount = count;
            ans = [base];
        }
    }

    const dfs = (p) => {
        if (!p) {
            return;
        }
        dfs(p.left);
        update(p.val);
        dfs(p.right);
    }
    
    dfs(root);
    return ans;
};