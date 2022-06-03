import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const { REACT_APP_APIURL } = process.env;

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
            console.log(e)
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
            console.log(e)
        }
    }
)

export const SEARCH_PRODUCT = createAsyncThunk(
    'SEARCH_PRODUCT', async (productName) => {
        const response = await fetch(`${REACT_APP_APIURL}product/name/${productName}`)
        return await response.json()
    }
)

export const USER_CREATE = createAsyncThunk(
    'USER_CREATE', async (values) => {
        console.log(URL, `${REACT_APP_APIURL}users/new`)
        console.log(values)
        const response = await axios.post(`${REACT_APP_APIURL}users/new`, values)
        const body = await response.json()
        return body
    }
)

export const GET_USERS = createAsyncThunk(
    'GET_USERS', async () => {
        const response = await fetch(`${REACT_APP_APIURL}users/all`)
        return await response.json()
    }
)

export const PUT_USERS = createAsyncThunk(
    'PUT_USERS', async (values) => {
        const response = await axios.put(`${REACT_APP_APIURL}users`, values)
        const body = await response.json()
        return body
    }
)



export const ORDER_PRODUCT = createAction(
    'ORDER_PRODUCT', (productsOrder) => {
        return {
            payload: productsOrder
        }
    }
)

export const GET_FAQS = createAsyncThunk(
    'GET_FAQS', async () => {
        const response = await fetch(`${REACT_APP_APIURL}faqs`)
        return await response.json()
    }
)

export const POST_FAQS = createAsyncThunk(
    'POST_FAQS', async (faq) => {
        try {
            const response = await axios.post(`${REACT_APP_APIURL}faqs`, faq)
            console.log(response)
            return response
        } catch (error) {
            console.log(error)
        }
    }
)
