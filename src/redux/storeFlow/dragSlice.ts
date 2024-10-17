import { createSlice } from "@reduxjs/toolkit";

interface DragProps {
    type: string;
}

const initialState: DragProps = {
    type: '',
}

const DragSlice = createSlice({
    name: 'drag',
    initialState,
    reducers: {
        setType: (state: any, action: { payload: string }) => {
            state.type = action.payload;
        },
    },
});

export const { setType } = DragSlice.actions;

export default DragSlice.reducer;