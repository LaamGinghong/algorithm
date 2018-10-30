class Algorithm {
    constructor() {
        console.log(this.factorialRecursive(5));
    }

    /**
     * 循环实现阶乘
     * @param length {number}
     * @return number
     */
    static factorial(length) {
        let result = 1;
        for (let i = 2; i <= length; i++) {
            result *= i;
        }
        return result;
    }

    /**
     * 递归实现阶乘
     * @param number {number}
     * @return number
     */
    factorialRecursive(number) {
        return number > 1 ? number * this.factorialRecursive(number - 1) : 1;
    }
}

const algorithm = new Algorithm();
console.log(Algorithm.factorial(5));