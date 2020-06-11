function majorityElement(nums: number[]) {
    const map = new Map<number, number>()
    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
        if (map.get(num) >= nums.length / 2) {
            return num
        }
    }
}

majorityElement([3, 2, 3])
