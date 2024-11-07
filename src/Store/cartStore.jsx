import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice"
const cartStore = configureStore({
    reducer:{
        cart:cartReducer,
        
    }
});
export default cartStore;