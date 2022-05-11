/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const list=[];
    const postOrder=(root,list)=>{
        if (!root) {
            return;
        }
        postOrder(root.left,list);
        postOrder(root.right,list);
        list.push(root.val);
    }

    postOrder(root,list);

    const str=list.join(",");
    return str;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data.length===0) {
        return null;
    }
    let arr=data.split(",");
    let n=arr.length;
    const stack=[];
    for(let i=0;i<n;i++){
        stack.push(parseInt(arr[i]));
    }

    const constructTree=(lower,upper,stack)=>{
        if (stack.length===0 || stack[stack.length-1]<lower || stack[stack.length-1]>upper) {
            return null;
        }
        let val=stack.pop();
        const root=new TreeNode(val);
        root.right=constructTree(val,upper,stack);
        root.left=constructTree(lower,val,stack);
        return root;
    }

    return constructTree(-Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,stack);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */