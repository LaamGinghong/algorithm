import TreeNode from '../tree-node'

/*
 头条真题
 二叉树最近公共祖先
 递归
 */
function lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode) {
  if (!root || root === p || root === q) return root
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  if (left && right) {
    return root
  }
  return left ?? right
}
