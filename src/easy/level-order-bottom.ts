import { TreeNode } from '../tree-node'

// 广度优先
function levelOrderBottom1(root: TreeNode) {
  if (!root) return []
  const result = []
  let level: TreeNode[] = [root]
  while (level.length) {
    const current = []
    const temp: TreeNode[] = []
    while (level.length) {
      const node = level.shift()
      current.push(node.value)
      if (node.left) temp.push(node.left)
      if (node.right) temp.push(node.right)
    }
    result.push(current)
    level = temp
  }
  return result.reverse()
}

// 深度优先
function levelOrderBottom2(root: TreeNode) {
  const result: any[][] = []
  function dep(node: TreeNode, depth: number) {
    if (!node) return
    result[depth] = result[depth] || []
    result[depth].push(node.value)
    dep(node.left, depth + 1)
    dep(node.right, depth + 1)
  }
  dep(root, 0)
  return result.reverse()
}
