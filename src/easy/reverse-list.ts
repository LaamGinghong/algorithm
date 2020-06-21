import { ListNode } from '../list-node'

function reverseList(head: ListNode) {
  let prev: ListNode
  let current = head
  while (current) {
    const next = current.next
    current.next = prev
    prev = current
    current = next
  }
  return prev
}
