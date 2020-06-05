function spiralOrder(matrix: number[][]) {
    const yLength = matrix.length
    if (!yLength) {
        return []
    }
    const xLength = matrix[0].length
    if (xLength === 1 || yLength === 1) {
        return matrix.reduce((previousValue, currentValue) => previousValue.concat(currentValue), [])
    }
    const round = Math.ceil((xLength < yLength ? xLength : yLength) / 2)
    let result = []
    for (let i = 0; i < round; i++) {
        result.push(getCircle(xLength, yLength, i, matrix))
    }
    result = result.reduce((previousValue, currentValue) => previousValue.concat(currentValue), [])
    result.length = xLength * yLength
    return result
}

console.log(spiralOrder([[2, 3, 4], [5, 6, 7], [8, 9, 10], [11, 12, 13], [14, 15, 16]]))

function getCircle(xLength: number, yLength: number, index: number, matrix: number[][]) {
    let x = index, y = index
    xLength = xLength - index
    yLength = yLength - index
    const list = []
    while (y < xLength) {
        list.push(matrix[x][y])
        y++
    }
    y--
    x++
    while (x < yLength) {
        list.push(matrix[x][y])
        x++
    }
    x--
    y--
    while (y >= index) {
        list.push(matrix[x][y])
        y--
    }
    y++
    x--
    while (x >= index) {
        list.push(matrix[x][y])
        x--
    }
    x++
    y++
    if (list.length > 1) {
        list.pop()
    }
    return list
}
