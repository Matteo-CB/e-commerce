import { createSlice } from '@reduxjs/toolkit';
import { product } from './Data';

const initialState = {
  menuOpen: false,
  cartOpen: false,
  product: null,
  currentProduct: 0,
  cartQuantity: 0,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    },
    setProduct: (state) => {
      state.product = product;
    },
    addToCart: (state, action) => {
      state.cartQuantity += action.payload;
    },
    setCartQuantity: (state, action) => {
      state.cartQuantity = action.payload;
    },
  },
});

export const { toggleMenu, toggleCart, setProduct, addToCart, setCartQuantity } = menuSlice.actions;
export default menuSlice.reducer;
