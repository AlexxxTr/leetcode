function uniquePathsWithObstacles(
  obstacleGrid: number[][],
  m = obstacleGrid.length - 1,
  n = obstacleGrid[0].length - 1,
  memo = {}
): number {
  const key = `${m},${n}`;
  if (key in memo) return memo[key];
  if (m < 0 || n < 0) return 0;
  if (obstacleGrid[m][n] === 1) return 0;
  if (m === 0 && n === 0) return 1;

  memo[key] =
    uniquePathsWithObstacles(obstacleGrid, m - 1, n, memo) +
    uniquePathsWithObstacles(obstacleGrid, m, n - 1, memo);
  return memo[key];
}

// Runtime: 77ms
// Memory: 44.7MB

console.log(
  uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])
);
