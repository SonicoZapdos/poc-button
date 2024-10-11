import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ButtonXState {
  cor: string;
  text: string;
}

// Define the initial state using that type
const initialState: ButtonXState = {
  cor: "#FFFFFF",
  text: "Change Me",
};

export const buttonXSlice = createSlice({
  name: "buttonX",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeColor: (state) => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      console.log(color);
      state.cor = color;
    },
    changeText: (state, name: { payload: string }) => {
      state.text = name.payload;
    },
  }
});

export const { changeColor, changeText } = buttonXSlice.actions;

export default buttonXSlice.reducer;
