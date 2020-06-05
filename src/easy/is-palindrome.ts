function isPalindrome1(x: number) {
    return x.toString() === x.toString().split('').reverse().join('')
}

isPalindrome1(121)

function isPalindrome2(x: number) {
    let result = Math.abs(x)
    let now = 0
    while (result > 0) {
        now = now * 10 + result % 10
        result = Math.floor(result / 10)
    }
    if (x >= 0) {
        return now === x
    } else {
        return false
    }
}

console.log(isPalindrome2(1))
