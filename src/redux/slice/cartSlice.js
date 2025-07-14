import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].quantity += action.payload.quantity;
            }
            else {
                state.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
        increaseQty: (state, action) => {
            const item = state.find(i => i.id === action.payload);
            if (item)
                item.quantity++;
        },
        decreaseQty: (state, action) => {
            const item = state.find(i => i.id === action.payload);
            if (item && item.quantity > 1)
                item.quantity--;
        },
        clearCart: () => []
    },
});
export const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
