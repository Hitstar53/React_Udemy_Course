import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import uiSlice from './UISlice';

const store = configureStore({
    reducer: { cart: cartSlice, ui: uiSlice }
});

export default store;