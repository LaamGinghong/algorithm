function twoSum1(nums: number[], target: number) {
  const map: { [key: number]: number } = {}
  let index = 0 // 当前索引
  let difference: number // 当前值于目标值的差
  while (index < nums.length) {
    difference = target - nums[index]
    if (map[difference] !== undefined) {
      // 如果在内存中找到了索引，则拿出
      return [map[difference], index]
    }
    map[nums[index]] = index // 将当前值作为 key，索引作为 value 存进内存
    index++
  }
}

function twoSum2(numbers: number[], target: number) {
  let i = 0
  let j = numbers.length - 1
  while (i < j) {
    const sum = numbers[i] + numbers[j]
    if (sum === target) {
      return [i, j]
    } else if (sum > target) {
      j--
    } else {
      i++
    }
  }
}
