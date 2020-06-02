interface ListNode {
    value?: ListNode
    next?: ListNode
}

function deleteNode(node: ListNode) {
    const current = node
    node.value = current.next?.value
    node.next = current.next?.next
}

console.log(deleteNode({}))