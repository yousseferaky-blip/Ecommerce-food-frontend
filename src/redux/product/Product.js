import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API, PRODUCTS } from "../../components/Api";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    try {
      const response = await axios.get(`${API}/${PRODUCTS}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      });
  
      builder.addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.data = action.payload;
      });
  
      builder.addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.data = [];
      });
    },
  });

export default productSlice.reducer;
