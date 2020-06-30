import { NodeOptions } from '../node'

class Codec {
  serialize = (root: NodeOptions): string => JSON.stringify(root)

  deserialize = (data: string): NodeOptions => JSON.parse(data) as NodeOptions
}
