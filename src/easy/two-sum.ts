function twoSum(nums: number[], target: number) {
    const map: { [key: number]: number } = {}
    let index = 0 // 当前索引
    let difference: number // 当前值于目标值的差
    while (index < nums.length) {
        difference = target - nums[index]
        if (map[difference] !== undefined) { // 如果在内存中找到了索引，则拿出
            return [map[difference], index]
        }
        map[nums[index]] = index // 将当前值作为 key，索引作为 value 存进内存
        index++
    }
}

console.log(twoSum([2, 7, 11, 15], 9))
