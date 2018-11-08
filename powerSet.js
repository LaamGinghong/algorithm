class PowerSet {

    /**
     * 按位获取子集
     * @param {Array<*>} originalSet
     * @return {Array<Array<*>>}
     */
    static getPowerSetByBit(originalSet) {
        const subSets = [];
        /**
         * 我们将会有2^n种排列组合（n是数组originalSet的长度）
         * 因为对于初始集合，我们将决定是否包括包含它（每个集合元素有2个选项）
         */
        const combinationsNumber = 2 ** originalSet.length;
        /**
         * 在范围0到2^n中，每个数字的二进制正是我们需要的：
         * 它同通过它的二进制位（0或者1）来显示是否包含集合中的相关元素。
         * 例如，对于集合{1，2，3}，如果1左移集合索引位的值与当前种类数索引按位与，则当前元素位集合子集元素
         */
        for (let combinationIndex = 0; combinationIndex < combinationsNumber; combinationIndex++) {
            const subSet = [];
            for (let setElementIndex = 0; setElementIndex < originalSet.length; setElementIndex++) {
                //决定是否要把当前元素包含到子集中
                if (combinationIndex & (1 << setElementIndex)) {
                    subSet.push(originalSet[setElementIndex]);
                }
            }
            subSets.push(subSet);
        }
        return subSets;
    }

    /**
     * 递归法
     * @param {Array<*>} originalSet
     * @param {Array<Array<*>>} allSubsets
     * @param {Array<*>} currentSubSet
     * @param {number} startAt
     * @return {Array<Array<*>>}
     */
    static getPowerSetByRecursive(originalSet, allSubsets = [[]], currentSubSet = [], startAt = 0) {
        /**
         * 为了避免重复，每次我们形成一个子集时，都需要从下一个元素开始。
         * 如果我们从0开始，那么我们就会得到{3,3,3}这样的重复项。
         */
        for (let position = startAt; position < originalSet.length; position++) {
            //让我们将当前元素推到子集。
            currentSubSet.push(originalSet[position]);
            //当前子集已经是有效的，我们来记住它。
            allSubsets.push([...currentSubSet]);
            //让我们尝试为当前子集形成所有其他子集。
            PowerSet.getPowerSetByRecursive(originalSet, allSubsets, currentSubSet, position + 1);
            //回溯。从子集中排除最后一个元素并尝试下一个元素。
            currentSubSet.pop();
        }
        return allSubsets;
    }
}