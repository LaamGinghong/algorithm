function anagramMappings1(A: number[], B: number[]): number[] {
    return A.map(item => B.findIndex(val => val === item))
}

function anagramMappings2(A: number[], B: number[]): number[] {
    const bMap = new Map()
    B.forEach((value, index) => {
        bMap.set(value, index)
    })
    return A.map(value => {
        return bMap.get(value)
    })
}