function trans(s, n){
    //write code here
    s = s.split(" ").reverse();
    const m = s.length;
    const ans = [];
    for (let i = 0; i < m; i++) {
        for (let ch of s[i]) {
            if(/[a-z]/.test(ch)) {
                ans.push(ch.toUpperCase());
            } else {
                ans.push(ch.toLowerCase());
            }
        }
        if (i < m - 1) {
            ans.push(" ");
        }
    }
    return ans.join("")
}

module.exports = {
    trans : trans
}