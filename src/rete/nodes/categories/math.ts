import { ClassicPreset as Classic } from 'rete';
import * as Utils from "../utils";

class AddNode extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 150;

  constructor(socket: Classic.Socket) {
    super('Add');

    this.addInput('a', new Classic.Input(socket, 'A'));
    this.addInput('b', new Classic.Input(socket, 'B'));
    this.addOutput('value', new Classic.Output(socket, 'Number'));
  }
}

class SubtractNode extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 150;

  constructor(socket: Classic.Socket) {
    super('Subtract');

    this.addInput('a', new Classic.Input(socket, 'A'));
    this.addInput('b', new Classic.Input(socket, 'B'));
    this.addOutput('value', new Classic.Output(socket, 'Number'));
  }
}

class MultiplyNode extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 150;

  constructor(socket: Classic.Socket) {
    super('Multiply');

    this.addInput('a', new Classic.Input(socket, 'A'));
    this.addInput('b', new Classic.Input(socket, 'B'));
    this.addOutput('value', new Classic.Output(socket, 'Number'));
  }
}

class DivideNode extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 150;

  constructor(socket: Classic.Socket) {
    super('Divide');

    this.addInput('a', new Classic.Input(socket, 'A'));
    this.addInput('b', new Classic.Input(socket, 'B'));
    this.addOutput('value', new Classic.Output(socket, 'Number'));
  }
}

type Node = AddNode | SubtractNode | MultiplyNode | DivideNode

export { AddNode, SubtractNode, MultiplyNode, DivideNode }
export type { Node }