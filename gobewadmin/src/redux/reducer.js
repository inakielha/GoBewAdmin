import { createReducer } from "@reduxjs/toolkit";
import { GET_PRODUCTS, CREATE_PRODUCT, CREATE_CATEGORY, GET_CATEGORIES_ADMIN, POST_IMAGE_ADMIN, ORDER_PRODUCT, SEARCH_PRODUCT } from "./actions";
    // , USER_LOGIN, CHECK_LOGIN, USER_LOGOUT
const initialState = {
    products: [],
    product: {},
    categories: []
}

export const adminReducer = createReducer(initialState, (builder) => {
    builder.addCase(GET_PRODUCTS.fulfilled, (state, action) => {
        state.products = action.payload.productList;
    })
    builder.addCase(CREATE_PRODUCT.fulfilled, (state, action) => {
        state.product = action.payload
    })
    builder.addCase(CREATE_CATEGORY, (state, action) => {
        state.categories = action.payload.data
    })
    builder.addCase(GET_CATEGORIES_ADMIN.fulfilled, (state, action) => {
        state.categories = action.payload
    })
    builder.addCase(POST_IMAGE_ADMIN.fulfilled, (state, action)=> {
        state.product.data.product.images = action.payload.data.image
    })
    builder.addCase(ORDER_PRODUCT, (state, action)=>{
        state.products = action.payload
    })
    builder.addCase(SEARCH_PRODUCT.fulfilled, (state, action) =>{
        state.products = action.payload
    })
})