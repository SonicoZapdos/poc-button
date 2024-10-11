import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAparencia, changeTitulo } from "../redux/store/poc-button/buttonChangeName/buttonY";

const ButtonMutliClick: React.FC = () => {
    const visible: boolean = useSelector((state: any) => state.visibleButton.visible);

    return (
        (visible && <button onClick={handlerMultiClick}>Click Me</button>)
    );
};

function handlerMultiClick(event: any) {
    const dispatch = useDispatch();

    console.log(event.detail)

    // switch (event.detail) {
    //     case 1:
    //         dispatch(changeAparencia());
    //         break;
    //     case 2:
    //         console.log("Hello World")
    //         break;
    //     case 3:
    //         dispatch(changeTitulo(-1));
    //         break;
    // }
};

export default ButtonMutliClick;
