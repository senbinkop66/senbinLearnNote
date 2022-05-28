/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack = [];
    let ans = "";
    for (let i = 0; i < s.length; i++){
        let c = s[i];
        if (c === ")") {
            stack.pop();
        }
        //在遇到 ‘)’ 并将栈顶字符出栈后，如果栈为空，则不把字符放入结果
        if (stack.length){
            //其他情况下，需要把字符放入结果
            ans += c;
        }
        //在遇到 ‘(’ 并将字符入栈后，如果栈的深度为 1，则不把字符放入结果
        if (c === "(") {
            stack.push(c);
        }
    }
    return ans;
};

let s = "(()())(())";
let result = removeOuterParentheses(s);
console.log(result);