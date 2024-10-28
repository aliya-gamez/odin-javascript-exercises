// 

const sumAll = function(intInput1, intInput2) {
    let intInputSum = 0;
    //input conditions
    if(intInput1 < 0 || intInput2 < 0) {
        return 'ERROR';
    }
    else if(!Number.isInteger(intInput1) || !Number.isInteger(intInput2)) {
        return 'ERROR';
    }
    //sum conditions
    if(intInput1 < intInput2) {
        for(let i = intInput1; i <= intInput2; i++) {
            intInputSum += i;
        }
    }
    else if(intInput1 > intInput2) {
        for(let i = intInput2; i <= intInput1; i++) {
            intInputSum += i;
        }
    }
    return intInputSum;
};

// Do not edit below this line
module.exports = sumAll;
