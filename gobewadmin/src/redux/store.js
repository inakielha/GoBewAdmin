import {configureStore} from "@reduxjs/toolkit";
import {adminReducer} from "./reducer";

export const store = configureStore({
    reducer: {adminReducer},
    devTools:true
});