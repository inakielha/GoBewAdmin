import { createAsyncThunk } from "@reduxjs/toolkit";
const {REACT_APP_APIURL} = process.env;


export const GET_PRODUCTS = createAsyncThunk(
    'GET_PRODUCTS', async () => {
        const response = await fetch(`${REACT_APP_APIURL}product`);
        // console.log(`${REACT_APP_APIURL}product`)
        return await response.json();
    }
)