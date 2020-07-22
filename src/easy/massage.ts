function massage(nums: number[]) {
  const dp: number[] = [0, 1]
  for (let i = 2; i < nums.length + 2; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i - 2] + dp[i - 2])
  }

  return dp[nums.length + 1]
}
