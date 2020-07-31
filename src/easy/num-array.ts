class NumArray {
  private prefixSum: number[] = [0]

  constructor(nums: number[]) {
    const n = nums.length
    for (let i = 1; i < n + 1; i++) {
      this.prefixSum[i] = this.prefixSum[i - 1] + nums[i - 1]
    }
  }

  sumRange(i: number, j: number): number {
    if (i === 0) return this.prefixSum[j + 1]
    return this.prefixSum[j + 1] - this.prefixSum[i]
  }
}
