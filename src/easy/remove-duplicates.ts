function removeDuplicates(nums: number[]): number {
  const length = new Set(nums).size
  let current = nums[0]
  for (let i = 1; i < length; ) {
    const num = nums[i]
    if (num === current) {
      nums.splice(i, 1)
    } else {
      current = nums[i++]
    }
  }
  return length
}
