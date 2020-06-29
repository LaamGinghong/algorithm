function countAndSay(n: number) {
  if (n === 1) {
    return '1'
  }
  const zh = (a: string) => {
    let m = 1
    let res = ''
    for (let i = 0; i < a.length; i++) {
      if (a[i] === a[i + 1]) {
        m++
      } else {
        res = res + m + a[i]
        m = 1
      }
    }
    n--
    return n === 1 ? res : zh(res)
  }
  return zh('1')
}
