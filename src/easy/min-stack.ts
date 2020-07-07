class MinStack {
  stack: number[] = []

  push(value: number): void {
    this.stack.unshift(value)
  }

  pop(): void {
    this.stack.shift()
  }

  top(): number {
    return this.stack[0]
  }

  getMin(): number {
    return Math.min(...this.stack)
  }
}
