function maxScoreSightseeingPair(values: number[]): number {
    const table = Array(values.length).fill(0);
    for (let i = 0; i < values.length; i++) {
        for (let j = i + 1; j < values.length; j++) {
            let score = values[i] + values[j] + i - j;
            if (score > table[i]) table[i] = score;
        }
    }
    return Math.max(...table);
}

function maxScoreSightseeingPair2(values: number[]): number {
    let prevMax = values[0], max = 0;
    for(let i = 1; i < values.length; i++) {
        prevMax--;
        max = Math.max(max, prevMax + values[i]);
        prevMax = Math.max(prevMax, values[i]);
    }
    return max;
}
