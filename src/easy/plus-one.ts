function plusOne(digits: number[]) {
    const {length} = digits
    for (let i = length - 1; i >= 0; i--) {
        digits[i]++
        digits[i] %= 10
        if ((digits[i] !== 0)) {
            return digits
        }
    }
    digits = (new Array(length + 1)).fill(0).map((_, index) => index ? 0 : 1)
    return digits
}

console.log(plusOne([1, 2, 3]))
