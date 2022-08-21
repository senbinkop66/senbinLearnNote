function start() {
    console.log(new Date());
    console.log("红包雨开始");
}

function redPacketRain1() {
    console.log(new Date());
    console.log("第一个大红包");
}

function redPacketRain2() {
    console.log(new Date());
    console.log("第二个大红包");
}

function redPacketRain3() {
    console.log(new Date());
    console.log("第三个大红包");
}

function end() {
    console.log(new Date());
    console.log("红包雨结束");
}

function game(timer, fn) {
    setTimeout(() => {
        fn.apply();
    }, timer);
    Promise.resolve(timer);
    
}

new Promise((resolve, reject) => {
    return game(1, start);
}).then(() => {
    return game(2, redPacketRain1);
}).then(() => {
    return game(3, redPacketRain2);
}).then(() => {
    return game(4, redPacketRain3);
}).then(() => {
    end();
})