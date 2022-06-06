import { createReducer } from "@reduxjs/toolkit";
import { GET_PRODUCTS, CREATE_PRODUCT, CREATE_CATEGORY, GET_CATEGORIES_ADMIN, POST_IMAGE_ADMIN, ORDER_PRODUCT, SEARCH_PRODUCT, POST_FAQS, GET_FAQS, GET_USERS, PUT_USERS, PUT_PRODUCT, PUT_USER_ACTIVE, GET_PRODUCT_BY_ID, PUT_PRODUCT_ACTIVE, PUT_FAQS } from "./actions";




const initialState = {
    products: [],
    product: {},
    categories: [],
    faqs: [],
    users: [],
    user: {}
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
    builder.addCase(GET_USERS.fulfilled, (state, action) => {
        state.users = action.payload.users
    })
    builder.addCase(PUT_USERS.fulfilled, (state, action) => {
        state.user = action.payload
    })
    builder.addCase(PUT_USER_ACTIVE.fulfilled, (state, action) => {
        state.user = action.payload.user
    })
    builder.addCase(GET_FAQS.fulfilled, (state, action) => {
        state.faqs = action.payload
    })
    builder.addCase(POST_FAQS.fulfilled, (state, action) => {
        state.faqs = action.payload
    })
    builder.addCase(PUT_FAQS.fulfilled, (state, action) => {
        state.faqs = action.payload
    })
    builder.addCase(PUT_PRODUCT.fulfilled, (state, action) => {
        state.product = action.payload
    })
    builder.addCase(GET_PRODUCT_BY_ID.fulfilled, (state, action) => {
        state.product = action.payload.productList
    })
    builder.addCase(PUT_PRODUCT_ACTIVE.fulfilled, (state, action) => {
        state.product = action.payload.product
    })
})