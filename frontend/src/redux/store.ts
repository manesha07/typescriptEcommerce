import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./cartSlice"

export const store = configureStore({
  reducer: {
    /** @TODO Add your reducers here */
    cart: cartReducer
  },
});