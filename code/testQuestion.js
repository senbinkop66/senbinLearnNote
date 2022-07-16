function countPI(n) {
    let pi = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            pi -= 1/(i * 2 - 1)
        } else {
            pi += 1/(i * 2 - 1)
        }
    }
    return pi * 4;
}

let PI = countPI(100000);
console.log(PI);