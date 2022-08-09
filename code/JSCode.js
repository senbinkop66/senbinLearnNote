function buildArray(arr, n, min, max){
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!arr.includes(num)) {
        arr.push(num);
    }
    return arr.length === n ? arr : buildArray(arr, n, min, max);
}

const result=buildArray([], 20, 2, 100);
console.log(result);