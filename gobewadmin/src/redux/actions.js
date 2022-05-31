import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
const {REACT_APP_APIURL} = process.env;

export const GET_PRODUCTS = createAsyncThunk(
    'GET_PRODUCTS', async () => {
        const response = await fetch(`${REACT_APP_APIURL}product`);
        // console.log(`${REACT_APP_APIURL}product`)
        return await response.json();
    }
)
<<<<<<< HEAD
export const POST_IMAGE_ADMIN = createAsyncThunk(
    "POST_IMAGE_ADMIN", async (image) => {
        try{
            const res = await axios.post(`${REACT_APP_APIURL}images/new`,image);
            return res
        }catch (e){
            console.log(image)
        }
    }
)
=======

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
>>>>>>> 844a7ee205a655c144f7cd66533146d66e559796
