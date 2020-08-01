function divisorGame(N: number) {
  const dp = Array(N + 1).fill(false)
  dp[2] = true
  for (let i = 3; i <= N; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = i % j === 0 && !dp[i - j]
      if (dp[i]) break
    }
  }
  return dp[N]
}
