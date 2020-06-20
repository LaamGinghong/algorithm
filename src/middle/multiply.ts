function multiply(num1: string, num2: string) {
  if (isNaN(+num1) || isNaN(+num2)) return ''
  const len1 = num1.length
  const len2 = num2.length
  const ans: number[] = []

  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      const index1 = i + j
      const index2 = i + j + 1
      const mul = +num1[i] * +num2[j] + (ans[index2] ?? 0)
      ans[index1] = Math.floor(mul / 10) + (ans[index1] ?? 0)
      ans[index2] = mul % 10
    }
  }

  const result = ans.join('').replace(/^0+/, '')
  return !result ? '0' : result
}
