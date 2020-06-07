function addBinary(a: string, b: string) {
    const length = Math.abs(a.length - b.length)
    const str = new Array(length).fill(0).join('')
    if (a.length >= b.length) {
        b = str + b
    } else {
        a = str + a
    }
    let answer = ''
    let flag = 0 // 进位
    for (let i = a.length - 1; i >= 0; i--) {
        let target = parseInt(a[i]) + parseInt(b[i]) + flag
        console.log(target)
        if (target > 1) {
            target = target % 2
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

console.log(addBinary('1111', '1111'))
