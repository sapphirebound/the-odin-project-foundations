const repeatString = function (string, number) {
    if (number < 0) {
        return 'ERROR';
    } else {
        let text = '';
        console.log(toString(string));
        for (let i = 0; i < number; i++) {
            text += string;
        }
        return text;
    }
};

repeatString('hey', 3);
repeatString('hello', 10);
repeatString('hi', 1);
repeatString('bye', 0);
repeatString('goodbye', -1);
const number = require('./repeatString.spec');
repeatString('odin', number);
repeatString('', 10);


// Do not edit below this line
module.exports = repeatString;
