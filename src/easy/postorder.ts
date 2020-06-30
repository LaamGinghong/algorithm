import { NodeOptions } from '../node'

function postorder(root: NodeOptions) {
  const list = []

  function helper(node: NodeOptions) {
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
