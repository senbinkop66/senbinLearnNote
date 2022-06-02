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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    let curr = root, currParent = null;
    while (curr && curr.val !== key){
        currParent = curr;
        if (curr.val > key) {
            curr = curr.left;
        } else {
            curr = curr.right;
        }
    }
    if (!curr) {
        return root;
    }
    if (curr.left === null && curr.right === null) {
        //是叶节点
        curr = null;
    } else if (curr.right === null) {
        curr = curr.left;
    } else if (curr.left === null) {
        curr = curr.right;
    }else{
        let successor = curr.right, successorParent = curr;
        while (successor.left) {
            successorParent = successor;
            successor = successor.left;
        }
        if (successorParent.val === curr.val) {
            successorParent.right = successor.right;
        } else {
            successorParent.left = successor.right;
        }
        successor.right = curr.right;
        successor.left = curr.left;
        curr = successor;
    }
    if (!currParent) {
        return curr;
    }else{
        if (currParent.left && currParent.left.val === key) {
            currParent.left = curr;
        } else {
            currParent.right = curr;
        }
        return root;
    }
};