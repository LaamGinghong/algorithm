export {}

function rotate(nums: number[], k: number): void {
  nums.splice(0, 0, ...nums.splice(nums.length - k))
}
