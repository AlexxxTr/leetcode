function maximumScore(nums: number[], multipliers: number[]): number {
    let n: number = nums.length;
    let m: number = multipliers.length;
    let arr: number[][] = new Array(m + 1).fill(0).map(() => new Array(m + 1).fill(0)); // ! Important to do it this way, will mess up code if done any other way

    for (let i = m - 1; i >= 0; i--) {
        for (let left = i; left >= 0; left--) {
            let mult: number = multipliers[i]
            let right: number = n - 1 - (i - left);
            let eq1 = mult * nums[left] + arr[i + 1][left + 1];
            let eq2 = mult * nums[right] + arr[i + 1][left];
            arr[i][left] = Math.max(eq1, eq2);

        }
    }
    return arr[0][0]
};