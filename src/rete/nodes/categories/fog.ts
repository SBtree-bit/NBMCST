import { ClassicPreset as Classic } from 'rete';
import * as Utils from "../utils";
import { Sockets } from "../types";

class LinearFogNode extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 260;
  types = {
    fog: "vec4"
  };
  includes = [
    "fog.glsl"
  ];

  constructor(socket: Classic.Socket) {
    super('Linear Fog');

    this.addInput('in_color', new Classic.Input(Sockets["vec4"], 'In Color'));
    this.addInput('vertex_distance', new Classic.Input(Sockets["float"], 'Vertex Distance'));
    this.addInput('fog_start', new Classic.Input(Sockets["float"], 'Start Distance'));
    this.addInput('fog_end', new Classic.Input(Sockets["float"], 'End Distance'));
    this.addInput('fog_color', new Classic.Input(Sockets["vec4"], 'Fog Color'));
    this.addOutput('fog', new Classic.Output(Sockets["vec4"], 'Fog'));
  }
  code(inputs: any): object {
    return {
      "fog": `linear_fog(${inputs["in_color"]}, ${inputs["vertex_distance"]}, ${inputs["fog_start"]}, ${inputs["fog_end"]}, ${inputs["fog_color"]})`
    }
  }
}

class LinearFogFadeNode extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 200;
  types = {
    fade: "float"
  };
  includes = [
    "fog.glsl"
  ];

  constructor(socket: Classic.Socket) {
    super('Linear Fog Fade');

    this.addInput('vertex_distance', new Classic.Input(Sockets["float"], 'Vertex Distance'));
    this.addInput('fog_start', new Classic.Input(Sockets["float"], 'Start Distance'));
    this.addInput('fog_end', new Classic.Input(Sockets["float"], 'End Distance'));
    this.addOutput('fade', new Classic.Output(Sockets["float"], 'Fade'));
  }
  code(inputs: any): object {
    return {
      "fade": `linear_fog_fade(${inputs["vertex_distance"]}, ${inputs["fog_start"]}, ${inputs["fog_end"]})`
    }
  }
}

class FogDistanceNode extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 200;
  types = {
    distance: "float"
  };
  includes = [
    "fog.glsl"
  ]

  constructor(socket: Classic.Socket) {
    super('Fog Distance');

    this.addInput('model_view_mat', new Classic.Input(Sockets["mat4"], 'Model View Matrix'));
    this.addInput('pos', new Classic.Input(Sockets["vec3"], 'Position'));
    this.addInput('shape', new Classic.Input(Sockets["int"], 'Shape'));
    this.addOutput('distance', new Classic.Output(Sockets["float"], 'Distance'));
  }
  code(inputs: any): object {
    return {
      "distance": `fog_distance(${inputs["model_view_mat"]}, ${inputs["pos"]}, ${inputs["shape"]})`
    }
  }
}

type Node = LinearFogNode | LinearFogFadeNode | FogDistanceNode

export { LinearFogNode, LinearFogFadeNode, FogDistanceNode }
export type { Node }