/*
   给定一个非负整数 c，你要判断是否存在两个整数 a 和 b，使得 a^2 + b^2 = c
 */

/**
 * 题目中为圆的标准方程 a^2 + b^2 = r^2 (c)
 * a, b 均大于0，所以位于第一象限
 * 又因为圆基于 y=x 对称，所以上半部分存在的话即下半部分也存在
 * 所以只需要判断 1/8 个圆
 * a^2 + b^2 = c => 2a^2 = c => a = Math.sqrt(0.5) * Math.sqrt(c)
 */
function judgeSquareSum(c: number): boolean {
    const flag = Math.sqrt(c) * Math.sqrt(0.5)
    for (let a = 0; a <= flag; a++) {
        const b = Math.sqrt(c - Math.pow(a, 2))
        if (b % 1 === 0) {
            return true
        }
    }
    return false
}

judgeSquareSum(10)
