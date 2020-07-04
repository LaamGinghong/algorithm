interface Read4 {
  (buffer: any[]): number
}

function solution1(read4: Read4) {
  return function (buf: any[], n: number) {
    const buffer = []
    while (n) {
      const temp = read4(buffer)
      if (n < 4 || temp < 4) {
        buf.splice(buf.length, 0, ...buf.slice(0, Math.min(n, temp)))
      } else {
        buf.splice(buf.length, 0, ...buffer)
        n -= 4
      }
    }
    return buf.length
  }
}

function solution2(isBadVersion: (version: number) => boolean) {
  return function (version: number) {
    let left = 1
    let right = version
    while (left < right) {
      const mid = Math.floor((right + left) / 2)
      const current = isBadVersion(mid)
      if (current) {
        right = mid
      } else {
        left = mid + 1
      }
    }
    return left
  }
}
