function fizzBuzz(n: number) {
  const result = new Array(n).fill('')
  let i = 1
  while (i <= n) {
    if (i % 3 === 0 || i % 5 === 0) {
      if (i % 3 === 0) result[i - 1] += 'Fizz'
      if (i % 5 === 0) result[i - 1] += 'Buzz'
    } else {
      result[i - 1] = `${i}`
    }
    i++
  }
  return result
}
