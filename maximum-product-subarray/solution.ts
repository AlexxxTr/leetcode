function maxProduct(nums: number[]): number {
    let prevMax: number, prevMin: number, result: number;
    prevMax = prevMin = result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
        let curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

        prevMax = curMax;
        prevMin = curMin;

        result = Math.max(curMax, result);
    }
    return result;
}