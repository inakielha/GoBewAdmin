import { createReducer } from "@reduxjs/toolkit";
import { GET_PRODUCTS, POST_IMAGE_ADMIN } from "./actions";


const initialState = {
    products: [],
    product: {},
    categories: []
}

export const adminReducer = createReducer(initialState, (builder) => {
    builder.addCase(GET_PRODUCTS.fulfilled, (state, action) => {
        state.products = action.payload.productList;
    })
    builder.addCase(POST_IMAGE_ADMIN.fulfilled, (state, action)=> {
        state.product = action.payload
    })
})