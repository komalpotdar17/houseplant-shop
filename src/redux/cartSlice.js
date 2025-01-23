import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (!item) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        item.quantity += 1;
      }
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
    incrementItem(state, action) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },
    decrementItem(state, action) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      }
    },
    deleteItem(state, action) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items = state.items.filter(i => i.id !== action.payload.id);
      }
    },
  },
});

export const { addToCart, incrementItem, decrementItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
