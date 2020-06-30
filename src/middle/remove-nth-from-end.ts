import ListNode, { ListNodeOptions } from '../list-node'

function removeNthFromEnd1(head: ListNodeOptions, n: number) {
  const dummy = new ListNode(0)
  dummy.next = head
  let length = 0
  let first = head
  while (first) {
    length++
    first = first.next
  }
  length -= n
  first = dummy
  while (length > 0) {
    length--
    first = first.next
  }
  first.next = first.next.next
  return dummy.next
}

function removeNthFromEnd2(head: ListNodeOptions, n: number) {
  const dummy = new ListNode(0)
  dummy.next = head
  let first = head
  let second = head

  for (let i = 1; i < n + 1; i++) {
    first = first.next
  }

  while (first) {
    first = first.next
    second = second.next
  }

  second.next = second.next.next
  return dummy.next
}
