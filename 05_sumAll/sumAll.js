const sumAll = function(num1,num2) {
    if ((num1 < 0 || num2 < 0) 
        || (!Number.isInteger(num1)||!Number.isInteger(num2))
        || (isNaN(num1)||isNaN(num2))) { // isNan() -> checks if not a number
        return 'ERROR'
    };

    let lowerLimit, upperLimit;
    if (num1 <= num2) {
        lowerLimit = num1;
        upperLimit = num2
    } else {
        lowerLimit = num2;
        upperLimit = num1;
    }
    let sum = 0
    for (let i=lowerLimit; i <= upperLimit; i++) {
        sum += i;
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
