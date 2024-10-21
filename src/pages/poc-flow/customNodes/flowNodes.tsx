import { Handle, Node, NodeToolbar, Position } from "@xyflow/react";
import { useDispatch } from "react-redux";
import { nodeChangeStyle, removeNode } from "../../../redux/storeFlow/flowSlice";
import nodeTypes from "../helpers/nodeTypes/nodeTypes";
import './customNodes.css';
import NodeConfig from "../../../entity/nodeConfig";

interface CreateNodeProps {
    id: string;
    data: NodeConfig;
};

function CreateNode({ id, data }: CreateNodeProps) {
    const dispatch = useDispatch();

    return (
        <>
            <div>
            <Handle
                type="target"
                position={Position.Top}
                style={{ background: 'black' }}
            />
            <Handle
                type="source"
                position={Position.Bottom}
                id="a"
                style={{ background: 'black' }}
            />
            </div>
            <NodeToolbar className="toolbar-button-node">
                {nodeTypes.map((nodeType) => {
                    return Object.keys(nodeType).map((key) => (
                        <button className="button-node" key={key} onClick={() => dispatch(nodeChangeStyle({ id, key }))}>
                            <div style={nodeType[key].style}></div>
                        </button>
                    ));
                })}
                <button className="button-node" onClick={() => dispatch(removeNode(id))}>
                    <span className="material-symbols-outlined">
                        delete
                    </span>
                </button>
            </NodeToolbar >
            <div className="div-node">
                <div className="div-node-content">
                    {(data?.label as string).toString()}
                </div>
            </div>
        </>
    );
}


export default CreateNode;