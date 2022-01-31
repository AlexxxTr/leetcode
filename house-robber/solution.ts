function rob(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    for (let i = 2; i < nums.length; i++) 
        nums[i] += Math.max(...nums.slice(0, i - 1))
    
    return Math.max(...nums)
};
