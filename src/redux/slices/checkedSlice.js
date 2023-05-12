import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    checked: false,
}

export const checkedSlice = createSlice({
    name: "isChecked",
    initialState,
    reducers: {
        setChecked: (state, action) => {
            state.name = action.payload
        }
    }
})

export const { setChecked } = checkedSlice.actions

export default checkedSlice.reducer