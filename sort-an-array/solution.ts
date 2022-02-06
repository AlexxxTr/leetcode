function sortArray(nums: number[]): number[] {
    mergeSort(nums, 0, nums.length - 1);
    return nums;
};

function mergeSort(arr: number[], start: number, end: number): void {
    if (!(start < end)) return;
    let middle: number = Math.floor((start + end) / 2);
    mergeSort(arr, start, middle);
    mergeSort(arr, middle + 1, end);
    merge(arr, start, middle, end);
}

function merge(arr: number[], start: number, middle: number, end: number): void {
    let lengthSubArr1 = middle - start + 1;
    let lenghtSubArr2 = end - middle;

    let subArr1: number[] = [];
    let subArr2: number[] = [];

    for (let i = 0; i < lengthSubArr1; i++) 
        subArr1[i] = arr[start + i];
    for (let i = 0; i < lenghtSubArr2; i++)
        subArr2[i] = arr[middle + i + 1]
    
    let i = 0, j = 0, k = start; // i is position in subArr1, j is position in subArr2, k is position in the full array
    
    while (i < lengthSubArr1 && j < lenghtSubArr2) {
        if (subArr1[i] <= subArr2[j]) {
            arr[k] = subArr1[i];
            i++;
        } else {
            arr[k] = subArr2[j];
            j++;
        }
        k++;
    }

    while (i < lengthSubArr1) {
        arr[k] = subArr1[i];
        i++, k++;
    }

    while (j < lenghtSubArr2) {
        arr[k] = subArr2[j];
        j++, k++;
    }
}
console.log(sortArray([-2,3,-5]));