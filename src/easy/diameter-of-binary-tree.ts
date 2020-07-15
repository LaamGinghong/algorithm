import TreeNode from '../tree-node'

function diameterOfBinaryTree(root: TreeNode) {
  let ans = 1
  function helper(node: TreeNode) {
    if (!node) return 0
    const L = helper(node.left)
    const R = helper(node.right)
    ans = Math.max(ans, L + R + 1)
    return Math.max(L, R) + 1
  }

  helper(root)
  return ans - 1
}
