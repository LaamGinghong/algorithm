/**
 * 解题思路为最后只能有一个或者没有
 * @param nums
 */
function checkPossibility(nums: number[]): boolean {
    let count = 0 // 允许修改的次数
    if (nums[0] > nums[1]) {
        count++
        nums[0] = nums[1]
    }
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            count++
            /**
             * 3 5 4 ，则将 5 改成 3
             * 10 11 3，则将 3 改成 11
             */
            if (nums[i - 1] > nums[i + 1]) { // 如果下一位大于上一位
                nums[i + 1] = nums[i] // 则把下一位修改为当前位
            } else { // 否则将当前位修改为上一位
                nums[i] = nums[i - 1]
            }
        }
    }
    return count <= 1
}

console.log(checkPossibility([2, 2, 1]))
