import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
const {REACT_APP_APIURL} = process.env;


export const GET_PRODUCTS = createAsyncThunk(
    'GET_PRODUCTS', async () => {
        const response = await fetch(`${REACT_APP_APIURL}product`);
        // console.log(`${REACT_APP_APIURL}product`)
        return await response.json();
    }
)
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