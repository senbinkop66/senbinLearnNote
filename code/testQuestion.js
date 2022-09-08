function solution(arr) {
    let result = {};
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let date = arr[i].split("-");
        if (date.length === 3) {
            let ym = date[0]+"-" + date[1];
            if (result[ym]) {
                if (result[ym].indexOf(date[2]) == -1) {
                    result[ym].push(date[2]);
                }
            } else {
                result[ym] = [date[2]];
            }
        }
    }
    return result;
}

const input=['2022-8-1','2022-8-1','2022-8-2','2022-9-1']
let ouput = solution(input);

console.log(ouput);