/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { ProductAction } from "../action/productAction";

const initialState = {
  allProduct: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: [],
};

export const getAllProduct = createAsyncThunk(
  "get_all_product",
  async (thunkAPI) => {
    try {
      return await ProductAction.getAllProductData();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const ProductSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        console.log(action);
        state.allProduct = action.payload?.products;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

const ProductReducer = ProductSlice.reducer;

export default ProductReducer;
