class TreeNode {
  left: TreeNode[]
  right: TreeNode[]
  value: number

  constructor(value: number, left: TreeNode, right: TreeNode) {
    this.value = value
  }
}

function generateTree(n: number) {
  if (n === 0) return []

  function buildTree(start: number, end: number) {
    if (start > end) return [null]

    const treeNodes: TreeNode[] = []

    for (let i = start; i <= end; i++) {
      const leftNodes = buildTree(start, i - 1)
      const rightNodes = buildTree(i + 1, end)

      for (const leftNode of leftNodes) {
        for (const rightNode of rightNodes) {
          const current = new TreeNode(i, leftNode, rightNode)
          treeNodes.push(current)
        }
      }
    }
    return treeNodes
  }

  return buildTree(1, n)
}
