import { ListNode } from '../list-node'

function swapPairs(head: ListNode) {
  if (!head || !head.next) return head

  const { next } = head
  head.next = swapPairs(next.next)
  next.next = head

  return next
}
