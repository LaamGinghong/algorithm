function longestCommonPrefix(strings: string[]): string {
    if (!strings.length) return ''
    let answer = strings[0] // 先令定一个字符串为公共前缀
    for (let i = 1; i < strings.length; i++) { // 让公共字符串与下一个字符串匹配出公共前缀
        let j = 0
        for (; answer.length && j < strings[i].length; j++) {
            if (answer[j] !== strings[i][j]) { // 一个个字符匹配，直到有一个不一致，推出循环
                break
            }
        }
        answer = answer.substr(0, j) // 存下对应公共前缀
        if (answer === "") { // 如果不存在，则直接返回
            return ""
        }
    }
    return answer
}

longestCommonPrefix(['abs', 'abc', 'abb'])
