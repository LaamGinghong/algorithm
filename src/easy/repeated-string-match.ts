/*
 B 的长度大于 A 的长度且满足叠加 A 后 B 成为其子字符串，共有四种情况：
 1. 叠加 n 个 A 后，A === B
 2. 叠加 n 个 A 后，B 长度大于 n * A.length，B 尾部多了一点，此时次数为 n + 1
 3. 叠加 n 个 A 后，B 长度大于 n * A.length，B 头部多了一点，此时次数为 n + 1
 4. 叠加 n 个 A 后，B 长度大于 n * A.length，B 尾部多了一点，头部也多一点，此时次数为 n + 2
 综上，至少需要 n + 2 次
 所以最小长度 (n + 2) * A.length
 因为 n = B.length/A.length （A 叠加 n 次）
 所以 S >= B.length + A.length * 2
 */
function repeatedStringMatch(A: string, B: string) {
    const endLength = B.length + A.length * 2
    for (let count = 1, repeatA = A; repeatA.length <= endLength; count++, repeatA += A) {
        if (repeatA.includes(B)) {
            return count
        }
    }
    return -1
}

console.log(repeatedStringMatch('ab', 'abab'))
