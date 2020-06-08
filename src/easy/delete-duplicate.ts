import {ListNode} from '../list-node'

function deleteDuplicate(head: ListNode) {
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
