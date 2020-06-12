function addDigits(num: number) {
    let answer = 0
    const str = num + ''
    let index = 0
    while (index < str.length) {
        answer = +str[index] + answer
        index++
    }
    if (answer >= 10) {
        return addDigits(answer)
    }
    return answer
}
