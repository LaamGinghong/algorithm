/*
  动态规划
  如果当前 i 和 i - 1 个颜色相同，则 i 和 i - 2 个颜色不同，
  如果当前 i 和 i - 1 个颜色不同
 */
function numWays(n: number, k: number) {
  if (n === 0 || k === 0) return 0
  if (n === 1) return k
  if (n === 2) return k * k

  const dp = [k, k * k]
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] * (k - 1) + dp[i - 2] * (k - 1)
  }
  return dp[n - 1]
}
