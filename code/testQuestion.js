// 代码示例
let al2 = {
    length: 4,
    '-1': -1,
    '0': 0,
    a: 'a',
    1: 1
};
console.log(Array.prototype.slice.call(al2)); //[0, 1, empty × 2]
