var thirdMax = function(nums) {
    let a = -Number.MAX_VALUE, b = -Number.MAX_VALUE, c = -Number.MAX_VALUE;
    for (const num of nums) {
        if (num > a) {
            c = b;
            b = a;
            a = num;
        } else if (a > num && num > b) {
            c = b;
            b = num;
        } else if (b > num && num > c) {
            c = num;
        }
    }
    return c === -Number.MAX_VALUE ? a : c;
};

let nums = [3, 2, 1,2,3,4,2,5];
let result=thirdMax(nums);
console.log(result);