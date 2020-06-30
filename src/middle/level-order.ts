import { NodeOptions } from '../node'

function levelOrder(root: NodeOptions) {
  const list: number[][] = []

  function helper(node: NodeOptions, level: number) {
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

const node: NodeOptions = {
  value: 1,
  children: [
    {
      value: 3,
      children: [
        { value: 5, children: [] },
        { value: 6, children: [] },
      ],
    },
    { value: 2, children: [] },
    { value: 4, children: [] },
  ],
}

levelOrder(node)
