const removeFromArray = function(array, ...theArgs) {
    for (const arg of theArgs){
        for (let i=0; i<array.length; i++){
            if (array[i]===arg){
                array.splice(i, 1);
                i--;
            }
        }
    }
    return(array);
};

console.log(removeFromArray([1, 2, 3, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
