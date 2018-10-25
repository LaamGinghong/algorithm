class Algorithm {
    constructor() {
        console.log(this.factorialRecursive(5));
    }

    /*
    循环实现阶乘
     */
    static factorial(length) {
        let result = 1;
        for (let i = 2; i <= length; i++) {
            result *= i;
        }
        return result;
    }

    /*
    递归实现阶乘
     */
    factorialRecursive(number) {
        return number > 1 ? number * this.factorialRecursive(number - 1) : 1;
    }
}

const algorithm = new Algorithm();
console.log(Algorithm.factorial(5));