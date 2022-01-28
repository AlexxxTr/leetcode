/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
    let num = BigInt(digits.join('')) + BigInt(1);
    return num.toString().split('').map(Number);
};