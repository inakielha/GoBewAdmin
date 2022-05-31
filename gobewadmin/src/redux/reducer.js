import { createReducer } from "@reduxjs/toolkit";
import { GET_PRODUCTS } from "./actions";


const initialState = {
    products: [],
    product: {},
    categories: []
}

export const adminReducer = createReducer(initialState, (builder) => {
    builder.addCase(GET_PRODUCTS.fulfilled, (state, action) => {
        state.products = action.payload.productList;
    })
})