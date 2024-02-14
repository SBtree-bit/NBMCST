interface GLSLNode {
  code: (inputs: object) => object
  types: object
  includes: Array<string> | undefined
}

export type { GLSLNode }