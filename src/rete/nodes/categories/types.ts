import { ClassicPreset as Classic } from 'rete';
import * as Utils from "../utils";

class NumberNode extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 120;

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

  constructor(initial: number, socket: Classic.Socket) {
    super('Vector 2');

    this.addInput('x', new Classic.Input(socket, 'X'));
    this.addInput('y', new Classic.Input(socket, 'Y'));
    this.addOutput('vec2', new Classic.Output(socket, 'Vector 2'));
  }
}

class Vec3Node extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 190;

  constructor(initial: number, socket: Classic.Socket) {
    super('Vector 3');

    this.addInput('x', new Classic.Input(socket, 'X'));
    this.addInput('y', new Classic.Input(socket, 'Y'));
    this.addInput('z', new Classic.Input(socket, 'Z'));
    this.addOutput('vec3', new Classic.Output(socket, 'Vector 3'));
  }
}

class Vec4Node extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 230;

  constructor(initial: number, socket: Classic.Socket) {
    super('Vector 4');

    this.addInput('x', new Classic.Input(socket, 'X'));
    this.addInput('y', new Classic.Input(socket, 'Y'));
    this.addInput('z', new Classic.Input(socket, 'Z'));
    this.addInput('w', new Classic.Input(socket, 'W'));
    this.addOutput('vec3', new Classic.Output(socket, 'Vector 4'));
  }
}

class ColorNode extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 230;

  constructor(initial: number, socket: Classic.Socket) {
    super('Color');

    this.addInput('r', new Classic.Input(socket, 'R'));
    this.addInput('g', new Classic.Input(socket, 'G'));
    this.addInput('b', new Classic.Input(socket, 'B'));
    this.addInput('a', new Classic.Input(socket, 'A'));
    this.addOutput('color', new Classic.Output(socket, 'Color'));
  }
}

type Node = NumberNode | Vec2Node | Vec3Node | Vec4Node | ColorNode

export { NumberNode, Vec2Node, Vec3Node, Vec4Node, ColorNode }
export type { Node }