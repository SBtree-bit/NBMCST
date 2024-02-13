import { ClassicPreset as Classic } from 'rete';
import * as Utils from "../utils";
import { Sockets } from "../types";

let Mathable = new Classic.Socket("Mathable")
Sockets["int"].combineWith(Mathable)
Sockets["float"].combineWith(Mathable)
Sockets["vec2"].combineWith(Mathable)
Sockets["vec3"].combineWith(Mathable)
Sockets["vec4"].combineWith(Mathable)
Sockets["mat2"].combineWith(Mathable)
Sockets["mat3"].combineWith(Mathable)
Sockets["mat4"].combineWith(Mathable)

class AddNode extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 150;
  types = {
    value: ["int", "float", "vec2", "vec3", "vec4", "mat2", "mat3", "mat4"]
  }
  includes = []

  constructor(socket: Classic.Socket) {
    super('Add');
    

    this.addInput('a', new Classic.Input(socket, 'A'));
    this.addInput('b', new Classic.Input(socket, 'B'));
    this.addOutput('value', new Classic.Output(socket, 'Output'));
  }

  code(inputs: any): object {
    return {
      value: `(${inputs.a} + ${inputs.b})`
    }
  }
}

class SubtractNode extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 150;
  types = {
    in: {
      a: ["int", "float", "vec2", "vec3", "vec4", "color", "mat2", "mat3", "mat4"],
      b: ["int", "float", "vec2", "vec3", "vec4", "color", "mat2", "mat3", "mat4"]
    },
    out: {
      value: ["int", "float", "vec2", "vec3", "vec4", "color", "mat2", "mat3", "mat4"]
    }
  }
  includes = []

  constructor(socket: Classic.Socket) {
    super('Subtract');

    this.addInput('a', new Classic.Input(socket, 'A'));
    this.addInput('b', new Classic.Input(socket, 'B'));
    this.addOutput('value', new Classic.Output(socket, 'Number'));
  }

  code(inputs: any): object {
    return {
      value: `(${inputs.a} - ${inputs.b})`
    }
  }
}

class MultiplyNode extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 150;
  types = {
    in: {
      a: ["int", "float", "vec2", "vec3", "vec4", "color", "mat2", "mat3", "mat4"],
      b: ["int", "float", "vec2", "vec3", "vec4", "color", "mat2", "mat3", "mat4"]
    },
    out: {
      value: ["int", "float", "vec2", "vec3", "vec4", "color", "mat2", "mat3", "mat4"]
    }
  }
  includes = []

  constructor(socket: Classic.Socket) {
    super('Multiply');

    this.addInput('a', new Classic.Input(socket, 'A'));
    this.addInput('b', new Classic.Input(socket, 'B'));
    this.addOutput('value', new Classic.Output(socket, 'Number'));
  }
  
  code(inputs: any): object {
    return {
      value: `(${inputs.a} * ${inputs.b})`
    }
  }
}

class DivideNode extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 150;
  types = {
    in: {
      a: ["int", "float", "vec2", "vec3", "vec4", "color", "mat2", "mat3", "mat4"],
      b: ["int", "float", "vec2", "vec3", "vec4", "color", "mat2", "mat3", "mat4"]
    },
    out: {
      value: ["int", "float", "vec2", "vec3", "vec4", "color", "mat2", "mat3", "mat4"]
    }
  }
  includes = []

  constructor(socket: Classic.Socket) {
    super('Divide');

    this.addInput('a', new Classic.Input(socket, 'A'));
    this.addInput('b', new Classic.Input(socket, 'B'));
    this.addOutput('value', new Classic.Output(socket, 'Number'));
  }

  code(inputs: any): object {
    return {
      value: `(${inputs.a} / ${inputs.b})`
    }
  }
}

type Node = AddNode | SubtractNode | MultiplyNode | DivideNode

export { AddNode, SubtractNode, MultiplyNode, DivideNode }
export type { Node }