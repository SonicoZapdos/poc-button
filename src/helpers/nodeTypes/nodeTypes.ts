import { CSSProperties } from "react";

export interface NodePosition {
    x: number;
    y: number;
}

export interface NodeType {
    [key: string]: {
        style: CSSProperties;
    }
};


const nodeTypes: NodeType[] = [{
    'decisao': {
        style: {
            backgroundColor: '#FF5733',
            color: '#FFF',
            border: '1px solid #FF5733',
            transform: 'rotate(45deg)',
            aspectRatio: 1 / 1,
        },
    },
    'acao': {
        style: {
            backgroundColor: 'blue',
            color: '#FFF',
            border: '1px solid darkblue',
            borderRadius: '10%',
            aspectRatio: 3 / 2,
        },
    },
    'condicao': {
        style: {
            backgroundColor: '#5733FF',
            color: '#FFF',
            border: '1px solid #5733FF',
            borderRadius: '50%',
            aspectRatio: 1 / 1,
        },
    }
}];

export function findNodeTypeByKey(nodeTypes: NodeType[], key: string): CSSProperties | undefined {
    for (const nodeType of nodeTypes) {
        if (nodeType.hasOwnProperty(key)) {
            return nodeType[key].style;
        }
    }
    return undefined;
}

export default nodeTypes;