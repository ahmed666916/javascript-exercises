const reverseString = function(string) {
    let finalArray = [];
    let result="";
    for (let i = 0; i < string.length; i++) {
        finalArray = finalArray.concat(string[i]);
    }
    let loop = finalArray.length;
    for (let j = 0; j < loop; j++) {
        result = result + finalArray.pop();
    }
    
    return result;
};

// Do not edit below this line
module.exports = reverseString;
