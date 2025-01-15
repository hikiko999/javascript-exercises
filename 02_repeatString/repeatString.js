const repeatString = function(userString, n) {
    if (n < 0) {
        return 'ERROR'
    }
    
    let myString = "";
    for (let i = 0; i < n; i++) {
        myString = myString + userString;
    }
    return myString
};

// Do not edit below this line
module.exports = repeatString;
