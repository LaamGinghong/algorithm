function minSubArrayLength(s: number, nums: number[]) {
  let i = 0
  let answer = Number.MAX_SAFE_INTEGER
  let sum = 0
  for (let j = 0; j < nums.length; j++) {
    const num = nums[j]
    sum += num
    while (sum >= s) {
      answer = Math.min(answer, j - i + 1)
      sum -= nums[i++]
    }
  }
  return answer === Number.MAX_SAFE_INTEGER ? 0 : answer
}
