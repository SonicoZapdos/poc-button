import { createSlice, current } from "@reduxjs/toolkit";
import { Edge, Node, ReactFlowJsonObject } from "@xyflow/react";
import { findNodeTypeByKey } from "../../pages/poc-flow/helpers/nodeTypes/nodeTypes";
import NodePrefab from "../../pages/poc-flow/prefabsItens/nodePrefab";
import NodeConfig from "../../entity/nodeConfig";

interface FlowComponents {
  nodes: Node[];
  edges: Edge[];
  instance: ReactFlowJsonObject<Node, Edge> | null,
  nodeId: number;
  edgeId: number;
  prefab: string;
}

const node: Node = NodePrefab({ x: 0, y: 0 }, "acao", "acao");

const initialState: FlowComponents = {
  nodes: [node],
  edges: [],
  instance: null,
  nodeId: 0,
  edgeId: 0,
  prefab: '',
};

const flowSlice = createSlice({
  name: "flow",
  initialState,
  reducers: {
    newNode: (state, action: { payload: Node }) => {
      action.payload.id = (state.nodeId + 1).toString();
      state.nodes.push(action.payload);
      state.nodeId++;
    },

    newNodeOfDrag: (
      state: any,
      action: { payload: { node: Node; edge: Edge } }
    ) => {
      action.payload.node.id = (state.nodeId + 1).toString();
      action.payload.edge.id = (state.edgeId + 1).toString();
      action.payload.edge.target = action.payload.node.id;
      console.log(action.payload.edge)
      state.nodes.push(action.payload.node);
      state.edges.push(action.payload.edge);
      state.nodeId++;
      state.edgeId++;
    },

    newEdge: (state, action: { payload: Edge }) => {
      action.payload.id = (state.edgeId + 1).toString();
      action.payload.type = "custom";
      state.edges.push(action.payload);
      state.edgeId++;
    },

    removeNode: (state, action: { payload: string }) => {
      state.nodes = state.nodes.filter((node) => node.id !== action.payload);
      removeEdgeByNodeId(action.payload);
    },

    removeEdge: (state, action: { payload: string }) => {
      state.edges = state.edges.filter((edge) => edge.id !== action.payload);
    },

    removeEdgeByNodeId: (state, action: { payload: string }) => {
      state.edges = state.edges.filter(
        (edge) =>
          edge.source !== action.payload && edge.target !== action.payload
      );
    },

    nodeChange: (state, action: { payload: Node[] }) => {
      state.nodes = action.payload;
    },

    nodeChangeStyle: (
      state,
      action: { payload: { id: string; key: string } }
    ) => {
      const node = current(state.nodes).find(
        (node) => node.id === action.payload.id
      );
      if (!node) {
        return;
      }
      const style = findNodeTypeByKey(action.payload.key);
      const nodeUpd = { ...node, style: style };
      const nodesUpd = current(state.nodes).map((node) =>
        node.id === action.payload.id ? nodeUpd : node
      );
      state.nodes = nodesUpd;
    },

    nodeChangeConfig: (
      state,
      action: { payload: { id: string; data: NodeConfig } }
    ) => {
      const nodeOld = current(state.nodes).find((node) => node.id === action.payload.id);
      if (!nodeOld) {
        return;
      }
      const nodeNew = { ...nodeOld, data: action.payload.data as {}};
      const nodesUpd = current(state.nodes).map((node) =>
        node.id === action.payload.id ? nodeNew : node
      );
      state.nodes = nodesUpd;
    },

    edgeChange: (state, action: { payload: Edge[] }) => {
      state.edges = action.payload;
    },

    prefabChange: (state: any, action: { payload: string }) => {
      state.prefab = action.payload;
    },

    saveChanges: (state, action: { payload: ReactFlowJsonObject<Node, Edge> | null}) => {
      console.log(action.payload);
      state.instance = action.payload;
    },

    saveState: (state) => {
      localStorage.setItem("flow", JSON.stringify(state.instance));
    },
  },
});

export const {
  newNode,
  newNodeOfDrag,
  removeNode,
  newEdge,
  removeEdge,
  removeEdgeByNodeId,
  nodeChange,
  nodeChangeStyle,
  nodeChangeConfig,
  edgeChange,
  prefabChange,
  saveChanges,
  saveState,
} = flowSlice.actions;

export default flowSlice.reducer;
