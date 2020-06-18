function reverseString(s: string[]) {
  let begin = 0
  let end = s.length - 1
  while (begin < end) {
    const temp = s[begin]
    s[begin] = s[end]
    s[end] = temp
    begin++
    end--
  }
}
