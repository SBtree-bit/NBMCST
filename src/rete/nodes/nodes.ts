import * as IO from "./categories/io"
import * as Math from "./categories/math"
import * as Types from "./categories/types"
import * as Fog from "./categories/fog"

type Node = Math.Node | IO.Node | Types.Node | Fog.Node;

export { IO, Math, Types, Fog }
export type { Node }