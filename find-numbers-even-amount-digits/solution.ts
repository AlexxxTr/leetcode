function findNumbers(nums: number[]): number {
    let total: number = 0;
    for (let i = 0; i < nums.length; i++) if (nums[i].toString().length % 2 === 0) total++;
    return total;
};
