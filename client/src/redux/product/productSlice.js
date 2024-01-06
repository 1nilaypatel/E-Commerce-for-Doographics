import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

const productSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      
    },
    removeFromCart: (state, action) => {
      
    },
  },
});

export const { addToCart, removeFromCart } = productSlice.actions;

export default productSlice.reducer;
