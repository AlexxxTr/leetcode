function wordBreak(s: string, wordDict: string[]): boolean {
    let table = Array(s.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i < s.length; i++) {
        if (!table[i]) continue;
        for (let word of wordDict) {
            if (s.slice(i, i + word.length) !== word) continue;
            if (i + word.length <= s.length) table[i + word.length] = true;
        }
    }
    return table[s.length];
}