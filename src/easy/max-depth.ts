import { TreeNodeOptions } from '../tree-node'
import { NodeOptions } from '../node'

// 二叉树
function maxDepth1(root: TreeNodeOptions) {
  if (!root) {
    return 0
  }
  return Math.max(maxDepth1(root.left), maxDepth1(root.right)) + 1
}

// N叉数
function maxDepth2(root: NodeOptions) {
  let maxDepth = Number.MIN_SAFE_INTEGER
  function helper(node: NodeOptions, depth: number) {
    if (!node) return
    if (!node.children.length) {
      maxDepth = Math.max(depth, maxDepth)
      return
    }
    node.children.forEach((child) => {
      helper(child, depth + 1)
    })
  }

  helper(root, maxDepth)
  return maxDepth
}
