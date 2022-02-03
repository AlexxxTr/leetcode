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

function searchInsert2(nums: number[], target: number) {
    let left: number = 0, right: number = nums.length;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        target > nums[mid] ? left = mid + 1 :  right = mid;
    }
    return left;
}
