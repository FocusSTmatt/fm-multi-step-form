import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    checkedState: "",
}

export const checkedSlice = createSlice({
    name: "getChecked",
    initialState,
    reducers: {
        setSliceChecked: (state, action) => {
            state.name = action.payload
        }
    }
})

export const { setSliceChecked } = checkedSlice.actions

export default checkedSlice.reducer