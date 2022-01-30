/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    for (let i = 0; i < k; i++) {
        let number = nums.pop();
        nums.unshift(number);
    }
};

function rotate2(nums: number[], k: number): void {
    k = k % nums.length;
    reverse(0, nums.length - 1, nums);
    reverse(0, k - 1, nums);
    reverse(k, nums.length - 1, nums);
}

let reverse = (l: number, r: number, nums: number[]) => {
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
        r--;
    }
}