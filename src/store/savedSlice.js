import { createSlice } from "@reduxjs/toolkit";

export const savedSlice = createSlice({
    name: 'saved',
    initialState: {
        images: []
    },
    reducers:{
        addSaved: (state, action) => {
            state.images.push(action.payload)
        }
    }
})

export const {addSaved} = savedSlice.actions;
export default savedSlice.reducer;