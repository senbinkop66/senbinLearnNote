/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

var pacificAtlantic = function(heights) {
    let m=heights.length;
    let n=heights[0].length;
    const pacific=new Array(m).fill(0).map(()=>new Array(n).fill(0));
    const atlantic=new Array(m).fill(0).map(()=>new Array(n).fill(0));
    const dfs=(row,col,ocean)=>{
        if (ocean[row][col]) {
            return;
        }
        ocean[row][col]=true;
        for (let dir of dirs){
            let newRow=row+dir[0];
            let newCol=col+dir[1];
            if (newRow>=0 && newRow<m && newCol>=0 && newCol<n && heights[newRow][newCol]>=heights[row][col]) {
                dfs(newRow,newCol,ocean);
            }
        }
    }

    for (let i=0;i<m;i++){
        dfs(i,0,pacific);
    }
    for (let i=1;i<n;i++){
        dfs(0,i,pacific);
    }
    for (let i=0;i<m;i++){
        dfs(i,n-1,atlantic);
    }
    for (let i=0;i<n-1;i++){
        dfs(m-1,i,atlantic);
    }

    const result=[];
    for (let i=0;i<m;i++){
        for (let j=0;j<n;j++){
            if (pacific[i][j] && atlantic[i][j]) {
                let cell=[];
                cell.push(i);
                cell.push(j);
                result.push(cell);
            }
        }
    }
    return result;
};

let heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]];
let result=pacificAtlantic(heights);
console.log(result);