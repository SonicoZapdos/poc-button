import { createSlice } from "@reduxjs/toolkit";
import EFormBorderStyle from "../../../../helpers/enum/aparencia";

// Define a type for the slice state
interface ButtonYState {
  titulo: number;
  aparencia: number;
}

// Define the initial state using that type
const initialState: ButtonYState = {
  titulo: 0,
  aparencia: EFormBorderStyle.Quadrado,
};

export const buttonYSlice = createSlice({
  name: "buttonY",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeTitulo: (state, titulo: { payload: number}) => {
      state.titulo += titulo.payload;
    },
    changeAparencia: (state) => {
      state.aparencia++;
    },
  },
});

export const { changeTitulo, changeAparencia } = buttonYSlice.actions;

export default buttonYSlice.reducer;
