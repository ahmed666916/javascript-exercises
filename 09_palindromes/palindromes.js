const palindromes = function (string) {
    let reverse_string = '';
    const cleanedStr = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    for (let i=cleanedStr.length; i >= 0; i--){
        reverse_string = reverse_string + cleanedStr.charAt(i);
        
    }
    if (cleanedStr === reverse_string){
        return true;
    }
    else{
        return false;
    }


};

// Do not edit below this line
module.exports = palindromes;
