function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let count = 0
    flowerbed.forEach((flower, index) => {
        if (!flower) {
            if (!(flowerbed[index - 1] || flowerbed[index + 1])) {
                flowerbed[index] = 1
                count++
            }
        }
    })
    return count >= n
}

console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2))
