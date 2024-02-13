type ConnectionTypes = {
  in: object
  out: object
}
interface GLSLNode {
  code: (inputs: object) => object
  types: ConnectionTypes
  includes: Array<string> | undefined
}
interface InputNode {
  types: ConnectionTypes
  includes: Array<string> | undefined
}

export type { GLSLNode, ConnectionTypes }