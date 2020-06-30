import { TreeNodeOptions } from '../tree-node'

function check(p: TreeNodeOptions, q: TreeNodeOptions): boolean {
  if (!p && !q) {
    return true
  }
  if (!p || !q) {
    return false
  }
  return p.value === q.value && check(p.left, q.right) && check(p.right, q.left)
}

function isSymmetric(root: TreeNodeOptions) {
  return check(root, root)
}
