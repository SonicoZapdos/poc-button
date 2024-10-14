import { configureStore } from "@reduxjs/toolkit";
import flowSlice from "./flow/flowSlice";

const flowStore = configureStore({
    reducer: {
        flow: flowSlice,
    },
});

export default flowStore;