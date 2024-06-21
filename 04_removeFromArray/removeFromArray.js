const removeFromArray = function (array, ...keys) {
    for (const key of keys) {
        console.log(key);
        array.forEach(element => {
            if (array.includes(key)) {
                index = array.indexOf(key);
                array.splice(index, 1);
            }
        });
        console.log(array);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
