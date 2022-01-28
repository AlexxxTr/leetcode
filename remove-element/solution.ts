function removeElement(nums: number[], val: number): number {
    while(nums.includes(val)) remove(nums, val);
    return nums.length;
};

function remove(nums: number[], val: number): void {
    for (let i = 0; i < nums.length; i++) if (nums[i] === val) nums.splice(i, 1);
}