class Algorithm {

    constructor() {
        this.cache = {
            0: 0,
            1: 1
        };
        console.log(this.fibonacciRecursive(10));
        console.log(this.fibonacciRecursiveCache(10));
        const fb = this.fibonacciRecursiveFunction();
        console.log(fb(10));
    }

    /*
     * 循环实现斐波那契数列
     * @params {number} length
     * @return {Array<number>}
     */
    static fibonacci(length) {
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
        return array;
    }

    /*
     * 递归实现斐波那契数列通法
     * @param {number} number
     * @return {number}
     */
    fibonacciRecursive(number) {
        return number <= 1 ? number : this.fibonacciRecursive(number - 1) + this.fibonacciRecursive(number - 2);
    }

    /*
     * 递归实现斐波那契数列缓存法
     * @params {number} num
     * @return {number}
     */
    fibonacciRecursiveCache(num) {
        return typeof this.cache[num] === 'number' ? this.cache[num] : this.cache[num] = this.fibonacciRecursiveCache(num - 1) + this.fibonacciRecursiveCache(num - 2);
    }

    /*
     * 递归实现斐波那契数列纯函数法
     * @params {number} num
     * @return {number}
     */
    fibonacciRecursiveFunction() {
        const cache = [0, 1];
        return function _fibonacciRecursiveFunction(num) {
            return typeof cache[num] === 'number' ? cache[num] : cache[num] = _fibonacciRecursiveFunction(num - 1) + _fibonacciRecursiveFunction(num - 2);
        }
    }
}

const algorithm = new Algorithm();
console.log(Algorithm.fibonacci(10));