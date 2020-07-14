function wallsAndGates(rooms: number[][]) {
  if (!rooms.length || !rooms[0].length) return
  const m = rooms.length
  const n = rooms[0].length

  function bfs(i: number, j: number, step: number) {
    // 边界条件
    if (i < 0 || i >= m || j < 0 || j >= n || rooms[i][j] < step) return
    rooms[i][j] = step
    bfs(i - 1, j, step + 1)
    bfs(i + 1, j, step + 1)
    bfs(i, j - 1, step + 1)
    bfs(i, j + 1, step + 1)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rooms[i][j] === 0) bfs(i, j, 0)
    }
  }
}
