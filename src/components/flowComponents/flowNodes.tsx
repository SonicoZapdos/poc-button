import { Handle, NodeToolbar, Position } from "@xyflow/react";
import nodeTypes, { findNodeTypeByKey } from "../../helpers/nodeTypes/nodeTypes";
import { CSSProperties } from "react";
import { nodeChangeStyle } from "../../redux/storeFlow/flow/flowSlice";
import { useDispatch } from "react-redux";

interface NodeContent {
    id: string,
    data: {
        label: string,
        isVisible: boolean,
    },
    type: string,
}

function CreateNode({ id, data, type }: NodeContent) {
    const dispatch = useDispatch();

    const nodePrefab: CSSProperties | undefined = findNodeTypeByKey(type);
    if (!nodePrefab) {
        return null;
    }

    return (
        <>
            <Handle
                type="target"
                position={Position.Top}
                style={{ background: 'black' }}
            />
            <NodeToolbar className="toolbar-button-node">
                {nodeTypes.map((nodeType) => {
                    return Object.keys(nodeType).map((key) => (
                        <button className="button-node" key={key} onClick={() => dispatch(nodeChangeStyle({id, key})) }>
                            <div style={nodeType[key].style}></div>
                        </button>
                    ));
                })}
            </NodeToolbar >
            <div className="div-node">
                {(data?.label as string).toString()}
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                id="a"
                style={{ background: 'black' }}
            />
        </>
    );
}


export default CreateNode;