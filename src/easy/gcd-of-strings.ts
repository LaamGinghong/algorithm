function gcdOfStrings(str1: string, str2: string) {
  if (str1 + str2 !== str2 + str1) return ''
  return str1.slice(0, gcd(str1.length, str2.length))
}

function gcd(a: number, b: number) {
  return b === 0 ? a : gcd(b, a % b)
}
