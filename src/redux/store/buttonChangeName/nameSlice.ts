import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface NameState {
  value: string;
}

// Define the initial state using that type
const initialState: NameState = {
  value: "Change Me",
};

export const counterSlice = createSlice({
  name: "namedButton",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeColor: (state, name: PayloadAction<string>) => {
      state.value = name.payload;
    },
  },
});

export const { changeColor } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.namedButton.value;

export default counterSlice.reducer;
