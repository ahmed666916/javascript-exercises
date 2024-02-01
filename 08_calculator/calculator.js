const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(numArray) {
  let sum = 0;

  numArray.forEach(element => {
    sum += element;

  });

  return sum;
};

const multiply = function(array) {
  if (array.length === 0) {
    return 0;
  }

  return array.reduce((product, current) => product * current);

};

const power = function(num, power) {
  
  return num ** power;
  }
	


const factorial = function(num) {
  if (num === 0) {
    return 1;
    
  }
  let fact = num;
	for (let i = num - 1; i > 0; i--) {
    fact = fact * i;
    
  }

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
