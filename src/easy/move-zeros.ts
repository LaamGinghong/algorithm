function moveZeros1(nums: number[]) {
  let index = 0
  let { length } = nums
  const zeros = []
  while (index < length) {
    const num = nums[index]
    if (num === 0) {
      nums.splice(index, 1)
      length--
      zeros.push(0)
    } else {
      index++
    }
  }
  nums.push(...zeros)
}

function moveZeros2(nums: number[]) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[j]
      nums[j] = nums[i]
      nums[i] = temp
      j++
    }
  }
}
