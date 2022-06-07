/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let low = 1;
    let high = 0;
    for (let pile of piles) {
        high = Math.max(high, pile);
    }
    let k = high;
    while(low < high) {
        let speed = Math.floor((high - low) / 2) + low;
        let time = getTime(piles, speed);
        if (time <= h) {
            //可以在 h 小时内吃掉所有香蕉，则最小速度一定小于或等于 speed
            k = speed;
            high = speed;
        } else {
            // 否则，最小速度一定大于 speed
            low = speed + 1;
        }
    }
    return k;
};

const getTime = (piles, speed) => {
    let time = 0;
    for (let pile of piles) {
        time += Math.ceil(pile / speed);
    }
    return time;
}

let piles = [3,6,7,11], h = 8;
console.log(minEatingSpeed(piles, h));