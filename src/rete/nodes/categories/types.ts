import { ClassicPreset as Classic } from 'rete';
import * as Utils from "../utils";

class NumberNode extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 120;
  types = {
    "out": {
      "value": "float"
    },
    "in": {}
  }
  includes = []

  constructor(initial: number, socket: Classic.Socket) {
    super('Number');

    this.addOutput('value', new Classic.Output(socket, 'Number'));
    this.addControl(
      'value',
      new Classic.InputControl('number', { initial })
    );
  }
}

class Vec2Node extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 150;
  types = {
    in: {
      x: "float",
      y: "float"
    },
    out: {
      vec2: "vec2"
    }
  }
  includes = []

  constructor(initial: number, socket: Classic.Socket) {
    super('Vector 2');

    this.addInput('x', new Classic.Input(socket, 'X'));
    this.addInput('y', new Classic.Input(socket, 'Y'));
    this.addOutput('vec2', new Classic.Output(socket, 'Vector 2'));
  }

  code(inputs: any): object {
    return {
      vec2: `vec2(${inputs.x},${inputs.y})`
    }
  }
}

class Vec3Node extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 190;
  types = {
    in: {
      x: "float",
      y: "float",,
      z: "float"
    },
    out: {
      vec3: "vec3"
    }
  }
  includes = []

  constructor(initial: number, socket: Classic.Socket) {
    super('Vector 3');

    this.addInput('x', new Classic.Input(socket, 'X'));
    this.addInput('y', new Classic.Input(socket, 'Y'));
    this.addInput('z', new Classic.Input(socket, 'Z'));
    this.addOutput('vec3', new Classic.Output(socket, 'Vector 3'));
  }

  code(inputs: any): object {
    return {
      vec3: `vec3(${inputs.x},${inputs.y},${inputs.z})`
    }
  }
}

class Vec4Node extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 230;
  types = {
    in: {
      x: "float",
      y: "float",
      z: "float",
      w: "float"
    },
    out: {
      vec4: "vec4"
    }
  }
  includes = []

  constructor(initial: number, socket: Classic.Socket) {
    super('Vector 4');

    this.addInput('x', new Classic.Input(socket, 'X'));
    this.addInput('y', new Classic.Input(socket, 'Y'));
    this.addInput('z', new Classic.Input(socket, 'Z'));
    this.addInput('w', new Classic.Input(socket, 'W'));
    this.addOutput('vec4', new Classic.Output(socket, 'Vector 4'));
  }

  code(inputs: any): object {
    return {
      vec4: `vec4(${inputs.x},${inputs.y},${inputs.z},${inputs.w})`
    }
  }
}

class ColorNode extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 230;
  types = {
    in: {
      r: "float",
      g: "float",
      b: "float",
      a: "float"
    },
    out: {
      color: "vec4"
    }
  }
  includes = []

  constructor(initial: number, socket: Classic.Socket) {
    super('Color');

    this.addInput('r', new Classic.Input(socket, 'R'));
    this.addInput('g', new Classic.Input(socket, 'G'));
    this.addInput('b', new Classic.Input(socket, 'B'));
    this.addInput('a', new Classic.Input(socket, 'A'));
    this.addOutput('color', new Classic.Output(socket, 'Color'));
  }

  code(inputs: any): object {
    return {
      color: `vec4(${inputs.r},${inputs.g},${inputs.b},${inputs.a})`
    }
  }
}

type Node = NumberNode | Vec2Node | Vec3Node | Vec4Node | ColorNode

export { NumberNode, Vec2Node, Vec3Node, Vec4Node, ColorNode }
export type { Node }