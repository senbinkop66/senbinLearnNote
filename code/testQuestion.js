/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    if (start===end) {
        return 0;
    }
    const cnt=new Set();
    const visited=new Set();
    const keys=['A','G','C','T'];
    for (let s of bank){
        cnt.add(s);
    }
    if (!cnt.has(end)) {
        return -1;
    }
    const queue=[start];
    visited.add(start);
    let step=1;
    while(queue.length){
        let sz=queue.length;
        for(let i=0;i<sz;i++){
            let curr=queue.shift();
            for(let j=0;j<8;j++){
                for(let k=0;k<4;k++){
                    if (keys[k]!==curr[j]) {
                        let sb=[...curr];
                        sb[j]=keys[k];
                        let next=sb.join("");
                        if (!visited.has(next) && cnt.has(next)) {
                            if (next===end) {
                                return step;
                            }
                            queue.push(next);
                            visited.add(next);
                        }
                    }
                }
            }
        }
        step++;
    }
    return -1;
};

let start = "AACCGGTT", end = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"];
let result=minMutation(start,end,bank);
console.log(result);