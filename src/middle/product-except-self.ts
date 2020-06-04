function productExceptSelf(nums: number[]): number[] {
    let value = 1
    const result = [1] // 默认第一位为1
    for (let i = 1; i < nums.length; i++) { // 先将 i 左边的乘起来
        value *= nums[i - 1]
        result[i] = value
    }
    value = 1
    for (let i = nums.length - 1; i > 0; i--) { // 再将 i 右边的乘起来
        value *= nums[i]
        result[i - 1] *= value
    }
    return result
}

productExceptSelf([1, 2, 3, 4])
