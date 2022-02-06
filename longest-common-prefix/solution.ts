function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return '';
    if (strs.length === 1) return strs[0];
    let firstWord = strs[0];
    let lenFirstWord = firstWord.length, newArr = strs.slice(1);
    let commonPrefix = '';
    for (let i = 0; i < lenFirstWord; i++) {
        let letterToCheck = firstWord.charAt(i);
        let hasToBreak = false;
        for (let word of newArr)
            if (word.charAt(i) !== letterToCheck) {
                hasToBreak = true;
                break;
            };

        if (hasToBreak) break;
        commonPrefix += letterToCheck
    }
    return commonPrefix;
};