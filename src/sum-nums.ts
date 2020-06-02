function sumNums(n: number): number {
    return n && (sumNums(n - 1) + n)
}

console.log(sumNums(10))

