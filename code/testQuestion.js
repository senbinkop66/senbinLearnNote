/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    if (pushed.length === 0) {
        return true;
    }
    const stack = [];
    let n = pushed.length;
    let j = 0;
    for (let i = 0; i < n; i++) {
        stack.push(pushed[i]);
        while (stack.length && stack[stack.length - 1] === popped[j]) {
            stack.pop();
            j++;
        }
    }
    return stack.length === 0;
};

let pushed = [1,2,3,4,5], popped = [4,5,3,2,1];

console.log(validateStackSequences(pushed, popped));