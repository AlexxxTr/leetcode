/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
    let arr = splitNumInArray(num), str = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) continue;
        switch (i) {
            case 0:
                str += processThousands(arr[i]);
                break;
            case 1:
                str += processHunders(arr[i]);
                break;
            case 2:
                str += processTenths(arr[i]);
                break;
            default:
                str += processOnes(arr[i]);
                break;
        }
    }
    return str;
};

function splitNumInArray(num) {
    let arr = [],
        thousands = Math.floor(num / 1000),
        hundreds = (Math.floor(num / 100)),
        ones = Math.floor(num % 10);
    let tenths = (Math.floor(num % 100) - ones) / 10;
    arr.push(thousands, hundreds >= 10 ? hundreds % 10 : hundreds, tenths, ones);
    return arr;
}

function processThousands(n) {
    return 'M'.repeat(n)
}

function processHunders(n) {
    if (n === 5) return 'D';
    if (n === 4) return 'CD';
    if (n === 9) return 'CM';
    if (n >= 1 && n <= 3) return 'C'.repeat(n);
    return 'D' + 'C'.repeat(n - 5);
}

function processTenths(n) {
    if (n === 5) return 'L'
    if (n === 4) return 'XL'
    if (n === 9) return 'XC'
    if (n >= 1 && n <= 3) return 'X'.repeat(n);
    return 'L' + 'X'.repeat(n - 5);
}

function processOnes(n) {
    if (n === 5) return 'V'
    if (n === 4) return 'IV'
    if (n === 9) return 'IX'
    if (n >= 1 && n <= 3) return 'I'.repeat(n);
    return 'V' + 'I'.repeat(n - 5);
}