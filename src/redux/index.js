import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/User";
import productSlice from "./product/Product";
import cartSlice from "./cart/Cart";

export const store = configureStore({
    reducer: {
        user: userSlice,
        product: productSlice,
        cart: cartSlice,
    },
})

