import { ClassicPreset as Classic } from 'rete';
import * as Utils from "../utils";

class LinearFogNode extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 260;
  types = {
    in: {
      in_color: "vec4",
      vertex_distance: "float",
      fog_start: "float",
      fog_end: "float",
      fog_color: "vec4"
    },
    out: {
      fog: "vec4"
    }
  };
  includes = [
    "fog.glsl"
  ]

  constructor(socket: Classic.Socket) {
    super('Linear Fog');

    this.addInput('in_color', new Classic.Input(socket, 'In Color'));
    this.addInput('vertex_distance', new Classic.Input(socket, 'Vertex Distance'));
    this.addInput('fog_start', new Classic.Input(socket, 'Start Distance'));
    this.addInput('fog_end', new Classic.Input(socket, 'End Distance'));
    this.addInput('fog_color', new Classic.Input(socket, 'Fog Color'));
    this.addOutput('fog', new Classic.Output(socket, 'Fog'));
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
    in: {
      vertex_distance: "float",
      fog_start: "float",
      fog_end: "float"
    },
    out: {
      fade: "float"
    }
  };
  includes = [
    "fog.glsl"
  ]

  constructor(socket: Classic.Socket) {
    super('Linear Fog Fade');

    this.addInput('vertex_distance', new Classic.Input(socket, 'Vertex Distance'));
    this.addInput('fog_start', new Classic.Input(socket, 'Start Distance'));
    this.addInput('fog_end', new Classic.Input(socket, 'End Distance'));
    this.addOutput('fade', new Classic.Output(socket, 'Fade'));
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
    in: {
      model_view_mat: "mat4",
      pos: "vec3",
      shape: "int"
    },
    out: {
      distance: "float"
    }
  };
  includes = [
    "fog.glsl"
  ]

  constructor(socket: Classic.Socket) {
    super('Fog Distance');

    this.addInput('model_view_mat', new Classic.Input(socket, 'Model View Matrix'));
    this.addInput('pos', new Classic.Input(socket, 'Position'));
    this.addInput('shape', new Classic.Input(socket, 'Shape'));
    this.addOutput('distance', new Classic.Output(socket, 'Distance'));
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