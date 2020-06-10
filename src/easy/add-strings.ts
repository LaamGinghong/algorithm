function addStrings(num1: string, num2: string) {
    const length = Math.abs(num1.length - num2.length)
    const stringFill0 = new Array(length).fill(0).join('')
    if (num1.length > num2.length) {
        num2 = stringFill0 + num2
    } else {
        num1 = stringFill0 + num1
    }
    let answer = ''
    let flag = 0
    for (let i = 0; i < num1.length; i++) {
        let target = parseInt(num1[i]) + parseInt(num2[i]) + flag
        if (target >= 10) {
            target = target % 10
            flag = 1
        } else {
            flag = 0
        }
        answer = target + answer
    }
    if (flag) {
        answer = 1 + answer
    }
    return answer
}