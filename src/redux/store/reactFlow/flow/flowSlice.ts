import { createSlice } from "@reduxjs/toolkit";
import { EdgeTypes, NodeTypes } from "@xyflow/react";

interface FlowComponents {
    nodes: NodeTypes[];
    edges: EdgeTypes[];
}

const initialState: FlowComponents = {
    nodes: [],
    edges: [],
};

export const flowSlice = createSlice({
    name: "flow",
    initialState,
    reducers: {
        addNode: (state, action: { payload: NodeTypes }) => {
            state.nodes.push(action.payload);
        },
        addEdge: (state, action: { payload: EdgeTypes }) => {
            state.edges.push(action.payload);
        },
        removeNode: (state, action: { payload: number }) => {
            state.nodes = state.nodes.filter((node) => node.id === action.payload.toString());        }
    },
});

export const { addNode, addEdge } = flowSlice.actions;

export default flowSlice.reducer;