function shortestDistance(words: string[], word1: string, word2: string) {
  let dis = words.length
  let a = -1
  let b = -1
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (word === word1) a = i
    else if (word === word2) b = i

    if (a !== -1 && b !== -1) {
      dis = Math.min(dis, Math.abs(a - b))
    }
  }
  return dis
}
