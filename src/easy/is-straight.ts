export function isStraight(nums: number[]) {
  const notZeroList = nums.filter((num) => num)
  const notZeroSet = new Set(notZeroList)
  if (notZeroList.length !== notZeroSet.size) return false

  const max = Math.max(...notZeroList)
  const min = Math.min(...notZeroList)
  return max - min < 5
}
