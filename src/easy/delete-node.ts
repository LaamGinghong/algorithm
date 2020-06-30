import { ListNodeOptions } from '../list-node'

function deleteNode(node: ListNodeOptions) {
  const current = node
  node.value = current.next?.value
  node.next = current.next?.next
}
