function findMaxConsecutiveOnes(nums: number[]): number {
    let array: string[] = nums.join('').split('0');
    let consecutive: number = 0;
    for (let ones of array) if (ones.length > consecutive) consecutive = ones.length;
    return consecutive;
};