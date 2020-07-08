class CircularQueue {
  queue: number[] = [] // 循环队列
  front = 0 // 头指针
  rear = 0 // 尾指针
  maxLength: number // 队列最大长度

  constructor(k: number) {
    this.queue = Array(k)
    this.maxLength = k
  }

  Front(): number {
    return this.isEmpty() ? -1 : this.queue[this.front]
  }

  Rear(): number {
    if (this.isEmpty()) return -1
    const index = (this.rear || this.maxLength) - 1
    return this.queue[index]
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false
    this.queue[this.rear] = value
    this.rear = (this.rear + 1) % this.maxLength
    return true
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false
    this.queue[this.front] = null
    this.front = (this.front + 1) % this.maxLength
    return true
  }

  isEmpty(): boolean {
    return this.front === this.rear && !this.queue[this.front]
  }

  isFull(): boolean {
    return this.front === this.rear && !!this.queue[this.front]
  }
}
