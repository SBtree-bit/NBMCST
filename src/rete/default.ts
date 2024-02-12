import { ClassicPreset as Classic, GetSchemes, NodeEditor } from 'rete';

import { Area2D, AreaExtensions, AreaPlugin } from 'rete-area-plugin';
import {
  ConnectionPlugin,
  Presets as ConnectionPresets,
} from 'rete-connection-plugin';
import {
  ReactPlugin,
  ReactArea2D,
  Presets as ReactPresets,
} from 'rete-react-plugin';
import { createRoot } from 'react-dom/client';

import {
  AutoArrangePlugin,
  Presets as ArrangePresets,
} from 'rete-auto-arrange-plugin';

import {
  ContextMenuPlugin,
  ContextMenuExtra,
  Presets as ContextMenuPresets,
} from 'rete-context-menu-plugin';
import { MinimapExtra, MinimapPlugin } from 'rete-minimap-plugin';
import {
  ReroutePlugin,
  RerouteExtra,
  RerouteExtensions,
} from 'rete-connection-reroute-plugin';

import * as Nodes from "./nodes/nodes"

/*type Conn =
  | Connection<Nodes.NumberNode, Nodes.AddNode>
  | Connection<Nodes.AddNode, Nodes.AddNode>
  | Connection<Nodes.AddNode, Nodes.NumberNode>
  | Connection<Nodes.NumberNode, Nodes.OutputNode>
  | Connection<Nodes.AddNode, Nodes.OutputNode>
  | Connection<Nodes.InputNodeCore, Nodes.OutputNode>
  | Connection<Nodes.InputNodeCore, Nodes.AddNode>
  | Connection<Nodes.InputNodePost, Nodes.OutputNode>
  | Connection<Nodes.InputNodePost, Nodes.AddNode>;*/
type Conn = Connection<Nodes.Node,Nodes.Node>
type Schemes = GetSchemes<Nodes.Node, Conn>;

class Connection<A extends Nodes.Node, B extends Nodes.Node> extends Classic.Connection<
  A,
  B
> {}

type AreaExtra =
  | Area2D<Schemes>
  | ReactArea2D<Schemes>
  | ContextMenuExtra
  | MinimapExtra
  | RerouteExtra;

const socket = new Classic.Socket('socket');

export async function createEditor(container: HTMLElement) {
  const editor = new NodeEditor<Schemes>();
  const area = new AreaPlugin<Schemes, AreaExtra>(container);
  const connection = new ConnectionPlugin<Schemes, AreaExtra>();
  const reactRender = new ReactPlugin<Schemes, AreaExtra>({ createRoot });

  const contextMenu = new ContextMenuPlugin<Schemes>({
    items: ContextMenuPresets.classic.setup([
      ['Number', () => new Nodes.Types.NumberNode(1, socket)],
      ['Vector 2', () => new Nodes.Types.Vec2Node(1, socket)],
      ['Vector 3', () => new Nodes.Types.Vec3Node(1, socket)],
      ['Vector 4', () => new Nodes.Types.Vec4Node(1, socket)],
      ['Color', () => new Nodes.Types.ColorNode(1, socket)],
      ['Add', () => new Nodes.Math.AddNode(socket)],
      ['Subtract', () => new Nodes.Math.SubtractNode(socket)],
      ['Multiply', () => new Nodes.Math.MultiplyNode(socket)],
      ['Divide', () => new Nodes.Math.DivideNode(socket)],
      ['Output - Fragment', () => new Nodes.IO.OutputNodeFrag(socket)],
      ['Output - Vertex', () => new Nodes.IO.OutputNodeVert(socket)],
      ['Additional Output', () => new Nodes.IO.AdditionalOutputNode(socket)],
      ['Input - Core', ()=> new Nodes.IO.InputNodeCore(socket)],
      ['Input - Post', ()=> new Nodes.IO.InputNodePost(socket)],
      ['Additional Input', () => new Nodes.IO.AdditionalInputNode(socket)],
      ['Linear Fog', ()=> new Nodes.Fog.LinearFogNode(socket)],
      ['Linear Fog Fade', ()=> new Nodes.Fog.LinearFogFadeNode(socket)]
    ]),
  });
  const minimap = new MinimapPlugin<Schemes>();
  const reroutePlugin = new ReroutePlugin<Schemes>();

  editor.use(area);

  area.use(reactRender);

  area.use(connection);
  area.use(contextMenu);
  area.use(minimap);
  reactRender.use(reroutePlugin);

  connection.addPreset(ConnectionPresets.classic.setup());
  reactRender.addPreset(ReactPresets.classic.setup());
  reactRender.addPreset(ReactPresets.contextMenu.setup());
  reactRender.addPreset(ReactPresets.minimap.setup());
  reactRender.addPreset(
    ReactPresets.reroute.setup({
      contextMenu(id) {
        reroutePlugin.remove(id);
      },
      translate(id, dx, dy) {
        reroutePlugin.translate(id, dx, dy);
      },
      pointerdown(id) {
        reroutePlugin.unselect(id);
        reroutePlugin.select(id);
      },
    })
  );

  const a = new Nodes.Types.NumberNode(1,socket);
  const b = new Nodes.Types.NumberNode(1,socket);
  const add = new Nodes.Math.AddNode(socket);

  await editor.addNode(a);
  await editor.addNode(b);
  await editor.addNode(add);

  await editor.addConnection(new Connection(a, 'value', add, 'a'));
  await editor.addConnection(new Connection(b, 'value', add, 'b'));

  const arrange = new AutoArrangePlugin<Schemes>();

  arrange.addPreset(ArrangePresets.classic.setup());

  area.use(arrange);

  await arrange.layout();

  AreaExtensions.zoomAt(area, editor.getNodes());

  AreaExtensions.simpleNodesOrder(area);

  const selector = AreaExtensions.selector();
  const accumulating = AreaExtensions.accumulateOnCtrl();

  AreaExtensions.selectableNodes(area, selector, { accumulating });
  RerouteExtensions.selectablePins(reroutePlugin, selector, accumulating);

  editor.addPipe((context) => {
    if (
      context.type === 'connectioncreated' ||
      context.type === 'connectionremoved'
    ) {
    }
    return context;
  });

  return {
    destroy: () => area.destroy(),
  };
}
