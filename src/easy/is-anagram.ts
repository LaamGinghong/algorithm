function isAnagram1(s: string, t: string) {
  if (s.length !== t.length) return false

  const map = new Map<string, number>()
  for (let i = 0; i < s.length; i++) {
    const count = map.get(s[i]) ?? 0
    map.set(s[i], count + 1)
  }

  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i])) return false
    const count = map.get(t[i])
    map.set(t[i], count - 1)
  }
  if (!map.size) return true
  return Array.from(map.values()).every((item) => item === 0)
}

function isAnagram2(s: string, t: string) {
  return s.split('').sort().join('') === t.split('').sort().join('')
}
