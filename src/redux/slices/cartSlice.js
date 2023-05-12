import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dollarsMonth: "",
    dollarsYear: "",
}

export const cartSlice = createSlice({
    name: "getCart",
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.dollarsMonth = action.payload
        }
    }
})

export const { setCart } = cartSlice.actions

export default cartSlice.reducer