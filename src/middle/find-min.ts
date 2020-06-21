function findMin(nums: number[]) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[right]) left = mid + 1
    // 中间值大于右值，说明错位发生在右边
    else right = mid
  }
  return nums[left]
}
