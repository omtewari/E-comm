import { createSlice } from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit'

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartItem[],
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state[index].quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      return state.filter(item => item.id !== action.payload);
    },
    increaseQty: (state, action: PayloadAction<number>) => {
      const item = state.find(i => i.id === action.payload);
      if (item) item.quantity++;
    },
    decreaseQty: (state, action: PayloadAction<number>) => {
      const item = state.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
    },
    clearCart: () => []
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
