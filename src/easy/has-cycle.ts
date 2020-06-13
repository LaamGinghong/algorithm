import {ListNode} from "../list-node";

function hasCycle1(head: ListNode & { flag?: boolean }) {
    while (head) {
        if (head.flag) {
            return true
        }
        head.flag = true
        head = head.next
    }
    return false
}

function hasCycle2(head: ListNode & { flag?: boolean }) {
    try {
        JSON.stringify(head)
        return false
    } catch {
        return true
    }
}

function hasCycle3(head: ListNode & { flag?: boolean }) {
    if (!head || !head.next) {
        return false
    }
    let fast = head.next.next
    let slow = head
    while (fast !== slow) {
        if (!fast || !fast.next) {
            return false
        }
        fast = fast.next.next
        slow = slow.next
    }
    return true
}
