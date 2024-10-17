import { useDispatch } from "react-redux";
import nodeTypes from "../helpers/nodeTypes/nodeTypes";
import { setType } from "../../../redux/storeFlow/dragSlice";

const SideBarAddNodes = () => {
    const dispatch = useDispatch();

    const onDragStart = (event: any, nodeType: string) => {
        dispatch(setType(nodeType));
        event.dataTransfer.effectAllowed = 'move';
    };
    return (
        <aside className="side-bar-buttons">
            {nodeTypes.map((nodeType) => {
                return Object.keys(nodeType).map((key) => (
                    <button className="side-button-node" key={key} onDragStart={(event) => onDragStart(event, key)} draggable>
                        <div style={nodeType[key].style}></div>
                    </button>
                ));
            })}
        </aside>
    );
};

export default SideBarAddNodes;