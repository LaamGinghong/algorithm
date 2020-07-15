import TreeNode from '../tree-node'

function isBalanced(root: TreeNode) {
  if (!root) return true

  function height(node: TreeNode) {
    if (!node) return -1
    return Math.max(height(node.left), height(node.right)) + 1
  }

  return (
    Math.abs(height(root.left) - height(root.right)) < 2 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  )
}
