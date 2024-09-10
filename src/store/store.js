import { configureStore } from "@reduxjs/toolkit";

import ProductReducer from "../../redux/service/productSlice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});
