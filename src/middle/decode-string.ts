function decodeString(s: string) {
  const stack: string[] = []
  for (let i = 0, n = s.length; i < n; i++) {
    const char = s[i]
    if (char !== ']') {
      stack.push(char)
      continue
    }

    let cur = stack.pop()
    let res = ''
    while (cur !== '[') {
      res = cur + res
      cur = stack.pop()
    }
    cur = stack.pop()
    let num = ''
    while (!isNaN(+cur)) {
      num = cur + num
      cur = stack.pop()
    }
    stack.push(cur)
    stack.push(res.repeat(+num))
  }
  return stack.join('')
}
