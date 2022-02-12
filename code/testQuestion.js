var numEnclaves = function(grid) {
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const m = grid.length;
    const n = grid[0].length;
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
    const queue=[];

    for (let i = 0; i < m; i++) {
        if (grid[i][0]===1) {
            visited[i][0]=true;
            queue.push([i,0]);
        }
        if (grid[i][n-1]===1) {
            visited[i][n-1]=true;
            queue.push([i,n-1]);
        }
    }
    for (let j = 1; j < n - 1; j++) {
        if (grid[0][j]===1) {
            visited[0][j]=true;
            queue.push([0,j]);
        }
        if (grid[m-1][j]===1) {
            visited[m-1][j]=true;
            queue.push([m-1,j]);
        }
    }
    while(queue.length){
        const cell=queue.shift();
        const currRow=cell[0];
        const currCol=cell[1];
        for (const dir of dirs){
            const nextRow=currRow+dir[0];
            const nextCol=currCol+dir[1];
            if (nextRow > 0 && nextRow < m && nextCol >= 0 && nextCol < n && grid[nextRow][nextCol] == 1 && !visited[nextRow][nextCol]) {
            visited[nextRow][nextCol]=true;
            queue.push([nextRow,nextCol]);
        }
        }

    }
    let enclaves = 0;
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                enclaves++;
            }
        }
    }
    return enclaves;
}

let test=[[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]];
let result=numEnclaves(test);
console.log(result);