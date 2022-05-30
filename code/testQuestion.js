/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    const ans = ["IPv4", "IPv6", "Neither"];
    if (/[^a-fA-F0-9.:]/g.test(queryIP)) {
        //如果匹配到其他字符
        return ans[2];
    }
    if (queryIP.indexOf(".") !== -1) {
        //判断是否是Ipv4
        queryIP = queryIP.split(".");
        if (queryIP.length === 4) {
            for (let i = 0; i < 4; i++){
                let num = queryIP[i];
                if (num.indexOf("e") !== -1) {
                    return ans[2];
                }
                if ( num === "0" || (num[0] !== "0" && !isNaN(Number(num)) && Number(num) > 0 && Number(num) <= 255)) {
                    //
                }else{
                    return ans[2];
                }
            }
            return ans[0];
        }else{
            return ans[2];
        }

    }else if (queryIP.indexOf(":") !== -1) {
        //判断是否是IPv6
        queryIP = queryIP.split(":");
        if (queryIP.length === 8) {
            for (let i = 0; i < 8; i++){
                let num = queryIP[i];
                if (num.length > 0 && num.length < 5) {
                    //
                }else{
                    return ans[2];
                }
            }
            return ans[1];
        }else{
            return ans[2];
        }
    }else{
        return ans[2];
    }
};

let queryIP = "1e1.4.5.6";
let result = validIPAddress(queryIP);
console.log(result);

