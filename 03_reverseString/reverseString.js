const reverseString = function(word) {
    let result1 = '';
    let result2 = '';
    result1 = word.split("");
    result2 = result1.reverse().join("");
    return result2;
};

// Do not edit below this line
module.exports = reverseString;
