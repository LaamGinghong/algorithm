/**
 * 根据表达式计算字母数
 * 说明：
 *   给定一个描述字母数量的表达式，计算表达式里的每个字母实际数量
 *   表达式格式：
 *     字母紧跟表示次数的数字，如 A2B3
 *     括号可将表达式局部分组后跟上数字，(A2)2B
 *     数字为1时可缺省，如 AB3。
 * 示例：
 *   countOfLetters('A2B3'); // { A: 2, B: 3 }
 *   countOfLetters('A(A3B)2'); // { A: 7, B: 2 }
 *   countOfLetters('C4(A(A3B)2)2'); // { A: 14, B: 4, C: 4 }
 */
/**
 * 思路：由于括号后面的数字是括号内字母的倍数，所以采用倒序的方式进行遍历
 */
function countOfLetters(letters: string) {
  let stack: string[] = []
  for (let n = letters.length - 1, i = n; i >= 0; i--) {
    const letter = letters[i]
    if (letter !== '(') {
      stack.push(letter)
      continue
    }
    let cur = stack.pop()
    let str = ''
    while (cur !== ')') {
      str += cur
      cur = stack.pop()
    }
    let num = ''
    cur = stack.pop()
    while (!isNaN(+cur)) {
      num += cur
      cur = stack.pop()
    }
    stack.push(cur)
    stack.push(str.repeat(+num))
  }
  stack = stack.reverse().filter((v) => v)
  const str = stack.join('')
  const hashMap: { [key: string]: number } = {}
  for (let i = 0, n = str.length; i < n; i++) {
    const char = str[i]
    if (isNaN(+char)) {
      let j = i + 1
      let num = 0
      while (j < n) {
        if (!isNaN(+str[j])) {
          num = num * 10 + Number(stack[j])
          j++
        } else break
      }
      hashMap[char] = (hashMap[char] || 0) + (num || 1)
    }
  }
  return hashMap
}
