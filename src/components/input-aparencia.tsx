import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor, changeText } from "../redux/store/poc-button/buttonChangeColor/buttonX";

type cssStyle = {
   border: string;
   "border-radius": string;
   width: string;
   height: string;
};


const InputAparencia: React.FC = () => {
   const [text, setText] = React.useState("");
   const formStyle = useSelector((state: any) => state.buttonY.aparencia);
   const dispatch = useDispatch();
   const [style, setStyle] = useState({} as cssStyle);

   useEffect(() => {
      setStyle({
         border: formStyle.border,
         "border-radius": formStyle.borderRadius,
         width: formStyle.width,
         height: formStyle.height
      });
   }, [formStyle]);

   return (
      <div className="input-aparencia" style={style}>
         <input type="text" placeholder="Digite o texto do botão!!!" value={text} onChange={(e) => setText(e.target.value)} />
         <button type="submit" onClick={() => {
            dispatch(changeText(text)); 
            dispatch(changeColor());
            }}>Ok</button>
      </div>
   );
};

export default InputAparencia;