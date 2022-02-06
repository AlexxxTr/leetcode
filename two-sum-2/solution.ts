function twoSum(numbers: number[], target: number): number[] {
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        let toFind = target - number;
        let secIndex = search(numbers.slice(i + 1), toFind);
        if (secIndex !== -1) return [i + 1, secIndex + i + 2]; // Of by one and it is one indexed
    }
};

function search(numbers: number[], target: number): number {
    let start = 0, end = numbers.length - 1;
    console.log(numbers, target);
    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2);
        console.log(start, middle, end);
        console.log(numbers[middle]);
        if (numbers[middle] === target) return middle;
        (numbers[middle] > target) ? end = middle - 1 : start = middle + 1;
    }
    return -1
}

function twoSum2(numbers: number[], target: number): number[] {
    let i = 0, j = numbers.length - 1;
    let sum = numbers[i] + numbers[j];
    while (sum !== target) {
        sum < target ? i++ : j--;
        sum = numbers[i] + numbers[j];
    }
    return [i + 1, j + 1];
}
