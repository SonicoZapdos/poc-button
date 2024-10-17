import { CoordinateExtent, Position, XYPosition } from "@xyflow/react";
import { findNodeTypeByKey } from "../helpers/nodeTypes/nodeTypes";
import { useSelector } from "react-redux";

export interface Node {
    id: string;
    data: {
        label: string;
        isVisible: boolean;
        nameStyle: string;
    };
    position: XYPosition;
    origin?: [number, number];
    ariaLabel?: string;
    type?: string;
    style?: object;
    className?: string;
    draggable?: boolean;
    hidden?: boolean;
    connectable?: boolean;
    sourcePosition?: Position;
    targetPosition?: Position;
    deletable?: boolean;
    selectable?: boolean;
    dragging?: boolean;
    dragHandle?: string;
    expandParent?: boolean;
    extent?: "parent" | CoordinateExtent;
    focusable?: boolean;
    height?: number;
    handles?: any[];
    initialHeight?: number;
    initialWidth?: number;
    measured?: object;
    parentId?: string;
    resizing?: boolean;
    selected?: boolean;
    width?: number;
    zIndex?: number;
}

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
