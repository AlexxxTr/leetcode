function lengthOfLastWord(s: string): number {
    let arr =  s.split(' ');
    let right = arr.length - 1;

    for (let i = right; i >= 0; i--) {
        if (arr[i].length === 0) continue;
        return arr[i].length;
    }
};