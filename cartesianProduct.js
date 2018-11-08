class CartesianProduct {

    /**
     * 获取笛卡尔积数组
     * @param {Array<number>} abscissa
     * @param {Array<number>} ordinate
     * @return {Array<Array<number>>}
     */
    static cartesianProduct(abscissa, ordinate) {
        if (!abscissa || !ordinate || !abscissa.length || !ordinate.length) { //横坐标或纵坐标其中之一不存在时返回空
            return null;
        }
        const product = [];
        for (let indexA = 0; indexA < abscissa.length; indexA++) {
            for (let indexB = 0; indexB < ordinate.length; indexB++) {
                product.push([abscissa[indexA], ordinate[indexB]]);
            }
        }
        return product;
    }
}

