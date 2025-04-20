const getTheTitles = function(array) {
    const returnedArray = [];
    array.forEach(book => returnedArray.push(book['title']));
    return returnedArray;
};

// Do not edit below this line
module.exports = getTheTitles;
