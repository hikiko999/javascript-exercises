const sumAll = function(lowerLimit,upperLimit) {
    let sum = 0
    for (let i=lowerLimit; i <= upperLimit; i++) {
        console.log(i)
        sum += i;
    };
    return sum;
};

// console.log(sumAll(1,4));
// Do not edit below this line
module.exports = sumAll;
