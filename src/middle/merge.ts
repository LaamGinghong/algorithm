function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0])
  const result: number[][] = []
  let index = -1
  for (const interval of intervals) {
    if (index === -1 || interval[0] > result[index][1]) {
      result.push(interval)
      index++
    } else {
      result[index][1] = Math.max(result[index][1], interval[1])
    }
  }
  return result
}
