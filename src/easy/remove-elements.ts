import {ListNode} from '../list-node'

function removeElements(head: ListNode, value: any) {
    let pre: ListNode, current = head
    pre.next = head
    while (current) {
        if (current.value === value) {
            pre.next = current.next
            current = pre.next
        } else {
            pre = current
            current = current.next
        }
    }
}
