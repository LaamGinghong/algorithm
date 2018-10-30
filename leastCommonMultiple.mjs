import {EuclideanAlgorithm} from './euclideanAlgorithm';

class LeastCommonMultiple {
    constructor() {
    }

    /**
     * @param numberA {number}
     * @param numberB {number}
     * @return {number}
     */
    static recursion(numberA, numberB) { //两数相乘的绝对值除以他们的最大公约数即为最大公倍数
        return (numberA === 0 || numberB === 0) ? 0 : Math.abs(numberA * numberB) / EuclideanAlgorithm.recursion(numberA, numberB);
    }
}

