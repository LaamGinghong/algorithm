function isHappy(n: number) {
    let res = sum(n)
    const obj = {}
    while (res !== 1) {
        if (res in obj) return false
        obj[res] = 1
        res = sum(res)
    }
    return true
}

function sum(n: number) {
    const s = n + ''
    let sum = 0
    for (const i of s) {
        sum += Number(i) * Number(i)
    }
    return sum
}
