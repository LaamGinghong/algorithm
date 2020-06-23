export {}

function reverseWords(s: string) {
  const l = s.split(' ')
  const ans = l.map((v) => v.split('').reverse().join(''))
  return ans.join(' ')
}
