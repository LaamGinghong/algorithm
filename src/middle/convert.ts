function convert(s: string, numRows: number) {
  if (numRows === 1) return s

  const len = Math.min(s.length, numRows)
  const rows = new Array(len).fill('')
  let loc = 0
  let down = false

  for (const c of s) {
    rows[loc] += c
    if (loc === 0 || loc === numRows - 1) down = !down
    loc += down ? 1 : -1
  }
  return rows.join('')
}
