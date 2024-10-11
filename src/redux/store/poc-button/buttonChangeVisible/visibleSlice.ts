import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface VisibleState {
  visible: boolean;
}

// Define the initial state using that type
const initialState: VisibleState = {
  visible: false,
};

export const visibledSlice = createSlice({
  name: "visebledButton",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeVisible: (state) => {
      state.visible = !state.visible;
    },
  },
});

export const { changeVisible } = visibledSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export default visibledSlice.reducer;
