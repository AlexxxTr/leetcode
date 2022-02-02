function rob(nums: number[]): number {
    let arr: number[] = [];
    arr[0] = nums[0];
    arr[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++)
        arr[i] = Math.max(arr[i - 1], arr[i - 2] + nums[i]);

    arr
    return arr[nums.length - 1];
};
