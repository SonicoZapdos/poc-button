import { createSlice, current } from "@reduxjs/toolkit";
import { Edge, Node } from "@xyflow/react";
import { findNodeTypeByKey } from "../../pages/poc-flow/helpers/nodeTypes/nodeTypes";
import NodePrefab from "../../pages/poc-flow/prefabsItens/nodePrefab";

interface FlowComponents {
  nodes: Node[];
  edges: Edge[];
  nodeId: number;
  edgeId: number;
}

const node: Node = NodePrefab({ x: 0, y: 0 }, "acao", "acao");

const initialState: FlowComponents = {
  nodes: [node],
  edges: [],
  nodeId: 0,
  edgeId: 0,
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

    edgeChange: (state, action: { payload: Edge[] }) => {
      state.edges = action.payload;
    },

    saveState: (state) => {},
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
  edgeChange,
  saveState,
} = flowSlice.actions;

export default flowSlice.reducer;
