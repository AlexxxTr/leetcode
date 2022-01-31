function rob(nums: number[]): number {
    if (nums.length <= 3) return Math.max(...nums);

    const subRob = (nums: number[]): number => {
        const arr1: number[] = [0];
        const arr2: number[] = [0];
        for (let i = 0; i < nums.length; i++) {
            arr1[i + 1] = arr2[i] + nums[i];
            arr2[i + 1] = Math.max(arr1[i], arr2[i]);
        }
        return Math.max(arr1.pop(), arr2.pop());
    };

    return Math.max(subRob(nums.slice(1)), subRob(nums.slice(0, -1)));
};

console.log(rob([1,2,3,1]));