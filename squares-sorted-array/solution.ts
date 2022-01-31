function sortedSquares(nums: number[]): number[] {
    let newArray = [];
    for (let number of nums) newArray.push(number ** 2);
    newArray = bubbleSort(newArray);
    return newArray;
};

function bubbleSort(arr: number[]) {
    const cpyArr = [...arr];
    const { length } = cpyArr;

    const swap = (i: number, j: number): void => {
        cpyArr[i] = cpyArr[i] + cpyArr[j];
        cpyArr[j] = cpyArr[i] - cpyArr[j];
        cpyArr[i] = cpyArr[i] - cpyArr[j];
    };

    for (let x = 0; x < length - 1; x++)
        for (let y = 0; y < length - 1 - x; y++) {
            const [currentIndex, nextIndex] = [y, y + 1];
            if (cpyArr[currentIndex] > cpyArr[nextIndex])
                swap(currentIndex, nextIndex);
        }

    return cpyArr;
}