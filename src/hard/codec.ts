import { Node } from '../node'

class Codec {
  serialize = (root: Node): string => JSON.stringify(root)

  deserialize = (data: string): Node => JSON.parse(data) as Node
}
