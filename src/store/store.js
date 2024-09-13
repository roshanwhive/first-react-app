import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../../redux/slice/productSlice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    // eslint-disable-next-line no-undef
    devTools: process.env.NODE_ENV !== "production",
  },
});
