const romanToIntMap = new Map<string, number>([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
])

function romanToInt(s: string) {
  let count = romanToIntMap.get(s[0])
  const list = s.split('')
  for (let i = 1, length = list.length; i < length; i++) {
    const current = romanToIntMap.get(list[i])
    const prev = romanToIntMap.get(list[i - 1])
    if (current === prev) {
      count += current
    } else if (current > prev) {
      count += current - prev - prev
    } else {
      count += current
    }
  }
  return count
}
