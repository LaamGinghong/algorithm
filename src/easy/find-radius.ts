function findRadius1(houses: number[], heaters: number[]) {
    houses.sort(sort)
    heaters.sort(sort)
    let count: number
    const result: number[] = []
    for (let i = 0; i < houses.length; i++) {
        count = Math.abs(houses[i] - heaters[0])
        for (let j = 0; j < heaters.length; j++) {
            if (Math.abs(houses[i] - heaters[j]) > count) {
                break
            }
            count = Math.abs(houses[i] - heaters[j])
        }
        result.push(count)
    }
    result.sort(sort)
    return result.reverse()[0]
}

function sort(val1: number, val2: number) {
    return val1 - val2
}

console.log(findRadius1([1, 2, 3], [2]))
