function compressString(s: string) {
    if (s.length === 0) {
        return ''
    }
    if (s.length === 1) {
        return s
    }
    let m = 1
    let result = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            m++
        } else {
            result = result + s[i] + m
            m = 1
        }
    }
    return result.length >= s.length ? s : result
}
