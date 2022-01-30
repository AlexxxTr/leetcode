function fib(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
};

function fib2(n: number): number {
    let array: Array<number> = Array.from({ length: n + 1 }, (_, i) => 0);
    array[1] = 1;

    for (let i = 2; i <= n; i++)
        array[i] = array[i - 1] + array[i - 2];

    return array[n]
}