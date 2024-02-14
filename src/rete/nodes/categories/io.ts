import { ClassicPreset as Classic } from 'rete';
import * as Utils from "../utils";
import { Sockets } from "../types";

class InputNodeCore extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 520;
  includes = []
  types = {
    "model_view_mat": "mat4",
    "proj_mat": "mat4",
    "texture_mat": "mat4",
    "screen_size": "vec2",
    "color_modulator": "vec4",
    "light0_direction": "vec3",
    "light1_direction": "vec3",
    "fog_start": "float",
    "fog_end": "float",
    "fog_color": "vec4",
    "line_width": "float",
    "game_time": "float",
    "chunk_offset": "vec3"
  }

  constructor(socket: Classic.Socket) {
    super('Input');

    this.addOutput('model_view_mat', new Classic.Output(Sockets["mat4"], 'Model View Matrix'));
    this.addOutput('proj_mat', new Classic.Output(Sockets["mat4"], 'Projection Matrix'));
    this.addOutput('texture_mat', new Classic.Output(Sockets["mat4"], 'Texture Matrix'));
    this.addOutput('screen_size', new Classic.Output(Sockets["vec2"], 'Screen Size'));
    this.addOutput('color_modulator', new Classic.Output(Sockets["vec4"], 'Color Modulator'));
    this.addOutput('light0_direction', new Classic.Output(Sockets["vec3"], 'Light 0 Direction'));
    this.addOutput('light1_direction', new Classic.Output(Sockets["vec3"], 'Light 1 Direction'));
    this.addOutput('fog_start', new Classic.Output(Sockets["float"], 'Fog Start'));
    this.addOutput('fog_end', new Classic.Output(Sockets["float"], 'Fog End'));
    this.addOutput('fog_color', new Classic.Output(Sockets["vec4"], 'Fog Color'));
    this.addOutput('line_width', new Classic.Output(Sockets["float"], 'Wireframe Line Width'));
    this.addOutput('game_time', new Classic.Output(Sockets["float"], 'Game Time'));
    this.addOutput('chunk_offset', new Classic.Output(Sockets["vec3"], 'Chunk Offset'));
  }
  
  code: (inputs: object) => object = function(inputs:object) {
    return {}
  };
}

class InputNodePost extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 260;
  includes = []
  types = {
    "time": "float",
    "in_size": "vec2",
    "out_size": "vec2",
    "aux_size": "vec2",
    "proj_mat": "mat4",
    "screen_size": "vec2"
  }

  constructor(socket: Classic.Socket) {
    super('Input');

    this.addOutput('time', new Classic.Output(Sockets["float"], 'Time'));
    this.addOutput('in_size', new Classic.Output(Sockets["vec2"], 'In Buffer Size'));
    this.addOutput('out_size', new Classic.Output(Sockets["vec2"], 'Out Buffer Size'));
    this.addOutput('aux_size', new Classic.Output(Sockets["vec2"], 'Auxiliary Buffer Size'));
    this.addOutput('proj_mat', new Classic.Output(Sockets["mat4"], 'Projection Matrix'));
    this.addOutput('screen_size', new Classic.Output(Sockets["vec2"], 'Screen Size'));
  }

  code: (inputs: object) => object = function(inputs:object) {
    return {}
  };
}

class OutputNodeFrag extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 80;
  includes = []
  types = {}

  constructor(socket: Classic.Socket) {
    super('Output');

    this.addInput('value', new Classic.Input(Sockets["vec4"], 'Color'));
  }
  
  code: (inputs: object) => object = function(inputs:object) {
    return {}
  };
}

class OutputNodeVert extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 80;
  includes = []
  types = []

  constructor(socket: Classic.Socket) {
    super('Output');

    this.addInput('value', new Classic.Input(Sockets["vec3"], 'Position'));
  }

  code: (inputs: object) => object = function(inputs:object) {
    return {}
  };
}

class AdditionalOutputNode extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 115;
  includes = []
  types = {}

  constructor(socket: Classic.Socket) {
    super('Additional Output');

    this.addControl('name', new Classic.InputControl("text",{ initial: "Name" }))
    this.addInput('value', new Classic.Input(socket, 'Value'));
  }

  code: (inputs: object) => object = function(inputs:object) {
    return {}
  };
}

class AdditionalInputNode extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 115;
  includes = []
  types = {}

  constructor(socket: Classic.Socket) {
    super('Additional Input');

    this.addControl('name', new Classic.InputControl("text",{ initial: "Name" }))
    this.addOutput('value', new Classic.Input(socket, 'Value'));
  }

  code: (inputs: object) => object = function(inputs:object) {
    return {}
  };
}

type Node = InputNodeCore | InputNodePost | OutputNodeFrag | OutputNodeVert | AdditionalOutputNode | AdditionalInputNode

export { InputNodeCore, InputNodePost, OutputNodeFrag, OutputNodeVert, AdditionalOutputNode, AdditionalInputNode }
export type { Node }