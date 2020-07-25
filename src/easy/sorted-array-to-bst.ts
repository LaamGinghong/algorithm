import TreeNode from '../tree-node'

function sortedArrayToBST(nums: number[]) {
  if (!nums.length) return null

  const mid = parseInt(`${nums.length / 2}`)
  const treeNode = new TreeNode(nums[mid])
  treeNode.left = sortedArrayToBST(nums.slice(0, mid))
  treeNode.right = sortedArrayToBST(nums.slice(mid + 1))
  return treeNode
}
