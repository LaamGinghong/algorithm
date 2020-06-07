function isValid(s: string) {
    let i = 0
    const stack = []
    const {length} = s
    if (length % 2) return false
    while (i < length) {
        const letter = s[i]
        switch (letter) {
            case '(':
                stack.push(letter)
                break
            case '[':
                stack.push(letter)
                break
            case '{':
                stack.push(letter)
                break
            case '}':
                if (stack.pop() !== '{') return false
                break
            case ']':
                if (stack.pop() !== '[') return false
                break
            case ')':
                if (stack.pop() !== '(') return false
        }
        i++
    }
    return !stack.length
}
