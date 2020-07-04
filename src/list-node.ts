export interface ListNodeOptions {
  value: any
  next: ListNodeOptions
}

export default class ListNode implements ListNodeOptions {
  value: any
  next: ListNodeOptions

  constructor(value) {
    this.value = value
  }
}
