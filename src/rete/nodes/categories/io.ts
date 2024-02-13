import { ClassicPreset as Classic } from 'rete';
import * as Utils from "../utils";

class InputNodeCore extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 520;

  constructor(socket: Classic.Socket) {
    super('Input');

    this.addOutput('model_view_mat', new Classic.Output(socket, 'Model View Matrix'));
    this.addOutput('proj_mat', new Classic.Output(socket, 'Projection Matrix'));
    this.addOutput('texture_mat', new Classic.Output(socket, 'Texture Matrix'));
    this.addOutput('screen_size', new Classic.Output(socket, 'Screen Size'));
    this.addOutput('color_modulator', new Classic.Output(socket, 'Color Modulator'));
    this.addOutput('light0_direction', new Classic.Output(socket, 'Light 0 Direction'));
    this.addOutput('light1_direction', new Classic.Output(socket, 'Light 1 Direction'));
    this.addOutput('fog_start', new Classic.Output(socket, 'Fog Start'));
    this.addOutput('fog_end', new Classic.Output(socket, 'Fog End'));
    this.addOutput('fog_color', new Classic.Output(socket, 'Fog Color'));
    this.addOutput('line_width', new Classic.Output(socket, 'Wireframe Line Width'));
    this.addOutput('game_time', new Classic.Output(socket, 'Time'));
    this.addOutput('chunk_offset', new Classic.Output(socket, 'Chunk Offset'));
  }
}

class InputNodePost extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 260;

  constructor(socket: Classic.Socket) {
    super('Input');

    this.addOutput('time', new Classic.Output(socket, 'Time'));
    this.addOutput('in_size', new Classic.Output(socket, 'In Buffer Size'));
    this.addOutput('out_size', new Classic.Output(socket, 'Out Buffer Size'));
    this.addOutput('aux_size', new Classic.Output(socket, 'Auxiliary Buffer Size'));
    this.addOutput('proj_mat', new Classic.Output(socket, 'Projection Matrix'));
    this.addOutput('screen_size', new Classic.Output(socket, 'Screen Size'));
  }
}

class OutputNodeFrag extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 80;

  constructor(socket: Classic.Socket) {
    super('Output');

    this.addInput('value', new Classic.Input(socket, 'Color'));
  }
}

class OutputNodeVert extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 80;

  constructor(socket: Classic.Socket) {
    super('Output');

    this.addInput('value', new Classic.Input(socket, 'Position'));
  }
}

class AdditionalOutputNode extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 115;

  constructor(socket: Classic.Socket) {
    super('Additional Output');

    this.addControl('name', new Classic.InputControl("text",{ initial: "Name" }))
    this.addInput('value', new Classic.Input(socket, 'Value'));
  }
}

class AdditionalInputNode extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 115;

  constructor(socket: Classic.Socket) {
    super('Additional Input');

    this.addControl('name', new Classic.InputControl("text",{ initial: "Name" }))
    this.addOutput('value', new Classic.Input(socket, 'Value'));
  }
}

type Node = InputNodeCore | InputNodePost | OutputNodeFrag | OutputNodeVert | AdditionalOutputNode | AdditionalInputNode

export { InputNodeCore, InputNodePost, OutputNodeFrag, OutputNodeVert, AdditionalOutputNode, AdditionalInputNode }
export type { Node }