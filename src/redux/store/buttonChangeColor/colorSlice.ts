import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface ColorState {
  value: string;
}

// Define the initial state using that type
const initialState: ColorState = {
  value: "#FFFFFF",
};

export const counterSlice = createSlice({
  name: "coloredButton",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeColor: (state) => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      state.value = color;
    },
  },
});

export const { changeColor } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;
