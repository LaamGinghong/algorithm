function isValidSudoku(board: (number | string)[][]) {
  const rows = new Map<string, Map<number | string, number>>()
  const cols = new Map<string, Map<number | string, number>>()
  const boxes = new Map<string, Map<number | string, number>>()

  for (let i = 0; i < board.length; i++) {
    rows.set(`rows${i}`, new Map<number | string, number>())
    cols.set(`cols${i}`, new Map<number | string, number>())
    boxes.set(`boxes${i}`, new Map<number | string, number>())
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '.') continue

      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
      const row = rows.get(`rows${i}`)
      const col = cols.get(`cols${j}`)
      const box = boxes.get(`boxes${boxIndex}`)

      if (row.has(board[i][j]) || col.has(board[i][j]) || box.has(board[i][j]))
        return false
      else {
        row.set(board[i][j], 1)
        col.set(board[i][j], 1)
        box.set(board[i][j], 1)
      }
    }
  }

  return true
}
