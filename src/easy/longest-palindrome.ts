function longestPalindrome(s: string) {
  let sum = 0
  const temp = new Set<string>()
  s.split('').forEach((c) => {
    if (temp.has(c)) {
      temp.delete(c)
      sum += 2
    } else {
      temp.add(c)
    }
  })
  return sum + (temp.size > 0 ? 1 : 0)
}
