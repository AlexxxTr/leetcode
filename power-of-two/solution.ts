function isPowerOfTwo(n: number): boolean {
    return isPowerOfN(n, 2);
};

function isPowerOfN(n: number, power: number): boolean {
    if (n <= 0) return false;
    while (n !== 1) {
        n = n / power;
        if (n % power !== 0 && n !== 1) return false;
    }
    return true;
}