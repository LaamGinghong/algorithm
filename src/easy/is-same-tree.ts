interface ListNode {
    value: any
    left?: ListNode
    right?: ListNode
}

function isSameTree(p: ListNode, q: ListNode) {
    if (p === null && q === null) return true
    if (p === null || q === null) return false
    if (p.value !== q.value) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
