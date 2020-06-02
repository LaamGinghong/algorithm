function calculateTime(keyboard: string, word: string) {
    const map = new Map()
    keyboard.split('').forEach((value, index) => {
        map.set(value, index)
    })
    let result = 0
    let previous = result
    word.split('').forEach(value => {
        result += Math.abs(map.get(value) - previous)
        previous = map.get(value)
    })
    return result
}

console.log(calculateTime('abcdefg', 'cba'))
