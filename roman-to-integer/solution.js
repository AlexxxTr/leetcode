/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let romanArr = convertToArrayRoman(s)
    let total = 0;
    for (let i = 0; i < romanArr.length; i++) {
        const el = romanArr[i], nextEl = romanArr[i + 1];
        if(el < nextEl) {
            total = total + nextEl - el;
            i++;
            continue;
        }
        total += el
    }
    return total;
};

function convertToArrayRoman(s) {
    let arr = s.split(""), decArr = [];
    for(let el of arr) {
        decArr.push(roman2Int(el));
    }
    return decArr;
}

function roman2Int(char) {
    let dict =  {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    return dict[char]
}