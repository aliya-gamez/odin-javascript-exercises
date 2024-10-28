// using ...arrayRemovalArgs syntax to allow infinite arguments as an
// array, also known as a rest parameter.
// additionally, using filter() which is a method of Array that creates
// a copy of a given array, filtered down to the elements that pass the
// test implemented by the function within filter()

const removeFromArray = function(arrayInputs, ...argsToRemove) {
    return arrayInputs.filter((arrayInput) => {
        if(argsToRemove.includes(arrayInput))
            return false;
        return true;
    });
};

//this works because an arrow function without curly brackets
// will implicitly return the result of the expression following
// the arrow. directly.
const removeFromArray2 = function(arrayInputs, ...argsToRemove) {
    return arrayInputs.filter( arrayInput => !argsToRemove.includes(arrayInput) );
};


// this doesnt work because now JavaScirpt expects a 'block body'
// which implies not an implict return, the fucntion will not return
// anything unless explicitly stated with return
const removeFromArray3 = function(arrayInputs, ...argsToRemove) {
    return arrayInputs.filter( arrayInput => {!argsToRemove.includes(arrayInput)} );
};

//for example, compared to above, this works
const removeFromArray4 = function(arrayInputs, ...argsToRemove) {
    return arrayInputs.filter( arrayInput => {return !argsToRemove.includes(arrayInput)} );
};

// Do not edit below this line
module.exports = removeFromArray;
