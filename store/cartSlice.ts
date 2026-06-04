import { IProduct } from "@/types/product";
import { PRODUCTS } from "@/utils/product";
import { createSlice } from "@reduxjs/toolkit";

interface ICartItem {
  product: IProduct;
  quantity: number;
}

interface ICartState {
  items: ICartItem[];
  products: IProduct[];
}

const initialState: ICartState = {
  items: [],
  products: PRODUCTS,
};

const cartSlice = createSlice({
  initialState,
  name: "Cart",
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity = 1 } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === product.id,
      );

      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity += quantity;
      } else {
        state.items.push({ product, quantity });
      }
    },

    removeFromCart: (state, action) => {
      const { productId, quantity = 1 } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === productId,
      );
      if (existingItemIndex === -1) return;
      
    },
  },
});

export default cartSlice.reducer;
