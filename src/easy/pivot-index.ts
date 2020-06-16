function pivotIndex(nums: number[]) {
  if (!nums.length) return -1
  const sum = nums.reduce((previousValue, currentValue) => previousValue + currentValue)
  let leftSum = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (leftSum === sum - leftSum - num) return i
    leftSum += num
  }
  return -1
}

console.log(pivotIndex([1, 2, 3]))
