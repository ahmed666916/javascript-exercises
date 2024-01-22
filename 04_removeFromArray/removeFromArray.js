const removeFromArray = function(array, arg) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
       
        
        if (array[i] !== arg) {
            newArray.push(array[i]);
        }
    
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
