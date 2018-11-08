class Cyclotomy {
    constructor() {
        this.circleRaidus = 10;
    }

    /**
     * @param {number} sideLength 边长
     * @param {number} splitCounter 切割数
     * @return {number}
     */
    getNGonSideLength(sideLength, splitCounter) {
        if (splitCounter <= 0) {
            return sideLength;
        }
        const halfSide = sideLength / 2;

        //刘辉重复使用勾股定理
        const perpendicular = Math.sqrt((this.circleRaidus ** 2) - (halfSide ** 2));
        const excessRadius = this.circleRaidus - perpendicular;
        const splitSideLength = Math.sqrt((excessRadius ** 2) + (halfSide ** 2));
        return this.getNGonSideLength(splitSideLength, splitCounter - 1);
    }

    /**
     * @param {number} splitCount
     * @return {number}
     */
    static getNGonSideCount(splitCount) {
        //刘辉从一个内切六边形开始
        const hexagonSidesCount = 6;
        return hexagonSidesCount * (splitCount ? 2 ** splitCount : 1);
    }

    /**
     * 使用刘辉割圆术计算π
     * @param {number} splitCount
     * 每次切割会得到12边形，24边形以此类推
     * @return {number}
     */

    cyclotomy(splitCount = 1) {
        const nGonSideLength = this.getNGonSideLength(this.circleRaidus, splitCount - 1);
        const nGonSideCount = Cyclotomy.getNGonSideCount(splitCount - 1);
        const nGonPerimeter = nGonSideLength * nGonSideCount;
        const approximateCircleArea = (nGonPerimeter / 2) * this.circleRaidus;

        return approximateCircleArea / (this.circleRaidus ** 2);
    }
}

const cyclotomy = new Cyclotomy();
console.log(cyclotomy.cyclotomy(500));