import TreeNode from '../tree-node'

function pathSum(root: TreeNode, sum: number) {
  const set = new Set<number[]>()

  function dfs(node: TreeNode, list: number[], isLeaf: boolean) {
    if (!node) {
      if (set.has(list)) return
      if (isLeaf) {
        set.add(list)
      }
      return
    }
    const l = list.slice()
    l.push(node.value)

    isLeaf = !(node.left || node.right)
    dfs(node.left, l, isLeaf)
    dfs(node.right, l, isLeaf)
  }

  dfs(root, [], !(root?.left || root?.right))

  const result: number[][] = []
  set.forEach((value) => {
    let item: number
    for (const i of value) {
      item = (item || 0) + i
    }
    if (item === sum) result.push(value)
  })
  return result
}
