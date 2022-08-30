/**
 * 
 * @param n int整型 the n
 * @return int整型
 */
function Nqueen( n ) {
    const queens = new Array(n).fill(-1);
    const ans = 0;
    // 分别记录每一列以及两个方向的每条斜线上是否有皇后
    const columns = new Set();
    const diagons1 = new Set();
    const diagons2 = new Set();
    
    const backtrack = (queens, n, row, columns, diagons1, diagons2) => {
        if (row === n) {
            ans++;
        } else {
            for (let i = 0; i < n; i++) {
                if (columns.has(i)) {
                    continue;
                }
                let diagon1 = row - i;
                if (diagons1.has(diagon1)) {
                    continue;
                }
                let diagon2 = row + i;
                if (diagons2.has(diagon2)) {
                    continue;
                }

                queens[row] = i;
                columns.add(i);
                diagons1.add(diagon1);
                diagons2.add(diagon2);
                //回溯
                backtrack(queens, n, row + 1, columns, diagons1, diagons2);
                //撤销
                queens[row] = -1;
                columns.delete(i);
                diagons1.delete(diagon1);
                diagons2.delete(diagon2);
            }
        }
    }

    backtrack(queens, n, 0, columns, diagons1, diagons2);

    return ans;
};




module.exports = {
    Nqueen : Nqueen
};