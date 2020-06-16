import { Node } from '../node'

function postorder(root: Node) {
  const list = []

  function helper(node: Node) {
    if (!node) return
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i]
      helper(child)
    }
    list.push(node)
  }

  helper(root)
  return list
}
