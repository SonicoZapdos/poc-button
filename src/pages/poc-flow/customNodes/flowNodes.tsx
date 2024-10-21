import { NodeToolbar } from "@xyflow/react";
import { useDispatch } from "react-redux";
import { nodeChangeConfig, removeNode } from "../../../redux/storeFlow/flowSlice";
import './customNodes.css';
import NodeConfig from "../../../entity/nodeConfig";
import Pointers from "./node-component/pointersFlow";

interface CreateNodeProps {
    id: string;
    data: NodeConfig;
};

function CreateNode({ id, data }: CreateNodeProps) {
    const dispatch = useDispatch();

    return (
        <>
            <Pointers data={data} />
            <NodeToolbar className="toolbar-button-node">
                <>
                    <button className="button-node" onClick={() => dispatch(nodeChangeConfig({id , data: {...data, condition: 'test', connectionEnd: undefined}}))}>
                        C
                    </button>
                    <button className="button-node" onClick={() => dispatch(nodeChangeConfig({id , data: {...data, condition: undefined, connectionEnd: true}}))}>
                        NR
                    </button>
                    <button className="button-node" onClick={() => dispatch(nodeChangeConfig({id , data: {...data, condition: undefined, connectionEnd: undefined}}))}>
                        D
                    </button>
                    <button className="button-node" onClick={() => dispatch(removeNode(id))}>
                        <span className="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                </>
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