import { ListNodeOptions } from '../list-node'

function swapPairs(head: ListNodeOptions) {
  if (!head || !head.next) return head

  const { next } = head
  head.next = swapPairs(next.next)
  next.next = head

  return next
}
