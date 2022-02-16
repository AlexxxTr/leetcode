function trap(height: number[]): number {
    let waterAmount = 0;

    const leftMaxLevels = Array(height.length).fill(0);
    const rightMaxLevels = Array(height.length).fill(0);

    [leftMaxLevels[0]] = height;
    for (let i = 1; i < height.length; i++) leftMaxLevels[i] = Math.max(height[i], leftMaxLevels[i - 1]);

    rightMaxLevels[height.length - 1] = height[height.length - 1];
    for (let i = height.length - 2; i >= 0; i--) rightMaxLevels[i] = Math.max(height[i], rightMaxLevels[i + 1]);

    for (let i = 0; i < height.length; i++) {
        console.log(leftMaxLevels[i], rightMaxLevels[i])
        const currentBoundry = Math.min(leftMaxLevels[i], rightMaxLevels[i]);
        if (currentBoundry > height[i]) waterAmount += currentBoundry - height[i];
    }

    return waterAmount;
};