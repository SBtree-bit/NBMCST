import { ClassicPreset as Classic } from 'rete';
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

let Sockets = {
  vec2: new Classic.Socket('vec2'),
  vec3: new Classic.Socket('vec3'),
  vec4: new Classic.Socket('vec4'),
  mat2: new Classic.Socket('mat2'),
  mat3: new Classic.Socket('mat3'),
  mat4: new Classic.Socket('mat4'),
  int: new Classic.Socket('int'),
  float: new Classic.Socket('float')
}

export type { Vector2, Vector3, Vector4, Color, Matrix2x2, Matrix3x3, Matrix4x4 }
export { Sockets }