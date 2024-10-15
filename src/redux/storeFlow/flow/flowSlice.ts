import { createSlice, current } from "@reduxjs/toolkit";
import { applyNodeChanges, Edge, Node } from "@xyflow/react";

interface FlowComponents {
    nodes: Node[];
    edges: Edge[];
}

const initialState: FlowComponents = {
    nodes: [{
        id: '0',
        type: 'acao',
        data: { label: 'Node' },
        position: { x: 0, y: 50 },
    },],
    edges: [],
};

const flowSlice = createSlice({
    name: "flow",
    initialState,
    reducers: {
        newNode: (state, action: { payload: Node }) => {
            if (state.nodes.length !== 0) {
                const id = Number.parseInt(state.nodes[state.nodes.length - 1]?.id) + 1 || 0;
                if (id !== 0) {
                    const node: Node = { id: id.toString(), data: action.payload.data, position: action.payload.position };
                    state.nodes.push(node);
                }
            }
            else {
                const node: Node = { id: '1', data: action.payload.data, position: action.payload.position };
                state.nodes.push(node);
            }
        },
        newNodeOfDrag: (state: any, action: { payload: { node: Node, edge: Edge } }) => {
            const nodeId = Number.parseInt(state.nodes[state.nodes.length - 1]?.id) + 1 || 0;
            const edgeId = Number.parseInt(state.edges[state.edges.length - 1]?.id) + 1 || 1;
            if (nodeId !== 0 && edgeId !== 0) {
                const nodeNew: Node = { id: nodeId.toString(), type: 'acao', data: action.payload.node.data, position: action.payload.node.position };
                state.nodes.push(nodeNew);
                const edgeNew: Edge = { id: edgeId.toString(), source: action.payload.edge.source, target: nodeNew.id };
                state.edges.push(edgeNew);
            }
        },
        newEdge: (state, action: { payload: Edge }) => {
            state.edges.push(action.payload);
        },
        removeNode: (state, action: { payload: string }) => {
            state.nodes = state.nodes.filter((node) => node.id !== action.payload);
            removeEdgeByNodeId(action.payload);
        },
        removeEdge: (state, action: { payload: string }) => {
            state.edges = state.edges.filter((edge) => edge.id !== action.payload);
        },
        removeEdgeByNodeId: (state, action: { payload: string }) => {
            state.edges = state.edges.filter((edge) => edge.source !== action.payload && edge.target !== action.payload);
        },
        nodeChange: (state, action: { payload: Node[] }) => {
            state.nodes = action.payload;
        },
        nodeChangeStyle: (state, action: { payload: { id: string, key: string } }) => {
            const node = current(state.nodes).find((node) => node.id === action.payload.id);
            if (!node) {
                return;
            }
            const nodeUpd = { ...node, type: action.payload.key };
            const nodesUpd = current(state.nodes).map((node) => (node.id === action.payload.id ? nodeUpd : node));
            state.nodes = nodesUpd;
        },
        edgeChange: (state, action: { payload: Edge[] }) => {
            state.edges = action.payload;
        },
        saveState: (state) => { },
    },
});

export const { newNode, newNodeOfDrag, removeNode, newEdge, removeEdge, removeEdgeByNodeId, nodeChange, nodeChangeStyle, edgeChange, saveState } = flowSlice.actions;

export default flowSlice.reducer;