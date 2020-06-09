interface TreeNode {
    left?: TreeNode
    right?: TreeNode
}

function maxDepth(root: TreeNode) {
    if (!root) {
        return 0
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
