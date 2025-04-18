const add = function(a, b) {
  return a+b;
	
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
  let s = 0;
	for (const num of array){
    s+=num;
  }
  return s;
};

const multiply = function(array) {
  let res = 1;
  for (const num of array){
    res*=num;
  }
  return res;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	if ( a==0 ) return 1;
  let res = 1;
  for (let i =1; i<=a; i++){
    res*=i;
  }
  return res;
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
