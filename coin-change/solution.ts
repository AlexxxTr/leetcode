function coinChange(coins: number[], amount: number): number {
    const table = Array(amount + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= amount; i++) {
        if (!table[i]) continue;
        for (let num of coins) {
            const comb = [...table[i], num];
            if (!table[i + num] || comb.length < table[i + num].length)
                table[i + num] = comb;
        }
    }
    return table[amount] ? table[amount].length : -1;
};