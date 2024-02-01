const palindromes = function (string) {
    let reverse_string = '';
    for (let i=string.length; i >= 0; i--){
        reverse_string = reverse_string + string.charAt(i);
        
    }
    if (string === reverse_string){
        return true;
    }
    else{
        return false;
    }


};

// Do not edit below this line
module.exports = palindromes;
