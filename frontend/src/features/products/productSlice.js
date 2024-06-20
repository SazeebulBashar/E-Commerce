import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    const data  = await axios.get('http://127.0.0.1:8000/api/products/');
    console.log(data.products);
    return data;
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        products: [],
        error: false
},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
                state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.error = false;
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.loading = false;
            state.products = [];
            state.error = true;
        });
    }
});

export default productSlice.reducer;