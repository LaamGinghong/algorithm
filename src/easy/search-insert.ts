function searchInsert(nums: number[], target: number) {
    let result = nums.findIndex(num => num === target)
    if (result > -1) {
        return result
    }
    result = 0
    if (target <= nums[0]) {
        return 0
    }
    for (; result < nums.length; result++) {
        if (nums[result] < target && nums[result + 1] >= target) {
            return result + 1
        }
    }
    return nums.length
}

console.log(searchInsert([1, 3, 5, 6], 7))
