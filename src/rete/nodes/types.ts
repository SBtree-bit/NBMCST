type Vector2 = {
    x: Number,
    y: Number
}
type Vector3 = {
    x: Number,
    y: Number,
    z: Number
}
type Vector4 = {
    x: Number,
    y: Number,
    z: Number,
    w: Number
}

type Color = {
    r: Number,
    g: Number,
    b: Number,
    a: Number
}

type Matrix2x2 = [[Number,Number],[Number,Number]]
type Matrix3x3 = [[Number,Number,Number],[Number,Number,Number],[Number,Number,Number]]
type Matrix4x4 = [[Number,Number,Number,Number],[Number,Number,Number,Number],[Number,Number,Number,Number],[Number,Number,Number,Number]]

export type { Vector2, Vector3, Vector4, Color, Matrix2x2, Matrix3x3, Matrix4x4 }