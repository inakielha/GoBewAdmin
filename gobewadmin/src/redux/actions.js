import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const { REACT_APP_APIURL } = process.env;

export const GET_PRODUCTS = createAsyncThunk(
    'GET_PRODUCTS', async () => {
        const response = await fetch(`${REACT_APP_APIURL}product`);
        return await response.json();
    }
)

export const GET_PRODUCT_BY_ID = createAsyncThunk(
    'GET_PRODUCT_BY_ID', async (id) => {
        const response = await fetch(`${REACT_APP_APIURL}product/${id}`);
        return await response.json();
    }
)

export const CREATE_PRODUCT = createAsyncThunk(
    "CREATE_PRODUCT", async (productInfo) => {
        try {
            const response = await axios.post(`${REACT_APP_APIURL}product/new`, productInfo);
            const body = await response.data;
            return body;
        } catch (e) {
            console.log(e)
            return e.response.data;
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
            // console.log(1, image)
            // console.log(2, `${REACT_APP_APIURL}images/new`)
            const res = await axios.post(`${REACT_APP_APIURL}images/new`, image);
            // console.log(3, res)
            return res.data
        } catch (e) {
            console.log(e)
        }
    }
)

export const SEARCH_PRODUCT = createAsyncThunk(
    'SEARCH_PRODUCT', async (productName) => {
        const response = await fetch(`${REACT_APP_APIURL}product/nameAll/${productName}`)
        return await response.json()
    }
)

export const SEARCH_USERS = createAsyncThunk(
    'SEARCH_USERS', async (userName) => {
        const response = await fetch(`${REACT_APP_APIURL}users/byName/${userName}`)
        return await response.json()
    }
)


export const USER_CREATE = createAsyncThunk(
    'USER_CREATE', async (values) => {
            try {
                const response = await axios.post(`${REACT_APP_APIURL}users/new`, values)
                const body = await response.data
                console.log(body)
                return body
            } catch (error) {
                console.log(error.response.data)
                return error.response.data
            }
    }
)

export const GET_USERS = createAsyncThunk(
    'GET_USERS', async () => {
        const response = await fetch(`${REACT_APP_APIURL}users/all`)
        return await response.json()
    }
)

export const GET_USERS_ADMINS = createAsyncThunk(
    'GET_USERS_ACTIVE', async (isAdmin) => {
        const response = await fetch(`${REACT_APP_APIURL}users/allByAdmin/${isAdmin}`)
        return await response.json()
    }
)

export const GET_USERS_ACTIVE = createAsyncThunk(
    'GET_USERS_ADMINS', async (isActive) => {
        const response = await fetch(`${REACT_APP_APIURL}users/allByActive/${isActive}`)
        return await response.json()
    }
)

export const PUT_USERS = createAsyncThunk(
    'PUT_USERS', async (values) => {
        const response = await axios.put(`${REACT_APP_APIURL}users`, values)
        const body = await response.data
        return body
    }
)

export const PUT_PRODUCT = createAsyncThunk(
    'PUT_PRODUCT', async (values) => {
        const response = await axios.put(`${REACT_APP_APIURL}product`, values)
        const body = await response.data
        return body
    }
)

export const PUT_USER_ACTIVE = createAsyncThunk(
    'PUT_USER_ACTIVE', async (values) => {
        const response = await axios.put(`${REACT_APP_APIURL}users/isActive`, values)
        const body = await response.data
        return body
    }
)

export const PUT_PRODUCT_ACTIVE = createAsyncThunk(
    'PUT_PRODUCT_ACTIVE', async (values) => {
        const response = await axios.put(`${REACT_APP_APIURL}product/isActive`, values)
        const body = await response.data
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
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
)

export const PUT_FAQS = createAsyncThunk(
    'PUT_FAQS', async (faq) => {
        const response = await axios.put(`${REACT_APP_APIURL}faqs`, faq)
        const body = await response.data
        return body
    }
)

export const GET_ALL_ORDERS = createAsyncThunk(
    'GET_ALL_ORDERS', async () => {
        const response = await fetch(`${REACT_APP_APIURL}payments/order/getAll`)
        return await response.json()
    }
)

export const GET_ORDER_BY_ID = createAsyncThunk(
    'GET_ORDER_BY_ID', async (orderId) => {
        const response = await fetch(`${REACT_APP_APIURL}payments/admin/order/byId/${orderId}`)
        return await response.json()
    }
)

export const CANCEL_STATUS_ORDER = createAsyncThunk(
    'CANCEL_STATUS_ORDER', async (orderId) => {
        const response = await fetch(`${REACT_APP_APIURL}payments/cancelled?orderId=${orderId}`)
        return await response.json()
    }
)

export const SEND_STATUS_ORDER = createAsyncThunk(
    'SEND_STATUS_ORDER', async (orderId) => {
        const response = await fetch(`${REACT_APP_APIURL}payments/delivered?orderId=${orderId}`)
        return await response.json()
    }
)

export const RECIEVE_STATUS_ORDER = createAsyncThunk(
    'RECIEVE_STATUS_ORDER', async (orderId) => {
        const response = await fetch(`${REACT_APP_APIURL}payments/arrived?orderId=${orderId}`)
        return await response.json()
    }
)

export const ORDER_ORDERS = createAction(
    'ORDER_ORDERS', (ordersOrder) => {
        return {
            payload: ordersOrder
        }
    }
)