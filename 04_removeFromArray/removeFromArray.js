const removeFromArray = function(inputArray, targetElement) {
    const indexElement = inputArray.indexOf(targetElement);
    let resultArray = inputArray; 
    resultArray.splice(indexElement, 1)
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
