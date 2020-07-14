function numberOfIslands(grid: string[][]) {
  let res = 0
  const rows = grid.length
  if (!rows) return 0
  const cols = grid[0].length
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        helper(grid, i, j, rows, cols)
        res++
      }
    }
  }
  function helper(grid: string[][], i: number, j: number, rows: number, cols: number) {
    if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === '0') return
    grid[i][j] = '0'
    helper(grid, i + 1, j, rows, cols)
    helper(grid, i, j + 1, rows, cols)
    helper(grid, i - 1, j, rows, cols)
    helper(grid, i, j - 1, rows, cols)
  }
  return res
}
