import { Node } from '../node'

function levelOrder(root: Node) {
  const list: number[][] = []

  function helper(node: Node, level: number) {
    if (!node) return
    list[level] = list[level] || []
    list[level].push(node.value)
    if (node.children) {
      node.children.forEach((child) => {
        helper(child, level + 1)
      })
    }
  }

  helper(root, 0)
  console.log(list)
  return list
}

const node: Node = {
  value: 1,
  children: [
    { value: 3, children: [{ value: 5 }, { value: 6 }] },
    { value: 2 },
    { value: 4 },
  ],
}

levelOrder(node)
