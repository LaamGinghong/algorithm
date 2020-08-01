/*
    动态规划
    首先排除长度为 0 和 1
    dp 表示在第 i 个房子时候的最优解，是偷着房子还是不偷
    公式为 dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
 */
function rob(nums: number[]) {
  const n = nums.length
  if (!n) return 0
  if (n === 1) return nums[0]

  const dp = [nums[0], Math.max(nums[0], nums[1])]
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }

  return dp[n - 1]
}
