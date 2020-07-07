class Solution {
  initialNums: number[]

  constructor(nums: number[]) {
    this.initialNums = nums
  }

  reset(): number[] {
    return this.initialNums
  }

  shuffle(): number[] {
    const list = [...this.initialNums]
    let n = list.length - 1
    while (n >= 0) {
      const index = Math.floor(Math.random() * (n + 1))
      ;[list[index], list[n]] = [list[n], list[index]]
      n--
    }
    return list
  }
}
