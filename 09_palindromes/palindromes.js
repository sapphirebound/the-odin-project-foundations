const palindromes = function (word) {
    word = word.toLowerCase(); //make everything lowercase
    word = word.replaceAll(/\W/gi, ""); //remove non-letter
    word = word.trim(); //trim white space
    reversedWord = ""; // set variable for reversed word

    //iterating over each letter in word in reverse
    for (let i = 1; i <= word.length; i++) {
        let letter = word.at(-i);
        reversedWord += letter;
    }
    return word === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
