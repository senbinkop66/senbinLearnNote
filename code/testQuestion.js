/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    const m = new Set(dictionary);

    sentence = sentence.split(" ");
    for (let i = 0; i < sentence.length; i++) {
        for (let j = 0; j < sentence[i].length; j++) {
            if (m.has(sentence[i].slice(0, j + 1))) {
                sentence[i] = sentence[i].slice(0, j + 1);
                break;
            }
        }
    }
    return sentence.join(" ");
};

let dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery";
console.log(replaceWords(dictionary, sentence));
