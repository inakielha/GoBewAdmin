import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const { REACT_APP_APIURL } = process.env;

export const USER_LOGIN = createAsyncThunk(
    'USER_LOGIN', async (values) => {
        try {
            const response = await axios.post(`${REACT_APP_APIURL}users/authAdmin`, values);
            if(response.data.ok){
                localStorage.setItem('token', response.data.token); 
                localStorage.setItem('token-init-date', new Date().getTime());
            }
            return response.data;
        } catch (error) {
            return {
                ok: false,
                msg: 'Usuario no encontrado',
                userId:'',
                userEmail: '',
                userFirstName: '',
                userLastName: '',
                userIsAdmin: false,
                userIsSuperAdmin: false,
            }
        }
  }
);
export const GET_PRODUCTS = createAsyncThunk(
    'GET_PRODUCTS', async () => {
        const response = await fetch(`${REACT_APP_APIURL}product`);
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

export const SEARCH_PRODUCT = createAsyncThunk(
    'SEARCH_PRODUCT', async (productName) => {
        const response = await fetch(`${REACT_APP_APIURL}product/name/${productName}`)
        return await response.json()
    }
)

export const ORDER_PRODUCT = createAction(
    'ORDER_PRODUCT', (productsOrder) =>{
        return{
            payload: productsOrder
        }
    }
)
