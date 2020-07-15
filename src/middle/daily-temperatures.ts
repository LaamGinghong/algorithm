/**
 * 暴力法
 */
function dailyTemperatures1(T: number[]) {
  const res = new Array(T.length).fill(0)
  for (let i = 0, length = T.length; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (T[j] > T[i]) {
        res[i] = j - i
        break
      }
    }
  }
  return res
}

/**
 * 单调栈
 */
function dailyTemperatures2(T: number[]) {
  const res = new Array(T.length).fill(0)
  const stack = []
  for (let i = T.length - 1; i >= 0; i--) {
    while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
      stack.pop()
    }
    if (stack.length) res[i] = stack[stack.length - 1] - i
    stack.push(i)
  }
  return res
}
