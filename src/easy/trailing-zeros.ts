// 查找 n! 中末尾的0的个数
/*
    在 1 ～ 9 中，只有 2 * 5 = 10，所以 一对 2 和 5 贡献一个 0；
    等价于 一对 2的倍数 和 5 的倍数贡献一个 0；
    又因为 2 的倍数数量大于 5 的倍数的数量，因此只需考虑 5 的倍数出现的次数；
 */
function trailingZeros(n: number) {
    let count = 0
    while (n >= 5) {
        count += n / 5 | 0
        n /= 5
    }
    return count
}

trailingZeros(22)
