function singleNumber(nums: number[]) {
  return nums.reduce((previousValue, currentValue) => previousValue ^ currentValue)
}

singleNumber([2, 2, 1])
