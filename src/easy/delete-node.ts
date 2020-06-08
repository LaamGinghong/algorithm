import {ListNode} from '../list-node'

function deleteNode(node: ListNode) {
    const current = node
    node.value = current.next?.value
    node.next = current.next?.next
}
