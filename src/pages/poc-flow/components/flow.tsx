import { Edge, Node, ReactFlow, Background, Controls, applyNodeChanges, applyEdgeChanges, addEdge, Connection, useReactFlow, FinalConnectionState, ReactFlowInstance, Panel } from "@xyflow/react";
import { useDispatch, useSelector } from "react-redux";
import { edgeChange, nodeChange, newNodeOfDrag, newNode, saveChanges, saveState } from "../../../redux/storeFlow/flowSlice";
import { useCallback, useState } from "react";
import CreateNode from "../customNodes/flowNodes";
import CustomEdge from "../customEdges/flowEdges";
import NodePrefab from "../prefabsItens/nodePrefab";
import SideBarAddNodes from "../sideBar/sideBarAddNodes";
import ModalResult from "./modalResult";

const FlowTable = () => {
    const nodes: Node[] = useSelector((state: any) => state.flow.nodes);
    const edges: Edge[] = useSelector((state: any) => state.flow.edges);
    const prefab = useSelector((state: any) => state.flow.prefab);
    const [instance, setInstance] = useState<ReactFlowInstance<Node, Edge> | null>(null);
    const [visible, setVisible] = useState(false);
    const { screenToFlowPosition } = useReactFlow();
    const dispatch = useDispatch();

    const nodeTypes = {
        'acao': CreateNode,
    };

    const edgeTypes = {
        'custom': CustomEdge,
    }

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
        edgeUpd[edgeUpd.length - 1].id = (Number(edgeUpd[edgeUpd.length - 1].id) + 1).toString();
        edgeUpd[edgeUpd.length - 1].type = 'custom';
        dispatch(edgeChange(edgeUpd));
    };

    const onConnectEnd = useCallback((event: any, connectionState: FinalConnectionState) => {
        // when a connection is dropped on the pane it's not valid
        if (!connectionState.isValid) {
            // we need to remove the wrapper bounds, in order to get the correct position
            const { clientX, clientY } = 'changedTouches' in event ? event.changedTouches[0] : event;
            const position = screenToFlowPosition({ x: clientX, y: clientY });
            const nodeNew: Node = NodePrefab(position, 'acao', 'acao');
            const edgeNew: Edge = {
                id: '0',
                source: connectionState.fromNode?.id || '0',
                target: '0',
                type: 'custom',
            };
            const payload = { node: nodeNew, edge: edgeNew };
            dispatch(newNodeOfDrag(payload));
        }
    }, [screenToFlowPosition],);

    const onDragOver = useCallback((event: any) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []
    );

    const onDrop = useCallback((event: any) => {
        event.preventDefault();

        // check if the dropped element is valid
        if (!prefab) {
            return;
        }

        const position = screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
        });
        const nodeNew: Node = NodePrefab(position, 'acao', prefab);

        dispatch(newNode(nodeNew));
    }, [screenToFlowPosition, prefab]);

    const onSaveChanges = () => {
        if (instance) {
            dispatch(saveChanges(instance.toObject()));
        }
    };

    const exportInstance = () => {
        dispatch(saveState());
        setVisible(true);
    }

    return (
        <>
            <div className='flowTable'>
                <SideBarAddNodes />
                <ReactFlow
                    className="reactFlow"
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onConnectEnd={onConnectEnd}
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                    onInit={setInstance}
                    fitView
                    fitViewOptions={{ padding: 2 }}
                >
                    <Background />
                    <Controls />
                    <Panel className="flow-panel" position="top-right">
                        <button onClick={onSaveChanges}>Save Alterations</button>
                        <button onClick={exportInstance}>Export to txt</button>
                    </Panel>
                </ReactFlow>
                {visible && <ModalResult setVisible={setVisible} />}
            </div>
        </>
    );

    // <div className='box'>
    //   <ButtonMutliClick></ButtonMutliClick>
    //   <ColorButton></ColorButton>
    //   <InputAparencia></InputAparencia>
    // </div>
}

export default FlowTable;
