import { ClassicPreset as Classic } from 'rete';

class LinearFogNode extends Classic.Node {
  width = 180;
  height = 260;

  constructor(socket: Classic.Socket) {
    super('Linear Fog');

    this.addInput('in_color', new Classic.Input(socket, 'In Color'));
    this.addInput('vertex_distance', new Classic.Input(socket, 'Vertex Distance'));
    this.addInput('fog_start', new Classic.Input(socket, 'Start Distance'));
    this.addInput('fog_end', new Classic.Input(socket, 'End Distance'));
    this.addInput('fog_color', new Classic.Input(socket, 'Fog Color'));
    this.addOutput('color', new Classic.Output(socket, 'Fog'));
  }
}

class LinearFogFadeNode extends Classic.Node {
  width = 180;
  height = 200;

  constructor(socket: Classic.Socket) {
    super('Linear Fog Fade');

    this.addInput('vertex_distance', new Classic.Input(socket, 'Vertex Distance'));
    this.addInput('fog_start', new Classic.Input(socket, 'Start Distance'));
    this.addInput('fog_end', new Classic.Input(socket, 'End Distance'));
    this.addOutput('color', new Classic.Output(socket, 'Fade'));
  }
}

type Node = LinearFogNode | LinearFogFadeNode

export { LinearFogNode, LinearFogFadeNode }
export type { Node }