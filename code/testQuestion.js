function solution(num) {
    num = "" + num;
    const sums = new Set();
    const n = num.length;
    if (n < 3) {
        return n;
    }
    const backtrack = (sum, startIndex) => {
        // console.log(startIndex);
        if (startIndex === n) {
            sums.add(sum);
            return;
        }
        for (let j = startIndex; j < n; j++) {
            backtrack(sum + Number(num.slice(startIndex, j + 1)), j + 1);
        }
    }

    for (let i = 0; i < n; i++) {
        backtrack(Number(num.slice(0, i + 1)), i + 1);
    }

    return sums.size;
}

console.log(solution(1234567890));