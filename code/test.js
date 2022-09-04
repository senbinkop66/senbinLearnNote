// 构造01字符串
function solution(n, k, t){
    if (n === 0 || n < k || (k - 1) < t) {
        return -1;
    }

    if (k - (n - k) > t + 1) {
        return -1;
    }
    const ans = new Array(t + 1).fill(1);
    let retK = k - t - 1;
    let ret = k - t - 1;
    while (ret > 0) {
        ret--;
        ans.push(0);
        ans.push(1);
    }
    ret = n - retK * 2 - t - 1;
    while (ret > 0) {
        ret--;
        ans.push(0);
    }
    return ans.join("");
}

// console.log(solution(10, 5, 0));

const [n, k, t] = readline().trim().split(" ").map(Number);
console.log(solution(n, k, t));