/**
 * 暴力硬解
 */
function reverse1(num: number): number {
    const isSign = Math.sign(num) === -1
    const max = Math.pow(2, 31) - 1
    const min = Math.pow(-2, 31)
    const a = Math.abs(num).toString().split('').reverse().join('')
    const aa = parseInt(isSign ? `-${a}` : a)
    if (aa > max || aa < min) {
        return 0
    }
    return aa
}

/**
 * 取余法
 */
function reverse2(num: number): number {
    let result = Math.abs(num)
    let now = 0 // 结果
    while (result > 0) {
        now = now * 10 + result % 10 // 当前结果进一位 + 当前余数
        result = Math.floor(result / 10) // 原数据减一位
    }
    if (num < 0) {
        return now <= Math.pow(2, 31) ? -now : 0
    } else {
        return now <= Math.pow(2, 31) ? now : 0
    }
}

