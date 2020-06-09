import {TreeNode} from "../tree-node";

function check(p: TreeNode, q: TreeNode): boolean {
    if (!p && !q) {
        return true
    }
    if (!p || !q) {
        return false
    }
    return p.value === q.value && check(p.left, q.right) && check(p.right, q.left)
}


function isSymmetric(root: TreeNode) {
    return check(root, root)
}
