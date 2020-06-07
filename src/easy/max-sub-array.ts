/*
    设最大连续子序列和为 sum，结果为 answer
    如果 sum > 0，则说明 sum 对结果有增益效果，则 sum += num
    如果 sum <= 0，则说明 sum 对结果没有增益效果，则 sum = num
    每次比较 sum 和 answer 的大小，将最大值置为 answer
*/
function maxSubArray(nums: number[]) {
    let answer = nums[0]
    let sum = 0
    for (const num of nums) {
        if (sum > 0) {
            sum += num
        } else {
            sum = num // 表示需要从当前位置重新开始计算
        }
        answer = Math.max(answer, sum)
    }
    return answer
}
