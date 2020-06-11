class List {
    value: any
    next: List

    constructor(value: any) {
        this.value = value
        this.next = null
    }
}

function removeElements(head: List, value: any) {
    const list = new List(null)
    let prev = list, current = head
    list.next = head
    while (current) {
        if (current.value === value) {
            prev.next = current.next
            current = current.next
        } else {
            prev = current
            current = current.next
        }
    }
    return list.next
}
