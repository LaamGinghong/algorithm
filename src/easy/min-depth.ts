import {TreeNode} from "../tree-node";

function minDepth(root: TreeNode) {
    if (!root) {
        return 0
    }
    if (!root.left && !root.right) {
        return 1
    }
    let min = Number.MAX_SAFE_INTEGER
    if (root.left) {
        min = Math.min(minDepth(root.left), min)
    }
    if (root.right) {
        min = Math.min(minDepth(root.right), min)
    }
    return min + 1 // +1 表示此节点存在深度1
}
