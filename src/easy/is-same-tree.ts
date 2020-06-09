import {TreeNode} from '../tree-node'

function isSameTree(p: TreeNode, q: TreeNode) {
    if (p === null && q === null) return true
    if (p === null || q === null) return false
    if (p.value !== q.value) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
