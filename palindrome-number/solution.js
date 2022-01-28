/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x.length === 1) return false;
    if (x.length === 2 && x % 11 === 0) return true;
    return x === parseInt(x.toString().split("").reverse().join(""));
};