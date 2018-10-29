import {EuclideanAlgorithm} from './euclideanAlgorithm';

class LeastCommonMultiple {
    constructor() {
    }

    static recursion(numberA, numberB) {
        return (numberA === 0 || numberB === 0) ? 0 : Math.abs(numberA * numberB) / EuclideanAlgorithm.recursion(numberA, numberB);
    }
}

console.log(LeastCommonMultiple.recursion(10, 20));