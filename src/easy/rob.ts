function rob(nums: number[]) {
    const {length} = nums
    if (!length) return 0
    const dp = new Array(length + 1)
    dp[0] = 0
    dp[1] = nums[0]
    for (let i = 2; i <= length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
    }
    return dp[length]
}
