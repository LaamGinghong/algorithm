interface Add {
    (...subNums: number[]): Add

    sumOf(): number
}

function curryAdd(...nums: number[]) {
    let sum1 = nums.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    const add: Add = (...subNums) => {
        const sum2 = subNums.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        sum1 += sum2
        return add
    }

    add.sumOf = () => {
        return sum1
    }

    return add
}

console.log(curryAdd(1, 2, 3, 4, 5).sumOf())
