function intToRoman1(num: number) {
  const Q = ['', 'M', 'MM', 'MMM']
  const B = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
  const S = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
  const G = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']

  return `${Q[Math.floor(num / 1000)]}${B[Math.floor((num % 1000) / 100)]}${
    S[Math.floor((num % 100) / 10)]
  }${G[Math.floor(num % 10)]}`
}

// 贪心算法
function initToRoman(num: number) {
  const keys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const values = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

  let res = ''
  for (let i = 0; i < keys.length; i++) {
    while (num >= keys[i]) {
      num -= keys[i]
      res += values[i]
    }
  }

  return res
}
