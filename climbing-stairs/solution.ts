function climbStairs(n: number): number {
    let array = Array.from({length: n + 1}, (_, i) => 0);
    array[1] = 1;
    array[2] = 2;
    for (let i = 3; i <= n; i++)
        array[i] = array[i - 1] + array[i - 2]

    return array[n]
};