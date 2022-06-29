/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    const K1 = 1117;
    const K2 = 1000000007;
    this.dataBase = new Map();
    this.urlToKey = new Map();

    if (this.urlToKey.has(longUrl)) {
            return `http://tinyurl.com/` + this.urlToKey.get(longUrl);
        }
        let key = 0;
        let base = 1;
        for (let i = 0; i < longUrl.length; i++) {
            const c = longUrl[i];
            key = (key + c * base) % K2;
            base = (base * K1) % K2;
        }
        while (dataBase.has(key)) {
            key = (key + 1) % K2;
        }
        dataBase.set(key, longUrl);
        urlToKey.set(longUrl, key);
        return `http://tinyurl.com/` + key;

};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    const p = shortUrl.lastIndexOf('/') + 1;
    const key = parseInt(shortUrl.substring(p));
    return this.dataBase.get(key);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */