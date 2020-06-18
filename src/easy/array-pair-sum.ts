function arrayPairSum(nums: number[]) {
  return nums
    .sort((a, b) => a - b)
    .filter((_, index) => index % 2 === 0)
    .reduce((previousValue, currentValue) => previousValue + currentValue)
}
