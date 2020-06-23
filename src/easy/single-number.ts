function singleNumber(nums: number[]) {
  return nums.reduce((previousValue, currentValue) => previousValue ^ currentValue)
}
