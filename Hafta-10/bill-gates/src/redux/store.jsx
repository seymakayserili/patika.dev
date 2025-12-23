import {configureStore} from "@reduxjs/toolkit";
import ProductsSlice from "./Products/productsSlice"



export const store = configureStore({
    reducer:{
        products : ProductsSlice,

    }
})