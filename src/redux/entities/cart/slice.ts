import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  quantity?: number;
};

type CartState = {
  cart: CartItem[];
};

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  selectors: {
    selectCart: (state) => state.cart,
    selectCartItem: (state, id) => state.cart.find((item) => item.id === id),
  },
  reducers: {
    addToCart(state, { payload }: PayloadAction<CartItem>) {
      const { id } = payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity) {
          existingItem.quantity += 1;
        }
      } else {
        state.cart.push({ id, quantity: 1 });
      }
    },
    removeFromCart(state, { payload }: PayloadAction<CartItem>) {
      const { id } = payload;
      const findItem = state.cart.find((item) => item.id === id);

      if (findItem) {
        if (findItem.quantity === 1) {
          state.cart = state.cart.filter((item) => item.id !== id);
        } else {
          if (findItem.quantity) {
            findItem.quantity -= 1;
          }
        }
      }
    },
    updateCartItem(state, { payload }: PayloadAction<CartItem>) {
      const { id, quantity } = payload;
      const findItem = state.cart.find((item) => item.id === id);

      if (findItem) {
        if (quantity === 0) {
          state.cart = state.cart.filter((item) => item.id !== id);
        } else {
          if (findItem.quantity) {
            findItem.quantity = quantity;
          }
        }
      }
    },
  },
});

export const { selectCart, selectCartItem } = cartSlice.selectors;
export const { addToCart, removeFromCart, updateCartItem } = cartSlice.actions;
