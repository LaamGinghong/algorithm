function findDiagonalOrder(matrix: number[][]) {
  if (!matrix.length) return []
  const result: number[] = []
  const M = matrix.length
  const N = matrix[0].length
  const times = M + N - 1 // 遍历斜线数

  let count = 0 // 遍历一个斜线时的计数
  for (let i = 0; i <= times; i++) {
    while (count <= i) {
      let m = 0
      let n = 0
      let max = 0
      if ((i + 1) % 2 !== 0) {
        // 奇数条斜线，则列增加
        m = i - count
        n = count
        max = N
      }
      if ((i + 1) % 2 === 0) {
        // 偶数条斜线，则行数增加
        m = count
        n = i - count
        max = M
      }
      if (m > M - 1 || n > N - 1) {
        count++
        continue
      }
      result.push(matrix[m][n])
      count++
    }
    count = 0
  }
  return result
}

findDiagonalOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
])
