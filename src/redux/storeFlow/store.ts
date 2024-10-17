import { configureStore } from "@reduxjs/toolkit";
import flowSlice from "./flowSlice";

const flowStore = configureStore({
    reducer: {
        flow: flowSlice,
    },
});

export default flowStore;