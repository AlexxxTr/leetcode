/**
 * @param {number} num
 * @return {string}
 */
const DESC = ['Hundred', 'Thousand', 'Million', 'Billion'],
    ONES = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
    THENTHS = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'],
    TEN = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
var numberToWords = function (num) {
    if (num === 0) return ONES[num];
    let arr = [];
    let { billion, million, thousand, hundred } = getVariables(num);
    if (billion !== 0) arr = [...arr, processNumber(billion) + ' ' + DESC[3]];
    if (million !== 0) arr = [...arr, processNumber(million) + ' ' + DESC[2]];
    if (thousand !== 0) arr = [...arr, processNumber(thousand) + ' ' + DESC[1]];
    if (hundred !== 0) arr = [...arr, processNumber(hundred)]
    return arr.join(' ');
};

function getVariables(num) {
    let billion = Math.floor(num / 1000000000);
    num = num % 1000000000;
    let million = Math.floor(num / 1000000);
    num = num % 1000000;
    let thousand = Math.floor(num / 1000)
    num = num % 1000;
    hundred = num;
    return { billion, million, thousand, hundred }
}

function processNumber(n) {
    return (n < 100) ? twoDigitNumbers(n) : threeDigitNumbers(n);
}

function twoDigitNumbers(n) {
    if (n < 10) return ONES[n];
    if (n % 10 === 0) return THENTHS[n / 10]
    if (n < 20) return TEN[n - 10];

    return THENTHS[Math.floor(n / 10)] + ' ' + ONES[n % 10];
}

function threeDigitNumbers(n) {
    if (n % 100 === 0) return ONES[n / 100] + ' ' + DESC[0];
    let twoDigit = twoDigitNumbers(n % 100), hundreds = ONES[Math.floor(n / 100)] + ' ' + DESC[0]
    return hundreds + ' ' + twoDigit;
}