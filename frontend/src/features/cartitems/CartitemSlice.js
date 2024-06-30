import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchCartitems = createAsyncThunk("fetchCartitems", async () =>{
    const data = await axios.get('http://127.0.0.1:8000/api/products/');
    return data;
});

const cartitemSlice = createSlice({
    name :"cartitem",
    initialState : {
        items : []
    },

    extraReducers: (builder) => {
        builder.addCase(fetchCartitems.fulfilled, (state, action) =>{
            state.items = action.payload;
        });

    }

});

export default cartitemSlice.reducer;