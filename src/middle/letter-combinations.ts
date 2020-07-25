class LetterCombinations {
  output: string[] = []
  phoneMap = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz'],
  ])

  letterCombinations(digits: string) {
    if (digits.length) this.backtrack('', digits)
    return this.output
  }

  backtrack(combination: string, digits: string) {
    if (!digits.length) this.output.push(combination)
    else {
      const digit = digits[0]
      const letters = this.phoneMap.get(digit)
      for (let i = 0; i < letters.length; i++) {
        const letter = letters.substring(i, i + 1)
        this.backtrack(combination + letter, digits.substring(1))
      }
    }
  }
}
