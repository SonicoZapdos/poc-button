import { configureStore } from "@reduxjs/toolkit";
import flowSlice from "./flowSlice";
import dragSlice from "./dragSlice";

const flowStore = configureStore({
    reducer: {
        flow: flowSlice,
        drag: dragSlice,
    },
});

export default flowStore;