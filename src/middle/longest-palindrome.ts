function longestPalindrome2(s: string) {
  let ans = ''
  const n = s.length
  const dp: boolean[][] = Array.from(new Array(n), () => [].fill(0))
  for (let i = n - 1; i >= 0; i++) {
    for (let j = i; j < n; j++) {
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])
      if (dp[i][j] && j - i + 1 > ans.length) {
        ans = s.substr(i, j - i + 1)
      }
    }
  }
  return ans
}
