function getRow(rowIndex: number) {
  if (rowIndex < 0) return []
  const result: number[][] = []
  for (let i = 0; i <= rowIndex; i++) {
    const subArr: number[] = []
    for (let j = 0; j <= i; j++) {
      if (j > 0 && j < i) subArr.push(result[i - 1][j - 1] + result[i - 1][j])
      else subArr.push(1)
    }
    result.push(subArr)
  }
  return result[rowIndex - 1]
}
