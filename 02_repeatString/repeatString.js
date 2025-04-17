const repeatString = function(string, number) {
    if (number<0) return "ERROR";
    let returnedString = "";
    for (let i = 0; i<number; i++){
        returnedString+=string;
    }
    return returnedString;
};

// Do not edit below this line
module.exports = repeatString;
