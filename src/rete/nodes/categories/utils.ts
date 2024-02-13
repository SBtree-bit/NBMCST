interface GLSLNode {
    code: (inputs: object) => object,
    types: any
}

export type { GLSLNode }