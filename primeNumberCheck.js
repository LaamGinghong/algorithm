class PrimeNumberCheck {

    constructor() {
    }

    /*
     * 切割法-判断单个数是否素数
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

    /*
     * 埃拉托斯特尼筛法-批量筛选素数
     * @param {length} number
     * @return {Array<number>}
     */
    static sieveOfEratosthenes(length) {
        const isPrime = new Array(length + 1).fill(true);//先将所有数变成true，即所有数标记为素数
        isPrime[0] = isPrime[1] = false;//0,1一定不为素数，去掉

        const primes = [];
        for (let i = 2; i <= length; i++) {
            if (isPrime[i]) {
                primes.push(i);
            }
            let nextNumber = i * i; //一个数的的自身倍数一定不是素数
            while (nextNumber <= length) {
                isPrime[nextNumber] = false;
                nextNumber += i;
            }
        }
        return primes;
    }
}