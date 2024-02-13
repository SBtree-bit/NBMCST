type ConnectionTypes = {
  in: object
  out: object
}
type InputTypes = {
  out: object
}
type OutputTypes = {
  in: object
}
interface GLSLNode {
  code: (inputs: object) => object
  types: ConnectionTypes
  includes: Array<string> | undefined
}
interface InputNode {
  types: InputTypes
}
interface OutputNode {
  types: OutputTypes
}

export type { GLSLNode, OutputNode, InputNode, ConnectionTypes, InputTypes, OutputTypes }