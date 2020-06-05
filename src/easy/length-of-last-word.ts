function lengthOfLastWord(s: string): number {
    s = s.trim()
    const list = s.split(' ')
    const end = list[list.length - 1]
    return end.length
}

console.log(lengthOfLastWord('a'))
