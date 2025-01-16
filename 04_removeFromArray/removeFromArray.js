const removeFromArray = function(inputArray, ...args) {
    let resultArray = inputArray; 
    for (let arg of args) {
        resultArray = resultArray.filter((element)=>{
            return element !== arg;
        });
    };
    return resultArray;
};
// Do not edit below this line
module.exports = removeFromArray;
