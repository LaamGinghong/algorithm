import { TreeNodeOptions } from '../tree-node'

function levelOrder(root: TreeNodeOptions) {
  const list: number[][] = []

  function helper(node: TreeNodeOptions, level: number) {
    if (!node) return
    list[level] = list[level] ?? []
    list[level].push(node.value)
    if (node.left) helper(node.left, level + 1)
    if (node.right) helper(node.right, level + 1)
  }

  helper(root, 0)
  return list
}
