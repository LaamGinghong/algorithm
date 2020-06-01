function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    return candies.map(candy => {
        const max = Math.max(...candies)
        return candy + extraCandies >= max
    })
}

console.log(kidsWithCandies([2,3,5,1,3],3))

export default kidsWithCandies

