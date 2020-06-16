import { TreeNode } from '../tree-node'
import { Node } from '../node'

// 二叉树
function maxDepth1(root: TreeNode) {
  if (!root) {
    return 0
  }
  return Math.max(maxDepth1(root.left), maxDepth1(root.right)) + 1
}

// N叉数
function maxDepth2(root: Node) {
  let maxDepth = Number.MIN_SAFE_INTEGER
  function helper(node: Node, depth: number) {
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

console.log(
  maxDepth2({
    value: 1,
    children: [
      {
        value: 3,
        children: [
          { value: 5, children: [] },
          { value: 6, children: [] },
        ],
      },
      { value: 2, children: [] },
      { value: 4, children: [] },
    ],
  }),
)
