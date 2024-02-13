import { ClassicPreset as Classic } from 'rete';
import * as Utils from "./utils";

class LinearFogNode extends Classic.Node implements Utils.GLSLNode {
  width = 180;
  height = 260;
  types = {
    "fog": "vec4"
  };

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
    "fade": "float"
  };

  constructor(socket: Classic.Socket) {
    super('Linear Fog Fade');

    this.addInput('vertex_distance', new Classic.Input(socket, 'Vertex Distance'));
    this.addInput('fog_start', new Classic.Input(socket, 'Start Distance'));
    this.addInput('fog_end', new Classic.Input(socket, 'End Distance'));
    this.addOutput('fade', new Classic.Output(socket, 'Fade'));
  }
}

type Node = LinearFogNode | LinearFogFadeNode

export { LinearFogNode, LinearFogFadeNode }
export type { Node }