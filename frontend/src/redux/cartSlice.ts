import { createSlice } from '@reduxjs/toolkit';

interface CartState {
count: number;
products: any[];
total_amount: string;
total_item: string;
loading: boolean;
error: string;
}

const initialState: CartState = {
count: 0,
products: [],
total_amount: "",
total_item: "",
loading: false,
error: '',
};

const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {
addToCart(state, action) {
console.log('reduxer', action.payload.id);
const userString = localStorage.getItem('user');
const user = userString ? JSON.parse(userString) : null;

state.count += 1;
const itemIndex = state.products.findIndex(
(item) => item.id === action.payload.id,
);
if (itemIndex >= 0) {
state.products[itemIndex].cartQuantity += 1;
user &&
localStorage.setItem('cart', JSON.stringify(state.products));
} else {
const tempProduct = { ...action.payload, cartQuantity: 1 };
state.products.push(tempProduct);
user &&
localStorage.setItem('cart', JSON.stringify(state.products));
}
},
removeFromCart(state, action) {
state.count -= 1;
},
},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;