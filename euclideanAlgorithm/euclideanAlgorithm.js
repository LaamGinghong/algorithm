class EuclideanAlgorithm {
    constructor() {
    }

    /*
     * 循环相减法
     * @param {numberA} number
     * @param {numberB} number
     * @return number
     */
    static iterative(numberA, numberB) {
        let a = Math.abs(numberA); //最大公约数必定是正数
        let b = Math.abs(numberB);
        while (a && b && a !== b) { //循环相减
            [a, b] = a > b ? [a - b, b] : [a, b - a];
        }
        return a || b;
    }

    /*
     * 递归模运算法
     * param {numberA} number
     * param {numberB} number
     * return number
     */
    static recursion(numberA, numberB) {
        const a = Math.abs(numberA);
        const b = Math.abs(numberB);
        return b === 0 ? a : EuclideanAlgorithm.recursion(b, a % b);
    }

    /*
     * 循环比较法
     */
    static compare(numberA, numberB) {
        const a = [], b = [];
        for (let i = 1; i <= numberA; i++) {
            if (!(numberA % i)) {
                a.push(i)
            }
        }
        for (let i = 1; i <= numberB; i++) {
            if (!(numberB % i)) {
                b.push(i)
            }
        }
        const common = [];
        if (a.length >= b.length) {
            b.forEach(item => {
                if (item >= numberA) {
                    if (!(item % numberA)) {
                        common.push(item);
                    }
                } else {
                    if (!(numberA % item)) {
                        common.push(item);
                    }
                }
            });
        } else {
            a.forEach(item => {
                if (item >= numberB) {
                    if (!(item % numberB)) {
                        common.push(item);
                    }
                } else {
                    if (!(numberB % item)) {
                        common.push(item);
                    }
                }
            });
        }
        return common[common.length - 1];
    }
}

console.log(EuclideanAlgorithm.iterative(71, 777));
console.log(EuclideanAlgorithm.recursion(71, 777));
console.log(EuclideanAlgorithm.compare(71, 777));