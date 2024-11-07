import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
        const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
        
        if (existingItemIndex >= 0) {
          
          state.items[existingItemIndex].quantity += 1;
        } else {

          state.items.push({ ...action.payload, quantity: 1 });
        }
      },
      
      
    removeItem: (state,action) => {
        const id = action.payload;
        state.items = state.items.filter(item => item.id !== id);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    updateQuantity: (state, action) => {
        const { id, quantity } = action.payload;
        const itemIndex = state.items.findIndex((item) => item.id === id);
        if (itemIndex >= 0) {
          state.items[itemIndex].quantity = quantity;
        }
      }
  },
});

export const {addItem,removeItem,clearCart,updateQuantity}=cartSlice.actions;
export default cartSlice.reducer;