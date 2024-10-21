import { Edge } from "@xyflow/react";

function EdgePrefab(source: string, sourceHandle: string): Edge {
    let color = 'grey';

    switch (sourceHandle) {
        case 'f':
            color = 'red';
            break;
        case 't':
            color = 'lightgreen';
            break;
        case 'n':
            color = 'darkgrey';
            break;
        default:
            color = 'whitesmoke';
            break;
    }

    const edge: Edge = {
        id: '0',
        source: source,
        target: '0',
        sourceHandle: sourceHandle,
        style: { stroke: color, strokeWidth: 2 },
        type: 'custom',
    };

    return edge;
}

export default EdgePrefab;
