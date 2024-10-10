import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface ColorButtonProps {
    dispatchTypeThis: string;
    dispatchTypeTarget: string;
}

const ColorButton: React.FC<ColorButtonProps> = ({ dispatchTypeThis, dispatchTypeTarget }) => {
  const dispatch = useDispatch();
  const color = useSelector((state: any) => state[dispatchTypeThis]);

  const changeColor = () => {
    dispatch({ type: dispatchTypeTarget });
  };

  useEffect(() => {
    dispatch({ type: dispatchTypeThis });
  }, [dispatch, dispatchTypeThis ]);

  return (
    <button className="colorButton" onClick={changeColor} style={{ backgroundColor: color }}>
      Click Here
    </button>
  );
};

export default ColorButton;
