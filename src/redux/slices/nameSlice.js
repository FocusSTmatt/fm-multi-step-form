import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "matt"
}

export const nameSlice = createSlice({
    name: "getMyName",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        }
    }
})

export const { setName } = nameSlice.actions

export default nameSlice.reducer