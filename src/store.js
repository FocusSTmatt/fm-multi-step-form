import { configureStore } from "@reduxjs/toolkit";
import nameSliceReducer from "./redux/slices/nameSlice"
import cartSliceReducer from "./redux/slices/cartSlice"
import checkedSliceReducer from "./redux/slices/checkedSlice"




export const store = configureStore({
    reducer: {
       getMyName: nameSliceReducer,
       getCart: cartSliceReducer,
       isChecked: checkedSliceReducer,
    }

   
    
});