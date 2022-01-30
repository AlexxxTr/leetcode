function generate(numRows: number): number[][] {
    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1], [1, 1]];

    let array: number[][] = [[1], [1, 1]];

    for (let i = 2; i < numRows; i++) {
        let newArray = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                newArray.push(1);
                continue;
            }
            newArray[j] = array[i - 1][j - 1] + array[i - 1][j]
        }
        array.push(newArray); 
    }
    return array;
};