function minDeletionSize(A: string[]) {
  let res = 0
  const m = A.length
  if (!m) return 0
  const n = A[0].length

  for (let j = 0; j < n; j++) {
    for (let i = 1; i < m; i++) {
      if (A[i].charCodeAt(j) < A[i - 1].charCodeAt(j)) {
        res++
        break
      }
    }
  }

  return res
}
