import { NodeOptions } from '../node'

function preorder(root: NodeOptions) {
  const list = []

  function helper(node: NodeOptions) {
    if (!node) return
    list.push(node.value)
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i]
      helper(child)
    }
  }

  helper(root)
  return list
}
