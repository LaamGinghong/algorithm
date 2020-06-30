import { ListNodeOptions } from '../list-node'

function mergeTwoLists(l1: ListNodeOptions, l2: ListNodeOptions) {
  if (l1 === null || l1 === undefined) {
    return l2
  } else if (l2 === null || l2 === undefined) {
    return l1
  } else if (l1.value < l2.value) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}
