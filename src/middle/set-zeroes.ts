function setZeroes(matrix: number[][]) {
  const rows = new Set<number>()
  const cols = new Set<number>()

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i)
        cols.add(j)
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    if (rows.has(i)) {
      matrix[i] = matrix[i].fill(0)
    }
    for (let j = 0; j < matrix[i].length; j++) {
      if (cols.has(j)) {
        matrix[i][j] = 0
      }
    }
  }
}
