/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function(sx, sy, tx, ty) {
    while(tx>sx && ty>sy && tx!==ty){
        if (tx>ty) {
            tx%=ty;
        }else{
            ty%=tx;
        }
    }
    if (tx===sx && ty===sy) {
        return true;
    }else if(tx===sx){
        return ty>sy && (ty-sy)%tx===0;
    }else if(ty===sy){
        return tx>sx && (tx-sx)%sy===0;
    }else{
        return false;
    }
    
};

let sx = 1, sy = 1, tx = 3, ty = 5;
let result=reachingPoints(sx, sy, tx, ty);
console.log(result);
