import { IProduct } from "@/types/product";
import { PRODUCTS } from "@/utils/product";
import { createSlice } from "@reduxjs/toolkit";

interface ICartItem {
  product: IProduct;
  quantity: number;
}

interface ICartState {
  items: ICartItem[];
  product: IProduct[];
}

const initialState = {
  items: [],
  products: PRODUCTS,
};

const cartSlice = createSlice({
    initialState,
    name: "Cart",
    reducers:{}
});

export default cartSlice.reducer
