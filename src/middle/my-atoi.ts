function myAtoi1(str: string) {
  const count = parseInt(str)
  const max = Math.pow(2, 31) - 1
  const min = Math.pow(-2, 31)
  if (count > max) return max
  else if (count < min) return min
  return isNaN(count) ? 0 : count
}

function myAtoi2(str: string) {
  class Automation {
    // 执行阶段，默认处于开始执行阶段
    state = 'start'
    // 正负数，默认为正数
    sign = 1
    // 结果
    answer = 0
    map = new Map([
      ['start', ['start', 'signed', 'in_number', 'end']],
      ['signed', ['end', 'end', 'in_number', 'end']],
      ['in_number', ['end', 'end', 'in_number', 'end']],
      ['end', ['end', 'end', 'end', 'end']],
    ])

    /**
     * 获取状态的索引
     */
    getIndex(str: string): number {
      // 空格判断
      if (str === ' ') return 0
      // 正负判断
      else if (str === '-' || str === '+') return 1
      // 数值判断
      else if (!isNaN(Number(str))) return 2
      // 其他情况
      else return 3
    }

    /**
     * 字符串转换函数
     */
    get(char: string) {
      // 每次传入字符都要变更自动机的执行阶段
      this.state = this.map.get(this.state)[this.getIndex(char)]
      if (this.state === 'in_number') {
        this.answer = this.answer * 10 + -char
        this.answer =
          this.sign === 1
            ? Math.min(this.answer, Math.pow(2, 31) - 1)
            : Math.min(this.answer, Math.pow(-2, 31))
      } else if (this.state === 'signed') {
        // 对于一个整数来说，非正即负
        this.sign = char === '+' ? 1 : -1
      }
    }
  }

  const automaton = new Automation()
  for (const char of str) {
    automaton.get(char)
  }

  return automaton.sign * automaton.answer
}
