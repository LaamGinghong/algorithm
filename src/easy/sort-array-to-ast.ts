import TreeNode from '../tree-node'

function sortArrayToAST(nums: number[]) {
  function helper(left: number, right: number) {
    if (left > right) return null

    const middle = Math.floor((left + right) / 2)
    const node = new TreeNode(nums[middle])
    node.left = helper(left, middle - 1)
    node.right = helper(middle + 1, right)
    return node
  }

  return helper(0, nums.length - 1)
}
