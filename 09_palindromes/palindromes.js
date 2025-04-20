const palindromes = function (string) {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz";

    const stringCleaned = string
    .split("")
    .map(char => char.toLowerCase())
    .filter(char => chars.includes(char))
    .join("");

    const stringReversed = stringCleaned.split("").reverse().join("");
    return stringCleaned === stringReversed;
};

// palindromes('R ace cAr');

// Do not edit below this line
module.exports = palindromes;
