import { TreeNodeOptions } from '../tree-node'

// 二叉搜索树的根节点的左子树的所有节点均小于根节点，右子树的所有节点均大于根节点
function isValidBST(head: TreeNodeOptions) {
  function helper(root: TreeNodeOptions, leftValue: number, rightNumber: number) {
    if (!root) return
    if (root.value <= leftValue || root.value >= rightNumber) return false
    return (
      helper(root.left, leftValue, root.value) &&
      helper(root.right, root.value, rightNumber)
    )
  }

  return helper(head, -Infinity, Infinity)
}
