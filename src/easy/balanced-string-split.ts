/*
  贪心算法
 */
function balancedStringSplit(s: string) {
  let res = 0
  let balance = 0
  const n = s.length
  for (let i = 0; i < n; i++) {
    if (s[i] === 'L') balance++
    else if (s[i] === 'R') balance--
    if (balance === 0) res++
  }

  return res
}
