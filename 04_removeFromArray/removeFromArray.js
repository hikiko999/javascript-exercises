const removeFromArray = function(inputArray, ...args) {
    let resultArray = inputArray; 
    for (let arg of args) {
        const indexElement = inputArray.indexOf(arg);
        resultArray.splice(indexElement, 1)
    };
    return resultArray
};

// Do not edit below this line
module.exports = removeFromArray;
