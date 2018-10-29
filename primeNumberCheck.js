class primeNumberCheck {

    constructor() {
    }

    /*
     * @param {number} number
     * @return {boolean}
     */
    static trialDivision(number) {
        if (number % 1 !== 0) { //去除非整数
            return false;
        }
        if (number <= 1) { //去除0,1
            return false;
        }
        if (number <= 3) { //2,3都是质数
            return true;
        }
        if (number % 2 === 0) { //2的倍数都不是质数
            return false;
        }
        const dividerLimit = Math.sqrt(number); //如果没有除以n的平方根的除数那么也没有更高的除数
        for (let divider = 3; divider <= dividerLimit; divider += 2) {
            if (number % divider === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(primeNumberCheck.trialDivision(3));
