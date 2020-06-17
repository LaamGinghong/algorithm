function rotate(matrix: number[][]) {
  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j].push(matrix[i][j])
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].splice(0, matrix.length)
  }
}

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
])
