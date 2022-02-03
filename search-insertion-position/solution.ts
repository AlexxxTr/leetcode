function searchInsert(nums: number[], target: number): number {
    let left: number = 0, right: number = nums.length - 1;
    let middle: number;
    if (nums[right] < target) return right + 1;
    while (right >= left) {
        middle = left + Math.floor((right - left) / 2);

        if (nums[middle] === target) return middle;
        if (nums[middle] === target + 1 && nums[middle - 1] !== target) return middle;
        if (nums[middle] > target && nums[middle - 1] < target) return middle;

        if (nums[middle] > target)
            right = middle - 1;
        else
            left = middle + 1;
    }
    return middle;
};

console.log(searchInsert([-1, 3, 5, 6], 0));