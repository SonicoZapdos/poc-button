import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface VisibleState {
  value: boolean;
}

// Define the initial state using that type
const initialState: VisibleState = {
  value: false,
};

export const visibledSlice = createSlice({
  name: "visebledButton",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeColor: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeColor } = visibledSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.visibleButton.value;
