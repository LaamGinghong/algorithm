function numWays(n: number, k: number) {
    const arr = []
    arr[0] = 0
    arr[1] = k
    arr[2] = k * k
    for (let i = 3; i < n + 1; i++) {
        arr[i] = (k - 1) * arr[i - 1] + (k - 1) * arr[i - 2]
    }
    return arr[n]
}
