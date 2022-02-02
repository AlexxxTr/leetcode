function canJump(nums: number[]): boolean {
    let index: number = 0;
    let max: number = 0;
    let target: number = nums.length - 1;

    while (index < nums.length) {
        max = Math.max(max, index + nums[index]);
        
        if (max >= target) return true;
        if (max <= index && nums[index] === 0) return false;
        index++;
    }
    return false;
};
