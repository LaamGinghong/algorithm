import { TreeNodeOptions } from '../tree-node'

function hasPathSum(root: TreeNodeOptions, sum: number) {
  if (root === null) {
    return false
  }
  sum -= root.value
  if (root.left === null && root.right === null) {
    return sum === 0
  }
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
}
