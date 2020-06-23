function intersect(nums1: number[], nums2: number[]) {
  const nums3 = []

  for (const num1 of nums1) {
    if (nums2.includes(num1)) {
      nums2.splice(nums2.indexOf(num1), 1)
      nums3.push(num1)
    }
  }

  return nums3
}
