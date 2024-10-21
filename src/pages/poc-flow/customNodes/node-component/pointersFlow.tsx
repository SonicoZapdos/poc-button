import { Handle, Position } from "@xyflow/react";
import NodeConfig from "../../../../entity/nodeConfig";

interface PointersProps {
    data: NodeConfig;
};

function Pointers({ data }: PointersProps) {
    return (
        <>
            <Handle type="target" position={Position.Top} />
            {data.condition ?
                <>
                    <Handle type="source" id="f" position={Position.Left} style={{ backgroundColor: 'red' }} />
                    <Handle type="source" id="t" position={Position.Right} style={{ backgroundColor: 'lightgreen' }} />
                </>
                :
                data.connectionEnd ?
                    <Handle type="source" id="n" position={Position.Bottom} style={{ backgroundColor: "darkgrey" }} />
                    :
                    <Handle type="source" id='d' position={Position.Bottom} style={{ backgroundColor: 'black' }} />
            }
        </>
    );
};

export default Pointers;