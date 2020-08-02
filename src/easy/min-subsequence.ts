function minSubsequence(nums: number[]) {
  if (nums.length < 2) return nums

  nums.sort((a, b) => b - a)
  let sum = nums.reduce((previousValue, currentValue) => previousValue + currentValue)
  let count = 0
  const result = []

  while (nums.length) {
    const val = nums.shift()
    sum -= val
    count += val
    result.push(val)

    if (count > sum) return result
  }
}
