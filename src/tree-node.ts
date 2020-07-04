export interface TreeNodeOptions {
  value: any
  left: TreeNodeOptions
  right: TreeNodeOptions
}

export default class TreeNode implements TreeNodeOptions {
  value: any
  left: TreeNodeOptions
  right: TreeNodeOptions

  constructor(value: any) {
    this.value = value
  }
}
