/*
循环实现斐波那契数列
 */
function fibonacci(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        if (i === 0 || i === 1) {
            array.push(i);
        } else {
            const previousValue = array[i - 1];
            const previousTwoValue = array[i - 2];
            array.push(previousValue + previousTwoValue);
        }
    }
}

/*
递归实现斐波那契数列通法
 */
function fibonacciRecursive(num) {
    return num <= 1 ? num : fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}

/*
递归实现斐波那契数列缓存法
 */
const cache = {
    0: 0,
    1: 1
};

function fibonacciRecursiveCache(num) {
    return typeof cache[num] === 'number' ? cache[num] : cache[num] = fibonacciRecursiveCache(num - 1) + fibonacciRecursiveCache(num - 2);
}

/*
递归实现斐波那契数列纯函数法
 */
function fibonacciRecursiveFunction() {
    const cache = [0, 1];
    return function _fibonacciRecursiveFunction(num) {
        return typeof cache[num] === 'number' ? cache[num] : cache[num] = _fibonacciRecursiveFunction(num - 1) + _fibonacciRecursiveFunction(num - 2);
    }
}

