/**
 * 阿里原题
 * 数组、对象展开扁平化
 * @param data
 */
function flatten(data: object | Array<any>) {
  const hashMap: { [key: string]: any } = {}

  function helper(data: object | Array<any>, key = '') {
    for (const i in data) {
      let k
      if (Array.isArray(data)) {
        k = key ? `${key}[${i}]` : i
      } else {
        k = key ? `${key}.${i}` : i
      }
      if (typeof data[i] === 'object') {
        helper(data[i], k)
      } else {
        hashMap[k] = data[i]
      }
    }
  }

  helper(data)

  return hashMap
}
