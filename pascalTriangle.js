class PascalTriangle {

    /*
     * 循环法
     * @param {length} number
     * @return Array<number>
     */
    static circulation(length) {
        const currentLine = [1];
        const currentLineSize = length + 1;
        for (let i = 1; i < currentLineSize; i++) {
            currentLine[i] = currentLine[i - 1] * (length - i + 1) / i;
            //杨辉三角第n行的第1个数为1，第二个数为1×(n-1)，第三个数为1×(n-1)×（n-2）/2，第四个数为1×(n-1)×（n-2）/2×（n-3）/3…依此类推。
        }
        return currentLine;
    }

    /*
     * 递归法
     * @param {length} number
     * @return Array<number>
     */
    static recursive(length) {
        if (length === 0) {
            return [1];
        }
        const currentLineSize = length + 1;
        const previousLineSize = currentLineSize - 1;

        const currentLine = [];
        const previousLine = PascalTriangle.recursive(length - 1);

        for (let numIndex = 0; numIndex < currentLineSize; numIndex += 1) {
            const leftCoefficient = (numIndex - 1) >= 0 ? previousLine[numIndex - 1] : 0;
            const rightCoefficient = numIndex < previousLineSize ? previousLine[numIndex] : 0;

            currentLine[numIndex] = leftCoefficient + rightCoefficient;
        }

        return currentLine;
    }
}

console.log(PascalTriangle.recursive(5));