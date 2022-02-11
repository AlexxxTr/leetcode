function nthUglyNumber(n: number): number {
    let table = Array(n + 1).fill(0);
    let f2: number, f3: number, f5: number;
    f2 = f3 = f5 = 1;
    table[1] = 1;
    let i = 2
    while (i <= n) {
        let next: number = Math.min(2 * table[f2], 3 * table[f3], 5 * table[f5]);
        table[i] = next;
        if (next == 2 * table[f2]) f2++;
        if (next == 3 * table[f3]) f3++;
        if (next == 5 * table[f5]) f5++;
        i++;
    }
    return table[n]
}

console.log(nthUglyNumber(1));