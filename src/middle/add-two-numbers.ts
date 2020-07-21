import ListNode from '../list-node'

function addTwoNumbers(l1: ListNode, l2: ListNode) {
  const answer = new ListNode(-1) // head
  let temp = answer
  let sum = 0 // 当前两数之和
  let n = 0 // 是否有进位

  while (l1 || l2) {
    const n1 = l1?.value ?? 0
    const n2 = l2?.value ?? 0
    sum = n1 + n2 + n

    temp.next = new ListNode(sum % 10)
    temp = temp.next

    n = parseInt(`${sum / 10}`)
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  if (n) temp.next = new ListNode(n)
  return answer.next
}
