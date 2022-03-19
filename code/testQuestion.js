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
 * @return {string}
 */
var tree2str = function(root) {
    if (root===null) {
        return ""
    }
    let ans=[];
    ans.push(root.val);
    if (root.left!==null) {
        ans.push("(");
        ans=ans.concat(tree2str(root.left));
        ans.push(")")
    }
    if (root.right!==null) {
        if (root.left===null) {
            ans.push("()")
        }
        ans.push("(");
        ans=ans.concat(tree2str(root.right));
        ans.push(")");
    }
    return ans.join("");

};