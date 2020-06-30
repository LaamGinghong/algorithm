import { ListNodeOptions } from '../list-node'

function isPalindrome1(x: number) {
  return x.toString() === x.toString().split('').reverse().join('')
}

function isPalindrome2(x: number) {
  let result = Math.abs(x)
  let now = 0
  while (result > 0) {
    now = now * 10 + (result % 10)
    result = Math.floor(result / 10)
  }
  if (x >= 0) {
    return now === x
  } else {
    return false
  }
}

function isPalindrome3(head: ListNodeOptions) {
  let mid = head
  let pre: ListNodeOptions = null
  let reversed: ListNodeOptions = null
  while (head !== null && head.next !== null) {
    pre = mid
    head = head.next.next
    mid = mid.next
    pre.next = reversed
    reversed = pre
  }
  if (head) {
    mid = mid.next
  }
  while (mid) {
    if (reversed.value !== mid.value) {
      return false
    }
    reversed = reversed.next
    mid = mid.next
  }
  return true
}

function isPalindrome4(str: string) {
  str = str.replace(/[^0-9a-zA-Z]/g, '').toLocaleLowerCase()
  let left = 0
  let right = str.length - 1
  while (left < right) {
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }
  return true
}
