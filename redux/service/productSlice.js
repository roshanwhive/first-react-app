/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { ProductService } from "../reducer/prodReducer";

const initialState = {
  allProduct: [],
  clientDetail: {},
  isSuccess: false,
  isLoading: false,
};

export const getAllProduct = createAsyncThunk(
  "get_all_product",
  async (thunkAPI) => {
    try {
      return await ProductService.getAllProductData();
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
        state.allClient = [];
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allProduct = action?.payload?.data;
        state.isSuccess = true;
      })
      .addCase(getAllProduct.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.allProduct = [];
      });
  },
});

const ProductReducer = ProductSlice.reducer;

export default ProductReducer;
