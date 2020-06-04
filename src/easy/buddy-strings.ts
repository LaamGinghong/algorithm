function buddyStrings(A: string, B: string): boolean {
    if (A.length !== B.length) {
        return false
    }
    let notEqualA = '', notEqualB = '', hasRepeat = false
    const map = new Map<string, number>() // 用来判断字符串是否为叠词
    for (let i = 0; i < A.length; i++) {
        const a = A.charAt(i), b = B.charAt(i)
        if (a !== b) {
            notEqualA += a
            notEqualB = b + notEqualB
        }
        if (!map.has(a)) {
            map.set(a, 1)
        } else {
            hasRepeat = true
        }
    }
    return (notEqualA.length === 2 && notEqualA === notEqualB) || (hasRepeat && !notEqualA.length)
}

console.log(buddyStrings('abcaa', 'abcbb'))
