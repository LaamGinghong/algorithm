/*
  头条真题
  判断是否同花顺
  0-12 为 ♠
  13-25 为 ♥
  26-38 为 ♣
  39-51 为 ♦
 */
function isStraightFlush(nums: number[]) {
  if (nums.length < 5) return false
  nums.sort((a, b) => a - b)
  return isFlush(nums) && isStraight(nums)
}

function isFlush(nums: number[]): boolean {
  const max = Math.max(...nums)
  const min = Math.min(...nums)

  let flag: boolean
  if (min <= 12) {
    flag = max <= 12
  } else if (min >= 13 && min <= 25) {
    flag = max >= 13 && max <= 25
  } else if (min >= 26 && min <= 38) {
    flag = max >= 26 && max <= 38
  } else {
    flag = max >= 39 && max <= 51
  }

  return flag
}

function isStraight(nums: number[]): boolean {
  let flag = true
  const n = nums.length
  for (let i = 0; i < n - 5; i++) {
    flag = flag && nums[i + 4] - nums[i] === 4
  }
  return flag
}
