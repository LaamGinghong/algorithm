function generate(numRows: number) {
  const result: number[][] = []
  if (numRows <= 0) return result
  for (let i = 0; i < numRows; i++) {
    const subArr: number[] = []
    for (let j = 0; j <= i; j++) {
      if (j > 0 && j < i) {
        subArr.push(result[i - 1][j - 1] + result[i - 1][j])
      } else {
        subArr.push(i)
      }
    }
    result.push(subArr)
  }
  return result
}
