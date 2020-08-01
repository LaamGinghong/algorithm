function isSubsequence(s: string, t: string) {
  if (s.length === 0) return true
  const sn = s.length
  const tn = t.length

  const dp: boolean[][] = Array.from(Array(sn + 1), () => Array(tn + 1).fill(false))
  dp[0][0] = true
  dp[0].fill(true)
  for (let i = 1; i < sn + 1; i++) {
    for (let j = i; j < tn + 1; j++) {
      if (dp[i][j - 1] || (dp[i - 1][j - 1] && s[i - 1] === t[j - 1])) {
        dp[i][j] = true
      }
    }
  }
  return dp[sn][tn]
}
