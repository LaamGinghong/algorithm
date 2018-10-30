class IntegerPartition {
    /**
     * 通法-获取拆分种类数目
     * @param number {number}
     * @return {number}
     */
    static common(number) {
        //动态创建一个矩阵数组
        const partitionMatrix = Array(number + 1).fill(null).map(() => {
            return Array(number + 1).fill(null);
        });

        for (let i = 1; i <= number; i++) {
            partitionMatrix[0][i] = 0;
        }
        for (let i = 0; i <= number; i++) {
            partitionMatrix[i][0] = 1;
        }
        for (let i = 1; i <= number; i++) {
            for (let j = 1; j <= number; j++) {
                if (i > j) {
                    partitionMatrix[i][j] = partitionMatrix[i - 1][j];
                } else {
                    const combosWithoutSummand = partitionMatrix[i - 1][j];
                    const combosWithSummand = partitionMatrix[i][j - i];
                    partitionMatrix[i][j] = combosWithoutSummand + combosWithSummand;
                }
            }
        }
        return partitionMatrix[number][number];
    }
}
