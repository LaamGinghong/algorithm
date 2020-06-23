function containerDuplicate(nums: number[]) {
  const numSet = new Set<number>()

  for (const num of nums) {
    if (numSet.has(num)) {
      return true
    } else {
      numSet.add(num)
    }
  }
  return false
}
