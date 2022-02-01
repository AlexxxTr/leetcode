function deleteAndEarn(nums: number[]): number {
    const map = {};
    for (const num of nums) {
        if (!(num in map)) map[num] = 0;
        map[num]++;
    }

    let prevSum = 0;
    let currSum = 0;
    let prevKey = -1;

    for (let key in map) {
        const m = Math.max(prevSum, currSum);
        let keyNum = parseInt(key);

        currSum = keyNum * map[keyNum]
        currSum += (keyNum - 1 !==  prevKey) ? m : prevSum;

        prevSum = m;
        prevKey = keyNum;
    }

    return Math.max(prevSum, currSum);
};