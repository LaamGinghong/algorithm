import { ListNodeOptions } from '../list-node'

function deleteDuplicate(head: ListNodeOptions) {
  let current = head
  while (current && current.next) {
    if (current.value === current.next.value) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }
  return head
}
