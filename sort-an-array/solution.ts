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
    let n1 = middle - start + 1;
    let n2 = end - middle;

    let L: number[] = [];
    let M: number[] = [];

    for (let i = 0; i < n1; i++) 
        L[i] = arr[start + i];
    for (let i = 0; i < n2; i++)
        M[i] = arr[middle + i + 1]
    
    let i = 0, j = 0, k = start;
    
    while (i < n1 && j < n2) {
        if (L[i] <= M[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = M[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++, k++;
    }

    while (j < n2) {
        arr[k] = M[j];
        j++, k++;
    }
}
console.log(sortArray([-2,3,-5]));