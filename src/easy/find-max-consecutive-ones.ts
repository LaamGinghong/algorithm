function findMaxConsecutiveOnes(nums: number[]) {
  let fast = 0
  let slow = 0
  let result = 0
  const { length } = nums
  while (fast <= length) {
    const num = nums[fast]
    if (!num) {
      result = Math.max(result, fast - slow)
      fast++
      slow = fast
    } else {
      fast++
    }
  }
  return result
}
