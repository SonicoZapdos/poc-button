import { Handle, NodeToolbar, Position } from "@xyflow/react";
import nodeTypes, { findNodeTypeByKey } from "../../helpers/nodeTypes/nodeTypes";
import { CSSProperties } from "react";

interface NodeContent {
    data: { label: string },
    type: string,
}

function CreateNode({ data, type }: NodeContent) {
    const nodePrefab: CSSProperties = findNodeTypeByKey(nodeTypes, type) || {};

    return (
        <>
        <Handle
            type="target"
            position={Position.Top}
            style={{ background: 'black' }}
        />
        <NodeToolbar>
            {/* {nodeTypes.components.map((nodeType) => {
                return <button key={nodeType.toString()} style={nodeType}></button>;
            })} */}
        </NodeToolbar>
            <div style={nodePrefab}>
                {(data?.label as string).toString()}
            </div>
        <Handle
            type="source"
            position={Position.Bottom}
            id="a"
            style={{ background: 'blue' }}
            />
        </>
    );
}

export default CreateNode;