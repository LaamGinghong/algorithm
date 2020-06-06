function strStr(hayStack: string, needle: string) {
    if (needle === '') return 0
    for (let i = 0; i < hayStack.length; i++) {
        if (hayStack[i] === needle[0]) {
            if (hayStack.substr(i, needle.length) === needle) {
                return i
            }
        }
    }
    return -1
}

console.log(strStr('hello', 'll'))
