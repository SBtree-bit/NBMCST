type ConnectionTypes = {
  out: object
}
interface GLSLNode {
  code: (inputs: object) => object
  types: ConnectionTypes
  includes: Array<string> | undefined
}

export type { GLSLNode, ConnectionTypes }