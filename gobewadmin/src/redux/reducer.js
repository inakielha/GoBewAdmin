import { createReducer } from "@reduxjs/toolkit";
import { GET_PRODUCTS, CREATE_PRODUCT, CREATE_CATEGORY, GET_CATEGORIES_ADMIN, POST_IMAGE_ADMIN, ORDER_PRODUCT, SEARCH_PRODUCT, USER_LOGIN, CHECK_LOGIN, USER_LOGOUT, POST_FAQS, GET_FAQS } from "./actions";

const initialState = {
    products: [],
    product: {},
    categories: [],
    faqs: [],
    auth: {
        ok: true,
        userId:'',
        userFirstName: '',
        userIsAdmin: false,
        userIsSuperAdmin: false,
        msg: ''
    }
}

export const adminReducer = createReducer(initialState, (builder) => {
    builder.addCase(USER_LOGIN.fulfilled, (state, action) => {
        state.auth.userId = action.payload.userId;
        state.auth.userFirstName = action.payload.userFirstName;
        state.auth.userIsAdmin = action.payload.userIsAdmin;
        state.auth.userIsSuperAdmin = action.payload.userIsSuperAdmin;
        state.auth.ok = action.payload.ok;
        state.auth.msg = action.payload.msg;
    })
    
    builder.addCase(CHECK_LOGIN.fulfilled, (state, action) => {
        state.auth.userId = action.payload.userId;
        state.auth.userFirstName = action.payload.userFirstName;
        state.auth.userIsAdmin = action.payload.userIsAdmin;
        state.auth.userIsSuperAdmin = action.payload.userIsSuperAdmin;
        state.auth.ok = action.payload.ok;
        state.auth.msg = action.payload.msg;
    })

    builder.addCase(USER_LOGOUT, (state, action) => {
        state.auth = initialState.auth;
    })
    
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
    builder.addCase(GET_FAQS.fulfilled, (state, action) => {
        state.faqs = action.payload
    })
    builder.addCase(POST_FAQS.fulfilled, (state, action) => {
        state.faqs = action.payload
        console.log(state)
    })
})