function rob(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    for (let i = 2; i < nums.length; i++) 
        nums[i] = Math.max(nums[i - 1], nums[i - 2] + nums[i]);
    
    return nums[nums.length - 1];
};
