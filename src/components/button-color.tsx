import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeVisible } from '../redux/store/poc-button/buttonChangeVisible/visibleSlice';

const ColorButton: React.FC = () => {
  const cor  = useSelector((state: any) => state.buttonX.cor);
  const text = useSelector((state: any) => state.buttonX.text);
  const dispatch = useDispatch();

  return (
    <button className="colorButton" onClick={() => dispatch(changeVisible())} style={{ backgroundColor: cor }}>
      {text}
    </button>
  );
};

export default ColorButton;
