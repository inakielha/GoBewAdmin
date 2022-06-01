import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const { REACT_APP_APIURL } = process.env;

export const USER_LOGIN = createAsyncThunk(
    'USER_LOGIN', async (userEmail, userPassword) => {
        const response = await axios.get(`${REACT_APP_APIURL}users/authAdmin`, { userEmail, userPassword });
        const body = await response.json()
        if(body.ok){
            localStorage.setItem('token', body.user.token); 
            localStorage.setItem('token-init-date', new Date().getTime());
        }
    }
)
export const GET_PRODUCTS = createAsyncThunk(
    'GET_PRODUCTS', async () => {
        const response = await fetch(`${REACT_APP_APIURL}product`);
        // console.log(`${REACT_APP_APIURL}product`)
        return await response.json();
    }
)

export const CREATE_PRODUCT = createAsyncThunk(
    "CREATE_PRODUCT", async (productInfo) => {
        try {
            const res = await axios.post(`${REACT_APP_APIURL}product/new`, productInfo);
            return res
        } catch (e) {
            console.log(e)
        }
    }
)

export const CREATE_CATEGORY = createAsyncThunk(
    "CREATE_CATEGORY", async (categ) => {
        try {
            const res = await axios.post(`${REACT_APP_APIURL}categories/new`, categ);
            return res
        } catch (e) {
            console.log(categ)
        }
    }
)

export const GET_CATEGORIES_ADMIN = createAsyncThunk(
    'GET_CATEGORIES_ADMIN', async () => {
        const response = await fetch(`${REACT_APP_APIURL}categories`)
        return await response.json()
    })
    
export const POST_IMAGE_ADMIN = createAsyncThunk(
    "POST_IMAGE_ADMIN", async (image) => {
        try {
            const res = await axios.post(`${REACT_APP_APIURL}images/new`, image);
            return res
        } catch (e) {
            console.log(image)
        }
    }
)

export const ORDER_PRODUCT = createAction(
    'ORDER_PRODUCT', (productsOrder) =>{
        return{
            payload: productsOrder
        }
    }
)
