const repeatString = function(stringInput, repeatInput) {
    let stringResult = '';
    if(repeatInput < 0)
        return 'ERROR';
    for(let i = 1; i <= repeatInput; i++) {
        stringResult += stringInput;
    }
    return stringResult;
};

// Do not edit below this line
module.exports = repeatString;
