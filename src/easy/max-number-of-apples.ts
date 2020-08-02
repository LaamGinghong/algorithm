/*
  贪心算法
 */
function maxNumberOfApples(arr: number[]) {
  const MAX_WEIGHT = 5000
  arr.sort((a, b) => a - b)

  let curWeight = 0
  let result = 0

  while (arr.length) {
    const val = arr.shift()
    curWeight += val

    if (curWeight >= MAX_WEIGHT) break
    result++
  }

  return result
}
