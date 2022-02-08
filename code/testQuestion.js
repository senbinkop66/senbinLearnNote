/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function(n, lamps, queries) {
    let grids=new Array(n);
    for (let i=0;i<n;i++){
        grids[i]=new Array(n).fill(0);
    }
    //N,NE,E,ES,S,SE,E,EN
    const dirs=[[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]]
    lamps.forEach((lamp)=>{
        if (grids[lamp[0]][lamp[1]]<4*(n-1)+1) {
            //避免灯重复变亮
            dirs.forEach((dir)=>{
                let row=lamp[0];
                let col=lamp[1];
                while(row>=0 && row<n && col>=0 && col<n ){
                    grids[row][col]+=1;
                    row+=dir[0];
                    col+=dir[1];
                }
            });
            grids[lamp[0]][lamp[1]]+=4*(n-1)+1;
        }
    });
    //console.log(grids);
    const result=[];
    queries.forEach((query)=>{
        if (grids[query[0]][query[1]]>0) {
            result.push(1);
        }else{
            result.push(0);
        }
        if (grids[query[0]][query[1]]>4*(n-1)) {
            //查询的灯亮着
            //关闭该灯并设置被照明的网格-1
            shutTheLamp(grids,query[0],query[1],n);
            //console.log(grids);
        }
        dirs.forEach((dir)=>{
            let row=query[0]+dir[0];
            let col=query[1]+dir[1];
            if(row>=0 && row<n && col>=0 && col<n ){
                if (grids[row][col]>4*(n-1)) {
                    //查询灯其他方向上位置的灯亮着
                    //关闭该灯并设置被照明的网格-1
                    shutTheLamp(grids,row,col,n);
                    //console.log(grids);
                }
            }
        });
    });
    return result;
};

var shutTheLamp=function(grids,row0,col0,n){
    const dirs=[[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]];
    dirs.forEach((dir)=>{
        let row=row0;
        let col=col0;
        while(row>=0 && row<n && col>=0 && col<n ){
            grids[row][col]-=1;
            row+=dir[0];
            col+=dir[1];
        }
    });
    grids[row0][col0]-=(4*(n-1)+1);
};

let n = 1;
//let lamps =[[2,5],[4,2],[0,3],[0,5],[1,4],[4,2],[3,3],[1,0]];
//let queries = [[4,3],[3,1],[5,3],[0,5],[4,4],[3,3]];
let lamps=[[0,0],[0,0]];
let queries=[[0,0],[0,0]];
let result=gridIllumination(n,lamps,queries);
console.log(result);