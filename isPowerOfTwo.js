class IsPowerOfTwo {
    constructor() {
    }

    /*
     * 排除法
     * @param (number) number
     * @return boolean
     */
    static common(number) {
        if (number < 1) { //一个数的2次幂必不为0
            return false;
        }
        let dividedNumber = number;
        while (dividedNumber !== 1) {
            if (dividedNumber % 2) { //奇数必不是一个数的2次幂
                return false;
            }
            dividedNumber /= 2;
        }
        //最后除到2本身
        return true;
    }

    /*
     * 位运算法
     * @param (number) number
     * @return boolean
     */
    static bitWise(number) {
        if (number < 1) {
            return false;
        }
        /*
         * 2的次方数的二进制数都像这样：
         * 1:0001
         * 2:0010
         * 4:0100
         * 8:1000
         * 他们都与相邻的数位与为0
         */
        return (number & (number - 1)) === 0;
    }
}