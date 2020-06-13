function containerDuplicate(nums: number[]) {
    const hash: { [key: number]: number } = {}
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (num in hash) {
            hash[num] += 1
        } else {
            hash[num] = 1
        }
    }
    return Object.values(hash).some(value => value > 1)
}

