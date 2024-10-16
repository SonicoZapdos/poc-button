import { Node, Edge, ReactFlow, Background, Controls, applyNodeChanges, applyEdgeChanges, addEdge, Connection, useReactFlow, FinalConnectionState, ReactFlowProvider } from "@xyflow/react";
import { useDispatch, useSelector } from "react-redux";
import { edgeChange, nodeChange, newNodeOfDrag } from "../../redux/storeFlow/flow/flowSlice";
import { useCallback } from "react";
import CreateNode from "../flowComponents/flowNodes";

const FlowTable = () => {
    const nodes: Node[] = useSelector((state: any) => state.flow.nodes);
    const edges: Edge[] = useSelector((state: any) => state.flow.edges);
    const { screenToFlowPosition } = useReactFlow();
    const dispatch = useDispatch();

    const nodeTypes = {
        'acao': CreateNode,
    };

    const nodeOrigin: [number, number] = [0.5, 0];

    const onNodesChange = (changes: any) => {
        const updatedNodes = applyNodeChanges(changes, nodes);
        dispatch(nodeChange(updatedNodes));
    };

    const onEdgesChange = (changes: any) => {
        const updatedEdges = applyEdgeChanges(changes, edges);
        dispatch(edgeChange(updatedEdges));
    };

    const onConnect = (edge: Connection) => {
        const edgeUpd = addEdge(edge, edges);
        dispatch(edgeChange(edgeUpd));
    };

    const onConnectEnd = useCallback((event: any, connectionState: FinalConnectionState) => {
        // when a connection is dropped on the pane it's not valid
        if (!connectionState.isValid) {
            // we need to remove the wrapper bounds, in order to get the correct position
            const { clientX, clientY } = 'changedTouches' in event ? event.changedTouches[0] : event;
            const nodeNew: Node = {
                id: '0',
                position: screenToFlowPosition({
                    x: clientX,
                    y: clientY,
                }),
                type: 'acao',
                data: { label: `Node test`, isVisible: false, nameStyle: 'acao' },
                
            };
            const edgeNew: Edge = {
                id: '0',
                source: connectionState.fromNode?.id || '0',
                target: '0',
            };
            const payload = { node: nodeNew, edge: edgeNew };
            dispatch(newNodeOfDrag(payload));
        }
    }, [screenToFlowPosition],);

    return (
        <div className='flowTable'>
            <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} onConnectEnd={onConnectEnd} nodeOrigin={nodeOrigin} nodeTypes={nodeTypes} fitView>
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );

    // <div className='box'>
    //   <ButtonMutliClick></ButtonMutliClick>
    //   <ColorButton></ColorButton>
    //   <InputAparencia></InputAparencia>
    // </div>
}

export default () => {
    return (
        <ReactFlowProvider>
            <FlowTable />
        </ReactFlowProvider>
    );
};