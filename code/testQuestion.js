<<<<<<< HEAD
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    if (start > destination) {
        [start, destination] = [destination, start]
    }
    let sum1 = 0, sum2 = 0;
    for (let i = 0; i < distance.length; i++) {
        if (i >= start && i < destination) {
            sum1 += distance[i];
        } else {
            sum2 += distance[i];
        }
    }
    return Math.min(sum1, sum2);
};

let distance = [1,2,3,4], start = 0, destination = 1;
console.log(distanceBetweenBusStops(distance, start, destination));
=======
function countPI(n) {
    let pi = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            pi -= 1/(i * 2 - 1)
        } else {
            pi += 1/(i * 2 - 1)
        }
    }
    return pi * 4;
}

let PI = countPI(100000);
console.log(PI);
>>>>>>> 63569ce0d785f2e04480a49bd71751af1f3b9b1c
