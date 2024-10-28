//finished
const reverseString = function(stringInput) {
    const chars = stringInput.split('');
    let stringLength = chars.length;
    let stringResult = '';
    for(let i = stringLength; i > 0; i--) {
        stringResult += chars[i - 1]; //array chars starts at 0, and in for loop counts from length to 1, need to move down
    }
    return stringResult;
};

// Do not edit below this line
module.exports = reverseString;
