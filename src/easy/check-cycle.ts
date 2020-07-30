/*
头条真题，判断一个对象是否循环引用
 */
function checkCycle(obj: object) {
  const stack = new Set<object>()
  let flag = false

  function helper(o: object) {
    if (!o) return
    if (stack.has(o)) {
      flag = true
      return
    }
    stack.add(o)
    for (const key in o) {
      if (typeof o[key] === 'object') {
        helper(o[key])
      }
    }
  }

  helper(obj)
  return flag
}
