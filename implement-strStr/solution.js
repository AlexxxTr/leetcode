/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
    if (haystack == needle) return 0;
    if (!haystack.includes(needle)) return -1;
    let needleLen = needle.length;
    for (let i = 0; i < haystack.length; i++) if (haystack.substr(i, needleLen) == needle) return i;
};