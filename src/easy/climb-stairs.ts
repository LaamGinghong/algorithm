const climbStairs1 = (function () {
  const cache: { [key: number]: number } = {
    1: 1,
    2: 2,
  }
  return function (n: number) {
    if (typeof cache[n] !== 'number') {
      cache[n] = climbStairs1(n - 1) + climbStairs1(n - 2)
    }
    return cache[n]
  }
})()

function climbStairs2(n: number) {
  const dp = []
  dp[0] = 1
  dp[1] = 2
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
