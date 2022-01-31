function maximumWealth(accounts: number[][]): number {
    let numArr: number[] = [];
    for (let numberArr of accounts) {
        let val = numberArr.reduce((acc: number, val: number) => acc + val);
        numArr.push(val);
    }
    
    return Math.max(...numArr)
};
