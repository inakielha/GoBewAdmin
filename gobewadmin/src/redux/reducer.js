import { createReducer } from "@reduxjs/toolkit";
import { GET_PRODUCTS, CREATE_PRODUCT, CREATE_CATEGORY, GET_CATEGORIES_ADMIN, POST_IMAGE_ADMIN, ORDER_PRODUCT, USER_LOGIN } from "./actions";


const initialState = {
    products: [],
    product: {},
    categories: [],
    auth: {
        userId:'',
        userEmail: '',
        userName: '',
        userLastName: '',
        userIsAdmin: false,
        userIsSuperAdmin: false
    }
}

export const adminReducer = createReducer(initialState, (builder) => {
    builder.addCase(USER_LOGIN.fulfilled, (state, action) => {
        state.auth.userId = action.payload.user.userId;
        state.auth.userEmail = action.payload.user.userEmail;
        state.auth.userName = action.payload.user.userName;
        state.auth.userLastName = action.payload.user.userLastName;
        state.auth.userIsAdmin = action.payload.user.userIsAdmin;
        state.auth.userIsSuperAdmin = action.payload.user.userIsSuperAdmin;
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
        state.product = action.payload
    })
    builder.addCase(ORDER_PRODUCT, (state, action)=>{
        state.products = action.payload
    })
})