const reverseString = function (string) {
    let originalText = String(string);
    let Ltext = originalText.length;
    let reversedText = '';
    for (let i = 1; i <= Ltext; i++) {
        let key = -i;
        let letter = originalText.at(key);
        reversedText += letter;
    }
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
