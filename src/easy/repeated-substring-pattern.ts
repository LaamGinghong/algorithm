function repeatedSubstringPattern(s: string) {
  const s1 = (s + s).slice(1, -1)
  return s1.includes(s)
}
