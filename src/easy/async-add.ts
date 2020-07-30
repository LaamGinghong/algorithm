/*
  头条真题，通过 add(a, b, callback) 实现加法器
 */

function add(a: number, b: number = 0, callback: (sum: number) => void) {
  setTimeout(() => {
    // 模拟异步
    callback(a + b)
  })
}

function asyncAdd(a: number, b: number) {
  return new Promise<number>((resolve) => {
    add(a, b, (sum) => {
      resolve(sum)
    })
  })
}

function chunk<T>(list: T[]) {
  let index = 0
  let resIndex = 0
  const { length } = list
  const res: T[][] = new Array(Math.ceil(length / 2))

  while (index < length) {
    res[resIndex++] = list.slice(index, (index += 2))
  }

  return res
}

function sum(nums: number[]) {
  return Promise.all<number>(chunk(nums).map(([a, b]) => asyncAdd(a, b)))
}

async function asyncSum(nums: number[]) {
  let chunkNums = await sum(nums)
  while (chunkNums.length > 1) {
    chunkNums = await sum(chunkNums)
  }

  return chunkNums.pop()
}
export {}
