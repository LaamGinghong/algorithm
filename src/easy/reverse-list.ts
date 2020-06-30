import { ListNodeOptions } from '../list-node'

function reverseList(head: ListNodeOptions) {
  let prev: ListNodeOptions
  let current = head
  while (current) {
    const next = current.next
    current.next = prev
    prev = current
    current = next
  }
  return prev
}
