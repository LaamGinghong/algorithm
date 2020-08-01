/*
  三步爬楼梯
  动态规划
 */
function waysToStep(n: number) {
  if (n <= 2) return n
  const dp = [1, 2, 4]
  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000007
  }

  return dp[n - 1]
}
