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
    'decisão': {
        style: {
            backgroundColor: '#FF5733',
            color: '#FFF',
            border: '1px solid #FF5733',
            width: '100px',
            height: '100px',
            transform: 'rotate(45deg)',
        },
    },
    'acao': {
        style: {
            backgroundColor: '#33FF57',
            color: '#FFF',
            border: '1px solid #33FF57',
            borderRadius: '10%',
            width: '100px',
            height: '100px',
        }
    },
    'condicao': {
        style: {
            backgroundColor: '#5733FF',
            color: '#FFF',
            border: '1px solid #5733FF',
            borderRadius: '50%',
            width: '100px',
            height: '100px',
        }
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