import {TreeNode} from "../tree-node";

function maxDepth(root: TreeNode) {
    if (!root) {
        return 0
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
