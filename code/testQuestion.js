var permutation = function(s) {
    const n = s.length;
    const ans = [];
    const visited = new Array(n).fill(false);

    const arr = Array.from(s).sort();  //首先对原字符串排序，保证相同的字符都相邻
    const perm = [];

    const backtrack = (arr, i, n, perm) => {
        if (i === n) {
            ans.push(perm.join(""));
            return;
        }
        for (let j = 0; j < n; j++) {
            if (visited[j] || (j > 0 && !visited[j - 1] && arr[j - 1] === arr[j])) {
                continue;  // 避免重复
            }
            visited[j] = true;
            perm.push(arr[j]);
            backtrack(arr, i + 1, n, perm);
            perm.pop();
            visited[j] = false;
        }
    }
    backtrack(arr, 0, n, perm);
    const size = ans.length;
    return ans;
}

let s = "abc";
console.log(permutation(s))