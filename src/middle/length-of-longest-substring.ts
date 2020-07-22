function lengthOfLongestSubstring(s: string) {
  const n = s.length
  let ans = 0

  for (let i = 0; i < n; i++) {
    const sub = s.slice(i)
    let j = 0
    while (!s.substr(i, j).includes(sub[j]) && j < sub.length) {
      j++
    }

    ans = Math.max(ans, j)
  }

  return ans
}
