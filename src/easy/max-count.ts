function maxCount(m: number, n: number, ops: number[][]) {
  for (const op of ops) {
    m = Math.min(m, op[0])
    n = Math.min(n, op[1])
  }
  return m * n
}
