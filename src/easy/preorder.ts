import { Node } from '../node'

function preorder(root: Node) {
  const list = []

  function helper(node: Node) {
    if (!node) return
    list.push(node.value)
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i]
        helper(child)
      }
    }
  }

  helper(root)
  return list
}
