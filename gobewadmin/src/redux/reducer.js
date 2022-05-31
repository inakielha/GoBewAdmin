import { createReducer } from "@reduxjs/toolkit";
<<<<<<< HEAD
import { GET_PRODUCTS, POST_IMAGE_ADMIN } from "./actions";
=======
import { GET_PRODUCTS, CREATE_PRODUCT, CREATE_CATEGORY, GET_CATEGORIES_ADMIN } from "./actions";
>>>>>>> 844a7ee205a655c144f7cd66533146d66e559796


const initialState = {
    products: [],
    product: {},
    categories: []
}

export const adminReducer = createReducer(initialState, (builder) => {
    builder.addCase(GET_PRODUCTS.fulfilled, (state, action) => {
        state.products = action.payload.productList;
    })
<<<<<<< HEAD
    builder.addCase(POST_IMAGE_ADMIN.fulfilled, (state, action)=> {
        state.product = action.payload
    })
=======
    builder.addCase(CREATE_PRODUCT.fulfilled, (state, action) => {
        state.product = action.payload
    })
    builder.addCase(CREATE_CATEGORY, (state, action) => {
        state.categories = action.payload.data
    })
    builder.addCase(GET_CATEGORIES_ADMIN.fulfilled, (state, action) => {
        state.categories = action.payload
    })
>>>>>>> 844a7ee205a655c144f7cd66533146d66e559796
})