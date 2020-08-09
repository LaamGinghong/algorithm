function maximalSquare(matrix: string[][]) {
  const rows = matrix.length
  if (!rows) return 0
  const cols = matrix[0].length
  const dp: number[][] = []
  let max = 0

  for (let i = 0; i < rows + 1; i++) {
    if (i === 0) {
      dp[i] = Array(cols + 1).fill(0)
    } else {
      dp[i] = [0]
    }
  }

  for (let i = 1; i < rows + 1; i++) {
    for (let j = 1; j < cols + 1; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1
        max = Math.max(max, dp[i][j])
      } else {
        dp[i][j] = 0
      }
    }
  }

  return max * max
}
