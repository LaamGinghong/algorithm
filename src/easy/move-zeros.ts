function moveZeros(nums: number[]) {
    let index = 0
    let {length} = nums
    const zeros = []
    while (index < length) {
        const num = nums[index]
        if (num === 0) {
            nums.splice(index, 1)
            length--
            zeros.push(0)
        } else {
            index++
        }
    }
    nums.push(...zeros)
}

moveZeros([0, 1, 0, 3, 12])
