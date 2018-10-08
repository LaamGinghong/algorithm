/*
循环实现阶乘
 */
function factorial() {
    const begin = 1; //阶乘结尾
    const length = 5; //阶乘长度
    let result = begin; //阶乘结果
    for (let i = 2; i <= length; i++) {
        result *= i
    }
}

/*
递归实现阶乘
 */
function factorialRecursive(number) {
    return number > 1 ? number * factorialRecursive(number - 1) : 1;
}