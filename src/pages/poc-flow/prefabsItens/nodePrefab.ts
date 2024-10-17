import { Node, XYPosition } from "@xyflow/react";
import { findNodeTypeByKey } from "../helpers/nodeTypes/nodeTypes";

function NodePrefab(position: XYPosition, type: string | null, nameStyle: string | null): Node {

    if (!type) {
        type = 'acao';
    }

    if (!nameStyle) {
        nameStyle = 'acao';
    }

    const style = findNodeTypeByKey(nameStyle);

    const node: Node = {
        id: '0',
        style: style,
        position: {
            x: position.x,
            y: position.y,
        },
        type: 'acao',
        data: { label: `Node test`, isVisible: false, nameStyle: 'acao' },
        origin: [0.5, 0],
    };

    return node;
}

export default NodePrefab;
