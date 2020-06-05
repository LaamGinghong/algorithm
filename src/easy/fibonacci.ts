const fibonacci = (function () {
    const cache: { [key: number]: number } = {
        0: 0,
        1: 1
    }
    return function (n: number) {
        if (typeof cache[n] !== "number") {
            cache[n] = fibonacci(n - 1) + fibonacci(n - 2)
        }
        return cache[n]
    }
})()

console.log(fibonacci(45))
