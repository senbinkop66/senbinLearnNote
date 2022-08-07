/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return check(root, root);
};

const check = (p, q) => {
    const arr = [];
    arr.push(p);
    arr.push(q);

    while (arr.length) {
        let u = arr.shift();
        let v = arr.shift();
        if (u === null && v === null) {
            continue;
        }
        if ((u === null || v === null) || (u.val !== v.val)) {
            return false;
        }
        arr.push(u.left);
        arr.push(v.right);
        arr.push(u.right);
        arr.push(v.left);
    }
}