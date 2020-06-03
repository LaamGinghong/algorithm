/**
 * @param N 需要比 N 小
 * @param K 总分数大于 K
 * @param W 最大值
 */
function new21Game(N: number, K: number, W: number) {
    const dp: { [key: number]: number } = {}
    let temp = 0 // 从最后一次往前推算的几率

    for (let i = K; i < K + W; i++) {
        if (i > N) {
            dp[i] = 0
        } else {
            dp[i] = 1
        }
        if (i !== K) {
            temp += dp[i] // temp = dp[K + W -1] + ... + dp[K + 1]
        }
    }
    dp[K + W] = dp[K] * W - temp // 第一个循环的到 dp[K] ~ dp[K + W -1]
    /**
     * dp[i] = (dp[i + 1] + dp[i + 2] + ... + dp[i + W]) / W
     * dp[i + 1] = (dp[i + 2] + dp[i + 3] + ... + dp[i + W + 1] / W
     * 两式相减
     * dp[i] = (dp[i + 1] * (W + 1) - dp[i + W +1]) / W
     */
    for (let i = K - 1; i >= 0; i--) {
        dp[i] = (dp[i + 1] * (W + 1) - dp[i + W + 1]) / W
    }
    return dp[0]
}

new21Game(39, 17, 10)
